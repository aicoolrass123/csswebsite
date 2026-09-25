import FormContact1 from "@/components/FormContact1";
import InsideFoot from "@/components/InsideFoot";
import InsideHead from "@/components/InsideHead";
import Plate from "@/components/Plate";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";

export const metadata = {
  title: "Contact | Church Street Solicitors, Stratford",
  description:
    "Contact Church Street Solicitors: 12 Church Street, Stratford, London E15 3HX. Telephone 020 8221 0233, email admin@churchstreetsolicitors.com, or request a callback online.",
};

const details = [
  {
    label: "Address",
    value: (
      <>
        12 Church Street
        <br />
        Stratford, London E15 3HX
      </>
    ),
  },
  {
    label: "Telephone",
    value: (
      <a
        href="tel:02082210233"
        className="font-display text-[clamp(1.4rem,2vw,1.7rem)] leading-none tracking-display text-ink transition hover:text-claret"
      >
        020 8221 0233
      </a>
    ),
  },
  {
    label: "Email",
    value: (
      <a
        href="mailto:admin@churchstreetsolicitors.com"
        className="break-all underline-offset-4 transition hover:text-ink hover:underline"
      >
        admin@churchstreetsolicitors.com
      </a>
    ),
  },
  {
    label: "Opening hours",
    value: (
      <>
        Mon–Fri 9:30–18:30
        <br />
        Saturday 11:00–14:00 by appointment
      </>
    ),
  },
  {
    label: "Also at the office",
    value: "Commissioners for Oaths",
  },
];

const emergency = [
  {
    name: "Dr David Akin-Samuels",
    role: "Solicitor · LL.B (Hons); Pg.Dip.(Law); MA; PhD.",
    display: "07958 60 44 47",
    tel: "07958604447",
  },
  {
    name: "Kevwe Omoniruvbe",
    role: "Solicitor · BSc (Hons); MILR; Pg.Dip.(Law)",
    display: "07958 55 7098",
    tel: "07958557098",
  },
];

const OurContacts = () => (
  <section aria-label="Our contacts" className="bg-parchment py-16 md:py-24">
    <div className="mx-auto max-w-content px-5 md:px-8">
      <Reveal>
        <SectionHead
          runningHead="Our contacts"
          aside="Answered within one working day"
          title="Come in, call, or write to us"
          lead="The office, the phone and the form all reach the same team. Tell us what has happened and we will tell you where you stand."
        />

        <div className="mt-12 grid gap-12 md:mt-14 md:grid-cols-12 md:gap-0">
          <div className="md:col-span-5 md:pr-14">
            <figure className="relative aspect-[4/3] w-full">
              <Plate
                src="/plates/office.jpg"
                alt="The Church Street Solicitors shopfront at 12 Church Street, Stratford."
                sizes="(min-width: 768px) 34vw, 100vw"
                className="absolute inset-0 h-full w-full"
                objectPosition="50% 34%"
              />
            </figure>
            <figcaption className="mt-3 border-t border-ink/12 pt-3 text-[14px] italic leading-snug text-slatebody">
              The office at 12 Church Street — a short walk from Stratford
              station.
            </figcaption>

            <dl className="mt-8 border-t border-ink/12">
              {details.map((detail) => (
                <div
                  key={detail.label}
                  className="flex flex-col gap-1.5 border-b border-ink/12 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <dt className="shrink-0 text-[10px] uppercase tracking-folio text-slatebody">
                    {detail.label}
                  </dt>
                  <dd className="text-[15px] leading-snug text-ink sm:text-right">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="md:col-span-7 md:border-l md:border-ink/12 md:pl-12">
            <FormContact1 />
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

const FindUs = () => (
  <section aria-label="Find us" className="bg-paper py-16 md:py-24">
    <div className="mx-auto max-w-content px-5 md:px-8">
      <Reveal>
        <div className="rule-double" aria-hidden />
        <div className="mt-3 flex items-baseline justify-between gap-6 text-[10px] uppercase tracking-folio text-slatebody">
          <span>Find us · 12 Church Street</span>
          <span className="hidden text-right sm:block">
            Stratford, London E15 3HX
          </span>
        </div>

        <div className="mt-10 grid gap-12 md:mt-12 md:grid-cols-12 md:gap-0">
          <div className="md:col-span-4 md:pr-14">
            <h2 className="balance font-display text-[clamp(1.9rem,3.4vw,2.9rem)] font-medium leading-[1.03] tracking-display text-ink">
              The office in Stratford
            </h2>
            <p className="mt-5 max-w-[34rem] text-[16px] leading-[1.7] text-slatebody">
              We are on Church Street, a short walk from Stratford station. Come
              in during office hours, or on Saturday by appointment.
            </p>

            <dl className="mt-8 border-t border-ink/12">
              <div className="border-b border-ink/12 py-4">
                <dt className="text-[10px] uppercase tracking-folio text-slatebody">
                  Address
                </dt>
                <dd className="mt-1.5 text-[15px] leading-relaxed text-ink">
                  12 Church Street, Stratford, London E15 3HX
                </dd>
              </div>
              <div className="border-b border-ink/12 py-4">
                <dt className="text-[10px] uppercase tracking-folio text-slatebody">
                  Nearest station
                </dt>
                <dd className="mt-1.5 text-[15px] leading-relaxed text-ink">
                  Stratford
                </dd>
              </div>
              <div className="py-4">
                <dt className="text-[10px] uppercase tracking-folio text-slatebody">
                  Opening hours
                </dt>
                <dd className="mt-1.5 text-[15px] leading-relaxed text-ink">
                  Mon–Fri 9:30–18:30 · Saturday 11:00–14:00 by appointment
                </dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-8 md:border-l md:border-ink/12 md:pl-12">
            <figure>
              <div className="group relative aspect-[4/3] w-full overflow-hidden border border-ink/12 sm:aspect-[16/10]">
                <iframe
                  title="Map showing Church Street Solicitors at 12 Church Street, London E15 3HX"
                  src="https://maps.google.com/maps?q=51.535865,0.008003&z=17&output=embed"
                  className="h-full w-full grayscale transition duration-500 group-hover:grayscale-0 group-focus-within:grayscale-0 motion-reduce:transition-none"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-ink/12 pt-3">
                <span className="text-[14px] italic leading-snug text-slatebody">
                  12 Church Street, Stratford, London E15 3HX.
                </span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=12+Church+Street%2C+London+E15+3HX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] uppercase tracking-folio text-claret underline-offset-4 transition hover:underline"
                >
                  Open in Google Maps
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

const Emergency = () => (
  <section
    aria-label="Emergency numbers"
    className="dark-ground bg-ink py-16 md:py-20"
  >
    <div className="mx-auto max-w-content px-5 md:px-8">
      <Reveal>
        <div className="rule-double-inverse" aria-hidden />
        <div className="mt-3 flex items-baseline justify-between gap-6 text-[10px] uppercase tracking-folio text-parchment/60">
          <span>Out of hours · Emergency numbers</span>
          <span className="hidden text-right sm:block">
            Police station attendance · 24 hours
          </span>
        </div>

        <div className="mt-9 grid gap-7 md:mt-11 md:grid-cols-12 md:gap-0">
          <h2 className="balance font-display text-[clamp(1.9rem,3.4vw,2.9rem)] font-medium leading-[1.03] tracking-display text-parchment md:col-span-7 md:pr-14">
            If your matter cannot wait
          </h2>
          <div className="max-w-[36rem] space-y-4 text-[16px] leading-[1.7] text-parchment/75 md:col-span-5 md:border-l md:border-parchment/15 md:pl-12">
            <p>
              For urgent police station matters, attendance is available 24
              hours a day.
            </p>
            <p>
              Outside office hours, call one of the solicitors below. During
              office hours, the office line is the quickest way to reach us.
            </p>
          </div>
        </div>

        <dl className="mt-11 grid border-t border-parchment/15 md:mt-12 md:grid-cols-2">
          {emergency.map((person, i) => (
            <div
              key={person.name}
              className={`border-b border-parchment/15 py-6 md:py-7 ${
                i % 2 === 1
                  ? "md:border-l md:border-parchment/15 md:pl-12"
                  : "md:pr-12"
              }`}
            >
              <dt>
                <span className="tnum text-[10.5px] uppercase tracking-caps text-claret-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2.5 font-display text-[clamp(1.3rem,1.9vw,1.7rem)] font-medium leading-tight tracking-display text-parchment">
                  {person.name}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-folio text-parchment/60">
                  {person.role}
                </p>
              </dt>
              <dd className="mt-4">
                <a
                  href={`tel:${person.tel}`}
                  className="font-display text-[clamp(1.4rem,2.2vw,1.8rem)] leading-none tracking-display text-parchment transition hover:text-claret-bright"
                >
                  {person.display}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  </section>
);

const Contact = () => (
  <main id="main-content" className="bg-parchment">
    <InsideHead
      runningHead="Contact"
      aside="12 Church Street · Stratford, East London"
      folio="Folio · Contact"
      title="Get in touch"
      lead="Feel free to contact a member of our trained, honest team. A member of staff will endeavour to contact you within 2 hours during office hours; every enquiry is answered within one working day."
    />
    <OurContacts />
    <FindUs />
    <Emergency />
    <InsideFoot
      kicker="Contact · Church Street Solicitors"
      note="Answered within one working day"
    />
  </main>
);

export default Contact;
