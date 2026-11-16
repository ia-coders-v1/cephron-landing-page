# ADR 0001: Build cephron.ai on the Datorix design system, with the features PDF as the only copy source

Status: accepted
Date: 2026-11-16

## Context

Cephron is a sibling product to Datorix. It is a private cloud for virtual machines (KubeVirt on Kubernetes, Ceph storage), and it needs a public marketing page on the new domain cephron.ai. The product team supplied one document, `Cephron-Website-Features.pdf`: a hero, four headline benefits, eight feature groups, a tech strip and a closing call to action. It marks nothing as planned.

The Datorix landing page already solved the same layout problem: scannable feature sections, a sticky capability rail, illustrative console panels, a static export, and a content gate that checks the page against a copy file. ADR 0001 of that repo set a truthfulness rule: every public claim must trace to a source, and unbacked claims are removed.

## Decision

1. **Reuse, then reskin.** The repo starts as a copy of `datorix-landing-page` (Next.js 16 static export, Tailwind v4, shadcn/base-ui). Typography, spacing, radii, components and motion stay identical. Only the color tokens, copy, visuals and brand mark change (see `design.md`). No shared package or monorepo: two sites do not justify the workspace and CI coupling.
2. **The PDF is the single copy source.** `Cephron-Website-Features.md` carries the PDF's wording verbatim. `src/lib/content.ts` mirrors it, and `npm run check:content` fails the build when the page and the md disagree in either direction, or when a forbidden claim appears. Claims are not verified against Cephron code; the PDF is trusted as supplied. If the product changes, the md changes first.
3. **One drafted section, flagged.** The PDF has no problem framing, so a three-card "Why a private cloud" section is drafted from PDF claims only (public-cloud cost, command-line-only tooling, lock-in). It is marked in the md as pending the product owner's approval and cannot introduce new facts.
4. **No Roadmap, no "Coming soon".** The PDF plans nothing. The Datorix Roadmap, Stats, Use Cases and Databases sections are not carried over, and the gate fails if "Coming soon" appears anywhere.
5. **Illustrative panels, labelled.** Each feature section and the hero show a dark console panel with invented sample data (VM names, percentages). Each panel is `aria-hidden`, carries a "sample data" label, and may not introduce a capability the PDF does not state.
6. **Crocus logo.** The brand is saffron, so the mark is a simple crocus (violet petals, three saffron threads) with an outlined "Cephron" wordmark, kept as SVG in `brand/`. No dots in the logo. Favicons are rendered from a simplified symbol.
7. **Hosted on Vercel.** The static export is deployed through Vercel’s Git integration, so there is no server, SSH key or deploy workflow to maintain. `vercel.json` runs `npm run build && npm run check:content` as the build command, so a copy mismatch fails the deploy, and sets basic security headers. The domain cephron.ai is added in the Vercel project settings.
8. **CTA is email only.** `mailto:info@cephron.ai`. No datasheet download.

## Consequences

- The page can be built quickly and looks like a Datorix sibling, but the two repos will drift. Fixes to shared components must be copied by hand.
- Because the gate trusts the PDF, a wrong claim in the PDF is published. The gate guards against drift, not against error in the source.
- Hosting depends on a third party (Vercel); moving later means pointing the domain at another static host, since the export is plain files.
- `info@cephron.ai` must exist before launch, or the only call to action fails.

## Alternatives considered

- **Fresh `create-next-app`**: cleaner start, but would reproduce the same sections and tokens at higher cost.
- **Shared component package**: avoids drift, but adds a workspace and couples a live site's deploy to a new one.
- **Verify claims against the Cephron codebase**: stronger, but no code path was supplied. Can be added later by extending the gate.
- **Contabo VPS or cPanel FTP**: more control, but needs a server, TLS and a deploy pipeline. Vercel removes all three for a static page.
