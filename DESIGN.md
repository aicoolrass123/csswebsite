---
name: Church Street Solicitors
description: A legal broadsheet printed in two inks — the marketing site for a Stratford high-street practice.
colors:
  ink: "#0B1120"
  ink-deep: "#070B14"
  ink-soft: "#141C2E"
  ink-muted: "#26314B"
  claret: "#7B2130"
  claret-deep: "#5A1622"
  claret-bright: "#9B3348"
  claret-soft: "#F2E2E5"
  parchment: "#F6F5F1"
  paper: "#FBFAF7"
  linen: "#E6E3DB"
  slate-body: "#525866"
typography:
  display:
    fontFamily: "var(--font-display), Georgia, Times New Roman, serif"
    fontSize: "clamp(2.7rem, 5.8vw, 5.2rem)"
    fontWeight: 500
    lineHeight: 0.96
    letterSpacing: "-0.022em"
  headline:
    fontFamily: "var(--font-display), Georgia, Times New Roman, serif"
    fontSize: "clamp(2rem, 3.6vw, 3.1rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.022em"
  title:
    fontFamily: "var(--font-display), Georgia, Times New Roman, serif"
    fontSize: "clamp(1.25rem, 1.8vw, 1.6rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.022em"
  body:
    fontFamily: "var(--font-body), Georgia, serif"
    fontSize: "16.5px"
    fontWeight: 400
    lineHeight: 1.68
    letterSpacing: "normal"
  label:
    fontFamily: "var(--font-sans), system-ui, sans-serif"
    fontSize: "10.5px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.16em"
  folio:
    fontFamily: "var(--font-sans), system-ui, sans-serif"
    fontSize: "10px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.24em"
rounded:
  none: "0px"
  sm: "2px"
  md: "3px"
  lg: "4px"
  "2xl": "6px"
  full: "9999px"
spacing:
  gutter-sm: "20px"
  gutter-md: "32px"
  face-padding-y: "28px"
  face-padding-y-md: "32px"
  rule-gap: "12px"
  band-padding-y: "14px"
components:
  button-primary:
    backgroundColor: "{colors.claret}"
    textColor: "{colors.parchment}"
    rounded: "{rounded.sm}"
    padding: "16px 28px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.parchment}"
  button-inverse:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.parchment}"
    rounded: "{rounded.sm}"
    padding: "14px 24px"
    typography: "{typography.label}"
  button-inverse-hover:
    backgroundColor: "{colors.claret}"
    textColor: "{colors.parchment}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.parchment}"
    rounded: "{rounded.none}"
    padding: "16px 28px"
    typography: "{typography.label}"
  field:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "9px 0"
  field-inverse:
    backgroundColor: "transparent"
    textColor: "{colors.parchment}"
    rounded: "{rounded.none}"
    padding: "9px 0"
  plate:
    backgroundColor: "{colors.ink-deep}"
    rounded: "{rounded.none}"
  coupon-panel:
    backgroundColor: "{colors.claret}"
    textColor: "{colors.parchment}"
    rounded: "{rounded.none}"
---

# Design System: Church Street Solicitors

## Overview

**Creative North Star: "The Folded Broadsheet"**

The site is a printed legal paper, not a web page: one sheet folded into four faces, turned by hand, with the folio at the foot and the standing facts printed where a reader's thumb already is. Everything the visitor is deciding — is this firm competent, honest, reachable — is answered in the furniture of the form itself: running heads, rules, folios, halftone plates, crop marks. Nothing is a card; a rule does the work a border would.

The register is sober and unadorned. Claret is the one wet ink and it is spent sparingly: the primary action, the numerals, the drawn rule. Light and dark are not decoration but the two sides of the paper — the lead and the notice print on ink, the register and the letters print on stock — so the reader feels the sheet turn rather than a scroll restart.

Density alternates deliberately. The register page is close-set and indexical; the letters page opens out around one portrait printed straight on the paper with its claret plate a hair out of register. Typography carries the authority that photography would otherwise have to borrow.

**Key Characteristics:**
- One sheet, four faces, turned; equal page heights; a folio rail at the foot of every face.
- Two inks only — claret and ink — laid on parchment, paper, bone or linen stock.
- Duotone plates with real halftone screening, printed as rasters, never as CSS filters.
- Rules, folios and gutters instead of borders, cards and shadows.
- The phone number, the hours and the address never leave the foot of the sheet.

## Colors

A restrained two-ink press: one claret, one near-black ink, and four paper stocks. No colour is decorative; every value is either an ink or a stock.

### Primary
- **Claret** (#7B2130): the firm's wet ink. Primary actions, the folio numeral, the drawn rule under the folio line, the ink-fill hover on register rows.
- **Claret Bright** (#9B3348): claret at working strength on dark stock — hover states on ink grounds, the folio numeral in a dark rail, the misregistered plate in a cut-out.
- **Claret Deep** (#5A1622): the darkest claret, used inside the plate gradient map and as a settled panel tone on the coupon.

### Neutral
- **Ink** (#0B1120): the night edition. Ground for the lead face, the notice face, the masthead, the band, the rail and the footer; also the ink plate in every duotone.
- **Ink Deep** (#070B14): recessed ground behind a plate before it paints.
- **Ink Soft** (#141C2E): the tinted panel the callback form sits on.
- **Parchment** (#F6F5F1): the default stock — body background, the letters face, text on ink.
- **Paper** (#FBFAF7): a cooler, cleaner stock for the letters face.
- **Linen** (#E6E3DB): the third stock, reserved for plate grounds on light pages.
- **Slate Body** (#525866): body text on light stock only. Never used on ink.

### Named Rules
**The Two-Ink Rule.** There are exactly two inks on this press: claret and ink. Claret never fills more than a control, a numeral or a single band. When a surface needs weight, it takes ink.

**The Wet-Ink Rule.** Claret marks where the reader acts or where the paper numbers itself — a primary button, a folio numeral, a rule under the current page. It is never used for decoration, never for a heading, never as a border.

## Typography

**Display Font:** Bodoni Moda (self-hosted woff2, 400–700 normal and italic, `--font-display`; fallback Georgia, Times New Roman, serif)
**Body Font:** Spectral (self-hosted 300/400/500/600 plus italic 400, `--font-body`; fallback Georgia, serif)
**Label Font:** Hanken Grotesk (self-hosted variable 300–800, `--font-sans`; fallback system-ui, sans-serif)

**Character:** A high-contrast didone for anything the paper says out loud, a low-contrast reading serif for anything it explains, and a neutral grotesque for the machinery — rubrics, folios, buttons. The display face is set tight and large; the reading face is set at a comfortable measure; the label face is always uppercase and widely tracked. All three are self-hosted and loaded through `next/font/local` with `adjustFontFallback: false`.

### Hierarchy
- **Display** (500, `clamp(2.7rem, 5.8vw, 5.2rem)`, 0.96, tracking −0.022em): the lead headline, once per page. Balanced with `text-wrap: balance`.
- **Headline** (500, `clamp(2rem, 3.6vw, 3.1rem)`, 1.02): each face's own heading; also the coupon and the promise line.
- **Title** (500, `clamp(1.25rem, 1.8vw, 1.6rem)`): register entries, proof labels, panel headings.
- **Quote** (italic 400, `clamp(1.5rem, 2.5vw, 2.15rem)`, 1.32): client letters, hung with a negative text-indent so the quote mark sits in the margin.
- **Body** (400, 15–19.5px, 1.55–1.75): measured to about 34–38rem (65–75 characters). Dropcap is available for a standfirst's first letter.
- **Label** (600, 10.5px, 0.16em, uppercase): buttons, navigation, tabular rubrics.
- **Folio** (400, 10px, 0.24em, uppercase): the numbering of the edition — `Folio I / IV`, plate captions, the standing-facts strip.

### Named Rules
**The Two-Register Rule.** Bodoni speaks, Spectral explains, Hanken labels. A sentence that a person reads is Spectral; a number or a label is Hanken; anything set at display scale is Bodoni and Bodoni only.

**The Small-Caps Rule.** Every 10px rubric is uppercase with at least 0.14em of tracking, and carries enough contrast to read on the stock it sits on (≥4.5:1).

## Layout

A 12-column type area, `max-w-content` 80rem, gutters 20px on small screens and 32px from `md`. The sheet is staged only at `min-width: 1024px` and only with JavaScript: four faces in a flex row at `flex: 0 0 100%`, translated as one track. Below that width — and with JavaScript disabled at any width — the same four faces restack in a column and read downwards, which is the entire no-JavaScript edition.

The staged sheet has a minimum height of `clamp(33rem, calc(100svh - 15.5rem), 54rem)`; the tallest face sets the page height and the others stretch to it, so the running foot lands on the same line on every face and the shorter pages carry air at the foot of a column rather than an accidental gap.

Inside a face, a 12-column grid: the lead runs text 7 / plate 5 with a hairline seam; the register runs the six disciplines 7 / proofs 5; the letters run the portrait 5 / the quote and its evidence 7; the notice runs the office and its details 5 / the form 7. Every column that follows a seam carries `lg:border-l` and 48px of padding, and every face clears the fold with `lg:pr-24`.

The vertical rhythm is 4px-based, with three named beats: `mt-6` to `mt-9` between a heading and what follows it, `py-3` to `py-5` inside a ruled list row, and `py-7 md:py-8` as a face's own padding. Space above a heading is always greater than space below it.

## Elevation & Depth

Flat by default, and depth is tonal rather than shadowed. A surface is a stock: ink, paper, parchment or linen. Where a real press would show depth, the page shows it physically — the fold crease is a one-pixel rule with a gradient of ink behind it, a plate sits inside a `plate-frame` hairline, a tinted panel separates the form from the ground. The two `boxShadow` tokens in the Tailwind theme (`card`, `lift`) are legacy and are not used by the edition.

### Named Rules
**The No-Lift Rule.** Nothing floats. If an element needs to be separated, it takes a rule, a stock, or a frame — never a shadow.

## Shapes

Square. The default radius is 2px and is used only to soften buttons and inputs; plates, panels, bands, rails and rules are square at 0. There are no pills, no rounded cards, and no circles.

Borders are always 1px hairlines at low opacity (`border-ink/12`, `border-parchment/15`) or 2–3px rules where the paper is ruling a section off. A coloured left or right stripe is never used. Inputs are ruled slips, not boxes: a single bottom hairline that turns claret on focus.

Assemblies are built from two primitives: the **rule** (a horizontal hairline with a caption, a running head, or a folio riding on it) and the **gutter** (a vertical hairline between two columns or between two faces).

## Components

- **Buttons** — square, uppercase, 11px, tracking 0.16em, 16px vertical padding. Primary is claret fill with parchment text, hover moving to ink on light stock and to parchment on ink. Secondary is a 1px hairline outline that goes to full strength on hover. There is no third ornament: no arrow, no icon, no gradient.
- **Folio tab** — a text button in the rail: numeral in claret, name in parchment, with a 2px current-page underline drawn from the left by `transform: scaleX`.
- **Fold tab** — the crease at the right edge of a face, 52px wide, with a vertical `writing-mode: vertical-rl` caption naming the page it turns to, and a gradient of ink reading as the folded edge catching light.
- **Plate** — a raster duotone at `object-cover` inside a square frame, plus two halftone screens (ink and claret) drawn in CSS, offset 1.5px from each other and multiplied, so the overlap makes a third value. The rasters ship pre-toned from `public/plates/`; the page never tints a photograph at runtime.
- **Plate cut-out** — a subject with alpha printed unaided on the stock, with its claret plate offset behind it as a misregistered silhouette. No frame.
- **Register row** — a full-bleed link row: claret numeral, Bodoni title over a Spectral blurb, arrow at the right edge. Hover wipes ink across the row from the left and reverses the text to parchment.
- **Field** — a ruled slip: transparent, no border except a bottom hairline, 15.5px text, placeholder at 4.5:1 or better, claret caret on light stock and claret-bright on ink. The inverse variant lightens the hairline and the text.
- **Face foot** — the running foot of a page: a hairline with the kicker at the left, a note in the middle, and `Folio X / IV` at the right. It never carries a heading.
- **Wire** — the tape under the masthead: 10.5px uppercase tracked items separated by rotated claret squares, scrolling on a 64s linear loop, paused on hover or focus, with the ink ground fading in at both edges.
- **Coupon** — the stop-press band: claret ground, a double rule, the label row, and a two-column body with the sign-up form on a seam.

## Do's and Don'ts

**Do**
- Do let a rule, a folio or a gutter separate things before reaching for a border or a card.
- Do print photographs as duotone plates with a visible halftone screen, on the stock that suits the page.
- Do keep the phone number, the hours and the address on every face, at the foot of the sheet.
- Do alternate density: a close-set indexical page earns a quiet, open one.
- Do set display type large and tight, and balance it so no line is widowed at the end.
- Do keep every 10px rubric legible on its own stock.

**Don't**
- Don't introduce a third ink, a gradient other than the duotone's, or a tint that is not one of the four stocks.
- Don't put a card, a pill, a rounded panel or a drop shadow on anything.
- Don't animate a layout property; the turn, the rule and the reveal move by transform or opacity only.
- Don't add a kicker or eyebrow above a heading; a running foot at the page's foot is the world's own device.
- Don't put claret on a heading, a paragraph or a border.
- Don't tint a photograph in CSS; a plate is produced as a raster, with provenance embedded.
