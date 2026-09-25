import Link from "next/link";

import InsideFoot from "@/components/InsideFoot";
import InsideHead from "@/components/InsideHead";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Our fees | Church Street Solicitors, Stratford",
  description:
    "Fixed fees for immigration, civil, employment and crime matters at Church Street Solicitors, Stratford. No hidden extras, payment by instalments, and the fee agreed in writing before work begins.",
};

const standingFacts = [
  {
    label: "Fixed fees, in writing",
    text: "The fee is agreed in writing before any work begins — no hidden extras.",
  },
  {
    label: "Payment by instalments",
    text: "We accept payment by instalments if you need to spread the cost.",
  },
  {
    label: "Not publicly funded",
    text: "We are not publicly funded, so every fee below is the fee you pay.",
  },
  {
    label: "Court and Home Office fees",
    text: "Where a lodging or application fee applies, the schedule says so, and it is paid in addition.",
  },
];

const schedules = [
  { id: "immigration", numeral: "I", title: "Immigration matters", count: "Six fees" },
  { id: "appeals", numeral: "II", title: "Appeals and tribunals", count: "Six fees" },
  { id: "civil", numeral: "III", title: "Civil cases", count: "Seven fees" },
  { id: "employment", numeral: "IV", title: "Employment law", count: "Four fees" },
  { id: "crime", numeral: "V", title: "Crime matters", count: "Four fees" },
  { id: "oaths", numeral: "VI", title: "Oaths and change of name", count: "Two fees" },
];

const immigrationFees = [
  {
    title: "Initial consultation",
    price: "£150",
    notes: [
      "Up to one hour, deducted from the fees below if we are instructed to progress your case.",
    ],
  },
  {
    title: "Settled status applications for EU Citizens and their family members",
    price: "£1,000",
    notes: [
      "Includes preparation of documents, a draft application for approval, monitoring and advice on next steps.",
      "Does not include retained rights of residence and Surinder Singh cases.",
    ],
  },
  {
    title: "Visit visas / Entry Clearance Application",
    price: "£1,500",
    points: [
      "Students and work experience (excluding Tier 4)",
      "Family reunion and family members of refugees",
      "Entry for family members of EU nationals (excluding Surinder Singh)",
    ],
  },
  {
    title: "Naturalisation and registration as British Citizen",
    price: "£1,750",
  },
  {
    title: "Long residence in the UK (10 years’ lawful residence)",
    price: "£1,750",
    points: [
      "Human rights, private life, other long residence applications (20 years +)",
      "Entry and residence for Tier 4 students and family members",
      "Residence for EU nationals and family members",
      "Permanent residence for EU nationals and family members",
      "Surinder Singh entry clearance and residence applications",
    ],
  },
  {
    title: "Tiers 1, 2 and 5 of the Points Based System",
    price: "£1,750",
    points: [
      "Spouse, partner, civil or unmarried partners of non-EU nationals",
      "Parents, grandparents, and other dependent relatives of non-EU nationals",
    ],
  },
];

const appealFees = [
  {
    title: "Preparation and court attendance",
    price: "£2,500",
    notes: ["Excluding asylum appeals."],
  },
  {
    title: "Preparation and court attendance (asylum)",
    price: "£4,000",
  },
  {
    title: "Bail hearing including advocacy",
    price: "£1,750",
    notes: ["London."],
  },
  {
    title: "Pre-Action Protocol letters and documents to the Home Office",
    price: "£500",
  },
  {
    title: "Judicial review",
    price: "£3,500",
    notes: ["Excluding lodging fees."],
  },
  {
    title: "Upper Tribunal hearing including preparations",
    price: "£4,500",
  },
];

const civilFees = [
  {
    title: "Consultation",
    price: "£150",
    notes: ["Up to one hour, deductible from the final fees."],
  },
  {
    title: "Housing possession (acting for defendant)",
    price: "£650",
    notes: [
      "Includes taking witness statements and one court appearance only. Subsequent court appearances charged at £400 within London.",
    ],
  },
  {
    title: "Housing possession (acting for claimant)",
    price: "£750",
    notes: [
      "Excludes serving quit notices and lodging costs to court; includes the first court appearance. Subsequent court attendance charged at £400 within London.",
    ],
  },
  {
    title: "Divorce matters (acting for petitioner)",
    price: "£750",
    notes: [
      "Fixed for uncontested divorce cases. Does not include the cost of lodging the divorce petition — currently £550, paid directly to the court by cheque or postal order. Includes acting up to Decree Nisi and the application for Decree Absolute.",
    ],
  },
  {
    title: "Divorce matters (acting for respondent)",
    price: "£550",
    notes: [
      "Includes responding to the petition but excludes court appearances, fixed at £350 per appearance.",
    ],
  },
  {
    title: "Ancillary relief including property adjustment (claimant)",
    price: "£5,000",
    notes: [
      "Includes Form E, filing the court claim and advising the client; excludes court appearances, fixed at £450 per appearance.",
    ],
  },
  {
    title: "Ancillary relief including property adjustment (respondent)",
    price: "£4,500",
    notes: [
      "Includes Form E, responding to correspondence from the claimant, negotiation with the claimant and one court appearance. Subsequent court appearances fixed at £450.",
    ],
  },
];

const employmentFees = [
  {
    title: "Attendance at pre-termination interview / representation",
    price: "£2,000",
  },
  {
    title: "ACAS stage",
    price: "£1,500",
  },
  {
    title: "Filing claims to the Employment Tribunal",
    price: "£1,200",
  },
  {
    title: "Each tribunal attendance",
    price: "£450",
  },
];

const crimeFees = [
  {
    title: "Advising client at first consultation",
    price: "£250",
    notes: ["Deductible from final fixed fees."],
  },
  {
    title: "Magistrates’ Court hearings (first appearance only)",
    price: "£750",
    notes: [
      "Thames and Stratford Magistrates’ Courts only. Add £75 travel if outside these courts but within London; add £150 if outside London.",
    ],
  },
  {
    title: "Magistrates’ Court hearings including bail application",
    price: "£1,500",
    notes: [
      "Thames and Stratford Magistrates’ Courts only. Add £75 travel if outside these courts but within London; add £150 if outside London.",
    ],
  },
  {
    title: "Police station attendance",
    price: "£750",
    notes: ["Available 24 hours a day."],
  },
];

const oathFees = [
  {
    title: "Commissioners for Oaths (or swearing an affidavit / oath)",
    price: "£10",
  },
  {
    title: "Deed Poll (change of name)",
    price: "£150",
  },
];

const FeeRow = ({ index, price, title, points = [], notes = [] }) => (
  <article className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-4 border-t border-ink/12 py-6 md:grid-cols-[3rem_minmax(0,1fr)_10.5rem] md:gap-x-8 md:py-7">
    <span
      aria-hidden
      className="tnum pt-1.5 text-[10.5px] uppercase tracking-caps text-claret"
    >
      {index}
    </span>

    <div className="min-w-0">
      <h3 className="balance font-display text-[clamp(1.2rem,1.8vw,1.55rem)] font-medium leading-[1.12] tracking-display text-ink">
        {title}
      </h3>

      <p className="tnum mt-2 whitespace-nowrap font-display text-[22px] leading-none tracking-display text-ink md:hidden">
        {price}
      </p>

      {points.length > 0 ? (
        <ul className="mt-3.5 max-w-[38rem]">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-baseline gap-3 py-1 text-[14.5px] leading-[1.65] text-slatebody"
            >
              <span
                aria-hidden
                className="h-px w-4 shrink-0 translate-y-[-4px] bg-claret"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {notes.map((note) => (
        <p
          key={note}
          className="mt-3 max-w-[38rem] text-[13.5px] italic leading-[1.65] text-slatebody"
        >
          {note}
        </p>
      ))}
    </div>

    <p className="tnum hidden whitespace-nowrap font-display text-[clamp(1.4rem,2vw,1.75rem)] font-medium leading-none tracking-display text-ink md:block md:text-right">
      {price}
    </p>
  </article>
);

const ScheduleHead = ({ runningHead, aside, title, lead }) => (
  <header>
    <div className="rule-double" aria-hidden />
    <div className="mt-3 flex items-baseline justify-between gap-6 text-[10px] uppercase tracking-folio text-slatebody">
      <span>{runningHead}</span>
      {aside ? (
        <span className="hidden text-right sm:block">{aside}</span>
      ) : null}
    </div>

    <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-12 md:gap-0">
      <h2 className="balance font-display text-[clamp(1.7rem,3vw,2.5rem)] font-medium leading-[1.04] tracking-display text-ink md:col-span-7 md:pr-14">
        {title}
      </h2>
      {lead ? (
        <p className="max-w-[36rem] text-[15.5px] leading-[1.7] text-slatebody md:col-span-5 md:border-l md:border-ink/12 md:pl-12">
          {lead}
        </p>
      ) : null}
    </div>
  </header>
);

const FeeSchedule = ({ id, tone = "paper", head, rows }) => (
  <section
    id={id}
    aria-label={head.runningHead}
    className={`scroll-mt-24 py-14 md:py-20 ${
      tone === "paper" ? "bg-paper" : "bg-parchment"
    }`}
  >
    <div className="mx-auto max-w-content px-5 md:px-8">
      <Reveal>
        <ScheduleHead {...head} />
        <div className="mt-8 border-b border-ink/12 md:mt-9">
          {rows.map((row, i) => (
            <FeeRow
              key={row.title}
              index={String(i + 1).padStart(2, "0")}
              price={row.price}
              title={row.title}
              points={row.points}
              notes={row.notes}
            />
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

const FeeIndex = () => (
  <section aria-label="How our fees work" className="bg-parchment py-14 md:py-20">
    <div className="mx-auto max-w-content px-5 md:px-8">
      <Reveal>
        <div className="rule-double" aria-hidden />
        <div className="mt-3 flex items-baseline justify-between gap-6 text-[10px] uppercase tracking-folio text-slatebody">
          <span>How our fees work · Six schedules</span>
          <span className="hidden text-right sm:block">
            Fixed fees · Payment by instalments
          </span>
        </div>

        <div className="mt-8 grid gap-10 md:mt-10 md:grid-cols-12 md:gap-0">
          <div className="md:col-span-5 md:pr-14">
            {standingFacts.map((fact, i) => (
              <div
                key={fact.label}
                className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-4 border-t border-ink/12 py-4 last:border-b"
              >
                <span className="tnum pt-0.5 text-[10.5px] uppercase tracking-caps text-claret">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display text-[17px] leading-tight tracking-display text-ink">
                    {fact.label}
                  </p>
                  <p className="mt-1.5 text-[13.5px] leading-[1.62] text-slatebody">
                    {fact.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <nav
            aria-label="Fee schedules"
            className="md:col-span-7 md:border-l md:border-ink/12 md:pl-12"
          >
            <div className="flex items-baseline justify-between gap-6">
              <p className="text-[10px] uppercase tracking-folio text-slatebody">
                The schedules
              </p>
              <p className="text-[10px] uppercase tracking-folio text-slatebody">
                Folio · Fees
              </p>
            </div>

            <div className="mt-3 border-b border-ink/12">
              {schedules.map((schedule) => (
                <a
                  key={schedule.id}
                  href={`#${schedule.id}`}
                  className="register-row grid grid-cols-[2.25rem_minmax(0,1fr)] items-baseline gap-x-4 gap-y-1 border-t border-ink/12 py-4 sm:grid-cols-[2.25rem_minmax(0,1fr)_auto]"
                >
                  <span className="register-index tnum pt-0.5 text-[10.5px] uppercase tracking-caps text-claret">
                    {schedule.numeral}
                  </span>
                  <span className="register-title font-display text-[clamp(1.1rem,1.5vw,1.35rem)] font-medium leading-[1.15] tracking-display text-ink">
                    {schedule.title}
                  </span>
                  <span className="register-text col-start-2 whitespace-nowrap text-[11px] uppercase tracking-caps text-slatebody sm:col-start-3 sm:row-start-1 sm:pt-1">
                    {schedule.count}
                  </span>
                </a>
              ))}
            </div>

            <p className="mt-4 text-[12.5px] uppercase tracking-caps text-slatebody">
              Every fee is agreed in writing before work begins.
            </p>
          </nav>
        </div>
      </Reveal>
    </div>
  </section>
);

const Quotation = () => (
  <section
    aria-label="Request a quotation"
    className="bg-paper pb-16 pt-2 md:pb-24"
  >
    <div className="mx-auto max-w-content px-5 md:px-8">
      <Reveal>
        <div className="border-t border-ink/12 pt-9 md:pt-12">
          <p className="text-[10px] uppercase tracking-folio text-slatebody">
            If your need is not included above
          </p>
          <h2 className="balance mt-4 max-w-[42rem] font-display text-[clamp(1.7rem,3vw,2.5rem)] font-medium leading-[1.06] tracking-display text-ink">
            Ask us for a quotation
          </h2>
          <p className="mt-5 max-w-[36rem] text-[16px] leading-[1.7] text-slatebody">
            Please book an appointment to talk to us about your need. We will
            agree the fee and the plan in writing, and if we cannot help you we
            will tell you straight away.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="bg-claret px-7 py-4 text-center text-[11px] font-semibold uppercase tracking-caps text-parchment transition hover:bg-ink"
            >
              Book an appointment
            </Link>
            <a
              href="tel:02082210233"
              className="border border-ink/20 px-7 py-4 text-center font-display text-[16px] leading-none tracking-display text-ink transition hover:border-ink"
            >
              020 8221 0233
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

const OurFees = () => (
  <main id="main-content" className="bg-parchment">
    <InsideHead
      runningHead="Our fees"
      aside="12 Church Street · Stratford, East London"
      folio="Folio · Fees"
      title="Fixed fees, agreed in writing"
      lead="No hidden extras, and payment by instalments. Every fee is agreed in writing before work begins, and the first consultation is deducted from the fee if we are instructed to progress your case."
    />
    <FeeIndex />
    <FeeSchedule
      id="immigration"
      tone="parchment"
      head={{
        runningHead: "Schedule I · Immigration matters",
        aside: "Six fees",
        title: "Applications, settlement and citizenship",
        lead: "Home Office applications prepared, submitted and monitored on your behalf, at a fee agreed in writing before work begins.",
      }}
      rows={immigrationFees}
    />
    <FeeSchedule
      id="appeals"
      tone="paper"
      head={{
        runningHead: "Schedule II · Appeals and tribunals",
        aside: "Six fees",
        title: "Appeals, bail, judicial review and the Upper Tribunal",
        lead: "Preparation and advocacy from the bail hearing to the Upper Tribunal, as each fee states.",
      }}
      rows={appealFees}
    />
    <FeeSchedule
      id="civil"
      tone="parchment"
      head={{
        runningHead: "Schedule III · Civil cases",
        aside: "Seven fees",
        title: "Housing, divorce and financial matters",
        lead: "The court fees and the appearances that fall outside each figure are stated plainly, so nothing arrives unannounced.",
      }}
      rows={civilFees}
    />
    <FeeSchedule
      id="employment"
      tone="paper"
      head={{
        runningHead: "Schedule IV · Employment law",
        aside: "Four fees",
        title: "From the pre-termination interview to the tribunal",
      }}
      rows={employmentFees}
    />
    <FeeSchedule
      id="crime"
      tone="parchment"
      head={{
        runningHead: "Schedule V · Crime matters",
        aside: "Four fees",
        title: "Representation at court and at the police station",
        lead: "The first consultation is deductible from the final fixed fee, and police station attendance is available at any hour.",
      }}
      rows={crimeFees}
    />
    <FeeSchedule
      id="oaths"
      tone="paper"
      head={{
        runningHead: "Schedule VI · Other services",
        aside: "Two fees",
        title: "Swearing documents and changing your name",
      }}
      rows={oathFees}
    />
    <Quotation />
    <InsideFoot
      kicker="Our fees · Church Street Solicitors"
      note="Fixed fees · Payment by instalments"
      secondaryHref="/area-of-practice"
      secondaryLabel="What we do"
    />
  </main>
);

export default OurFees;
