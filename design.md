# Cephron design

Cephron reuses the Datorix landing-page system. Everything not listed under "Changed tokens" is identical to `datorix-landing-page`: type scale, spacing, radii, components, motion and layout. When Datorix and Cephron disagree, this file wins for cephron.ai.

## Changed tokens

Defined in `src/app/globals.css` (`:root`), exposed to Tailwind through `@theme inline`.

| Token | Datorix | Cephron | Use |
|---|---|---|---|
| `--primary`, `--foreground`, `--on-dark`, `--card-foreground`, `--accent-foreground` | `#0f2050` | `#2b1160` (deep crocus violet) | headings, primary buttons, dark CTA band |
| `--primary-active` | `#0a1838` | `#1e0a47` | button hover |
| `--accent-saffron` (was `--accent-blue`) | `#38bdf8` | `#f4a300` (saffron) | fills, dots, bars, text on dark panels |
| `--accent-saffron-text` | n/a | `#b45309` | accent text on light backgrounds (large text only) |
| `--ring` | `#38bdf8` | `#f4a300` | focus ring |
| `--surface-tonal` | `#e3e9f1` | `#ece8f5` | tinted card fill |
| Badge and pill set | sky-50 / 300 / 500 | amber-50 / 300 / 700 | section labels, hero badge, active accordion number |
| CTA button hover | sky-500 | amber-300 | on the dark band |

Unchanged: slate neutrals (`--background #f8fafc`, `--muted-foreground #64748b`, `--body #475569`, `--hairline #e2e8f0`), `--accent-emerald #22c55e`, `--accent-rose #ef4444`, amber for warnings, `--destructive`.

### Contrast (WCAG 2.x, computed)

| Pair | Ratio | Rule |
|---|---|---|
| `#2b1160` on `#f8fafc` | 14.8 | headings and buttons: pass |
| `#f4a300` on `#f8fafc` | 2.0 | never use saffron as text on light |
| `#b45309` on `#f8fafc` | 4.8 | accent text on light: pass (hero h1 accent, section h2 accent) |
| `#b45309` on `#ece8f5` | 4.2 | icons and large text on tonal cards |
| amber-700 on amber-50 | about 4.8 | small badge text: pass |
| `#f4a300` on `#1e293b` / `#2b1160` | 7.0 / 7.5 | accent text in dark panels and the CTA band: pass |
| `#2b1160` on `#f4a300` | 7.5 | button label on saffron: pass |

## Typography

- Inter 400/500/600/700 for text and headings; JetBrains Mono 400 for console panels and counters. Loaded with `next/font/google`.
- h1: `clamp(40px, 5vw, 72px)`, weight 700, line-height 1.05, tracking -2.5px.
- h2: `clamp(28px, 3.5vw, 40px)`, weight 700, tracking -1.5px.
- Card titles 15px/600; body 14-16px, line-height relaxed; console text 12px with 11px pills (never below 11px).
- Overline labels: 11-12px, uppercase, weight 600, tracking 1.5px.

## Layout

- Container `max-w-[1280px]`, 24px side gutters (`px-6`); no horizontal page scroll at any width.
- Section rhythm: `py-16 lg:py-20` for feature sections; hero `pt-28 sm:pt-40 pb-[77px]`; problem `pt-[77px]`.
- Feature sections are a two-column grid (copy beside panel) from `lg`, one column below. Odd sections get the secondary background with hairline borders; the panel side alternates.
- Fixed navbar 64px; sticky capability rail 48px at `top-16`; anchor targets use `scroll-mt-28`.
- Radii: 6 / 8 / 12px (`sm` / `md` / `lg`), pills full. Cards use `rounded-xl`.

## Components

| Component | Behaviour |
|---|---|
| Navbar | Transparent over the hero, white once scrolled or when the mobile menu is open; the background sits on the full-width header, not the inner container. Wordmark left, five anchor links, "Request a Demo" button. |
| Logo | `public/logo.svg`, the symbol-plus-wordmark lockup at 32px tall (`Wordmark.tsx`). Sources in `brand/`. |
| Hero | Badge, h1 (second line in `accent-saffron-text`), subcopy, two buttons (demo, explore), a dark VM-list panel, then the four benefits under a hairline. |
| Problem | Section label, h2, three tonal cards with a saffron icon tile. Drafted copy, pending approval. |
| FeatureRail | Sticky pill nav, eight pills with icons, IntersectionObserver highlights the section in the upper third, scrolls horizontally on phones, pills at least 40px tall. |
| FeatureSections | Counter (`01 / 08`), label badge, h2, tagline, accordion list beside a console panel. |
| FeatureList | One item open at a time, native buttons with `aria-expanded` and `aria-controls`; every body stays in the DOM for the content gate; number drawn by CSS so the h3 text is only the card title. |
| FeatureVisuals | Dark console panels (`bg-slate-800`) with window dots, a "sample data" label, rows, pills, bars and a footnote. `aria-hidden`, no h3/h4. |
| CallToAction | Dark `bg-primary` band, one saffron "Request a demo" button (`mailto:`), no secondary action. |
| Footer | Wordmark, email, capability links, copyright. No placeholder `#` links. |

## Console panels

- Chrome: three window dots, title `cephron — <name>`, "sample data" at the right.
- Rows: `rounded-md border border-slate-700 bg-slate-900/40`; the highlighted row uses a saffron border and tint.
- Pills: emerald for healthy/running/on, sky for paused/maintenance, slate for stopped/neutral, saffron for the current or highlighted item, rose for items needing attention. Saffron is the brand accent, so it never means a warning.
- Content rule: panels illustrate what the PDF already claims (VM states, nodes, quotas, migration, import, health, security checks). They never add a capability. Names are generic (`web-prod-01`, `server-2`); no real customers.

## Motion

- `.reveal` scroll-driven fade-up on the panel, behind `@supports (animation-timeline: view())`; content is fully visible without it.
- Hero badge dot pulses; accordion height transition 300ms.
- All animation sits inside `prefers-reduced-motion: no-preference`.

## Accessibility

- One h1; each section has an h2; card titles are h3.
- Accent text meets the contrast table above; focus ring `#f4a300` via `outline-ring/50`.
- Tap targets at least 40px in the rail, menu and accordion.
- Decorative panels are `aria-hidden`; the home link has `aria-label="Cephron home"`.

## Content rules

- Copy comes only from `Cephron-Website-Features.md`; edit the md first, then `src/lib/content.ts`.
- Plain words, no jargon the PDF does not use. No uptime numbers, SLAs, "unlimited", "zero downtime" or comparisons with named competitors beyond the import list.
- No dates and no "Coming soon" content.
- Run `npm run build && npm run check:content` after any copy change.

## Assets

- Icons: lucide-react.
- Logo (`brand/`): a stylized saffron crocus, two violet petals forming a cup (`#2b1160`, inner petal `#6d3fc0`) with three saffron threads (`#f4a300`) that fan upward and widen at the tip. The threads must never converge to one point, which reads as a download arrow. No dots anywhere in the logo.
- Variants: lockup, mono, reversed, and symbol-only. The mono symbol loses the threads inside the petals by design.
- Favicon (`public/favicon.svg`): white petals with thick saffron threads on a `#2b1160` rounded square, no inner petal so it stays clear at 16px. PNG and ICO sizes are rendered from it.
- Social card: `src/app/opengraph-image.tsx` (tagline, summary, pill) in the new palette.
