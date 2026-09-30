import React from "react";
import useSeo, { breadcrumbSchema } from "@/hooks/useSeo";
import PageHero from "@/components/site/PageHero";
import ReviewFlow from "@/components/review/ReviewFlow";

export default function AuftragBewerten() {
  useSeo({
    title: "Bewertung abgeben | Charm Beauty Kosmetikstudio Winterthur",
    description: "Wie war dein Besuch bei Charm Beauty? Beantworte drei kurze Fragen und bewerte deine Behandlung.",
    path: "/auftrag-bewerten",
    schemas: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Bewertung abgeben", path: "/auftrag-bewerten" }])],
  });
  return (
    <>
      <PageHero crumb="Bewertung abgeben" eyebrow="Deine Meinung zählt" title="Wie war dein Besuch?" intro="Drei kurze Fragen und eine Sternebewertung. Das dauert weniger als eine Minute und hilft mir, noch besser für dich zu werden." />
      <section className="px-3 pb-24 sm:px-6">
        <div className="mx-auto max-w-2xl">
          <ReviewFlow />
        </div>
      </section>
    </>
  );
}