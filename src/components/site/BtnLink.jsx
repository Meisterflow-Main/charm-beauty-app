import React from "react";
import { Link } from "react-router-dom";

const styles = {
  gold: "bg-gold text-white hover:bg-gold-dark shadow-[0_10px_30px_-10px_rgba(184,134,11,0.6)]",
  dark: "bg-ink text-cream hover:bg-ink/90",
  outline: "border border-ink/20 text-ink hover:border-gold hover:text-gold",
  light: "border border-white/30 text-white hover:bg-white hover:text-ink",
};

export default function BtnLink({ to, href, variant = "gold", children, className = "", ...rest }) {
  const cls = `group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold tracking-wide transition-all duration-500 hover:-translate-y-0.5 ${styles[variant]} ${className}`;
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  return (
    <a href={href} className={cls} target={href?.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}