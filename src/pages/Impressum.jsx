import React from "react";
import useSeo, { breadcrumbSchema } from "@/hooks/useSeo";
import { CONTACT } from "@/lib/site";
import PageHero from "@/components/site/PageHero";

export default function Impressum() {
  useSeo({
    title: "Impressum | Charm Beauty Kosmetikstudio Winterthur",
    description: "Impressum von Charm Beauty, Snezana Djuric, Ernst-Jung-Gasse 16a, 8400 Winterthur.",
    path: "/impressum",
    schemas: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Impressum", path: "/impressum" }])],
  });
  return (
    <>
      <PageHero crumb="Impressum" eyebrow="Rechtliches" title="Impressum" />
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white/70 p-8 sm:p-10">
            <h2 className="text-xs uppercase tracking-[0.2em] text-gold">Inhaberin</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink">Charm Beauty<br />Inh. {CONTACT.owner}<br />{CONTACT.street}<br />{CONTACT.zip} {CONTACT.city}</p>
            <p className="mt-4 text-sm text-ink/60">Einzelunternehmen · UID: CHE-182.339.391</p>
          </div>
          <div className="rounded-[2rem] bg-white/70 p-8 sm:p-10">
            <h2 className="text-xs uppercase tracking-[0.2em] text-gold">Kontakt</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink">
              <a href={CONTACT.phoneHref} className="hover:text-gold">{CONTACT.phone}</a><br />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-gold">{CONTACT.email}</a>
            </p>
          </div>
          <div className="rounded-[2rem] bg-white/70 p-8 sm:p-10 md:col-span-2">
            <h2 className="text-xs uppercase tracking-[0.2em] text-gold">Haftungsausschluss</h2>
            <p className="mt-4 leading-relaxed text-ink/70">Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Für Inhalte externer Links sind ausschliesslich deren Betreiber verantwortlich. Alle Bilder, Texte und das Logo sind Eigentum von Charm Beauty.</p>
          </div>
        </div>
      </section>
    </>
  );
}