import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function TreatmentCard({ t, index }) {
  return (
    <Link to={`/behandlungen#${t.key}`} className={`group relative block overflow-hidden rounded-[2rem] ${index % 2 ? "md:mt-24" : ""}`}>
      <div className="aspect-[4/5] overflow-hidden">
        <img src={t.image} alt={`${t.title}behandlung bei Charm Beauty Winterthur`} className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
      <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur-md transition-all duration-500 group-hover:rotate-45 group-hover:bg-gold">
        <ArrowUpRight className="h-5 w-5" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-champagne">0{index + 1}</span>
        <h3 className="mt-2 text-4xl font-semibold text-white">{t.title}</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80">{t.text}</p>
      </div>
    </Link>
  );
}