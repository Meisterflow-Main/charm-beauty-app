import React from "react";

export default function Eyebrow({ children, light = false }) {
  return (
    <span className={`inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] ${light ? "text-champagne" : "text-gold"}`}>
      <span className={`h-px w-8 ${light ? "bg-champagne" : "bg-gold"}`} />
      {children}
    </span>
  );
}