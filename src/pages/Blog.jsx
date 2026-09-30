import React, { useMemo, useState } from "react";
import { Search } from "lucide-react";
import useSeo, { breadcrumbSchema } from "@/hooks/useSeo";
import { IMAGES, SITE_URL } from "@/lib/site";
import { BLOG_POSTS, getUsedCategories } from "@/lib/blogPosts";
import BlogHero from "@/components/blog/BlogHero";
import BlogControls from "@/components/blog/BlogControls";
import BlogCard from "@/components/blog/BlogCard";
import BlogSidebar from "@/components/blog/BlogSidebar";

export default function Blog() {
  useSeo({
    title: "Blog | Charm Beauty Winterthur | Hautpflege, Tipps & Ratgeber",
    description:
      "Der Charm Beauty Blog: Ratgeber, Tipps und Anleitungen rund um Gesichtspflege, Körperbehandlungen und das Kosmetikstudio in Winterthur. Jetzt lesen und informiert pflegen.",
    path: "/blog",
    image: IMAGES.welcome,
    schemas: [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Charm Beauty Blog",
        url: `${SITE_URL}/blog`,
        publisher: { "@id": `${SITE_URL}/#business` },
        blogPost: BLOG_POSTS.map((p) => ({
          "@type": "BlogPosting",
          headline: p.title,
          url: `${SITE_URL}/blog/${p.slug}`,
          datePublished: p.date,
          author: { "@type": "Person", name: p.author, url: `${SITE_URL}/uber-uns` },
        })),
      },
    ],
  });

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Alle");
  const [sort, setSort] = useState("newest");
  const categories = useMemo(() => getUsedCategories(), []);

  const filtered = useMemo(() => {
    let list = [...BLOG_POSTS];
    if (category !== "Alle") list = list.filter((p) => p.category === category);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    list.sort((a, b) =>
      sort === "newest"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date)
    );
    return list;
  }, [query, category, sort]);

  return (
    <>
      <BlogHero />
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <BlogControls
                query={query}
                setQuery={setQuery}
                category={category}
                setCategory={setCategory}
                sort={sort}
                setSort={setSort}
                categories={categories}
              />

              {filtered.length === 0 ? (
                <div className="mt-10 rounded-3xl border border-dashed border-ink/15 bg-card/50 p-12 text-center">
                  <Search className="mx-auto h-8 w-8 text-ink/30" />
                  <p className="mt-4 font-heading text-lg font-semibold text-ink">Keine Artikel gefunden</p>
                  <p className="mt-2 text-sm text-ink/60">
                    Versuche einen anderen Suchbegriff oder eine andere Kategorie.
                  </p>
                  <button
                    onClick={() => { setQuery(""); setCategory("Alle"); }}
                    className="mt-5 inline-flex rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gold-dark"
                  >
                    Filter zurücksetzen
                  </button>
                </div>
              ) : (
                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  {filtered.map((p) => (
                    <BlogCard key={p.slug} post={p} />
                  ))}
                </div>
              )}
            </div>

            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <BlogSidebar categories={categories} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}