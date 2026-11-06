import React from "react";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";
import { CONTACT } from "@/lib/site";

const PARAGRAPHS = [
  "Charm Beauty ist ein Kosmetikstudio an der Ernst-Jung-Gasse 16a in Winterthur. Diese Website zeigt das vollständige Behandlungsangebot für Gesicht und Körper, nennt die Preise, erklärt die Abläufe und macht es einfach, einen Termin anzufragen – per WhatsApp, Telefon oder Anfrageformular. Dazu kommen Einblicke ins Studio, ein Wissensbereich mit Ratgebern zu Hautpflege und Körperstraffung sowie ein Rückmeldesystem, über das du deine Behandlung bewerten kannst.",
  "Das Angebot richtet sich an Frauen und Männer aus Winterthur und der Region, die ihre Haut professionell pflegen lassen möchten, eine technologiebasierte Körperbehandlung suchen oder ihre Körperkontur sanft verbessern wollen – ohne Operation. Auch nach einer Schwangerschaft, bei Cellulite oder als Ergänzung zum eigenen Training findest du hier eine passende Behandlung.",
  "Geführt und aufgebaut wird Charm Beauty von Snezana Djuric. Sie ist ausgebildete Kosmetikerin, bildet sich regelmässig weiter und behandelt ihre Kundinnen und Kunden persönlich im Studio. Alle Texte, Behandlungsbeschreibungen und Preise auf dieser Website stammen aus ihrer Praxis.",
];

export default function AboutPlatform() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-3xl">
        <Reveal><Eyebrow>Worum es geht</Eyebrow></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 text-3xl font-semibold text-ink sm:text-4xl">Was Charm Beauty ist und für wen</h2>
        </Reveal>
        <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/75">
          {PARAGRAPHS.map((p) => <Reveal as="p" key={p.slice(0, 30)} delay={0.15}>{p}</Reveal>)}
        </div>
        <Reveal delay={0.3}>
          <p className="mt-6 text-sm text-ink/55">
            {CONTACT.street}, {CONTACT.zip} {CONTACT.city} · {CONTACT.email}
          </p>
        </Reveal>
      </div>
    </section>
  );
}