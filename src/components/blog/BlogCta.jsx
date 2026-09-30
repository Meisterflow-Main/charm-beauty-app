import React from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, Mail, FileText } from "lucide-react";
import { CONTACT } from "@/lib/site";

export default function BlogCta() {
  const items = [
    { to: "/kontakt", label: "Kontakt aufnehmen", icon: Mail, variant: "gold" },
    { href: CONTACT.whatsapp, label: "Termin buchen", icon: MessageCircle, variant: "dark" },
    { to: "/kontakt", label: "Offerte anfragen", icon: FileText, variant: "outline" },
    { href: CONTACT.phoneHref, label: "Anrufen", icon: Phone, variant: "outline" },
  ];
  return (
    <div className="rounded-3xl border border-ink/8 bg-cream p-8 text-center">
      <h2 className="font-heading text-2xl font-semibold text-ink">Bereit für deine Pflege?</h2>
      <p className="mx-auto mt-3 max-w-md text-sm text-ink/65">
        Vereinbare deinen Termin oder lass dich persönlich beraten – ich freue mich auf dich.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {items.map((it, i) => {
          const Icon = it.icon;
          const cls = {
            gold: "bg-gold text-white hover:bg-gold-dark",
            dark: "bg-ink text-cream hover:bg-ink/90",
            outline: "border border-ink/20 text-ink hover:border-gold hover:text-gold",
          }[it.variant];
          const inner = (
            <span className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${cls}`}>
              <Icon className="h-4 w-4" /> {it.label}
            </span>
          );
          return it.to ? (
            <Link key={i} to={it.to}>{inner}</Link>
          ) : (
            <a key={i} href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{inner}</a>
          );
        })}
      </div>
    </div>
  );
}