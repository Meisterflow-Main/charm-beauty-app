import React from "react";
import useSeo, { breadcrumbSchema } from "@/hooks/useSeo";
import { PRIVACY } from "@/lib/privacy";
import PageHero from "@/components/site/PageHero";

export default function Datenschutz() {
  useSeo({
    title: "Datenschutzerklärung | Charm Beauty Kosmetikstudio Winterthur",
    description: "Datenschutzerklärung von Charm Beauty Winterthur gemäss revDSG und DSGVO.",
    path: "/datenschutz",
    schemas: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Datenschutz", path: "/datenschutz" }])],
  });
  return (
    <>
      <PageHero crumb="Datenschutz" eyebrow="Rechtliches" title="Datenschutz&shy;erklärung" intro="Informationen zur Bearbeitung Ihrer Personendaten gemäss revDSG und DSGVO." />
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl space-y-12">
          {PRIVACY.map((s) => (
            <article key={s.h}>
              <h2 className="text-2xl font-semibold text-ink">{s.h}</h2>
              {s.p.map((p, i) => <p key={i} className="mt-4 leading-relaxed text-ink/70">{p}</p>)}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}