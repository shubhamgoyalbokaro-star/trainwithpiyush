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
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="luxury-card mx-auto max-w-3xl p-10 text-center sm:p-16">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">{description}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary px-8 py-4">
              {site.ctas.secondary}
              <ArrowRight size={18} />
            </Link>
            <Link href="/assessment" className="btn-secondary px-8 py-4">
              {site.ctas.assessment}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
