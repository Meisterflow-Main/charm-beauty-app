import React from "react";

export default function ChipGroup({ label, options, value, onChange }) {
  return (
    <fieldset>
      <legend className="mb-3 block text-xs font-medium uppercase tracking-[0.14em] text-ink/60">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            type="button"
            key={o}
            onClick={() => onChange(o)}
            aria-pressed={value === o}
            className={`min-h-[44px] rounded-full border px-5 text-sm transition-all duration-300 ${value === o ? "border-ink bg-ink text-cream" : "border-ink/15 bg-white/60 text-ink hover:border-gold"}`}
          >
            {o}
          </button>
        ))}
      </div>
    </fieldset>
  );
}