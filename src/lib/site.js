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
        desc: "BIOPeelX Premium Bio Algen ist eine innovative Hautbehandlung mit natürlichen Mikronadeln aus Meeresschwämmen. Diese stimulieren die Haut und regen ihre natürlichen Erneuerungsprozesse an.",
        longDesc: [
          "Gezielte Hauterneuerung für ein verfeinertes, ebenmässiges und strahlendes Hautbild.",
          "BIOPeelX Premium unterstützt die natürlichen Regenerationsprozesse der Haut und kann dazu beitragen, Unreinheiten, Pigmentflecken und feine Linien sichtbar zu mildern. Gleichzeitig kann die Hautstruktur verbessert und das Erscheinungsbild vergrösserter Poren verfeinert werden.",
          "Bei Charm Beauty in Winterthur wird die Behandlung individuell auf deinen Hautzustand und deine Bedürfnisse abgestimmt. Eine persönliche Beratung und sorgfältige Durchführung stehen dabei im Mittelpunkt.",
        ],
      },
      {
        name: "Hygienische Gesichtsreinigung",
        price: "CHF 105.–",
        image: "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/65faa77c0_generated_image.png",
        desc: "Gründliche Tiefenreinigung für ein klares, gepflegtes und ebenmässiges Hautbild.",
        longDesc: [
          "Die hygienische Gesichtsreinigung konzentriert sich auf die intensive Reinigung der Haut und die gezielte Entfernung von Unreinheiten, Mitessern und überschüssigem Talg.",
          "Nach der Beurteilung des Hautzustands wird die Haut gründlich gereinigt und auf die Ausreinigung vorbereitet. Verstopfte Poren werden fachgerecht und besonders schonend von Talgablagerungen und Mitessern befreit. Dadurch kann das Hautbild sichtbar geklärt und das Erscheinungsbild der Poren verfeinert werden.",
          "Eine auf den Hauttyp abgestimmte Abschlusspflege unterstützt die Beruhigung der Haut und versorgt sie mit Feuchtigkeit. Ziel ist ein frisches, reines und ausgeglichenes Hautgefühl, ohne die natürliche Hautschutzbarriere unnötig zu belasten.",
          "Bei Charm Beauty in Winterthur wird die Behandlung individuell auf deinen Hautzustand und deine Bedürfnisse abgestimmt. Eine sorgfältige Durchführung und persönliche Beratung stehen dabei im Mittelpunkt.",
        ],
      },
      {
        name: "Anti Aging Gesichtsbehandlung",
        price: "CHF 130.–",
        image: "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/a1535ae66_generated_image.png",
        desc: "Gezielte Anti-Aging-Pflege zur Verbesserung der Hautstruktur und für ein glatteres, frischeres und jugendlich wirkendes Hautbild.",
        longDesc: [
          "Bei dieser Behandlung kommen je nach Hautbedürfnis Collagen-Threads oder Botox-Pulver zum Einsatz. Die kosmetischen Wirkstoffe sollen die Haut intensiv pflegen, mit Feuchtigkeit versorgen und das Erscheinungsbild feiner Linien und Fältchen mildern.",
          "Collagen-Threads werden eingesetzt, um die Haut geschmeidiger und optisch glatter erscheinen zu lassen. Botox-Pulver dient als kosmetische Alternative zur Pflege reifer Haut und kann einen vorübergehend glättenden Effekt unterstützen – ganz ohne Injektionen.",
          "Bei Charm Beauty in Winterthur wird die Behandlung individuell auf deinen Hautzustand und deine Wünsche abgestimmt. Eine persönliche Beratung und professionelle Sorgfalt stehen dabei im Mittelpunkt.",
        ],
      },
      {
        name: "Kosmetisches Microneedling / Nanoneedling",
        price: "CHF 130.–",
        image: "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/e82a007c4_generated_image.png",
        desc: "Gezielte Hautstimulation und intensive Wirkstoffpflege für ein sichtbar verfeinertes Hautbild.",
        longDesc: [
          "Beim kosmetischen Microneedling wird die Haut mit feinen Nadeln kontrolliert stimuliert. Dadurch werden natürliche Regenerationsprozesse und die Kollagenbildung angeregt. Die Behandlung kann dazu beitragen, feine Linien, vergrösserte Poren, leichte Narben und eine unregelmässige Hautstruktur optisch zu verbessern.",
          "Nanoneedling arbeitet besonders oberflächlich und unterstützt die Aufnahme ausgewählter Pflegewirkstoffe. Im Vordergrund stehen die Versorgung der Haut mit Feuchtigkeit, die Verbesserung der Hautoberfläche und ein frischer, strahlender Teint.",
          "Bei Charm Beauty in Winterthur wird die passende Behandlung individuell auf deinen Hautzustand und deine Bedürfnisse abgestimmt. Eine persönliche Beratung und professionelle Sorgfalt stehen dabei im Mittelpunkt.",
        ],
      },
      {
        name: "Hydra Beauty",
        price: "CHF 150.–",
        image: "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/142e736b2_generated_image.png",
        desc: "Intensive Feuchtigkeitspflege und gründliche Hautreinigung für ein frisches, geschmeidiges und strahlendes Hautbild.",
        longDesc: [
          "Hydra Beauty kombiniert eine tiefenwirksame Reinigung mit gezielter Feuchtigkeitsversorgung. Dabei werden abgestorbene Hautzellen, überschüssiger Talg und oberflächliche Unreinheiten schonend entfernt, während die Haut mit ausgewählten pflegenden Wirkstoffen versorgt wird.",
          "Die Behandlung kann dazu beitragen, das Erscheinungsbild der Poren zu verfeinern, Trockenheitsfältchen optisch zu mildern und die Hautstruktur ebenmässiger erscheinen zu lassen. Gleichzeitig wird die Haut intensiv mit Feuchtigkeit versorgt, wodurch sie praller, glatter und erfrischt wirken kann.",
          "Bei Charm Beauty in Winterthur wird die Behandlung individuell auf deinen Hautzustand und deine Bedürfnisse abgestimmt. Eine persönliche Beratung und professionelle Sorgfalt stehen dabei im Mittelpunkt.",
        ],
      },
    ],
  },
  {
    category: "Körper",
    items: [
      {
        name: "EMS Sculpt – Muskelstraffung 2 Zonen",
        price: "CHF 85.–",
        image: "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/ad7597fc1_Dual-thighlasertreatmentsetup.png",
        desc: "Gezielte Muskelstimulation zur Unterstützung des Muskelaufbaus, der Muskelstraffung und einer definierten Körpersilhouette.",
        longDesc: [
          "Gezielte Muskelstimulation zur Unterstützung des Muskelaufbaus, der Muskelstraffung und einer definierten Körpersilhouette.",
          "Bei der EMS Sculpt Behandlung mit zwei Applikatoren werden ausgewählte Muskelbereiche durch elektromagnetische Impulse intensiv stimuliert – ganz ohne körperliche Anstrengung.",
          "Bei Charm Beauty in Winterthur führe ich die Behandlung mit fundiertem Fachwissen und professioneller Sorgfalt durch. Deine Bedürfnisse stehen im Mittelpunkt – ich berate dich ehrlich und individuell.",
        ],
      },
      {
        name: "EMS Sculpt – Muskelstraffung 4 Zonen",
        price: "CHF 95.–",
        image: "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/3d61942a4_CharmLaserFour-ApplicatorTreatment.png",
        desc: "Intensive Muskelstimulation zur Unterstützung des Muskelaufbaus, der Muskelstraffung und einer definierten Körpersilhouette.",
        longDesc: [
          "Intensive Muskelstimulation für mehrere Körperbereiche.",
          "EMS Sculpt nutzt elektromagnetische Impulse, um die Muskulatur gezielt zu stimulieren und den Muskelaufbau sowie eine definiertere Körpersilhouette zu unterstützen.",
          "Mit vier Applikatoren lassen sich mehrere Muskelbereiche gleichzeitig behandeln. Dadurch eignet sich diese Variante besonders für eine umfassendere Muskelstimulation.",
          "Bei Charm Beauty in Winterthur wird die Behandlung individuell auf deine Bedürfnisse abgestimmt und mit professioneller Sorgfalt durchgeführt.",
        ],
      },
      {
        name: "Liposana 3",
        price: "CHF 175.–",
        image: "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/b53a9b0de_LuxurySpawithLiposana3Treatment.png",
        badge: "NEU",
        desc: "Unterstützung der Körperformung, Verbesserung des Hautbildes und Reduzierung sichtbarer Cellulite.",
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
        image: "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/af622df1f_FuturisticPelvicFloorTrainingVisualization.png",
        desc: "Kennenlernen der Methode in einer Probestunde.",
      },
      {
        name: "Po-Lifting Vakuum",
        price: "CHF 49.–",
        image: "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/b562d8e39_SalonVacuumCupPreparation.png",
        desc: "Sanfte Körperformung für ein optisch volleres und definierteres Gesäss.",
        longDesc: [
          "Sanfte Körperformung für ein optisch volleres und definierteres Gesäss.",
          "Das Po-Lifting mit Vakuum ist eine nicht-invasive Behandlung, bei der das Gewebe mithilfe von gezieltem Unterdruck stimuliert wird. Dadurch wird die lokale Durchblutung angeregt und der Po kann vorübergehend praller, glatter und optisch angehobener wirken.",
          "Die Behandlung kommt ohne chirurgischen Eingriff aus und richtet sich an alle, die das Erscheinungsbild ihres Gesässes auf sanfte Weise verbessern möchten.",
          "Bei Charm Beauty in Winterthur wird die Behandlung individuell auf deine Wünsche abgestimmt. Eine persönliche Beratung und professionelle Sorgfalt stehen dabei im Mittelpunkt.",
        ],
      },
      {
        name: "Maderotherapie",
        price: "CHF 100.–",
        image: "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/7d6be5d16_WoodenMassageRollerPreparationinaWarmSalon.png",
        desc: "Gezielte Gewebestimulation für ein glatteres Hautbild und ein angenehmes Körpergefühl.",
        longDesc: [
          "Bei der Maderotherapie werden speziell geformte Holzinstrumente mit rhythmischen Massagebewegungen über die Haut geführt. Dadurch wird die lokale Durchblutung angeregt und das Gewebe intensiv stimuliert.",
          "Die Behandlung eignet sich besonders für Körperbereiche wie Bauch, Beine und Po. Sie kann dazu beitragen, das Erscheinungsbild von Cellulite vorübergehend zu mildern und die Hautstruktur optisch zu verbessern.",
          "Bei Charm Beauty in Winterthur wird die Maderotherapie individuell auf deine Bedürfnisse und gewünschten Körperbereiche abgestimmt. Eine persönliche Beratung und professionelle Sorgfalt stehen dabei im Mittelpunkt.",
        ],
      },
    ],
  },
];

export const FAQS = [
  {
    q: "Wie kann ich einen Termin bei Charm Beauty buchen?",
    a: "Buche deinen Termin ganz unkompliziert per WhatsApp oder ruf mich direkt an unter +41 78 896 46 55. Ich bestätige deinen Wunschtermin schnellstmöglich und persönlich.",
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
    a: "Individuell abgestimmte Gesichts- und Körperbehandlungen mit moderner Gerätetechnologie – für Hautpflege, Straffung und Körperformung.",
  },
];