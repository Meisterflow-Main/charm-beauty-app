import React from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import useSeo, { breadcrumbSchema } from "@/hooks/useSeo";
import { CONTACT } from "@/lib/site";
import { webPageSchema } from "@/lib/schema";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import ContactForm from "@/components/site/ContactForm";
import OpeningHours from "@/components/site/OpeningHours";
import BtnLink from "@/components/site/BtnLink";
import MapEmbed from "@/components/site/MapEmbed";
import GoogleReviewCta from "@/components/site/GoogleReviewCta";

const CARDS = [
  { icon: Phone, label: "Telefon", value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: "Nachricht senden", href: CONTACT.whatsapp },
  { icon: Mail, label: "E-Mail", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: MapPin, label: "Adresse", value: `${CONTACT.street}, ${CONTACT.city} ${CONTACT.zip}`, href: CONTACT.maps },
];

export default function Kontakt() {
  useSeo({
    title: "Kontakt & Termin buchen | Charm Beauty Kosmetikstudio Winterthur",
    description: "Kontaktiere Charm Beauty an der Ernst-Jung-Gasse 16a in Winterthur. Termin per WhatsApp, Telefon +41 78 896 46 55 oder Anfrageformular buchen.",
    path: "/kontakt",
    schemas: [
      breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Kontakt", path: "/kontakt" }]),
      webPageSchema({ path: "/kontakt", type: "ContactPage" }),
    ],
  });
  return (
    <>
      <PageHero crumb="Kontakt" eyebrow="Kontakt" title="Lass uns sprechen" intro="Buche jetzt deine individuelle Schönheitsbehandlung. Vereinbare noch heute deinen Termin und lass dich in meinem Studio verwöhnen." />
      <section className="px-3 pb-24 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            {CARDS.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.08}>
                <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" title={c.label === "WhatsApp" ? "Beim Klick auf WhatsApp werden Daten an Meta übermittelt." : undefined} className="group flex items-center gap-5 rounded-[1.75rem] border border-ink/5 bg-white/70 p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold/40">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-champagne/30 text-gold transition group-hover:bg-gold group-hover:text-white"><c.icon className="h-5 w-5" /></span>
                  <span><span className="block text-xs uppercase tracking-[0.16em] text-ink/50">{c.label}</span><span className="text-ink">{c.value}</span></span>
                </a>
              </Reveal>
            ))}
            <Reveal delay={0.35} className="rounded-[1.75rem] bg-ink p-7 text-cream">
              <h2 className="mb-4 text-xs uppercase tracking-[0.2em] text-champagne">Öffnungszeiten</h2>
              <OpeningHours light />
            </Reveal>
          </div>
          <Reveal delay={0.15} className="rounded-[2.5rem] border border-ink/5 bg-white/70 p-8 sm:p-12 lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
        <div className="mt-6">
          <MapEmbed />
        </div>
      </section>
      <GoogleReviewCta />
      <section className="px-3 pb-24 sm:px-6">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-ink/5 bg-white/70 p-8 text-center sm:p-10">
          <Reveal>
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Noch unentschlossen?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-ink/70">Entdecke meine Behandlungen für Gesicht und Körper und finde die richtige Pflege für dich.</p>
            <BtnLink to="/behandlungen" variant="outline" className="mt-6">Behandlungen ansehen</BtnLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}