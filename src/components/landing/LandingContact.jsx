import React from "react";
import { Phone, MapPin, Mail, Clock, ExternalLink } from "lucide-react";
import { CONTACT } from "@/lib/site";
import OpeningHours from "@/components/site/OpeningHours";
import Reveal from "@/components/site/Reveal";

export default function LandingContact() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-10 text-center">
          <h2 className="text-4xl font-semibold text-ink sm:text-5xl">Kontakt & Anfahrt</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink/70">Du erreichst mich direkt per Telefon, WhatsApp oder E-Mail. Vereinbare noch heute deinen Termin.</p>
        </Reveal>
        <Reveal delay={0.1} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a href={CONTACT.phoneHref} className="group flex flex-col gap-3 rounded-[1.5rem] border border-ink/5 bg-white/70 p-6 transition hover:-translate-y-0.5 hover:border-gold/40">
            <Phone className="h-6 w-6 text-gold" />
            <span className="text-xs uppercase tracking-[0.14em] text-ink/50">Telefon</span>
            <span className="text-ink">{CONTACT.phone}</span>
          </a>
          <a href={`mailto:${CONTACT.email}`} className="group flex flex-col gap-3 rounded-[1.5rem] border border-ink/5 bg-white/70 p-6 transition hover:-translate-y-0.5 hover:border-gold/40">
            <Mail className="h-6 w-6 text-gold" />
            <span className="text-xs uppercase tracking-[0.14em] text-ink/50">E-Mail</span>
            <span className="break-all text-ink">{CONTACT.email}</span>
          </a>
          <a href={CONTACT.maps} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-3 rounded-[1.5rem] border border-ink/5 bg-white/70 p-6 transition hover:-translate-y-0.5 hover:border-gold/40">
            <MapPin className="h-6 w-6 text-gold" />
            <span className="text-xs uppercase tracking-[0.14em] text-ink/50">Adresse</span>
            <span className="text-ink">{CONTACT.street}, {CONTACT.zip} {CONTACT.city}</span>
          </a>
          <div className="flex flex-col gap-3 rounded-[1.5rem] border border-ink/5 bg-white/70 p-6">
            <Clock className="h-6 w-6 text-gold" />
            <span className="text-xs uppercase tracking-[0.14em] text-ink/50">Öffnungszeiten</span>
            <span className="text-sm text-ink/70">Mo, Di, Do, Fr 9 bis 12 & 14 bis 19 Uhr, Mi & Sa 9 bis 12 Uhr</span>
          </div>
        </Reveal>
        <Reveal delay={0.2} className="mt-6 flex flex-col gap-6 rounded-[2rem] bg-ink p-8 text-cream sm:p-10 lg:flex-row">
          <div className="flex-1">
            <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-champagne">Öffnungszeiten</h3>
            <OpeningHours light />
          </div>
          <div className="flex flex-col justify-center gap-3 lg:border-l lg:border-cream/10 lg:pl-10">
            <a href={CONTACT.maps} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 text-sm font-semibold text-white transition hover:bg-gold-dark">
              <MapPin className="h-4 w-4" /> Google Maps öffnen <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" title="Beim Klick auf WhatsApp werden Daten an Meta übermittelt." className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-cream/30 px-6 text-sm font-semibold text-cream transition hover:bg-cream hover:text-ink">
              WhatsApp schreiben
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}