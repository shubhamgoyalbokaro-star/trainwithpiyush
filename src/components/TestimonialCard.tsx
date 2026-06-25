import { Quote } from "lucide-react";
import { site } from "@/content/site";

type Testimonial = (typeof site.testimonials)[number];

export function TestimonialCard({ story }: { story: Testimonial }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition hover:border-accent/20">
      <Quote size={28} className="text-accent/60" />
      <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground/90">
        &ldquo;{story.quote}&rdquo;
      </blockquote>

      <div className="mt-6 border-t border-border pt-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 font-display text-sm font-bold text-accent">
            {story.name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold">{story.name}</p>
            <p className="text-xs text-muted">{story.program} · {story.timeframe}</p>
          </div>
        </div>

        <ul className="mt-4 flex flex-wrap gap-2">
          {story.results.map((r) => (
            <li
              key={r}
              className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted"
            >
              {r}
            </li>
          ))}
        </ul>

        {story.hasMedia && story.mediaNote && (
          <p className="mt-3 text-xs text-accent">{story.mediaNote}</p>
        )}
      </div>
    </article>
  );
}
