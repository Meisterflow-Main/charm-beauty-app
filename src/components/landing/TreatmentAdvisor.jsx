import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";
import BtnLink from "@/components/site/BtnLink";

const AREAS = [
  { key: "gesicht", label: "Gesicht", treatments: ["Tiefenreinigung", "Feuchtigkeitspflege", "Anti-Aging"] },
  { key: "koerper", label: "Körper", treatments: ["Körperpeeling", "Entspannungsmassage", "Hautstraffung"] },
  { key: "beratung", label: "Beratung", treatments: ["Hautanalyse", "Pflegeberatung"] },
];

export default function TreatmentAdvisor() {
  const [area, setArea] = useState(null);
  const [treatment, setTreatment] = useState(null);
  const current = AREAS.find((a) => a.key === area);

  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal className="mb-10 text-center">
          <Eyebrow>Behandlungsberater</Eyebrow>
          <h2 className="mt-5 text-4xl font-semibold text-ink sm:text-5xl">Finde deine Behandlung</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink/70">Wähle deinen Bereich und die gewünschte Behandlung – ich erstelle dir gerne eine individuelle Offerte.</p>
        </Reveal>
        <Reveal delay={0.1} className="rounded-[2.5rem] border border-ink/5 bg-white/70 p-8 backdrop-blur sm:p-12">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-ink/60">1. Bereich wählen</p>
          <div className="flex flex-wrap gap-3">
            {AREAS.map((a) => (
              <button key={a.key} onClick={() => { setArea(a.key); setTreatment(null); }} className={`min-h-[52px] rounded-full border px-6 text-sm font-medium transition-all duration-300 ${area === a.key ? "border-ink bg-ink text-cream" : "border-ink/15 bg-white/60 text-ink hover:border-gold"}`}>
                {a.label}
              </button>
            ))}
          </div>
          <AnimatePresence>
            {current && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                <p className="mt-8 mb-4 text-xs font-medium uppercase tracking-[0.14em] text-ink/60">2. Behandlung wählen</p>
                <div className="flex flex-wrap gap-3">
                  {current.treatments.map((t) => (
                    <button key={t} onClick={() => setTreatment(t)} className={`min-h-[52px] rounded-full border px-6 text-sm font-medium transition-all duration-300 ${treatment === t ? "border-gold bg-gold text-white" : "border-ink/15 bg-white/60 text-ink hover:border-gold"}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {treatment && (
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }} className="mt-8 flex flex-col items-start gap-4 rounded-2xl bg-champagne/20 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-white"><Sparkles className="h-5 w-5" /></span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-ink/50">Deine Auswahl</p>
                    <p className="text-lg font-semibold text-ink">{treatment}</p>
                    <p className="text-sm text-ink/60">Preis auf Anfrage – individuelle Offerte</p>
                  </div>
                </div>
                <BtnLink href="https://wa.me/41788964655" className="shrink-0">Jetzt Termin buchen <ArrowRight className="h-4 w-4" /></BtnLink>
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}