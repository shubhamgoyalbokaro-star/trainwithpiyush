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
          className="w-full rounded-2xl border border-border bg-white py-4 pl-12 pr-4 text-foreground shadow-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-foreground/5"
        />
        <div className="mt-2 flex items-center justify-center gap-2 text-xs text-muted">
          <Sparkles size={12} className="text-accent-soft" />
          AI-powered search across {site.faqs.length} answers
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {results.length === 0 && query ? (
          <div className="luxury-card p-8 text-center">
            <Bot className="mx-auto text-accent-soft" size={32} />
            <p className="mt-4 font-medium">No exact match found</p>
            <p className="mt-2 text-sm font-light text-muted">
              For medical, injury, or supplement questions, please book a free consultation with Piyush directly.
            </p>
          </div>
        ) : (
          results.map((faq) => (
            <details key={faq.q} className="luxury-card group open:luxury-shadow">
              <summary className="cursor-pointer list-none p-6 font-medium marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {faq.q}
                  <span className="text-muted transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <div className="border-t border-border px-6 pb-6 pt-2 text-sm font-light leading-relaxed text-muted">
                {faq.a}
              </div>
            </details>
          ))
        )}
      </div>
    </div>
  );
}
