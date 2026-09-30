import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, MapPin, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { IMAGES, NAV, CONTACT } from "@/lib/site";
import { LANDING_PAGES } from "@/lib/landingPages";
import { ALL_TREATMENTS } from "@/lib/treatments";
import BtnLink from "@/components/site/BtnLink";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [regionsOpen, setRegionsOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => setRegionsOpen(false), [pathname]);
  useEffect(() => setTreatmentsOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <div className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 transition-all duration-500 sm:px-6 ${scrolled || open ? "h-16 border-white/60 bg-cream/75 shadow-[0_8px_40px_-20px_rgba(4,21,31,0.35)] backdrop-blur-xl" : "h-20 border-transparent bg-transparent"}`}>
        <Link to="/" aria-label="Charm Beauty – Startseite" className="flex items-center">
          <img src={IMAGES.logo} alt="Charm Beauty Kosmetikstudio Logo" className="h-10 w-auto sm:h-11" />
        </Link>
        <nav aria-label="Hauptnavigation" className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) =>
            n.to === "/behandlungen" ? (
              <div key={n.to} className="relative" onMouseEnter={() => setTreatmentsOpen(true)} onMouseLeave={() => setTreatmentsOpen(false)}>
                <button onClick={() => setTreatmentsOpen(!treatmentsOpen)} className="flex items-center gap-1 rounded-full px-4 py-2 text-[13px] font-medium uppercase tracking-[0.14em] text-ink/75 transition hover:text-ink" aria-expanded={treatmentsOpen}>
                  {n.label} <ChevronDown className={`h-3.5 w-3.5 transition-transform ${treatmentsOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {treatmentsOpen && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} className="absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-2">
                      <div className="rounded-2xl border border-white/60 bg-cream/95 p-2 shadow-xl backdrop-blur-xl">
                        <Link to="/behandlungen" className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-ink transition hover:bg-champagne/20">
                          <Sparkles className="h-4 w-4 text-gold" /> Alle Behandlungen
                        </Link>
                        <div className="my-1 h-px bg-ink/5" />
                        <div className="max-h-80 overflow-y-auto">
                          {ALL_TREATMENTS.map((t) => (
                            <Link key={t.slug} to={`/behandlungen/angebot/${t.slug}`} className="block rounded-xl px-4 py-2.5 text-sm text-ink/75 transition hover:bg-champagne/20 hover:text-gold">
                              {t.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink key={n.to} to={n.to} end className={({ isActive }) => `relative rounded-full px-4 py-2 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors ${isActive ? "text-gold" : "text-ink/75 hover:text-ink"}`}>
                {n.label}
              </NavLink>
            )
          )}
          <div className="relative" onMouseEnter={() => setRegionsOpen(true)} onMouseLeave={() => setRegionsOpen(false)}>
            <button onClick={() => setRegionsOpen(!regionsOpen)} className="flex items-center gap-1 rounded-full px-4 py-2 text-[13px] font-medium uppercase tracking-[0.14em] text-ink/75 transition hover:text-ink" aria-expanded={regionsOpen}>
              Regionen <ChevronDown className={`h-3.5 w-3.5 transition-transform ${regionsOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {regionsOpen && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-2">
                  <div className="rounded-2xl border border-white/60 bg-cream/95 p-2 shadow-xl backdrop-blur-xl">
                    <Link to="/regionen" className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-ink transition hover:bg-champagne/20">
                      <MapPin className="h-4 w-4 text-gold" /> Alle Regionen
                    </Link>
                    <div className="my-1 h-px bg-ink/5" />
                    <div className="max-h-80 overflow-y-auto">
                      {LANDING_PAGES.map((p) => (
                        <Link key={p.slug} to={`/regionen/${p.slug}`} className="block rounded-xl px-4 py-2.5 text-sm text-ink/75 transition hover:bg-champagne/20 hover:text-gold">
                          {p.region}
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
          <motion.nav initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="mx-auto mt-2 max-h-[80vh] max-w-7xl overflow-y-auto rounded-3xl border border-white/60 bg-cream/95 p-4 shadow-xl backdrop-blur-xl lg:hidden" aria-label="Mobile Navigation">
            {NAV.filter((n) => n.to !== "/behandlungen").map((n) => (
              <NavLink key={n.to} to={n.to} end className={({ isActive }) => `block rounded-2xl px-4 py-4 font-heading text-2xl ${isActive ? "text-gold" : "text-ink"}`}>
                {n.label}
              </NavLink>
            ))}
            <button onClick={() => setTreatmentsOpen(!treatmentsOpen)} className="flex w-full items-center justify-between rounded-2xl px-4 py-4 font-heading text-2xl text-ink">
              Behandlungen <ChevronDown className={`h-5 w-5 transition-transform ${treatmentsOpen ? "rotate-180" : ""}`} />
            </button>
            {treatmentsOpen && (
              <div className="max-h-72 space-y-1 overflow-y-auto pl-4">
                <Link to="/behandlungen" className="block rounded-xl px-4 py-3 text-base font-medium text-gold">Alle Behandlungen</Link>
                {ALL_TREATMENTS.map((t) => (
                  <Link key={t.slug} to={`/behandlungen/angebot/${t.slug}`} className="block rounded-xl px-4 py-3 text-base text-ink/75">
                    {t.name}
                  </Link>
                ))}
              </div>
            )}
            <button onClick={() => setRegionsOpen(!regionsOpen)} className="flex w-full items-center justify-between rounded-2xl px-4 py-4 font-heading text-2xl text-ink">
              Regionen <ChevronDown className={`h-5 w-5 transition-transform ${regionsOpen ? "rotate-180" : ""}`} />
            </button>
            {regionsOpen && (
              <div className="space-y-1 pl-4">
                <Link to="/regionen" className="block rounded-xl px-4 py-3 text-base font-medium text-gold">Alle Regionen</Link>
                {LANDING_PAGES.map((p) => (
                  <Link key={p.slug} to={`/regionen/${p.slug}`} className="block rounded-xl px-4 py-3 text-base text-ink/75">
                    {p.region}
                  </Link>
                ))}
              </div>
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}