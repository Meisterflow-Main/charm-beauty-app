import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, Sparkles, UserCheck, MapPin, Eye, Droplet, Leaf, Clock, HeartHandshake, Award, Gem, Star, Shield, Smile, Sun, Wand2, Crown, Palette, Hand } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";
import BtnLink from "@/components/site/BtnLink";

const ICONS = { CalendarDays, Sparkles, UserCheck, MapPin, Eye, Droplet, Leaf, Clock, HeartHandshake, Award, Gem, Star, Shield, Smile, Sun, Wand2, Crown, Palette, Hand };

export default function LandingHero({ page }) {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-36 sm:pt-44">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-champagne/25 blur-3xl" />
      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal><Eyebrow>{page.eyebrow}</Eyebrow></Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl lg:text-7xl">{page.h1}</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink/70">{page.hero}</p>
        </Reveal>
        <Reveal delay={0.3} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <BtnLink href="https://wa.me/41788964655">Jetzt Termin buchen</BtnLink>
          <BtnLink to="/kontakt" variant="outline">Offerte anfragen</BtnLink>
        </Reveal>
      </div>
      <Reveal delay={0.4} className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-4 lg:grid-cols-4">
        {page.usps.map((u, i) => {
          const Icon = ICONS[u.icon] || Sparkles;
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} className="flex flex-col items-center gap-3 rounded-[1.5rem] border border-ink/5 bg-white/70 p-6 text-center backdrop-blur">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-champagne/30 text-gold"><Icon className="h-5 w-5" /></span>
              <h3 className="text-sm font-semibold text-ink">{u.title}</h3>
              <p className="text-xs text-ink/60">{u.desc}</p>
            </motion.div>
          );
        })}
      </Reveal>
    </section>
  );
}