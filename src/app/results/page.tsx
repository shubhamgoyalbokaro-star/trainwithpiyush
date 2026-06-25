import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CtaSection } from "@/components/CtaSection";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Results",
  description: "Real client transformations — fat loss, muscle gain, and lifestyle change with Train With Piyush.",
};

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Success Stories"
        title="Real clients. Real numbers."
        description="No miracle claims — just consistent coaching, sustainable nutrition, and accountability that delivers measurable results."
      />

      <section className="border-b border-border bg-surface py-12">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-8 px-4 sm:px-6 lg:px-8">
          {[
            { value: "30+", label: "Clients Coached" },
            { value: "20+ kg", label: "Combined Client Fat Loss" },
            { value: "6 mo", label: "Average Retention" },
            { value: "3", label: "Featured Transformations" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-semibold tracking-tight text-foreground">{s.value}</div>
              <div className="text-sm text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {site.testimonials.map((story) => (
            <TestimonialCard key={story.name} story={story} />
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-dashed border-border bg-surface p-10 text-center">
          <p className="font-display text-lg font-semibold">Transformation gallery coming soon</p>
          <p className="mt-2 text-sm text-muted">
            Before/after photos and videos will be added once assets are uploaded to the media folder.
          </p>
        </div>
      </section>

      <CtaSection title="Your transformation could be next" />
    </>
  );
}
