"""Print a photograph as a plate for public/plates/.

    python3 scripts/print-plate.py SOURCE DEST [WIDTH HEIGHT]

Natural colour, graded so every plate on the site looks like it came from
the same camera: levels are set on brightness alone so skin keeps its own
hue, saturation is eased back a little, and the deepest shadows settle
towards the site's ink (#0B1120) instead of flat black. A wide, gentle
unsharp mask gives faces the local contrast phone photos lack.

Nothing is tinted claret — the brand colour belongs to type and controls,
never to skin. Needs only Pillow.
"""
import sys

from PIL import Image, ImageChops, ImageEnhance, ImageFilter, ImageOps

INK = (11, 17, 32)
SATURATION = 0.9
SHADOW_INK = 0.55  # how far black moves towards the ink


def curve(v):
    """A soft S, mid-tones opened a touch."""
    x = (v / 255) ** 0.94
    s = x * x * (3 - 2 * x)  # smoothstep
    return round(max(0, min(1, 0.7 * x + 0.3 * s)) * 255)


def levels(rgb, alpha):
    """Black and white points taken from brightness, applied to every
    channel alike, so stretching contrast never shifts the colour."""
    hist = rgb.convert("L").histogram(mask=alpha)
    total = sum(hist)
    lo_cut, hi_cut = total * 0.003, total * 0.002
    lo, acc = 0, 0
    while acc + hist[lo] <= lo_cut:
        acc += hist[lo]
        lo += 1
    hi, acc = 255, 0
    while acc + hist[hi] <= hi_cut:
        acc += hist[hi]
        hi -= 1
    span = max(hi - lo, 1)
    lut = [curve(max(0, min(255, (v - lo) * 255 / span))) for v in range(256)]
    return rgb.point(lut * 3)


def print_plate(src, dest, size=None):
    im = Image.open(src)
    im = ImageOps.exif_transpose(im)
    keep_alpha = dest.lower().endswith(".png") and im.mode in ("RGBA", "LA")
    alpha = im.getchannel("A") if keep_alpha else None
    rgb = im.convert("RGB")

    if size and rgb.size != size:
        rgb = ImageOps.fit(rgb, size, Image.LANCZOS)
        if alpha is not None:
            alpha = ImageOps.fit(alpha, size, Image.LANCZOS)

    # Small, re-saved sources carry JPEG blocking that sharpening would
    # print as grit on skin; settle it first.
    rgb = rgb.filter(ImageFilter.GaussianBlur(0.5))
    rgb = levels(rgb, alpha)
    rgb = ImageEnhance.Color(rgb).enhance(SATURATION)

    long_edge = max(rgb.size)
    rgb = rgb.filter(
        ImageFilter.UnsharpMask(radius=long_edge / 28, percent=12, threshold=0)
    )
    rgb = rgb.filter(ImageFilter.UnsharpMask(radius=0.9, percent=25, threshold=4))

    # Lift the black point to ink: out = ink + img * (1 - ink).
    floor = tuple(round(c * SHADOW_INK) for c in INK)
    scale = Image.new("RGB", rgb.size, tuple(255 - c for c in floor))
    rgb = ImageChops.add(
        ImageChops.multiply(rgb, scale), Image.new("RGB", rgb.size, floor)
    )

    if alpha is not None:
        rgb.putalpha(alpha)
        rgb.save(dest, optimize=True)
    else:
        rgb.save(dest, quality=88, optimize=True, progressive=True)


if __name__ == "__main__":
    size = (int(sys.argv[3]), int(sys.argv[4])) if len(sys.argv) == 5 else None
    print_plate(sys.argv[1], sys.argv[2], size)
