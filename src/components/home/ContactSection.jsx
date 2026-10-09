import React from "react";
import { Phone, MapPin } from "lucide-react";
import { CONTACT } from "@/lib/site";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";
import BtnLink from "@/components/site/BtnLink";

export default function ContactSection() {
  return (
    <section id="kontakt" className="scroll-mt-24 px-3 pb-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal className="rounded-[2.5rem] bg-ink p-8 text-cream sm:p-12">
          <Eyebrow light>Kontakt</Eyebrow>
          <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">Jetzt Termin vereinbaren</h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/70">
            Buche jetzt deine individuelle Schönheitsbehandlung. Vereinbare noch heute deinen Termin und lass dich in meinem Studio verwöhnen.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <BtnLink href={CONTACT.phoneHref} variant="light"><Phone className="h-4 w-4" /> Anrufen</BtnLink>
            <BtnLink href={CONTACT.whatsapp} title="Beim Klick auf WhatsApp werden Daten an Meta übermittelt.">WhatsApp</BtnLink>
          </div>
          <a href={CONTACT.maps} target="_blank" rel="noopener noreferrer" className="mt-12 flex items-start gap-3 border-t border-cream/10 pt-8 text-cream/75 hover:text-champagne">
            <MapPin className="mt-1 h-4 w-4 text-gold" /> {CONTACT.street}, {CONTACT.city} {CONTACT.zip}
          </a>
        </Reveal>
      </div>
    </section>
  );
}