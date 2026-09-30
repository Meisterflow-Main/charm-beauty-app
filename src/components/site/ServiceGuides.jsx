import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";
import { getPost } from "@/lib/blogPosts";

export default function ServiceGuides({ slugs = [], title }) {
  const posts = slugs.map(getPost).filter(Boolean);
  if (posts.length === 0) return null;
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal><Eyebrow>Ratgeber</Eyebrow></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 max-w-2xl text-4xl font-semibold text-ink sm:text-5xl">{title}: Wissen und Tipps</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link
                to={`/blog/${p.slug}`}
                className="group flex h-full flex-col rounded-[2rem] border border-ink/5 bg-white/70 p-8 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-gold/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-champagne/30 text-gold"><BookOpen className="h-5 w-5" /></span>
                <h3 className="mt-5 text-xl font-semibold text-ink">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{p.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition group-hover:gap-3">Zum Ratgeber <ArrowRight className="h-4 w-4" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}