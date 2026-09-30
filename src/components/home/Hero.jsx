import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowDown } from "lucide-react";
import { IMAGES, CONTACT } from "@/lib/site";
import BtnLink from "@/components/site/BtnLink";
import Eyebrow from "@/components/site/Eyebrow";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      {/* Full-bleed background image */}
      <motion.div initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.4, ease }} className="absolute inset-0">
        <img src={IMAGES.hero} alt="Charm Beauty Kosmetikstudio Winterthur" className="h-full w-full object-cover" />
      </motion.div>

      {/* Overlays: header legibility (top) + content legibility (left) */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/70 via-transparent to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-ink/10 to-ink/55" />

      {/* Content — left aligned */}
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 pt-28 pb-16 sm:px-8">
        <div className="mr-auto max-w-xl text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3, ease }}>
            <Eyebrow light>Kosmetikstudio Winterthur</Eyebrow>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.45, ease }} className="mt-6 text-[3.4rem] font-semibold leading-[0.95] text-white sm:text-7xl xl:text-[5.5rem]">
            Charm <span className="italic font-normal text-champagne">Beauty</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.6, ease }} className="mt-8 max-w-md text-lg leading-relaxed text-white/85">
            Dein Kosmetikstudio in Winterthur für individuelle Schönheitsbehandlungen und erstklassige Hautpflege. Gönn dir eine Auszeit und erlebe professionelle Pflege in entspannter Atmosphäre.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.75, ease }} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <BtnLink href={CONTACT.whatsapp}>Termin buchen</BtnLink>
            <BtnLink to="/behandlungen" variant="light">Behandlungen entdecken</BtnLink>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-10 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-white/70">
            <MapPin className="h-3.5 w-3.5" /> Winterthur
          </motion.div>
        </div>
      </div>

      <motion.a href="#willkommen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/60 hover:text-white lg:flex">
        <ArrowDown className="h-4 w-4 animate-bounce" /> Scrollen
      </motion.a>
    </section>
  );
}