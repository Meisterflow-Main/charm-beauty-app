import React from "react";
import useSeo, { breadcrumbSchema } from "@/hooks/useSeo";
import { IMAGES, CONTACT } from "@/lib/site";
import { personSchema } from "@/lib/schema";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import BtnLink from "@/components/site/BtnLink";
import AboutTeaser from "@/components/home/AboutTeaser";
import Stats from "@/components/home/Stats";
import HowIWork from "@/components/site/HowIWork";
import TransparencySection from "@/components/site/TransparencySection";

export default function UeberUns() {
  useSeo({
    title: "Über uns: Snezana Djuric | Charm Beauty Winterthur",
    description: "Lerne Snezana kennen, leidenschaftliche Kosmetikerin und Inhaberin von Charm Beauty in Winterthur. Individuelle Behandlungen mit Herz und Fachwissen.",
    path: "/uber-uns",
    image: IMAGES.snezana,
    schemas: [
      breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Über uns", path: "/uber-uns" }]),
      personSchema({ url: "/uber-uns" }),
    ],
  });
  return (
    <>
      <PageHero crumb="Über uns" eyebrow="Über uns" title="Hallo, ich bin Snezana" />
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <img src={IMAGES.welcome} alt="Kosmetikstudio Charm Beauty in Winterthur" className="aspect-[4/5] w-full rounded-[2.5rem] object-cover" loading="lazy" />
          </Reveal>
          <div className="space-y-6 text-lg leading-relaxed text-ink/75 lg:col-span-6 lg:col-start-7 lg:pt-8">
            <Reveal><p className="font-heading text-2xl leading-snug text-ink">Hallo, ich bin Snezana, eine leidenschaftliche Kosmetikerin. Für mich ist mein Beruf weit mehr als nur eine Tätigkeit. Er ist meine tägliche Leidenschaft.</p></Reveal>
            <Reveal delay={0.1}><p>Seit meiner Ausbildung bilde ich mich kontinuierlich weiter, um stets auf dem neuesten Stand der Kosmetikbranche zu bleiben.</p></Reveal>
            <Reveal delay={0.2}><p>Der Traum, mein eigenes Kosmetikstudio zu eröffnen, hat mich lange begleitet, und nun freue ich mich, ihn in Winterthur zu verwirklichen. Neben meiner Arbeit als Kosmetikerin bin ich auch stolze Mutter und Ehefrau, zwei Rollen, die mich zusätzlich inspirieren und motivieren, meine Leidenschaft mit voller Hingabe auszuleben.</p></Reveal>
            <Reveal delay={0.3}><p>Ich lade dich herzlich ein, mein Studio zu besuchen, wo wir gemeinsam deine natürliche Schönheit zum Strahlen bringen!</p></Reveal>
            <Reveal delay={0.4} className="pt-4 flex flex-wrap gap-4">
              <BtnLink href={CONTACT.whatsapp}>Termin buchen</BtnLink>
              <BtnLink to="/behandlungen" variant="outline">Behandlungen ansehen</BtnLink>
              <BtnLink to="/kontakt" variant="outline">Kontakt aufnehmen</BtnLink>
            </Reveal>
          </div>
        </div>
      </section>
      <AboutTeaser />
      <HowIWork />
      <TransparencySection />
      <Stats />
    </>
  );
}