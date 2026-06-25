import Link from "next/link";
import { Share2, Mail, Phone } from "lucide-react";
import { site, navLinks } from "@/content/site";
import { LocationLink } from "@/components/LocationLink";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="text-lg font-semibold tracking-tight text-foreground">
              Train With <span className="text-accent">Piyush</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">{site.shortBio}</p>
            <p className="mt-4 text-xs leading-relaxed text-muted/80">{site.disclaimer}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted transition hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
              Programs
            </h3>
            <ul className="mt-4 space-y-2.5">
              {site.programs.map((p) => (
                <li key={p.id}>
                  <Link href="/programs" className="text-sm text-muted transition hover:text-foreground">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted">
                <Mail size={16} className="mt-0.5 shrink-0 text-accent-soft" />
                <a href={`mailto:${site.email}`} className="hover:text-foreground transition-colors">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <Phone size={16} className="mt-0.5 shrink-0 text-accent-soft" />
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-foreground transition-colors">
                  {site.phone}
                </a>
              </li>
              <li>
                <LocationLink showFullAddress className="text-muted hover:text-foreground" />
              </li>
              <li className="text-xs text-muted">{site.serviceArea}</li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <Share2 size={16} className="mt-0.5 shrink-0 text-accent-soft" />
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  {site.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted">
            <Link href="/faq" className="hover:text-foreground">FAQ</Link>
            <Link href="/contact" className="hover:text-foreground">Privacy & Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
