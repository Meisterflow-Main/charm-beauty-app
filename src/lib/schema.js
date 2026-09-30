// Entity SEO schema builders — single source of truth for structured data.
// All data is REAL (from site.js / services.js). Nothing is invented.
// Missing social profiles are noted, not fabricated.

import { CONTACT, SITE_URL, IMAGES } from "@/lib/site";
import { SERVICES } from "@/lib/services";

// Geo coordinates from OpenStreetMap Nominatim for Ernst-Jung-Gasse 16a, 8400 Winterthur
export const GEO = { latitude: "47.4956700", longitude: "8.7146636" };

// All real service areas — derived from landing pages
export const SERVICE_AREAS = ["Winterthur", "Zürich", "Frauenfeld", "Schaffhausen", "St. Gallen"];

// Real offer catalog from services with dedicated landing pages
export const offerCatalogSchema = {
  "@type": "OfferCatalog",
  name: "Schönheitsbehandlungen Charm Beauty Winterthur",
  itemListElement: SERVICES.map((s) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: s.title,
      description: s.metaDescription,
      url: `${SITE_URL}/behandlungen/${s.slug}`,
      provider: { "@id": `${SITE_URL}/#business` },
    },
  })),
};

// Google Business Profile URL — real sameAs reference for entity linking
export const GOOGLE_BUSINESS_URL =
  "https://www.google.com/maps/place/Charm+Beauty/@47.4908516,7.5376503,9.11z/data=!4m10!1m2!2m1!1scharm+beauty+switzerland!3m6!1s0x479a9956fd46e345:0xbe9e6186d6e5c640!8m2!3d47.4955438!4d8.7146245";

// ContactPoint — real contact data
export const contactPointSchema = {
  "@type": "ContactPoint",
  contactType: "reservations",
  telephone: CONTACT.phone,
  email: CONTACT.email,
  areaServed: "CH",
  availableLanguage: ["German"],
};

// Person schema for Snezana Djuric — real data only
export const personSchema = ({ url } = {}) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: CONTACT.owner,
  jobTitle: "Kosmetikerin",
  image: IMAGES.snezana,
  url: url ? `${SITE_URL}${url}` : SITE_URL,
  worksFor: { "@id": `${SITE_URL}/#business` },
  knowsAbout: [
    "Kosmetik",
    "Gesichtspflege",
    "Körperpflege",
    "Hautpflege",
    "Schönheitsbehandlungen",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.street,
    addressLocality: CONTACT.city,
    postalCode: CONTACT.zip,
    addressCountry: "CH",
  },
});

// LocalBusiness reference with contactPoint — for contact page
export const contactBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "@id": `${SITE_URL}/#business`,
  name: "Charm Beauty Kosmetikstudio",
  telephone: CONTACT.phone,
  email: CONTACT.email,
  url: SITE_URL,
  contactPoint: contactPointSchema,
  sameAs: [GOOGLE_BUSINESS_URL],
};