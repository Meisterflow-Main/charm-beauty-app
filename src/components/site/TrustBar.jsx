import React from "react";
import { ShieldCheck, MapPin, CreditCard, Clock, Phone } from "lucide-react";
import { CONTACT } from "@/lib/site";
import Reveal from "@/components/site/Reveal";

// Vertrauensleiste mit echten Unternehmensdaten — keine erfundenen Elemente
const ITEMS = [
  { icon: ShieldCheck, label: "Eingetragenes Unternehmen", value: "UID: CHE-182.339.391" },
  { icon: MapPin, label: "Standort", value: "Ernst-Jung-Gasse 16a, Winterthur" },
  { icon: Clock, label: "Termin nach Vereinbarung", value: "Mo bis Sa" },
  { icon: CreditCard, label: "Zahlung vor Ort", value: "Bar & Twint" },
  { icon: Phone, label: "Erreichbar unter", value: CONTACT.phone },
];

export default function TrustBar() {
  return (
    <section className="px-6 py-10">
      <Reveal className="mx-auto max-w-7xl">
        <div className="grid gap-4 rounded-[2rem] border border-ink/5 bg-white/60 p-6 backdrop-blur sm:grid-cols-2 lg:grid-cols-5 lg:p-8">
          {ITEMS.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-champagne/25 text-gold">
                <item.icon className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-[0.14em] text-ink/45">{item.label}</p>
                <p className="truncate text-sm font-medium text-ink">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}