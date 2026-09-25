"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "They dealt with my case in a professional manner. Very efficient, helpful and understanding. I would have no hesitation in using them again or recommending them to friends.",
    name: "Femi Sotonwa",
    detail: "South Ockendon, Essex",
  },
  {
    quote:
      "I do not know how to thank you enough — I am elated. You are doing a great job and only the people you work with can tell how good you are. God bless this firm abundantly.",
    name: "Lisa",
    detail: "Immigration client",
  },
  {
    quote:
      "They knew what was in my heart and fought for it. They kept me informed, explained every step, and secured the outcome my family needed. A billion thank yous.",
    name: "Lisa",
    detail: "London — citizenship matter",
  },
];

/* The letters page: three extracts from client letters, published with
   permission, turned by hand. */
const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const letter = testimonials[index];

  return (
    <div className="flex h-full flex-col">
      <figure className="flex flex-1 flex-col">
        <blockquote
          key={index}
          className="letter-in hang-quote font-display text-[clamp(1.5rem,2.5vw,2.15rem)] font-normal italic leading-[1.32] tracking-display text-ink"
        >
          “{letter.quote}”
        </blockquote>

        <figcaption className="mt-auto flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-ink/12 pt-5">
          <p className="font-display text-[18px] tracking-display text-ink">
            {letter.name}
            <span className="ml-3 text-[11px] uppercase tracking-caps text-slatebody">
              {letter.detail}
            </span>
          </p>
          <p className="text-[10px] uppercase tracking-folio text-slatebody">
            Extracts from client letters
          </p>
        </figcaption>
      </figure>

      <div className="mt-6 flex items-center gap-1.5">
        {testimonials.map((item, i) => (
          <button
            key={item.quote}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show letter ${i + 1} of ${testimonials.length}`}
            aria-current={index === i ? "true" : undefined}
            className="-my-4 flex h-11 items-center px-1"
          >
            <span
              className={`h-[3px] transition-all duration-500 ${
                index === i ? "w-12 bg-claret" : "w-6 bg-ink/40 hover:bg-ink/70"
              }`}
            />
          </button>
        ))}
        <span className="tnum ml-auto text-[10px] uppercase tracking-folio text-slatebody">
          {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default Testimonial;
