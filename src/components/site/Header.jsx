import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { IMAGES, NAV, CONTACT } from "@/lib/site";
import BtnLink from "@/components/site/BtnLink";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <div className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 transition-all duration-500 sm:px-6 ${scrolled || open ? "h-16 border-white/60 bg-cream/75 shadow-[0_8px_40px_-20px_rgba(4,21,31,0.35)] backdrop-blur-xl" : "h-20 border-transparent bg-transparent"}`}>
        <Link to="/" aria-label="Charm Beauty – Startseite" className="flex items-center">
          <img src={IMAGES.logo} alt="Charm Beauty Kosmetikstudio Logo" className="h-10 w-auto sm:h-11" />
        </Link>
        <nav aria-label="Hauptnavigation" className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end className={({ isActive }) => `relative rounded-full px-4 py-2 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors ${isActive ? "text-gold" : "text-ink/75 hover:text-ink"}`}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={CONTACT.phoneHref} className="hidden h-11 w-11 items-center justify-center rounded-full border border-ink/10 text-ink transition hover:border-gold hover:text-gold sm:flex" aria-label="Anrufen">
            <Phone className="h-4 w-4" />
          </a>
          <BtnLink href={CONTACT.whatsapp} className="hidden !min-h-[44px] sm:inline-flex">Termin buchen</BtnLink>
          <button onClick={() => setOpen(!open)} className="flex h-11 w-11 items-center justify-center rounded-full text-ink lg:hidden" aria-label="Menü öffnen" aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="mx-auto mt-2 max-w-7xl rounded-3xl border border-white/60 bg-cream/95 p-4 shadow-xl backdrop-blur-xl lg:hidden" aria-label="Mobile Navigation">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} end className={({ isActive }) => `block rounded-2xl px-4 py-4 font-heading text-2xl ${isActive ? "text-gold" : "text-ink"}`}>
                {n.label}
              </NavLink>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}