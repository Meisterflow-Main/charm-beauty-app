import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import useSeo, { breadcrumbSchema } from "@/hooks/useSeo";
import { LANDING_PAGES } from "@/lib/landingPages";
import { SITE_URL } from "@/lib/site";
import { webPageSchema } from "@/lib/schema";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";

export default function RegionenIndex() {
  useSeo({
    title: "Regionen | Charm Beauty Kosmetikstudio Winterthur",
    description: "Charm Beauty ist für Kundinnen aus der ganzen Region erreichbar. Finde die passende Seite für deine Region, von Winterthur bis Zürich, Frauenfeld und mehr.",
    path: "/regionen",
    schemas: [
      breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Regionen", path: "/regionen" }]),
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Regionen – Charm Beauty Kosmetikstudio Winterthur",
        itemListElement: LANDING_PAGES.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: p.region,
          url: `${SITE_URL}/regionen/${p.slug}`,
        })),
      },
      webPageSchema({ path: "/regionen" }),
    ],
  });
  return (
    <>
      <PageHero crumb="Regionen" eyebrow="Regionen" title="Charm Beauty in deiner Region" intro="Mein Studio in Winterthur ist für Kundinnen aus der ganzen Region gut erreichbar. Wähle deine Region für individuelle Informationen und Angebote." />
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LANDING_PAGES.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link to={`/regionen/${p.slug}`} className="group flex h-full flex-col rounded-[2rem] border border-ink/5 bg-white/70 p-8 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_24px_60px_-30px_rgba(4,21,31,0.35)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-champagne/30 text-gold"><MapPin className="h-5 w-5" /></span>
                <span className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-gold">{p.region}</span>
                <h2 className="mt-2 text-2xl font-semibold text-ink">{p.eyebrow}</h2>
                <p className="mt-3 flex-1 text-base leading-relaxed text-ink/70">{p.h1}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition group-hover:gap-3">Zur Regionseite <ArrowRight className="h-4 w-4" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}