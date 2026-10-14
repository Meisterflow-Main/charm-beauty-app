import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Reveal({ children, delay = 0, y = 28, className = "", as = "div" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const Comp = motion[as];
  return (
    <Comp
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}