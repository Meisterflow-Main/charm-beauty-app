import React from "react";
import { HOURS } from "@/lib/site";

export default function OpeningHours({ light = false }) {
  const today = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"][new Date().getDay()];
  return (
    <div>
      <p className={`mb-3 text-sm ${light ? "text-cream/60" : "text-ink/60"}`}>Öffnungszeiten nach Vereinbarung</p>
      <ul className="space-y-2">
        {HOURS.map((h) => (
          <li key={h.day} className={`flex justify-between gap-4 text-sm ${h.day === today ? "text-gold font-semibold" : light ? "text-cream/85" : "text-ink/85"}`}>
            <span>{h.day}</span>
            <span className="text-right">{h.time}</span>
          </li>
        ))}
      </ul>
      <p className={`mt-4 text-sm ${light ? "text-cream/60" : "text-ink/60"}`}>Zahlungsmöglichkeit vor Ort: Bar & Twint</p>
    </div>
  );
}