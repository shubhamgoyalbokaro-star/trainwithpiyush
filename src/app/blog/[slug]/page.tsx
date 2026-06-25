import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { blogPosts } from "@/content/site";
import { CtaSection } from "@/components/CtaSection";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function renderContent(content: string) {
  return content.split("\n\n").map((block, i) => {
    if (block.startsWith("**") && block.includes("**")) {
      const parts = block.split(/\*\*(.*?)\*\*/g);
      return (
        <p key={i} className="prose-blog">
          {parts.map((part, j) =>
            j % 2 === 1 ? <strong key={j}>{part}</strong> : part
          )}
        </p>
      );
    }
    return (
      <p key={i} className="prose-blog">
        {block}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <article className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground"
        >
          <ArrowLeft size={14} /> Back to blog
        </Link>

        <div className="mt-8">
          <span className="text-xs font-medium uppercase tracking-wider text-accent-soft">
            {post.category}
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-muted">
            <span>{new Date(post.date).toLocaleDateString("en-IN", { dateStyle: "long" })}</span>
            <span className="flex items-center gap-1">
              <Clock size={14} /> {post.readTime}
            </span>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-12">
          {renderContent(post.content)}
        </div>
      </article>

      <CtaSection
        title="Want personalized guidance?"
        description="Book a free 30-minute consultation and get a plan built for your goals."
      />
    </>
  );
}
