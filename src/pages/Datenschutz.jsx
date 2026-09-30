import React from "react";
import { Phone, Mail, Globe, MapPin, ShieldCheck, Lock, FileText, User, Cookie, ExternalLink, ArrowRight, Database, Clock, Edit, Eye, Trash2, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";
import useSeo, { breadcrumbSchema } from "@/hooks/useSeo";
import { CONTACT, SITE_URL } from "@/lib/site";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import BtnLink from "@/components/site/BtnLink";

const SECTIONS = [
  { id: "verantwortliche-stelle", label: "Verantwortliche Stelle" },
  { id: "allgemeine-hinweise", label: "Allgemeine Hinweise" },
  { id: "erhobene-daten", label: "Erhobene Daten" },
  { id: "zweck", label: "Zweck der Datenverarbeitung" },
  { id: "kontaktformulare", label: "Kontaktformulare" },
  { id: "terminbuchung", label: "Terminbuchung" },
  { id: "google-dienste", label: "Google Dienste" },
  { id: "cookies", label: "Cookies" },
  { id: "externe-dienste", label: "Externe Dienste" },
  { id: "speicherdauer", label: "Speicherdauer" },
  { id: "datensicherheit", label: "Datensicherheit" },
  { id: "rechte", label: "Deine Rechte" },
  { id: "aenderungen", label: "Änderungen" },
  { id: "kontakt", label: "Kontakt" },
];

function Section({ id, icon: Icon, title, children }) {
  return (
    <section id={id} className="scroll-mt-32">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-champagne/25 text-gold">
          <Icon className="h-5 w-5" />
        </span>
        <h2 className="text-2xl font-semibold text-ink">{title}</h2>
      </div>
      <div className="mt-5 space-y-4 pl-0 sm:pl-[3.25rem]">{children}</div>
    </section>
  );
}

export default function Datenschutz() {
  useSeo({
    title: "Datenschutzerklärung | Charm Beauty Kosmetikstudio Winterthur",
    description: "Informationen zur Verarbeitung personenbezogener Daten und zum Datenschutz bei Charm Beauty in Winterthur.",
    path: "/datenschutz",
    schemas: [breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Datenschutz", path: "/datenschutz" }])],
  });

  return (
    <>
      <PageHero
        crumb="Datenschutz"
        eyebrow="Rechtliches"
        title="Datenschutz&shy;erklärung"
        intro="Datenschutz ist mir ein wichtiges Anliegen. In dieser Datenschutzerklärung erkläre ich transparent, welche personenbezogenen Daten auf dieser Website erhoben werden, wie sie verwendet werden und welche Rechte du als betroffene Person hast. Ich verarbeite deine Daten ausschliesslich auf rechtlicher Grundlage und nur für Zwecke, die für den Betrieb dieser Website und die Bearbeitung deiner Anfragen erforderlich sind. Die Angaben orientieren sich am revidierten Schweizer Datenschutzgesetz (revDSG) und berücksichtigen, soweit anwendbar, die Anforderungen der EU-Datenschutz-Grundverordnung (DSGVO)."
      />

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">

          {/* Inhaltsverzeichnis + Content Layout */}
          <div className="grid gap-10 lg:grid-cols-12">

            {/* Sticky Inhaltsverzeichnis */}
            <aside className="lg:col-span-4 xl:col-span-3">
              <div className="lg:sticky lg:top-28">
                <div className="rounded-[2rem] border border-ink/5 bg-white/70 p-6 backdrop-blur">
                  <h2 className="text-xs uppercase tracking-[0.2em] text-gold">Inhaltsverzeichnis</h2>
                  <nav className="mt-4">
                    <ol className="space-y-1">
                      {SECTIONS.map((s, i) => (
                        <li key={s.id}>
                          <a
                            href={`#${s.id}`}
                            className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-ink/60 transition hover:bg-champagne/15 hover:text-ink"
                          >
                            <span className="text-xs font-medium text-gold/70">{String(i + 1).padStart(2, "0")}</span>
                            {s.label}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="space-y-14 lg:col-span-8 xl:col-span-9">

              {/* 1. Verantwortliche Stelle */}
              <Reveal>
                <Section id="verantwortliche-stelle" icon={User} title="Verantwortliche Stelle">
                  <div className="rounded-[2rem] border border-ink/5 bg-white/70 p-6 backdrop-blur">
                    <dl className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <dt className="text-sm text-ink/50">Firmenname</dt>
                        <dd className="font-medium text-ink">Charm Beauty</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-ink/50">Rechtsform</dt>
                        <dd className="font-medium text-ink">Einzelunternehmen</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-ink/50">Inhaberin</dt>
                        <dd className="font-medium text-ink">{CONTACT.owner}</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-ink/50">Adresse</dt>
                        <dd className="font-medium text-ink">{CONTACT.street}<br />{CONTACT.zip} {CONTACT.city}<br />Schweiz</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-ink/50">Telefon</dt>
                        <dd><a href={CONTACT.phoneHref} className="font-medium text-ink hover:text-gold">{CONTACT.phone}</a></dd>
                      </div>
                      <div>
                        <dt className="text-sm text-ink/50">E-Mail</dt>
                        <dd><a href={`mailto:${CONTACT.email}`} className="font-medium text-ink hover:text-gold">{CONTACT.email}</a></dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-sm text-ink/50">Website</dt>
                        <dd className="font-medium text-ink">{SITE_URL.replace("https://", "")}</dd>
                      </div>
                    </dl>
                  </div>
                  <p className="leading-relaxed text-ink/70">
                    Verantwortlich für die Datenbearbeitung auf dieser Website im Sinne des Schweizer Datenschutzgesetzes (revDSG) sowie, soweit anwendbar, der EU-Datenschutz-Grundverordnung (DSGVO) ist die oben genannte Stelle. Ich nehme den Schutz deiner Daten sehr ernst und verpflichte mich, die Informationen, die du mir zur Verfügung stellst, gemäss anwendbarem Recht zu schützen.
                  </p>
                </Section>
              </Reveal>

              {/* 2. Allgemeine Hinweise */}
              <Reveal>
                <Section id="allgemeine-hinweise" icon={FileText} title="Allgemeine Hinweise">
                  <p className="leading-relaxed text-ink/70">
                    Diese Datenschutzerklärung informiert dich über die Art, den Umfang und den Zweck der Erhebung und Verwendung personenbezogener Daten auf dieser Website. Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare Person beziehen.
                  </p>
                  <p className="leading-relaxed text-ink/70">
                    Daten werden erhoben, wenn du mir diese freiwillig über Formulare, per E-Mail, Telefon oder WhatsApp mitteilst, oder automatisch beim Aufruf der Website durch technische Systeme. Die Verarbeitung erfolgt, um deine Anfragen zu beantworten, Termine zu koordinieren, die Website sicher zu betreiben und gesetzlichen Pflichten nachzukommen.
                  </p>
                </Section>
              </Reveal>

              {/* 3. Erhobene Daten */}
              <Reveal>
                <Section id="erhobene-daten" icon={Database} title="Erhobene Daten">
                  <p className="leading-relaxed text-ink/70">Folgende Daten werden auf dieser Website tatsächlich erhoben:</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      { t: "Kontaktdaten", d: "Name, E-Mail-Adresse, Telefonnummer — wenn du ein Formular nutzt" },
                      { t: "Nachricht", d: "Inhalt deiner Anfrage oder deines Feedbacks" },
                      { t: "Server-Logfiles", d: "IP-Adresse, Datum, Uhrzeit, aufgerufene Seiten — automatisch beim Aufruf" },
                      { t: "Browser- und Gerätedaten", d: "Browsertyp, Betriebssystem — für den technischen Betrieb" },
                      { t: "Cookie-Einwilligung", d: "Speicherung deiner Cookie-Auswahl (cb_cookie_consent)" },
                      { t: "Bewertungsdaten", d: "Sternebewertung und Feedback-Text — nur bei internem Feedback (1 bis 3 Sterne)" },
                    ].map((item) => (
                      <div key={item.t} className="rounded-2xl border border-ink/5 bg-white/60 p-5">
                        <p className="font-semibold text-ink">{item.t}</p>
                        <p className="mt-1 text-sm text-ink/60">{item.d}</p>
                      </div>
                    ))}
                  </div>
                </Section>
              </Reveal>

              {/* 4. Zweck */}
              <Reveal>
                <Section id="zweck" icon={Eye} title="Zweck der Datenverarbeitung">
                  <p className="leading-relaxed text-ink/70">Deine Daten werden für folgende Zwecke verarbeitet:</p>
                  <ul className="space-y-2.5">
                    {[
                      "Beantwortung von Kontaktanfragen und Angeboten",
                      "Koordination von Terminen und Terminwünschen",
                      "Bearbeitung von internem Feedback zur Qualitätssicherung",
                      "Sicherer und stabiler Betrieb dieser Website",
                      "Einhaltung gesetzlicher und vertraglicher Pflichten",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-ink/70">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="leading-relaxed text-ink/70">
                    Rechtsgrundlagen sind deine Einwilligung (Art. 6 DSGVO, Art. 13 revDSG), die Durchführung vorvertraglicher Massnahmen oder eines Vertrags sowie mein berechtigtes Interesse an einem sicheren und funktionierenden Webauftritt.
                  </p>
                </Section>
              </Reveal>

              {/* 5. Kontaktformulare */}
              <Reveal>
                <Section id="kontaktformulare" icon={FileText} title="Kontaktformulare">
                  <p className="leading-relaxed text-ink/70">
                    Auf dieser Website stehen dir ein Kontaktformular und ein internes Feedback-Formular zur Verfügung. Beim Absenden werden folgende Daten übermittelt: Name, E-Mail-Adresse, Telefonnummer (optional) und Nachricht.
                  </p>
                  <p className="leading-relaxed text-ink/70">
                    Die Daten werden verschlüsselt an mein Anfrage-Management-System MeisterFlow (meisterflow.ch) übertragen und dort ausschliesslich zur Bearbeitung deines Anliegens verwendet. Die Speicherung erfolgt, bis dein Anliegen abgeschlossen ist und keine gesetzlichen Aufbewahrungspflichten mehr bestehen.
                  </p>
                  <p className="leading-relaxed text-ink/70">
                    Beim internen Feedback-Formular werden Bewertungen mit 1 bis 3 Sternen samt deinem freiwilligen Feedback ausschliesslich intern an mich übermittelt. Bewertungen mit 4 bis 5 Sternen werden nicht gespeichert — du erhältst lediglich einen Link zu Google, wo die Datenschutzbestimmungen von Google gelten.
                  </p>
                </Section>
              </Reveal>

              {/* 6. Terminbuchung */}
              <Reveal>
                <Section id="terminbuchung" icon={FileCheck} title="Terminbuchung">
                  <p className="leading-relaxed text-ink/70">
                    Eine Terminbuchung erfolgt nicht über ein automatisches Online-Buchungssystem, sondern persönlich per Telefon, WhatsApp oder über das Kontaktformular. Dabei verarbeite ich die Angaben, die du mir zur Terminkoordination mitteilst (Name, Telefonnummer, gewünschter Zeitpunkt, Anliegen).
                  </p>
                  <p className="leading-relaxed text-ink/70">
                    Diese Daten werden ausschliesslich zur Vereinbarung und Durchführung des Termins verwendet. Es findet keine automatische Kalendersynchronisierung statt.
                  </p>
                </Section>
              </Reveal>

              {/* 7. Google Dienste */}
              <Reveal>
                <Section id="google-dienste" icon={MapPin} title="Google Dienste">
                  <p className="leading-relaxed text-ink/70">
                    Auf dieser Website werden folgende Google-Dienste eingesetzt:
                  </p>
                  <div className="space-y-3">
                    <div className="rounded-2xl border border-ink/5 bg-white/60 p-5">
                      <p className="font-semibold text-ink">Google Maps (Karteneinbettung)</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink/60">
                        Auf der Kontaktseite ist eine Google-Maps-Karte eingebettet, die den Standort des Studios anzeigt. Beim Laden der Karte werden durch Google technische Daten (inklusive IP-Adresse) verarbeitet. Die Datenschutzerklärung von Google findest du unter <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gold underline underline-offset-2">policies.google.com/privacy</a>.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-ink/5 bg-white/60 p-5">
                      <p className="font-semibold text-ink">Google Business Profil (Bewertungen)</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink/60">
                        Die Website verlinkt auf mein Google Business Profil, wo du Bewertungen einsehen und abgeben kannst. Beim Klick verlässt du diese Website, und es gelten die Datenschutzbestimmungen von Google. Es werden keine Bewertungsdaten auf dieser Website gespeichert.
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-ink/50">
                    Hinweis: Diese Website verwendet keine Google Analytics, keinen Google Tag Manager, keine Google Fonts und kein Google reCAPTCHA.
                  </p>
                </Section>
              </Reveal>

              {/* 8. Cookies */}
              <Reveal>
                <Section id="cookies" icon={Cookie} title="Cookies">
                  <p className="leading-relaxed text-ink/70">
                    Diese Website verwendet ausschliesslich technisch notwendige Cookies. Es werden keine Analyse-, Marketing- oder Tracking-Cookies eingesetzt.
                  </p>
                  <div className="rounded-2xl border border-ink/5 bg-white/60 p-5">
                    <p className="text-sm font-semibold text-ink">Eingesetztes Cookie:</p>
                    <dl className="mt-3 space-y-2 text-sm">
                      <div className="flex gap-2"><dt className="text-ink/50">Name:</dt><dd className="text-ink/70">cb_cookie_consent</dd></div>
                      <div className="flex gap-2"><dt className="text-ink/50">Zweck:</dt><dd className="text-ink/70">Speicherung deiner Cookie-Einwilligung</dd></div>
                      <div className="flex gap-2"><dt className="text-ink/50">Dauer:</dt><dd className="text-ink/70">Bis zum manuellen Löschen der Browser-Daten</dd></div>
                      <div className="flex gap-2"><dt className="text-ink/50">Typ:</dt><dd className="text-ink/70">Lokal gespeichert (localStorage), technisch notwendig</dd></div>
                    </dl>
                  </div>
                  <p className="leading-relaxed text-ink/70">
                    Du kannst Cookies jederzeit über die Einstellungen deines Browsers verwalten oder löschen. Deine Cookie-Auswahl kannst du auch über «Cookie-Einstellungen» im Footer ändern.
                  </p>
                </Section>
              </Reveal>

              {/* 9. Externe Dienste */}
              <Reveal>
                <Section id="externe-dienste" icon={ExternalLink} title="Externe Dienste">
                  <p className="leading-relaxed text-ink/70">
                    Folgende externe Dienste sind auf dieser Website eingebunden oder werden verlinkt:
                  </p>
                  <div className="space-y-3">
                    <div className="rounded-2xl border border-ink/5 bg-white/60 p-5">
                      <p className="font-semibold text-ink">WhatsApp</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink/60">
                        Die Website verlinkt auf WhatsApp (wa.me). Beim Klick auf den WhatsApp-Link werden deine Daten freiwillig an Meta Platforms Ireland Ltd. übermittelt. Es gelten die Datenschutzbestimmungen von Meta. Als Alternative zur Kontaktaufnahme stehen dir Telefon und E-Mail zur Verfügung.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-ink/5 bg-white/60 p-5">
                      <p className="font-semibold text-ink">Base44 (Hosting und Plattform)</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink/60">
                        Diese Website wird auf der Plattform Base44 (Base44, Inc.) gehostet. Beim Aufruf werden technische Daten (IP-Adresse, Browser-Informationen) an Base44 übermittelt, um die Website auszuliefern und zu betreiben.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-ink/5 bg-white/60 p-5">
                      <p className="font-semibold text-ink">onecdn.io (Content Delivery Network)</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink/60">
                        Bilder und statische Assets werden über onecdn.io ausgeliefert. Dabei kann deine IP-Adresse an den CDN-Anbieter übermittelt werden.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-ink/5 bg-white/60 p-5">
                      <p className="font-semibold text-ink">media.base44.com (Video-Hosting)</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink/60">
                        Videos (Hero-Video und Reels) werden von media.base44.com bereitgestellt. Beim Abruf wird deine IP-Adresse an den Video-Hosting-Anbieter übermittelt.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-ink/5 bg-white/60 p-5">
                      <p className="font-semibold text-ink">MeisterFlow (Anfrage-Management)</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink/60">
                        Formulardaten werden verschlüsselt an MeisterFlow (meisterflow.ch) übertragen und dort zur Bearbeitung deines Anliegens gespeichert.
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-ink/50">
                    Hinweis: Diese Website verwendet keine Social-Media-Plugins, keinen Newsletter, keine Analyse-Tools und keine Zahlungsanbieter.
                  </p>
                </Section>
              </Reveal>

              {/* 10. Speicherdauer */}
              <Reveal>
                <Section id="speicherdauer" icon={Clock} title="Speicherdauer">
                  <p className="leading-relaxed text-ink/70">
                    Personenbezogene Daten werden nur so lange gespeichert, wie dies für den jeweiligen Verarbeitungszweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. Nach Wegfall des Zwecks werden die Daten gelöscht oder anonymisiert.
                  </p>
                  <p className="leading-relaxed text-ink/70">
                    Konkrete Aufbewahrungsfristen werden nicht pauschal festgelegt, sondern richten sich nach der Art der Daten und dem jeweiligen Zweck. Formulardaten werden nach Abschluss des Anliegens gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten (z. B. im Rahmen der Buchführung) entgegenstehen.
                  </p>
                </Section>
              </Reveal>

              {/* 11. Datensicherheit */}
              <Reveal>
                <Section id="datensicherheit" icon={Lock} title="Datensicherheit">
                  <p className="leading-relaxed text-ink/70">
                    Ich treffe angemessene technische und organisatorische Massnahmen, um deine Daten vor unbefugtem Zugriff, Verlust oder Missbrauch zu schützen:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      { icon: Lock, t: "SSL-Verschlüsselung", d: "Die Übertragung deiner Daten erfolgt verschlüsselt über HTTPS." },
                      { icon: ShieldCheck, t: "Technische Massnahmen", d: "Zugriffskontrollen, regelmässige Updates und sichere Hosting-Infrastruktur." },
                      { icon: User, t: "Organisatorische Massnahmen", d: "Interne Richtlinien und Schulung zum Umgang mit Personendaten." },
                      { icon: Eye, t: "Zugriffsschutz", d: "Datenzugriff nur durch autorisierte Personen, soweit erforderlich." },
                    ].map((item) => (
                      <div key={item.t} className="rounded-2xl border border-ink/5 bg-white/60 p-5">
                        <item.icon className="h-5 w-5 text-gold" />
                        <p className="mt-2 font-semibold text-ink">{item.t}</p>
                        <p className="mt-1 text-sm text-ink/60">{item.d}</p>
                      </div>
                    ))}
                  </div>
                  <p className="leading-relaxed text-ink/70">
                    Eine absolute Sicherheit kann jedoch nicht garantiert werden. Da E-Mail und Instant Messaging nicht als vollständig sichere Kommunikationsformen gelten, bitte ich dich, keine vertraulichen Gesundheitsinformationen über diese Kanäle zu übermitteln.
                  </p>
                </Section>
              </Reveal>

              {/* 12. Rechte */}
              <Reveal>
                <Section id="rechte" icon={ShieldCheck} title="Deine Rechte">
                  <p className="leading-relaxed text-ink/70">
                    Du hast als betroffene Person folgende Rechte:
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      { icon: Eye, t: "Auskunft", d: "Du kannst jederzeit Auskunft über deine gespeicherten Daten verlangen." },
                      { icon: Edit, t: "Berichtigung", d: "Du kannst die Korrektur unrichtiger Daten verlangen." },
                      { icon: Trash2, t: "Löschung", d: "Du kannst die Löschung deiner Daten verlangen, soweit gesetzlich zulässig." },
                      { icon: Lock, t: "Einschränkung", d: "Du kannst die Einschränkung der Verarbeitung verlangen." },
                      { icon: FileCheck, t: "Datenherausgabe", d: "Du kannst die Herausgabe deiner Daten in einem strukturierten Format verlangen." },
                      { icon: ArrowRight, t: "Widerspruch", d: "Du kannst der Verarbeitung widersprechen und eine erteilte Einwilligung widerrufen." },
                    ].map((item) => (
                      <div key={item.t} className="rounded-2xl border border-ink/5 bg-white/60 p-5">
                        <item.icon className="h-5 w-5 text-gold" />
                        <p className="mt-2 font-semibold text-ink">{item.t}</p>
                        <p className="mt-1 text-sm text-ink/60">{item.d}</p>
                      </div>
                    ))}
                  </div>
                  <p className="leading-relaxed text-ink/70">
                    Zur Ausübung deiner Rechte wende dich an <a href={`mailto:${CONTACT.email}`} className="text-gold underline underline-offset-2">{CONTACT.email}</a>. Zudem steht dir ein Beschwerderecht beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) zu.
                  </p>
                </Section>
              </Reveal>

              {/* 13. Änderungen */}
              <Reveal>
                <Section id="aenderungen" icon={Edit} title="Änderungen dieser Datenschutzerklärung">
                  <p className="leading-relaxed text-ink/70">
                    Ich kann diese Datenschutzerklärung jederzeit anpassen, insbesondere um Änderungen der gesetzlichen Rahmenbedingungen oder der eingesetzten Dienste Rechnung zu tragen. Es gilt jeweils die aktuelle, auf dieser Website veröffentlichte Fassung.
                  </p>
                  <p className="text-sm text-ink/50">Stand: September 2026</p>
                </Section>
              </Reveal>

              {/* 14. Kontakt */}
              <Reveal>
                <div id="kontakt" className="scroll-mt-32 rounded-[2rem] border border-ink/5 bg-champagne/15 p-8 text-center sm:p-10">
                  <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Fragen zum Datenschutz?</h2>
                  <p className="mx-auto mt-4 max-w-lg text-ink/70">Bei Fragen zur Verarbeitung deiner Daten erreichst du mich direkt:</p>
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
          </div>
        </div>
      </section>
    </>
  );
}