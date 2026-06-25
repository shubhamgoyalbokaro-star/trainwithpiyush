import { MapPin, ExternalLink } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

type LocationLinkProps = {
  variant?: "inline" | "card";
  showFullAddress?: boolean;
  className?: string;
};

export function LocationLink({
  variant = "inline",
  showFullAddress = false,
  className,
}: LocationLinkProps) {
  const content = showFullAddress ? (
    <>
      <span className="font-medium text-foreground">{site.gym}</span>
      <span className="mt-1 block">{site.address.line1}</span>
      <span className="block">{site.address.line2}</span>
      <span className="block">{site.address.city}</span>
    </>
  ) : (
    <>
      <span className="font-medium text-foreground">{site.gym}</span>
      <span className="block">{site.location}</span>
    </>
  );

  if (variant === "card") {
    return (
      <a
        href={site.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition hover:border-accent/30 hover:bg-card-hover",
          className
        )}
      >
        <MapPin size={20} className="mt-0.5 shrink-0 text-accent" />
        <div className="flex-1 text-sm text-muted">
          {content}
          <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-accent">
            Open in Google Maps
            <ExternalLink size={12} className="transition group-hover:translate-x-0.5" />
          </span>
        </div>
      </a>
    );
  }

  return (
    <a
      href={site.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-start gap-2 text-sm text-muted transition hover:text-accent",
        className
      )}
    >
      <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
      <span>
        {showFullAddress ? (
          <>
            {site.address.full}
            <span className="mt-1 flex items-center gap-1 text-xs font-semibold text-accent">
              View on Google Maps
              <ExternalLink size={11} />
            </span>
          </>
        ) : (
          <>
            {site.location} · {site.gym}
            <span className="ml-1 inline-flex items-center gap-0.5 text-xs text-accent opacity-0 transition group-hover:opacity-100">
              <ExternalLink size={10} />
            </span>
          </>
        )}
      </span>
    </a>
  );
}

export function MapsButton({ className }: { className?: string }) {
  return (
    <a
      href={site.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition hover:border-accent/40 hover:text-accent",
        className
      )}
    >
      <MapPin size={16} className="text-accent" />
      Get Directions
    </a>
  );
}
