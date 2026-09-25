import InsideFoot from "@/components/InsideFoot";
import InsideHead from "@/components/InsideHead";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import TeamCard from "@/components/TeamCard";

export const metadata = {
  title: "Our team | Church Street Solicitors, Stratford",
  description:
    "Meet the team at Church Street Solicitors, Stratford: David Akin-Samuels, Kweve Omoniruvbe, Solomon Airhuoyo-Obazee and John-Maurice Ngunza.",
};

const team = [
  {
    name: "David Akin-Samuels",
    quals: "LL.B (Hons); Pg.Dip.(Law); MA; PhD.",
    role: "Solicitor",
    areas: "Immigration, family, crime, housing and civil litigation.",
    plate: "/plates/team-david-akin-samuels.jpg",
  },
  {
    name: "Kweve Omoniruvbe",
    quals: "BSc. (Hons); MILR; Pg.Dip.(Law)",
    role: "Solicitor",
    areas: "Immigration, crime, housing and employment.",
    plate: "/plates/team-kevwe-omoniruvbe.jpg",
  },
  {
    name: "Solomon Airhuoyo-Obazee",
    quals: "LL.B (Hons); Pg. Dip. (Law); FCILEx. (Law)",
    role: "Chartered Legal Executive",
    plate: "/plates/team-solomon-airhuoyo-obazee.jpg",
  },
  {
    name: "John-Maurice Ngunza",
    quals: "LL.B (Hons); ACIlex; AfiCB; PM.Dip",
    role: "Case Worker",
    plate: "/plates/team-john-maurice-ngunza.jpg",
  },
];

/* ------------------------------------------------------------------ page */

const OurTeam = () => (
  <main id="main-content" className="bg-parchment">
    <InsideHead
      runningHead="Our team"
      aside="12 Church Street · Stratford, East London"
      folio="Folio · Team"
      title="The people on your side"
      lead="Four practitioners at one Stratford office, and a named solicitor with conduct of every matter. The person handling your case is the person you speak to."
    />

    <section aria-label="The team" className="bg-parchment py-16 md:py-24">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <Reveal>
          <SectionHead
            runningHead="The team"
            aside="Four practitioners · One office"
            title="You will know who is handling your matter"
            lead="Everything the firm does happens at 12 Church Street. From the first meeting to the last, your matter is run by the solicitor with conduct of it."
          />

          <div className="mt-12 grid gap-x-10 gap-y-14 md:mt-14 md:grid-cols-2 md:gap-x-12">
            {team.map((member, i) => (
              <TeamCard key={member.name} index={i} {...member} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    <InsideFoot
      kicker="Our team · Church Street Solicitors"
      note="Four practitioners · One office"
    />
  </main>
);

export default OurTeam;
