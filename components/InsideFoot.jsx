import Link from "next/link";

import CropMarks from "./CropMarks";

/* The close of an inside page: the paper's own promise, printed on the one
   claret band the world allows. The contact details live in the masthead,
   the running foot and the footer; they are not repeated here. */
const InsideFoot = ({
  kicker = "Church Street Solicitors",
  note,
  secondaryHref = "/our-fee",
  secondaryLabel = "Our fees",
}) => (
  <section
    aria-label="Our promise"
    className="dark-ground relative overflow-hidden bg-claret"
  >
    <CropMarks />
    <div className="relative mx-auto max-w-content px-5 py-12 md:px-8 md:py-14">
      <div className="rule-double-inverse" aria-hidden />
      <div className="mt-3 flex items-baseline justify-between gap-6 text-[10px] uppercase tracking-folio text-parchment/70">
        <span>{kicker}</span>
        {note ? <span className="hidden md:block">{note}</span> : null}
        <span className="text-right">
          Enquiries answered within one working day
        </span>
      </div>

      <div className="mt-8 grid gap-7 md:grid-cols-12 md:gap-0">
        <h2 className="balance font-display text-[clamp(1.6rem,2.7vw,2.3rem)] font-medium leading-[1.06] tracking-display text-parchment md:col-span-7 md:pr-14">
          If we cannot help you, we will tell you straight away.
        </h2>
        <div className="md:col-span-5 md:border-l md:border-parchment/25 md:pl-12">
          <p className="text-[15.5px] leading-[1.7] text-parchment/85">
            If we can, we will agree the fee and the plan in writing before
            anything begins.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="bg-ink px-6 py-3.5 text-center text-[11px] font-semibold uppercase tracking-caps text-parchment transition hover:bg-parchment hover:text-ink"
            >
              Book an appointment
            </Link>
            <Link
              href={secondaryHref}
              className="border border-parchment/40 px-6 py-3.5 text-center text-[11px] font-semibold uppercase tracking-caps text-parchment transition hover:border-parchment hover:bg-parchment/10"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default InsideFoot;
