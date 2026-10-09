import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Clock, Sparkles, Heart, ShieldCheck, Activity, Baby, TrendingUp } from "lucide-react";
import useSeo, { breadcrumbSchema } from "@/hooks/useSeo";
import { ALL_TREATMENTS, getRelatedTreatments } from "@/lib/treatments";
import { CONTACT, SITE_URL } from "@/lib/site";
import { webPageSchema } from "@/lib/schema";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";
import BtnLink from "@/components/site/BtnLink";
import { Image } from "@/components/ui/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BENEFITS = [
  { icon: ShieldCheck, title: "Reduziert Harninkontinenz", desc: "Verhindert und reduziert Harninkontinenz durch gezieltes Training der Beckenbodenmuskulatur." },
  { icon: Activity, title: "Lindert Rückenschmerzen", desc: "Lindert untere Rückenschmerzen und stärkt die Haltefunktion der inneren Organe." },
  { icon: Baby, title: "Schwangerschaftsrückbildung", desc: "Unterstützt die Rückbildung nach der Schwangerschaft und strafft das Gewebe am Po." },
  { icon: TrendingUp, title: "Steigert die Libido", desc: "Weniger nächtlicher Harndrang und eine gesteigerte Libido durch regelmässiges Training." },
];

const STEPS = [
  { step: "Beratung", desc: "Gemeinsam besprechen wir deine Wünsche und analysieren dein Anliegen." },
  { step: "Vorbereitung", desc: "Sanfte Vorbereitung und Erklärung der Funktionsweise des Training-Stuhls." },
  { step: "Behandlung", desc: "Das Training wird professionell und sorgfältig durchgeführt." },
  { step: "Nachsorge", desc: "Empfehlungen für den nächsten Termin und Tipps für zu Hause." },
];

const FAQS = [
  { q: "Was kostet das Beckenboden Training mit dem Stuhl bei Charm Beauty?", a: "Das Probetraining kostet CHF 30.– und ist ideal, um die Methode kennenzulernen. Eine reguläre Sitzung kostet CHF 40.–." },
  { q: "Wie lange dauert eine Beckenboden Training-Stuhl Sitzung?", a: "Die Dauer hängt vom Umfang der Behandlung ab. In der Beratung besprechen wir gemeinsam, welcher Umfang für dich passend ist." },
  { q: "Wie oft sollte ich das Beckenboden Training wiederholen?", a: "Für nachhaltige Ergebnisse empfehle ich die regelmässige Anwendung. Das genaue Intervall besprechen wir gemeinsam nach deiner ersten Sitzung." },
  { q: "Bei welchen Beschwerden hilft der Beckenboden Training-Stuhl?", a: "Der Beckenboden Training-Stuhl hilft bei Harninkontinenz, unteren Rückenschmerzen, schwacher Beckenbodenmuskulatur, nach der Schwangerschaft, bei nächtlichem Harndrang, schwacher Haltefunktion der inneren Organe und kann die Libido steigern." },
  { q: "Wie buche ich einen Termin für das Beckenboden Training?", a: "Du kannst mich jederzeit per WhatsApp oder Telefon erreichen, um einen Termin zu vereinbaren. Ich freue mich auf dich." },
];

export default function BeckenbodenLanding() {
  const hauptbehandlung = ALL_TREATMENTS.find((t) => t.slug === "beckenboden-training-stuhl");
  const probetraining = ALL_TREATMENTS.find((t) => t.slug === "beckenboden-training-stuhl-probetraining");
  const related = getRelatedTreatments("beckenboden-training-stuhl", "Körper").filter((t) => !t.slug.includes("beckenboden-training-stuhl"));

  useSeo({
    title: "Beckenboden Training-Stuhl Winterthur | Charm Beauty",
    description: hauptbehandlung?.desc || "",
    path: "/behandlungen/angebot/beckenboden-training-stuhl",
    schemas: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Behandlungen", path: "/behandlungen" },
        { name: "Beckenboden Training-Stuhl", path: "/behandlungen/angebot/beckenboden-training-stuhl" },
      ]),
      webPageSchema({ path: "/behandlungen/angebot/beckenboden-training-stuhl" }),
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Beckenboden Training-Stuhl",
        provider: { "@type": "BeautySalon", name: "Charm Beauty", url: SITE_URL },
        areaServed: "Winterthur",
        offers: [
          { "@type": "Offer", name: "Probetraining", price: "30", priceCurrency: "CHF" },
          { "@type": "Offer", name: "Sitzung", price: "40", priceCurrency: "CHF" },
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
    { ...probetraining, icon: Sparkles, label: "Probetraining", highlight: true },
    { ...hauptbehandlung, icon: Heart, label: "Sitzung", highlight: false },
  ];

  return (
    <>
      <PageHero
        breadcrumbs={[{ name: "Home", to: "/" }, { name: "Behandlungen", to: "/behandlungen" }, { name: "Beckenboden Training-Stuhl" }]}
        eyebrow="Körper"
        title="Beckenboden Training-Stuhl"
        intro={hauptbehandlung?.desc}
      />

      {/* Hero Bild */}
      {hauptbehandlung?.image && (
        <section className="px-6 pb-4">
          <Reveal className="mx-auto max-w-5xl">
            <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] bg-cream">
              <Image src={hauptbehandlung.image} alt="Beckenboden Training-Stuhl Behandlung" fittingType="fit" className="h-full w-full" />
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
              Starte mit einem Probetraining, um die Methode kennenzulernen, oder buche direkt eine reguläre Sitzung.
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
                    <p className="mt-2 text-xs text-ink/50">Kennenlern-Stunde</p>
                  ) : (
                    <p className="mt-2 text-xs text-ink/50">Pro Sitzung</p>
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

      {/* Vorteile */}
      <section className="bg-cream/60 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal><Eyebrow>Vorteile</Eyebrow></Reveal>
          <Reveal delay={0.1}><h2 className="mt-5 max-w-2xl text-4xl font-semibold text-ink sm:text-5xl">Warum der Beckenboden Training-Stuhl?</h2></Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <div className="h-full rounded-[2rem] border border-ink/5 bg-white/70 p-8 backdrop-blur">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-champagne/30 text-gold"><b.icon className="h-5 w-5" /></span>
                  <h3 className="mt-5 text-lg font-semibold text-ink">{b.title}</h3>
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
          <Reveal delay={0.1}><h2 className="mt-5 text-4xl font-semibold text-ink sm:text-5xl">Bereit für den Beckenboden Training-Stuhl?</h2></Reveal>
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