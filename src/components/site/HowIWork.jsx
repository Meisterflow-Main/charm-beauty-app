import React from "react";
import { Search, Droplets, Sparkles, HeartHandshake } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";

// Reale Arbeitsweise — abgeleitet aus den Behandlungs-Abläufen in services.js
const STEPS = [
  { icon: Search, title: "Hautanalyse", desc: "Gemeinsam besprechen wir deine Wünsche und analysieren deinen Hauttyp." },
  { icon: Droplets, title: "Reinigung", desc: "Gründliche Tiefenreinigung, die Poren öffnet und Unreinheiten reduziert." },
  { icon: Sparkles, title: "Pflege", desc: "Auf deinen Hauttyp abgestimmte Wirkstoffe und Feuchtigkeit." },
  { icon: HeartHandshake, title: "Abschluss", desc: "Pflegetipps für zu Hause und Empfehlungen für die Zeit zwischen den Terminen." },
];

// Reale Vorteile — aus services.js
const PRINCIPLES = [
  "Individuelle Hautanalyse vor jeder Behandlung",
  "Massgeschneiderte Pflege, kein Standard-Programm",
  "Sorgfältig ausgewählte, hochwertige Produkte",
  "Sanfte Technik, keine aggressiven Methoden",
];

export default function HowIWork() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal className="flex justify-center"><Eyebrow>Meine Arbeitsweise</Eyebrow></Reveal>
          <Reveal delay={0.1}><h2 className="mt-5 text-5xl font-semibold text-ink sm:text-6xl">Wie ich arbeite</h2></Reveal>
          <Reveal delay={0.2}><p className="mt-6 text-lg leading-relaxed text-ink/70">Jede Behandlung folgt einem klaren Ablauf, der dich und deine Haut in den Mittelpunkt stellt. Kein Verkaufsdruck, keine Standard-Programme, nur ehrliche, individuelle Pflege.</p></Reveal>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="group h-full rounded-[1.75rem] border border-ink/5 bg-white/70 p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(4,21,31,0.35)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-champagne/25 text-gold"><s.icon className="h-5 w-5" /></span>
                  <span className="font-heading text-3xl font-semibold text-champagne/50">0{i + 1}</span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3} className="mt-12 rounded-[2rem] bg-ink p-8 text-cream sm:p-10">
          <h3 className="text-xs uppercase tracking-[0.2em] text-champagne">Meine Versprechen an dich</h3>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {PRINCIPLES.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-cream/85">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}