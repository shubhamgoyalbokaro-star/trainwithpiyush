# Train With Piyush

Premium personal training & online fitness coaching website for **Piyush Sharma** — built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- Dark cinematic UI with electric lime accent
- 9 pages: Home, About, Programs, Results, Method, AI Fit Assessment, Blog, FAQ, Contact
- AI-powered Fit Assessment (rule-based program matcher)
- Smart FAQ search
- WhatsApp contact integration
- Mobile-responsive design
- SEO optimized

## Getting Started

```bash
cd train-with-piyush
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Deploy

Recommended: [Vercel](https://vercel.com) — connect repo and deploy. Point `trainwithpiyush.com` DNS to Vercel.

## Content Updates

Edit `src/content/site.ts` for all text, programs, testimonials, and FAQs.
Edit `src/content/site.ts` → `blogPosts` for blog articles.

## Pending from Piyush

- Google Drive photos (headshot, hero, transformations)
- Confirm phone number (7667561663)
- Gym address: 2nd Floor, Reliance Digital Building, Chas, Bokaro (Google Maps linked on site)
- Logo file (currently text wordmark)

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **Lucide Icons**

## Future Enhancements

- Client portal
- Online payments (Razorpay/Stripe)
- OpenAI API for enhanced Q&A (`OPENAI_API_KEY`)
- CMS (Sanity) for easy admin updates
- Hindi language toggle
