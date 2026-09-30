import React from "react";
import { TREATMENT_MENU, CONTACT } from "@/lib/site";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";
import BtnLink from "@/components/site/BtnLink";

export default function TreatmentMenu() {
  return (
    <section className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <Reveal><Eyebrow>Preisliste</Eyebrow></Reveal>
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
              <h3 className="mb-8 flex items-center gap-4 text-2xl font-semibold text-ink">
                <span className="h-px flex-1 bg-ink/10" />
                {cat.category}
                <span className="h-px flex-1 bg-ink/10" />
              </h3>
            </Reveal>
            <div className="space-y-4">
              {cat.items.map((item, i) => (
                <Reveal key={i} delay={(i % 4) * 0.05}>
                  <div className="group rounded-2xl border border-ink/8 bg-white/60 p-6 transition hover:border-gold/30 hover:bg-white">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <h4 className="text-lg font-semibold text-ink">{item.name}</h4>
                          {item.badge && (
                            <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gold">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        {item.desc && <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.desc}</p>}
                      </div>
                      <span className="shrink-0 whitespace-nowrap text-lg font-semibold text-gold">{item.price}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}

        <Reveal delay={0.3} className="mt-16 text-center">
          <p className="text-sm text-ink/50">Vor Ort kannst du bar oder mit Twint bezahlen.</p>
          <div className="mt-6 flex justify-center">
            <BtnLink href={CONTACT.whatsapp}>Termin vereinbaren</BtnLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}