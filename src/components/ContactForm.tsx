"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { site } from "@/content/site";
import { formatWhatsAppLink } from "@/lib/utils";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `New website inquiry from ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Interested in: ${form.program || "Not specified"}
Message: ${form.message}`;

    window.open(formatWhatsAppLink(site.whatsapp, text), "_blank");
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-2xl border border-border bg-white px-4 py-3.5 text-foreground transition focus:border-foreground/20 focus:outline-none focus:ring-2 focus:ring-foreground/5";

  if (submitted) {
    return (
      <div className="luxury-card p-10 text-center">
        <CheckCircle2 className="mx-auto text-accent-soft" size={48} />
        <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">Message sent!</h3>
        <p className="mt-2 font-light text-muted">
          Your inquiry was sent via WhatsApp. Piyush typically responds {site.responseTime.toLowerCase()}.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-foreground hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Full name *
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email *
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium">
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={inputClass}
            placeholder="+91 ..."
          />
        </div>
        <div>
          <label htmlFor="program" className="mb-2 block text-sm font-medium">
            Program interest
          </label>
          <select
            id="program"
            value={form.program}
            onChange={(e) => setForm({ ...form, program: e.target.value })}
            className={inputClass}
          >
            <option value="">Select a program</option>
            {site.programs.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value="Free Consultation">Free Consultation</option>
            <option value="Not sure">Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Your goals & message *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputClass} resize-none`}
          placeholder="Tell me about your goals, experience, and what you're looking for..."
        />
      </div>

      <button type="submit" className="btn-primary w-full py-4 sm:w-auto sm:px-10">
        Send via WhatsApp
        <Send size={18} />
      </button>

      <p className="text-xs font-light text-muted">
        By submitting, you agree to be contacted about coaching services. {site.disclaimer}
      </p>
    </form>
  );
}
