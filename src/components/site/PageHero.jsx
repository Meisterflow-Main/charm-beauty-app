import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";

export default function PageHero({ eyebrow, title, intro, crumb }) {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-36 sm:pt-44">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-champagne/25 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-ink/50">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><ChevronRight className="h-3 w-3" /></li>
            <li aria-current="page" className="text-ink">{crumb}</li>
          </ol>
        </nav>
        <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] text-ink sm:text-7xl">{title}</h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/70">{intro}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}