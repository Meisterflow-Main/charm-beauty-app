import React from "react";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { TREATMENT_MENU, CONTACT } from "@/lib/site";
import { slugify } from "@/lib/treatments";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";
import BtnLink from "@/components/site/BtnLink";

const POPULAR_INDEX = { "0-0": true };

export default function FeaturedPricing() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <Reveal><Eyebrow>Preisübersicht</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-4xl font-semibold text-ink sm:text-5xl">Behandlungen &amp; Preise</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
              Transparente Preise für alle Behandlungen. Jede Behandlung wird individuell auf dich und deine Hautbedürfnisse abgestimmt.
            </p>
          </Reveal>
        </div>

        {TREATMENT_MENU.map((cat, ci) => (
          <div key={cat.category} className={ci > 0 ? "mt-16" : ""}>
            <Reveal>
              <h3 className="mb-8 text-2xl font-semibold text-ink">{cat.category}</h3>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cat.items.map((item, i) => {
                const popular = POPULAR_INDEX[`${ci}-${i}`];
                return (
                  <Reveal key={i} delay={(i % 3) * 0.08}>
                    <Link
                      to={`/behandlungen/angebot/${slugify(item.name).includes("liposana-3") ? "liposana-3-einzelbehandlung" : slugify(item.name)}`}
                      className={`group relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-500 hover:-translate-y-1 ${
                        popular
                          ? "border-gold/40 bg-cream shadow-[0_24px_60px_-24px_rgba(184,134,11,0.45)] lg:-translate-y-3 lg:scale-[1.03]"
                          : "border-ink/10 bg-white shadow-[0_8px_30px_-18px_rgba(4,21,31,0.18)] hover:border-gold/30 hover:shadow-[0_18px_44px_-20px_rgba(184,134,11,0.35)]"
                      }`}
                    >
                      {item.badge && !popular && (
                        <span className="absolute right-5 top-5 z-10 rounded-full bg-gold/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-gold">
                          {item.badge}
                        </span>
                      )}
                      {popular && (
                        <span className="absolute right-5 top-5 z-10 rounded-full bg-ink px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-champagne">
                          Beliebt
                        </span>
                      )}
                      <div className="relative -mx-7 -mt-7 mb-6 aspect-[3/2] overflow-hidden rounded-t-2xl bg-cream">
                        {item.image ? (
                          <Image src={item.image} alt={item.name} fittingType="fit" className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105" />
                        ) : (
                          <div className="h-full w-full bg-champagne/20" />
                        )}
                      </div>
                      <h4 className="pr-20 text-lg font-semibold leading-snug text-ink">{item.name}</h4>
                      {item.desc && <p className="mt-3 text-sm leading-relaxed text-ink/55">{item.desc}</p>}
                      <p className="mt-6 text-2xl font-semibold text-gold">{item.price}</p>
                      <div className="mt-auto pt-6">
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition group-hover:gap-3 group-hover:text-gold">
                          Details ansehen
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        ))}

        <Reveal delay={0.2} className="mt-14 text-center">
          <p className="text-sm text-ink/50">Vor Ort kannst du bar oder mit Twint bezahlen.</p>
          <div className="mt-6 flex justify-center">
            <BtnLink href={CONTACT.whatsapp}>Termin vereinbaren</BtnLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}