import { Quote } from "lucide-react";
import { site } from "@/content/site";

type Testimonial = (typeof site.testimonials)[number];

export function TestimonialCard({ story }: { story: Testimonial }) {
  return (
    <article className="luxury-card flex h-full flex-col p-8">
      <Quote size={24} className="text-accent-soft-light" />
      <blockquote className="mt-4 flex-1 text-base font-light leading-relaxed text-foreground/85">
        &ldquo;{story.quote}&rdquo;
      </blockquote>

      <div className="mt-6 border-t border-border pt-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-sm font-semibold text-accent-soft">
            {story.name.charAt(0)}
          </div>
          <div>
            <p className="font-medium">{story.name}</p>
            <p className="text-xs text-muted">{story.program} · {story.timeframe}</p>
          </div>
        </div>

        <ul className="mt-4 flex flex-wrap gap-2">
          {story.results.map((r) => (
            <li
              key={r}
              className="rounded-full bg-surface px-3 py-1 text-xs text-muted"
            >
              {r}
            </li>
          ))}
        </ul>

        {story.hasMedia && story.mediaNote && (
          <p className="mt-3 text-xs font-medium text-accent-soft">{story.mediaNote}</p>
        )}
      </div>
    </article>
  );
}
