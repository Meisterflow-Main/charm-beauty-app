import { TREATMENT_MENU } from "@/lib/site";

const slugify = (name) =>
  name
    .toLowerCase()
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const ALL_TREATMENTS = TREATMENT_MENU.flatMap((cat) =>
  cat.items.map((item) => ({
    slug: slugify(item.name),
    name: item.name,
    price: item.price,
    desc: item.desc,
    badge: item.badge,
    category: cat.category,
  }))
);

export const getTreatment = (slug) => ALL_TREATMENTS.find((t) => t.slug === slug);

export const getRelatedTreatments = (slug, category) =>
  ALL_TREATMENTS.filter((t) => t.slug !== slug && t.category === category).slice(0, 3);