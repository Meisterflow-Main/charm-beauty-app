import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import StarRating from "@/components/review/StarRating";
import LowRatingForm from "@/components/review/LowRatingForm";
import HighRatingThanks from "@/components/review/HighRatingThanks";

const QUESTIONS = [
  { q: "Wie zufrieden waren Sie mit dem Ergebnis Ihrer Behandlung?", options: ["Sehr zufrieden", "Zufrieden", "Weniger zufrieden"] },
  { q: "Wurde individuell auf Ihre Wünsche und Hautbedürfnisse eingegangen?", options: ["Ja, vollkommen", "Teilweise", "Nein"] },
  { q: "Wie haben Sie die Atmosphäre im Studio empfunden?", options: ["Sehr entspannend", "Angenehm", "Verbesserungswürdig"] },
];

export default function ReviewFlow() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [rating, setRating] = useState(0);
  const total = QUESTIONS.length + 1;

  const answer = (a) => {
    setAnswers([...answers.slice(0, step), { q: QUESTIONS[step].q, a }]);
    setStep(step + 1);
  };

  return (
    <div className="rounded-[2.5rem] border border-white/70 bg-white/75 p-7 shadow-[0_40px_100px_-50px_rgba(4,21,31,0.4)] backdrop-blur-xl sm:p-12">
      {!rating && (
        <div className="mb-10 flex items-center gap-4">
          {step > 0 && <button onClick={() => setStep(step - 1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink hover:border-gold" aria-label="Zurück"><ArrowLeft className="h-4 w-4" /></button>}
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-ink/10">
            <motion.div className="h-full bg-gold" animate={{ width: `${((step + 1) / total) * 100}%` }} transition={{ duration: 0.5 }} />
          </div>
          <span className="text-xs font-medium tracking-[0.14em] text-ink/50">{step + 1}/{total}</span>
        </div>
      )}
      <AnimatePresence mode="wait">
        <motion.div key={rating ? "result" : step} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.4 }}>
          {step < QUESTIONS.length && (
            <div>
              <h2 className="text-2xl font-semibold leading-snug text-ink sm:text-3xl">{QUESTIONS[step].q}</h2>
              <div className="mt-8 grid gap-3">
                {QUESTIONS[step].options.map((o) => (
                  <button key={o} onClick={() => answer(o)} className={`min-h-[60px] rounded-2xl border px-6 text-left text-base transition-all duration-300 hover:border-gold hover:bg-champagne/15 ${answers[step]?.a === o ? "border-gold bg-champagne/20" : "border-ink/10 bg-white/60"}`}>{o}</button>
                ))}
              </div>
            </div>
          )}
          {step === QUESTIONS.length && !rating && (
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Wie bewerten Sie Ihren Besuch insgesamt?</h2>
              <div className="mt-10"><StarRating value={rating} onChange={setRating} /></div>
            </div>
          )}
          {rating > 0 && (rating >= 4 ? <HighRatingThanks /> : <LowRatingForm rating={rating} answers={answers} />)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}