import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";

export default function PageHero({ eyebrow, title, intro, crumb, breadcrumbs }) {
  const trail = breadcrumbs ?? [{ name: "Home", to: "/" }, { name: crumb }];
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-36 sm:pt-44">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-champagne/25 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.16em] text-ink/50">
            {trail.flatMap((item, i) => {
              const isLast = i === trail.length - 1;
              const nodes = [];
              if (i > 0) nodes.push(<li key={`sep-${i}`}><ChevronRight className="h-3 w-3" /></li>);
              nodes.push(
                <li key={`item-${i}`} aria-current={isLast ? "page" : undefined} className={isLast ? "text-ink" : ""}>
                  {item.to && !isLast ? <Link to={item.to} className="hover:text-gold">{item.name}</Link> : <span>{item.name}</span>}
                </li>
              );
              return nodes;
            })}
          </ol>
        </nav>
        <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] text-ink sm:text-7xl">{title}</h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/70">{intro}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}