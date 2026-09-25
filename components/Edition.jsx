"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { faces, wireItems } from "@/Data";

import LeadFace from "./edition/LeadFace";
import RegisterFace from "./edition/RegisterFace";
import LettersFace from "./edition/LettersFace";
import NoticeFace from "./edition/NoticeFace";

const FACE_COMPONENTS = {
  lead: LeadFace,
  register: RegisterFace,
  letters: LettersFace,
  notice: NoticeFace,
};



/* The fold crease at the right edge of a face, with the thumb tab printed
   on it. In print, the tab is how a reader finds the next page. */
const Fold = ({ face, onTurn }) => {
  const last = face.index === faces.length - 1;
  const target = last ? 0 : face.index + 1;
  const label = last ? faces[0] : faces[target];

  return (
    <button
      type="button"
      onClick={() => onTurn(target)}
      className={`fold ${last ? "fold--last" : ""}`}
      aria-label={`Turn to page ${label.folio}, ${label.name}`}
    >
      <span className="fold__tab">
        {last ? "\u21ba" : "\u2192"} {label.folio} · {label.name}
      </span>
    </button>
  );
};

const Edition = () => {
  const [active, setActive] = useState(0);
  const [staged, setStaged] = useState(false);
  const [dragging, setDragging] = useState(false);
  const stageRef = useRef(null);
  const drag = useRef({ x: 0, dx: 0, live: false });
  const wheelLock = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setStaged(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const go = useCallback((next) => {
    setActive(Math.max(0, Math.min(faces.length - 1, next)));
  }, []);

  /* Arrow keys turn the sheet. They are bound to the sheet itself, not the
     window: text selection, scrollbars and browser shortcuts keep their own
     keys. Home and End are left to the document. */
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const onKey = (event) => {
      const el = document.activeElement;
      const tag = el?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (!stage.contains(el) && el !== document.body) return;
      if (event.key === "ArrowRight") go(active + 1);
      else if (event.key === "ArrowLeft") go(active - 1);
      else return;
      event.preventDefault();
    };
    stage.addEventListener("keydown", onKey);
    return () => stage.removeEventListener("keydown", onKey);
  }, [active, go]);

  /* Paper drags; ink does not. A drag that starts on text or a control is a
     selection or a click, never a page turn. */
  const onPointerDown = (event) => {
    if (!staged) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    if (
      event.target.closest(
        "a, button, input, textarea, select, label, p, h1, h2, h3, li, blockquote, figure, img"
      )
    )
      return;
    drag.current = { x: event.clientX, dx: 0, live: true };
    setDragging(true);
  };

  const onPointerMove = (event) => {
    if (!drag.current.live) return;
    drag.current.dx = event.clientX - drag.current.x;
    const track = stageRef.current?.querySelector(".sheet-track");
    if (track) {
      track.style.transform = `translate3d(calc(${
        -active * 100
      }% + ${drag.current.dx}px), 0, 0)`;
    }
  };

  const endDrag = () => {
    if (!drag.current.live) return;
    const { dx } = drag.current;
    drag.current.live = false;
    setDragging(false);
    const track = stageRef.current?.querySelector(".sheet-track");
    if (track) track.style.transform = "";
    if (Math.abs(dx) > 64) go(dx < 0 ? active + 1 : active - 1);
  };

  const onWheel = (event) => {
    if (!staged) return;
    if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
    const now = Date.now();
    if (now < wheelLock.current) return;
    if (Math.abs(event.deltaX) < 18) return;
    wheelLock.current = now + 900;
    go(event.deltaX > 0 ? active + 1 : active - 1);
  };

  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section
      className="sheet dark-ground relative"
      aria-label="The folded edition"
      data-face={active}
    >
      {/* Standing head: the paper's name for itself, the wire, the date. */}
      <div className="sheet-band">
        <div className="mx-auto flex max-w-content items-center gap-5 px-5 md:px-8">
          <p className="hidden shrink-0 py-3.5 text-[10px] uppercase tracking-folio text-parchment/60 sm:block">
            The folded edition
          </p>
          <div className="wire relative min-w-0 flex-1 overflow-hidden border-l border-parchment/12 py-3.5 pl-5">
            <div className="wire-track" aria-hidden="true">
              {[0, 1].map((half) => (
                <ul key={half} className="flex shrink-0 items-center">
                  {wireItems.map((item) => (
                    <li
                      key={`${half}-${item}`}
                      className="flex items-center whitespace-nowrap text-[10.5px] uppercase tracking-caps text-parchment/50"
                    >
                      <span
                        aria-hidden
                        className="mx-5 h-1.5 w-1.5 rotate-45 bg-claret"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <time
            suppressHydrationWarning
            className="tnum hidden shrink-0 border-l border-parchment/12 py-3.5 pl-5 text-[10px] uppercase tracking-folio text-parchment/60 lg:block"
          >
            {today}
          </time>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Page {faces[active].folio} of {faces.length}: {faces[active].name}
      </p>

      <div
        className="sheet-stage"
        ref={stageRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onPointerCancel={endDrag}
        onWheel={onWheel}
      >
        <div
          className="sheet-track"
          data-dragging={dragging ? "true" : "false"}
          style={staged ? { transform: `translate3d(${-active * 100}%, 0, 0)` } : undefined}
        >
          {faces.map((face, index) => {
            const Face = FACE_COMPONENTS[face.id];
            const current = index === active;
            return (
              <article
                key={face.id}
                className="sheet-face"
                data-active={current ? "true" : "false"}
                aria-hidden={staged && !current ? "true" : undefined}
                inert={staged && !current ? true : undefined}
              >
                <Face face={face} index={index} onTurn={go} />
                <Fold face={{ ...face, index }} onTurn={go} />
              </article>
            );
          })}
        </div>
      </div>

      {/* Folio line: where the page ends and the numbering begins. */}
      <div className="sheet-rail">
        <span
          aria-hidden
          className="sheet-rule"
          style={{ transform: `scaleX(${(active + 1) / faces.length})` }}
        />
        <div className="mx-auto flex max-w-content flex-wrap items-center gap-x-8 gap-y-4 px-5 py-4 md:flex-nowrap md:px-8">
          <p className="tnum shrink-0 font-display text-[15px] tracking-display text-parchment/60">
            <span className="text-parchment">{faces[active].folio}</span>
            <span aria-hidden className="px-2 text-parchment/25">
              /
            </span>
            IV
          </p>

          <nav aria-label="Pages of the edition" className="min-w-0 flex-1">
            <ul className="flex flex-wrap items-baseline gap-x-7 gap-y-2">
              {faces.map((face, index) => (
                <li key={face.id}>
                  <button
                    type="button"
                    onClick={() => go(index)}
                    aria-current={index === active ? "true" : undefined}
                    className={`folio-tab text-[10.5px] uppercase tracking-caps transition ${
                      index === active
                        ? "text-parchment"
                        : "text-parchment/60 hover:text-parchment/90"
                    }`}
                  >
                    <span className="tnum mr-2 text-claret-soft">
                      {face.folio}
                    </span>
                    {face.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden shrink-0 items-stretch self-stretch lg:flex">
            <button
              type="button"
              onClick={() => go(active - 1)}
              disabled={active === 0}
              aria-label="Previous page"
              className="flex w-14 items-center justify-center border-l border-parchment/15 text-[15px] text-parchment/60 transition hover:bg-claret hover:text-parchment disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-parchment/60"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => go(active + 1)}
              disabled={active === faces.length - 1}
              aria-label="Next page"
              className="flex w-14 items-center justify-center border-l border-parchment/15 text-[15px] text-parchment/60 transition hover:bg-claret hover:text-parchment disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-parchment/60"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* The standing facts: never leave the foot of the sheet. */}
      <div className="border-t border-parchment/12">
        <div className="mx-auto flex max-w-content flex-col gap-2 px-5 py-3.5 text-[10px] uppercase tracking-folio text-parchment/60 md:flex-row md:items-center md:justify-between md:gap-8 md:px-8">
          <a
            href="tel:02082210233"
            className="font-display text-[15px] tracking-display text-parchment transition hover:text-claret-bright"
          >
            020 8221 0233
          </a>
          <span>Mon–Fri 9:30–18:30 · Saturday 11:00–14:00 by appointment</span>
          <span className="hidden lg:block">12 Church Street, London E15 3HX</span>
          <span className="hidden xl:block">SRA-regulated practice</span>
        </div>
      </div>
    </section>
  );
};

export default Edition;
