import React from "react";
import { Phone, Mail, Globe, MapPin, User, FileText, ShieldCheck, Copyright, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import useSeo, { breadcrumbSchema } from "@/hooks/useSeo";
import { CONTACT, SITE_URL } from "@/lib/site";
import { webPageSchema } from "@/lib/schema";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import BtnLink from "@/components/site/BtnLink";

export default function Impressum() {
  useSeo({
    title: "Impressum | Charm Beauty Kosmetikstudio Winterthur",
    description: "Impressum von Charm Beauty. Kontaktdaten, Unternehmensinformationen und rechtliche Angaben zur Inhaberin Snezana Djuric in Winterthur.",
    path: "/impressum",
    schemas: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Impressum", path: "/impressum" }]), webPageSchema({ path: "/impressum" })],
  });

  return (
    <>
      <PageHero
        crumb="Impressum"
        eyebrow="Rechtliches"
        title="Impressum"
        intro="Dieses Impressum enthält die gesetzlich vorgeschriebenen Angaben über Charm Beauty. Hier findest du alle rechtlichen Informationen zum Unternehmen, zur Inhaberin und zu den Kontaktmöglichkeiten. Die Angaben dienen der Transparenz und entsprechen den Anforderungen des Schweizer Rechts."
      />

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">

          {/* Unternehmensinformationen + Kontakt */}
          <div className="grid gap-6 md:grid-cols-2">

            {/* Unternehmensinformationen */}
            <Reveal>
              <div className="h-full rounded-[2rem] border border-ink/5 bg-white/70 p-8 sm:p-10 backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-champagne/25 text-gold">
                    <FileText className="h-5 w-5" />
                  </span>
                  <h2 className="text-xs uppercase tracking-[0.2em] text-gold">Unternehmen</h2>
                </div>
                <dl className="mt-6 space-y-4">
                  <div>
                    <dt className="text-sm text-ink/50">Firmenname</dt>
                    <dd className="text-lg font-medium text-ink">Charm Beauty</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-ink/50">Rechtsform</dt>
                    <dd className="text-lg font-medium text-ink">Einzelunternehmen</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-ink/50">Inhaberin</dt>
                    <dd className="text-lg font-medium text-ink">{CONTACT.owner}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-ink/50">Adresse</dt>
                    <dd className="flex items-start gap-2 text-lg text-ink">
                      <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" />
                      <span>{CONTACT.street}<br />{CONTACT.zip} {CONTACT.city}<br />Schweiz</span>
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>

            {/* Kontakt */}
            <Reveal delay={0.1}>
              <div className="h-full rounded-[2rem] border border-ink/5 bg-white/70 p-8 sm:p-10 backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-champagne/25 text-gold">
                    <Phone className="h-5 w-5" />
                  </span>
                  <h2 className="text-xs uppercase tracking-[0.2em] text-gold">Kontakt</h2>
                </div>
                <dl className="mt-6 space-y-4">
                  <div>
                    <dt className="text-sm text-ink/50">Telefon</dt>
                    <dd>
                      <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 text-lg font-medium text-ink transition hover:text-gold">
                        <Phone className="h-4 w-4 text-gold" /> {CONTACT.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-ink/50">E-Mail</dt>
                    <dd>
                      <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 text-lg font-medium text-ink transition hover:text-gold">
                        <Mail className="h-4 w-4 text-gold" /> {CONTACT.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-ink/50">Webseite</dt>
                    <dd>
                      <span className="inline-flex items-center gap-2 text-lg font-medium text-ink">
                        <Globe className="h-4 w-4 text-gold" /> {SITE_URL.replace("https://", "")}
                      </span>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-ink/50">Kontaktformular</dt>
                    <dd>
                      <Link to="/kontakt" className="inline-flex items-center gap-2 text-lg font-medium text-gold transition hover:gap-3">
                        Zum Kontaktformular <ArrowRight className="h-4 w-4" />
                      </Link>
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>

          {/* Vertretungsberechtigte Person + UID */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">

            {/* Vertretungsberechtigte Person */}
            <Reveal>
              <div className="h-full rounded-[2rem] border border-ink/5 bg-white/70 p-8 sm:p-10 backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-champagne/25 text-gold">
                    <User className="h-5 w-5" />
                  </span>
                  <h2 className="text-xs uppercase tracking-[0.2em] text-gold">Vertretungsberechtigte Person</h2>
                </div>
                <p className="mt-6 text-lg font-medium text-ink">{CONTACT.owner}</p>
                <p className="mt-1 text-sm text-ink/60">Inhaberin und Geschäftsführerin</p>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">
                  Verantwortlich für den Inhalt dieser Website gemäss Art. 28 ff. revDSG.
                </p>
              </div>
            </Reveal>

            {/* UID / Register */}
            <Reveal delay={0.1}>
              <div className="h-full rounded-[2rem] border border-ink/5 bg-white/70 p-8 sm:p-10 backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-champagne/25 text-gold">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <h2 className="text-xs uppercase tracking-[0.2em] text-gold">Registereintrag</h2>
                </div>
                <dl className="mt-6 space-y-4">
                  <div>
                    <dt className="text-sm text-ink/50">UID-Nummer</dt>
                    <dd className="text-lg font-medium text-ink">CHE-182.339.391</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-ink/50">Handelsregister</dt>
                    <dd className="text-sm text-ink/40">Nicht eingetragen</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-ink/50">MWST-Nummer</dt>
                    <dd className="text-sm text-ink/40">Nicht verfügbar</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>

          {/* Haftungsausschluss */}
          <Reveal>
            <div className="mt-6 rounded-[2rem] border border-ink/5 bg-white/70 p-8 sm:p-10 backdrop-blur">
              <h2 className="text-xs uppercase tracking-[0.2em] text-gold">Haftungsausschluss</h2>
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-ink">Haftung für Inhalte</h3>
                  <p className="mt-2 leading-relaxed text-ink/70">Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. Eine Haftung für Schäden, die aus der Nutzung dieser Website entstehen, wird ausgeschlossen, soweit dies gesetzlich zulässig ist.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ink">Haftung für Links</h3>
                  <p className="mt-2 leading-relaxed text-ink/70">Diese Website enthält Links zu externen Websites. Auf die Inhalte dieser externen Seiten habe ich keinen Einfluss und kann daher keine Gewähr für deren Inhalte übernehmen. Für die Inhalte der verlinkten Seiten ist ausschliesslich deren jeweiliger Betreiber verantwortlich.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ink">Verfügbarkeit</h3>
                  <p className="mt-2 leading-relaxed text-ink/70">Ich bemühe mich, diese Website stets verfügbar zu halten. Es kann jedoch zu kurzzeitigen Unterbrüchen kommen, die ausserhalb meiner Kontrolle liegen. Ein Anspruch auf ständige Verfügbarkeit besteht nicht.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ink">Änderungen</h3>
                  <p className="mt-2 leading-relaxed text-ink/70">Ich behalte mir vor, Inhalte dieser Website jederzeit und ohne Vorankündigung anzupassen oder zu entfernen. Die rechtlichen Angaben in diesem Impressum können sich ändern. Die jeweils aktuelle Version ist auf dieser Seite veröffentlicht.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ink">Anwendbares Recht</h3>
                  <p className="mt-2 leading-relaxed text-ink/70">Es gilt ausschliesslich Schweizer Recht. Gerichtsstand ist Winterthur, Schweiz.</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Urheberrechte */}
          <Reveal>
            <div className="mt-6 rounded-[2rem] border border-ink/5 bg-white/70 p-8 sm:p-10 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-champagne/25 text-gold">
                  <Copyright className="h-5 w-5" />
                </span>
                <h2 className="text-xs uppercase tracking-[0.2em] text-gold">Urheberrechte</h2>
              </div>
              <p className="mt-6 leading-relaxed text-ink/70">
                Alle Inhalte dieser Website, einschliesslich Texte, Bilder, Logos und Grafiken, sind urheberrechtlich geschützt. Die Verwendung, Vervielfältigung oder Verbreitung dieser Inhalte ohne ausdrückliche schriftliche Zustimmung von Charm Beauty ist untersagt.
              </p>
            </div>
          </Reveal>

          {/* Datenschutz Hinweis */}
          <Reveal>
            <div className="mt-6 flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-ink p-8 text-cream sm:p-10 md:flex-row md:items-center">
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-champagne">Datenschutz</h2>
                <p className="mt-4 max-w-xl leading-relaxed text-cream/70">
                  Informationen zur Verarbeitung personenbezogener Daten findest du in meiner Datenschutzerklärung.
                </p>
              </div>
              <BtnLink to="/datenschutz" variant="light" className="shrink-0">Zur Datenschutzerklärung</BtnLink>
            </div>
          </Reveal>

          {/* Abschliessender CTA */}
          <Reveal>
            <div className="mt-6 rounded-[2rem] border border-ink/5 bg-champagne/15 p-8 text-center sm:p-10">
              <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Fragen zum Impressum?</h2>
              <p className="mx-auto mt-4 max-w-lg text-ink/70">Bei Fragen zu den rechtlichen Angaben erreichst du mich direkt:</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a href={CONTACT.phoneHref} className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 text-sm font-semibold text-white transition hover:bg-gold-dark">
                  <Phone className="h-4 w-4" /> {CONTACT.phone}
                </a>
                <a href={`mailto:${CONTACT.email}`} className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-ink/20 px-6 text-sm font-semibold text-ink transition hover:border-gold hover:text-gold">
                  <Mail className="h-4 w-4" /> {CONTACT.email}
                </a>
                <BtnLink to="/kontakt" variant="outline">Kontaktformular</BtnLink>
              </div>
            </div>
          </Reveal>

        </div>
      </section>
    </>
  );
}