import { site } from "@/content/site";

export function StatsBar() {
  return (
    <section className="border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        {site.stats.map((stat) => (
          <div key={stat.label} className="text-center lg:text-left">
            <div className="font-display text-3xl font-bold text-accent sm:text-4xl">{stat.value}</div>
            <div className="mt-1 text-sm text-muted">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
