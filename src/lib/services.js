import { IMAGES } from "@/lib/site";

// Eigenständige Dienstleistungen mit eigener Suchintention.
// Nur Angebote mit eigener Landingpage (Phase 5 des Masterprompts), hier: Gesicht & Körper.
export const SERVICES = [
  {
    slug: "gesicht",
    key: "gesicht",
    title: "Gesichtsbehandlung",
    short: "Gesicht",
    image: IMAGES.face,
    eyebrow: "Gesichtspflege",
    metaTitle: "Gesichtsbehandlung Winterthur | Charm Beauty Kosmetikstudio",
    metaDescription:
      "Professionelle Gesichtsbehandlung in Winterthur, individuell auf deinen Hauttyp abgestimmt. Sanfte Pflege für frische, strahlende Haut. Termin bei Charm Beauty buchen.",
    h1: "Gesichtsbehandlung in Winterthur für strahlende Haut",
    intro:
      "Deine Haut verdient Aufmerksamkeit. Bei Charm Beauty in Winterthur erhältst du eine Gesichtsbehandlung, die genau auf deinen Hauttyp abgestimmt ist. Ob Tiefenreinigung, Feuchtigkeit oder Anti-Aging, ich finde die richtige Pflege für ein frisches, gesundes Hautbild.",
    description:
      "Jede Gesichtsbehandlung beginnt mit einer gründlichen Hautanalyse. Danach wähle ich hochwertige Produkte und sanfte Techniken, die zu deiner Haut passen. Kein Standard-Programm, kein Verkaufsdruck, nur ehrliche, individuelle Pflege in entspannter Atmosphäre.",
    advantages: [
      { title: "Individuelle Hautanalyse", desc: "Vor jeder Behandlung analysiere ich deine Haut und wähle die passenden Produkte." },
      { title: "Massgeschneiderte Pflege", desc: "Kein Standard-Programm, jede Behandlung wird auf deinen Hauttyp zugeschnitten." },
      { title: "Hochwertige Produkte", desc: "Sorgfältig ausgewählte Pflegeprodukte, deren Wirkung ich regelmässig überprüfe." },
      { title: "Sanfte Technik", desc: "Schonend und entspannend, keine aggressiven Methoden, keine unnötige Belastung." },
    ],
    ablauf: [
      { step: "Hautanalyse", desc: "Gemeinsam besprechen wir deine Wünsche und analysieren deinen Hauttyp." },
      { step: "Reinigung", desc: "Gründliche Tiefenreinigung, die Poren öffnet und Unreinheiten reduziert." },
      { step: "Pflege", desc: "Auf deinen Hauttyp abgestimmte Wirkstoffe und Feuchtigkeit." },
      { step: "Abschluss", desc: "Pflegetipps für zu Hause und Empfehlungen für die Zeit zwischen den Terminen." },
    ],
    preisfaktoren: [
      "Art der Gesichtsbehandlung (Tiefenreinigung, Feuchtigkeit, Anti-Aging)",
      "Dauer und Umfang der Behandlung",
      "Verwendete Pflegeprodukte",
    ],
    faqs: [
      { q: "Wie oft sollte ich eine Gesichtsbehandlung machen?", a: "Für optimale Ergebnisse empfehle ich eine Gesichtsbehandlung alle vier bis sechs Wochen. So bleibt deine Haut gepflegt und Unreinheiten haben keine Chance." },
      { q: "Welche Hauttypen behandelst du?", a: "Ich behandle alle Hauttypen, von trocken über empfindlich bis zu fettiger Haut. Vor der Behandlung analysiere ich deine Haut und passe die Produkte entsprechend an." },
      { q: "Gibt es nach der Behandlung Rötungen?", a: "Leichte Rötungen können kurzzeitig auftreten, verschwinden aber meist innerhalb weniger Stunden. Ich informiere dich vorab über mögliche Reaktionen." },
      { q: "Wie lange dauert eine Gesichtsbehandlung?", a: "Je nach Umfang dauert eine Gesichtsbehandlung zwischen 60 und 90 Minuten. In dieser Zeit kannst du komplett entspannen und die Pflege geniessen." },
      { q: "Was kostet eine Gesichtsbehandlung in Winterthur?", a: "Der Preis hängt von der gewählten Behandlung und deinem Hautbedürfnis ab. Kontaktiere mich für eine individuelle Offerte, ich berate dich gerne." },
    ],
    relatedService: "koerper",
    relatedRegions: ["gesichtsbehandlung-winterthur", "gesichtsbehandlung-zuerich", "hautpflege-winterthur"],
  },
  {
    slug: "koerper",
    key: "koerper",
    title: "Körperbehandlung",
    short: "Körper",
    image: IMAGES.body,
    eyebrow: "Körperpflege",
    metaTitle: "Körperbehandlung Winterthur | Charm Beauty Kosmetikstudio",
    metaDescription:
      "Körperbehandlung in Winterthur für straffe Haut und tiefenentspanntes Wohlbefinden. Massgeschneiderte Pflege von Snezana. Jetzt Termin bei Charm Beauty buchen.",
    h1: "Körperbehandlung in Winterthur für Wohlbefinden",
    intro:
      "Dein Körper trägt dich durch den Alltag, jetzt ist Zeit, etwas zurückzugeben. Bei Charm Beauty in Winterthur biete ich Körperbehandlungen, die deine Haut straffen, pflegen und revitalisieren. Entspanne in meiner Oase und spüre die Wohltat professioneller Pflege.",
    description:
      "Jede Körperbehandlung wird individuell auf deine Hautbeschaffenheit und deine Wünsche abgestimmt. Ich arbeite mit hochwertigen Produkten und sorgfältiger Handarbeit, für ein gepflegtes Hautbild und ein rundum wohltuendes Körpergefühl.",
    advantages: [
      { title: "Ganzheitlicher Ansatz", desc: "Ich behandle nicht nur die Haut, sondern sorge für ein rundum gutes Körpergefühl." },
      { title: "Ruhe und Privatsphäre", desc: "Mein Studio bietet dir einen ruhigen Raum, in dem du ungestört entspannen kannst." },
      { title: "Hochwertige Produkte", desc: "Sorgfältig ausgewählte Pflegeprodukte, die deine Haut nähren und nachhaltig pflegen." },
      { title: "Individuelle Abstimmung", desc: "Jede Körperbehandlung passe ich an deine Hautbeschaffenheit und deine Wünsche an." },
    ],
    ablauf: [
      { step: "Beratung", desc: "Wir besprechen deine Wünsche und deine Hautbeschaffenheit." },
      { step: "Vorbereitung", desc: "Sanftes Peeling entfernt abgestorbene Hautschüppchen und fördert die Zellerneuerung." },
      { step: "Behandlung", desc: "Pflegende Anwendungen und wohltuende Massage für Haut und Körper." },
      { step: "Nachsorge", desc: "Empfehlungen für die Pflege zu Hause und den nächsten Termin." },
    ],
    preisfaktoren: [
      "Art der Körperbehandlung (Peeling, Massage, hautstraffende Pflege)",
      "Dauer und Umfang der Behandlung",
      "Behandelte Körperbereiche",
    ],
    faqs: [
      { q: "Was beinhaltet eine Körperbehandlung?", a: "Je nach Wahl umfasst die Behandlung Peeling, Massage und pflegende Anwendungen. In der Beratung besprechen wir, was für deine Hautbedürfnisse am besten passt." },
      { q: "Wie lange dauert eine Körperbehandlung?", a: "Die Dauer variiert je nach Umfang zwischen 45 und 120 Minuten. Eine ausführliche Beratung im Voraus hilft, die passende Behandlung für deine Zeit zu finden." },
      { q: "Was sollte ich zur Behandlung mitbringen?", a: "Bequeme Kleidung reicht aus. Alles weitere, von Handtüchern bis zu Pflegeprodukten, stellt mein Studio für dich bereit." },
      { q: "Wie oft sollte ich eine Körperbehandlung machen?", a: "Für nachhaltige Ergebnisse empfehle ich alle drei bis vier Wochen einen Termin. So bleibt deine Haut gepflegt und das Wohlbefinden erhalten." },
      { q: "Wo befindet sich Charm Beauty in Winterthur?", a: "Das Studio liegt an der Ernst-Jung-Gasse 16a in 8400 Winterthur. Die zentrale Lage macht es einfach, einen Termin einzuplanen." },
    ],
    relatedService: "gesicht",
    relatedRegions: ["koerperbehandlung-winterthur", "kosmetik-winterthur", "schoenheitsbehandlung-winterthur"],
  },
];

export const getService = (slug) => SERVICES.find((s) => s.slug === slug);