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
      { title: "Individuelle Hautanalyse", desc: "Vor jeder Behandlung analysiere ich deine Haut gründlich und leite die passende Pflegeroutine ab." },
      { title: "Massgeschneiderte Pflege", desc: "Jede Behandlung ziele ich auf deinen Hauttyp und dein aktuelles Hautbedürfnis ab." },
      { title: "Hochwertige Produkte", desc: "Sorgfältig ausgewählte Wirkstoffe, deren Ergebnisse ich regelmässig mit dir überprüfe." },
      { title: "Sanfte Technik", desc: "Schonende, entspannende Anwendungen ohne aggressive Methoden oder unnötige Belastung." },
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
      { q: "Wie erkenne ich meinen Hauttyp?", a: "Ein einfacher Test zu Hause gibt eine erste Einschätzung, die genaue Bestimmung erfolgt in der Hautanalyse zu Beginn der Behandlung. Ich betrachte Feuchtigkeit, Talgproduktion und Empfindlichkeit deiner Haut und erkläre dir, was sie braucht." },
      { q: "Was ist der Unterschied zwischen Kosmetikbehandlung und Dermatologie?", a: "Ich pflege und unterstütze gesunde Haut. Diagnosen und die Behandlung von Hauterkrankungen gehören in ärztliche Hände. Bei starker Akne, auffälligen Hautveränderungen oder anhaltenden Rötungen empfehle ich dir eine ärztliche Abklärung." },
      { q: "Wie bereite ich mich auf die Gesichtsbehandlung vor?", a: "Verzichte einige Tage vorher auf starke Peelings und intensive Sonne und teile mir Allergien oder Medikamente vorab mit. Nach der Behandlung solltest du Sonne, Sauna und neue aktive Produkte für einige Tage meiden." },
      { q: "Ist eine Gesichtsbehandlung bei unreiner oder empfindlicher Haut möglich?", a: "Ja, ich passe Produkte, Intensität und Schritte an. Bei entzündeter Haut arbeite ich behutsam, bei empfindlicher Haut verzichte ich auf reizende Anwendungen." },
    ],
    guides: [
      "hauttypen-erkennen-kosmetik",
      "pflegewirkstoffe-erklaert",
      "unreine-haut-ursachen-pflege",
      "anti-aging-hautalterung-vorbeugen",
      "empfindliche-haut-pflegen-roetungen",
      "vorbereitung-nachsorge-kosmetikbehandlung",
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
      "Jede Körperbehandlung wird individuell auf deine Hautbeschaffenheit und deine Wünsche abgestimmt. Ich arbeite mit moderner Gerätetechnologie und professioneller Sorgfalt, für gezielte Ergebnisse und ein rundum wohltuendes Körpergefühl.",
    advantages: [
      { title: "Apparative Technologie", desc: "Modernste Geräte wie EMSCULPT NEO, Liposana 3 und das Beckenbodentraining für messbare Ergebnisse." },
      { title: "Ruhe und Privatsphäre", desc: "Mein Studio bietet dir einen ruhigen Raum, in dem du ungestört entspannen kannst." },
      { title: "Individuelle Beratung", desc: "Gemeinsam finden wir die passende Behandlung für deine Figur- und Fitnessziele." },
      { title: "Gezielte Ergebnisse", desc: "Muskelaufbau, Fettreduktion, Körperformung und Beckenbodenstärkung nach wissenschaftlichen Standards." },
    ],
    ablauf: [
      { step: "Beratung", desc: "Wir besprechen deine Ziele und finden die passende apparative Behandlung für dich." },
      { step: "Vorbereitung", desc: "Ich erkläre die Technologie, markiere die Behandlungszonen und positioniere die Geräte." },
      { step: "Behandlung", desc: "EMSCULPT NEO, Liposana 3 oder Beckenbodentraining arbeiten gezielt an Muskeln, Fett und Konturen." },
      { step: "Nachsorge", desc: "Empfehlungen für optimale Ergebnisse und die Planung deiner nächsten Sitzung." },
    ],
    preisfaktoren: [
      "Art der Körperbehandlung (EMSCULPT NEO, Liposana 3, Beckenbodentraining)",
      "Dauer und Umfang der Behandlung",
      "Behandelte Körperbereiche",
    ],
    faqs: [
      { q: "Was beinhaltet eine Körperbehandlung?", a: "Je nach Wahl umfasst die Behandlung apparative Anwendungen wie EMSCULPT NEO für Muskelaufbau und Fettreduktion, Liposana 3 zur Körperformung oder das Beckenbodentraining. In der Beratung besprechen wir, welche Behandlung für deine Ziele am besten passt." },
      { q: "Wie lange dauert eine Körperbehandlung?", a: "Die Dauer variiert je nach Umfang zwischen 45 und 120 Minuten. Eine ausführliche Beratung im Voraus hilft, die passende Behandlung für deine Zeit zu finden." },
      { q: "Was sollte ich zur Behandlung mitbringen?", a: "Bequeme Kleidung reicht aus. Handtücher und alles Weitere für deine Behandlung stellt mein Studio für dich bereit." },
      { q: "Wie oft sollte ich eine Körperbehandlung machen?", a: "Für nachhaltige Ergebnisse empfehle ich alle drei bis vier Wochen einen Termin. So bleibt deine Haut gepflegt und das Wohlbefinden erhalten." },
      { q: "Wo befindet sich Charm Beauty in Winterthur?", a: "Das Studio liegt an der Ernst-Jung-Gasse 16a in 8400 Winterthur. Die zentrale Lage macht es einfach, einen Termin einzuplanen." },
      { q: "Wie kann ich trockene Körperhaut zwischen den Terminen pflegen?", a: "Dusche lauwarm, creme dich direkt nach dem Duschen ein und peele ein- bis zweimal pro Woche sanft. Im Winter lohnen sich reichhaltigere Lotionen als im Sommer." },
      { q: "Für wen ist eine Körperbehandlung geeignet?", a: "Für alle, die ihre Körperformung und Muskelstärkung gezielt unterstützen möchten. Die apparativen Behandlungen wie EMSCULPT NEO, Liposana 3 und das Beckenbodentraining eignen sich für Frauen und Männer mit unterschiedlichen Figur- und Fitnesszielen. Bei akuten Hauterkrankungen, offenen Stellen, Schwangerschaft oder gesundheitlichen Einschränkungen sprichst du bitte vorab mit mir und gegebenenfalls mit deiner Ärztin oder deinem Arzt." },
      { q: "Was sollte ich nach der Körperbehandlung beachten?", a: "Trinke ausreichend Wasser, verwende eine pflegende Bodylotion und vermeide am selben Tag sehr heisse Bäder. Weitere Tipps findest du im Ratgeber zur Nachsorge." },
    ],
    guides: [
      "koerperbehandlung-winterthur-entspannung",
      "vorbereitung-nachsorge-kosmetikbehandlung",
    ],
    relatedService: "gesicht",
    relatedRegions: ["koerperbehandlung-winterthur", "kosmetik-winterthur", "schoenheitsbehandlung-winterthur"],
  },
];

export const getService = (slug) => SERVICES.find((s) => s.slug === slug);