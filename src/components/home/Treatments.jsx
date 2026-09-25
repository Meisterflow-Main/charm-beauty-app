import React from "react";
import { TREATMENTS } from "@/lib/site";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";
import TreatmentCard from "@/components/home/TreatmentCard";

export default function Treatments() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal><Eyebrow>Behandlungen</Eyebrow></Reveal>
            <Reveal delay={0.1}><h2 className="mt-5 text-5xl font-semibold leading-tight text-ink sm:text-6xl">Schönheit & Entspannung</h2></Reveal>
          </div>
          <Reveal delay={0.2} className="lg:col-span-6 lg:col-start-7 lg:pt-10">
            <p className="text-lg leading-relaxed text-ink/70">
              Tauche ein in die Welt der Schönheit und Entspannung mit meinen professionellen Behandlungen. Ob Gesicht, Körper oder Augen – jede Behandlung wird individuell auf deine Hautbedürfnisse abgestimmt. Gemeinsam arbeiten wir daran, dein Wohlbefinden zu steigern und deine natürliche Ausstrahlung zu betonen.
            </p>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-10">
          {TREATMENTS.map((t, i) => (
            <Reveal key={t.key} delay={i * 0.15}><TreatmentCard t={t} index={i} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}