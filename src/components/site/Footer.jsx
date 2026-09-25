import React from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Star } from "lucide-react";
import { IMAGES, CONTACT, NAV } from "@/lib/site";
import OpeningHours from "@/components/site/OpeningHours";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 pb-28 pt-20 lg:pb-12">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block rounded-2xl bg-cream p-4">
              <img src={IMAGES.logo} alt="Charm Beauty Logo" className="h-12 w-auto" loading="lazy" />
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/65">
              Dein Kosmetikstudio in Winterthur für individuelle Schönheitsbehandlungen und erstklassige Hautpflege.
            </p>
          </div>
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-xs uppercase tracking-[0.2em] text-champagne">Öffnungszeiten</h3>
            <OpeningHours light />
          </div>
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-xs uppercase tracking-[0.2em] text-champagne">Seiten</h3>
            <ul className="space-y-3 text-sm">
              {NAV.map((n) => <li key={n.to}><Link to={n.to} className="text-cream/80 transition hover:text-champagne">{n.label}</Link></li>)}
              <li><Link to="/auftrag-bewerten" className="inline-flex items-center gap-1.5 text-champagne hover:text-cream"><Star className="h-3.5 w-3.5" />Bewertung abgeben</Link></li>
            </ul>
            <h3 className="mb-5 mt-8 text-xs uppercase tracking-[0.2em] text-champagne">Rechtliches</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/datenschutz" className="text-cream/80 hover:text-champagne">Datenschutz</Link></li>
              <li><Link to="/impressum" className="text-cream/80 hover:text-champagne">Impressum</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-xs uppercase tracking-[0.2em] text-champagne">Kontakt</h3>
            <address className="space-y-4 text-sm not-italic">
              <a href={CONTACT.phoneHref} className="flex items-center gap-3 text-cream/85 hover:text-champagne"><Phone className="h-4 w-4 text-gold" />{CONTACT.phone}</a>
              <a href={CONTACT.maps} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-cream/85 hover:text-champagne"><MapPin className="mt-0.5 h-4 w-4 text-gold" />{CONTACT.street}, {CONTACT.city} {CONTACT.zip}</a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-cream/85 hover:text-champagne"><Mail className="h-4 w-4 text-gold" />{CONTACT.email}</a>
            </address>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-cream/10 pt-8 text-xs text-cream/45 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Charm Beauty · Snezana Djuric · Winterthur</p>
          <button onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))} className="text-left hover:text-champagne">Cookie-Einstellungen</button>
        </div>
      </div>
    </footer>
  );
}