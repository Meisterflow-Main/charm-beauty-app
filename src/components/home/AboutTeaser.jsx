import React from "react";
import { Check } from "lucide-react";
import { IMAGES } from "@/lib/site";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";
import BtnLink from "@/components/site/BtnLink";

const POINTS = [
  "Massgeschneiderte Hautpflege und Behandlungen",
  "Spezialisiert auf moderne Beauty-Treatments",
  "Entspannte Atmosphäre für maximales Wohlbefinden",
];

export default function AboutTeaser() {
  return (
    <section className="bg-ink px-6 py-24 text-cream sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-12">
        <div className="order-2 lg:order-1 lg:col-span-6">
          <Reveal><Eyebrow light>Das bin ich</Eyebrow></Reveal>
          <Reveal delay={0.1}><h2 className="mt-5 text-5xl font-semibold sm:text-6xl">Mein Name ist <span className="italic font-normal text-champagne">Snezana</span></h2></Reveal>
          <Reveal delay={0.2} className="mt-8 space-y-5 text-lg leading-relaxed text-cream/70">
            <p>und ich bin die Inhaberin von Charm Beauty in Winterthur. Meine Leidenschaft für Hautpflege und Schönheit begleitet mich seit vielen Jahren. Mit fundiertem Fachwissen und regelmässigen Weiterbildungen biete ich dir hochwertige, individuell angepasste Behandlungen an, die deine natürliche Schönheit unterstreichen.</p>
            <p>Bei Charm Beauty steht dein Wohlbefinden im Mittelpunkt – ich freue mich, dich persönlich kennenzulernen und dich auf deinem Weg zu strahlender Haut und Entspannung zu begleiten.</p>
          </Reveal>
          <ul className="mt-10 space-y-4">
            {POINTS.map((p, i) => (
              <Reveal as="li" key={p} delay={0.3 + i * 0.1} className="flex items-center gap-4 border-b border-cream/10 pb-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-white"><Check className="h-4 w-4" /></span>
                <span className="text-cream/90">{p}</span>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.5} className="mt-10"><BtnLink to="/uber-uns" variant="light">Mehr über mich</BtnLink></Reveal>
        </div>
        <Reveal className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[3rem] border border-champagne/30" />
            <img src={IMAGES.snezana} alt="Snezana Djuric – Inhaberin von Charm Beauty Winterthur" className="relative aspect-[4/5] w-full rounded-[2.5rem] object-cover" loading="lazy" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}