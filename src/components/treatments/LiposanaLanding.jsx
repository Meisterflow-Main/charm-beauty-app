import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Clock, Sparkles, Heart, ShieldCheck, Calendar, Repeat } from "lucide-react";
import useSeo, { breadcrumbSchema } from "@/hooks/useSeo";
import { ALL_TREATMENTS, getRelatedTreatments } from "@/lib/treatments";
import { CONTACT, SITE_URL, IMAGES } from "@/lib/site";
import { webPageSchema } from "@/lib/schema";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";
import BtnLink from "@/components/site/BtnLink";
import { Image } from "@/components/ui/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BENEFITS = [
  { icon: Sparkles, title: "Individuell abgestimmt", desc: "Jede Behandlung passe ich an deine Bedürfnisse und dein Wohlbefinden an." },
  { icon: Heart, title: "Entspannte Atmosphäre", desc: "Geniesse deine Behandlung in einer ruhigen, privaten Umgebung." },
  { icon: ShieldCheck, title: "Sichtbare Ergebnisse", desc: "Aktivierung des Lymphflusses, neuromuskuläre Stimulation und entzündungshemmender Ultraschall." },
];

const STEPS = [
  { step: "Beratung", desc: "Gemeinsam besprechen wir deine Wünsche und analysieren dein Anliegen." },
  { step: "Vorbereitung", desc: "Sanfte Vorbereitung auf die eigentliche Behandlung." },
  { step: "Behandlung", desc: "Die Massnahme wird professionell und sorgfältig durchgeführt." },
  { step: "Nachsorge", desc: "Pflegetipps für zu Hause und Empfehlungen für den nächsten Termin." },
];

const FAQS = [
  { q: "Was kostet Liposana 3 bei Charm Beauty?", a: "Die Einzelbehandlung kostet CHF 175.–. Für nachhaltige Ergebnisse empfehle ich das Jahresabo mit monatlicher Anwendung für CHF 1 500.–." },
  { q: "Wie lange dauert eine Liposana 3 Behandlung?", a: "Die Dauer hängt vom Umfang der Behandlung ab. In der Beratung besprechen wir gemeinsam, welcher Umfang für dich passend ist." },
  { q: "Wie oft sollte ich Liposana 3 wiederholen?", a: "Für nachhaltige Ergebnisse empfehle ich die regelmässige Anwendung. Das Jahresabo beinhaltet eine Behandlung pro Monat und ist ideal für langfristige Ergebnisse." },
  { q: "Bei welchen Beschwerden hilft Liposana 3?", a: "Liposana 3 hilft bei Lipödemen, Reiterhose, Lymphproblemen, Cellulite, Gelenkschmerzen, Sodbrennen, Migräne, Schwangerschaftsstreifen, Harninkontinenz, Bandscheibenvorfällen, Aktivierung des Stoffwechsels, Endometriose und mehr." },
  { q: "Wie buche ich einen Termin für Liposana 3?", a: "Du kannst mich jederzeit per WhatsApp oder Telefon erreichen, um einen Termin zu vereinbaren. Ich freue mich auf dich." },
];

export default function LiposanaLanding() {
  const einzelbehandlung = ALL_TREATMENTS.find((t) => t.slug === "liposana-3");
  const jahresabo = ALL_TREATMENTS.find((t) => t.slug === "liposana-3-jahresabo-1x-pro-monat");
  const related = getRelatedTreatments("liposana-3", "Körper").filter((t) => !t.slug.includes("liposana-3"));

  useSeo({
    title: "Liposana 3 Winterthur | Charm Beauty",
    description: einzelbehandlung?.desc || "",
    path: "/behandlungen/angebot/liposana-3",
    schemas: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Behandlungen", path: "/behandlungen" },
        { name: "Liposana 3", path: "/behandlungen/angebot/liposana-3" },
      ]),
      webPageSchema({ path: "/behandlungen/angebot/liposana-3" }),
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Liposana 3",
        provider: { "@type": "BeautySalon", name: "Charm Beauty", url: SITE_URL },
        areaServed: "Winterthur",
        offers: [
          { "@type": "Offer", name: "Einzelbehandlung", price: "175", priceCurrency: "CHF" },
          { "@type": "Offer", name: "Jahresabo (1x pro Monat)", price: "1500", priceCurrency: "CHF" },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  });

  const pricingOptions = [
    { ...einzelbehandlung, icon: Sparkles, label: "Einzelbehandlung", highlight: true },
    { ...jahresabo, icon: Repeat, label: "Jahresabo", highlight: false },
  ];

  return (
    <>
      <PageHero
        breadcrumbs={[{ name: "Home", to: "/" }, { name: "Behandlungen", to: "/behandlungen" }, { name: "Liposana 3" }]}
        eyebrow="Körper"
        title="Liposana 3"
        intro={einzelbehandlung?.desc}
      />

      {/* Hero Bild */}
      {einzelbehandlung?.image && (
        <section className="px-6 pb-4">
          <Reveal className="mx-auto max-w-5xl">
            <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] bg-cream">
              <Image src={einzelbehandlung.image} alt="Liposana 3 Behandlung" fittingType="fit" className="h-full w-full" />
            </div>
          </Reveal>
        </section>
      )}

      {/* Preis-Optionen */}
      <section className="px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 text-center">
            <Eyebrow>Preisoptionen</Eyebrow>
            <h2 className="mt-5 text-4xl font-semibold text-ink sm:text-5xl">Wähle dein Modell</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
              Ob als einzelne Behandlung oder als Jahresabo für nachhaltige Ergebnisse – du entscheidest, was zu dir passt.
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {pricingOptions.map((opt, i) => (
              <Reveal key={opt.slug} delay={i * 0.1}>
                <div className={`flex h-full flex-col rounded-[2rem] border p-8 transition-all duration-500 ${
                  opt.highlight
                    ? "border-gold/40 bg-cream shadow-[0_24px_60px_-24px_rgba(184,134,11,0.45)]"
                    : "border-ink/10 bg-white/70 hover:border-gold/30"
                }`}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-champagne/30 text-gold">
                      <opt.icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-semibold text-ink">{opt.label}</h3>
                    {opt.badge && (
                      <span className="ml-auto rounded-full bg-gold/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-gold">
                        {opt.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-ink/60">{opt.desc}</p>
                  <p className="mt-6 text-3xl font-semibold text-gold">{opt.price}</p>
                  {opt.highlight ? (
                    <p className="mt-2 text-xs text-ink/50">Pro Sitzung</p>
                  ) : (
                    <p className="mt-2 text-xs text-ink/50">12 Sitzungen (1x pro Monat)</p>
                  )}
                  <div className="mt-auto pt-8">
                    <BtnLink href={CONTACT.whatsapp} variant={opt.highlight ? "gold" : "outline"} className="w-full">
                      Termin buchen
                    </BtnLink>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Liposana 3 Promotional Banner */}
      <section className="px-6 py-16 sm:py-24">
        <Reveal className="mx-auto max-w-2xl">
          <div className="overflow-hidden rounded-[2rem] border border-gold/20 shadow-[0_24px_60px_-30px_rgba(4,21,31,0.3)]">
            <Image src={IMAGES.liposanaPromo} alt="Liposana 3 – Tag des positiven Denkens" fittingType="fit" originWidth={1080} originHeight={1350} className="w-full" />
          </div>
        </Reveal>
      </section>

      {/* Was dich erwartet */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <Eyebrow>Über die Behandlung</Eyebrow>
              <h2 className="mt-5 text-4xl font-semibold text-ink sm:text-5xl">Was dich erwartet</h2>
              <p className="mt-6 text-lg leading-relaxed text-ink/70">{einzelbehandlung?.desc}</p>
              <p className="mt-4 text-lg leading-relaxed text-ink/70">
                Bei Charm Beauty in Winterthur führe ich die Liposana 3 Behandlung mit fundiertem Fachwissen und professioneller Sorgfalt durch. Deine Bedürfnisse stehen im Mittelpunkt – ich berate dich ehrlich und individuell.
              </p>
              <Reveal delay={0.2} className="mt-8"><BtnLink href={CONTACT.whatsapp}>Termin vereinbaren</BtnLink></Reveal>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
              <div className="rounded-[2rem] border border-ink/5 bg-white/70 p-8">
                <h3 className="text-lg font-semibold text-ink">Auf einen Blick</h3>
                <ul className="mt-5 space-y-4 text-sm text-ink/70">
                  <li className="flex items-center gap-3"><Clock className="h-4 w-4 text-gold" /> Individuelle Dauer</li>
                  <li className="flex items-center gap-3"><Check className="h-4 w-4 text-gold" /> Einzelbehandlung CHF 175.–</li>
                  <li className="flex items-center gap-3"><Repeat className="h-4 w-4 text-gold" /> Jahresabo CHF 1 500.–</li>
                  <li className="flex items-center gap-3"><Sparkles className="h-4 w-4 text-gold" /> Körper</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="bg-cream/60 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal><Eyebrow>Vorteile</Eyebrow></Reveal>
          <Reveal delay={0.1}><h2 className="mt-5 max-w-2xl text-4xl font-semibold text-ink sm:text-5xl">Warum Liposana 3 bei Charm Beauty?</h2></Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <div className="h-full rounded-[2rem] border border-ink/5 bg-white/70 p-8 backdrop-blur">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-champagne/30 text-gold"><b.icon className="h-5 w-5" /></span>
                  <h3 className="mt-5 text-xl font-semibold text-ink">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal><Eyebrow>Ablauf</Eyebrow></Reveal>
          <Reveal delay={0.1}><h2 className="mt-5 max-w-2xl text-4xl font-semibold text-ink sm:text-5xl">So läuft deine Behandlung ab</h2></Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.08}>
                <div className="h-full rounded-[2rem] border border-ink/5 bg-white/70 p-8">
                  <span className="font-heading text-5xl font-semibold text-champagne/60">0{i + 1}</span>
                  <h3 className="mt-3 text-xl font-semibold text-ink">{s.step}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream/60 px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal><Eyebrow>FAQ</Eyebrow></Reveal>
            <Reveal delay={0.1}><h2 className="mt-5 text-4xl font-semibold text-ink sm:text-5xl">Häufige Fragen</h2></Reveal>
          </div>
          <Reveal delay={0.2} className="lg:col-span-7 lg:col-start-6">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem key={i} value={`q${i}`} className="border-ink/10">
                  <AccordionTrigger className="py-6 text-left font-heading text-lg font-medium text-ink hover:text-gold hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="pb-6 text-base leading-relaxed text-ink/70">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* Verwandte Behandlungen */}
      {related.length > 0 && (
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <Reveal><Eyebrow>Weitere Behandlungen</Eyebrow></Reveal>
            <Reveal delay={0.1}><h2 className="mt-5 max-w-2xl text-4xl font-semibold text-ink sm:text-5xl">Das könnte dich auch interessieren</h2></Reveal>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 0.08}>
                  <Link to={`/behandlungen/angebot/${r.slug}`} className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-ink/5 bg-white/70 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_24px_60px_-30px_rgba(4,21,31,0.35)]">
                    {r.image && (
                      <div className="relative aspect-[3/2] overflow-hidden bg-cream">
                        <Image src={r.image} alt={r.name} fittingType="fit" className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105" />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-8">
                      <h3 className="text-xl font-semibold text-ink">{r.name}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{r.desc}</p>
                      <p className="mt-5 text-lg font-semibold text-gold">{r.price}</p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink transition group-hover:gap-3 group-hover:text-gold">Mehr erfahren <ArrowRight className="h-4 w-4" /></span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal><Eyebrow>Termin buchen</Eyebrow></Reveal>
          <Reveal delay={0.1}><h2 className="mt-5 text-4xl font-semibold text-ink sm:text-5xl">Bereit für Liposana 3?</h2></Reveal>
          <Reveal delay={0.2}><p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">Kontaktiere mich und vereinbare deinen Termin. Ich freue mich, dich persönlich kennenzulernen.</p></Reveal>
          <Reveal delay={0.3} className="mt-8 flex flex-wrap justify-center gap-4">
            <BtnLink href={CONTACT.whatsapp}>Termin buchen</BtnLink>
            <BtnLink to="/kontakt" variant="outline">Kontakt</BtnLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}