import React from "react";

export default function Field({ label, error, textarea = false, className = "", ...props }) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-ink/60">{label}</span>
      <Tag
        {...props}
        aria-invalid={!!error}
        className={`w-full rounded-2xl border bg-white/70 px-5 text-base text-ink placeholder:text-ink/35 outline-none transition-all duration-300 focus:border-gold focus:bg-white focus:ring-4 focus:ring-gold/15 ${textarea ? "min-h-[140px] resize-y py-4" : "h-14"} ${error ? "border-destructive" : "border-ink/10"}`}
      />
      {error && <span className="mt-1.5 block text-sm text-destructive">{error}</span>}
    </label>
  );
}