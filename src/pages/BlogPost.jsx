import React, { useMemo } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowRight, ArrowLeft } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useSeo, { breadcrumbSchema } from "@/hooks/useSeo";
import { IMAGES } from "@/lib/site";
import { blogPostingSchemaBuilder } from "@/lib/schema";
import {
  getPost,
  getRelatedPosts,
  formatDate,
} from "@/lib/blogPosts";
import PageHero from "@/components/site/PageHero";
import { Image } from "@/components/ui/image";
import TableOfContents from "@/components/blog/TableOfContents";
import BlogCta from "@/components/blog/BlogCta";
import RelatedPosts from "@/components/blog/RelatedPosts";
import BlogSidebar from "@/components/blog/BlogSidebar";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  const schemas = useMemo(() => {
    if (!post) return [];
    return [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.title, path: `/blog/${post.slug}` },
      ]),
      blogPostingSchemaBuilder(post),
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ];
  }, [post]);

  useSeo({
    title: post?.metaTitle || "Blog | Charm Beauty",
    description: post?.metaDescription || "",
    path: `/blog/${slug}`,
    image: post?.image || IMAGES.hero,
    schemas,
  });

  if (!post) return <Navigate to="/blog" replace />;

  const related = getRelatedPosts(post, 3);

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        breadcrumbs={[
          { name: "Home", to: "/" },
          { name: "Blog", to: "/blog" },
          { name: post.title, to: `/blog/${post.slug}` },
        ]}
      />

      <article className="bg-cream py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-8">
              <div className="flex flex-wrap items-center gap-5 text-sm text-ink/55">
                <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {formatDate(post.date)}</span>
                <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" /> {post.author}</span>
                <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readTime} Min. Lesezeit</span>
              </div>

              <div className="mt-6 overflow-hidden rounded-3xl">
                <div className="aspect-[16/9] bg-cream">
                  <Image src={post.image} alt={post.title} fittingType="fit" className="h-full w-full object-contain" />
                </div>
              </div>

              <div className="mt-8">
                <TableOfContents sections={post.sections} />
              </div>

              <div className="mt-10 space-y-10">
                {post.sections.map((s, i) => (
                  <section key={i} id={`abschnitt-${i}`} className="scroll-mt-28">
                    <h2 className="font-heading text-2xl font-semibold text-ink">{s.heading}</h2>
                    {s.paragraphs?.map((p, j) => (
                      <p key={j} className="mt-4 text-[1.05rem] leading-relaxed text-ink/75">{p}</p>
                    ))}
                    {s.list && (
                      <ul className="mt-4 space-y-2.5">
                        {s.list.map((li, k) => (
                          <li key={k} className="flex gap-3 text-[1.05rem] leading-relaxed text-ink/75">
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                            {li}
                          </li>
                        ))}
                      </ul>
                    )}
                    {s.subheading && (
                      <h3 className="mt-6 font-heading text-xl font-semibold text-ink">{s.subheading}</h3>
                    )}
                    {s.table && (
                      <div className="mt-5 overflow-x-auto rounded-2xl border border-ink/8">
                        <table className="w-full text-left text-sm">
                          <thead className="bg-ink/5">
                            <tr>
                              {s.table.headers.map((h, k) => (
                                <th key={k} className="px-4 py-3 font-semibold text-ink">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {s.table.rows.map((row, r) => (
                              <tr key={r} className="border-t border-ink/8">
                                {row.map((cell, c) => (
                                  <td key={c} className="px-4 py-3 align-top text-ink/75">{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                    {s.callout && (
                      <div className="mt-6 rounded-2xl border border-gold/30 bg-champagne/15 p-5">
                        {s.callout.title && (
                          <p className="font-heading text-base font-semibold text-ink">{s.callout.title}</p>
                        )}
                        {s.callout.text && (
                          <p className="mt-1.5 text-[1.02rem] leading-relaxed text-ink/75">{s.callout.text}</p>
                        )}
                        {s.callout.link && (
                          <Link to={s.callout.link.to} className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-gold-dark">
                            {s.callout.link.label} <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        )}
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {post.faqs?.length > 0 && (
                <div className="mt-12">
                  <h2 className="mb-4 font-heading text-2xl font-semibold text-ink">Häufige Fragen</h2>
                  <Accordion type="single" collapsible className="rounded-2xl border border-ink/8 bg-card">
                    {post.faqs.map((f, i) => (
                      <AccordionItem key={i} value={`faq-${i}`} className="border-b border-ink/8 px-5 last:border-0">
                        <AccordionTrigger className="text-left text-base font-semibold text-ink hover:text-gold">
                          {f.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-[1.05rem] leading-relaxed text-ink/70">
                          {f.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}

              {post.links?.length > 0 && (
                <div className="mt-10 rounded-2xl border border-ink/8 bg-cream/60 p-6">
                  <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">Weiterführende Links</h2>
                  <ul className="flex flex-wrap gap-x-6 gap-y-2">
                    {post.links.map((l, i) => (
                      <li key={i}>
                        <Link to={l.to} className="inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold-dark">
                          {l.label} <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-10">
                <BlogCta />
              </div>

              <div className="mt-14">
                <RelatedPosts posts={related} />
              </div>

              <div className="mt-10">
                <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-ink/70 transition hover:text-gold">
                  <ArrowLeft className="h-4 w-4" /> Zurück zum Blog
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}