import React from "react";
import { IMAGES } from "@/lib/site";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";

const captions = [
  "Studio-Eingang Ernst-Jung-Gasse 16a",
  "Behandlungsraum mit LED-Hohlspiegel",
  "Behandlungsliege und Liposana-Gerät",
  "Empfang und Behandlungsbereich",
  "Professionelle Behandlungsgeräte",
];

export default function Studio() {
  return (
    <section id="studio" className="scroll-mt-24 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <Reveal><Eyebrow>Einblicke</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-4xl font-semibold text-ink sm:text-5xl">Mein Studio in Winterthur</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
              Schau dir an, wo deine Behandlung stattfindet: moderne Behandlungsräume, professionelle Geräte und eine Atmosphäre, die zum Entspannen einlädt.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {IMAGES.studio.map((src, i) => (
            <Reveal
              key={i}
              delay={(i % 3) * 0.1}
              className={`group relative overflow-hidden rounded-[1.5rem] ${i === 0 ? "col-span-2 lg:col-span-2 lg:row-span-2" : ""}`}
            >
              <div className={`relative ${i === 0 ? "aspect-[16/10] lg:aspect-square" : "aspect-[4/3]"}`}>
                <img
                  src={src}
                  alt={`Charm Beauty Studio Winterthur – ${captions[i]}`}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <p className="absolute bottom-4 left-4 text-sm font-medium text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {captions[i]}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}