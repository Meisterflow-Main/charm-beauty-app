import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const LABELS = ["", "Enttäuschend", "Ausbaufähig", "In Ordnung", "Sehr gut", "Hervorragend"];

export default function StarRating({ value, onChange }) {
  const [hover, setHover] = useState(0);
  const active = hover || value;
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2" role="radiogroup" aria-label="Sternebewertung" onMouseLeave={() => setHover(0)}>
        {[1, 2, 3, 4, 5].map((n) => (
          <motion.button
            key={n}
            type="button"
            role="radio"
            aria-checked={value === n}
            aria-label={`${n} Stern${n > 1 ? "e" : ""}`}
            whileTap={{ scale: 0.85 }}
            onMouseEnter={() => setHover(n)}
            onClick={() => onChange(n)}
            className="p-1"
          >
            <Star className={`h-11 w-11 transition-all duration-300 sm:h-14 sm:w-14 ${n <= active ? "scale-110 fill-gold text-gold" : "text-ink/20"}`} />
          </motion.button>
        ))}
      </div>
      <p className="mt-4 h-6 text-sm font-medium uppercase tracking-[0.16em] text-gold">{LABELS[active]}</p>
    </div>
  );
}