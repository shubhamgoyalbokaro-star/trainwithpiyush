import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "The Piyush Method",
  description: "Five pillars of sustainable transformation — progressive overload, nutrition, technique, consistency, and recovery.",
};

export default function MethodPage() {
  return (
    <>
      <PageHero
        eyebrow="Coaching Philosophy"
        title={site.method.name}
        description={site.method.tagline}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="max-w-3xl text-lg leading-relaxed text-muted">{site.method.philosophy}</p>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {site.method.pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="group luxury-card p-8 transition hover:luxury-shadow"
            >
              <span className="font-display text-5xl font-light text-accent-soft-light transition group-hover:text-accent-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold">What Piyush does differently</h2>
          <div className="mt-10 overflow-x-auto rounded-2xl luxury-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th className="p-4 text-left font-medium text-muted">Others often...</th>
                  <th className="p-4 text-left font-medium text-foreground">Piyush instead...</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Generic 4-day splits for everyone", "Custom plans by goal, schedule, and experience"],
                  ["Extreme cardio and starvation", "Calorie-aware nutrition you can maintain"],
                  ["Just follow the plan", "Education so you understand why"],
                  ["Quick-fix marketing", "Honest timelines and real accountability"],
                  ["Ignore injuries", "Modified programming and medical referral when needed"],
                ].map(([others, piyush]) => (
                  <tr key={others} className="border-b border-border last:border-0">
                    <td className="p-4 text-muted">{others}</td>
                    <td className="p-4 text-foreground">{piyush}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="luxury-card p-8 ring-1 ring-blue-100">
            <h3 className="font-display text-xl font-semibold text-accent">Who it&apos;s for</h3>
            <ul className="mt-6 space-y-3">
              {site.method.idealFor.map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted">
                  <Check size={16} className="shrink-0 text-accent-soft" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="font-display text-xl font-bold">Who it&apos;s not for</h3>
            <ul className="mt-6 space-y-3">
              {site.method.notFor.map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted">
                  <X size={16} className="shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-center">Coach&apos;s voice</h2>
          <div className="mt-8 space-y-6">
            {site.aiVoice.samples.map((sample) => (
              <div key={sample.q} className="luxury-card p-6">
                <p className="font-medium text-accent-soft">{sample.q}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{sample.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
