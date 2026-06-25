import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${site.coachName} — certified personal trainer and online fitness coach based in ${site.location}.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={`Meet ${site.coachName}`}
        description={site.shortBio}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold">The journey</h2>
            <div className="mt-4 space-y-4 text-muted leading-relaxed whitespace-pre-line">
              {site.longBio.journey}
            </div>

            <h2 className="mt-12 font-display text-2xl font-bold">Why he coaches</h2>
            <div className="mt-4 space-y-4 text-muted leading-relaxed whitespace-pre-line">
              {site.longBio.why}
            </div>

            <blockquote className="mt-8 border-l-4 border-accent pl-6 font-light italic text-foreground/90">
              &ldquo;{site.longBio.drives}&rdquo;
            </blockquote>
          </div>

          <div>
            <div className="luxury-card p-8">
              <h3 className="font-display text-xl font-bold">Credentials</h3>
              <dl className="mt-6 space-y-4">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted">Experience</dt>
                  <dd className="mt-1 font-medium">{site.credentials.experience}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted">Personal journey</dt>
                  <dd className="mt-1 font-medium">{site.credentials.personalJourney}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted">Clients coached</dt>
                  <dd className="mt-1 font-medium">{site.credentials.totalClients}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted">Retention</dt>
                  <dd className="mt-1 font-medium">{site.credentials.retention}</dd>
                </div>
              </dl>

              <h4 className="mt-8 font-semibold">Certifications</h4>
              <ul className="mt-4 space-y-3">
                {site.credentials.certs.map((cert) => (
                  <li key={cert.name} className="text-sm">
                    <span className="font-medium text-foreground">{cert.name}</span>
                    <span className="block text-muted">{cert.org} · {cert.year}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-card p-8">
              <h3 className="font-display text-xl font-bold">Beyond the gym</h3>
              <ul className="mt-4 space-y-2">
                {site.longBio.personal.map((fact) => (
                  <li key={fact} className="flex items-start gap-2 text-sm text-muted">
                    <Check size={14} className="mt-0.5 shrink-0 text-accent-soft" />
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="luxury-card p-8 ring-1 ring-blue-100">
              <h3 className="font-display text-xl font-semibold text-accent">Ideal for</h3>
              <ul className="mt-4 space-y-2">
                {site.method.idealFor.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted">
                    <Check size={14} className="text-accent-soft" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="luxury-card p-8">
              <h3 className="font-display text-xl font-bold">Not the right fit for</h3>
              <ul className="mt-4 space-y-2">
                {site.method.notFor.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted">
                    <X size={14} className="text-muted" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
