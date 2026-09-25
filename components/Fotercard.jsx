import Link from "next/link";
import React from "react";

const columns = [
  {
    title: "Practice",
    links: [
      { label: "Immigration", href: "/area-of-practice" },
      { label: "Family law", href: "/area-of-practice" },
      { label: "Criminal defence", href: "/area-of-practice" },
      { label: "Housing law", href: "/area-of-practice" },
      { label: "Employment", href: "/area-of-practice" },
      { label: "Civil litigation", href: "/area-of-practice" },
    ],
  },
  {
    title: "Firm",
    links: [
      { label: "About us", href: "/about-us" },
      { label: "Our team", href: "/our-team" },
      { label: "Our fees", href: "/our-fee" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const Fotercard = ({ title = "Practice", links = columns[0].links }) => {
  return (
    <div className="flex min-w-[160px] flex-col gap-5">
      <h3 className="text-[10px] uppercase tracking-folio text-claret-soft">
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[15px] text-parchment/70 underline-offset-4 transition hover:text-parchment hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fotercard;
export { columns };
