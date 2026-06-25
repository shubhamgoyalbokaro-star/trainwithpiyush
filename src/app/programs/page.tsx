import type { Metadata } from "next";
import { Check, X, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaSection } from "@/components/CtaSection";
import { MapsButton } from "@/components/LocationLink";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Programs",
  description: "Personal training, online transformation coaching, and body transformation programs by Train With Piyush.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Coaching designed for real life"
        description="Three paths — one goal: help you lose fat, build muscle, and create habits that last. All programs include nutrition guidance and ongoing support."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {site.programs.map((program, i) => (
            <article
              key={program.id}
              id={program.id}
              className="scroll-mt-24 luxury-card overflow-hidden"
            >
              <div className="grid lg:grid-cols-5">
                <div className="lg:col-span-2 bg-surface p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border">
                  <span className="text-xs font-medium uppercase tracking-wider text-accent-soft">
                    Program {i + 1}
                  </span>
                  <h2 className="mt-2 font-display text-3xl font-bold">{program.name}</h2>
                  <p className="mt-2 text-muted">{program.tagline}</p>
                  <p className="mt-6 text-2xl font-display font-semibold tracking-tight text-foreground">{program.pricing}</p>
                </div>

                <div className="lg:col-span-3 p-10">
                  <p className="text-muted leading-relaxed">{program.description}</p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {[
                      ["Format", program.format],
                      ["Session", program.sessionLength],
                      ["Frequency", program.frequency],
                      ["Duration", program.duration],
                      ["Location", program.location],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-2xl bg-surface p-4">
                        <dt className="text-xs uppercase tracking-wider text-muted">{label}</dt>
                        <dd className="mt-1 font-medium">
                          {label === "Location" && value !== "Worldwide" ? (
                            <a
                              href={site.mapsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group inline-flex items-start gap-1.5 text-foreground transition hover:underline"
                            >
                              <MapPin size={14} className="mt-0.5 shrink-0 text-accent-soft" />
                              <span>
                                {value}
                                <span className="mt-1 block text-xs font-normal text-muted group-hover:text-accent/80">
                                  {site.address.full}
                                </span>
                              </span>
                            </a>
                          ) : (
                            value
                          )}
                        </dd>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-medium text-accent-soft">
                        <Check size={14} /> Best for
                      </h4>
                      <p className="mt-2 text-sm text-muted">{program.bestFor}</p>
                    </div>
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-semibold text-muted">
                        <X size={14} /> Not ideal for
                      </h4>
                      <p className="mt-2 text-sm text-muted">{program.notIdeal}</p>
                    </div>
                  </div>

                  <h4 className="mt-8 font-semibold">What&apos;s included</h4>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {program.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted">
                        <Check size={14} className="shrink-0 text-accent-soft" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 luxury-card p-8">
          <h3 className="font-display text-xl font-bold">{site.introOffer}</h3>
          <p className="mt-2 text-muted">
            Discuss your goals, lifestyle, and training history. Get a clear recommendation — no pressure, no obligation.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
            <MapsButton />
            <p className="text-sm text-muted">{site.address.full}</p>
          </div>
          <p className="mt-4 text-sm text-muted">
            <strong className="text-foreground">Payments accepted:</strong> {site.payments.join(" · ")}
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
