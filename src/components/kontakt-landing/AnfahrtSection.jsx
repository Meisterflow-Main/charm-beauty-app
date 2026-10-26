import React from "react";
import { Footprints, Train, Bus, Car } from "lucide-react";
import { CONTACT } from "@/lib/site";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";
import MapEmbed from "@/components/site/MapEmbed";
import BtnLink from "@/components/site/BtnLink";

// Angaben deckungsgleich mit den bestehenden Regionalseiten — keine erfundenen Linien oder Parkhäuser
const ROUTES = [
  { icon: Footprints, title: "Zu Fuss", desc: "Vom Hauptbahnhof Winterthur bist du in wenigen Minuten zu Fuss an der Ernst-Jung-Gasse." },
  { icon: Train, title: "S-Bahn und Zug", desc: "Steig am Hauptbahnhof Winterthur aus. Von dort ist das Studio nur ein kurzer Fussweg entfernt." },
  { icon: Bus, title: "Bus und Velo", desc: "Mit dem Stadtbus oder dem Velo erreichst du das Studio bequem und ohne Umwege." },
  { icon: Car, title: "Auto und Parkieren", desc: "In der Umgebung der Ernst-Jung-Gasse gibt es mehrere Parkmöglichkeiten." },
];

export default function AnfahrtSection() {
  return (
    <section id="anfahrt" className="scroll-mt-28 px-3 pb-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <Eyebrow>Anfahrt</Eyebrow>
          <h2 className="mt-5 text-4xl font-semibold text-ink sm:text-5xl">So findest du zu mir</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            Mein Studio liegt an der {CONTACT.street} in {CONTACT.zip} {CONTACT.city}, zentral und nur wenige Minuten vom Hauptbahnhof Winterthur entfernt.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ROUTES.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08} className="flex h-full flex-col gap-4 rounded-[1.75rem] border border-ink/5 bg-white/70 p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-champagne/30 text-gold"><r.icon className="h-5 w-5" /></span>
              <h3 className="text-lg font-semibold text-ink">{r.title}</h3>
              <p className="text-sm leading-relaxed text-ink/70">{r.desc}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} className="mt-6 flex flex-col gap-4 rounded-[2rem] border border-ink/5 bg-white/60 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink/70">Bei der Terminbestätigung sende ich dir gerne die genaue Anfahrtsbeschreibung.</p>
          <BtnLink href={CONTACT.maps} variant="outline">Route in Google Maps öffnen</BtnLink>
        </Reveal>
        <div className="mt-6"><MapEmbed /></div>
      </div>
    </section>
  );
}