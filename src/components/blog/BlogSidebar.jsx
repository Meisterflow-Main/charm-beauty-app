import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Phone, Sparkles } from "lucide-react";
import { Image } from "@/components/ui/image";
import { CONTACT } from "@/lib/site";
import { getNewestPosts, getPopularPosts, getUsedCategories, formatDate } from "@/lib/blogPosts";

function SidebarList({ title, posts }) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">{title}</h3>
      <ul className="space-y-4">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link to={`/blog/${p.slug}`} className="group flex gap-3">
              <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl">
                <Image src={p.image} alt={p.title} fittingType="fill" className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="min-w-0">
                <p className="line-clamp-2 text-sm font-semibold leading-snug text-ink transition-colors group-hover:text-gold">
                  {p.title}
                </p>
                <p className="mt-1 text-xs text-ink/50">{formatDate(p.date)}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function BlogSidebar({ categories }) {
  const usedCats = categories || getUsedCategories();
  return (
    <aside className="space-y-8">
      <SidebarList title="Neueste Beiträge" posts={getNewestPosts(5)} />
      <SidebarList title="Beliebte Beiträge" posts={getPopularPosts(4)} />

      <div>
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">Kategorien</h3>
        <ul className="space-y-2">
          {usedCats.map((c) => (
            <li key={c}>
              <Link to="/blog" className="text-sm text-ink/70 transition hover:text-gold">
                {c}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-3xl bg-ink p-6 text-cream">
        <Sparkles className="h-6 w-6 text-champagne" />
        <h3 className="mt-3 font-heading text-lg font-semibold">Noch Fragen?</h3>
        <p className="mt-2 text-sm text-cream/70">
          Vereinbare deinen Termin oder stell mir deine Fragen, persönlich, per Telefon oder WhatsApp.
        </p>
        <div className="mt-5 space-y-2">
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full bg-gold px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gold-dark">
            <MessageCircle className="h-4 w-4" /> Termin buchen
          </a>
          <a href={CONTACT.phoneHref} className="flex items-center gap-2 rounded-full border border-cream/20 px-4 py-2.5 text-sm font-semibold text-cream transition hover:bg-cream/10">
            <Phone className="h-4 w-4" /> {CONTACT.phone}
          </a>
        </div>
      </div>
    </aside>
  );
}