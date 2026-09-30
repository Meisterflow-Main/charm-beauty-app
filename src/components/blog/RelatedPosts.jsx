import React from "react";
import BlogCard from "@/components/blog/BlogCard";

export default function RelatedPosts({ posts }) {
  if (!posts.length) return null;
  return (
    <div>
      <h2 className="mb-6 font-heading text-2xl font-semibold text-ink">Verwandte Artikel</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <BlogCard key={p.slug} post={p} />
        ))}
      </div>
    </div>
  );
}