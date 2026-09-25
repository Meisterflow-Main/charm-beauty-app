import React, { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Star, ExternalLink } from "lucide-react";
import { GOOGLE_REVIEW_LINK } from "@/lib/site";

export default function HighRatingThanks() {
  useEffect(() => {
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 }, colors: ["#B8860B", "#D5B781", "#F9F5EE"] });
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold text-white"><Star className="h-8 w-8 fill-white" /></div>
      <h2 className="mt-6 text-3xl font-semibold text-ink">Vielen Dank für Ihre tolle Bewertung!</h2>
      <p className="mx-auto mt-4 max-w-md text-lg text-ink/70">Würden Sie uns auch auf Google weiterempfehlen? Das hilft anderen Kunden, uns zu finden.</p>
      <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex h-14 items-center gap-2 rounded-full bg-gold px-10 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-gold-dark">
        Auf Google bewerten <ExternalLink className="h-4 w-4" />
      </a>
    </motion.div>
  );
}