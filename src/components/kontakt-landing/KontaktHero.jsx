import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, UserCheck, MapPin, Clock, CreditCard, ArrowRight } from "lucide-react";
import { CONTACT } from "@/lib/site";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";
import BtnLink from "@/components/site/BtnLink";

// Nur echte Angaben aus site.js — keine erfundenen Versprechen
const FACTS = [
  { icon: UserCheck, title: "Persönlich betreut", desc: "Immer von Snezana selbst" },
  { icon: MapPin, title: "Zentral in Winterthur", desc: "Wenige Minuten vom Hauptbahnhof" },
  { icon: Clock, title: "Termine Mo bis Sa", desc: "Nach Vereinbarung" },
  { icon: CreditCard, title: "Zahlung vor Ort", desc: "Bar oder Twint" },
];

export default function KontaktHero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-36 sm:pt-44">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-champagne/25 blur-3xl" />
      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal><Eyebrow>Kontakt & Termin</Eyebrow></Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
            Termin buchen bei Charm Beauty in Winterthur
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink/70">
            Melde dich direkt bei mir, wenn du eine Behandlung buchen, eine Frage stellen oder dich unverbindlich beraten lassen möchtest. Ich antworte persönlich und finde mit dir deinen Wunschtermin.
          </p>
        </Reveal>
        <Reveal delay={0.3} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <BtnLink href={CONTACT.whatsapp} title="Beim Klick auf WhatsApp werden Daten an Meta übermittelt.">
            <MessageCircle className="h-4 w-4" /> WhatsApp Terminanfrage
          </BtnLink>
          <BtnLink href="#anfrage" variant="dark">
            Anfrage senden <ArrowRight className="h-4 w-4" />
          </BtnLink>
          <BtnLink href={CONTACT.phoneHref} variant="outline">
            <Phone className="h-4 w-4" /> {CONTACT.phone}
          </BtnLink>
        </Reveal>
      </div>
      <Reveal delay={0.4} className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-4 lg:grid-cols-4">
        {FACTS.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="flex flex-col items-center gap-3 rounded-[1.5rem] border border-ink/5 bg-white/70 p-6 text-center backdrop-blur"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-champagne/30 text-gold"><f.icon className="h-5 w-5" /></span>
            <h2 className="text-sm font-semibold text-ink">{f.title}</h2>
            <p className="text-xs text-ink/60">{f.desc}</p>
          </motion.div>
        ))}
      </Reveal>
    </section>
  );
}