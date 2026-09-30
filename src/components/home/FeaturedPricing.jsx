import React from "react";
import { Clock, ArrowRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";
import BtnLink from "@/components/site/BtnLink";
import { CONTACT } from "@/lib/site";

const CARDS = [
  { name: "Anti-Aging Behandlung", duration: "60–90 Min.", price: "CHF 60.– bis 160.–", popular: true },
  { name: "Säurepeeling", duration: "45–60 Min.", price: "CHF 80.– bis 140.–" },
  { name: "Hydrafacial", duration: "60–90 Min.", price: "CHF 120.– bis 180.–" },
  { name: "Mikroneedling", duration: "45–75 Min.", price: "CHF 90.– bis 150.–" },
  { name: "Herren-Gesichtsbehandlung", duration: "60 Min.", price: "CHF 60.– bis 130.–" },
  { name: "Wimpernlifting", duration: "60 Min.", price: "CHF 80.– bis 120.–" },
];

export default function FeaturedPricing() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <Reveal><Eyebrow>Beliebte Behandlungen</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-4xl font-semibold text-ink sm:text-5xl">Schönheit &amp; Entspannung</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
              Meine beliebtesten Behandlungen für strahlende Haut und wohltuende Entspannung – individuell auf dich abgestimmt.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 0.08}>
              <div
                className={`group relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-500 hover:-translate-y-1 ${
                  c.popular
                    ? "border-gold/40 bg-cream shadow-[0_24px_60px_-24px_rgba(184,134,11,0.45)] lg:-translate-y-3 lg:scale-[1.03]"
                    : "border-ink/10 bg-white shadow-[0_8px_30px_-18px_rgba(4,21,31,0.18)] hover:border-gold/30 hover:shadow-[0_18px_44px_-20px_rgba(184,134,11,0.35)]"
                }`}
              >
                {c.popular && (
                  <span className="absolute right-5 top-5 rounded-full bg-ink px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-champagne">
                    Beliebt
                  </span>
                )}
                <h3 className="pr-20 text-xl font-semibold text-ink">{c.name}</h3>
                <div className="mt-3 flex items-center gap-2 text-sm text-ink/55">
                  <Clock className="h-4 w-4 text-gold" />
                  <span>{c.duration}</span>
                </div>
                <p className="mt-6 text-2xl font-semibold text-gold">{c.price}</p>
                <div className="mt-auto pt-7">
                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition group-hover:gap-3 group-hover:text-gold"
                  >
                    Termin buchen
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14 text-center">
          <BtnLink to="/behandlungen" variant="outline">
            Alle Behandlungen ansehen
            <ArrowRight className="h-4 w-4" />
          </BtnLink>
        </Reveal>
      </div>
    </section>
  );
}