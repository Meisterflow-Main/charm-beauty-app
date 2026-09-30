import React from "react";
import { Star, ExternalLink, PenLine } from "lucide-react";
import { GOOGLE_REVIEW_LINK } from "@/lib/site";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";

export default function LandingReviews() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-10 text-center">
          <Eyebrow>Kundenbewertungen</Eyebrow>
          <h2 className="mt-5 text-4xl font-semibold text-ink sm:text-5xl">Das sagen meine Kundinnen</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink/70">Deine Meinung ist mir wichtig. Warst du bereits bei Charm Beauty? Teile deine Erfahrung und hilf anderen, mich zu finden.</p>
        </Reveal>
        <Reveal delay={0.1} className="mx-auto max-w-md rounded-[2rem] border border-ink/5 bg-white/70 p-8 text-center backdrop-blur">
          <div className="flex justify-center gap-1" aria-label="5 von 5 Sternen">
            {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-7 w-7 fill-gold text-gold" />)}
          </div>
          <p className="mt-4 text-2xl font-semibold text-ink">5.0</p>
          <p className="text-sm text-ink/60">Auf Basis von Google-Bewertungen</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 text-sm font-semibold text-white transition hover:bg-gold-dark">
              Alle Bewertungen ansehen <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-ink/15 px-6 text-sm font-semibold text-ink transition hover:border-gold hover:text-gold">
              Bewertung schreiben <PenLine className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}