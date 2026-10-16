import React from "react";
import { IMAGES } from "@/lib/site";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";

export default function Welcome() {
  return (
    <section id="willkommen" className="scroll-mt-24 px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-12">
        <div className="relative lg:col-span-5 lg:col-start-1">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <img src="https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/bbfc9bfa9_ChatGPTImageOct1202602_37_36AM.png" alt="Empfangsbereich im Charm Beauty Kosmetikstudio Winterthur" className="h-full w-full object-cover transition-transform duration-[1.5s] hover:scale-105" loading="eager" decoding="async" />
          </Reveal>
          <div className="absolute -bottom-6 -right-4 hidden rounded-3xl bg-ink px-7 py-6 text-cream shadow-2xl sm:block lg:-right-10">
            <p className="font-heading text-3xl italic text-champagne">Deine Snezana</p>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal><Eyebrow>Willkommen zu</Eyebrow></Reveal>
          <Reveal delay={0.1}><h2 className="mt-5 text-5xl font-semibold text-ink sm:text-6xl">Charm Beauty</h2></Reveal>
          <Reveal delay={0.2} className="mt-8 space-y-5 text-lg leading-relaxed text-ink/70">
            <p>Dein Kosmetikstudio in Winterthur für moderne Hautpflege und technologiebasierte Schönheitsbehandlungen. Ich, Snezana, biete individuelle Treatments für Gesichtspflege, Körperstraffung und Körperformung.</p>
            <p>Erlebe apparative Behandlungsmethoden mit moderner Gerätetechnologie, die auf deine persönlichen Ziele abgestimmt sind.</p>
            <p>Ich kann es kaum erwarten, dich persönlich zu treffen und dich auf deinem Weg zu strafferer Haut und einer definierten Silhouette zu begleiten. Willkommen in deiner persönlichen Oase der Schönheit!</p>
          </Reveal>
          <Reveal delay={0.3}><p className="mt-8 font-heading text-2xl italic text-gold sm:hidden">Deine Snezana</p></Reveal>
        </div>
      </div>
    </section>
  );
}