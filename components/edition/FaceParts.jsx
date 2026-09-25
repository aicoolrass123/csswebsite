/* Shared furniture for the four faces of the edition. */

const TONES = {
  ink: {
    shell: "bg-ink text-parchment",
    rule: "border-parchment/15",
    meta: "text-parchment/60",
    folio: "text-parchment/70",
    display: "text-parchment",
    body: "text-parchment/75",
    label: "text-parchment/60",
  },
  paper: {
    shell: "bg-paper text-ink",
    rule: "border-ink/12",
    meta: "text-slatebody",
    folio: "text-claret",
    display: "text-ink",
    body: "text-slatebody",
    label: "text-slatebody",
  },
  bone: {
    shell: "bg-parchment text-ink",
    rule: "border-ink/12",
    meta: "text-slatebody",
    folio: "text-claret",
    display: "text-ink",
    body: "text-slatebody",
    label: "text-slatebody",
  },
};

export const tone = (name) => TONES[name] ?? TONES.ink;

/* The face's type area. On the staged sheet it clears the fold. */
export const FaceShell = ({ children, tone: toneName = "ink", className = "" }) => (
  <div
    className={`face-shell mx-auto flex h-full max-w-content flex-col px-5 py-7 md:px-8 md:py-8 lg:pr-24 ${tone(toneName).shell} ${className}`}
  >
    {children}
  </div>
);

/* The running foot: a book's page is signed at the foot, not the head. */
export const FaceFoot = ({
  kicker,
  folio,
  note,
  tone: toneName = "ink",
  className = "",
}) => {
  const t = tone(toneName);
  return (
    <div
      className={`flex items-baseline justify-between gap-4 border-t pt-3.5 text-[10px] uppercase tracking-folio ${t.rule} ${t.meta} ${className}`}
    >
      <span className="hidden min-w-0 truncate sm:block">{kicker}</span>
      {note ? <span className="hidden truncate md:block">{note}</span> : null}
      <span className={`tnum shrink-0 ${t.folio}`}>{folio}</span>
    </div>
  );
};
