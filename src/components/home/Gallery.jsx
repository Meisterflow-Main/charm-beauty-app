import React from "react";
import { IMAGES } from "@/lib/site";

export default function Gallery() {
  const items = [...IMAGES.gallery, ...IMAGES.gallery];
  return (
    <section aria-label="Einblicke ins Studio" className="overflow-hidden py-10">
      <div className="animate-marquee flex w-max gap-4 hover:[animation-play-state:paused]">
        {items.map((src, i) => (
          <div key={i} className={`shrink-0 overflow-hidden rounded-[1.5rem] bg-cream ${i % 2 ? "h-64 w-52 sm:h-80 sm:w-64" : "mt-10 h-56 w-72 sm:h-72 sm:w-96"}`}>
            <img src={src} alt={`Charm Beauty Kosmetikstudio Winterthur – Einblick ${(i % 6) + 1}`} className="h-full w-full object-contain transition-transform duration-700 hover:scale-110" loading="eager" decoding="async" />
          </div>
        ))}
      </div>
    </section>
  );
}