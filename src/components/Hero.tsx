import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden grain">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm text-accent">
            <Sparkles size={14} />
            <span>Certified Coach · Chas, Bokaro & Worldwide Online</span>
          </div>

          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
            {site.heroHeadline.split("Dream Physique").map((part, i) =>
              i === 0 ? (
                <span key={i}>
                  {part}
                  <span className="text-gradient">Dream Physique</span>
                </span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {site.heroSubheadline}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold text-background transition hover:bg-accent-dim glow-accent"
            >
              {site.ctas.primary}
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/assessment"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-base font-semibold transition hover:border-accent/40 hover:text-accent"
            >
              {site.ctas.assessment}
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {site.trustBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
