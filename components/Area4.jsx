import React from "react";
import LawareaCard from "./LawareaCard";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import { practiceAreas } from "@/Data";

const Area4 = ({ href = "/contact" }) => {
  return (
    <section aria-label="Areas of practice" className="bg-parchment py-20 md:py-28">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <Reveal>
          <SectionHead
            runningHead="The register"
            aside={`${practiceAreas.length} disciplines · Fees in writing`}
            title="Six disciplines, one professional standard — always on your side"
            lead="From Home Office applications to the Crown Court, from tenancy disputes to tribunal claims — you speak directly to the solicitor handling your matter."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 border-b border-ink/12 md:mt-14">
            {practiceAreas.map((area, i) => (
              <LawareaCard
                key={area.name}
                index={i}
                title={area.name}
                text={area.blurb}
                href={href}
              />
            ))}
          </div>
        </Reveal>

        <p className="mt-6 text-[13px] uppercase tracking-caps text-slatebody">
          Not sure which discipline is yours? Tell us what happened.
        </p>
      </div>
    </section>
  );
};

export default Area4;
