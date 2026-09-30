import React from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import useSeo, { breadcrumbSchema } from "@/hooks/useSeo";
import { NAV, CONTACT } from "@/lib/site";
import { webPageSchema } from "@/lib/schema";
import { SERVICES } from "@/lib/services";
import { LANDING_PAGES } from "@/lib/landingPages";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";

export default function Sitemap() {
  useSeo({
    title: "Sitemap | Charm Beauty Kosmetikstudio Winterthur",
    description: "Übersicht aller Seiten von Charm Beauty: Behandlungen, Regionen, FAQ, Kontakt und rechtliche Seiten.",
    path: "/sitemap",
    schemas: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Sitemap", path: "/sitemap" }]), webPageSchema({ path: "/sitemap" })],
  });

  const groups = [
    {
      title: "Hauptseiten",
      links: [
        { label: "Home", to: "/" },
        { label: "Behandlungen", to: "/behandlungen" },
        { label: "Über uns", to: "/uber-uns" },
        { label: "Kontakt", to: "/kontakt" },
        { label: "FAQ", to: "/faq" },
        { label: "Bewertung abgeben", to: "/auftrag-bewerten" },
      ],
    },
    {
      title: "Behandlungen",
      links: SERVICES.map((s) => ({ label: s.title, to: `/behandlungen/${s.slug}` })),
    },
    {
      title: "Regionen",
      links: [
        { label: "Alle Regionen", to: "/regionen" },
        ...LANDING_PAGES.map((p) => ({ label: p.region, to: `/regionen/${p.slug}` })),
      ],
    },
    {
      title: "Rechtliches",
      links: [
        { label: "Impressum", to: "/impressum" },
        { label: "Datenschutz", to: "/datenschutz" },
      ],
    },
  ];

  return (
    <>
      <PageHero crumb="Sitemap" eyebrow="Übersicht" title="Sitemap" intro="Alle Seiten von Charm Beauty auf einen Blick – damit du schnell findest, was du suchst." />
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, gi) => (
            <Reveal key={g.title} delay={gi * 0.08}>
              <div className="rounded-[2rem] border border-ink/5 bg-white/70 p-8 backdrop-blur">
                <h2 className="mb-5 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-champagne">
                  {g.title === "Regionen" && <MapPin className="h-4 w-4 text-gold" />}
                  {g.title}
                </h2>
                <ul className="space-y-3">
                  {g.links.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="text-sm text-ink/75 transition hover:text-gold">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mx-auto mt-14 max-w-7xl rounded-[2rem] border border-ink/5 bg-white/70 p-8 text-sm text-ink/60 backdrop-blur">
          Direkter Kontakt: <a href={CONTACT.phoneHref} className="text-gold hover:underline">{CONTACT.phone}</a> · <a href={`mailto:${CONTACT.email}`} className="text-gold hover:underline">{CONTACT.email}</a>
        </div>
      </section>
    </>
  );
}