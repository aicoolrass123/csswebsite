import CropMarks from "./CropMarks";

/* The head of an inside page: the paper's running head, the dateline, and
   the page's own statement. Not every page needs a plate, so the head is
   the same whether a picture follows or not. */
const InsideHead = ({ runningHead, folio, aside, title, lead, children }) => (
  <section className="dark-ground relative overflow-hidden bg-ink pt-[4.5rem] md:pt-[7.5rem]">
    <CropMarks />
    <div className="relative mx-auto max-w-content px-5 pb-10 pt-9 md:px-8 md:pb-12 md:pt-11">
      <div className="rule-double-inverse" aria-hidden />
      <div className="mt-3 flex items-baseline justify-between gap-6 text-[10px] uppercase tracking-folio text-parchment/60">
        <span>{runningHead}</span>
        {aside ? (
          <span className="hidden text-right sm:block">{aside}</span>
        ) : null}
        <span className="tnum text-parchment">{folio}</span>
      </div>

      <div className="mt-9 grid gap-7 md:mt-11 md:grid-cols-12 md:gap-0">
        <h1 className="balance font-display text-[clamp(2.2rem,4.4vw,3.9rem)] font-medium leading-[1] tracking-display text-parchment md:col-span-7 md:pr-14">
          {title}
        </h1>
        {lead ? (
          <p className="max-w-[36rem] text-[16.5px] leading-[1.68] text-parchment/75 md:col-span-5 md:border-l md:border-parchment/15 md:pl-12">
            {lead}
          </p>
        ) : null}
      </div>

      {children}
    </div>
  </section>
);

export default InsideHead;
