import type { Program } from "@/content/site";

export type AssessmentAnswers = {
  goal: string;
  experience: string;
  schedule: string;
  format: string;
  commitment: string;
  injury: string;
  budget: string;
};

export type AssessmentResult = {
  programId: Program["id"];
  programName: string;
  headline: string;
  reasoning: string[];
  nextSteps: string[];
  coachMessage: string;
};

export const assessmentQuestions = [
  {
    id: "goal" as const,
    question: "What's your primary goal right now?",
    options: [
      { value: "fat-loss", label: "Lose fat & get leaner", icon: "🔥" },
      { value: "muscle", label: "Build muscle & strength", icon: "💪" },
      { value: "transform", label: "Full body transformation", icon: "⚡" },
      { value: "lifestyle", label: "Get fitter & healthier overall", icon: "🌱" },
      { value: "event", label: "Wedding / event prep", icon: "🎯" },
    ],
  },
  {
    id: "experience" as const,
    question: "What's your training experience?",
    options: [
      { value: "beginner", label: "Complete beginner", icon: "🌟" },
      { value: "some", label: "Some gym experience", icon: "📈" },
      { value: "intermediate", label: "Train regularly (1+ years)", icon: "🏋️" },
      { value: "advanced", label: "Experienced lifter", icon: "🥇" },
    ],
  },
  {
    id: "schedule" as const,
    question: "How much time can you commit per week?",
    options: [
      { value: "2-3", label: "2–3 sessions", icon: "⏱️" },
      { value: "4-5", label: "4–5 sessions", icon: "📅" },
      { value: "6+", label: "6+ sessions", icon: "🔥" },
      { value: "flexible", label: "Flexible / self-paced", icon: "🌍" },
    ],
  },
  {
    id: "format" as const,
    question: "How do you prefer to train?",
    options: [
      { value: "in-person", label: "In-person at the gym", icon: "🏢" },
      { value: "online", label: "Fully online coaching", icon: "💻" },
      { value: "hybrid", label: "Mix of online + in-person", icon: "🔄" },
      { value: "unsure", label: "Not sure — recommend for me", icon: "✨" },
    ],
  },
  {
    id: "commitment" as const,
    question: "How committed are you to this transformation?",
    options: [
      { value: "exploring", label: "Just exploring options", icon: "👀" },
      { value: "ready", label: "Ready to start soon", icon: "✅" },
      { value: "all-in", label: "All in — serious transformation", icon: "🚀" },
    ],
  },
  {
    id: "injury" as const,
    question: "Any injuries or physical limitations?",
    options: [
      { value: "none", label: "None", icon: "✓" },
      { value: "minor", label: "Minor limitations (modifiable)", icon: "⚠️" },
      { value: "medical", label: "Medical condition — cleared by doctor", icon: "🏥" },
      { value: "unsure", label: "Not sure — need guidance", icon: "❓" },
    ],
  },
  {
    id: "budget" as const,
    question: "What's your investment range for coaching?",
    options: [
      { value: "consult", label: "Need to discuss on consult", icon: "💬" },
      { value: "mid", label: "Moderate — value quality coaching", icon: "⭐" },
      { value: "premium", label: "Premium — want the best results", icon: "👑" },
    ],
  },
] as const;

export function getAssessmentResult(answers: AssessmentAnswers): AssessmentResult {
  const { goal, experience, schedule, format, commitment } = answers;

  let programId: Program["id"] = "online-coaching";
  const reasoning: string[] = [];

  if (
    format === "in-person" ||
    (format === "unsure" && schedule !== "flexible" && commitment !== "exploring")
  ) {
    programId = "personal-training";
    reasoning.push("You prefer hands-on coaching with direct form correction and in-person accountability.");
  }

  if (
    goal === "transform" ||
    goal === "event" ||
    commitment === "all-in" ||
    (schedule === "6+" && commitment !== "exploring")
  ) {
    programId = "body-transformation";
    reasoning.push("Your goals and commitment level align with a structured transformation program.");
  }

  if (format === "online" || schedule === "flexible") {
    programId = "online-coaching";
    reasoning.push("Online coaching fits your schedule and gives you structure from anywhere.");
  }

  if (format === "hybrid") {
    programId = "body-transformation";
    reasoning.push("A hybrid program gives you the best of in-person sessions and online flexibility.");
  }

  if (experience === "beginner" && programId === "body-transformation") {
    programId = "personal-training";
    reasoning.push("As a beginner, 1-on-1 coaching will build your foundation with proper technique.");
  }

  if (goal === "fat-loss" || goal === "lifestyle") {
    reasoning.push("Your goal benefits from personalized nutrition coaching and progressive training.");
  }

  if (goal === "muscle") {
    reasoning.push("Muscle building requires structured progressive overload — exactly what these programs deliver.");
  }

  const programNames: Record<Program["id"], string> = {
    "personal-training": "1-on-1 Personal Training",
    "online-coaching": "Online Transformation Coaching",
    "body-transformation": "Body Transformation Program",
  };

  const headlines: Record<Program["id"], string> = {
    "personal-training": "Hands-on coaching is your fastest path to results",
    "online-coaching": "Online coaching gives you structure without sacrificing your schedule",
    "body-transformation": "You're ready for a complete transformation system",
  };

  const coachMessages: Record<Program["id"], string> = {
    "personal-training":
      "Consistency beats motivation — and with 1-on-1 coaching, you'll have someone in your corner every step. Let's build your dream physique together.",
    "online-coaching":
      "You don't need to be in Bokaro to get results. I'll build a plan around your life, track your progress, and keep you accountable. Trust the process.",
    "body-transformation":
      "Serious goals need a serious system. The Body Transformation Program combines training, nutrition, and accountability for the results you're after. Progress over perfection.",
  };

  return {
    programId,
    programName: programNames[programId],
    headline: headlines[programId],
    reasoning: [...new Set(reasoning)].slice(0, 3),
    nextSteps: [
      "Book your free 30-minute consultation",
      "Discuss your goals and get a custom roadmap",
      "Start your personalized coaching program",
    ],
    coachMessage: coachMessages[programId],
  };
}

export function searchFaqs<T extends { q: string; a: string; tags: readonly string[] }>(
  query: string,
  faqs: readonly T[]
): readonly T[] {
  if (!query.trim()) return faqs;

  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);

  return faqs
    .map((faq) => {
      const text = `${faq.q} ${faq.a} ${faq.tags.join(" ")}`.toLowerCase();
      const score = terms.reduce((acc, term) => (text.includes(term) ? acc + 1 : acc), 0);
      return { faq, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ faq }) => faq);
}
