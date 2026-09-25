import { matterProofs } from "@/Data";

import Area4 from "@/components/Area4";
import InsideFoot from "@/components/InsideFoot";
import InsideHead from "@/components/InsideHead";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "What we do | Church Street Solicitors, Stratford",
  description:
    "Immigration, family, criminal defence, housing, employment and civil litigation — the six disciplines handled at Church Street Solicitors, Stratford. Senior-led matters, fees agreed in writing.",
};

/* ------------------------------------------------------------- how we work */

const HowItRuns = () => (
  <section aria-label="How a matter runs" className="bg-paper py-16 md:py-24">
    <div className="mx-auto max-w-content px-5 md:px-8">
      <Reveal>
        <div className="rule-double" aria-hidden />
        <div className="mt-3 flex items-baseline justify-between gap-6 text-[10px] uppercase tracking-folio text-slatebody">
          <span>How a matter runs</span>
          <span>Three standing commitments</span>
        </div>

        <div className="mt-10 grid gap-12 md:mt-12 md:grid-cols-12 md:gap-0">
          <div className="md:col-span-7 md:pr-14">
            <h2 className="balance font-display text-[clamp(1.9rem,3.4vw,2.9rem)] font-medium leading-[1.03] tracking-display text-ink">
              The fee, the plan and the name come before the work
            </h2>
            <p className="mt-5 max-w-[36rem] text-[16px] leading-[1.7] text-slatebody">
              Whichever of the six your matter sits in, nothing begins until you
              know who is handling it and what it will cost — no hidden extras,
              and no passing the file down the corridor.
            </p>
          </div>

          <dl className="md:col-span-5 md:border-l md:border-ink/12 md:pl-12">
            {matterProofs.map((proof) => (
              <div
                key={proof.label}
                className="border-t border-ink/12 py-5 last:border-b"
              >
                <dt className="font-display text-[clamp(1.3rem,1.9vw,1.7rem)] font-medium leading-[1.1] tracking-display text-ink">
                  {proof.label}
                </dt>
                <dd className="mt-2.5 text-[15px] leading-[1.72] text-slatebody">
                  {proof.text}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ------------------------------------------------------------------ page */

const AreaOfPractice = () => (
  <main id="main-content" className="bg-parchment">
    <InsideHead
      runningHead="What we do"
      aside="12 Church Street · Stratford, East London"
      folio="Folio · Practice"
      title="How can we help you"
      lead="Six disciplines under one roof — immigration, family, crime, housing, employment and civil litigation. Every matter is run by the solicitor who has conduct of it, at a fee agreed in writing before work begins."
    />
    <Area4 />
    <HowItRuns />
    <InsideFoot
      kicker="What we do · Church Street Solicitors"
      note="Six disciplines · Immigration first"
    />
  </main>
);

export default AreaOfPractice;
