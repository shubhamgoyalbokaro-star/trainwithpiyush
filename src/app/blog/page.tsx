import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { blogPosts } from "@/content/site";

export const metadata: Metadata = {
  title: "Blog",
  description: "Fitness tips, fat loss guides, muscle building advice, and coaching insights from Train With Piyush.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Coach's Notebook"
        title="Fitness knowledge that actually helps"
        description="Evidence-based tips on fat loss, muscle building, nutrition, and mindset — no gimmicks, no quick fixes."
      />

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition hover:border-accent/20"
            >
              <div className="h-2 bg-gradient-to-r from-accent/60 to-accent/20" />
              <div className="flex flex-1 flex-col p-8">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {post.category}
                </span>
                <h2 className="mt-3 font-display text-xl font-bold leading-snug group-hover:text-accent transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="flex items-center gap-1 text-xs text-muted">
                    <Clock size={12} /> {post.readTime}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-accent"
                  >
                    Read <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
