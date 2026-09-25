import React from "react";
import useSeo, { breadcrumbSchema } from "@/hooks/useSeo";
import PageHero from "@/components/site/PageHero";
import ReviewFlow from "@/components/review/ReviewFlow";

export default function AuftragBewerten() {
  useSeo({
    title: "Bewertung abgeben | Charm Beauty Kosmetikstudio Winterthur",
    description: "Wie war Ihr Besuch bei Charm Beauty? Beantworten Sie drei kurze Fragen und bewerten Sie Ihre Behandlung.",
    path: "/auftrag-bewerten",
    schemas: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Bewertung abgeben", path: "/auftrag-bewerten" }])],
  });
  return (
    <>
      <PageHero crumb="Bewertung abgeben" eyebrow="Ihre Meinung zählt" title="Wie war Ihr Besuch?" intro="Drei kurze Fragen und eine Sternebewertung – das dauert weniger als eine Minute und hilft uns, noch besser für Sie zu werden." />
      <section className="px-3 pb-24 sm:px-6">
        <div className="mx-auto max-w-2xl">
          <ReviewFlow />
        </div>
      </section>
    </>
  );
}