const SectionHead = ({
  runningHead,
  aside,
  title,
  lead,
  tone = "paper",
  titleClassName = "",
}) => {
  const inverse = tone === "ink";
  return (
    <header>
      <div
        className={inverse ? "rule-double-inverse" : "rule-double"}
        aria-hidden
      />
      <div
        className={`mt-3 flex items-baseline justify-between gap-6 text-[10px] uppercase tracking-folio ${
          inverse ? "text-parchment/55" : "text-slatebody"
        }`}
      >
        <span>{runningHead}</span>
        {aside ? <span className="text-right">{aside}</span> : null}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-12 md:gap-0">
        <h2
          className={`font-display text-[34px] font-medium leading-[1.02] tracking-display md:col-span-7 md:pr-12 md:text-[46px] lg:text-[54px] ${
            inverse ? "text-parchment" : "text-ink"
          } ${titleClassName}`}
        >
          {title}
        </h2>
        {lead ? (
          <p
            className={`max-w-[38rem] text-[16.5px] leading-[1.72] md:col-span-5 md:border-l md:pl-10 lg:pl-14 ${
              inverse
                ? "border-parchment/15 text-parchment/70"
                : "border-ink/12 text-slatebody"
            }`}
          >
            {lead}
          </p>
        ) : null}
      </div>
    </header>
  );
};

export default SectionHead;
