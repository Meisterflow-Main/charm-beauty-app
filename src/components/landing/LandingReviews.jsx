import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, PenLine, ArrowRight } from "lucide-react";
import { GOOGLE_REVIEW_LINK } from "@/lib/site";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";
import GoogleG from "@/components/site/GoogleG";

export default function LandingReviews() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-10 text-center">
          <Eyebrow>Kundenbewertungen</Eyebrow>
          <h2 className="mt-5 text-4xl font-semibold text-ink sm:text-5xl">Bewertungen auf Google</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink/70">Echte, unabhängige Bewertungen meiner Kundinnen findest du direkt auf Google. Ich verlinke absichtlich auf Google für volle Transparenz.</p>
        </Reveal>
        <Reveal delay={0.1} className="mx-auto max-w-md rounded-[2rem] border border-ink/5 bg-white/70 p-8 text-center backdrop-blur">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/80 shadow-sm">
            <GoogleG className="h-8 w-8" />
          </div>
          <p className="text-sm font-medium text-ink/60">Bewertungen von Google</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 text-sm font-semibold text-white transition hover:bg-gold-dark">
              Alle Bewertungen ansehen <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-ink/15 px-6 text-sm font-semibold text-ink transition hover:border-gold hover:text-gold">
              Bewertung schreiben <PenLine className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="mt-6 text-center">
            <Link to="/bewertungen" className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition hover:gap-2.5">Mehr zu Bewertungen und Transparenz <ArrowRight className="h-3.5 w-3.5" /></Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}