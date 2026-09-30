import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";

const KEY = "cb_cookie_consent";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setShow(true);
    const open = () => setShow(true);
    window.addEventListener("open-cookie-settings", open);
    return () => window.removeEventListener("open-cookie-settings", open);
  }, []);

  const choose = () => {
    localStorage.setItem(KEY, "necessary");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div role="dialog" aria-label="Cookie-Hinweis" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="fixed inset-x-3 bottom-24 z-[60] mx-auto max-w-lg rounded-3xl border border-white/70 bg-white/90 p-6 shadow-[0_30px_80px_-30px_rgba(4,21,31,0.45)] backdrop-blur-xl lg:bottom-8 lg:left-8 lg:right-auto">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-champagne/30 text-gold"><Cookie className="h-5 w-5" /></div>
            <div>
              <p className="font-heading text-base font-semibold text-ink">Deine Privatsphäre</p>
              <p className="mt-1 text-sm leading-relaxed text-ink/70">
                Ich verwende ausschliesslich technisch notwendige Cookies, damit diese Website funktioniert. Es werden keine Analyse- oder Tracking-Cookies eingesetzt. Mehr in meiner <Link to="/datenschutz" className="text-gold underline underline-offset-2">Datenschutzerklärung</Link>.
              </p>
            </div>
          </div>
          <div className="mt-5">
            <button onClick={choose} className="h-11 w-full rounded-full bg-ink text-sm font-medium text-cream hover:bg-ink/90">Verstanden</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}