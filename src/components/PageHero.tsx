import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function PageHero({ eyebrow, title, description, className }: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden border-b border-border grain", className)}>
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        {eyebrow && (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>
        )}
      </div>
    </section>
  );
}
