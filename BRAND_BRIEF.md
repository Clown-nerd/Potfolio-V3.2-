# BRAND BRIEF — Nickson "Nick" Nyagol Ochieng

> Strategic document for the portfolio re-platform.  
> Every decision below replaces content from the purchased "Ashwin Gupta / AI Engineer" Astro template.

---

## 1. TECH APPROACH

### Current State

| Aspect | Finding |
|---|---|
| **Framework** | Compiled Astro output — no `.astro` source files, no `astro.config.*`, no `package.json` |
| **Styling** | Tailwind CSS v4 (compiled into a single `_astro/_section_.B7GH1v8O.css`, minified) |
| **JS** | 8 minified bundles in `_astro/` powering a "spatial scene" + holographic HUD overlay |
| **Content** | Hard-coded HTML; no CMS, no MDX, no markdown pipeline |
| **Assets** | 64 tech-logo SVGs/PNGs in `/logos/`, preloaded web fonts (DM Sans, Playfair Display, DM Mono) |

### Recommendation: **Clean-Slate Next.js 14 Rebuild (App Router)**

> [!IMPORTANT]
> Patching the compiled output is a dead end — no source means every change is a reverse-engineering exercise against minified code. A rebuild is the only maintainable path.

| Decision | Rationale |
|---|---|
| **Next.js 14 + App Router** | Nick already ships Next.js in production (Multi-tenant MIS). Zero learning curve. |
| **Vanilla CSS (custom properties)** | Per project conventions. Design tokens in `:root`, no Tailwind dependency. |
| **MDX for articles/case studies** | Write-once, render-anywhere. Supports embedded components (charts, demos). |
| **Static export (`output: 'export'`)** | Deploy to Vercel/GitHub Pages as static HTML. No server cost. |
| **Keep `/logos/` as-is** | 64 SVGs are framework-agnostic — copy them into `/public/logos/`. |
| **Fonts** | Keep DM Sans (body) and DM Mono (code/labels). Drop Playfair Display — too editorial for this brand. |

### Migration Path

```
Phase 1: Scaffold Next.js 14 app in a new directory (e.g., /portfolio-next/)
Phase 2: Build design system (CSS custom properties, layout components)
Phase 3: Port pages using Nick's real content (from this brief)
Phase 4: MDX pipeline for articles + case studies
Phase 5: Polish (animations, OG images, SEO, Lighthouse audit)
Phase 6: Swap deployment — point domain at new build
```

---

## 2. BRAND DIRECTION

### Current Template Identity (What We're Replacing)

- "Ashwin Gupta" — AI/ML engineer, Bangalore, India
- Corporate enterprise clients (HSBC, HDFC ERGO, Coforge)
- Research-heavy (PINNs, PhysClip, ScholarOS)
- Sci-fi "holographic HUD in a dark room" aesthetic
- Positioning: *senior engineer at scale*

### New Identity: Nick Nyagol Ochieng

#### Positioning Statement

> **"Civic-tech systems builder shipping multi-tenant platforms and public-finance tooling from Nairobi."**

#### Brand Pillars

| Pillar | Expression |
|---|---|
| **Builder, not theorist** | Every project has a deploy URL or a working demo. Ships first, polishes after. |
| **Civic-tech lens** | Software that touches government procurement, public libraries, partner NGOs, mobile money. Not SaaS-for-SaaS. |
| **Resourcefulness as a feature** | 8 GB RAM, 128 GB SSD, Azure VM. Constraints produce better architecture. |
| **Multi-model workflow ("Antigravity")** | Routes tasks across an AI stack — Gemini for planning, Claude for code, GPT for copy. The workflow itself is a differentiator. |
| **Kenyan context, global ambition** | Based in Nairobi, studying at Kasarani TVC, but building systems that could run anywhere. |

#### What NOT to claim

- ❌ No "AI/ML researcher" positioning — Nick builds *with* AI, not *on* AI theory
- ❌ No fake corporate clients — every case study is a real build
- ❌ No "10x engineer" bravado — the tone is grounded, practical, specific
- ❌ No BnB Quantum-Kenya as a "shipped product" — it's a north-star concept only

---

## 3. VOICE & TONE

### Guiding Principles

| Principle | Example |
|---|---|
| **Direct, not clever** | "This handles 12 tenants on one Neon database" — not "Revolutionizing multi-tenancy" |
| **Technical but accessible** | Explain *why* RLS matters, not just *that* you used it |
| **Kenyan-inflected English** | Natural cadence, occasional Swahili loan-words where authentic (not forced) |
| **Show the constraint** | "Built on 8 GB RAM" is a flex, not an apology |
| **First person, present tense** | "I build…" / "I'm working on…" — not "He developed…" |

### Dos and Don'ts

| ✅ Do | ❌ Don't |
|---|---|
| "I ship multi-tenant SaaS from a 128 GB laptop" | "Visionary full-stack architect" |
| "This runs on Neon's free tier" | "Enterprise-grade cloud infrastructure" |
| "Currently studying CS at Kasarani TVC" | Hide the student status |
| "Built with Gemini + Claude + GPT routing" | "Proprietary AI pipeline" |
| Name the specific tool (Fastify, BullMQ, Drizzle) | "Modern tech stack" |

---

## 4. INFORMATION ARCHITECTURE

### Current Template Structure (Replacing)

```
/ (index)          → Hero + spatial scene
/about             → Ashwin's bio + Bangalore story
/experience        → HSBC, Coforge, PrismForce timeline
/impact            → Vanity metrics (100K+ users, etc.)
/stack             → 64-logo grid
/recommendations   → Corporate testimonials
/articles          → 2 blog posts
/contact           → Email form
/work/*            → 6 case studies (HSBC, HDFC, etc.)
/research/*        → 4 research papers (PINNs, PhysClip, etc.)
```

### New Information Architecture

```
/ (index)
├── Hero: Name, tagline, one-line positioning
├── Featured builds (3 cards: MIS, Tender Eye, KPFAS)
├── "Currently" strip (student status, attachment, latest commit)
└── CTA → /projects

/about
├── Origin story (Nairobi, Kasarani TVC, how I got here)
├── The "Antigravity" workflow (how I use multi-model AI)
├── Constraints section (the laptop, the VM, the free tiers)
└── Education + Certifications

/projects
├── Multi-tenant MIS Platform (/projects/mis)
├── Kenya Tender Eye (/projects/tender-eye)
├── KPFAS — Kenya Public Finance Automation (/projects/kpfas)
├── Akosombo Library System (/projects/akosombo)
├── Partner Sync (/projects/partner-sync)
├── M-Pesa Tracker (/projects/mpesa-tracker)
└── [Future: BnB Quantum-Kenya as "Concept" tag]

/stack
├── Grouped by function, not alphabetically:
│   ├── Frontend: Next.js, React, TypeScript
│   ├── Backend: Node.js, Fastify, Express
│   ├── Data: PostgreSQL, Neon, Drizzle ORM, Redis
│   ├── Infrastructure: Vercel, Azure VM, Docker, GitHub Actions
│   ├── AI Tooling: Gemini, Claude, GPT, Cursor
│   └── Mail/Comms: Resend, M-Pesa API
├── "How I actually use these" annotations
└── Drop logos that don't apply (Kafka, Spark, K8s, GCP, etc.)

/writing (replaces /articles)
├── MDX blog posts
├── Case study deep-dives (longer versions of /projects)
└── "Build logs" — raw notes from shipping

/contact
├── Email (simplified — no elaborate form)
├── GitHub: Clown-nerd / Nyagol-dev
├── LinkedIn
└── Twitter/X (if applicable)
```

### Dropped Pages

| Page | Reason |
|---|---|
| `/experience` | No corporate employment history to show; replaced by `/projects` |
| `/impact` | Vanity metrics from someone else's career; impact is embedded in each project card |
| `/recommendations` | No testimonials available; add later when real ones exist |
| `/research/*` | PINNs/PhysClip/ScholarOS are Ashwin's — not Nick's work |
| `/work/*` | HSBC/HDFC/Coforge are Ashwin's — not Nick's clients |

---

## 5. VISUAL DIRECTION

### Current Template Aesthetic (Replacing)

- **Concept:** "Holographic HUD in a dark room" — floating glass panels, cyan glow, spatial depth
- **Palette:** Pure black (`#000`) background, cyan/ice-blue text glow (`#a7e2ff`), white text
- **Typography:** Playfair Display (serif headings), DM Sans (body), DM Mono (code)
- **Motion:** Blob animations, parallax scroll, spatial scene z-layering
- **Mood:** Sci-fi command center — impressive but impersonal

### New Visual Direction

#### Concept: **"Terminal Meets Dashboard"**

> A dark, focused interface that feels like a developer's workspace — not a sci-fi movie. 
> Clean data presentation, functional typography, purposeful color.

#### Color Palette

```css
:root {
  /* Base */
  --bg-primary:    hsl(220, 20%, 7%);     /* Near-black with blue undertone */
  --bg-secondary:  hsl(220, 18%, 11%);    /* Card/panel surfaces */
  --bg-tertiary:   hsl(220, 16%, 15%);    /* Elevated surfaces, hovers */
  --border:        hsl(220, 14%, 20%);    /* Subtle borders */

  /* Text */
  --text-primary:  hsl(40, 20%, 92%);     /* Warm off-white — not pure white */
  --text-secondary: hsl(220, 10%, 55%);   /* Muted labels */
  --text-tertiary: hsl(220, 8%, 40%);     /* Disabled / timestamps */

  /* Accent: Amber (primary action, links, highlights) */
  --accent:        hsl(38, 92%, 55%);     /* Warm amber — Kenyan sun */
  --accent-hover:  hsl(38, 92%, 65%);
  --accent-muted:  hsl(38, 40%, 20%);     /* Amber tint for backgrounds */

  /* Secondary accent: Indigo (tags, secondary actions) */
  --accent-2:      hsl(230, 70%, 62%);    /* Cool indigo */
  --accent-2-muted: hsl(230, 30%, 18%);

  /* Semantic */
  --success:       hsl(145, 60%, 45%);
  --warning:       hsl(38, 92%, 55%);     /* Same as accent — intentional */
  --error:         hsl(0, 72%, 55%);
}
```

> [!TIP]
> The amber accent is a deliberate departure from the template's cyan. It's warmer, more grounded, and nods to Kenyan sunlight without being literal or cliché.

#### Typography

| Role | Font | Weight | Usage |
|---|---|---|---|
| **Headings** | DM Sans | 600–700 | Page titles, section headers |
| **Body** | DM Sans | 400 | Paragraphs, descriptions |
| **Code / Labels** | DM Mono | 400 | Inline code, status badges, metadata |

> Drop Playfair Display entirely. DM Sans handles both heading and body — it's cleaner and more "builder" than editorial serif.

#### Layout Principles

1. **Max-width constraint:** Content caps at `1200px` — no full-bleed hero sprawl
2. **Card-based project grid:** Each project is a card with status badge, tech tags, one-line description
3. **Generous whitespace:** `clamp(2rem, 5vw, 4rem)` section padding — let the content breathe
4. **No spatial scene / 3D:** Remove the parallax blob environment entirely. A solid dark background is enough.
5. **Sticky nav:** Minimal top bar — logo/name left, page links right, no hamburger on desktop

#### Motion & Interaction

| Element | Behavior |
|---|---|
| **Page transitions** | Subtle fade (`opacity 0→1`, `translateY 8px→0`, `300ms ease-out`) |
| **Cards** | Border glow on hover (`box-shadow` with `--accent` at 15% opacity) |
| **Links** | Underline slides in from left on hover |
| **Status badges** | Pulse animation for "Active" projects |
| **Scroll** | No parallax. Content enters with `IntersectionObserver` fade-up. |

> [!WARNING]
> The current template's "holographic" aesthetic is technically impressive but alienating for Nick's audience (potential clients, collaborators, employers in the Kenyan tech ecosystem). The new direction is **legible, fast, and professional** — it should feel like opening a well-maintained dashboard, not entering a spaceship.

#### Assets to Keep vs. Replace

| Keep | Replace/Remove |
|---|---|
| Tech logos that Nick actually uses (Next.js, PostgreSQL, Vercel, Docker, TypeScript, Python, Redis, GitHub, Ubuntu, Azure) | Logos for tools Nick doesn't use (Kafka, Spark, K8s, GCP suite, Arch Linux, LangChain, LangGraph, HuggingFace, PyTorch, etc.) |
| DM Sans + DM Mono fonts | Playfair Display |
| Dark-mode-first approach | The "spatial scene" holographic HUD |
| — | Blob animations, cyan glow effects |
| — | All "Ashwin Gupta" personal content, photos, testimonials |

---

## Open Questions

> [!IMPORTANT]
> **These need your input before I start building:**

1. **Domain / hosting:** Are you deploying to Vercel (you already use it for MIS), GitHub Pages, or somewhere else? This affects the build config.

2. **Profile photo:** Do you have a headshot or avatar you want to use? Or should I design without one for now?

3. **Project screenshots:** Do you have screenshots or screen recordings of your shipped projects (MIS dashboard, Tender Eye, etc.)? These would dramatically improve the `/projects` pages.

4. **GitHub links:** Which repos are public? I'll link directly to source code where possible.

5. **Contact method:** Email address for the contact page? Or prefer a form service (e.g., Formspree)?

6. **"Clown Nerds" branding:** Should the portfolio be branded as "Clown Nerds" (the freelance brand) or as "Nick Nyagol Ochieng" (personal)? Or a hybrid ("Nick Nyagol — Clown Nerds")?

7. **BnB Quantum-Kenya:** You said "north star, not shipped." Should it appear on the projects page at all (with a "Concept" tag), or stay completely off the site for now?

8. **New directory:** Should I scaffold the Next.js app inside this repo (replacing the compiled files) or in a sibling directory (e.g., `~/Projects/portfolio-next/`)?

---

## Verification Plan

### Automated
- `npm run build` succeeds with zero errors
- Lighthouse audit: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95
- All internal links resolve (no 404s)
- HTML validation (no duplicate IDs, proper heading hierarchy)

### Manual
- Visual review of every page on desktop + mobile (375px)
- Confirm all "Ashwin Gupta" references are gone
- Verify Nick's real content is accurate
- Test dark mode contrast ratios (WCAG AA minimum)
