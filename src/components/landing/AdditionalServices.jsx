import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";

const ALL_SERVICES = [
  { label: "Gesichtsbehandlung", to: "/behandlungen#gesicht" },
  { label: "Körperbehandlung", to: "/behandlungen#koerper" },
  { label: "Tiefenreinigung", to: "/behandlungen#gesicht" },
  { label: "Feuchtigkeitspflege", to: "/behandlungen#gesicht" },
  { label: "Anti-Aging", to: "/behandlungen#gesicht" },
  { label: "Körperpeeling", to: "/behandlungen#koerper" },
  { label: "Entspannungsmassage", to: "/behandlungen#koerper" },
  { label: "Hautstraffung", to: "/behandlungen#koerper" },
  { label: "Persönliche Beratung", to: "/kontakt" },
  { label: "Hautanalyse", to: "/kontakt" },
];

export default function AdditionalServices() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-8 text-center">
          <Eyebrow>Weitere Leistungen</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">Alle Behandlungen im Überblick</h2>
          <p className="mt-4 text-base text-ink/60">Klicke auf eine Leistung, um mehr zu erfahren oder direkt einen Termin zu vereinbaren.</p>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-wrap justify-center gap-3">
          {ALL_SERVICES.map((s) => (
            <Link key={s.label} to={s.to} className="group inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-5 py-3 text-sm font-medium text-ink transition hover:border-gold hover:bg-champagne/15 hover:text-gold">
              {s.label} <ArrowRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}