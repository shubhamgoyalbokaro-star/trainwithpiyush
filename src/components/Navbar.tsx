import Link from "next/link";
import { site, navLinks } from "@/content/site";
import { MobileNav } from "./MobileNav";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-xs font-bold text-background">
            TP
          </span>
          <div className="leading-tight">
            <span className="font-display text-sm font-bold tracking-wide text-foreground group-hover:text-accent transition-colors">
              TRAINWITHPIYUSH
            </span>
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-muted">
              {site.tagline}
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-card hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/assessment"
            className="hidden sm:inline-flex rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:border-accent/50 hover:text-accent"
          >
            Fit Assessment
          </Link>
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-accent px-4 py-2 text-sm font-semibold text-background transition hover:bg-accent-dim"
          >
            {site.ctas.primary}
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
