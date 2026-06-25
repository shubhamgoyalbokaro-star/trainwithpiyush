import Link from "next/link";
import { ArrowRight, Target, Users, Zap } from "lucide-react";
import { Hero } from "@/components/Hero";
import { StatsBar } from "@/components/StatsBar";
import { SectionHeader } from "@/components/SectionHeader";
import { ProgramCard } from "@/components/ProgramCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CtaSection } from "@/components/CtaSection";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="The Piyush Method"
          title="Five pillars. One transformation system."
          description={site.method.philosophy}
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {site.method.pillars.map((pillar, i) => (
            <div key={pillar.title} className="luxury-card p-6">
              <span className="font-display text-3xl font-light text-accent-soft-light">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-tight">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/method"
            className="inline-flex items-center gap-2 font-medium text-foreground hover:gap-3 transition-all"
          >
            Explore the full method <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Programs"
            title="Coaching built around your life"
            description="In-person at The Dream Physique Gym, Chas — or online worldwide. Every program includes personalized training and nutrition support."
            align="center"
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {site.programs.map((program, i) => (
              <ProgramCard key={program.id} program={program} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Train With Piyush"
          title="Not a template. Not a generic plan."
          description="Personalized coaching for busy professionals who want real results — without crash diets or one-size-fits-all workouts."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Personalized to you",
              desc: "Every plan is built around your goals, schedule, experience, and equipment — not a PDF everyone gets.",
            },
            {
              icon: Users,
              title: "Real accountability",
              desc: "Weekly check-ins, WhatsApp support, and progress tracking keep you consistent when motivation fades.",
            },
            {
              icon: Zap,
              title: "Proven transformations",
              desc: "30+ clients coached with measurable results — fat loss, muscle gain, and full lifestyle change.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="luxury-card p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface">
                <Icon className="text-accent-soft" size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Real Results"
            title="Transformations that speak for themselves"
            description="Real clients. Real numbers. No miracle claims — just consistent coaching and sustainable habits."
            align="center"
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {site.testimonials.map((story) => (
              <TestimonialCard key={story.name} story={story} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/results"
              className="inline-flex items-center gap-2 font-medium text-foreground"
            >
              View all success stories <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="luxury-card overflow-hidden">
          <div className="hero-glow grid gap-8 p-10 lg:grid-cols-2 lg:items-center lg:p-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-soft">AI Fit Assessment</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Not sure which program fits you?
              </h2>
              <p className="mt-4 text-muted">
                Take the 2-minute AI-powered assessment. Get a personalized program recommendation and book your free consultation.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link href="/assessment" className="btn-primary px-8 py-4">
                {site.ctas.assessment}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
