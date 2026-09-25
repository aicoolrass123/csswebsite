import Link from "next/link";
import { slideTab } from "@/Data";

import Plate from "../Plate";
import { FaceFoot, FaceShell } from "./FaceParts";

const contents = [
  {
    index: 1,
    line: "Six disciplines, the fee in writing, and who runs your matter.",
  },
  {
    index: 2,
    line: "What clients wrote, and the office on Church Street.",
  },
  {
    index: 3,
    line: "The phone number, the hours, and a form that reaches a solicitor.",
  },
];

const LeadFace = ({ face, onTurn }) => {
  const item = slideTab[0];

  return (
    <FaceShell tone="ink">
      <div className="grid flex-1 gap-9 lg:grid-cols-12 lg:gap-0">
        <div className="flex min-w-0 flex-col lg:col-span-7 lg:pr-16">
          <h1 className="balance font-display text-[clamp(2.7rem,5.8vw,5.2rem)] font-medium leading-[0.96] tracking-display text-parchment">
            {item.title}
          </h1>

          <p className="mt-7 max-w-[35rem] text-[17.5px] leading-[1.65] text-parchment/70 md:text-[19.5px]">
            {item.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={item.ctaPrimaryHref}
              className="bg-claret px-7 py-[1.15rem] text-center text-[11px] font-semibold uppercase tracking-caps text-parchment transition hover:bg-parchment hover:text-ink"
            >
              {item.ctaPrimary}
            </Link>
            <Link
              href={item.ctaSecondaryHref}
              className="border border-parchment/25 px-7 py-[1.15rem] text-center text-[11px] font-semibold uppercase tracking-caps text-parchment/85 transition hover:border-parchment hover:text-parchment"
            >
              {item.ctaSecondary}
            </Link>
          </div>

          <div className="mt-9 border-t border-parchment/15 pt-4 lg:mt-auto">
            <p className="flex items-baseline gap-4 text-[13.5px] leading-snug text-parchment/60">
              <span aria-hidden className="h-px w-6 shrink-0 translate-y-[-4px] bg-claret" />
              {item.caption}
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:col-span-5 lg:border-l lg:border-parchment/15 lg:pl-12">
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-auto lg:min-h-0 lg:flex-1">
            <Plate
              src="/plates/lead.jpg"
              alt="A client's matter being prepared at the office in Stratford."
              priority
              sizes="(min-width: 1024px) 30vw, 100vw"
              className="absolute inset-0 h-full w-full"
              objectPosition="62% 26%"
            />
          </div>
          <p className="mt-3 border-t border-parchment/12 pt-3 text-[10px] uppercase tracking-folio text-parchment/60">
            Plate {face.folio} · {face.kicker}
          </p>
        </div>
      </div>

      <ul className="mt-9 flex flex-wrap gap-x-10 gap-y-2 border-t border-parchment/15 pt-5 text-[10.5px] uppercase tracking-caps text-parchment/60">
        <li>Established June 2015</li>
        <li>Fixed fees in writing</li>
        <li>Answered within one working day</li>
      </ul>

      <div className="mt-8">
        <p className="text-[10px] uppercase tracking-folio text-parchment/55">
          In this edition
        </p>
        <div className="mt-3 grid border-t border-parchment/15 sm:grid-cols-3">
          {contents.map((entry, i) => {
            const label = [
              { folio: "II", name: "The register" },
              { folio: "III", name: "The letters" },
              { folio: "IV", name: "The notice" },
            ][i];
            return (
              <button
                key={label.name}
                type="button"
                onClick={() => onTurn(entry.index)}
                className={`group flex items-baseline gap-3 border-b border-parchment/12 py-4 text-left transition sm:border-b-0 ${
                  i > 0 ? "sm:border-l sm:border-parchment/15 sm:pl-6" : "sm:pr-6"
                }`}
                aria-label={`Turn to page ${label.folio}, ${label.name}`}
              >
                <span className="tnum shrink-0 text-[10.5px] uppercase tracking-caps text-claret-soft">
                  {label.folio}
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-[22px] leading-none tracking-display text-parchment transition group-hover:text-claret-bright">
                    {label.name}
                  </span>
                  <span className="mt-1.5 block text-[13px] leading-snug text-parchment/65">
                    {entry.line}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="ml-auto shrink-0 self-center text-[14px] text-parchment/50 transition group-hover:translate-x-1 group-hover:text-claret-bright"
                >
                  →
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <FaceFoot
        kicker="Church Street Solicitors · Established June 2015"
        note="SRA-regulated practice"
        folio={`Folio ${face.folio} / IV`}
        tone="ink"
        className="mt-8"
      />
    </FaceShell>
  );
};

export default LeadFace;
