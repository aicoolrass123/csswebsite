import Link from "next/link";
import React from "react";

const LawareaCard = ({
  title = "Criminal Law",
  text,
  href = "/area-of-practice",
  index = 0,
}) => {
  return (
    <Link
      href={href}
      className="register-row grid grid-cols-[2.75rem_minmax(0,1fr)_auto] items-baseline gap-x-4 gap-y-3 border-t border-ink/12 py-6 md:grid-cols-[4rem_minmax(0,1.05fr)_minmax(0,1.15fr)_auto] md:gap-x-8 md:py-8"
    >
      <span className="register-index tnum pt-1 text-[10.5px] uppercase tracking-caps text-claret">
        {String(index + 1).padStart(2, "0")}
      </span>

      <h3 className="register-title font-display text-[25px] font-medium leading-[1.05] tracking-display text-ink md:text-[32px]">
        {title}
      </h3>

      <span
        aria-hidden
        className="register-arrow col-start-3 row-start-1 text-[16px] leading-none text-claret md:col-start-4"
      >
        →
      </span>

      <p className="register-text col-start-2 col-end-4 max-w-[34rem] text-[15px] leading-[1.7] text-slatebody md:col-start-3 md:col-end-4 md:row-start-1">
        {text}
      </p>
    </Link>
  );
};

export default LawareaCard;
