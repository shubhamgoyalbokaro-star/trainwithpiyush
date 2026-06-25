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
          "group flex items-start gap-3 luxury-card p-4 transition hover:luxury-shadow",
          className
        )}
      >
        <MapPin size={20} className="mt-0.5 shrink-0 text-accent-soft" />
        <div className="flex-1 text-sm font-light text-muted">
          {content}
          <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-foreground">
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
        "group inline-flex items-start gap-2 text-sm font-light text-muted transition hover:text-foreground",
        className
      )}
    >
      <MapPin size={16} className="mt-0.5 shrink-0 text-accent-soft" />
      <span>
        {showFullAddress ? (
          <>
            {site.address.full}
            <span className="mt-1 flex items-center gap-1 text-xs font-medium text-foreground">
              View on Google Maps
              <ExternalLink size={11} />
            </span>
          </>
        ) : (
          <>
            {site.location} · {site.gym}
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
      className={cn("btn-secondary", className)}
    >
      <MapPin size={16} className="text-accent-soft" />
      Get Directions
    </a>
  );
}
