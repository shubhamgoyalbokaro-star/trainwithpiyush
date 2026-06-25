import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Program } from "@/content/site";

export function ProgramCard({ program, index }: { program: Program; index: number }) {
  return (
    <article
      className={`luxury-card group relative flex flex-col p-8 ${
        program.featured ? "lg:scale-[1.02] luxury-shadow ring-1 ring-black/[0.04]" : ""
      }`}
    >
      {index === 0 && (
        <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">
          Most Popular
        </span>
      )}

      <p className="text-xs font-medium uppercase tracking-wider text-accent-soft">{program.format}</p>
      <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">{program.name}</h3>
      <p className="mt-1 text-sm text-muted">{program.tagline}</p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{program.oneLiner}</p>

      <ul className="mt-6 space-y-2.5">
        {program.includes.slice(0, 4).map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
            <Check size={14} className="shrink-0 text-accent-soft" />
            {item}
          </li>
        ))}
        {program.includes.length > 4 && (
          <li className="text-xs text-muted">+{program.includes.length - 4} more included</li>
        )}
      </ul>

      <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
        <span className="text-sm font-medium text-muted">{program.pricing}</span>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition group-hover:gap-2"
        >
          Learn more <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}
