import React from "react";
import { Star, ExternalLink, MessageSquare } from "lucide-react";
import { GOOGLE_BUSINESS_URL } from "@/lib/site";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";
import GoogleG from "@/components/site/GoogleG";

export default function GoogleReviewCta() {
  return (
    <section className="px-6 py-20">
      <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-ink/5 bg-white/70 p-8 sm:p-12">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>Kundenbewertungen</Eyebrow>
            <div className="mt-6 flex items-center gap-4">
              <GoogleG className="h-10 w-10" />
              <div>
                <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Echte Bewertungen auf Google</h2>
                <p className="mt-1 text-sm text-ink/60">Lies, was Kundinnen über ihre Behandlung bei Charm Beauty sagen.</p>
              </div>
            </div>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
              Transparenz ist mir wichtig. Deshalb verlinke ich direkt auf mein Google-Profil, wo du echte, unabhängige Bewertungen einsehen und selbst eine Bewertung hinterlassen kannst.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-4 py-2">
              <GoogleG className="h-4 w-4" />
              <span className="text-sm font-medium text-ink/60">Bewertungen von Google</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-4 lg:col-start-9">
            <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gold px-8 font-semibold text-white transition-all duration-500 hover:-translate-y-0.5 hover:bg-gold-dark">
              <ExternalLink className="h-4 w-4" /> Bewertungen ansehen
            </a>
            <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex h-14 items-center justify-center gap-2 rounded-full border border-ink/20 px-8 font-semibold text-ink transition-all duration-500 hover:-translate-y-0.5 hover:border-gold hover:text-gold">
              <Star className="h-4 w-4" /> Bewertung abgeben
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}