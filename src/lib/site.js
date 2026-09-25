const cdn = (id, size = "xlg2x") => `https://onecdn.io/media/${id}/${size}`;

export const SITE_URL = "https://charm-beauty.ch";

export const IMAGES = {
  logo: cdn("50b25299-995e-429b-b25a-6b30f979aef6", "md2x"),
  favicon: "https://onecdn.io/cdn-cgi/image/width=144,height=144,fit=contain/media/22bf12d5-f04e-4b70-a257-242f5b484e12/sm",
  hero: cdn("ddaa1407-a166-42ea-9290-6c9173f7c725"),
  welcome: cdn("ac576eaf-6e91-4316-a5b1-2867f1c25c1a"),
  face: cdn("45b74b0f-f64b-4532-8a2e-8a62bf335adf"),
  body: cdn("06dda1fc-56b3-42a6-8287-3b3fad74f29c"),
  snezana: cdn("20f43885-fccb-4f3e-b661-2c9b34451a56"),
  gallery: [
    cdn("5f02470a-334c-4d50-977e-2ca07acd1e3b"),
    cdn("5cf74f9b-f876-435c-82df-8456c5179262"),
    cdn("73802c21-89bd-4c60-bec0-b496f5dbc0aa"),
    cdn("6f4a31d5-431a-4b0d-8d6d-78470f4aee30"),
    cdn("90c4471e-3a6e-4134-b7eb-6267102d6d74"),
    cdn("7d3a413e-4c24-4eac-9cdd-fdd56b55d33b"),
  ],
};

export const CONTACT = {
  owner: "Snezana Djuric",
  phone: "+41 78 896 46 55",
  phoneHref: "tel:+41788964655",
  whatsapp: "https://wa.me/41788964655",
  email: "info@charm-beauty.ch",
  street: "Ernst-Jung-Gasse 16a",
  city: "Winterthur",
  zip: "8400",
  maps: "https://www.google.com/maps/search/?api=1&query=Ernst-Jung-Gasse+16a+8400+Winterthur",
};

export const VIDEOS = {
  hero: "https://media.base44.com/videos/public/6ab62a2b7c4d0724c8fa8507/41e30fc67_Hero_Beauty_Studio.mp4",
  reels: [
    "https://media.base44.com/videos/public/6ab62a2b7c4d0724c8fa8507/173f93f6e_Reel_Facial_Treatment.mp4",
    "https://media.base44.com/videos/public/6ab62a2b7c4d0724c8fa8507/219956df1_Reel_Body_Treatment.mp4",
    "https://media.base44.com/videos/public/6ab62a2b7c4d0724c8fa8507/0a78b6016_Reel_Beauty_Products.mp4",
    "https://media.base44.com/videos/public/6ab62a2b7c4d0724c8fa8507/086ee5379_Reel_Studio_Atmosphere.mp4",
  ],
};

export const HOURS = [
  { day: "Montag", time: "9–12 Uhr & 14–19 Uhr" },
  { day: "Dienstag", time: "9–12 Uhr & 14–19 Uhr" },
  { day: "Mittwoch", time: "9–12 Uhr" },
  { day: "Donnerstag", time: "9–12 Uhr & 14–19 Uhr" },
  { day: "Freitag", time: "9–12 Uhr & 14–19 Uhr" },
  { day: "Samstag", time: "9–12 Uhr" },
];

export const WEBHOOK_URL =
  "https://app.meisterflow.ch/api/webhooks/enquiries/a902bb23d7e98901900e3750083b670344a14683633ae15f";

// Google-Suche nach dem Studio – Nutzer können dort direkt eine Bewertung hinterlassen
export const GOOGLE_REVIEW_LINK =
  "https://www.google.com/search?q=Charm+Beauty+Kosmetikstudio+Ernst-Jung-Gasse+16a,+8400+Winterthur,+Switzerland";

export const NAV = [
  { label: "Home", to: "/" },
  { label: "Behandlungen", to: "/behandlungen" },
  { label: "Über uns", to: "/uber-uns" },
  { label: "Kontakt", to: "/kontakt" },
];

export const TREATMENTS = [
  {
    key: "gesicht",
    title: "Gesicht",
    image: IMAGES.face,
    text: "Individuell abgestimmte Gesichtspflege, die Ihre Haut revitalisiert und strahlen lässt – für ein frisches, gesundes Aussehen.",
  },
  {
    key: "koerper",
    title: "Körper",
    image: IMAGES.body,
    text: "Massgeschneiderte Körperbehandlungen, die Ihre Haut straffen und revitalisieren – für ein gepflegtes, glattes Hautbild und ein rundum wohltuendes Körpergefühl.",
  },
];

export const FAQS = [
  {
    q: "Wie kann ich einen Termin bei Charm Beauty buchen?",
    a: "Am einfachsten per WhatsApp oder telefonisch unter +41 78 896 46 55. Alternativ senden Sie uns eine Anfrage über das Kontaktformular – wir melden uns zeitnah bei Ihnen.",
  },
  {
    q: "Wann hat das Kosmetikstudio geöffnet?",
    a: "Termine nach Vereinbarung: Montag, Dienstag, Donnerstag und Freitag 9–12 Uhr & 14–19 Uhr, Mittwoch und Samstag 9–12 Uhr.",
  },
  {
    q: "Wo befindet sich Charm Beauty?",
    a: "Das Studio befindet sich an der Ernst-Jung-Gasse 16a in 8400 Winterthur.",
  },
  {
    q: "Welche Zahlungsmöglichkeiten gibt es?",
    a: "Vor Ort können Sie bar oder mit Twint bezahlen.",
  },
  {
    q: "Welche Behandlungen bietet Charm Beauty an?",
    a: "Professionelle Behandlungen für Gesicht, Körper und Entspannung – jede Behandlung wird individuell auf Ihre Hautbedürfnisse abgestimmt.",
  },
];