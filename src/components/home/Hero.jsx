import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowDown } from "lucide-react";
import { IMAGES, VIDEOS, CONTACT } from "@/lib/site";
import BtnLink from "@/components/site/BtnLink";
import Eyebrow from "@/components/site/Eyebrow";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-3 pb-10 pt-24 sm:px-6 sm:pt-28">
      <div className="mx-auto grid max-w-7xl items-stretch gap-6 lg:grid-cols-12">
        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease }} className="relative h-[52vh] overflow-hidden rounded-[2rem] sm:h-[64vh] lg:col-span-7 lg:h-[82vh]">
          <video src={VIDEOS.hero} poster={IMAGES.hero} autoPlay muted loop playsInline className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/10 to-transparent" />
          <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white backdrop-blur-md">
            <MapPin className="h-3.5 w-3.5" /> Winterthur
          </div>
        </motion.div>
        <div className="flex flex-col justify-center px-3 py-6 lg:col-span-5 lg:py-0 lg:pl-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3, ease }}>
            <Eyebrow>Kosmetikstudio Winterthur</Eyebrow>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.45, ease }} className="mt-6 text-[3.4rem] font-semibold leading-[0.95] text-ink sm:text-7xl xl:text-[5.5rem]">
            Charm <span className="italic font-normal text-gold">Beauty</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.6, ease }} className="mt-8 max-w-md text-lg leading-relaxed text-ink/70">
            Dein Kosmetikstudio in Winterthur für individuelle Schönheitsbehandlungen und erstklassige Hautpflege. Entdecke Wohlbefinden und Entspannung in exklusiver Atmosphäre.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.75, ease }} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <BtnLink href={CONTACT.whatsapp}>Termin buchen</BtnLink>
            <BtnLink to="/behandlungen" variant="outline">Behandlungen entdecken</BtnLink>
          </motion.div>
          <motion.a href="#willkommen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-14 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-ink/50 hover:text-gold lg:flex">
            <ArrowDown className="h-4 w-4 animate-bounce" /> Scrollen
          </motion.a>
        </div>
      </div>
    </section>
  );
}