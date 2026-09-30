import { IMAGES } from "@/lib/site";

export const BLOG_CATEGORIES = [
  "Ratgeber",
  "Tipps",
  "Anleitungen",
  "Lokale Themen",
  "Unternehmen",
  "Dienstleistungen",
  "Google Bewertungen",
  "FAQ",
];

const MONTHS_DE = [
  "Januar", "Februar", "März", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Dezember",
];

export const formatDate = (iso) => {
  const d = new Date(iso);
  return `${d.getDate()}. ${MONTHS_DE[d.getMonth()]} ${d.getFullYear()}`;
};

export const BLOG_POSTS = [
  {
    slug: "gesichtspflege-tipps-alltag",
    title: "Richtige Gesichtspflege im Alltag: 7 Tipps für gesunde Haut",
    metaTitle: "Gesichtspflege Tipps für den Alltag | Charm Beauty Blog Winterthur",
    metaDescription:
      "Sieben erprobte Tipps für eine wirksame Gesichtspflege im Alltag – von Reinigung über Feuchtigkeit bis Sonnenschutz. Praxiswissen vom Kosmetikstudio Charm Beauty in Winterthur.",
    category: "Tipps",
    excerpt:
      "Pflegeprodukte allein reichen nicht – erst die richtige Routine macht den Unterschied. Diese sieben erprobten Tipps helfen dir, deine Gesichtspflege im Alltag strukturiert aufzubauen und langfristig zu einer gesünder aussehenden Haut zu gelangen – ohne unnötigen Aufwand.",
    image: IMAGES.face,
    date: "2026-09-15",
    author: "Snezana Djuric",
    readTime: 6,
    tags: ["Gesichtspflege", "Hauttyp", "Pflegeroutine"],
    popular: true,
    sections: [
      {
        heading: "Warum die richtige Routine entscheidend ist",
        paragraphs: [
          "Eine gute Gesichtspflege ist kein Zufallsprodukt, sondern das Ergebnis einer konsequenten Routine. Wer täglich die gleichen, auf den eigenen Hauttyp abgestimmten Schritte ausführt, gibt der Haut die nötige Stabilität, um sich zu regenerieren und widerstandsfähig zu bleiben.",
          "Im Kosmetikstudio sehe ich immer wieder, dass nicht fehlende Produkte, sondern fehlende Struktur das grösste Problem ist. Diese sieben Tipps helfen dir, Ordnung in deine Pflege zu bringen.",
        ],
      },
      {
        heading: "Tipp 1: Reinigung – aber richtig",
        paragraphs: [
          "Die Reinigung am Abend ist nicht verhandelbar. Tagsüber sammeln sich Schmutz, Talg und Rückstände von Pflegeprodukten auf der Haut, die über Nacht eingearbeitet werden, wenn sie nicht entfernt werden.",
        ],
        list: [
          "Reinigungsmilch oder sanftes Gel statt aggressiver Schaumstoffe",
          "Lauwarmes Wasser – heisses Wasser trocknet die Haut aus",
          "Morgens reicht oft klares Wasser oder eine sehr milde Reinigung",
        ],
      },
      {
        heading: "Tipp 2: Feuchtigkeit gezielt spenden",
        paragraphs: [
          "Feuchtigkeitscreme ist nicht gleich Feuchtigkeitscreme. Eine leichte Lotion reicht für Mischhaut, trockene Haut braucht reichere Texturen. Trage die Pflege auf die noch leicht feuchte Haut auf, so bindet sie die Feuchtigkeit besser.",
        ],
      },
      {
        heading: "Tipp 3: Sonnenschutz – jeden Tag",
        paragraphs: [
          "UV-Strahlung ist die häufigste Ursache für vorzeitige Hautalterung. Ein Lichtschutzfaktor 30 bis 50 gehört daher auch an bewölkten Tagen und im Winter in jede Morgenroutine. Das ist der wirksamste Anti-Aging-Schritt überhaupt.",
        ],
      },
      {
        heading: "Tipp 4 bis 7: Kontinuität, Geduld, Anpassung, Beratung",
        paragraphs: [
          "Weniger ist oft mehr: Überpflegte Haut reagiert gereizt. Führe neue Produkte einzeln ein und gib der Haut vier bis sechs Wochen Zeit, sich anzupassen. Passe deine Routine den Jahreszeiten an – im Winter braucht die Haut mehr Schutz, im Sommer leichtere Texturen.",
          "Wenn du unsicher bist, welche Produkte zu deinem Hauttyp passen, lohnt sich eine professionelle Hautanalyse. Sie nimmt dir das Raten ab und spart langfristig Geld für ungeeignete Produkte.",
        ],
      },
    ],
    faqs: [
      {
        q: "Wie oft sollte ich meine Gesichtspflege anpassen?",
        a: "Eine bewährte Routine behältst du bei, solange sie wirkt. Eine Anpassung empfiehlt sich bei Jahreszeitenwechsel, Hormonveränderungen oder wenn die Haut verändert reagiert – etwa alle drei bis sechs Monate.",
      },
      {
        q: "Reichen Hausmittel statt teurer Produkte?",
        a: "Einige Hausmittel sind sinnvoll, andere reizen die Haut. Eine professionelle Beratung zeigt dir, welche Wirkstoffe für deinen Hauttyp wirklich etwas bringen – oft sind günstige, gezielte Produkte wirksamer als teure Marken.",
      },
    ],
    links: [
      { label: "Gesichtsbehandlung in Winterthur", to: "/behandlungen/gesicht" },
      { label: "Häufige Fragen (FAQ)", to: "/faq" },
      { label: "Kontakt aufnehmen", to: "/kontakt" },
    ],
  },
  {
    slug: "kosmetikstudio-winterthur-vorstellung",
    title: "Kosmetikstudio in Winterthur: Was Charm Beauty auszeichnet",
    metaTitle: "Kosmetikstudio Winterthur vorgestellt | Charm Beauty Blog",
    metaDescription:
      "Was Charm Beauty in Winterthur besonders macht: individuelle Hautanalyse, hochwertige Produkte, ruhige Atmosphäre und ehrliche Beratung. Lerne Snezana und ihr Studio kennen.",
    category: "Unternehmen",
    excerpt:
      "Hinter Charm Beauty steht Snezana Djuric – mit Herz, Erfahrung und einem klaren Anspruch an individuelle Pflege. Hier erfährst du, was das Kosmetikstudio in Winterthur auszeichnet und warum sich eine persönliche Beratung von der Masse abhebt.",
    image: IMAGES.welcome,
    date: "2026-09-01",
    author: "Snezana Djuric",
    readTime: 5,
    tags: ["Studio", "Winterthur", "Beratung"],
    popular: true,
    sections: [
      {
        heading: "Persönliche Beratung statt Standardprogramm",
        paragraphs: [
          "Jede Haut ist anders. Deshalb beginnt jede Behandlung bei Charm Beauty mit einer ausführlichen Hautanalyse und einem ehrlichen Gespräch über deine Wünsche. Es gibt kein vorgefertigtes Programm und keinen Druckverkauf – nur Empfehlungen, die zu deiner Haut passen.",
        ],
      },
      {
        heading: "Ruhe und Privatsphäre im Herzen Winterthurs",
        paragraphs: [
          "Das Studio an der Ernst-Jung-Gasse 16a ist bewusst klein und persönlich gehalten. Du wirst nie mit mehreren Gästen gleichzeitig im Warteraum sitzen, sondern geniesst ungeteilte Aufmerksamkeit während deiner gesamten Behandlung.",
        ],
      },
      {
        heading: "Hochwertige Produkte und ehrliche Qualität",
        paragraphs: [
          "Ich arbeite nur mit Pflegeprodukten, deren Wirkung ich regelmässig überprüfe. Neue Produkte teste ich ausführlich, bevor sie in die Behandlung einfliessen. So weiss ich genau, was ich meinen Gästen empfehle – und was nicht.",
        ],
      },
      {
        heading: "Transparenz bei Preisen und Abläufen",
        paragraphs: [
          "Du erfährst vor der Behandlung, was sie umfasst und welche Faktoren den Preis beeinflussen. Keine versteckten Kosten, keine Überraschungen am Ende. Das Vertrauen meiner Gäste ist mir wichtiger als ein schneller Zusatzverkauf.",
        ],
      },
    ],
    faqs: [
      {
        q: "Muss ich vor dem ersten Termin eine Beratung buchen?",
        a: "Nein, die Beratung ist fester Bestandteil jeder Behandlung. Wenn du dir unsicher bist, kannst du aber auch einen reinen Beratungstermin vereinbaren, bevor du dich für eine Behandlung entscheidest.",
      },
      {
        q: "Wo genau liegt das Studio?",
        a: "Charm Beauty befindet sich an der Ernst-Jung-Gasse 16a in 8400 Winterthur, zentral und gut erreichbar.",
      },
    ],
    links: [
      { label: "Über uns", to: "/uber-uns" },
      { label: "Alle Behandlungen", to: "/behandlungen" },
      { label: "Termin buchen", to: "/kontakt" },
    ],
  },
  {
    slug: "gesichtsbehandlung-ablauf",
    title: "Gesichtsbehandlung: Ablauf und was Sie erwartet",
    metaTitle: "Ablauf einer Gesichtsbehandlung | Charm Beauty Blog",
    metaDescription:
      "Schritt für Schritt durch die Gesichtsbehandlung: Hautanalyse, Reinigung, Pflege und Nachsorge. Erfahre, was bei Charm Beauty in Winterthur auf dich zukommt.",
    category: "Anleitungen",
    excerpt:
      "Wer zum ersten Mal eine Gesichtsbehandlung bucht, weiss oft nicht, was passiert. Diese Anleitung nimmt dir die Unsicherheit und erklärt jeden Schritt – von der Hautanalyse bis zur Nachsorgeempfehlung für zu Hause.",
    image: IMAGES.gallery[0],
    date: "2026-08-18",
    author: "Snezana Djuric",
    readTime: 7,
    tags: ["Gesichtsbehandlung", "Ablauf", "Anleitung"],
    popular: false,
    sections: [
      {
        heading: "Schritt 1: Hautanalyse und Gespräch",
        paragraphs: [
          "Zu Beginn besprechen wir deine Wünsche und analysieren deinen Hauttyp. Ich prüfe Feuchtigkeitsgehalt, Empfindlichkeit und aktuelle Problemzonen. Nur so lässt sich eine Behandlung zusammenstellen, die wirklich zu dir passt.",
        ],
      },
      {
        heading: "Schritt 2: Tiefenreinigung",
        paragraphs: [
          "Die gründliche Reinigung öffnet die Poren und entfernt Unreinheiten, Make-up und Talg. Ich arbeite mit sanften Reinigungsmitteln, die die Hautbarriere nicht angreifen.",
        ],
      },
      {
        heading: "Schritt 3: Peeling und Vorbereitung",
        paragraphs: [
          "Ein mildes Peeling entfernt abgestorbene Hautschüppchen und fördert die Zellerneuerung. Die Intensität passe ich an deine Hautempfindlichkeit an – niemals aggressiv, immer kontrolliert.",
        ],
      },
      {
        heading: "Schritt 4: Pflegende Anwendung und Massage",
        paragraphs: [
          "Auf die vorbereitete Haut trage ich auf deinen Hauttyp abgestimmte Wirkstoffe auf. Eine entspannende Gesichtsmassage fördert die Durchblutung und sorgt für das rundum gute Gefühl nach der Behandlung.",
        ],
      },
      {
        heading: "Schritt 5: Abschluss und Nachsorge",
        paragraphs: [
          "Zum Abschluss besprechen wir, wie du das Ergebnis zu Hause unterstützt. Ich empfehle passende Produkte und den idealen Abstand bis zum nächsten Termin – meist vier bis sechs Wochen.",
        ],
      },
    ],
    faqs: [
      {
        q: "Wie lange dauert eine Gesichtsbehandlung?",
        a: "Je nach Umfang zwischen 60 und 90 Minuten. In dieser Zeit kannst du komplett entspannen und die Pflege geniessen.",
      },
      {
        q: "Gibt es nach der Behandlung Rötungen?",
        a: "Leichte Rötungen können kurzzeitig auftreten, verschwinden aber meist innerhalb weniger Stunden. Ich informiere dich vorab über mögliche Reaktionen.",
      },
    ],
    links: [
      { label: "Gesichtsbehandlung buchen", to: "/behandlungen/gesicht" },
      { label: "Körperbehandlung entdecken", to: "/behandlungen/koerper" },
      { label: "FAQ Seite", to: "/faq" },
    ],
  },
  {
    slug: "regulaer-hautpflege-lohnt-sich",
    title: "Warum regelmässige Hautpflege langfristig lohnt",
    metaTitle: "Warum regelmässige Hautpflege sich lohnt | Charm Beauty Blog",
    metaDescription:
      "Einmal-Pflege bringt wenig – erst die Kontinuität sorgt für gesunde Haut. Ein Ratgeber über den langfristigen Wert regelmässiger Hautpflege vom Kosmetikstudio Charm Beauty.",
    category: "Ratgeber",
    excerpt:
      "Viele unterschätzen, wie sehr Kontinuität das Ergebnis bestimmt. Dieser Ratgeber erklärt, warum einmalige Pflege kaum wirkt, wie sich die Haut über Monate verändert und welche Rolle professionelle Begleitung dabei spielt.",
    image: IMAGES.gallery[1],
    date: "2026-08-02",
    author: "Snezana Djuric",
    readTime: 5,
    tags: ["Hautpflege", "Kontinuität", "Ratgeber"],
    popular: false,
    sections: [
      {
        heading: "Die Haut braucht Zeit",
        paragraphs: [
          "Die Haut erneuert sich etwa alle 28 Tage. Eine einzelne Behandlung kann einen schönen Moment-Effekt erzeugen, aber die nachhaltige Verbesserung des Hautbilds entsteht erst durch Wiederholung. Wer regelmässig pflegt, arbeitet mit dem natürlichen Rhythmus der Haut statt dagegen.",
        ],
      },
      {
        heading: "Frühe Pflege statt später Korrektur",
        paragraphs: [
          "Vorzubeugen ist einfacher und günstiger als zu korrigieren. Wer früh mit einer auf den Hauttyp abgestimmten Routine beginnt, beugt vorzeitiger Hautalterung und dauerhaften Problemzonen vor. Warten, bis etwas „sichtbar“ wird, kostet meist mehr Aufwand.",
        ],
      },
      {
        heading: "Die Rolle des Kosmetikstudios",
        paragraphs: [
          "Die tägliche Pflege zu Hause ist die Basis. Professionelle Behandlungen ergänzen sie: Sie erreichen tiefere Hautschichten, lösen Problemzonen gezielt und geben dir Rückmeldung, ob deine Routine noch passt. So bleibt deine Selbstpflege nicht dem Zufall überlassen.",
        ],
      },
      {
        heading: "Fazit: Kontinuität ist der grösste Hebel",
        paragraphs: [
          "Es ist nicht das teuerste Produkt, das die Haut verändert, sondern die Konstanz. Wer seine Pflege ernst nimmt und regelmässig überprüfen lässt, sieht den Unterschied – nicht in Tagen, aber in Monaten und Jahren.",
        ],
      },
    ],
    faqs: [
      {
        q: "Wie oft sollte ich zur professionellen Behandlung?",
        a: "Für nachhaltige Ergebnisse empfehle ich alle vier bis sechs Wochen einen Termin. So bleibt die Haut gepflegt und Unreinheiten haben keine Chance.",
      },
    ],
    links: [
      { label: "Behandlungen Übersicht", to: "/behandlungen" },
      { label: "Regionen in Winterthur", to: "/regionen" },
      { label: "Kontakt", to: "/kontakt" },
    ],
  },
  {
    slug: "google-bewertungen-lokale-unternehmen",
    title: "Google Bewertungen für lokale Unternehmen: Warum sie zählen",
    metaTitle: "Google Bewertungen für lokale Unternehmen | Charm Beauty Blog",
    metaDescription:
      "Warum Google-Bewertungen für Kosmetikstudios und lokale Unternehmen so wichtig sind – für Kunden wie für Betriebe. Ein ehrlicher Einblick rund um Transparenz und Vertrauen.",
    category: "Google Bewertungen",
    excerpt:
      "Bewertungen entscheiden heute über die Wahl eines Studios. Dieser Beitrag erklärt, warum echte Google-Bewertungen für lokale Unternehmen zählen, wie sie Vertrauen schaffen und was eine seriöse Bewertung von einer gekauften unterscheidet.",
    image: IMAGES.gallery[2],
    date: "2026-07-21",
    author: "Snezana Djuric",
    readTime: 4,
    tags: ["Bewertungen", "Vertrauen", "Google"],
    popular: true,
    sections: [
      {
        heading: "Bewertungen sind die erste Beratung",
        paragraphs: [
          "Bevor jemand ein Kosmetikstudio betritt, liest er die Bewertungen. Sie sind die erste Entscheidungshilfe und oft ausschlaggebend. Echte Erfahrungen anderer Gäste sagen mehr über Qualität und Atmosphäre als jede Werbung.",
        ],
      },
      {
        heading: "Echte Bewertungen erkennen",
        paragraphs: [
          "Gekaufte oder generische Fünf-Sterne-Rezensionen ohne Inhalt erkennt man schnell: Sie klingen austauschbar und erwähnen keine konkreten Details. Eine seriöse Bewertung beschreibt, was genau gut war – vom Ablauf über die Beratung bis zum Ergebnis.",
        ],
        list: [
          "Konkrete Details statt leerer Superlative",
          "Eine Mischung aus lobenden und kritischen Punkten wirkt glaubwürdig",
          "Antworten des Betriebs auf Bewertungen zeigen Engagement",
        ],
      },
      {
        heading: "Warum ich um ehrliches Feedback bitte",
        paragraphs: [
          "Bei Charm Beauty gebe ich Gästen nach der Behandlung die Möglichkeit zur Rückmeldung. Wer zufrieden ist, lade ich ein, seine Erfahrung auf Google zu teilen. Wer Kritik hat, kann sie direkt bei mir äussern – so kann ich reagieren, bevor eine Bewertung entsteht.",
        ],
      },
    ],
    faqs: [
      {
        q: "Wie kann ich eine Bewertung für Charm Beauty abgeben?",
        a: "Nach deiner Behandlung erhältst du einen Link zur Bewertung. Alternativ findest du das Studio direkt über die Google-Suche nach „Charm Beauty Winterthur“.",
      },
    ],
    links: [
      { label: "Bewertung abgeben", to: "/auftrag-bewerten" },
      { label: "Über uns", to: "/uber-uns" },
      { label: "Kontakt", to: "/kontakt" },
    ],
  },
  {
    slug: "koerperbehandlung-winterthur-entspannung",
    title: "Körperbehandlung in Winterthur: Entspannung und Pflege",
    metaTitle: "Körperbehandlung Winterthur für Entspannung | Charm Beauty Blog",
    metaDescription:
      "Was eine professionelle Körperbehandlung in Winterthur bringt: Peeling, Massage und hautstraffende Pflege. Erfahre, wann sie sich lohnt und was du erwarten kannst.",
    category: "Dienstleistungen",
    excerpt:
      "Der Körper trägt dich durch den Alltag – jetzt darfst du etwas zurückgeben. Dieser Beitrag stellt die Körperbehandlung bei Charm Beauty vor und erklärt, welche Pflege deine Haut strafft und wie du tiefe Entspannung erlebst.",
    image: IMAGES.body,
    date: "2026-07-05",
    author: "Snezana Djuric",
    readTime: 5,
    tags: ["Körperbehandlung", "Entspannung", "Pflege"],
    popular: false,
    sections: [
      {
        heading: "Mehr als nur Pflege",
        paragraphs: [
          "Eine Körperbehandlung ist Pflege und Entspannung zugleich. Sanftes Peeling entfernt abgestorbene Hautschüppchen, pflegende Anwendungen nähren die Haut und eine wohltuende Massage löst Verspannungen. Das Ergebnis: ein gepflegtes Hautbild und ein rundum gutes Körpergefühl.",
        ],
      },
      {
        heading: "Wann sich eine Körperbehandlung lohnt",
        paragraphs: [
          "Besonders vor Jahreszeitenwechsel, nach stressigen Phasen oder wenn die Haut spannt und trocken wirkt, tut eine Körperbehandlung besonders gut. Auch als regelmässiges Ritual – etwa alle drei bis vier Wochen – hält sie die Haut nachhaltig geschmeidig.",
        ],
      },
      {
        heading: "Individuell abgestimmt",
        paragraphs: [
          "Jede Körperbehandlung passe ich an deine Hautbeschaffenheit an. In der Beratung besprechen wir, welche Bereiche im Fokus stehen und welche Produkte deine Haut braucht. So entsteht keine Behandlung von der Stange, sondern Pflege, die wirklich zu dir passt.",
        ],
      },
    ],
    faqs: [
      {
        q: "Was sollte ich zur Körperbehandlung mitbringen?",
        a: "Bequeme Kleidung reicht aus. Handtücher und Pflegeprodukte stellt das Studio für dich bereit.",
      },
      {
        q: "Wie lange dauert eine Körperbehandlung?",
        a: "Je nach Umfang zwischen 45 und 120 Minuten. In der Beratung finden wir gemeinsam die passende Dauer für deine Zeit.",
      },
    ],
    links: [
      { label: "Körperbehandlung buchen", to: "/behandlungen/koerper" },
      { label: "Gesichtsbehandlung ansehen", to: "/behandlungen/gesicht" },
      { label: "Termin vereinbaren", to: "/kontakt" },
    ],
  },
  {
    slug: "faq-kosmetikstudio-neukunden",
    title: "Häufige Fragen zum Kosmetikstudio: FAQ für Neukunden",
    metaTitle: "FAQ Kosmetikstudio für Neukunden | Charm Beauty Blog",
    metaDescription:
      "Die wichtigsten Fragen neuer Gäste beantwortet: Terminbuchung, Öffnungszeiten, Zahlung, Ablauf und Vorbereitung. Alles, was Neukunden vor dem ersten Besuch bei Charm Beauty wissen sollten.",
    category: "FAQ",
    excerpt:
      "Vor dem ersten Besuch im Kosmetikstudio stellen sich viele Fragen. Dieses FAQ beantwortet die häufigsten Anliegen neuer Gäste – von der Terminbuchung über die Vorbereitung bis zu den Zahlungsmöglichkeiten bei Charm Beauty in Winterthur.",
    image: IMAGES.snezana,
    date: "2026-06-22",
    author: "Snezana Djuric",
    readTime: 4,
    tags: ["FAQ", "Neukunden", "Termin"],
    popular: false,
    sections: [
      {
        heading: "Termin und Öffnungszeiten",
        paragraphs: [
          "Termine vereinbarst du am einfachsten per WhatsApp oder telefonisch unter +41 78 896 46 55. Alternativ sendest du eine Anfrage über das Kontaktformular. Geöffnet ist nach Vereinbarung: Montag, Dienstag, Donnerstag und Freitag 9–12 Uhr & 14–19 Uhr, Mittwoch und Samstag 9–12 Uhr.",
        ],
      },
      {
        heading: "Vorbereitung auf den ersten Besuch",
        paragraphs: [
          "Komme am besten ohne Make-up und mit sauberer Haut zum Termin. Falls du spezielle Produkte verwendest oder Hautprobleme hast, bringe diese Informationen mit – so kann ich die Behandlung optimal abstimmen.",
        ],
      },
      {
        heading: "Bezahlung und Stornierung",
        paragraphs: [
          "Vor Ort kannst du bar oder mit Twint bezahlen. Solltest du einen Termin nicht wahrnehmen können, gib mir bitte frühzeitig Bescheid, damit ich die Zeit für andere Gäste nutzen kann.",
        ],
      },
    ],
    faqs: [
      {
        q: "Wie kann ich einen Termin buchen?",
        a: "Am einfachsten per WhatsApp oder telefonisch unter +41 78 896 46 55. Alternativ über das Kontaktformular – ich melde mich zeitnah bei dir.",
      },
      {
        q: "Welche Zahlungsmöglichkeiten gibt es?",
        a: "Vor Ort kannst du bar oder mit Twint bezahlen.",
      },
      {
        q: "Wo befindet sich Charm Beauty?",
        a: "Das Studio liegt an der Ernst-Jung-Gasse 16a in 8400 Winterthur.",
      },
    ],
    links: [
      { label: "Alle FAQ", to: "/faq" },
      { label: "Kontakt aufnehmen", to: "/kontakt" },
      { label: "Behandlungen", to: "/behandlungen" },
    ],
  },
  {
    slug: "hautpflege-winterthur-klima",
    title: "Hautpflege in Winterthur: Tipps für das Schweizer Klima",
    metaTitle: "Hautpflege im Schweizer Klima | Charm Beauty Blog Winterthur",
    metaDescription:
      "Kalt, trocken, wechselhaft: Das Schweizer Klima fordert der Haut viel ab. Lokale Pflegetipps für Winterthur – angepasst an Jahreszeiten und Wetterwechsel.",
    category: "Lokale Themen",
    excerpt:
      "Das Klima in Winterthur wechselt zwischen trockener Kälte und feuchter Wärme – eine Herausforderung für die Haut. Diese lokalen Pflegetipps helfen dir, deine Routine an die Jahreszeiten in Winterthur und Umgebung anzupassen.",
    image: IMAGES.gallery[3],
    date: "2026-06-08",
    author: "Snezana Djuric",
    readTime: 5,
    tags: ["Winterthur", "Klima", "Jahreszeiten"],
    popular: false,
    sections: [
      {
        heading: "Winter: Kälte und Heizungsluft",
        paragraphs: [
          "Im Winter trocknet die Heizungsluft die Haut stark aus. Reichere Cremes, ein zusätzlicher Feuchtigkeitsbooster und ein Schutzlippenbalsam gehören in die Routine. Wer draussen Sport treibt, sollte danach eine pflegende Reinigung nicht vergessen.",
        ],
      },
      {
        heading: "Frühling und Herbst: Wechselhaft",
        paragraphs: [
          "In den Übergangszeiten reagiert die Haut empfindlich. Führe leichtere Texturen schrittweise ein und beobachte, wie deine Haut auf Temperaturwechsel reagiert. Eine professionelle Hautanalyse hilft, die Routine rechtzeitig anzupassen.",
        ],
      },
      {
        heading: "Sommer: Schutz und leichte Pflege",
        paragraphs: [
          "Im Sommer steht Sonnenschutz an erster Stelle. Leichte, feuchtigkeitsspendende Produkte ersetzen die reicheren Wintercremes. Nach dem Aufenthalt in der Sonne beruhigt eine pflegende After-Sun-Pflege die Haut.",
        ],
      },
      {
        heading: "Lokal verwurzelt, individuell beraten",
        paragraphs: [
          "Wer in Winterthur und Umgebung lebt, kennt diese Wechsel. Im Studio berate ich dich gerne, wie du deine Pflege an die lokale Jahreszeit anpasst – konkret und ohne überflüssige Produkte.",
        ],
      },
    ],
    faqs: [
      {
        q: "Brauche ich im Winter eine andere Creme?",
        a: "Ja. Trockene Heizungsluft erfordert reichere Texturen und mehr Feuchtigkeitsbindung als im Sommer. Eine angepasste Routine schützt die Hautbarriere.",
      },
    ],
    links: [
      { label: "Regionen rund um Winterthur", to: "/regionen" },
      { label: "Gesichtsbehandlung", to: "/behandlungen/gesicht" },
      { label: "Kontakt", to: "/kontakt" },
    ],
  },
];

export const getPost = (slug) => BLOG_POSTS.find((p) => p.slug === slug);

export const getRelatedPosts = (post, n = 3) => {
  const related = BLOG_POSTS.filter(
    (p) =>
      p.slug !== post.slug &&
      (p.category === post.category || p.tags.some((t) => post.tags.includes(t)))
  );
  if (related.length >= n) return related.slice(0, n);
  // Fallback: mit neuesten Beiträgen auffüllen, falls zu wenige Verwandte existieren
  const fill = [...BLOG_POSTS]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .filter((p) => p.slug !== post.slug && !related.some((r) => r.slug === p.slug));
  return [...related, ...fill].slice(0, n);
};

export const getNewestPosts = (n = 5) =>
  [...BLOG_POSTS].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, n);

export const getPopularPosts = (n = 4) =>
  BLOG_POSTS.filter((p) => p.popular).slice(0, n);

export const getUsedCategories = () =>
  BLOG_CATEGORIES.filter((c) => BLOG_POSTS.some((p) => p.category === c));