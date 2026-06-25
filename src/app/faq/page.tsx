import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { FaqSearch } from "@/components/FaqSearch";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about personal training, online coaching, nutrition, and booking with Train With Piyush.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions? We've got answers."
        description="Search our knowledge base or browse common questions about programs, nutrition, online coaching, and getting started."
      />

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <FaqSearch />
      </section>

      <CtaSection
        title="Still have questions?"
        description="Book a free 30-minute consultation — no pressure, just clarity on your next step."
      />
    </>
  );
}
