import React from "react";
import useSeo, { breadcrumbSchema } from "@/hooks/useSeo";
import { TREATMENTS, CONTACT } from "@/lib/site";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import BtnLink from "@/components/site/BtnLink";
import Gallery from "@/components/home/Gallery";
import ReviewCta from "@/components/home/ReviewCta";

export default function Behandlungen() {
  useSeo({
    title: "Behandlungen – Gesicht & Körper | Charm Beauty Winterthur",
    description: "Professionelle Gesichts- und Körperbehandlungen in Winterthur – individuell auf deine Hautbedürfnisse abgestimmt. Jetzt Termin bei Charm Beauty buchen.",
    path: "/behandlungen",
    schemas: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Behandlungen", path: "/behandlungen" }])],
  });
  return (
    <>
      <PageHero crumb="Behandlungen" eyebrow="Behandlungen" title="Schönheit & Entspannung" intro="Tauche ein in die Welt der Schönheit und Entspannung mit meinen professionellen Behandlungen. Ob Gesicht, Körper oder Augen – jede Behandlung wird individuell auf deine Hautbedürfnisse abgestimmt. Gemeinsam arbeiten wir daran, dein Wohlbefinden zu steigern und deine natürliche Ausstrahlung zu betonen." />
      <section className="space-y-24 px-6 py-16 sm:space-y-32">
        {TREATMENTS.map((t, i) => (
          <article key={t.key} id={t.key} className="mx-auto grid max-w-7xl scroll-mt-28 items-center gap-12 lg:grid-cols-12">
            <Reveal className={`overflow-hidden rounded-[2.5rem] lg:col-span-7 ${i % 2 ? "lg:order-2 lg:col-start-6" : ""}`}>
              <img src={t.image} alt={`${t.title}behandlung im Kosmetikstudio Charm Beauty Winterthur`} className="aspect-[4/3] w-full object-cover transition-transform duration-[1.5s] hover:scale-105" loading="lazy" />
            </Reveal>
            <div className={`lg:col-span-4 ${i % 2 ? "lg:order-1 lg:col-start-1" : "lg:col-start-9"}`}>
              <Reveal><span className="font-heading text-7xl font-semibold text-champagne/60">0{i + 1}</span></Reveal>
              <Reveal delay={0.1}><h2 className="mt-2 text-5xl font-semibold text-ink">{t.title}</h2></Reveal>
              <Reveal delay={0.2}><p className="mt-6 text-lg leading-relaxed text-ink/70">{t.text}</p></Reveal>
              <Reveal delay={0.3} className="mt-8"><BtnLink href={CONTACT.whatsapp}>Termin buchen</BtnLink></Reveal>
            </div>
          </article>
        ))}
      </section>
      <Gallery />
      <ReviewCta />
    </>
  );
}