import Image from "next/image";

/**
 * A plate: a photograph printed on the sheet.
 *
 * The duotone — ink through claret to paper, with the claret plate set a
 * hair out of register — is made once in public/plates/, so the press run
 * costs the browser nothing. The halftone screen is drawn in CSS so it
 * stays crisp at every size the plate is placed at.
 *
 * cut — a cut-out subject, printed unaided on the sheet rather than in a box.
 */
const Plate = ({
  src,
  alt = "",
  cut = false,
  screen = true,
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
          className={`plate-cut__img object-contain ${imgClassName}`}
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
        className={`plate__img object-cover ${imgClassName}`}
        style={{ objectPosition }}
      />
      {screen ? (
        <>
          <span aria-hidden className="plate__screen plate__screen--ink" />
          <span aria-hidden className="plate__screen plate__screen--claret" />
        </>
      ) : null}
    </span>
  );
};

export default Plate;
