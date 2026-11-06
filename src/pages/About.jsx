import React from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import useSeo, { breadcrumbSchema } from "@/hooks/useSeo";
import { CONTACT } from "@/lib/site";
import { UID_NUMBER, webPageSchema } from "@/lib/schema";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import BtnLink from "@/components/site/BtnLink";

const PATH = "/about";
const DESC = "Was diese Website leistet, für wen sie gedacht ist und wer dahintersteht: Charm Beauty, Kosmetikstudio von Snezana Djuric in Winterthur.";

const SECTIONS = [
  {
    h: "Was diese Website leistet",
    p: [
      "Diese Website ist der digitale Zugang zum Studio. Sie zeigt das vollständige Behandlungsangebot für Gesicht und Körper mit den aktuellen Preisen, beschreibt den Ablauf jeder Behandlung und erklärt, für welche Haut oder Körperregion sie gedacht ist.",
      "Über die Seite Termin buchen sendest du eine Anfrage per WhatsApp, Telefon oder Formular und erhältst eine persönliche Antwort mit einem Terminvorschlag. Dazu kommen Ratgeber zu Hautpflege und Körperstraffung, Antworten auf häufige Fragen und ein Rückmeldesystem, mit dem du deine Behandlung nach dem Termin bewerten kannst.",
    ],
  },
  {
    h: "Für wen die Website gedacht ist",
    p: [
      "Das Angebot richtet sich an Frauen und Männer aus Winterthur und der Region, die ihre Haut professionell pflegen lassen möchten, eine apparative Körperbehandlung suchen oder ihre Körperkontur ohne Operation sanft verbessern wollen. Auch nach einer Schwangerschaft, bei Cellulite oder als Ergänzung zum eigenen Training findest du hier eine passende Behandlung.",
      "Wer zum ersten Mal ein Kosmetikstudio besucht, findet im Beitrag zum ersten Termin den Ablauf, Hinweise zur Vorbereitung und zur Pflege danach.",
    ],
  },
  {
    h: "Wer dahintersteht",
    p: [
      `Betrieben wird die Website von Charm Beauty, Inhaberin Snezana Djuric, Kosmetikerin in Winterthur (UID ${UID_NUMBER}). Alle Behandlungsbeschreibungen, Preise und Ratgebertexte stammen aus ihrer Praxis und werden laufend aktualisiert. Die technische Umsetzung erfolgt über die Base44-Plattform.`,
      `Verantwortlich für den Inhalt ist Charm Beauty, ${CONTACT.street}, ${CONTACT.zip} ${CONTACT.city}, ${CONTACT.email}.`,
    ],
  },
];

export default function About() {
  useSeo({
    title: "Über diese Website | Charm Beauty Winterthur",
    description: DESC,
    path: PATH,
    schemas: [
      breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Über diese Website", path: PATH }]),
      webPageSchema({ path: PATH, name: "Über diese Website", description: DESC }),
    ],
  });

  return (
    <>
      <PageHero
        crumb="Über diese Website"
        eyebrow="Über diese Website"
        title="Über diese Website"
        intro="Charm Beauty ist das Kosmetikstudio von Snezana Djuric an der Ernst-Jung-Gasse 16a in Winterthur. Diese Website zeigt das Angebot, die Preise und den Ablauf und macht Terminanfragen einfach."
      />
      <article className="px-6 pb-24">
        <div className="mx-auto max-w-3xl space-y-14">
          {SECTIONS.map((s) => (
            <Reveal key={s.h} as="section">
              <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{s.h}</h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink/75">
                {s.p.map((t) => <p key={t.slice(0, 32)}>{t}</p>)}
              </div>
            </Reveal>
          ))}
          <Reveal as="section">
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Weiter im Angebot</h2>
            <ul className="mt-5 space-y-3 text-lg text-ink/75">
              {[
                { to: "/uber-uns", label: "Snezana Djuric persönlich kennenlernen" },
                { to: "/behandlungen", label: "Alle Behandlungen mit Preisen ansehen" },
                { to: "/wissen/erster-termin", label: "So läuft dein erster Termin ab" },
                { to: "/bewertungen", label: "Rückmeldungen und Bewertungen lesen" },
              ].map((l) => (
                <li key={l.to} className="flex items-start gap-3">
                  <Check className="mt-1.5 h-4 w-4 shrink-0 text-gold" />
                  <Link to={l.to} className="text-ink/80 underline decoration-ink/20 underline-offset-4 transition hover:text-gold">{l.label}</Link>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="flex flex-wrap gap-4 border-t border-ink/10 pt-10">
            <BtnLink to="/termin-buchen">Termin anfragen</BtnLink>
            <BtnLink href={CONTACT.phoneHref} variant="outline">{CONTACT.phone}</BtnLink>
          </Reveal>
        </div>
      </article>
    </>
  );
}