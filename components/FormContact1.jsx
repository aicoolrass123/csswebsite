"use client";
import React, { useId, useState } from "react";

const FormContact1 = ({ tone = "paper" }) => {
  const uid = useId();
  const [sent, setSent] = useState(false);
  const inverse = tone === "ink";

  const field = (name) => `${uid}-${name}`;

  const shell = inverse
    ? "bg-ink-soft p-6 md:p-7"
    : "border border-ink/10 bg-paper p-6 md:p-7";
  const label = inverse
    ? "text-[10px] uppercase tracking-folio text-parchment/50"
    : "text-[10px] uppercase tracking-folio text-slatebody";
  const heading = inverse
    ? "font-display mt-3 text-[26px] leading-none tracking-display text-parchment"
    : "font-display mt-3 text-[26px] leading-none tracking-display text-ink";
  const intro = inverse
    ? "mt-3 text-[14.5px] leading-relaxed text-parchment/70"
    : "mt-3 text-[14.5px] leading-relaxed text-slatebody";
  const input = inverse ? "field field--inverse" : "field";
  const button = inverse
    ? "mt-1 bg-claret py-4 text-[11px] font-semibold uppercase tracking-caps text-parchment transition hover:bg-parchment hover:text-ink"
    : "mt-1 bg-claret py-4 text-[11px] font-semibold uppercase tracking-caps text-parchment transition hover:bg-ink";
  const fine = inverse
    ? "text-[12.5px] leading-relaxed text-parchment/55"
    : "text-[12.5px] leading-relaxed text-slatebody";
  const done = inverse
    ? "mt-7 border-t-2 border-claret-bright bg-ink px-5 py-6"
    : "mt-7 border-t-2 border-claret bg-white px-5 py-6";

  return (
    <div className={shell}>
      <p className={label}>
        {inverse ? "Write to us" : "Callback request"}
      </p>
      <h3 className={heading}>
        {inverse ? "Tell us what happened" : "Request a callback"}
      </h3>
      <p className={intro}>
        {inverse
          ? "A trained member of our team will call back, explain your options and agree a time that suits you. We reply within one working day."
          : "We reply within one working day. No obligation."}
      </p>

      {sent ? (
        <div className={done}>
          <p
            className={`font-display text-[19px] tracking-display ${
              inverse ? "text-parchment" : "text-ink"
            }`}
          >
            Thank you — your request is with us.
          </p>
          <p
            className={`mt-2 text-[14.5px] leading-relaxed ${
              inverse ? "text-parchment/70" : "text-slatebody"
            }`}
          >
            A member of our team will contact you shortly. For urgent matters,
            call{" "}
            <a
              href="tel:02082210233"
              className={`underline underline-offset-4 ${
                inverse ? "text-claret-bright" : "text-claret"
              }`}
            >
              020 8221 0233
            </a>
            .
          </p>
        </div>
      ) : (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
          className="mt-6 flex flex-col gap-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label htmlFor={field("name")} className="flex flex-col gap-1">
              <span className={label}>Full name (required)</span>
              <input
                id={field("name")}
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Jane Smith"
                className={input}
              />
            </label>
            <label htmlFor={field("phone")} className="flex flex-col gap-1">
              <span className={label}>Phone (required)</span>
              <input
                id={field("phone")}
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="07700 900000"
                className={input}
              />
            </label>
          </div>

          <label htmlFor={field("email")} className="flex flex-col gap-1">
              <span className={label}>Email (required)</span>
            <input
              id={field("email")}
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.co.uk"
              className={input}
            />
          </label>

          <label htmlFor={field("matter")} className="flex flex-col gap-1">
              <span className={label}>How can we help? (required)</span>
            <textarea
              id={field("matter")}
              name="matter"
              rows={3}
              required
              placeholder="Briefly describe your matter — e.g. spouse visa extension due in March."
              className={`${input} resize-none`}
            />
          </label>

          <button type="submit" className={button}>
            Send request
          </button>

          <p className={fine}>
            By sending, you agree to be contacted about your enquiry. Details
            are handled under GDPR and SRA rules, and are never passed on.
          </p>
        </form>
      )}
    </div>
  );
};

export default FormContact1;
