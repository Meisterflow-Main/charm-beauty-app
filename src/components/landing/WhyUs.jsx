import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";
import BtnLink from "@/components/site/BtnLink";

export default function WhyUs({ whyUs }) {
  return (
    <section className="bg-ink px-6 py-24 text-cream sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 max-w-2xl">
          <Eyebrow light>Warum Charm Beauty</Eyebrow>
          <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">Warum Kundinnen mich wählen</h2>
          <p className="mt-5 text-lg leading-relaxed text-cream/70">Persönliche Betreuung, individuelle Behandlungen und eine Atmosphäre zum Wohlfühlen – das unterscheidet Charm Beauty von anonymen Kosmetikketten.</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="rounded-[1.75rem] border border-cream/10 bg-cream/5 p-7 backdrop-blur transition hover:border-gold/40 hover:bg-cream/10">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-white"><Check className="h-5 w-5" /></span>
              <h3 className="mt-5 text-lg font-semibold text-cream">{w.headline}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/65">{w.desc}</p>
            </motion.div>
          ))}
        </div>
        <Reveal delay={0.3} className="mt-12 text-center">
          <BtnLink to="/kontakt" variant="light">Jetzt Offerte berechnen</BtnLink>
        </Reveal>
      </div>
    </section>
  );
}