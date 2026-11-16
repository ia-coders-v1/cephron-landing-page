Status: ready-for-agent

# Launch the Cephron landing page at cephron.ai

Builds on [ADR 0001](docs/adr/0001-cephron-landing-page-reuses-datorix-system-and-pdf-copy.md). Copy source: [Cephron-Website-Features.md](Cephron-Website-Features.md), which holds the product team's PDF wording verbatim. Visual rules: [design.md](design.md).

## Problem Statement

Cephron has no public page. The domain cephron.ai is bought and the product team has a feature list, but a buyer who lands there has nothing that explains what Cephron is, what it replaces or how to ask for a demo.

## Solution

A single static page in the Datorix style: hero with four headline benefits, a short "why a private cloud" section, eight feature sections with a sticky capability rail and a console illustration each, a tech strip and a closing call to action by email. Every claim is the PDF's wording; the content gate enforces that.

## User Stories

1. As a prospective buyer, I want a hero that says what Cephron is in one sentence, so that I understand it in seconds.
2. As a prospective buyer, I want four headline benefits under the hero (all in the browser, fair sharing, no-downtime upkeep, bring your VMs), so that I can skim the value.
3. As an IT lead paying a public cloud, I want to see why running my own cloud can beat that, so that I keep reading.
4. As an admin, I want to learn how a VM is created, in what steps and from what sources, so that I know it needs no command line.
5. As an admin, I want the day-to-day controls (power, console, snapshots, hardware changes, graphs) described, so that I can judge operability.
6. As an MSP or department head, I want nodes with guaranteed slices, separate logins and self-service described, so that I know teams can share one host safely.
7. As an infrastructure owner, I want clustering, live migration, replicated storage and maintenance without downtime described, so that I know VMs survive failures and patching.
8. As a network or storage admin, I want thin disks, the image library, VLANs, private networks and published ports described, so that I know the plumbing.
9. As someone with VMs on VMware, Hyper-V, VirtualBox, Proxmox or a public cloud, I want the import formats and the export option, so that I know I am not locked in.
10. As an operator, I want health, history, hardware status, logs, audit trail and the support bundle described, so that I know troubleshooting is built in.
11. As a security reviewer, I want sign-in protection, isolation, reminders and guided setup described, so that I know defaults are safe.
12. As an engineer, I want the underlying open technology listed (Kubernetes, KubeVirt, Ceph storage, PostgreSQL, Linux bridge and VLAN networking), so that I trust it.
13. As a visitor, I want a "Request a demo" button that opens an email to info@cephron.ai, so that I can ask without a form.
14. As a visitor, I want navigation to jump to each feature group, so that I can find a topic quickly.
15. As a visitor on a phone, I want one column and a rail that scrolls sideways, with no horizontal page scroll and tap targets of at least 40px.
16. As someone sharing the link, I want the title, description and social card to describe Cephron, so that the shared card matches the page.
17. As a keyboard or screen-reader user, I want one h1, a logical heading order, focusable anchors, `aria-expanded` accordions and decorative panels hidden from assistive tech.
18. As a visitor who prefers reduced motion, I want animations disabled.
19. As a maintainer, I want the build to fail when the page and the md disagree or a forbidden claim appears, so that edits cannot drift.
20. As the product owner, I want the one drafted section clearly flagged, so that I can approve or rewrite it before launch.

## Page structure

| Order | Section | id | Source |
|---|---|---|---|
| 1 | Hero + 4 benefits | (none) | PDF |
| 2 | Why a private cloud (3 cards) | `problem` | Drafted from PDF claims, pending approval |
| 3 | Create a VM in minutes (6) | `create` | PDF |
| 4 | Run and control every VM (6) | `run` | PDF |
| 5 | Share one host between many teams (6) | `share` | PDF |
| 6 | Built to stay up (4) | `stay-up` | PDF |
| 7 | Storage and networking made simple (6) | `storage` | PDF |
| 8 | Move in from anywhere (2) | `move` | PDF |
| 9 | Know what is happening (6) | `observe` | PDF |
| 10 | Secure by default (4) | `secure` | PDF |
| 11 | Built on proven open technology | (none) | PDF |
| 12 | Closing call to action | `cta` | PDF |

Rail pills: Create, Control, Teams, Uptime, Storage, Migrate, Monitor, Security.

## Implementation Decisions

- Start from a copy of datorix-landing-page; keep component names and layout. Token and copy changes only (see design.md).
- `src/lib/content.ts` mirrors the md; `src/lib/site.ts` holds identity (`SITE_URL = https://cephron.ai`, contact email).
- Hero panel and per-section panels are static, `aria-hidden`, labelled "sample data".
- No Roadmap, Stats, Use Cases or Databases sections. No datasheet links. No `Coming soon` anywhere.
- Static export (`output: "export"`, `trailingSlash: true`). Deployed on Vercel from Git; `vercel.json` runs the content gate as part of the build.
- Brand: crocus symbol plus wordmark as SVG (`public/logo.svg`, sources in `brand/`); favicon from the simplified symbol.

## Testing Decisions

`npm run check:content` after `npm run build` asserts:

1. No forbidden claim: Datorix copy, percentage uptime figures, SLA, zero downtime, unlimited, VMware replacement claims, "Coming soon", Databricks or Spark.
2. Required section ids exist, each has an h2, and every in-page `href="#..."` resolves.
3. Exactly one h1.
4. The demo `mailto:info@cephron.ai` link is present.
5. Every md card title is a heading on the page and its body appears on the page; every h3/h4 in the eight feature sections is an md card title.

Also run before merge: `npm run lint` and `npm run build`. Check the page by eye at desktop and 390px width.

## Out of Scope

- A Roadmap or any planned-feature content.
- Verifying claims against the Cephron codebase.
- Pricing, case studies, testimonials, blog, legal pages, analytics, cookie banner.
- Screenshots of the product, a datasheet PDF.
- Light/dark theme switching.

## Open items before launch

- Product owner approves or rewrites the "Why a private cloud" copy.
- `info@cephron.ai` mailbox exists.
- The repo is imported into Vercel and cephron.ai is added as its domain, with DNS pointed as Vercel instructs.
- Privacy policy and terms pages, if the business requires them.
