import React from "react";
import useSeo, { breadcrumbSchema } from "@/hooks/useSeo";
import { FAQS } from "@/lib/site";
import Hero from "@/components/home/Hero";
import Reels from "@/components/home/Reels";
import Welcome from "@/components/home/Welcome";
import Gallery from "@/components/home/Gallery";
import Treatments from "@/components/home/Treatments";
import Stats from "@/components/home/Stats";
import AboutTeaser from "@/components/home/AboutTeaser";
import ReviewCta from "@/components/home/ReviewCta";
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
    description: "Dein Kosmetikstudio in Winterthur für individuelle Schönheitsbehandlungen und erstklassige Hautpflege. Entdecke Wohlbefinden und Entspannung in exklusiver Atmosphäre.",
    path: "/",
    schemas: [faqSchema, breadcrumbSchema([{ name: "Home", path: "/" }])],
  });
  return (
    <>
      <Hero />
      <Reels />
      <Welcome />
      <Gallery />
      <Treatments />
      <Stats />
      <AboutTeaser />
      <ReviewCta />
      <Faq />
      <ContactSection />
    </>
  );
}