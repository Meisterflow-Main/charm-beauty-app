import React from "react";
import { useParams, Navigate } from "react-router-dom";
import useSeo, { breadcrumbSchema } from "@/hooks/useSeo";
import { getLandingPage } from "@/lib/landingPages";
import { IMAGES, SITE_URL } from "@/lib/site";
import LandingHero from "@/components/landing/LandingHero";
import LandingContact from "@/components/landing/LandingContact";
import LandingServices from "@/components/landing/LandingServices";
import WhyUs from "@/components/landing/WhyUs";
import TreatmentAdvisor from "@/components/landing/TreatmentAdvisor";
import LandingReviews from "@/components/landing/LandingReviews";
import LandingFaq from "@/components/landing/LandingFaq";
import AdditionalServices from "@/components/landing/AdditionalServices";
import ServiceArea from "@/components/landing/ServiceArea";
import FinalCta from "@/components/landing/FinalCta";

export default function LandingPage() {
  const { slug } = useParams();
  const page = getLandingPage(slug);

  useSeo({
    title: page?.metaTitle || "Charm Beauty Kosmetikstudio",
    description: page?.metaDescription || "",
    path: `/regionen/${slug}`,
    image: IMAGES.hero,
    schemas: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Regionen", path: "/regionen" },
        { name: page?.region || "Region", path: `/regionen/${slug}` },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: (page?.faqs || []).map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
      page ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: page.metaTitle || page.h1,
        serviceType: page.region,
        description: page.metaDescription,
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: { "@type": "City", name: page.region },
        url: `${SITE_URL}/regionen/${slug}`,
      } : null,
    ],
  });

  if (!page) return <Navigate to="/regionen" replace />;

  return (
    <>
      <LandingHero page={page} />
      <LandingContact />
      <LandingServices services={page.services} />
      <WhyUs whyUs={page.whyUs} />
      <TreatmentAdvisor />
      <LandingReviews />
      <LandingFaq faqs={page.faqs} />
      <AdditionalServices />
      <ServiceArea areas={page.serviceArea} region={page.region} />
      <FinalCta cta={page.cta} />
    </>
  );
}