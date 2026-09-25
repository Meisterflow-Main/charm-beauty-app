import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";

export default function LandingServices({ services }) {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 max-w-2xl">
          <Eyebrow>Leistungen</Eyebrow>
          <h2 className="mt-5 text-4xl font-semibold text-ink sm:text-5xl">Meine Behandlungen</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">Jede Behandlung wird individuell auf deine Hautbedürfnisse abgestimmt. Hier findest du einen Überblick meiner wichtigsten Leistungen.</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <div className="group flex h-full flex-col rounded-[2rem] border border-ink/5 bg-white/70 p-8 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(4,21,31,0.35)]">
                <span className="font-heading text-5xl font-semibold text-champagne/50">0{i + 1}</span>
                <h3 className="mt-4 text-2xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-ink/70">{s.desc}</p>
                <Link to="/behandlungen" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:gap-3">
                  Mehr erfahren <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}