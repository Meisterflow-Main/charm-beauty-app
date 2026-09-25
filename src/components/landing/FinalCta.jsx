import React from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/site/Reveal";
import BtnLink from "@/components/site/BtnLink";

export default function FinalCta({ cta }) {
  return (
    <section className="px-6 py-24 sm:py-32">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-gold to-gold-dark px-8 py-16 text-center text-white sm:px-16">
        <h2 className="text-4xl font-semibold sm:text-5xl">{cta.title}</h2>
        <p className="mx-auto mt-6 max-w-lg text-lg text-white/85">{cta.text}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <BtnLink href="https://wa.me/41788964655" variant="dark" className="!bg-ink !text-cream hover:!bg-ink/90">Termin buchen</BtnLink>
          <BtnLink to="/kontakt" variant="light">Kontakt aufnehmen</BtnLink>
        </div>
      </motion.div>
    </section>
  );
}