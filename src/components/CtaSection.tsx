import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";

export function CtaSection({
  title = "Ready to build your dream physique?",
  description = site.introOffer,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-accent/20 bg-card p-10 text-center sm:p-16">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">{description}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-bold text-background transition hover:bg-accent-dim"
            >
              {site.ctas.secondary}
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/assessment"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 font-semibold transition hover:border-accent/40 hover:text-accent"
            >
              {site.ctas.assessment}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
