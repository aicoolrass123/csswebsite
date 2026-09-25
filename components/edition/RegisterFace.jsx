import Link from "next/link";
import { matterProofs, practiceAreas, slideTab } from "@/Data";

import { FaceFoot, FaceShell } from "./FaceParts";

const RegisterFace = ({ face, onTurn }) => {
  const item = slideTab[1];

  return (
    <FaceShell tone="bone">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-0">
        <h2 className="balance font-display text-[clamp(2rem,3.6vw,3.1rem)] font-medium leading-[1.02] tracking-display text-ink lg:col-span-7 lg:pr-14">
          {item.title}
        </h2>
        <p className="max-w-[34rem] text-[16.5px] leading-[1.68] text-slatebody lg:col-span-5 lg:border-l lg:border-ink/12 lg:pl-12">
          {item.subtitle}
        </p>
      </div>

      <div className="mt-8 grid flex-1 gap-10 lg:mt-10 lg:grid-cols-12 lg:gap-0">
        <div className="min-w-0 lg:col-span-7 lg:pr-14">
          <p className="text-[10px] uppercase tracking-folio text-slatebody">
            The register · six disciplines
          </p>

          <ul className="mt-3">
            {practiceAreas.map((area, i) => (
              <li key={area.name}>
                <Link
                  href={area.href}
                  className="register-row grid grid-cols-[2.25rem_minmax(0,1fr)_auto] items-baseline gap-x-4 border-t border-ink/12 py-3"
                >
                  <span className="register-index tnum text-[10.5px] uppercase tracking-caps text-claret">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="register-title font-display text-[clamp(1.25rem,1.8vw,1.6rem)] font-medium leading-[1.1] tracking-display text-ink">
                    {area.name}
                    <span className="register-text mt-1 block max-w-[36rem] font-body text-[14px] font-normal leading-[1.55] tracking-normal text-slatebody">
                      {area.blurb}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="register-arrow self-center text-[15px] leading-none text-claret"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[12.5px] uppercase tracking-caps text-slatebody">
            Every matter begins with a written fee note and a named solicitor.
          </p>
        </div>

        <div className="flex min-w-0 flex-col lg:col-span-5 lg:border-l lg:border-ink/12 lg:pl-12">
          <p className="text-[10px] uppercase tracking-folio text-slatebody">
            What every matter carries
          </p>

          <dl className="mt-3 border-t border-ink/12">
            {matterProofs.map((proof) => (
              <div key={proof.label} className="border-b border-ink/12 py-3.5">
                <dt className="font-display text-[17px] tracking-display text-ink">
                  {proof.label}
                </dt>
                <dd className="mt-1 text-[13.5px] leading-[1.6] text-slatebody">
                  {proof.text}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-7 border-t border-ink/12 pt-4 lg:mt-auto">
            <p className="font-display text-[19px] tracking-display text-ink">
              The fee comes before the work
            </p>
            <p className="mt-1 text-[13.5px] leading-[1.6] text-slatebody">
              {item.caption}
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={item.ctaPrimaryHref}
              className="bg-ink px-6 py-3.5 text-center text-[11px] font-semibold uppercase tracking-caps text-parchment transition hover:bg-claret"
            >
              {item.ctaPrimary}
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
        kicker="The register · from Home Office applications to the Crown Court"
        note={item.kicker}
        folio={`Folio ${face.folio} / IV`}
        tone="paper"
        className="mt-8"
      />
    </FaceShell>
  );
};

export default RegisterFace;
