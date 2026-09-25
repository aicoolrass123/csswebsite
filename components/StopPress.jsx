"use client";

import { useId, useState } from "react";

import CropMarks from "./CropMarks";

/* The coupon: a newspaper's back-page form, where a reader tears off a
   subscription. The only thing below the sheet. */
const StopPress = () => {
  const uid = useId();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section
      aria-label="Dispatches from the firm"
      className="dark-ground relative overflow-hidden bg-claret"
    >
      <CropMarks />
      <div className="mx-auto max-w-content px-5 py-14 md:px-8 md:py-16">
        <div className="rule-double-inverse" aria-hidden />
        <div className="mt-3 flex items-baseline justify-between gap-6 text-[10px] uppercase tracking-folio text-parchment/70">
          <span>Dispatches · Stop press</span>
          <span>Occasional · Unsubscribe anytime</span>
        </div>

        <div className="mt-9 grid gap-8 md:mt-11 md:grid-cols-12 md:gap-0">
          <div className="md:col-span-6 md:pr-12 lg:pr-16">
            <h2 className="balance font-display text-[clamp(1.7rem,2.8vw,2.4rem)] font-medium leading-[1.08] tracking-display text-parchment">
              Immigration and legal updates, without the jargon
            </h2>
            <p className="mt-4 max-w-[34rem] text-[15.5px] leading-[1.7] text-parchment/80">
              Occasional notes on Home Office changes, deadlines and your rights
              — written for people, not for other lawyers.
            </p>
          </div>

          <div className="md:col-span-6 md:border-l md:border-parchment/25 md:pl-10 lg:pl-14">
            {done ? (
              <div className="border-t-2 border-parchment bg-claret-deep px-5 py-6">
                <p className="font-display text-[19px] tracking-display text-parchment">
                  You are on the list.
                </p>
                <p className="mt-2 text-[14.5px] leading-relaxed text-parchment/80">
                  Thank you — we will write only when it matters.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  if (email.trim()) setDone(true);
                }}
              >
                <label
                  htmlFor={`${uid}-email`}
                  className="text-[10px] uppercase tracking-folio text-parchment/70"
                >
                  Email address
                </label>
                <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-end">
                  <input
                    id={`${uid}-email`}
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.co.uk"
                    className="field field--inverse flex-1"
                  />
                  <button
                    type="submit"
                    className="bg-ink px-7 py-4 text-[11px] font-semibold uppercase tracking-caps text-parchment transition hover:bg-parchment hover:text-ink"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            )}

            <p className="mt-5 text-[12.5px] leading-relaxed text-parchment/70">
              Your address is used for these notes only, and is handled under
              GDPR. Ask us at any time what we hold.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StopPress;
