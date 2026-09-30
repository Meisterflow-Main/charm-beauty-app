import React from "react";
import { Link } from "react-router-dom";
import { Star, ExternalLink, MessageSquare, ShieldCheck, Heart } from "lucide-react";
import useSeo, { breadcrumbSchema } from "@/hooks/useSeo";
import { GOOGLE_BUSINESS_URL, CONTACT } from "@/lib/site";
import { webPageSchema } from "@/lib/schema";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import BtnLink from "@/components/site/BtnLink";
import GoogleReviewCta from "@/components/site/GoogleReviewCta";
import TransparencySection from "@/components/site/TransparencySection";
import GoogleG from "@/components/site/GoogleG";

export default function Bewertungen() {
  useSeo({
    title: "Bewertungen | Charm Beauty Kosmetikstudio Winterthur",
    description: "Echte Kundenbewertungen für Charm Beauty Kosmetikstudio in Winterthur. Lies Bewertungen auf Google und teile deine eigene Erfahrung.",
    path: "/bewertungen",
    schemas: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Bewertungen", path: "/bewertungen" }]), webPageSchema({ path: "/bewertungen" })],
  });

  return (
    <>
      <PageHero
        crumb="Bewertungen"
        eyebrow="Kundenstimmen"
        title="Echte Bewertungen"
        intro="Vertrauen entsteht durch Transparenz. Hier findest du meine Google-Bewertungen und kannst selbst eine Bewertung hinterlassen."
      />

      {/* Google Bewertungen — prominent CTA */}
      <section className="px-6 pb-12">
        <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-ink/5 bg-white/70 p-8 sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4">
                <GoogleG className="h-12 w-12" />
                <div>
                  <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Google Bewertungen</h2>
                  <p className="mt-1 text-sm text-ink/60">Direkt verlinkt auf mein offizielles Google-Profil.</p>
                </div>
              </div>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
                Alle Bewertungen meiner Kundinnen findest du direkt auf Google. Sie sind unabhängig, echt und nicht von mir ausgewählt. Ich verlinke absichtlich auf Google, damit du die volle Transparenz hast.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-4 py-2">
                <GoogleG className="h-4 w-4" />
                <span className="text-sm font-medium text-ink/60">Bewertungen von Google</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4 lg:col-start-9">
              <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gold px-8 font-semibold text-white transition-all duration-500 hover:-translate-y-0.5 hover:bg-gold-dark">
                <ExternalLink className="h-4 w-4" /> Bewertungen ansehen
              </a>
              <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex h-14 items-center justify-center gap-2 rounded-full border border-ink/20 px-8 font-semibold text-ink transition-all duration-500 hover:-translate-y-0.5 hover:border-gold hover:text-gold">
                <Star className="h-4 w-4" /> Bewertung abgeben
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Wie Bewertungen funktionieren */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-semibold text-ink sm:text-5xl">Wie Bewertungen funktionieren</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">Ich unterscheide zwischen zwei Wegen: öffentliche Google-Bewertungen und internes, vertrauliches Feedback.</p>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[2rem] border border-ink/5 bg-white/70 p-8 sm:p-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-champagne/25 text-gold"><Star className="h-5 w-5" /></span>
                <h3 className="mt-5 text-2xl font-semibold text-ink">Öffentliche Google-Bewertung</h3>
                <p className="mt-3 leading-relaxed text-ink/70">Wenn du deine Erfahrung mit anderen teilen möchtest, schreibe eine Bewertung auf Google. Sie ist öffentlich sichtbar und hilft anderen Kundinnen, mich zu finden.</p>
                <ul className="mt-5 space-y-2.5 text-sm text-ink/65">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" /> Öffentlich sichtbar für alle</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" /> Unabhängig und nicht von mir ausgewählt</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" /> Direkt auf Google, vollständige Transparenz</li>
                </ul>
                <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition hover:gap-3">
                  Zur Google-Bewertung <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-[2rem] border border-ink/5 bg-white/70 p-8 sm:p-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-champagne/25 text-gold"><MessageSquare className="h-5 w-5" /></span>
                <h3 className="mt-5 text-2xl font-semibold text-ink">Internes, vertrauliches Feedback</h3>
                <p className="mt-3 leading-relaxed text-ink/70">Wenn du mir direkt Feedback geben möchtest, ohne es öffentlich zu machen, nutze mein internes Feedback-Formular. Es kommt direkt zu mir und bleibt vertraulich.</p>
                <ul className="mt-5 space-y-2.5 text-sm text-ink/65">
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" /> Vertraulich, kommt direkt zu Snezana</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" /> Drei kurze Fragen und eine Sternebewertung</li>
                  <li className="flex items-start gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" /> Weniger als eine Minute</li>
                </ul>
                <BtnLink to="/auftrag-bewerten" variant="outline" className="mt-6">Feedback geben</BtnLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Warum Bewertungen wichtig sind */}
      <section className="px-6 py-20">
        <Reveal className="mx-auto max-w-7xl rounded-[2.5rem] bg-ink p-8 text-cream sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-champagne">
                <span className="h-px w-8 bg-champagne" /> Warum Bewertungen zählen
              </span>
              <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Ehrlichkeit ist mir wichtiger als perfekte Sterne</h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/70">
                Ich lade alle Kundinnen ein, ehrliche Bewertungen abzugeben. Nicht jede Behandlung verläuft perfekt, und genau deshalb gibt es den internen Feedback-Weg: Wenn etwas nicht optimal war, erfahre ich es direkt und kann es beim nächsten Mal besser machen.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:col-span-4 lg:col-start-9">
              <div className="flex items-start gap-3 rounded-2xl border border-cream/10 p-5">
                <ShieldCheck className="h-5 w-5 shrink-0 text-gold" />
                <p className="text-sm text-cream/80">Alle Google-Bewertungen sind echt und unabhängig.</p>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-cream/10 p-5">
                <Heart className="h-5 w-5 shrink-0 text-gold" />
                <p className="text-sm text-cream/80">Kritisches Feedback nehme ich ernst und setze es um.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <GoogleReviewCta />
      <TransparencySection />

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center">
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">Weiter entdecken</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-ink/60">Erfahre mehr über meine Behandlungen, finde deine Region oder vereinbare direkt einen Termin.</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/behandlungen/gesicht" className="inline-flex items-center rounded-full border border-ink/10 bg-white/60 px-5 py-3 text-sm font-medium text-ink transition hover:border-gold hover:text-gold">Gesichtsbehandlung</Link>
            <Link to="/behandlungen/koerper" className="inline-flex items-center rounded-full border border-ink/10 bg-white/60 px-5 py-3 text-sm font-medium text-ink transition hover:border-gold hover:text-gold">Körperbehandlung</Link>
            <Link to="/regionen" className="inline-flex items-center rounded-full border border-ink/10 bg-white/60 px-5 py-3 text-sm font-medium text-ink transition hover:border-gold hover:text-gold">Regionen</Link>
            <Link to="/kontakt" className="inline-flex items-center rounded-full border border-ink/10 bg-white/60 px-5 py-3 text-sm font-medium text-ink transition hover:border-gold hover:text-gold">Kontakt und Terminbuchung</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}