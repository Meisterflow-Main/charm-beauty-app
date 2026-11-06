import React from "react";
import useSeo, { breadcrumbSchema } from "@/hooks/useSeo";
import { webPageSchema } from "@/lib/schema";
import { CONTACT } from "@/lib/site";
import { RATGEBER_SECTIONS } from "@/lib/koerperRatgeber";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import BtnLink from "@/components/site/BtnLink";

const PATH = "/ratgeber/koerperstraffung-winterthur";
const DESC = "Ratgeber Körperstraffung ohne Operation in Winterthur: EMS Sculpt, Liposana 3, Maderotherapie, Po-Lifting Vakuum und Beckenboden-Training bei Charm Beauty im Überblick.";

export default function RatgeberKoerperstraffung() {
  useSeo({
    title: "Körperstraffung Winterthur: Ratgeber | Charm Beauty",
    description: DESC,
    path: PATH,
    schemas: [
      breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Ratgeber Körperstraffung", path: PATH }]),
      webPageSchema({ path: PATH, name: "Ratgeber Körperstraffung in Winterthur", description: DESC }),
    ],
  });

  return (
    <>
      <PageHero
        crumb="Ratgeber Körperstraffung"
        eyebrow="Ratgeber"
        title="Körperstraffung ohne Operation in Winterthur"
        intro="Ein Überblick über die technologiebasierten Körperbehandlungen bei Charm Beauty: wie sie funktionieren, für wen sie sich eignen und wie ein Termin abläuft."
      />
      <article className="px-6 pb-24">
        <div className="mx-auto max-w-3xl space-y-14">
          {RATGEBER_SECTIONS.map((s) => (
            <Reveal key={s.h} as="section">
              <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{s.h}</h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink/75">
                {s.p.map((t) => <p key={t.slice(0, 32)}>{t}</p>)}
              </div>
            </Reveal>
          ))}
          <Reveal className="flex flex-wrap gap-4 border-t border-ink/10 pt-10">
            <BtnLink to="/termin-buchen">Termin buchen</BtnLink>
            <BtnLink to="/behandlungen" variant="outline">Alle Behandlungen ansehen</BtnLink>
            <BtnLink href={CONTACT.phoneHref} variant="outline">{CONTACT.phone}</BtnLink>
          </Reveal>
        </div>
      </article>
    </>
  );
}