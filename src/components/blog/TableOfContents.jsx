import React from "react";

export default function TableOfContents({ sections }) {
  return (
    <nav aria-label="Inhaltsverzeichnis" className="rounded-2xl border border-ink/8 bg-cream/60 p-5">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">Inhaltsverzeichnis</p>
      <ol className="space-y-2 text-sm">
        {sections.map((s, i) => (
          <li key={i} className="flex gap-3">
            <span className="font-semibold text-gold">{String(i + 1).padStart(2, "0")}</span>
            <a href={`#abschnitt-${i}`} className="text-ink/70 transition hover:text-gold">
              {s.heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}