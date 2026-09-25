import { slideTab } from "@/Data";

import FormContact1 from "../FormContact1";
import Plate from "../Plate";
import { FaceFoot, FaceShell } from "./FaceParts";

const details = [
  {
    label: "Telephone",
    value: (
      <a
        href="tel:02082210233"
        className="font-display text-[clamp(1.6rem,2.4vw,2.1rem)] leading-none tracking-display text-parchment transition hover:text-claret-bright"
      >
        020 8221 0233
      </a>
    ),
  },
  {
    label: "Address",
    value: (
      <span className="text-[15.5px] leading-snug text-parchment/75">
        12 Church Street, Stratford, London E15 3HX
      </span>
    ),
  },
  {
    label: "Hours",
    value: (
      <span className="text-[15.5px] leading-snug text-parchment/75">
        Mon–Fri 9:30–18:30
        <br />
        Saturday 11:00–14:00 by appointment
      </span>
    ),
  },
  {
    label: "Also at the office",
    value: (
      <span className="text-[15.5px] leading-snug text-parchment/75">
        Commissioners for Oaths
      </span>
    ),
  },
];

const NoticeFace = ({ face }) => {
  const item = slideTab[3];

  return (
    <FaceShell tone="ink">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-0">
        <h2 className="balance font-display text-[clamp(2rem,3.6vw,3.1rem)] font-medium leading-[1.02] tracking-display text-parchment lg:col-span-7 lg:pr-14">
          {item.title}
        </h2>
        <p className="max-w-[34rem] text-[16.5px] leading-[1.68] text-parchment/70 lg:col-span-5 lg:border-l lg:border-parchment/15 lg:pl-12">
          {item.subtitle}
        </p>
      </div>

      <div className="mt-7 grid flex-1 gap-10 lg:mt-9 lg:grid-cols-12 lg:gap-0">
        <div className="flex min-w-0 flex-col lg:col-span-5 lg:pr-14">
          <div className="relative aspect-[21/9] w-full">
            <Plate
              src="/plates/office.jpg"
              alt="The Church Street Solicitors shopfront at 12 Church Street, Stratford."
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="absolute inset-0 h-full w-full"
              objectPosition="50% 34%"
            />
          </div>
          <p className="mt-3 border-t border-parchment/12 pt-3 text-[10px] uppercase tracking-folio text-parchment/60">
            {item.caption}
          </p>

          <dl className="mt-5 border-t border-parchment/15">
            {details.map((detail) => (
              <div
                key={detail.label}
                className="flex flex-col gap-1.5 border-b border-parchment/15 py-2.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <dt className="shrink-0 text-[10px] uppercase tracking-folio text-parchment/60">
                  {detail.label}
                </dt>
                <dd className="sm:text-right">{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="min-w-0 lg:col-span-7 lg:border-l lg:border-parchment/15 lg:pl-12">
          <FormContact1 tone="ink" />
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-2 border-t border-parchment/15 pt-4 md:flex-row md:items-baseline md:justify-between md:gap-10">
        <p className="balance font-display text-[clamp(1.4rem,2.3vw,2rem)] leading-tight tracking-display text-parchment">
          Honest, reliable advice, in plain English.
        </p>
        <p className="max-w-[38rem] text-[14px] leading-[1.65] text-parchment/65">
          If we cannot help you, we will tell you straight away and point you in
          the right direction. If we can, we will agree the fee and the plan in
          writing before anything begins.
        </p>
      </div>

      <FaceFoot
        kicker="The notice · answered within one working day"
        note="Saturday appointments available"
        folio={`Folio ${face.folio} / IV`}
        tone="ink"
        className="mt-8"
      />
    </FaceShell>
  );
};

export default NoticeFace;
