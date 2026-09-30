import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { MapPin, ArrowRight, Check } from "lucide-react";
import useSeo, { breadcrumbSchema } from "@/hooks/useSeo";
import { getService, SERVICES } from "@/lib/services";
import { getLandingPage } from "@/lib/landingPages";
import { CONTACT, SITE_URL } from "@/lib/site";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/site/Reveal";
import BtnLink from "@/components/site/BtnLink";
import Eyebrow from "@/components/site/Eyebrow";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);

  useSeo({
    title: service?.metaTitle || "Behandlung | Charm Beauty Winterthur",
    description: service?.metaDescription || "",
    path: `/behandlungen/${slug}`,
    image: service?.image,
    schemas: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Behandlungen", path: "/behandlungen" },
        { name: service?.title || "Behandlung", path: `/behandlungen/${slug}` },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service?.title,
        serviceType: service?.title,
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: { "@type": "City", name: "Winterthur" },
        url: `${SITE_URL}/behandlungen/${slug}`,
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: (service?.faqs || []).map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  });

  if (!service) return <Navigate to="/behandlungen" replace />;

  const related = service.relatedRegions.map(getLandingPage).filter(Boolean);

  return (
    <>
      <PageHero
        breadcrumbs={[{ name: "Home", to: "/" }, { name: "Behandlungen", to: "/behandlungen" }, { name: service.title }]}
        eyebrow={service.eyebrow}
        title={service.h1}
        intro={service.intro}
      />

      {/* Beschreibung */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <Reveal className="overflow-hidden rounded-[2.5rem] lg:col-span-6">
            <img src={service.image} alt={`${service.title} im Kosmetikstudio Charm Beauty Winterthur`} className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <Eyebrow>{service.eyebrow}</Eyebrow>
            <h2 className="mt-5 text-4xl font-semibold text-ink sm:text-5xl">Was dich erwartet</h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">{service.description}</p>
            <Reveal delay={0.2} className="mt-8"><BtnLink href={CONTACT.whatsapp}>Termin buchen</BtnLink></Reveal>
          </Reveal>
        </div>
      </section>

      {/* Vorteile */}
      <section className="bg-cream/60 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal><Eyebrow>Vorteile</Eyebrow></Reveal>
          <Reveal delay={0.1}><h2 className="mt-5 max-w-2xl text-4xl font-semibold text-ink sm:text-5xl">Warum eine {service.title} bei Charm Beauty?</h2></Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.advantages.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <div className="h-full rounded-[2rem] border border-ink/5 bg-white/70 p-8 backdrop-blur">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-champagne/30 text-gold"><Check className="h-5 w-5" /></span>
                  <h3 className="mt-5 text-xl font-semibold text-ink">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{a.desc}</p>
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
            {service.ablauf.map((s, i) => (
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

      {/* Preisfaktoren */}
      <section className="bg-cream/60 px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Preise</Eyebrow>
            <h2 className="mt-5 text-4xl font-semibold text-ink sm:text-5xl">Preisfaktoren</h2>
            <p className="mt-6 text-base leading-relaxed text-ink/70">Der Preis richtet sich nach deinem individuellen Bedarf. In einem persönlichen Gespräch erstelle ich dir gerne eine unverbindliche Offerte.</p>
            <Reveal delay={0.2} className="mt-8"><BtnLink href={CONTACT.whatsapp}>Offerte anfragen</BtnLink></Reveal>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <ul className="space-y-4">
              {service.preisfaktoren.map((p, i) => (
                <li key={i} className="flex items-start gap-4 rounded-[1.5rem] border border-ink/5 bg-white/70 p-6">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-champagne/30 text-gold"><Check className="h-4 w-4" /></span>
                  <span className="text-base leading-relaxed text-ink/80">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal><Eyebrow>FAQ</Eyebrow></Reveal>
            <Reveal delay={0.1}><h2 className="mt-5 text-4xl font-semibold text-ink sm:text-5xl">Häufige Fragen</h2></Reveal>
          </div>
          <Reveal delay={0.2} className="lg:col-span-7 lg:col-start-6">
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((f, i) => (
                <AccordionItem key={i} value={`q${i}`} className="border-ink/10">
                  <AccordionTrigger className="py-6 text-left font-heading text-lg font-medium text-ink hover:text-gold hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="pb-6 text-base leading-relaxed text-ink/70">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* Verwandte Regionen (Service ↔ Region) */}
      {related.length > 0 && (
        <section className="bg-cream/60 px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <Reveal><Eyebrow>Regionen</Eyebrow></Reveal>
            <Reveal delay={0.1}><h2 className="mt-5 max-w-2xl text-4xl font-semibold text-ink sm:text-5xl">{service.title} in deiner Region</h2></Reveal>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 0.08}>
                  <Link to={`/regionen/${r.slug}`} className="group flex h-full flex-col rounded-[2rem] border border-ink/5 bg-white/70 p-8 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_24px_60px_-30px_rgba(4,21,31,0.35)]">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-champagne/30 text-gold"><MapPin className="h-5 w-5" /></span>
                    <h3 className="mt-5 text-xl font-semibold text-ink">{r.region}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{r.eyebrow}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition group-hover:gap-3">Zur Region <ArrowRight className="h-4 w-4" /></span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Verwandte Dienstleistung */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal><Eyebrow>Weitere Behandlung</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <Link to={`/behandlungen/${service.relatedService}`} className="group mt-6 inline-flex items-center gap-3 text-2xl font-semibold text-ink transition hover:text-gold">
              {SERVICES.find((s) => s.slug === service.relatedService)?.title} entdecken <ArrowRight className="h-6 w-6 transition group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}