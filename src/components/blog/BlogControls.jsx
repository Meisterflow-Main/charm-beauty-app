import React from "react";
import { Search, X } from "lucide-react";

export default function BlogControls({
  query,
  setQuery,
  category,
  setCategory,
  sort,
  setSort,
  categories,
}) {
  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Artikel durchsuchen – Titel oder Stichwort"
          className="w-full rounded-full border border-ink/12 bg-card py-3 pl-11 pr-11 text-sm text-ink outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20"
          aria-label="Blog durchsuchen"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-ink/40 hover:text-ink"
            aria-label="Suche zurücksetzen"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setCategory("Alle")}
          className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition ${
            category === "Alle"
              ? "bg-gold text-white"
              : "border border-ink/12 text-ink/70 hover:border-gold hover:text-gold"
          }`}
        >
          Alle
        </button>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition ${
              category === c
                ? "bg-gold text-white"
                : "border border-ink/12 text-ink/70 hover:border-gold hover:text-gold"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 text-sm text-ink/60">
        <span className="font-medium text-ink/80">Sortieren:</span>
        <button
          onClick={() => setSort("newest")}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
            sort === "newest" ? "bg-ink text-cream" : "hover:text-ink"
          }`}
        >
          Neueste
        </button>
        <button
          onClick={() => setSort("oldest")}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
            sort === "oldest" ? "bg-ink text-cream" : "hover:text-ink"
          }`}
        >
          Älteste
        </button>
      </div>
    </div>
  );
}