"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const links = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "What we do", href: "/area-of-practice" },
  { label: "Our team", href: "/our-team" },
  { label: "Our fees", href: "/our-fee" },
  { label: "Contact", href: "/contact" },
];

const Heading = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const openerRef = useRef(null);
  const drawerRef = useRef(null);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* The drawer owns the keyboard while it is open: focus moves in on open,
     Escape and the close button return it to the menu button, and Tab is
     held within the drawer. */
  useEffect(() => {
    if (!isOpen) return;
    const drawer = drawerRef.current;
    if (!drawer) return;

    const focusables = drawer.querySelectorAll(
      'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusables[0];
    if (first) first.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        openerRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;
      const items = drawer.querySelectorAll(
        'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      if (items.length === 0) return;
      const firstItem = items[0];
      const lastItem = items[items.length - 1];
      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault();
        lastItem.focus();
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault();
        firstItem.focus();
      }
    };
    drawer.addEventListener("keydown", onKeyDown);
    return () => drawer.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const meta = scrolled ? "text-ink/60" : "text-parchment/65";
  const primaryText = scrolled ? "text-ink" : "text-parchment";
  const barTone = scrolled
    ? "border-ink/10 bg-parchment/95 backdrop-blur-md"
    : "border-parchment/12 bg-transparent";

  return (
    <header className="fixed inset-x-0 top-0 z-50 font-sans">
      {/* Standing information — on the home page the edition's own band
          carries it, so the strip is folded away there. */}
      <div
        className={`overflow-hidden bg-ink transition-all duration-500 ${
          isHome ? "hidden" : "hidden md:block"
        } ${scrolled ? "max-h-0 opacity-0" : "max-h-16 opacity-100"}`}
      >
        <div className="mx-auto flex max-w-content items-center justify-between gap-8 px-5 py-2.5 md:px-8">
          <ul className="flex items-center gap-6 text-[10.5px] uppercase tracking-caps text-parchment/60">
            <li>12 Church Street, London E15 3HX</li>
            <li className="hidden lg:block">Mon–Fri 9:30–18:30 · Sat by appointment</li>
            <li className="hidden xl:block">SRA-regulated practice</li>
          </ul>
          <p className="text-[10.5px] uppercase tracking-caps text-parchment/60">
            Immigration · Family · Crime · Housing · Employment · Litigation
          </p>
        </div>
      </div>

      {/* Masthead bar */}
      <div className={`border-b transition-colors duration-500 ${barTone}`}>
        <div
          className={`mx-auto flex max-w-content items-center justify-between gap-4 px-5 transition-all duration-500 md:gap-6 md:px-8 ${
            scrolled ? "py-3" : "py-4 md:py-5"
          }`}
        >
          <Link
            href="/"
            className="min-w-0 leading-none"
            aria-label="Church Street Solicitors — home"
          >
            <span
              className={`font-display block overflow-hidden text-ellipsis whitespace-nowrap leading-[0.95] tracking-display transition-all duration-500 ${primaryText} ${
                scrolled ? "text-[18px] md:text-[20px]" : "text-[18px] md:text-[30px]"
              }`}
            >
              Church Street <span className="block md:inline">Solicitors</span>
            </span>
            <span
              className={`mt-1 hidden text-[9.5px] uppercase tracking-folio transition-colors duration-500 sm:block ${meta}`}
            >
              Stratford, London E15 · Established 2015
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center lg:flex">
            <ul className="flex items-center">
              {links.map((l) => {
                const current =
                  l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href);
                return (
                <li
                  key={l.label}
                  className={`border-l pl-4 ml-4 first:ml-0 first:border-l-0 first:pl-0 ${
                    scrolled ? "border-ink/15" : "border-parchment/15"
                  }`}
                >
                    <Link
                      href={l.href}
                      aria-current={current ? "page" : undefined}
                      className={`nav-link text-[10.5px] font-semibold uppercase tracking-caps transition-colors ${
                        current ? "text-claret" : meta
                      } ${
                        scrolled ? "hover:text-ink" : "hover:text-parchment"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <a
              href="tel:02082210233"
              className={`hidden font-display text-[16px] tracking-display transition-colors xl:block ${primaryText} ${
                scrolled ? "hover:text-claret" : "hover:text-claret-bright"
              }`}
            >
              020 8221 0233
            </a>
            <Link
              href="/contact"
              className="hidden bg-claret px-5 py-3 text-[10.5px] font-semibold uppercase tracking-caps text-parchment transition hover:bg-ink sm:inline-block"
            >
              Book an appointment
            </Link>
            <a
              href="tel:02082210233"
              className="whitespace-nowrap bg-claret px-4 py-3 text-[11px] font-semibold uppercase tracking-caps text-parchment sm:hidden"
            >
              Call now
            </a>
            <button
              ref={openerRef}
              onClick={() => setIsOpen(true)}
              className={`flex h-11 w-11 items-center justify-center border text-xl transition-colors lg:hidden ${
                scrolled
                  ? "border-ink/20 text-ink"
                  : "border-parchment/30 text-parchment"
              }`}
              aria-label="Open menu"
              aria-expanded={isOpen}
            >
              <IoMdMenu />
            </button>
          </div>
        </div>
      </div>

      {/* Drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-ink/70 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <nav
          ref={drawerRef}
          aria-label="Mobile"
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col border-l border-ink/10 bg-parchment transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
            <p className="text-[10.5px] font-semibold uppercase tracking-folio text-slatebody">
              Church Street Solicitors
            </p>
            <button
              onClick={() => {
                setIsOpen(false);
                openerRef.current?.focus();
              }}
              className="flex h-11 w-11 items-center justify-center bg-ink text-parchment"
              aria-label="Close menu"
            >
              <IoMdClose />
            </button>
          </div>

          <ul className="flex flex-col px-5">
            {links.map((l, i) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-baseline justify-between border-b border-ink/10 py-4"
                >
                  <span className="font-display text-[26px] leading-none tracking-display text-ink">
                    {l.label}
                  </span>
                  <span className="tnum text-[10.5px] uppercase tracking-folio text-claret">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto bg-ink px-5 py-6 text-parchment dark-ground">
            <p className="text-[11px] uppercase tracking-caps text-parchment/55">
              Monday–Friday 9:30–18:30 · Saturday by appointment
            </p>
            <a
              href="tel:02082210233"
              className="font-display mt-3 block text-[28px] leading-none tracking-display"
            >
              020 8221 0233
            </a>
            <p className="mt-3 text-[13px] leading-relaxed text-parchment/60">
              12 Church Street, Stratford, London E15 3HX
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Heading;
