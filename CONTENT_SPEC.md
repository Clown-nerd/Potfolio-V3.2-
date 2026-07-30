# CONTENT_SPEC.md — Nick Nyagol Ochieng Portfolio

> Execution document. Every section has exact copy and a mapping to the
> existing code. A fast model with no context should be able to fill in
> `projects.ts`, the MDX files, and the remaining `.tsx` pages from this
> spec alone, without referring to the brief.
>
> Status of current rebuild: the Next.js 14 App Router scaffold is live at
> `/portfolio/`. Pages `/`, `/about`, `/projects`, `/projects/[slug]`,
> `/stack`, `/writing`, and `/contact` all exist. No MDX pipeline yet.
> No `/experience`, `/impact`, `/recommendations`, or `/research` pages —
> all intentionally dropped (see BRAND_BRIEF §4).

---

## OLD-TEMPLATE → NEW-PORTFOLIO CASE-STUDY SLOT MAP

The original Astro template shipped six `/work/*` case studies. All six must
be replaced with Nick's real projects. The mapping is:

| Old slug (`/work/…`)          | Old title (Ashwin's)               | New slug (`/projects/…`) | New title (Nick's)                      |
|-------------------------------|------------------------------------|--------------------------|-----------------------------------------|
| `ashwingupta-dev`             | Ashwin Gupta — Portfolio site      | `mis`                    | Multi-Tenant MIS Platform               |
| `hsbc`                        | HSBC — Risk model (flagship)       | `tender-eye`             | Kenya Tender Eye                        |
| `azure-infra-docs`            | Azure infrastructure documentation | `kpfas`                  | KPFAS — Kenya Public Finance Automation |
| `here-app`                    | HERE — Mobility / mapping app      | `akosombo`               | Akosombo Library System                 |
| `skill-recommendation-engine` | Skill recommendation engine        | `partner-sync`           | Partner Sync                            |
| `pageindexollama`             | PageIndex + Ollama RAG             | `mpesa-tracker`          | M-Pesa Transaction Tracker              |

The old `/research/*` page type has no equivalent. There are no research
papers to replace them with; the type is dropped entirely.

---

## GLOBAL / LAYOUT

### `<Nav>` — `/portfolio/app/components/Nav.tsx`

**Brand mark (left side):**
```
nick nyagol
```
Render as lowercase. The amber dot (`nav-brand-dot`) before the name stays.

**Nav links (right side) — in order:**
```
Home  /
About  /about
Projects  /projects
Stack  /stack
Writing  /writing
Contact  /contact
```
No `/experience`, `/impact`, `/recommendations` links. These pages do not
exist and must not be linked.

### `<layout>` — meta tags

- `<title>` template: `{page title} · Nick Nyagol`
- Default description (for home): `"Civic-tech systems builder shipping
  multi-tenant platforms and public-finance tooling from Nairobi."`
- OG image: to be added in a later phase (Phase 5 of the build plan).
- Canonical: auto from Next.js App Router.

---

## PAGE: `/` — HOME

**File:** `/portfolio/app/page.tsx` *(already built, minor copy tweaks below)*

### Section order

1. Hero
2. "Currently" strip
3. Featured Projects (3 cards)
4. "How I Work" approach teaser (3 cards)

---

### Section 1 — Hero

| Slot | Copy |
|---|---|
| **Section label** (eyebrow, `hero-tagline` class) | `// civic-tech systems builder` |
| **H1 line 1** | `I'm Nick Nyagol,` |
| **H1 line 2** | `I build systems that serve people.` |
| **Body paragraph** | `Full-stack developer shipping multi-tenant platforms, public-finance tooling, and civic infrastructure from Nairobi. I turn constraints into architecture — 8 GB RAM, free-tier databases, and a relentless bias toward shipping.` |
| **Primary CTA button** | `View Projects →` → `/projects` |
| **Ghost CTA button** | `Get in Touch` → `/contact` |

*The H1 "Nick Nyagol" span gets the amber `--accent` colour. This is already
implemented.*

---

### Section 2 — "Currently" strip

Four `currently-item` cells in a horizontal bar:

| Label | Value |
|---|---|
| `Status` | `CS Diploma Student · Kasarani TVC` |
| `Attachment` | `Lab Technician · Technical University of Kenya` |
| `Building` | `Multi-Tenant MIS · Kenya Tender Eye` |
| `Location` | `Nairobi, Kenya 🇰🇪` |

*Already implemented. No change needed.*

---

### Section 3 — Featured Projects

Pull from `featuredSlugs = ["mis", "tender-eye", "kpfas"]` in
`/portfolio/app/data/projects.ts`. Three cards, each linking to
`/projects/{slug}`. Card content is driven by the `projects.ts` data (title,
status badge, tagline, first 4 stack tags).

*Already implemented. Data lives in `projects.ts` — see PROJECT DATA section
below for the authoritative copy for each field.*

---

### Section 4 — "How I Work" approach teaser

Three cards with amber icon emoji + heading + short body:

| Emoji + Heading | Body copy |
|---|---|
| `🛠 Constraint-Driven` | `8 GB RAM. 128 GB SSD. Azure VM for heavy lifts. These aren't limitations — they're architectural inputs. Every design decision accounts for what's actually available.` |
| `🤖 Multi-Model AI Workflow` | `I route tasks across a multi-model stack — Gemini for planning, Claude for code, GPT for copy. I call it "Antigravity." The workflow itself is a tool.` |
| `🚀 Ship First` | `Every project has a deploy URL or a working demo. I ship first and polish after. Momentum beats perfection when you're building from scratch.` |

*Already implemented.*

---

## PAGE: `/about`

**File:** `/portfolio/app/about/page.tsx` *(already built — copy is final)*

### Section order

1. Page header
2. Origin Story
3. Antigravity Workflow
4. Constraints (3 cards)
5. Education

---

### Section 1 — Page header

| Slot | Copy |
|---|---|
| **Section label** | `About` |
| **H1 line 1** | `Building from Nairobi,` |
| **H1 line 2** | `for systems that serve.` |
| **Lead paragraph** | `I'm Nick Nyagol Ochieng — a full-stack developer and CS diploma student at Kasarani Technical and Vocational College. I build multi-tenant platforms, civic-tech tools, and public-finance systems. Currently on industrial attachment as a lab technician at the Technical University of Kenya.` |

---

### Section 2 — Origin Story

| Slot | Copy |
|---|---|
| **Section label** | `Origin Story` |
| **Para 1** | `I started coding because I saw systems around me that didn't work — procurement portals that nobody could search, library records kept in paper notebooks, financial reports compiled manually every month. I didn't have a CS background or a powerful machine. What I had was a laptop with 8 GB of RAM, a 128 GB SSD, and a stubborn refusal to accept that "that's just how it is."` |
| **Para 2** | `My freelance brand is **Clown Nerds** — because the best builders don't take themselves too seriously, but they take the work very seriously. Under that banner, I ship real tools for real problems: multi-tenant platforms running on free-tier databases, procurement trackers that make government spending searchable, USSD-based civic infrastructure concepts that could reach anyone with a phone.` |

"Clown Nerds" renders in amber (`var(--accent)`).

---

### Section 3 — Antigravity Workflow

| Slot | Copy |
|---|---|
| **Section label** | `Workflow` |
| **H2** | `The "Antigravity" Method` |
| **Intro paragraph** | `I route tasks across a multi-model AI stack. It's not a product — it's how I work. Different models have different strengths, and I use that to ship faster than my hardware should allow:` |
| **List item 1** | `**Gemini** — strategic planning, architecture decisions, long-context analysis` |
| **List item 2** | `**Claude** — code generation, debugging, refactoring, documentation` |
| **List item 3** | `**GPT** — copywriting, user-facing content, brainstorming` |
| **List item 4** | `**Cursor** — IDE-integrated AI for real-time code completion and pair programming` |
| **Closing paragraph** | `The key insight: no single model is best at everything. By routing tasks to the right model, I get senior-engineer-level output from a student-level budget. The workflow itself is a competitive advantage.` |

---

### Section 4 — Constraints (3 cards)

| Section label | `Constraints` |
|---|---|
| **H2** | `What I build with` |

Three cards using `DM Mono` for the title value:

| Card title (mono, amber) | Card body |
|---|---|
| `8 GB RAM` | `Every dependency, every Docker container, every dev server competes for the same 8 gigs. This forces lean architecture decisions.` |
| `128 GB SSD` | `No room for bloated node_modules or idle projects. Everything on this machine earns its space.` |
| `Azure VM` | `For heavy builds, CI runs, and anything that would melt the laptop. Cloud compute as an extension of a constrained local setup.` |

---

### Section 5 — Education

| Slot | Copy |
|---|---|
| **Section label** | `Education` |
| **H2** | `Learning path` |

Two cards:

**Card 1:**
- Title: `Diploma in Computer Science — Level 6`
- Subtitle: `Kasarani Technical and Vocational College`
- Badge: `In Progress` (use `badge-active` class for amber pulse)
- Meta (mono): `Expected graduation: September 2027`

**Card 2:**
- Title: `Industrial Attachment — Lab Technician`
- Subtitle: `Technical University of Kenya`
- Badge: `Current` (use `badge-active` class)
- Meta (mono): `Hands-on technical environment experience`

> **⚠ No /experience page.** This Education section on /about IS the
> experience section. The old template's `/experience` (with HSBC/Coforge
> timeline) is dropped. There is no replacement corporate timeline because
> Nick has none yet. If a client or recruiter asks about experience, the
> project case studies are the answer.

---

## PAGE: `/projects`

**File:** `/portfolio/app/projects/page.tsx` *(already built)*

### Page header

| Slot | Copy |
|---|---|
| **Section label** | `Projects` |
| **H1** | `Things I've built` |
| **Lead paragraph** | `Every project here is a real build — deployed, used, or actively in development. No tutorials, no toy apps.` |

### Project grid

2-column grid (`grid-2`). All 6 projects from `projects.ts`, in this order:

1. `mis` — Multi-Tenant MIS Platform *(active)*
2. `tender-eye` — Kenya Tender Eye *(active)*
3. `kpfas` — KPFAS — Kenya Public Finance Automation *(wip)*
4. `akosombo` — Akosombo Library System *(shipped)*
5. `partner-sync` — Partner Sync *(shipped)*
6. `mpesa-tracker` — M-Pesa Tracker *(shipped)*

Each card shows: title, status badge, tagline, 3-line clipped description,
first 5 stack tags + overflow count.

---

## PROJECT DATA — `projects.ts`

The canonical source for all 6 projects. The file is
`/portfolio/app/data/projects.ts`. All fields below are the authoritative
copy. The current file already contains correct data — this section is the
reference for verification and any future edits.

---

### Project 1: `mis` — Multi-Tenant MIS Platform

```
slug:     "mis"
title:    "Multi-Tenant MIS Platform"
tagline:  "Shared-schema multi-tenant management information system"
status:   "active"

description:
  A multi-tenant Management Information System that serves multiple
  organizations from a single database using PostgreSQL Row-Level Security.
  Each tenant gets isolated data views, role-based access control, and their
  own dashboard — all running on one Neon database instance.

stack:
  Next.js, PostgreSQL, Neon, Drizzle ORM, Row-Level Security, Vercel,
  TypeScript

features:
  - Shared-schema multi-tenancy with PostgreSQL RLS policies
  - Per-tenant role-based access control (admin, manager, viewer)
  - Dynamic dashboard generation per organization
  - Automated tenant provisioning and onboarding flow
  - Real-time data isolation — zero cross-tenant leakage

challenge:
  Most multi-tenant solutions use schema-per-tenant or database-per-tenant,
  which gets expensive fast on managed databases. I needed a way to serve
  12+ organizations from a single Neon database without sacrificing data
  isolation or query performance.

approach:
  Implemented shared-schema multi-tenancy using PostgreSQL Row-Level Security
  (RLS) policies. Every table has a tenant_id column, and RLS policies enforce
  that queries only return rows belonging to the authenticated tenant. Drizzle
  ORM handles the schema migrations, and the auth layer injects tenant context
  into every database session.

outcome:
  12 active tenants running on a single Neon free-tier instance. Zero
  cross-tenant data incidents. Sub-100ms query times despite shared resources.

links:
  { label: "GitHub", url: "https://github.com/Clown-nerd" }
```

**Additional detail for the case-study page (not yet in the data schema —
add an `extended` or `body` MDX field when the MDX pipeline is ready):**
- Billing: dual Stripe + M-Pesa STK Push. Credentials stored
  AES-256-GCM encrypted.
- Money fields: `BIGINT` minor-unit to avoid floating-point errors.
- Platform admin: separate authorization track with cross-tenant audit
  logging.
- Composite primary keys: `tenant_id`-leading for index efficiency.

---

### Project 2: `tender-eye` — Kenya Tender Eye

```
slug:     "tender-eye"
title:    "Kenya Tender Eye"
tagline:  "Public procurement transparency tracker"
status:   "active"

description:
  A civic-tech platform that tracks and surfaces Kenyan government tender
  information, making public procurement data accessible and searchable.
  Built to increase transparency in how public funds are allocated through
  the tendering process.

stack:
  Next.js, PostgreSQL, Node.js, TypeScript, Vercel

features:
  - Aggregated tender data from multiple government sources
  - Full-text search across tender titles, descriptions, and entities
  - Tender status tracking (open, closed, awarded)
  - Email alerts for new tenders matching saved criteria
  - Public API for civic-tech developers and journalists

challenge:
  Government procurement data in Kenya is scattered across multiple portals,
  often in inconsistent formats and difficult to search. Citizens and watchdog
  organizations have no easy way to track how public money is being allocated.

approach:
  Built scrapers to normalize tender data from multiple government portals
  into a unified PostgreSQL database. Added full-text search with pg_trgm for
  fuzzy matching, and a Next.js frontend with filters for entity, category,
  and deadline. Email notification workers handle alert subscriptions.

outcome:
  Thousands of tenders indexed and searchable. Used by civic organizations
  and journalists tracking procurement patterns in county governments.

links:
  (none yet — add deploy URL when available)
```

**Hosting note:** Backend is Node/Express on Railway + Neon Postgres.

---

### Project 3: `kpfas` — Kenya Public Finance Automation System

```
slug:     "kpfas"
title:    "KPFAS — Kenya Public Finance Automation"
tagline:  "Queue-driven financial processing for public institutions"
status:   "wip"

description:
  A backend system designed to automate repetitive financial processes in
  Kenyan public institutions. Uses job queues to handle batch processing of
  financial reports, reconciliation tasks, and compliance checks without
  manual intervention.

stack:
  Node.js, Fastify, BullMQ, Redis, PostgreSQL, TypeScript

features:
  - Queue-based job processing with BullMQ + Redis
  - Automated financial report generation (monthly, quarterly)
  - Batch reconciliation engine for multi-source financial data
  - Retry logic with dead-letter queues for failed jobs
  - Admin dashboard for queue monitoring and job inspection

challenge:
  Public finance officers spend hours manually reconciling data from multiple
  systems and generating compliance reports. The process is error-prone and
  creates bottlenecks at end-of-month and end-of-quarter deadlines.

approach:
  Designed a Fastify API layer that accepts financial data inputs and enqueues
  processing jobs through BullMQ. Workers handle reconciliation, validation,
  and report generation asynchronously. Redis manages queue state, and dead-
  letter queues capture failures for manual review. PostgreSQL stores all
  processed results with full audit trails.

outcome:
  Currently in development. Architecture designed to handle batch processing
  of financial data at scale, with built-in retry logic and audit compliance.

links:
  (none yet)
```

**Additional detail for extended case-study:**
- Grounded in the Kenya Constitution and Public Finance Management (PFM)
  Act — compliance constraints shaped the data model.
- Playwright used for automated testing of report generation flows.
- pdfplumber Python microservice handles PDF report parsing.
- Frontend: React + TypeScript + Vite.

---

### Project 4: `akosombo` — Akosombo Library System

```
slug:     "akosombo"
title:    "Akosombo Library System"
tagline:  "Digital catalog and lending system for a public library"
status:   "shipped"

description:
  A library management system handling digital cataloging, member
  registration, book lending/returns, and overdue tracking. Built for a
  public library that previously operated entirely on paper records.

stack:
  Next.js, PostgreSQL, Node.js, TypeScript

features:
  - Digital book catalog with search and filter
  - Member registration and profile management
  - Lending and return workflow with due-date tracking
  - Overdue notifications and fine calculation
  - Admin dashboard for inventory and usage reports

challenge:
  The library operated on paper-based lending records. Finding books, tracking
  who had what, and managing overdue items was entirely manual — leading to
  lost books and frustrated members.

approach:
  Built a straightforward CRUD system with a focus on speed and simplicity.
  The catalog supports search by title, author, ISBN, and category. The
  lending module tracks checkout/return dates and auto-calculates fines. Kept
  the UI simple enough for library staff who aren't tech-savvy.

outcome:
  Fully digitized library operations. Staff report significant time savings on
  daily lending operations and near-zero lost-book incidents since adoption.

links:
  (none yet)
```

**Brand note for extended case-study:** This project has its own named design
system — "Akosombo — The Scholar's Archive" — with an African-heritage
aesthetic. Worth calling out in the case study as evidence of design thinking,
not just engineering.

**Stack note:** MERN-stack project (MongoDB/Express/React/Node). The `projects.ts`
currently lists `Next.js / PostgreSQL / Node.js / TypeScript`. **This needs
correction** — the actual stack is MongoDB + Express + React + Node.js.
Update `projects.ts` accordingly:

```ts
stack: ["React", "Node.js", "Express", "MongoDB", "TypeScript"]
```

---

### Project 5: `partner-sync` — Partner Sync

```
slug:     "partner-sync"
title:    "Partner Sync"
tagline:  "Private Android app for NGO partner coordination"
status:   "shipped"

description:
  A private Android application for coordinating and syncing partner
  organization data across NGO workflows. Built for internal testing with
  real-time database sync and secure authentication.

stack:
  Kotlin, Jetpack Compose, Firebase Auth, Firestore, Android

features:
  - Kotlin + Jetpack Compose native Android UI
  - Firebase Auth for secure partner login
  - Firestore real-time sync for partner records
  - Play Console internal testing track deployment

challenge:
  Partner organizations needed a lightweight mobile-first tool for staying
  in sync without browser-based infrastructure. Needed to work reliably on
  mid-range Android devices common across the partner network.

approach:
  Built a native Android app in Kotlin with Jetpack Compose for the UI layer.
  Firebase Auth handles secure login; Firestore provides real-time bidirectional
  sync with offline support. Deployed through Google Play Console on the
  internal testing track.

outcome:
  Private internal tool. Available on the internal testing track via Play
  Console. Actively used by the partner network it was built for.

links:
  (none — private app, no public repo)
```

**⚠ Data correction required.** The current `projects.ts` describes
`partner-sync` as a "data synchronization tool" with a Node/PostgreSQL/Redis
stack. That is **wrong** — this is a Kotlin/Android app with Firebase
backend. Replace the entire record with the spec above.

---

### Project 6: `mpesa-tracker` — M-Pesa Tracker

```
slug:     "mpesa-tracker"
title:    "M-Pesa Transaction Tracker"
tagline:  "Personal M-Pesa transaction analytics"
status:   "shipped"

description:
  A personal finance tool that parses M-Pesa SMS transaction messages and
  generates spending analytics, category breakdowns, and monthly reports.
  Turns raw transaction SMSes into actionable financial insights.

stack:
  React Native, Node.js, PostgreSQL, TypeScript

features:
  - SMS parser for M-Pesa transaction confirmation messages
  - Auto-categorization of transactions (food, transport, bills, etc.)
  - Monthly spending breakdown with visual charts
  - Transaction search and filter
  - Export reports as PDF or CSV

challenge:
  M-Pesa is the primary payment method for millions of Kenyans, but there's
  no built-in spending analytics. Transaction history is just a list of SMSes
  — no categorization, no trends, no insights.

approach:
  Built a regex-based parser that extracts amount, recipient, date, and type
  from M-Pesa SMS formats. A rules engine auto-categorizes transactions based
  on recipient patterns. The React Native dashboard renders charts and allows
  manual category corrections that train future auto-categorization.

outcome:
  Personal tool that provides clear visibility into monthly M-Pesa spending
  patterns. Exported reports used for personal budgeting and expense tracking.

links:
  (none yet)
```

**⚠ Data correction required.** The current `projects.ts` lists
`Next.js / Node.js / PostgreSQL / TypeScript` for mpesa-tracker. The brief
says this is **React Native**, not Next.js. Update the stack field:

```ts
stack: ["React Native", "Node.js", "PostgreSQL", "TypeScript"]
```

---

## PAGE: `/projects/[slug]`

**File:** `/portfolio/app/projects/[slug]/page.tsx` *(already built)*

The detail page reads from `projects.ts`. No copy changes needed to the
template — all copy lives in the data file. The layout sections are:

1. Back link: `← Back to Projects`
2. Status badge
3. H1: `{project.title}`
4. Lead: `{project.tagline}`
5. Main column: Overview → Challenge → Approach → Key Features → Outcome
6. Sidebar: Tech Stack tags | Status badge | Links (if any)

**Future enhancement (Phase 4 — MDX pipeline):** When MDX is wired up, the
`description` / `challenge` / `approach` / `outcome` fields should be
replaced with a `content` MDX field that allows richer formatting (callouts,
code blocks, architecture diagrams).

---

## PAGE: `/stack`

**File:** `/portfolio/app/stack/page.tsx` *(already built)*

### Page header

| Slot | Copy |
|---|---|
| **Section label** | `Stack` |
| **H1** | `What I build with` |
| **Lead paragraph** | `Not a logo wall — these are tools I actually use in production, grouped by how I use them. Each one earned its place.` |

### Stack groups and items

Groups rendered in this order, with the exact annotation copy:

**Frontend**
| Tool | Annotation |
|---|---|
| Next.js | Primary framework — all projects |
| React | UI layer for every frontend |
| TypeScript | Type safety across the full stack |

**Backend**
| Tool | Annotation |
|---|---|
| Node.js | Runtime for APIs and workers |
| Fastify | KPFAS API layer — fast, schema-validated |
| Express | Simpler APIs and prototypes |
| BullMQ | Job queues for KPFAS batch processing |

**Data**
| Tool | Annotation |
|---|---|
| PostgreSQL | Primary database — RLS, full-text search |
| Neon | Serverless Postgres — free tier for MIS |
| Drizzle ORM | Type-safe schema + migrations |
| Redis | Queue state, caching, session store |

**Infrastructure**
| Tool | Annotation |
|---|---|
| Vercel | Deploy target for Next.js projects |
| Azure VM | Heavy builds, CI, overflow compute |
| Docker | Containerized deployments |
| GitHub Actions | CI/CD pipelines |
| Ubuntu | Dev and server OS |

**AI Tooling**
| Tool | Annotation |
|---|---|
| Gemini | Planning, architecture, long-context analysis |
| Claude | Code generation, debugging, documentation |
| GPT | Copywriting, brainstorming, user content |
| Cursor | IDE-integrated AI pair programming |

**Languages**
| Tool | Annotation |
|---|---|
| TypeScript | Primary language |
| Python | Scripts, data processing, automation |
| SQL | Complex queries, RLS policies, migrations |
| Bash | Automation, deployment scripts |

**Mobile (add this group — currently missing from `stack/page.tsx`)**
| Tool | Annotation |
|---|---|
| Kotlin | Partner Sync Android app |
| Jetpack Compose | Native Android UI layer |
| React Native | M-Pesa Tracker mobile app |
| Firebase | Auth + Firestore for Partner Sync |

> **Action required:** Add the Mobile group to `/portfolio/app/stack/page.tsx`.
> The current file has 6 groups; it needs a 7th.

---

## PAGE: `/writing`

**File:** `/portfolio/app/writing/page.tsx` *(already built, articles are stubs)*

### Page header

| Slot | Copy |
|---|---|
| **Section label** | `Writing` |
| **H1** | `Build logs & essays` |
| **Lead paragraph** | `Technical writing about what I'm building, how I work, and what I'm learning. No fluff — just the decisions, trade-offs, and outcomes.` |

### Articles list

Three articles currently defined as stubs (no MDX route exists yet). Keep the
stubs exactly as-is but update the "coming soon" footer text from the generic
note to something more useful:

```
// article coming — MDX pipeline ships in Phase 4
```

**Stub articles (copy is final — these become real MDX posts in Phase 4):**

**Article 1**
```
slug:     "multi-tenancy-rls"
title:    "Why I Chose Row-Level Security Over Schema-Per-Tenant"
date:     "2026-07"
category: "Build Log"
excerpt:  "A walkthrough of the architectural decision behind the MIS
           platform's multi-tenancy model — why RLS won over schema
           isolation, and the trade-offs I made along the way."
```

**Article 2**
```
slug:     "antigravity-workflow"
title:    "The Antigravity Workflow: Routing Tasks Across AI Models"
date:     "2026-06"
category: "Workflow"
excerpt:  "How I use Gemini, Claude, GPT, and Cursor together — not as a
           gimmick, but as a legitimate productivity multiplier for a solo
           developer on constrained hardware."
```

**Article 3**
```
slug:     "civic-tech-nairobi"
title:    "Building Civic Tech From Nairobi: What Nobody Tells You"
date:     "2026-05"
category: "Essay"
excerpt:  "The reality of building government-adjacent software in Kenya —
           M-Pesa integrations, USSD constraints, institutional inertia,
           and why I keep doing it anyway."
```

> **⚠ Flag: Articles are stubs.** No MDX pipeline exists yet (Phase 4 of
> the build plan). Cards currently render with a `cursor: default` style,
> which signals they're not clickable. This is honest — don't fake routing
> to 404 pages. The right behaviour is: cards display, excerpt shows, a mono
> label reads `// coming in Phase 4`. Do not add fake "Read more" links.

---

## PAGE: `/contact`

**File:** `/portfolio/app/contact/page.tsx` *(already built)*

### Page header

| Slot | Copy |
|---|---|
| **Section label** | `Contact` |
| **H1** | `Let's build something` |
| **Lead paragraph** | `I'm open to freelance projects, civic-tech collaborations, and conversations about building systems that serve people. Based in Nairobi, available remotely.` |

### Contact links

Three links, in this order:

**Email**
- Icon: envelope SVG (already in file)
- Primary text: `nicknyagol@gmail.com`
- Sub-label: `Email — best for project inquiries`
- `href`: `mailto:nicknyagol@gmail.com`
- `id`: `contact-email`

**GitHub (Clown-nerd org)**
- Icon: GitHub SVG (already in file)
- Primary text: `Clown-nerd`
- Sub-label: `GitHub — main org for freelance work`
- `href`: `https://github.com/Clown-nerd`
- `id`: `contact-github`

**GitHub (personal)**
- Icon: GitHub SVG
- Primary text: `Nyagol-dev`
- Sub-label: `GitHub — personal experiments`
- `href`: `https://github.com/Nyagol-dev`
- `id`: `contact-github-personal`

### Availability note

Rendered as an amber-bordered card below the links:

```
// availability

Currently open to freelance projects and collaborations.
Especially interested in civic-tech, government tooling, and
multi-tenant SaaS. Based in Nairobi (EAT, UTC+3).
```

Mono label in amber. Body text in `--text-secondary`.

> **⚠ Flag: No LinkedIn URL confirmed.** The brief lists LinkedIn as a
> contact channel but does not provide the URL. Two options:
> (a) Add a LinkedIn link when the URL is confirmed, or
> (b) Omit LinkedIn until confirmed.
> **Recommendation:** omit for now. Three honest links beat four where one
> is a placeholder.

> **⚠ Flag: No Twitter/X confirmed.** Same situation. Brief says
> "Twitter/X (if applicable)." Omit until confirmed.

---

## DROPPED PAGES — WHAT TO DO WITH EACH

| Dropped page | Old template content | Why dropped | Action |
|---|---|---|---|
| `/experience` | HSBC, Coforge, PrismForce timeline | No corporate employment history | **No replacement needed.** Education is on `/about`. Projects are the experience. |
| `/impact` | "100K+ users", "99.99% uptime" — Ashwin's metrics | Vanity metrics from someone else's career | **No replacement needed.** Impact is embedded per-project in the `outcome` field of each case study. |
| `/recommendations` | Corporate testimonials from HSBC etc. | No real testimonials yet | **See flag below.** |
| `/research/*` (4 pages) | PINNs, PhysClip, ScholarOS, etc. | Ashwin's academic work — not Nick's | **No replacement.** Drop the page type entirely. |
| `/work/*` (6 pages) | Ashwin's client case studies | Replaced by `/projects/[slug]` | **Fully replaced.** See the slot map at the top of this document. |

> **⚠ Flag: `/recommendations` — no honest replacement exists yet.**
>
> Nick does not currently have real testimonials to display. Three options:
>
> **Option A (recommended):** Drop the page entirely for now. Add a single
> honest line to the `/contact` page: `"If we've worked together and you'd
> like to leave a note, email me."` Add the page back when real quotes exist.
>
> **Option B:** Keep the page but make it a "What I'm building toward" intent
> statement — e.g., community context (Rover Scouts, ICYE, Kasarani TVC
> network) as social proof of character rather than client endorsements.
>
> **Option C:** Replace with a "From the codebase" section — git commit
> volume, deploy frequency, lines of meaningful code. Honest, verifiable,
> but risks feeling defensive.
>
> **Current recommendation: Option A.** Do not create the page. Do not link
> to it from the nav. Revisit when Nick has a real quote from a client,
> collaborator, or lecturer.

---

## NORTH-STAR CONCEPT: BnB Quantum-Kenya

Per the brief: **not a shipped product, treat as a north-star concept only.**

**Do not** create a `/projects/bnb-quantum` page yet.
**Do not** list it on `/projects` unless it has a working prototype.
**Acceptable** (optional): a one-line mention in the `/about` Origin Story or
in a future Writing essay titled "Why I'm Thinking About Semiconductor Fabs
in Kenya." That framing is honest — it's clearly labelled as a long-view
thesis, not a shipped build.

---

## COPY CORRECTIONS REQUIRED IN EXISTING CODE

These are mismatches between what's currently in `projects.ts` and Nick's
actual project descriptions from the brief:

| Project | Field | Current (wrong) | Correct |
|---|---|---|---|
| `akosombo` | `stack` | `["Next.js", "PostgreSQL", "Node.js", "TypeScript"]` | `["React", "Node.js", "Express", "MongoDB", "TypeScript"]` |
| `partner-sync` | `tagline` | `"NGO partner data synchronization tool"` | `"Private Android app for NGO partner coordination"` |
| `partner-sync` | `stack` | `["Node.js", "PostgreSQL", "TypeScript", "Redis"]` | `["Kotlin", "Jetpack Compose", "Firebase Auth", "Firestore", "Android"]` |
| `partner-sync` | `description` | Web/Node sync tool description | Android app with Firebase Auth + Firestore (see Project 5 spec above) |
| `partner-sync` | `challenge` / `approach` / `outcome` | Generic NGO sync copy | Android-native copy (see Project 5 spec above) |
| `mpesa-tracker` | `stack` | `["Node.js", "Next.js", "PostgreSQL", "TypeScript"]` | `["React Native", "Node.js", "PostgreSQL", "TypeScript"]` |

---

## SEO METADATA — PER PAGE

| Page | `<title>` | `<meta description>` |
|---|---|---|
| `/` | `Nick Nyagol · Civic-Tech Systems Builder` | `Full-stack developer shipping multi-tenant platforms, public-finance tooling, and civic infrastructure from Nairobi, Kenya.` |
| `/about` | `About · Nick Nyagol` | `Nick Nyagol Ochieng — CS student, civic-tech builder, and full-stack developer based in Nairobi, Kenya.` |
| `/projects` | `Projects · Nick Nyagol` | `Multi-tenant platforms, civic-tech tools, and public-finance systems built by Nick Nyagol Ochieng.` |
| `/projects/mis` | `Multi-Tenant MIS Platform · Nick Nyagol` | `Shared-schema multi-tenancy using PostgreSQL RLS — 12 active tenants, one Neon database.` |
| `/projects/tender-eye` | `Kenya Tender Eye · Nick Nyagol` | `Civic-tech platform making Kenyan government procurement data accessible and searchable.` |
| `/projects/kpfas` | `KPFAS · Nick Nyagol` | `Queue-driven public finance automation for Kenyan institutions. Node.js, Fastify, BullMQ.` |
| `/projects/akosombo` | `Akosombo Library System · Nick Nyagol` | `MERN-stack library management system — digitized catalog, lending, and overdue tracking.` |
| `/projects/partner-sync` | `Partner Sync · Nick Nyagol` | `Native Android app for NGO partner coordination. Kotlin, Jetpack Compose, Firebase.` |
| `/projects/mpesa-tracker` | `M-Pesa Tracker · Nick Nyagol` | `Personal finance tool parsing M-Pesa SMS transactions into spending analytics.` |
| `/stack` | `Stack · Nick Nyagol` | `The tools Nick Nyagol Ochieng uses in production — grouped by function, annotated with context.` |
| `/writing` | `Writing · Nick Nyagol` | `Build logs, case studies, and technical essays by Nick Nyagol Ochieng.` |
| `/contact` | `Contact · Nick Nyagol` | `Get in touch with Nick Nyagol Ochieng — open to freelance projects, collaborations, and civic-tech conversations.` |

---

## OPEN QUESTIONS STILL UNRESOLVED

These came from the BRAND_BRIEF open questions section. None have been
answered in the brief itself. Flag these to Nick before Phase 5 (polish/SEO):

| # | Question | Blocks what |
|---|---|---|
| 1 | **Domain / hosting** — Vercel, GitHub Pages, or other? | `next.config.ts` `basePath`, OG image absolute URLs |
| 2 | **Profile photo** — headshot or no? | `/about` header, OG image |
| 3 | **Project screenshots** — do any exist for MIS, Tender Eye, etc.? | `/projects/[slug]` hero image slot |
| 4 | **Public GitHub repos** — which are public? | "GitHub" links on case study sidebar |
| 5 | **LinkedIn URL** — confirmed or not? | `/contact` link list |
| 6 | **Twitter/X** — active account? | `/contact` link list |
| 7 | **"Clown Nerds" vs "Nick Nyagol"** branding on the portfolio itself | Nav brand mark, OG metadata |
| 8 | **BnB Quantum-Kenya** — mention in `/about` origin story or stay completely off-site? | `/about` Section 2 last paragraph |
