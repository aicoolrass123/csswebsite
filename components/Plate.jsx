import Image from "next/image";

/**
 * A plate: a photograph printed on the sheet.
 *
 * Natural colour, graded once in public/plates/ by scripts/print-plate.py
 * so every photograph shares one look and the browser does no work. The
 * optional halftone screen is drawn in CSS so it stays crisp at every size
 * the plate is placed at; it is off by default because over colour it
 * reads as a mesh across the face.
 *
 * cut — a cut-out subject, printed unaided on the sheet rather than in a box.
 */
const Plate = ({
  src,
  alt = "",
  cut = false,
  screen = false,
  priority = false,
  sizes = "(min-width: 1024px) 40vw, 100vw",
  className = "",
  imgClassName = "",
  objectPosition = "50% 50%",
}) => {
  if (cut) {
    return (
      <span className={`plate-cut ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-contain ${imgClassName}`}
          style={{ objectPosition }}
        />
      </span>
    );
  }

  return (
    <span className={`plate ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover ${imgClassName}`}
        style={{ objectPosition }}
      />
      {screen ? <span aria-hidden className="plate__screen" /> : null}
    </span>
  );
};

export default Plate;
