import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FitAssessment } from "@/components/FitAssessment";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "AI Fit Assessment",
  description: "Take the free AI-powered fitness assessment and get a personalized program recommendation from Train With Piyush.",
};

export default function AssessmentPage() {
  return (
    <>
      <PageHero
        eyebrow="AI-Powered"
        title="Find your perfect coaching path"
        description="Answer 7 quick questions. Get a personalized program recommendation based on your goals, schedule, and commitment level."
      />

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <FitAssessment />

        <div className="mx-auto mt-16 max-w-2xl luxury-card p-6 text-center text-sm font-light text-muted">
          <p>{site.disclaimer}</p>
          <p className="mt-2">
            This assessment provides coaching recommendations only — not medical advice.
            For injuries or medical conditions, please consult a healthcare professional.
          </p>
        </div>
      </section>
    </>
  );
}
