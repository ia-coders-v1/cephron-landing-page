# Cephron landing page

Marketing site for cephron.ai: a statically exported Next.js 16 page in the Datorix design system with Cephron color tokens.

- Decisions: [docs/adr](docs/adr) · Spec: [spec.md](spec.md) · Design: [design.md](design.md) · Hosting: Vercel (see below)
- Copy source of truth: [Cephron-Website-Features.md](Cephron-Website-Features.md). Edit it first, then `src/lib/content.ts`.

## Commands

```bash
npm ci
npm run dev            # http://localhost:3000
npm run build          # static export to out/
npm run check:content  # run after build; fails if the page drifts from the md
npm run lint
```

## Deploy

Vercel, from the Git repository. `vercel.json` sets the build command (`npm run build && npm run check:content`) and security headers. Add `cephron.ai` under the project’s Domains and point DNS as Vercel instructs. Every push to `main` deploys to production; other branches get preview URLs.

The build occasionally fails fetching Google Fonts; rerun it.
