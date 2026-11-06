import React from "react";
import { Link } from "react-router-dom";
import useSeo, { breadcrumbSchema } from "@/hooks/useSeo";
import { FAQS, CONTACT } from "@/lib/site";
import { SERVICES } from "@/lib/services";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import BtnLink from "@/components/site/BtnLink";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const treatmentFaqs = [
  { q: "Welche Körperbehandlungen bietet Charm Beauty an?", a: "Im Körperbereich arbeite ich mit apparativer Technologie: EMS Sculpt (EMSCULPT NEO) für die Muskelstraffung von zwei oder vier Zonen, Liposana 3 zur Unterstützung der Körperformung, Po-Lifting Vakuum, Maderotherapie und Beckenboden-Training auf dem Behandlungsstuhl. Alle Behandlungen mit Preisen findest du auf der Seite Behandlungen." },
  { q: "Was ist EMSCULPT NEO?", a: "EMSCULPT NEO ist eine apparative Muskelstraffung: Elektromagnetische Impulse lösen Kontraktionen in der Muskulatur aus, die du nicht bewusst steuern kannst. Bei Charm Beauty wird die Behandlung als EMS Sculpt für zwei Zonen (CHF 85) oder vier Zonen (CHF 95) angeboten." },
  { q: "Was ist Liposana 3?", a: "Liposana 3 ist eine apparative Körperbehandlung, die die Körperformung unterstützt und sichtbarer Cellulite entgegenwirkt. Eine Einzelbehandlung kostet CHF 175, das Jahresabo mit einer Anwendung pro Monat CHF 1 500." },
  { q: "Kann ich einen Termin über WhatsApp vereinbaren?", a: "Ja. Schreib mir direkt über WhatsApp an +41 78 896 46 55. Du kannst auch anrufen oder das Anfrageformular auf der Seite Termin buchen nutzen." },
  { q: "Werden die Behandlungen individuell angepasst?", a: "Ja. Vor jeder Behandlung schaue ich dein Hautbild oder deine Körperregion an und passe Intensität und Ablauf an dein Ziel an. Wenn eine Behandlung nicht zu dir passt, sage ich das offen." },
];

const regionFaqs = [
  { q: "Bietet Charm Beauty Behandlungen für meine Region an?", a: "Mein Studio befindet sich in Winterthur und ist für Kundinnen aus der ganzen Region gut erreichbar. Auf der Übersichtsseite Regionen findest du Informationen und Anreisewege für dein Gebiet." },
  { q: "Hat Charm Beauty eine Filiale in meiner Stadt?", a: "Nein. Charm Beauty hat einen Standort an der Ernst-Jung-Gasse 16a in Winterthur. Die Regionsseiten beschreiben Servicegebiete – sie stellen keine Filialen dar. Ich betreue Kundinnen aus der gesamten Region gerne in meinem Winterthurer Studio." },
  { q: "Wie erreiche ich das Studio aus Zürich, Frauenfeld oder Schaffhausen?", a: "Mit dem Zug oder Auto bist du in 25 bis 35 Minuten in Winterthur. Mein Studio ist vom Bahnhof schnell erreichbar, Parkplätze sind in der Nähe verfügbar." },
];

export default function Faq() {
  const allFaqs = [
    { group: "Allgemein", items: FAQS },
    { group: "Behandlungen & Termine", items: treatmentFaqs },
    ...SERVICES.map((s) => ({ group: s.title, items: s.faqs })),
    { group: "Regionen", items: regionFaqs },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.flatMap((g) => g.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))),
  };

  useSeo({
    title: "FAQ | Charm Beauty Kosmetikstudio Winterthur",
    description: "Antworten zu Terminen, Behandlungen, Öffnungszeiten, Anreise und Regionen bei Charm Beauty in Winterthur. Deine Frage nicht dabei? Schreib mir direkt.",
    path: "/faq",
    schemas: [faqSchema, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }])],
  });

  let v = 0;
  return (
    <>
      <PageHero crumb="FAQ" eyebrow="Häufige Fragen" title="FAQ" intro="Hier findest du Antworten zu Terminen, Behandlungen, Öffnungszeiten und Anreise. Deine Frage ist nicht dabei? Schreib mir gerne direkt." />

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl space-y-16">
          {allFaqs.map((g) => (
            <div key={g.group}>
              <Reveal><h2 className="text-3xl font-semibold text-ink">{g.group}</h2></Reveal>
              <Reveal delay={0.1} className="mt-6">
                <Accordion type="single" collapsible className="w-full">
                  {g.items.map((f) => {
                    v += 1;
                    return (
                      <AccordionItem key={v} value={`q${v}`} className="border-ink/10">
                        <AccordionTrigger className="py-6 text-left font-heading text-lg font-medium text-ink hover:text-gold hover:no-underline">{f.q}</AccordionTrigger>
                        <AccordionContent className="pb-6 text-base leading-relaxed text-ink/70">{f.a}</AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream/60 px-6 py-20 sm:py-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <Reveal><h2 className="text-4xl font-semibold text-ink sm:text-5xl">Noch Fragen?</h2></Reveal>
          <Reveal delay={0.1}><p className="max-w-xl text-lg leading-relaxed text-ink/70">Schreib mir direkt – ich antworte gerne und persönlich.</p></Reveal>
          <Reveal delay={0.2} className="flex flex-wrap justify-center gap-4">
            <BtnLink href={CONTACT.whatsapp}>WhatsApp schreiben</BtnLink>
            <BtnLink href={CONTACT.phoneHref} variant="outline">Anrufen</BtnLink>
          </Reveal>
          <Reveal delay={0.3} className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link to="/behandlungen/gesicht" className="font-medium text-ink/70 transition hover:text-gold">Gesichtsbehandlung</Link>
            <Link to="/behandlungen/koerper" className="font-medium text-ink/70 transition hover:text-gold">Körperbehandlung</Link>
            <Link to="/regionen" className="font-medium text-ink/70 transition hover:text-gold">Regionen</Link>
            <Link to="/bewertungen" className="font-medium text-ink/70 transition hover:text-gold">Kundenbewertungen</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}