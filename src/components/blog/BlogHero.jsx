import React from "react";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";
import { breadcrumbSchema } from "@/hooks/useSeo";

export default function BlogHero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Eyebrow>Wissensplattform</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-5 max-w-3xl font-heading text-4xl font-bold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            Blog
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-ink/70">
            Auf dem Charm Beauty Blog teile ich mein Wissen über professionelle Hautpflege,
            entspannende Behandlungen und bewährte Pflegeroutinen für jeden Hauttyp. Hier findest
            du Ratgeber zu Gesichts- und Körperpflege, praktische Tipps für den Alltag,
            Schritt-für-Schritt-Anleitungen für deine Pflegeroutine und Einblicke in meine Arbeit
            im Kosmetikstudio in Winterthur. Der Blog richtet sich an alle, die ihre Hautgesundheit
            ernst nehmen – ob vor dem ersten Termin oder zwischen zwei Behandlungen. Regelmässiges
            Lesen lohnt sich, weil ich aktuelle Pflegetrends ehrlich bewerte, neue
            Behandlungsmethoden verständlich erkläre und dir helfe, die richtige Pflege für deine
            individuellen Bedürfnisse zu finden. Ausserdem erfährst du, wie Google-Bewertungen bei
            der Auswahl eines seriösen Studios helfen und warum transparente Kundenstimmen so
            wichtig sind. Entdecke Wissenswertes über lokale Themen rund um Winterthur und lass
            dich inspirieren, deine Schönheitspflege bewusst und informiert zu gestalten.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export const blogIndexBreadcrumb = () =>
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);