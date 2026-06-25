"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/content/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="rounded-lg p-2 text-foreground hover:bg-card"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <div className="fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-lg font-medium text-foreground hover:bg-card"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-accent px-4 py-3 text-center font-semibold text-background"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
