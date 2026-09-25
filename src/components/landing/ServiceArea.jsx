import React from "react";
import { MapPin } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";

export default function ServiceArea({ areas, region }) {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <Eyebrow>Einzugsgebiet</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">Regionen, die ich bediene</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink/60">Mein Studio in Winterthur ist für Kundinnen aus der ganzen Region gut erreichbar. Hier findest du alle Orte in meinem Einzugsgebiet rund um {region}.</p>
        </Reveal>
        <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-3">
          {areas.map((a) => (
            <span key={a} className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-5 py-3 text-sm font-medium text-ink">
              <MapPin className="h-4 w-4 text-gold" /> {a}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}