"use client";

import { useState, useMemo } from "react";
import { Search, Sparkles, Bot } from "lucide-react";
import { site } from "@/content/site";
import { searchFaqs } from "@/lib/assessment";

export function FaqSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => searchFaqs(query, site.faqs), [query]);

  return (
    <div>
      <div className="relative mx-auto max-w-xl">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask anything — fat loss, online coaching, beginners..."
          className="w-full rounded-2xl border border-border bg-card py-4 pl-12 pr-4 text-foreground placeholder:text-muted focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30"
        />
        <div className="mt-2 flex items-center justify-center gap-2 text-xs text-muted">
          <Sparkles size={12} className="text-accent" />
          AI-powered search across {site.faqs.length} answers
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-3xl space-y-4">
        {results.length === 0 && query ? (
          <div className="rounded-2xl border border-border bg-card p-8 text-center">
            <Bot className="mx-auto text-accent" size={32} />
            <p className="mt-4 font-medium">No exact match found</p>
            <p className="mt-2 text-sm text-muted">
              For medical, injury, or supplement questions, please book a free consultation with Piyush directly.
            </p>
          </div>
        ) : (
          results.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border border-border bg-card open:border-accent/20"
            >
              <summary className="cursor-pointer list-none p-6 font-semibold marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {faq.q}
                  <span className="text-accent transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <div className="border-t border-border px-6 pb-6 pt-2 text-sm leading-relaxed text-muted">
                {faq.a}
              </div>
            </details>
          ))
        )}
      </div>
    </div>
  );
}
