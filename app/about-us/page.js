import Link from "next/link";

import InsideFoot from "@/components/InsideFoot";
import InsideHead from "@/components/InsideHead";
import Plate from "@/components/Plate";
import Reveal from "@/components/Reveal";

/* ---------------------------------------------------------------- the firm */

const Story = () => (
  <section aria-label="The firm" className="bg-parchment py-16 md:py-24">
    <div className="mx-auto max-w-content px-5 md:px-8">
      <Reveal>
        <div className="rule-double" aria-hidden />
        <div className="mt-3 flex items-baseline justify-between gap-6 text-[10px] uppercase tracking-folio text-slatebody">
          <span>The firm · Stratford, East London</span>
          <span>Established June 2015</span>
        </div>

        <div className="mt-10 grid gap-12 md:grid-cols-12 md:gap-0">
          <div className="md:col-span-7 md:pr-14">
            <div className="grid gap-8 sm:grid-cols-2">
              <p className="dropcap text-[16px] leading-[1.75] text-slatebody">
                The firm started operations in June 2015 with the sole aim of
                providing our clients with high quality legal services in the
                areas of Immigration, Family, Crime, Civil Litigation, Housing
                and Employment Law.
              </p>
              <p className="text-[16px] leading-[1.75] text-slatebody">
                We pride ourselves in our ability to advise you correctly and
                also to provide you with high standard and personalised
                professional services.
              </p>
            </div>

            <div className="mt-10 border-y border-ink/12 py-7">
              <p className="balance font-display text-[clamp(1.3rem,2.1vw,1.75rem)] leading-[1.34] tracking-display text-ink">
                We also have a strong focus on the needs of our clients. We
                fully understand that they depend on us sometimes in difficult
                and life-changing situations — for instance, when their liberty
                is at stake, being served with notice of deportation by the
                Home Office, or financial adjustments after a non-amicable
                divorce.
              </p>
              <p className="mt-4 text-[10px] uppercase tracking-folio text-slatebody">
                On the needs of our clients
              </p>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/area-of-practice"
                className="bg-ink px-7 py-4 text-center text-[11px] font-semibold uppercase tracking-caps text-parchment transition hover:bg-claret"
              >
                What we do
              </Link>
              <Link
                href="/our-team"
                className="border border-ink/20 px-7 py-4 text-center font-display text-[16px] tracking-display text-ink transition hover:border-ink"
              >
                Meet the team
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 md:border-l md:border-ink/12 md:pl-12">
            <Reveal delay={0.1}>
              <figure className="relative aspect-[4/3] w-full">
                <Plate
                  src="/plates/office.jpg"
                  alt="The Church Street Solicitors shopfront at 12 Church Street, Stratford."
                  sizes="(min-width: 768px) 36vw, 100vw"
                  className="absolute inset-0 h-full w-full"
                  objectPosition="50% 34%"
                />
              </figure>
              <figcaption className="mt-3 border-t border-ink/12 pt-3 text-[14px] italic leading-snug text-slatebody">
                The office at 12 Church Street, photographed from the street.
              </figcaption>

              <dl className="mt-8 border-t border-ink/12">
                <div className="border-b border-ink/12 py-4">
                  <dt className="text-[10px] uppercase tracking-folio text-slatebody">
                    Practice areas
                  </dt>
                  <dd className="mt-1.5 text-[15px] leading-relaxed text-ink">
                    Immigration · Family · Crime · Civil Litigation · Housing ·
                    Employment
                  </dd>
                </div>
                <div className="border-b border-ink/12 py-4">
                  <dt className="text-[10px] uppercase tracking-folio text-slatebody">
                    Also at the office
                  </dt>
                  <dd className="mt-1.5 text-[15px] leading-relaxed text-ink">
                    Commissioners for Oaths
                  </dd>
                </div>
                <div className="py-4">
                  <dt className="text-[10px] uppercase tracking-folio text-slatebody">
                    Regulation
                  </dt>
                  <dd className="mt-1.5 text-[15px] leading-relaxed text-ink">
                    Regulated by the Solicitors Regulation Authority
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ------------------------------------------------------------ why choose us */

const commitments = [
  {
    index: "01",
    title: "Our track record speaks volume",
    body: [
      "We will always provide you with detailed advice about your matter from the start.",
      "We would work diligently with you to ensure that your instructions are fully carried out to your desired satisfaction.",
      "We pride ourselves in our high success rates in our clients’ applications to the Home Office and also in appeal related matters.",
    ],
  },
  {
    index: "02",
    title: "No hidden charges",
    body: [
      "We are not publicly funded. We normally charge fixed fees with no hidden extras.",
      "We accept payment by instalments. We know that money is important, but it is not the be-all and end-all.",
    ],
  },
  {
    index: "03",
    title: "Client care, client satisfaction",
    body: [
      "We aim to meet your needs efficiently, professionally and with the utmost care and sensitivity.",
      "We understand that no two matters are the same and no two clients are the same — so we strive to ensure your total satisfaction at the completion of your matter.",
      "We are always available to take your call, or to see you on appointment or in an emergency.",
    ],
  },
  {
    index: "04",
    title: "Confidentiality and your details",
    body: [
      "We operate a strict confidentiality policy in our practice, in compliance with the rules governing us by our regulators, the SRA.",
      "Our main priority is to ensure our clients’ personal data is securely stored and maintained in accordance with the General Data Protection Regulation (GDPR).",
    ],
  },
];

const WhyChoose = () => (
  <section aria-label="Why choose us" className="bg-paper py-16 md:py-24">
    <div className="mx-auto max-w-content px-5 md:px-8">
      <Reveal>
        <div className="rule-double" aria-hidden />
        <div className="mt-3 flex items-baseline justify-between gap-6 text-[10px] uppercase tracking-folio text-slatebody">
          <span>Why choose Church Street Solicitors Ltd</span>
          <span>Four standing commitments</span>
        </div>

        <div className="mt-10 grid gap-12 md:mt-12 md:grid-cols-12 md:gap-0">
          <div className="md:col-span-5 md:pr-14">
            <figure className="relative aspect-[4/5] w-full">
              <Plate
                src="/plates/about-team.jpg"
                alt="Solicitors at Church Street Solicitors."
                sizes="(min-width: 768px) 34vw, 100vw"
                className="absolute inset-0 h-full w-full"
                objectPosition="50% 22%"
              />
            </figure>
            <figcaption className="mt-3 border-t border-ink/12 pt-3 text-[14px] italic leading-snug text-slatebody">
              Detailed advice from the start, and instructions carried out to
              your satisfaction.
            </figcaption>
          </div>

          <dl className="md:col-span-7 md:border-l md:border-ink/12 md:pl-12">
            {commitments.map((item) => (
              <div
                key={item.index}
                className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 border-t border-ink/12 py-6 last:border-b"
              >
                <span className="tnum pt-1 text-[10.5px] uppercase tracking-caps text-claret">
                  {item.index}
                </span>
                <div>
                  <dt className="font-display text-[clamp(1.3rem,1.9vw,1.7rem)] font-medium leading-[1.1] tracking-display text-ink">
                    {item.title}
                  </dt>
                  <dd className="mt-2.5 max-w-[36rem] space-y-2.5 text-[15px] leading-[1.72] text-slatebody">
                    {item.body.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ----------------------------------------------------------- complaints */

const standards = [
  "Clients should receive copies of substantive correspondence.",
  "Telephone calls from clients are returned during the same day, if possible.",
  "Correspondence should be dealt with promptly.",
  "Letters to clients are to be written in simple English.",
  "Appointments are to be given to clients without any undue delay.",
];

const steps = [
  {
    index: "01",
    when: "Within 3 days",
    title: "We acknowledge it",
    body: "We will send you an acknowledgement letter confirming receipt of your complaint within 3 days of receiving it, and enclose a copy of our Complaints Procedure.",
  },
  {
    index: "02",
    when: "On receipt",
    title: "It goes to the Client Care Officer",
    body: "The matter will be passed to our Client Care Officer, Kevwe Omoniruvbe, who will investigate your complaint and speak to the case handler dealing with your case. During the course of the investigation he may ask you for further documents or information, if necessary.",
  },
  {
    index: "03",
    when: "Within 21 days",
    title: "We answer in writing",
    body: "Within 21 days of acknowledging the complaint, we will provide a detailed written response, which may include suggestions for resolving your complaint. Some matters require more time; if we must take it, we will tell you about the change to the timescale and explain why.",
  },
  {
    index: "04",
    when: "Within 21 days",
    title: "A director reviews it",
    body: "If you are not satisfied with the outcome, you may ask us to review our decision. The review is carried out by a director, within 21 days of your request. We will ask you to confirm which part of the response you are not satisfied with, and to send any further comments or documents you wish us to consider.",
  },
];

const Complaints = () => (
  <section
    aria-label="Complaints policy"
    className="dark-ground bg-ink py-16 md:py-24"
  >
    <div className="mx-auto max-w-content px-5 md:px-8">
      <Reveal>
        <div className="rule-double-inverse" aria-hidden />
        <div className="mt-3 flex items-baseline justify-between gap-6 text-[10px] uppercase tracking-folio text-parchment/60">
          <span>Complaints policy</span>
          <span>There is no charge for any of this work</span>
        </div>

        <div className="mt-9 grid gap-7 md:mt-11 md:grid-cols-12 md:gap-0">
          <h2 className="balance font-display text-[clamp(1.9rem,3.4vw,2.9rem)] font-medium leading-[1.03] tracking-display text-parchment md:col-span-7 md:pr-14">
            If something goes wrong, we need you to tell us about it
          </h2>
          <div className="max-w-[36rem] space-y-4 text-[16px] leading-[1.7] text-parchment/75 md:col-span-5 md:border-l md:border-parchment/15 md:pl-12">
            <p>
              We deal with clients’ matters with care, diligence and
              professionalism. We are an open firm and we are approachable: we
              welcome feedback, because it is how we improve our standards.
            </p>
            <p>
              Most clients prefer to raise an initial query or informal
              complaint with the case handler or solicitor who has conduct of
              their matter, and most concerns are resolved quickly. If you are
              unhappy about any aspect of the service you received, please
              contact one of the Directors or the firm’s Client Care Officer.
            </p>
          </div>
        </div>

        <div className="mt-11 grid gap-10 border-t border-parchment/15 pt-9 md:grid-cols-12 md:gap-0">
          <div className="md:col-span-5 md:pr-14">
            <p className="text-[10px] uppercase tracking-folio text-parchment/60">
              Who to contact
            </p>
            <p className="mt-4 font-display text-[clamp(1.2rem,1.8vw,1.55rem)] leading-tight tracking-display text-parchment">
              Mr Kevwe Omoniruvbe
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-folio text-parchment/60">
              Client Care Officer
            </p>
            <ul className="mt-5 border-t border-parchment/15">
              <li className="border-b border-parchment/15 py-3.5">
                <a
                  href="tel:02082210233"
                  className="font-display text-[19px] tracking-display text-parchment transition hover:text-claret-bright"
                >
                  020 8221 0233
                </a>
              </li>
              <li className="border-b border-parchment/15 py-3.5">
                <a
                  href="mailto:o.omoniruvbe@churchstreetsolicitors.com"
                  className="break-all text-[15px] text-parchment/75 underline-offset-4 transition hover:text-parchment hover:underline"
                >
                  o.omoniruvbe@churchstreetsolicitors.com
                </a>
              </li>
              <li className="border-b border-parchment/15 py-3.5 text-[15px] leading-relaxed text-parchment/75">
                Church Street Solicitors
                <br />
                12 Church Street, Stratford, London E15 3HX
              </li>
            </ul>

            <p className="mt-8 text-[10px] uppercase tracking-folio text-parchment/60">
              The standards we hold ourselves to
            </p>
            <ul className="mt-4 border-t border-parchment/15">
              {standards.map((line) => (
                <li
                  key={line}
                  className="flex items-baseline gap-4 border-b border-parchment/15 py-3 text-[14.5px] leading-snug text-parchment/80"
                >
                  <span
                    aria-hidden
                    className="h-px w-5 shrink-0 translate-y-[-4px] bg-claret-bright"
                  />
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-7 md:border-l md:border-parchment/15 md:pl-12">
            <p className="text-[10px] uppercase tracking-folio text-parchment/60">
              What happens next
            </p>

            <ol className="mt-4 border-t border-parchment/15">
              {steps.map((step) => (
                <li
                  key={step.index}
                  className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 border-b border-parchment/15 py-5"
                >
                  <span className="tnum pt-1 text-[10.5px] uppercase tracking-caps text-claret-soft">
                    {step.index}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <h3 className="font-display text-[19px] leading-tight tracking-display text-parchment">
                        {step.title}
                      </h3>
                      <span className="text-[10px] uppercase tracking-folio text-parchment/60">
                        {step.when}
                      </span>
                    </div>
                    <p className="mt-2 max-w-[38rem] text-[14.5px] leading-[1.7] text-parchment/70">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-5 text-[14px] leading-relaxed text-parchment/70">
              There will be no charge or fees for any of the work we carry out
              investigating your complaint.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-[10px] uppercase tracking-folio text-parchment/60">
            If you are still not satisfied
          </p>
          <div className="mt-4 grid gap-10 border-t border-parchment/15 pt-7 md:grid-cols-2 md:gap-0">
            <div className="md:pr-14">
              <h3 className="font-display text-[22px] leading-tight tracking-display text-parchment">
                The Legal Ombudsman
              </h3>
              <p className="mt-3 max-w-[34rem] text-[14.5px] leading-[1.7] text-parchment/70">
                You can write to the Legal Ombudsman, who can be contacted at:
              </p>
              <address className="mt-4 text-[14.5px] not-italic leading-[1.8] text-parchment/80">
                The Legal Ombudsman
                <br />
                PO Box 15870, Tamworth B77 9LE
                <br />
                <a
                  href="tel:03005550333"
                  className="underline-offset-4 transition hover:text-parchment hover:underline"
                >
                  0300 555 0333
                </a>
                <br />
                <a
                  href="mailto:enquiries@legalombudsman.org.uk"
                  className="break-all underline-offset-4 transition hover:text-parchment hover:underline"
                >
                  enquiries@legalombudsman.org.uk
                </a>
                <br />
                <a
                  href="https://www.legalombudsman.org.uk"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline-offset-4 transition hover:text-parchment hover:underline"
                >
                  www.legalombudsman.org.uk
                </a>
              </address>
              <p className="mt-5 max-w-[34rem] text-[13.5px] leading-[1.7] text-parchment/60">
                Please note that ordinarily a complaint must be referred to the
                Legal Ombudsman within one year of the act or omission complained
                of, or one year from when you should reasonably have known there
                was cause for complaint without taking advice from a third party.
              </p>
            </div>

            <div className="md:border-l md:border-parchment/15 md:pl-12">
              <h3 className="font-display text-[22px] leading-tight tracking-display text-parchment">
                Complaints about our behaviour
              </h3>
              <p className="mt-3 max-w-[34rem] text-[14.5px] leading-[1.7] text-parchment/70">
                The Solicitors Regulation Authority can investigate complaints
                about a solicitor’s behaviour. The SRA can be contacted at:
              </p>
              <address className="mt-4 text-[14.5px] not-italic leading-[1.8] text-parchment/80">
                Solicitors Regulation Authority
                <br />
                The Cube, 199 Wharfside Street
                <br />
                Birmingham B1 1RN
                <br />
                <a
                  href="mailto:report@sra.org.uk"
                  className="underline-offset-4 transition hover:text-parchment hover:underline"
                >
                  report@sra.org.uk
                </a>
                <br />
                <a
                  href="tel:03706062555"
                  className="underline-offset-4 transition hover:text-parchment hover:underline"
                >
                  0370 606 2555
                </a>
                <br />
                <a
                  href="mailto:contactcentre@sra.org.uk"
                  className="break-all underline-offset-4 transition hover:text-parchment hover:underline"
                >
                  contactcentre@sra.org.uk
                </a>
              </address>
              <p className="mt-5 max-w-[34rem] text-[13.5px] leading-[1.7] text-parchment/60">
                Guidance on making a complaint to the SRA can be found at{" "}
                <a
                  href="https://www.sra.org.uk"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline underline-offset-4 transition hover:text-parchment"
                >
                  www.sra.org.uk
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ------------------------------------------------------------------ page */

export const metadata = {
  title: "About us | Church Street Solicitors, Stratford",
  description:
    "Church Street Solicitors Ltd is based in Stratford, East London. Established June 2015. Fixed fees, payment by instalments, strict confidentiality, and our full complaints policy.",
};

const AboutUs = () => (
  <main id="main-content" className="bg-parchment">
    <InsideHead
      runningHead="About us"
      aside="12 Church Street · Stratford, East London"
      folio="Folio · About"
      title="We advise you the way it is"
      lead="Church Street Solicitors Ltd is based in Stratford, East London. The firm started operations in June 2015 with the sole aim of providing our clients with high quality legal services, in plain English, at fees agreed in writing."
    />
    <Story />
    <WhyChoose />
    <Complaints />
    <InsideFoot
      kicker="About us · Church Street Solicitors"
      note="Established June 2015"
    />
  </main>
);

export default AboutUs;
