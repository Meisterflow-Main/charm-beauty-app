import React from "react";
import { ShieldCheck, User, MapPin, Phone, Mail, CreditCard, Clock, Building2 } from "lucide-react";
import { CONTACT } from "@/lib/site";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";

// Reale Unternehmensdaten — aus site.js und Impressum
const DETAILS = [
  { icon: Building2, label: "Rechtsform", value: "Einzelunternehmen" },
  { icon: ShieldCheck, label: "UID-Nummer", value: "CHE-182.339.391" },
  { icon: User, label: "Inhaberin", value: "Snezana Djuric" },
  { icon: MapPin, label: "Adresse", value: `${CONTACT.street}, ${CONTACT.zip} ${CONTACT.city}` },
  { icon: Phone, label: "Telefon", value: CONTACT.phone },
  { icon: Mail, label: "E-Mail", value: CONTACT.email },
  { icon: CreditCard, label: "Zahlung", value: "Bar & Twint" },
  { icon: Clock, label: "Öffnungszeiten", value: "Termin nach Vereinbarung" },
];

export default function TransparencySection() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal className="flex justify-center"><Eyebrow>Transparenz</Eyebrow></Reveal>
          <Reveal delay={0.1}><h2 className="mt-5 text-5xl font-semibold text-ink sm:text-6xl">Wer hinter Charm Beauty steht</h2></Reveal>
          <Reveal delay={0.2}><p className="mt-6 text-lg leading-relaxed text-ink/70">Vertrauen entsteht durch Transparenz. Hier findest du alle wesentlichen Informationen über mein Unternehmen, offen und ehrlich dargestellt.</p></Reveal>
        </div>
        <Reveal delay={0.3} className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DETAILS.map((d) => (
            <div key={d.label} className="rounded-[1.5rem] border border-ink/5 bg-white/70 p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-champagne/25 text-gold"><d.icon className="h-4 w-4" /></span>
              <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-ink/45">{d.label}</p>
              <p className="mt-1 text-sm font-medium text-ink">{d.value}</p>
            </div>
          ))}
        </Reveal>
        <Reveal delay={0.4} className="mt-8 text-center">
          <p className="text-sm text-ink/55">
            Alle Angaben entsprechen dem Handelsregister und dem Impressum. Vollständige rechtliche Informationen findest du im{" "}
            <a href="/impressum" className="font-medium text-gold underline underline-offset-2 hover:text-gold-dark">Impressum</a>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}