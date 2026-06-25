import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden hero-glow bg-card">
      <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36 lg:px-8 lg:py-44">
        <div className="mx-auto max-w-4xl text-center lg:text-left">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span>Certified Coach · Chas, Bokaro & Worldwide Online</span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-7xl">
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

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl lg:mx-0">
            {site.heroSubheadline}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <Link href="/contact" className="btn-primary px-8 py-4 text-base">
              {site.ctas.primary}
              <ArrowRight size={18} />
            </Link>
            <Link href="/assessment" className="btn-secondary px-8 py-4 text-base">
              {site.ctas.assessment}
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2 lg:justify-start">
            {site.trustBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-foreground shadow-sm"
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
