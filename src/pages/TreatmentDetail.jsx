import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowRight, Check, Clock, Sparkles, Heart, ShieldCheck } from "lucide-react";
import useSeo, { breadcrumbSchema } from "@/hooks/useSeo";
import { getTreatment, getRelatedTreatments, ALL_TREATMENTS } from "@/lib/treatments";
import { CONTACT, SITE_URL, IMAGES } from "@/lib/site";
import { webPageSchema } from "@/lib/schema";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";
import BtnLink from "@/components/site/BtnLink";
import { Image } from "@/components/ui/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import LiposanaLanding from "@/components/treatments/LiposanaLanding";
import BeckenbodenLanding from "@/components/treatments/BeckenbodenLanding";

const LIPOSANA_SLUGS = ["liposana-3-einzelbehandlung", "liposana-3-jahresabo-1x-pro-monat"];
const BECKENBODEN_SLUGS = ["beckenboden-training-stuhl", "beckenboden-training-stuhl-probetraining"];

const BENEFITS = [
  { icon: Sparkles, title: "Individuell abgestimmt", desc: "Jede Behandlung passe ich an deinen Hauttyp und deine Wünsche an." },
  { icon: Heart, title: "Entspannte Atmosphäre", desc: "Geniesse deine Behandlung in einer ruhigen, privaten Umgebung." },
  { icon: ShieldCheck, title: "Hochwertige Produkte", desc: "Sorgfältig ausgewählte Pflegeprodukte für sichtbare Ergebnisse." },
];

const STEPS = [
  { step: "Beratung", desc: "Gemeinsam besprechen wir deine Wünsche und analysieren deine Haut." },
  { step: "Vorbereitung", desc: "Sanfte Reinigung und Vorbereitung auf die eigentliche Behandlung." },
  { step: "Behandlung", desc: "Die Massnahme wird professionell und sorgfältig durchgeführt." },
  { step: "Nachsorge", desc: "Pflegetipps für zu Hause und Empfehlungen für den nächsten Termin." },
];

const buildFaqs = (t) => [
  { q: `Was kostet ${t.name} bei Charm Beauty?`, a: `Die ${t.name} kostet ${t.price}. Der genaue Preis richtet sich nach deinem individuellen Bedarf und dem Umfang der Behandlung. In einem persönlichen Gespräch erstelle ich dir gerne eine unverbindliche Offerte.` },
  { q: `Wie lange dauert ${t.name}?`, a: `Die Dauer hängt vom Umfang der Behandlung und deinen Hautbedürfnissen ab. In der Beratung besprechen wir gemeinsam, welcher Umfang für dich passend ist.` },
  { q: `Ist ${t.name} für meine Haut geeignet?`, a: `Vor jeder Behandlung analysiere ich deine Haut und passe die Produkte entsprechend an. So stelle ich sicher, dass die Behandlung zu deinem Hauttyp passt.` },
  { q: `Wie oft sollte ich ${t.name} wiederholen?`, a: `Für nachhaltige Ergebnisse empfehle ich, die Behandlung regelmässig zu wiederholen. Das genaue Intervall besprechen wir gemeinsam nach deiner ersten Behandlung.` },
  { q: `Wie buche ich einen Termin für ${t.name}?`, a: `Du kannst mich jederzeit per WhatsApp oder Telefon erreichen, um einen Termin zu vereinbaren. Ich freue mich auf dich.` },
];

export default function TreatmentDetail() {
  const { slug } = useParams();
  const treatment = getTreatment(slug);

  useSeo({
    title: treatment ? `${treatment.name} Winterthur | Charm Beauty` : "Behandlung | Charm Beauty Winterthur",
    description: treatment?.desc || "",
    path: `/behandlungen/angebot/${slug}`,
    schemas: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Behandlungen", path: "/behandlungen" },
        { name: treatment?.name || "Behandlung", path: `/behandlungen/angebot/${slug}` },
      ]),
      webPageSchema({ path: `/behandlungen/angebot/${slug}` }),
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: treatment?.name,
        provider: { "@type": "BeautySalon", name: "Charm Beauty", url: SITE_URL },
        areaServed: "Winterthur",
        offers: { "@type": "Offer", price: treatment?.price?.replace(/[^\d]/g, ""), priceCurrency: "CHF" },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: (treatment ? buildFaqs(treatment) : []).map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  });

  if (!treatment) return <Navigate to="/behandlungen" replace />;

  if (LIPOSANA_SLUGS.includes(slug)) return <LiposanaLanding />;
  if (BECKENBODEN_SLUGS.includes(slug)) return <BeckenbodenLanding />;

  const related = getRelatedTreatments(slug, treatment.category);
  const faqs = buildFaqs(treatment);

  return (
    <>
      <PageHero
        breadcrumbs={[{ name: "Home", to: "/" }, { name: "Behandlungen", to: "/behandlungen" }, { name: treatment.name }]}
        eyebrow={treatment.category}
        title={treatment.name}
        intro={treatment.desc}
      />

      {/* Hero Bild */}
      {treatment.image && (
        <section className="px-6 pb-4">
          <Reveal className="mx-auto max-w-5xl">
            <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] bg-cream">
              <Image src={treatment.image} alt={treatment.name} fittingType="fit" className="h-full w-full" />
            </div>
          </Reveal>
        </section>
      )}

      {/* Preis & CTA */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-gold/30 bg-cream p-8 sm:flex-row sm:items-center">
              <div>
                <span className="text-sm uppercase tracking-[0.18em] text-gold">Preis</span>
                <p className="mt-2 text-3xl font-semibold text-ink">{treatment.price}</p>
                {treatment.badge && (
                  <span className="mt-3 inline-block rounded-full bg-gold/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-gold">
                    {treatment.badge}
                  </span>
                )}
              </div>
              <BtnLink href={CONTACT.whatsapp}>Termin buchen</BtnLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Beschreibung */}
      <section className="px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <Eyebrow>Über die Behandlung</Eyebrow>
              <h2 className="mt-5 text-4xl font-semibold text-ink sm:text-5xl">Was dich erwartet</h2>
              <p className="mt-6 text-lg leading-relaxed text-ink/70">{treatment.desc}</p>
              <p className="mt-4 text-lg leading-relaxed text-ink/70">
                Bei Charm Beauty in Winterthur führe ich die {treatment.name} mit fundiertem Fachwissen und hochwertigen Produkten durch. Deine Bedürfnisse stehen im Mittelpunkt – ich berate dich ehrlich und individuell.
              </p>
              <Reveal delay={0.2} className="mt-8"><BtnLink href={CONTACT.whatsapp}>Termin vereinbaren</BtnLink></Reveal>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
              {treatment.image && (
                <div className="mb-6 overflow-hidden rounded-[2rem] bg-cream">
                  <Image src={treatment.image} alt={treatment.name} fittingType="fit" className="aspect-[3/2] w-full object-contain" />
                </div>
              )}
              <div className="rounded-[2rem] border border-ink/5 bg-white/70 p-8">
                <h3 className="text-lg font-semibold text-ink">Auf einen Blick</h3>
                <ul className="mt-5 space-y-4 text-sm text-ink/70">
                  <li className="flex items-center gap-3"><Clock className="h-4 w-4 text-gold" /> Individuelle Dauer</li>
                  <li className="flex items-center gap-3"><Check className="h-4 w-4 text-gold" /> {treatment.price}</li>
                  <li className="flex items-center gap-3"><Sparkles className="h-4 w-4 text-gold" /> {treatment.category}</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Liposana 3 Promotional Banner */}
      {slug.includes("liposana-3") && (
        <section className="px-6 py-16 sm:py-24">
          <Reveal className="mx-auto max-w-2xl">
            <div className="overflow-hidden rounded-[2rem] border border-gold/20 shadow-[0_24px_60px_-30px_rgba(4,21,31,0.3)]">
              <Image src={IMAGES.liposanaPromo} alt="Liposana 3 – Tag des positiven Denkens" fittingType="fit" originWidth={1080} originHeight={1350} className="w-full" />
            </div>
          </Reveal>
        </section>
      )}

      {/* Vorteile */}
      <section className="bg-cream/60 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal><Eyebrow>Vorteile</Eyebrow></Reveal>
          <Reveal delay={0.1}><h2 className="mt-5 max-w-2xl text-4xl font-semibold text-ink sm:text-5xl">Warum {treatment.name} bei Charm Beauty?</h2></Reveal>
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
              {faqs.map((f, i) => (
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
          <Reveal delay={0.1}><h2 className="mt-5 text-4xl font-semibold text-ink sm:text-5xl">Bereit für {treatment.name}?</h2></Reveal>
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