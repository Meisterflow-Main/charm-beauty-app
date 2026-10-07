import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { formatDate } from "@/lib/blogPosts";

export default function BlogCard({ post }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-ink/8 bg-card shadow-[0_8px_40px_-24px_rgba(4,21,31,0.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_50px_-24px_rgba(4,21,31,0.35)]">
      <Link to={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-cream">
        <Image
          src={post.image}
          alt={post.title}
          fittingType="fit"
          className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold backdrop-blur">
          {post.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-4 text-xs text-ink/50">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" /> {formatDate(post.date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" /> {post.readTime} Min.
          </span>
        </div>
        <h3 className="mt-3 font-heading text-xl font-semibold leading-snug text-ink">
          <Link to={`/blog/${post.slug}`} className="transition-colors hover:text-gold">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">{post.excerpt}</p>
        <Link
          to={`/blog/${post.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-dark"
        >
          Artikel lesen <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}