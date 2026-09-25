import Link from "next/link";
import { slideTab } from "@/Data";

import Plate from "../Plate";
import Testimonial from "../Testimonial";
import { FaceFoot, FaceShell } from "./FaceParts";

const points = [
  "Detailed written advice from the very first meeting",
  "A high success record in Home Office and appeal matters",
  "Fixed fees agreed upfront, with instalments available",
];

const LettersFace = ({ face }) => {
  const item = slideTab[2];

  return (
    <FaceShell tone="paper">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-0">
        <h2 className="balance font-display text-[clamp(2rem,3.6vw,3.1rem)] font-medium leading-[1.02] tracking-display text-ink lg:col-span-7 lg:pr-14">
          {item.title}
        </h2>
        <p className="max-w-[34rem] text-[16.5px] leading-[1.68] text-slatebody lg:col-span-5 lg:border-l lg:border-ink/12 lg:pl-12">
          {item.subtitle}
        </p>
      </div>

      <div className="mt-8 grid flex-1 gap-10 lg:mt-10 lg:grid-cols-12 lg:gap-0">
        <div className="flex min-w-0 flex-col lg:col-span-5 lg:pr-14">
          <div className="relative mx-auto w-full max-w-[19rem] lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[540/570] w-full">
              <Plate
                src="/plates/client.png"
                alt="A client photographed for the letters page."
                cut
                sizes="(min-width: 1024px) 24vw, 60vw"
                className="absolute inset-0"
              />
            </div>
          </div>

          <p className="mt-6 border-t border-ink/12 pt-4 text-[10px] uppercase tracking-folio text-slatebody">
            Printed with permission · Nothing is shared without instruction
          </p>

          <p className="dropcap mt-4 text-[14.5px] leading-[1.68] text-slatebody">
            Church Street Solicitors Ltd has served East London since June 2015,
            providing high-quality representation in immigration, family, crime,
            civil litigation, housing and employment law.
          </p>
        </div>

        <div className="flex min-w-0 flex-col lg:col-span-7 lg:border-l lg:border-ink/12 lg:pl-12">
          <p className="text-[10px] uppercase tracking-folio text-slatebody">
            Letters from clients
          </p>

          <div className="mt-4 flex-1">
            <Testimonial />
          </div>

          <ul className="mt-8 border-t border-ink/12">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-baseline gap-4 border-b border-ink/12 py-3 text-[14.5px] leading-snug text-ink"
              >
                <span
                  aria-hidden
                  className="h-px w-5 shrink-0 translate-y-[-4px] bg-claret"
                />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/about-us"
              className="bg-ink px-6 py-3.5 text-center text-[11px] font-semibold uppercase tracking-caps text-parchment transition hover:bg-claret"
            >
              More about us
            </Link>
            <Link
              href={item.ctaSecondaryHref}
              className="border border-ink/20 px-6 py-3.5 text-center text-[11px] font-semibold uppercase tracking-caps text-ink transition hover:border-ink"
            >
              {item.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>

      <FaceFoot
        kicker="Church Street Solicitors · since June 2015"
        note="Published with permission"
        folio={`Folio ${face.folio} / IV`}
        tone="paper"
        className="mt-8"
      />
    </FaceShell>
  );
};

export default LettersFace;
