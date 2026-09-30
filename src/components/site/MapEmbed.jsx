import React from "react";
import { MapPin } from "lucide-react";
import { CONTACT } from "@/lib/site";
import Reveal from "@/components/site/Reveal";

export default function MapEmbed() {
  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    `${CONTACT.street}, ${CONTACT.zip} ${CONTACT.city}`
  )}&z=15&output=embed`;

  return (
    <Reveal className="overflow-hidden rounded-[2rem] border border-ink/5 bg-white/60">
      <div className="flex items-center gap-3 border-b border-ink/5 px-6 py-4">
        <MapPin className="h-5 w-5 text-gold" />
        <div>
          <p className="text-sm font-semibold text-ink">Charm Beauty Kosmetikstudio</p>
          <p className="text-xs text-ink/55">{CONTACT.street}, {CONTACT.zip} {CONTACT.city}</p>
        </div>
      </div>
      <iframe
        src={embedSrc}
        title="Karte: Charm Beauty, Ernst-Jung-Gasse 16a, 8400 Winterthur"
        className="h-[320px] w-full border-0 sm:h-[400px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </Reveal>
  );
}