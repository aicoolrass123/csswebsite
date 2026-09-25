import Link from "next/link";
import Image from "next/image";
import React from "react";

import Fotercard, { columns } from "./Fotercard";

const Footer = () => {
  return (
    <footer className="dark-ground bg-ink pt-16 text-parchment">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <div className="border-b border-parchment/15 pb-8">
          <p className="font-display text-[clamp(2.1rem,6.5vw,4.25rem)] font-medium leading-[0.95] tracking-display">
            Church Street Solicitors
          </p>
          <p className="mt-5 text-[10px] uppercase tracking-folio text-parchment/50">
            Solicitors · Commissioners for Oaths · 12 Church Street, London E15
            3HX
          </p>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-[1.35fr_1fr_1fr_1.25fr]">
          <div>
            <Image
              src="/images/logo.png"
              alt="Church Street Solicitors"
              width={200}
              height={64}
              className="h-11 w-auto"
            />
            <p className="mt-6 max-w-xs text-[14.5px] leading-relaxed text-parchment/65">
              Trusted Stratford solicitors since 2015. Honest advice, fixed
              fees, and personal service across immigration, family, crime,
              housing, employment and litigation.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-block bg-claret px-6 py-3.5 text-[11px] font-semibold uppercase tracking-caps text-parchment transition hover:bg-parchment hover:text-ink"
            >
              Book an appointment
            </Link>
          </div>

          {columns.map((col) => (
            <Fotercard key={col.title} title={col.title} links={col.links} />
          ))}

          <div className="flex flex-col gap-5">
            <h3 className="text-[10px] uppercase tracking-folio text-claret-soft">
              Visit us
            </h3>
            <address className="text-[15px] not-italic leading-relaxed text-parchment/70">
              12 Church Street
              <br />
              London, E15 3HX
            </address>
            <a
              href="tel:02082210233"
              className="font-display text-[24px] tracking-display text-parchment transition hover:text-claret-bright"
            >
              020 8221 0233
            </a>
            <p className="text-[13.5px] leading-relaxed text-parchment/55">
              Mon–Fri 9:30–18:30
              <br />
              Sat 11:00–14:00 by appointment
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-parchment/10 pt-6 text-[12px] text-parchment/50 md:flex-row md:items-center md:justify-between">
          <p>SRA-regulated practice · Confidentiality and GDPR assured</p>
          <p className="md:text-center">
            Set in Bodoni and Spectral · Church Street Solicitors, established
            2015
          </p>
          <nav className="flex gap-5">
            <Link href="/about-us" className="hover:text-parchment">
              About
            </Link>
            <Link href="/our-fee" className="hover:text-parchment">
              Fees
            </Link>
            <Link href="/contact" className="hover:text-parchment">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
