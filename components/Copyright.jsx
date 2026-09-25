import React from "react";

const Copyright = () => {
  return (
    <div className="dark-ground bg-ink-deep py-5">
      <p className="mx-auto max-w-content px-5 text-center text-[12px] tracking-wide text-parchment/55 md:px-8">
        © {new Date().getFullYear()} Church Street Solicitors Ltd · All rights
        reserved · Designed by E16 Media
      </p>
    </div>
  );
};

export default Copyright;
