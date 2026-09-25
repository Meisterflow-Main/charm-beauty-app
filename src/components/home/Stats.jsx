import React from "react";
import { CalendarDays, Sparkles, HeartHandshake, Wallet } from "lucide-react";
import Reveal from "@/components/site/Reveal";

const STATS = [
  { icon: CalendarDays, value: "6", label: "Tage pro Woche für Termine" },
  { icon: Sparkles, value: "2", label: "Behandlungsbereiche: Gesicht & Körper" },
  { icon: HeartHandshake, value: "1:1", label: "Persönliche Betreuung durch Snezana" },
  { icon: Wallet, value: "Bar & Twint", label: "Einfach vor Ort bezahlen" },
];

export default function Stats() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1}>
            <div className="group h-full rounded-[1.75rem] border border-ink/5 bg-white/70 p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(4,21,31,0.35)]">
              <s.icon className="h-6 w-6 text-gold transition-transform duration-500 group-hover:scale-110" />
              <p className="mt-8 font-heading text-4xl font-semibold text-ink">{s.value}</p>
              <p className="mt-2 text-sm text-ink/60">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}