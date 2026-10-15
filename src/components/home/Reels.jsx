import React, { useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";
import { VIDEOS } from "@/lib/site";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";

const CAPTIONS = [
  { title: "Gesichtspflege", sub: "Individuelle Pflege für deine Haut" },
  { title: "Kosmetisches Microneedling & Nanoneedling", sub: "Für glatte Haut und einen frischen Glow" },
  { title: "Apparative Körperbehandlungen", sub: "Moderne Technologien für gezielte Anwendungen" },
  { title: "Behandlung in Aktion", sub: "Einblick in unsere apparativen Körperanwendungen" },
];

function Reel({ src, caption, index }) {
  const ref = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div className="group relative aspect-[3/4] overflow-hidden rounded-[1.75rem] bg-ink">
      <video
        ref={ref}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-ink/20" />
      <button onClick={toggle} className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25" aria-label={muted ? "Ton einschalten" : "Ton ausschalten"}>
        {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </button>
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
        <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-champagne">0{index + 1}</span>
        <h3 className="mt-1.5 text-xl font-semibold text-white sm:text-2xl">{caption.title}</h3>
        <p className="text-sm text-white/75 sm:text-base">{caption.sub}</p>
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-md"><Play className="h-6 w-6 fill-white text-white" /></span>
      </div>
    </div>
  );
}

export default function Reels() {
  return (
    <section className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <Reveal><Eyebrow>Eindrücke</Eyebrow></Reveal>
          <Reveal delay={0.1}><h2 className="mt-5 text-5xl font-semibold text-ink sm:text-6xl">Charm Beauty in Bewegung</h2></Reveal>
          <Reveal delay={0.2}><p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink/70">Erlebe die Atmosphäre meines Studios mit einem Einblick in meine Behandlungen, vom Gesichtstreatment bis zur Körperstraffung mit moderner Technologie.</p></Reveal>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {VIDEOS.reels.map((src, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <Reel src={src} caption={CAPTIONS[i]} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}