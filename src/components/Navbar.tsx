import Link from "next/link";
import { site, navLinks } from "@/content/site";
import { MobileNav } from "./MobileNav";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 glass-nav">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-navy text-[10px] font-bold text-white">
            TP
          </span>
          <div className="leading-tight">
            <span className="text-sm font-semibold tracking-tight text-foreground">
              Train With Piyush
            </span>
            <span className="hidden sm:block text-[10px] font-medium text-muted">
              {site.tagline}
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-surface hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <Link
            href="/assessment"
            className="hidden sm:inline-flex btn-secondary px-4 py-2 text-sm"
          >
            Fit Assessment
          </Link>
          <Link href="/contact" className="btn-primary px-4 py-2 text-sm">
            {site.ctas.primary}
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
