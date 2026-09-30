// Entity SEO schema builders — single source of truth for structured data.
// All data is REAL (from site.js / services.js / Impressum). Nothing is invented.
// Missing social profiles are noted, not fabricated.

import { CONTACT, SITE_URL, IMAGES, HOURS, GOOGLE_BUSINESS_URL } from "@/lib/site";
import { SERVICES } from "@/lib/services";

// === Real constants ===

// Geo coordinates from OpenStreetMap Nominatim for Ernst-Jung-Gasse 16a, 8400 Winterthur
export const GEO = { latitude: "47.4956700", longitude: "8.7146636" };

// All real service areas — derived from landing pages
export const SERVICE_AREAS = ["Winterthur", "Zürich", "Frauenfeld", "Schaffhausen", "St. Gallen"];

// Real UID from Impressum
export const UID_NUMBER = "CHE-182.339.391";

// Re-export for backward compatibility (site.js is the canonical source)
export { GOOGLE_BUSINESS_URL };

// === Helpers ===

const DAY_MAP = {
  Montag: "Monday",
  Dienstag: "Tuesday",
  Mittwoch: "Wednesday",
  Donnerstag: "Thursday",
  Freitag: "Friday",
  Samstag: "Saturday",
  Sonntag: "Sunday",
};

// Parse "9 bis 12 Uhr & 14 bis 19 Uhr" into time slots
function parseHours(timeStr) {
  const slots = [];
  const parts = timeStr.split("&").map((p) => p.trim());
  for (const part of parts) {
    const match = part.match(/(\d+)\s*bis\s*(\d+)\s*Uhr/);
    if (match) {
      const open = parseInt(match[1], 10);
      const close = parseInt(match[2], 10);
      slots.push({
        opens: `${String(open).padStart(2, "0")}:00`,
        closes: `${String(close).padStart(2, "0")}:00`,
      });
    }
  }
  return slots;
}

// === Building blocks ===

// OpeningHoursSpecification from real HOURS data in site.js
export const openingHoursSpecification = (() => {
  const daySlots = {};
  for (const h of HOURS) {
    const day = DAY_MAP[h.day];
    if (!day) continue;
    const slots = parseHours(h.time);
    for (const slot of slots) {
      const key = `${slot.opens}-${slot.closes}`;
      if (!daySlots[key]) daySlots[key] = [];
      daySlots[key].push(day);
    }
  }
  return Object.entries(daySlots).map(([key, days]) => {
    const [opens, closes] = key.split("-");
    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: days,
      opens,
      closes,
    };
  });
})();

// PostalAddress — real address data
export const postalAddressSchema = {
  "@type": "PostalAddress",
  streetAddress: CONTACT.street,
  addressLocality: CONTACT.city,
  postalCode: CONTACT.zip,
  addressCountry: "CH",
};

// ImageObject builder
export const imageObjectSchema = (url, caption) => ({
  "@type": "ImageObject",
  url,
  ...(caption ? { caption } : {}),
});

// Logo as ImageObject
export const logoObjectSchema = {
  "@type": "ImageObject",
  url: IMAGES.logo,
};

// ContactPoint — real contact data with WhatsApp
export const contactPointSchema = {
  "@type": "ContactPoint",
  contactType: "reservations",
  telephone: CONTACT.phone,
  email: CONTACT.email,
  url: CONTACT.whatsapp,
  areaServed: "CH",
  availableLanguage: ["German"],
};

// Real offer catalog from services with dedicated landing pages
export const offerCatalogSchema = {
  "@type": "OfferCatalog",
  "@id": `${SITE_URL}/#offer-catalog`,
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

// === Entity schemas (auto-included on every page via useSeo) ===

// Organization schema — real company data from Impressum
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Charm Beauty",
  url: SITE_URL,
  logo: IMAGES.logo,
  image: IMAGES.welcome,
  email: CONTACT.email,
  telephone: CONTACT.phone,
  address: postalAddressSchema,
  founder: {
    "@type": "Person",
    name: CONTACT.owner,
    jobTitle: "Kosmetikerin",
  },
  sameAs: [GOOGLE_BUSINESS_URL],
  taxID: UID_NUMBER,
};

// LocalBusiness (BeautySalon) schema — complete real data
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "@id": `${SITE_URL}/#business`,
  name: "Charm Beauty Kosmetikstudio",
  description:
    "Dein Kosmetikstudio in Winterthur für individuelle Schönheitsbehandlungen und erstklassige Hautpflege. Entdecke Wohlbefinden und Entspannung in exklusiver Atmosphäre.",
  url: SITE_URL,
  image: IMAGES.welcome,
  logo: IMAGES.logo,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: postalAddressSchema,
  geo: { "@type": "GeoCoordinates", latitude: GEO.latitude, longitude: GEO.longitude },
  openingHoursSpecification,
  contactPoint: contactPointSchema,
  sameAs: [GOOGLE_BUSINESS_URL],
  areaServed: SERVICE_AREAS.map((city) => ({ "@type": "City", name: city })),
  hasMap: CONTACT.maps,
  hasOfferCatalog: offerCatalogSchema,
  founder: {
    "@type": "Person",
    name: CONTACT.owner,
    jobTitle: "Kosmetikerin",
  },
  taxID: UID_NUMBER,
};

// WebSite schema — site-wide entity
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Charm Beauty Kosmetikstudio Winterthur",
  inLanguage: "de-CH",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

// === Page-specific schema builders ===

// Generic WebPage schema builder (also supports ContactPage, AboutPage subtypes)
export const webPageSchema = ({ path, name, description, type = "WebPage", about }) => ({
  "@context": "https://schema.org",
  "@type": type,
  "@id": `${SITE_URL}${path}#webpage`,
  url: `${SITE_URL}${path}`,
  inLanguage: "de-CH",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  ...(name ? { name } : {}),
  ...(description ? { description } : {}),
  ...(about ? { about } : {}),
});

// Service schema builder for treatment detail pages
export const serviceSchemaBuilder = (service, slug) => service ? ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/behandlungen/${slug}#service`,
  name: service.title,
  serviceType: service.title,
  description: service.metaDescription,
  image: service.image,
  url: `${SITE_URL}/behandlungen/${slug}`,
  provider: { "@id": `${SITE_URL}/#business` },
  areaServed: { "@type": "City", name: "Winterthur" },
}) : null;

// BlogPosting object (without @context — for nesting inside Blog schema)
export const blogPostingObject = (post) => ({
  "@type": "BlogPosting",
  headline: post.title,
  description: post.metaDescription,
  image: post.image,
  datePublished: post.date,
  dateModified: post.date,
  author: { "@type": "Person", name: post.author, url: `${SITE_URL}/uber-uns` },
  url: `${SITE_URL}/blog/${post.slug}`,
});

// BlogPosting schema builder for blog post pages (standalone with @context)
export const blogPostingSchemaBuilder = (post) => ({
  "@context": "https://schema.org",
  ...blogPostingObject(post),
  publisher: { "@id": `${SITE_URL}/#organization` },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/blog/${post.slug}`,
  },
  inLanguage: "de-CH",
});

// === Person schema (enhanced) ===

export const personSchema = ({ url } = {}) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person-snezana`,
  name: CONTACT.owner,
  jobTitle: "Kosmetikerin",
  image: IMAGES.snezana,
  url: url ? `${SITE_URL}${url}` : SITE_URL,
  worksFor: { "@id": `${SITE_URL}/#organization` },
  knowsAbout: [
    "Kosmetik",
    "Gesichtspflege",
    "Körperpflege",
    "Hautpflege",
    "Schönheitsbehandlungen",
  ],
  address: postalAddressSchema,
  sameAs: [GOOGLE_BUSINESS_URL],
});

// === Legacy compat ===

// contactBusinessSchema is now superseded by localBusinessSchema (auto-included via useSeo).
// Kept as alias for backward compatibility.
export const contactBusinessSchema = localBusinessSchema;