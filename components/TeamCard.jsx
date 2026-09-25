import Plate from "./Plate";

const numerals = ["I", "II", "III", "IV", "V", "VI"];

/* A member of the firm: a plate printed on the stock, ruled off like every
   other entry in the edition, with the title on the caption line. */
const TeamCard = ({
  index = 0,
  name,
  knownAs,
  quals,
  role,
  areas,
  plate,
  objectPosition = "50% 50%",
}) => (
  <article className="border-t border-ink/12 pt-5 md:pt-6">
    <figure className="relative aspect-[4/5] w-full">
      {plate ? (
        <Plate
          src={plate}
          alt={`${name}, ${role} at Church Street Solicitors.`}
          sizes="(min-width: 768px) 44vw, 100vw"
          className="absolute inset-0 h-full w-full"
          objectPosition={objectPosition}
        />
      ) : (
        /* No portrait yet: an empty plate frame, so the grid stays even. */
        <div className="absolute inset-0 flex items-center justify-center border border-ink/12 bg-ink/[0.03]">
          <span className="text-[10px] uppercase tracking-folio text-slatebody">
            Portrait to follow
          </span>
        </div>
      )}
    </figure>

    <div className="mt-3 flex items-baseline justify-between gap-6 text-[10px] uppercase tracking-folio">
      <span className="text-slatebody">Plate {numerals[index]}</span>
      <span className="text-claret">{role}</span>
    </div>

    <h3 className="mt-3 font-display text-[clamp(1.5rem,2.1vw,2rem)] font-medium leading-[1.05] tracking-display text-ink">
      {name}
    </h3>
    {knownAs ? (
      <p className="mt-1 font-display text-[17px] italic tracking-display text-claret">
        Known as {knownAs}
      </p>
    ) : null}
    <p className="mt-2 text-[10.5px] uppercase tracking-caps text-slatebody">
      {quals}
    </p>
    {areas ? (
      <p className="mt-3 text-[15px] leading-[1.7] text-slatebody">{areas}</p>
    ) : null}
  </article>
);

export default TeamCard;
