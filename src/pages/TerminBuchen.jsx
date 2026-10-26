import React from "react";
import useSeo, { breadcrumbSchema } from "@/hooks/useSeo";
import { webPageSchema } from "@/lib/schema";
import { CONTACT } from "@/lib/site";
import KontaktHero from "@/components/kontakt-landing/KontaktHero";
import TrustBar from "@/components/site/TrustBar";
import BookingChannels from "@/components/kontakt-landing/BookingChannels";
import RequestSection from "@/components/kontakt-landing/RequestSection";
import GoogleReviewCta from "@/components/site/GoogleReviewCta";
import AnfahrtSection from "@/components/kontakt-landing/AnfahrtSection";
import LandingFaq from "@/components/landing/LandingFaq";

const PAGE_PATH = "/termin-buchen";
const DESCRIPTION = `Termin bei Charm Beauty an der ${CONTACT.street} in ${CONTACT.zip} ${CONTACT.city} anfragen: per WhatsApp, Telefon ${CONTACT.phone}, E-Mail oder Anfrageformular. Anfahrt, Öffnungszeiten und Kontakt auf einen Blick.`;

const FAQS = [
  {
    q: "Wie kann ich einen Termin bei Charm Beauty buchen?",
    a: `Buche deinen Termin per WhatsApp, über das Anfrageformular auf dieser Seite oder ruf mich direkt an unter ${CONTACT.phone}. Ich bestätige deinen Wunschtermin schnellstmöglich und persönlich.`,
  },
  {
    q: "Wie komme ich zum Studio?",
    a: `Das Studio liegt an der ${CONTACT.street} in ${CONTACT.zip} ${CONTACT.city}, nur wenige Minuten zu Fuss vom Hauptbahnhof Winterthur. Du erreichst mich mit S-Bahn, Bus, Velo oder Auto, in der Umgebung gibt es mehrere Parkmöglichkeiten.`,
  },
  {
    q: "Wann hat das Kosmetikstudio geöffnet?",
    a: "Termine nach Vereinbarung: Montag, Dienstag, Donnerstag und Freitag 9 bis 12 Uhr & 14 bis 19 Uhr, Mittwoch und Samstag 9 bis 12 Uhr.",
  },
  {
    q: "Welche Zahlungsmöglichkeiten gibt es?",
    a: "Vor Ort kannst du bar oder mit Twint bezahlen.",
  },
];

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function TerminBuchen() {
  useSeo({
    title: "Termin buchen in Winterthur | Charm Beauty Kosmetikstudio",
    description: DESCRIPTION,
    path: PAGE_PATH,
    schemas: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Kontakt", path: "/kontakt" },
        { name: "Termin buchen", path: PAGE_PATH },
      ]),
      webPageSchema({ path: PAGE_PATH, type: "ContactPage", name: "Termin buchen bei Charm Beauty", description: DESCRIPTION }),
      faqPageSchema,
    ],
  });

  return (
    <>
      <KontaktHero />
      <TrustBar />
      <BookingChannels />
      <RequestSection />
      <GoogleReviewCta />
      <AnfahrtSection />
      <LandingFaq faqs={FAQS} />
    </>
  );
}