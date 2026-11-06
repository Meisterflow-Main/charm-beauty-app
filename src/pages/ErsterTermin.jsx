import React from "react";
import { Link } from "react-router-dom";
import useSeo, { breadcrumbSchema } from "@/hooks/useSeo";
import { CONTACT } from "@/lib/site";
import { webPageSchema } from "@/lib/schema";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import BtnLink from "@/components/site/BtnLink";

const PATH = "/wissen/erster-termin";
const DESC = "Erster Termin im Kosmetikstudio Winterthur: Ablauf, Vorbereitung, Kosten und Nachsorge bei Charm Beauty, Schritt für Schritt erklärt.";

const SECTIONS = [
  {
    h: "Vor dem Termin: du musst nichts vorbereiten",
    p: [
      "Für einen ersten Termin bei Charm Beauty brauchst du keine Vorkenntnisse und kein eigenes Produkt. Hilfreich ist es, wenn die Haut am Behandlungstag möglichst unbehandelt ist, also ohne Make-up und ohne frisch aufgetragene Pflege, damit sie beurteilt werden kann.",
      "Wenn du Medikamente einnimmst, eine Schwangerschaft besteht oder die Haut gerade gereizt ist, sag es bei der Terminanfrage. Die Behandlung wird dann entsprechend gewählt oder verschoben.",
    ],
  },
  {
    h: "Ablauf: Beratung, Behandlung, Pflegehinweise",
    p: [
      "Jeder Termin beginnt mit einem kurzen Gespräch. Dabei geht es um dein Anliegen, um frühere Behandlungen und um die Frage, wie viel Zeit und Pflege du im Alltag investieren möchtest. Auf dieser Grundlage wird die Behandlung ausgewählt.",
      "Danach folgt die Behandlung selbst, je nach Hautbild oder Körperregion mit Reinigung, Wirkstoffen oder Gerätetechnologie. Zum Abschluss bekommst du konkrete Hinweise für die Tage danach, damit das Ergebnis möglichst lange hält.",
    ],
  },
  {
    h: "Welche Behandlung zu dir passt",
    p: [
      "Im Gesicht stehen Reinigung, Anti-Aging, Microneedling, Hydra Beauty und die BIOPeeLX Behandlung mit natürlichen Mikronadeln zur Wahl. Am Körper arbeitet das Studio mit apparativer Muskelstimulation, Vakuum, Maderotherapie, Liposana 3 und dem Beckenboden-Training.",
      "Eine Übersicht mit allen Preisen findest du auf der Seite Behandlungen. Wenn du unsicher bist, reicht bei der Anfrage eine kurze Beschreibung deines Anliegens; die Auswahl erfolgt dann im Studio.",
    ],
  },
  {
    h: "Kosten und Bezahlung",
    p: [
      "Einzelbehandlungen bewegen sich zwischen CHF 85 und CHF 175. Das Liposana 3 Jahresabo mit einer Anwendung pro Monat kostet CHF 1 500. Die Dauer hängt von der gewählten Behandlung ab und wird bei der Terminvereinbarung mitgeteilt.",
      "Bezahlt wird direkt im Studio, bar oder mit Twint. Eine Anzahlung ist nicht nötig.",
    ],
  },
  {
    h: "Termin vereinbaren und Anfahrt",
    p: [
      "Termine werden persönlich vereinbart, per WhatsApp oder Telefon. Das Studio liegt an der Ernst-Jung-Gasse 16a in 8400 Winterthur. Geöffnet ist Montag, Dienstag, Donnerstag und Freitag von 9 bis 12 Uhr und von 14 bis 19 Uhr, Mittwoch und Samstag von 9 bis 12 Uhr.",
    ],
  },
];

const FAQ = [
  {
    q: "Muss ich vor dem ersten Termin etwas beachten?",
    a: "Nein. Du musst nichts mitbringen. Hilfreich ist eine möglichst unbehandelte Haut am Behandlungstag. Medikamente, eine Schwangerschaft oder gereizte Haut bitte bei der Terminanfrage erwähnen.",
  },
  {
    q: "Wie finde ich die passende Behandlung?",
    a: "Bei der Terminanfrage schilderst du kurz dein Anliegen. Die Auswahl erfolgt im Studio nach einem Gespräch über Hautbild und Körperregion. Alle Behandlungen mit Preisen stehen auf der Seite Behandlungen.",
  },
  {
    q: "Was kostet ein erster Termin?",
    a: "Einzelbehandlungen liegen zwischen CHF 85 und CHF 175. Das Liposana 3 Jahresabo kostet CHF 1 500. Bezahlt wird vor Ort in bar oder mit Twint.",
  },
  {
    q: "Wo liegt das Studio?",
    a: "Charm Beauty befindet sich an der Ernst-Jung-Gasse 16a in 8400 Winterthur. Termine nach Vereinbarung, per WhatsApp oder Telefon.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ErsterTermin() {
  useSeo({
    title: "Erster Termin im Kosmetikstudio | Charm Beauty",
    description: DESC,
    path: PATH,
    schemas: [
      breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Wissen", path: "/blog" }, { name: "Erster Termin", path: PATH }]),
      webPageSchema({ path: PATH, name: "Der erste Termin bei Charm Beauty", description: DESC }),
      faqSchema,
    ],
  });

  return (
    <>
      <PageHero
        crumb="Erster Termin"
        eyebrow="Ablauf"
        title="Dein erster Termin bei Charm Beauty"
        intro="Wie ein erster Besuch im Kosmetikstudio in Winterthur abläuft, was du vorbereiten musst, welche Behandlung zu deinem Anliegen passt und was der Termin kostet."
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
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Häufige Fragen zum ersten Termin</h2>
            <dl className="mt-6 space-y-6">
              {FAQ.map((f) => (
                <div key={f.q} className="rounded-3xl border border-ink/10 bg-white/70 p-6">
                  <dt className="text-base font-semibold text-ink">{f.q}</dt>
                  <dd className="mt-2 text-base leading-relaxed text-ink/70">{f.a}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal as="section">
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Passende Seiten</h2>
            <ul className="mt-5 space-y-3 text-lg text-ink/75">
              {[
                { to: "/behandlungen/gesicht", label: "Gesichtsbehandlungen im Überblick" },
                { to: "/behandlungen/koerper", label: "Körperbehandlungen im Überblick" },
                { to: "/ratgeber/koerperstraffung-winterthur", label: "Ratgeber Körperstraffung ohne Operation" },
                { to: "/faq", label: "Alle häufigen Fragen" },
                { to: "/about", label: "Über diese Website" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-ink/80 underline decoration-ink/20 underline-offset-4 transition hover:text-gold">{l.label}</Link>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="flex flex-wrap gap-4 border-t border-ink/10 pt-10">
            <BtnLink href={CONTACT.whatsapp}>Per WhatsApp anfragen</BtnLink>
            <BtnLink href={CONTACT.phoneHref} variant="outline">{CONTACT.phone}</BtnLink>
            <BtnLink to="/termin-buchen" variant="outline">Alle Kontaktwege</BtnLink>
          </Reveal>
        </div>
      </article>
    </>
  );
}