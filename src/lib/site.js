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
  studio: [
    "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/cb694947a_ChatGPTImageOct1202601_07_33AM.png",
    "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/dc5ab16e6_ChatGPTImageOct1202601_13_51AM.png",
    "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/8eebdc256_ChatGPTImageOct1202601_12_17AM.png",
    "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/b039c7534_ChatGPTImageOct1202601_11_08AM.png",
    "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/f1ef4e6f2_ChatGPTImageOct1202601_09_36AM.png",
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
  hero: "https://media.base44.com/videos/public/6ab62a2b7c4d0724c8fa8507/8b68ab12d_Beauty_Hero_Video.mp4",
  reels: [
    "https://media.base44.com/videos/public/6ab62a2b7c4d0724c8fa8507/37c22c1fe_HD_video_1080_2.mp4",
    "https://media.base44.com/videos/public/6ab62a2b7c4d0724c8fa8507/ca148234f_HD_video_1080.mp4",
    "https://media.base44.com/videos/public/6ab62a2b7c4d0724c8fa8507/ee4729ec7_Instagram_Reel_HD_1080x19203.mp4",
    "https://media.base44.com/videos/public/6ab62a2b7c4d0724c8fa8507/7e6380ac3_HD_video_1080x1080.mp4",
  ],
};

export const HOURS = [
  { day: "Montag", time: "9 bis 12 Uhr & 14 bis 19 Uhr" },
  { day: "Dienstag", time: "9 bis 12 Uhr & 14 bis 19 Uhr" },
  { day: "Mittwoch", time: "9 bis 12 Uhr" },
  { day: "Donnerstag", time: "9 bis 12 Uhr & 14 bis 19 Uhr" },
  { day: "Freitag", time: "9 bis 12 Uhr & 14 bis 19 Uhr" },
  { day: "Samstag", time: "9 bis 12 Uhr" },
];

export const WEBHOOK_URL =
  "https://app.meisterflow.ch/api/webhooks/enquiries/a902bb23d7e98901900e3750083b670344a14683633ae15f";

// Reales Google Business Profil von Charm Beauty
export const GOOGLE_BUSINESS_URL =
  "https://www.google.com/maps/place/Charm+Beauty/@47.4908516,7.5376503,9.11z/data=!4m10!1m2!2m1!1scharm+beauty+switzerland!3m6!1s0x479a9956fd46e345:0xbe9e6186d6e5c640!8m2!3d47.4955438!4d8.7146245!15sChhjaGFybSBiZWF1dHkgc3dpdHplcmxhbmSSAQ9jb3NtZXRpY3Nfc3RvcmXgAQA!16s%2Fg%2F11v3vb2fp0";

// Google-Suche nach dem Studio – Nutzer können dort direkt eine Bewertung hinterlassen
export const GOOGLE_REVIEW_LINK = GOOGLE_BUSINESS_URL;

export const NAV = [
  { label: "Home", to: "/" },
  { label: "Behandlungen", to: "/behandlungen" },
  { label: "Blog", to: "/blog" },
  { label: "Über uns", to: "/uber-uns" },
  { label: "Kontakt", to: "/kontakt" },
];

export const TREATMENTS = [
  {
    key: "gesicht",
    title: "Gesicht",
    image: IMAGES.face,
    text: "Individuell abgestimmte Gesichtspflege, die deine Haut revitalisiert und strahlen lässt, für ein frisches, gesundes Aussehen.",
  },
  {
    key: "koerper",
    title: "Körper",
    image: IMAGES.body,
    text: "Massgeschneiderte Körperbehandlungen, die deine Haut straffen und revitalisieren, für ein gepflegtes, glattes Hautbild und ein rundum wohltuendes Körpergefühl.",
  },
];

export const FAQS = [
  {
    q: "Wie kann ich einen Termin bei Charm Beauty buchen?",
    a: "Am einfachsten per WhatsApp oder telefonisch unter +41 78 896 46 55. Alternativ schreib mir eine Anfrage über das Kontaktformular, ich melde mich zeitnah bei dir.",
  },
  {
    q: "Wann hat das Kosmetikstudio geöffnet?",
    a: "Termine nach Vereinbarung: Montag, Dienstag, Donnerstag und Freitag 9 bis 12 Uhr & 14 bis 19 Uhr, Mittwoch und Samstag 9 bis 12 Uhr.",
  },
  {
    q: "Wo befindet sich Charm Beauty?",
    a: "Das Studio befindet sich an der Ernst-Jung-Gasse 16a in 8400 Winterthur.",
  },
  {
    q: "Welche Zahlungsmöglichkeiten gibt es?",
    a: "Vor Ort kannst du bar oder mit Twint bezahlen.",
  },
  {
    q: "Welche Behandlungen bietet Charm Beauty an?",
    a: "Professionelle Behandlungen für Gesicht, Körper und Entspannung, jede Behandlung wird individuell auf deine Hautbedürfnisse abgestimmt.",
  },
];