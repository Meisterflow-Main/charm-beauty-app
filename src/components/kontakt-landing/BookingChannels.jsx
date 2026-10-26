import React from "react";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { CONTACT } from "@/lib/site";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";
import OpeningHours from "@/components/site/OpeningHours";

const CHANNELS = [
  { icon: Phone, label: "Telefon", value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: "Nachricht senden", href: CONTACT.whatsapp },
  { icon: Mail, label: "E-Mail", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: MapPin, label: "Adresse", value: `${CONTACT.street}, ${CONTACT.city} ${CONTACT.zip}`, href: CONTACT.maps },
];

export default function BookingChannels() {
  return (
    <section className="px-3 pb-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <Eyebrow>Direkter Draht</Eyebrow>
          <h2 className="mt-5 text-4xl font-semibold text-ink sm:text-5xl">So erreichst du mich</h2>
          <p className="mt-5 text-lg text-ink/70">
            Wähle den Weg, der dir am liebsten ist. Telefon und WhatsApp gehen am schnellsten, eine Nachricht per E-Mail oder über das Anfrageformular genauso gerne.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {CHANNELS.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.08}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  title={c.label === "WhatsApp" ? "Beim Klick auf WhatsApp werden Daten an Meta übermittelt." : undefined}
                  className="group flex h-full items-center gap-5 rounded-[1.75rem] border border-ink/5 bg-white/70 p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold/40"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-champagne/30 text-gold transition group-hover:bg-gold group-hover:text-white"><c.icon className="h-5 w-5" /></span>
                  <span><span className="block text-xs uppercase tracking-[0.16em] text-ink/50">{c.label}</span><span className="text-ink">{c.value}</span></span>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.35} className="rounded-[1.75rem] bg-ink p-7 text-cream lg:col-span-5">
            <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-champagne">Öffnungszeiten</h3>
            <OpeningHours light />
          </Reveal>
        </div>
      </div>
    </section>
  );
}