const cdn = (id, size = "xlg2x") => `https://onecdn.io/media/${id}/${size}`;

export const SITE_URL = "https://charm-beauty.ch";

export const IMAGES = {
  logo: "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/b3f5422df_ChatGPTImageOct1202602_38_15AM.png",
  logoDark: "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/d7b6ca412_image.png",
  favicon: "https://onecdn.io/cdn-cgi/image/width=144,height=144,fit=contain/media/22bf12d5-f04e-4b70-a257-242f5b484e12/sm",
  hero: cdn("ddaa1407-a166-42ea-9290-6c9173f7c725"),
  welcome: cdn("ac576eaf-6e91-4316-a5b1-2867f1c25c1a"),
  face: cdn("45b74b0f-f64b-4532-8a2e-8a62bf335adf"),
  body: cdn("06dda1fc-56b3-42a6-8287-3b3fad74f29c"),
  snezana: cdn("20f43885-fccb-4f3e-b661-2c9b34451a56"),
  liposanaPromo: "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/acc67f92d_WhatsAppImage2026-10-02at2037001.jpeg",
  gallery: [
    cdn("5f02470a-334c-4d50-977e-2ca07acd1e3b"),
    cdn("5cf74f9b-f876-435c-82df-8456c5179262"),
    cdn("73802c21-89bd-4c60-bec0-b496f5dbc0aa"),
    cdn("6f4a31d5-431a-4b0d-8d6d-78470f4aee30"),
    "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/972bd9592_WhatsAppImage2026-10-02at203608.jpeg",
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
  "https://www.google.com/maps/place/Charm+Beauty/@47.4956399,8.7121241,17z/data=!4m15!1m8!3m7!1s0x479a9972129408db:0x5abdf36f6b6d95fe!2sErnst-Jung-Gasse+16a,+8400+Winterthur,+Switzerland!3b1!8m2!3d47.4956399!4d8.714699!16s%2Fg%2F11svpcj6wk!3m5!1s0x479a9956fd46e345:0xbe9e6186d6e5c640!8m2!3d47.4955438!4d8.7146245!16s%2Fg%2F11v3vb2fp0?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D";

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

export const TREATMENT_MENU = [
  {
    category: "Gesicht",
    items: [
      {
        name: "BIOPeeLX Premium Bio Algen",
        price: "CHF 139.–",
        image: "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/8a1ccdd58_generated_image.png",
        badge: "NEU",
        desc: "Sanfte Hauterneuerung mit Soforteffekt. Verbesserung des Hautbildes, Reduktion von Unreinheiten, Fältchen, Pigmentflecken und Förderung eines frischen, strahlenden Teints. Für alle Hauttypen geeignet, ganzjährig anwendbar.",
      },
      {
        name: "Hygienische Gesichtsreinigung",
        price: "CHF 105.–",
        image: "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/65faa77c0_generated_image.png",
        desc: "Diese Behandlung entfernt Unreinheiten und überschüssigen Talg, um die Haut zu klären und optimal für Pflegeprodukte vorzubereiten.",
      },
      {
        name: "Anti Aging Gesichtsbehandlung",
        price: "CHF 130.–",
        image: "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/a1535ae66_generated_image.png",
        desc: "Sanfte, nicht-invasive Methode für frische natürliche Haut. Collagen-Treads oder Botox-Pulver für natürliches Hautbild.",
      },
      {
        name: "Kosmetisches Microneedling / Nanoneedling",
        price: "CHF 130.–",
        image: "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/e82a007c4_generated_image.png",
        desc: "Feine Nadeln stimulieren die Haut und verbessern die Aufnahme von Wirkstoffen, was zu einem glatteren Hautbild und einem frischen Glow führt.",
      },
      {
        name: "Hydra Beauty",
        price: "CHF 150.–",
        image: "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/142e736b2_generated_image.png",
        desc: "Eine feuchtigkeitsspendende Behandlung, die die Haut intensiv hydratisiert und gleichzeitig Unreinheiten entfernt, für ein strahlendes Aussehen.",
      },
    ],
  },
  {
    category: "Körper",
    items: [
      {
        name: "EMSCULPT NEO – Zwei Griffe (2 Zonen)",
        price: "CHF 85.–",
        image: "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/e361c7ba4_CharmBeautySpaTreatment.png",
        desc: "Diese Behandlung strafft Muskeln in zwei Zonen und reduziert gleichzeitig Fett durch kombinierte elektromagnetische Energie und Wärme.",
      },
      {
        name: "EMSCULPT NEO – Vier Griffe (4 Zonen)",
        price: "CHF 95.–",
        image: "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/272e10821_WarmLuxuryBody-ContouringSpaTreatment.png",
        desc: "Mit dieser Behandlung werden vier Zonen gleichzeitig bearbeitet, um Muskeltraining und Fettabbau effizient zu kombinieren.",
      },
      {
        name: "Liposana 3 – Einzelbehandlung",
        price: "CHF 175.–",
        image: "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/51c81ffc5_Liposana3SpaTreatmentSetup2.png",
        badge: "NEU",
        desc: "Aktivierung deines Lymphflusses in Verbindung mit neuromuskulärer Stimulation und entzündungshemmendem Ultraschall. Bei Lipödemen, Reiterhose, Lymphproblemen, Cellulite, Gelenkschmerzen, Sodbrennen, Migräne, Schwangerschaftsstreifen, Harninkontinenz, Bandscheibenvorfällen, Aktivierung des Stoffwechsels, Endometriose uvm.",
      },
      {
        name: "Liposana 3 – Jahresabo (1x pro Monat)",
        price: "CHF 1 500.–",
        image: "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/eb6fae018_LuxurySpawithLiposana3Treatment.png",
        desc: "Regelmässige Anwendung für nachhaltige Ergebnisse – monatlich wiederholt.",
      },
      {
        name: "Beckenboden Training-Stuhl",
        price: "CHF 40.–",
        image: "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/ad17f70de_PelvicFloorTherapyVisualization.png",
        desc: "Verhindert und reduziert Harninkontinenz, lindert untere Rückenschmerzen, stärkt die Beckenbodenmuskulatur, unterstützt die Schwangerschaftsrückbildung, strafft das Gewebe am Po, weniger nächtlicher Harndrang, stärkt die Haltefunktion der inneren Organe, steigert die Libido.",
      },
      {
        name: "Beckenboden Training-Stuhl – Probetraining",
        price: "CHF 30.–",
        image: "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/0ca762532_RelaxedPelvicFloorWellnessTraining.png",
        desc: "Kennenlernen der Methode in einer Probestunde.",
      },
      {
        name: "Po-Lifting Vakuum",
        price: "CHF 49.–",
        image: "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/43972cab5_ModernSpaGluteLiftTreatment.png",
        desc: "Vakuum-Po-Lifting ist eine Methode, bei der mit Hilfe von Vakuum-Saugnäpfen ein Po-Lifting-Effekt erzielt wird. Die Saugnäpfe werden auf das Gesäss aufgesetzt und durch den Unterdruck wird das Gewebe angehoben.",
      },
      {
        name: "Maderotherapie",
        price: "CHF 100.–",
        image: "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/818efcee9_MaderotherapySpaSculptingTreatment.png",
        desc: "Eine spezielle Massagetechnik, bei der holzgefertigte Werkzeuge verwendet werden, um die Haut zu straffen und die Durchblutung zu fördern. Diese natürliche Behandlung hilft, das Erscheinungsbild von Cellulite zu reduzieren und die Hautstruktur zu verbessern.",
      },
    ],
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