import type { Metadata } from "next";
import { Share2, Mail, Phone, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { LocationLink, MapsButton } from "@/components/LocationLink";
import { site } from "@/content/site";
import { formatWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact & Book",
  description: `Book a free consultation with ${site.coachName}. Personal training in Bokaro and online coaching worldwide.`,
};

export default function ContactPage() {
  const whatsappHref = formatWhatsAppLink(
    site.whatsapp,
    "Hi Piyush! I'd like to book my free fitness consultation."
  );

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start your transformation"
        description={site.introOffer}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold">Get in touch</h2>
            <p className="mt-4 text-muted">
              Response time: <strong className="text-foreground">{site.responseTime}</strong>.
              Reach out via form, WhatsApp, Instagram, or email.
            </p>

            <ul className="mt-8 space-y-5">
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 rounded-xl border border-[#25D366]/30 bg-[#25D366]/5 p-4 transition hover:bg-[#25D366]/10"
                >
                  <Phone size={20} className="mt-0.5 text-[#25D366]" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-sm text-muted">{site.phone}</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail size={18} className="mt-0.5 text-accent-soft" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href={`mailto:${site.email}`} className="text-muted hover:text-foreground">
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Share2 size={18} className="mt-0.5 text-accent-soft" />
                <div>
                  <p className="font-semibold">Instagram</p>
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground">
                    {site.instagramHandle}
                  </a>
                </div>
              </li>
              <li>
                <LocationLink variant="card" showFullAddress />
              </li>
              <li>
                <MapsButton className="w-full justify-center sm:w-auto" />
              </li>
              <li className="text-sm text-muted">{site.serviceArea}</li>
              <li className="flex items-start gap-3 text-sm">
                <Clock size={18} className="mt-0.5 text-accent-soft" />
                <div>
                  <p className="font-semibold">Hours</p>
                  <p className="text-muted">{site.businessHours}</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold">Free consultation includes</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>· Goal and lifestyle discussion</li>
                <li>· Training experience review</li>
                <li>· Nutrition habits overview</li>
                <li>· Program recommendation</li>
                <li>· Clear next steps — no pressure</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="luxury-card p-8">
              <h2 className="font-display text-xl font-bold">Send a message</h2>
              <p className="mt-2 text-sm text-muted">
                Fill out the form and it will open WhatsApp with your details pre-filled.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
