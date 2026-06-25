"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import {
  assessmentQuestions,
  getAssessmentResult,
  type AssessmentAnswers,
} from "@/lib/assessment";
import { site } from "@/content/site";
import { formatWhatsAppLink } from "@/lib/utils";

const initialAnswers: AssessmentAnswers = {
  goal: "",
  experience: "",
  schedule: "",
  format: "",
  commitment: "",
  injury: "",
  budget: "",
};

export function FitAssessment() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<AssessmentAnswers>(initialAnswers);
  const [done, setDone] = useState(false);

  const current = assessmentQuestions[step];
  const progress = done ? 100 : ((step + 1) / assessmentQuestions.length) * 100;
  const result = done ? getAssessmentResult(answers) : null;

  const setAnswer = (value: string) => {
    if (!current) return;
    const updated = { ...answers, [current.id]: value };
    setAnswers(updated);
    if (step < assessmentQuestions.length - 1) {
      setTimeout(() => setStep(step + 1), 200);
    } else {
      setTimeout(() => setDone(true), 200);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers(initialAnswers);
    setDone(false);
  };

  const whatsappHref = result
    ? formatWhatsAppLink(
        site.whatsapp,
        `Hi Piyush! I completed the Fit Assessment and was recommended "${result.programName}". I'd like to book my free consultation.`
      )
    : "#";

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-sm text-muted">
          <span className="flex items-center gap-2">
            <Sparkles size={14} className="text-accent-soft" />
            AI-Powered Fit Assessment
          </span>
          <span>{done ? "Complete" : `Step ${step + 1} of ${assessmentQuestions.length}`}</span>
        </div>
        <div className="h-1 overflow-hidden rounded-full bg-surface">
          <motion.div
            className="h-full bg-accent"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!done && current ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="luxury-card p-8"
          >
            <h2 className="font-display text-2xl font-bold">{current.question}</h2>
            <div className="mt-6 grid gap-3">
              {current.options.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setAnswer(opt.value)}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-white p-4 text-left transition hover:bg-surface"
                >
                  <span className="text-2xl">{opt.icon}</span>
                  <span className="font-medium">{opt.label}</span>
                </button>
              ))}
            </div>

            {step > 0 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="mt-6 inline-flex items-center gap-2 text-sm text-muted hover:text-foreground"
              >
                <ArrowLeft size={14} /> Back
              </button>
            )}
          </motion.div>
        ) : result ? (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="luxury-card p-8 luxury-shadow"
          >
            <div className="flex items-center gap-2 text-accent-soft">
              <CheckCircle2 size={20} />
              <span className="text-sm font-semibold uppercase tracking-wider">Your Recommended Path</span>
            </div>

            <h2 className="mt-4 font-display text-3xl font-bold">{result.programName}</h2>
            <p className="mt-2 text-lg text-muted">{result.headline}</p>

            <div className="mt-6 rounded-2xl bg-surface p-5">
              <p className="text-sm font-medium text-accent-soft">Coach&apos;s note</p>
              <p className="mt-2 text-sm leading-relaxed text-muted italic">&ldquo;{result.coachMessage}&rdquo;</p>
            </div>

            <ul className="mt-6 space-y-2">
              {result.reasoning.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-foreground/90">
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-accent-soft" />
                  {r}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <p className="text-sm font-semibold text-foreground">Your next steps</p>
              <ol className="mt-3 space-y-2">
                {result.nextSteps.map((s, i) => (
                  <li key={s} className="flex items-center gap-3 text-sm text-muted">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-surface text-xs font-semibold text-accent-soft">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 px-6 py-3"
              >
                Book Free Consult on WhatsApp
                <ArrowRight size={16} />
              </a>
              <Link
                href="/contact"
                className="btn-secondary flex-1 px-6 py-3"
              >
                Contact Form
              </Link>
            </div>

            <button
              type="button"
              onClick={reset}
              className="mt-4 w-full text-center text-sm text-muted hover:text-foreground"
            >
              Retake assessment
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
