import React from "react";
import useSeo, { breadcrumbSchema } from "@/hooks/useSeo";
import { FAQS, SITE_URL } from "@/lib/site";
import { webPageSchema } from "@/lib/schema";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/site/TrustBar";
import Reels from "@/components/home/Reels";
import Welcome from "@/components/home/Welcome";

import Treatments from "@/components/home/Treatments";
import TreatmentMenu from "@/components/home/TreatmentMenu";
import FeaturedPricing from "@/components/home/FeaturedPricing";
import Stats from "@/components/home/Stats";
import AboutTeaser from "@/components/home/AboutTeaser";
import Certificate from "@/components/home/Certificate";
import GoogleReviewCta from "@/components/site/GoogleReviewCta";
import Faq from "@/components/home/Faq";
import ContactSection from "@/components/home/ContactSection";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function Home() {
  useSeo({
    title: "Charm Beauty Kosmetikstudio Winterthur | Gesichts- & Körperbehandlungen",
    description: "Moderne Körperstraffung, Body Contouring und apparative Schönheitsbehandlungen in Winterthur. Entdecke technologiebasierte Behandlungen für Körperformung, Muskelstimulation und individuelle Hautpflege bei Charm Beauty.",
    path: "/",
    schemas: [faqSchema, breadcrumbSchema([{ name: "Home", path: "/" }]), webPageSchema({ path: "/", about: { "@id": `${SITE_URL}/#business` } })],
  });
  return (
    <>
      <Hero />
      <TrustBar />
      <Reels />
      <Welcome />
      <AboutTeaser />
      <Certificate />
      <FeaturedPricing />
      <Treatments />
      <Stats />
      <GoogleReviewCta />
      <Faq />
      <ContactSection />
    </>
  );
}