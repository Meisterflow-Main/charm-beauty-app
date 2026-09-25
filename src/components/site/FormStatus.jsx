import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function FormStatus({ title, text, onReset }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center py-12 text-center" role="status">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.15 }} className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-white">
        <Check className="h-8 w-8" />
      </motion.div>
      <h3 className="mt-6 text-2xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 max-w-sm text-ink/65">{text}</p>
      {onReset && <button onClick={onReset} className="mt-6 text-sm font-medium text-gold underline underline-offset-4">Neue Nachricht senden</button>}
    </motion.div>
  );
}