import React from "react";
import { Phone, CalendarHeart } from "lucide-react";
import { CONTACT } from "@/lib/site";

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.5 9.5 0 01-4.83-1.32l-.35-.2-3.6.94.96-3.5-.23-.36a9.46 9.46 0 01-1.45-5.05c0-5.24 4.27-9.5 9.52-9.5a9.5 9.5 0 019.5 9.52c0 5.24-4.27 9.5-9.51 9.5zm8.1-17.6A11.4 11.4 0 0012.04.5C5.73.5.6 5.63.6 11.94c0 2.02.53 3.99 1.53 5.72L.5 23.5l5.98-1.57a11.4 11.4 0 005.55 1.41h.01c6.3 0 11.44-5.13 11.44-11.44 0-3.06-1.19-5.93-3.35-8.09z" />
    </svg>
  );
}

export default function FloatingActions() {
  return (
    <>
      <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Chat starten" title="Beim Klick auf WhatsApp werden Daten an Meta übermittelt." className="fixed bottom-24 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)] transition-transform duration-300 hover:scale-110 lg:bottom-8 lg:right-8">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </a>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/5 bg-cream/85 px-3 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl lg:hidden">
        <div className="flex gap-2">
          <a href={CONTACT.phoneHref} className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-ink/15 text-sm font-semibold text-ink">
            <Phone className="h-4 w-4" /> Anrufen
          </a>
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" title="Beim Klick auf WhatsApp werden Daten an Meta übermittelt." className="flex h-12 flex-[1.4] items-center justify-center gap-2 rounded-full bg-gold text-sm font-semibold text-white">
            <CalendarHeart className="h-4 w-4" /> Termin buchen
          </a>
        </div>
      </div>
    </>
  );
}