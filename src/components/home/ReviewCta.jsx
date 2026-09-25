import React from "react";
import { Star } from "lucide-react";
import { GOOGLE_REVIEW_LINK } from "@/lib/site";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";
import BtnLink from "@/components/site/BtnLink";

export default function ReviewCta() {
  return (
    <section className="px-6 py-20">
      <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-champagne/25 px-8 py-16 sm:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>Kundenbewertungen</Eyebrow>
            <div className="mt-6 flex gap-1" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="h-6 w-6 fill-gold text-gold" />)}
            </div>
            <h2 className="mt-5 text-4xl font-semibold text-ink sm:text-5xl">Ihre Meinung zählt</h2>
            <p className="mt-5 max-w-lg text-lg text-ink/70">Waren Sie bereits bei Charm Beauty? Teilen Sie Ihre Erfahrung und helfen Sie anderen Kundinnen und Kunden, uns zu finden.</p>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-4 lg:col-start-9">
            <BtnLink href={GOOGLE_REVIEW_LINK}>Auf Google bewerten</BtnLink>
            <BtnLink to="/auftrag-bewerten" variant="outline">Feedback zum Besuch geben</BtnLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}