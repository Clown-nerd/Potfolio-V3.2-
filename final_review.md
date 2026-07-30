# Final Review — First-Impression Audit

> Reviewed as a recruiter or potential client landing on this site cold, with zero context about who Nick is.

---

## The Honest Verdict

**This does not read like a reskinned template.** The old Ashwin Gupta / holographic-HUD identity is completely gone — no stray names, no fake corporate clients, no sci-fi aesthetic bleed-through. The content is specific, grounded, and clearly belongs to one person. That's a genuine achievement for a template-to-real-portfolio migration.

**But** it also doesn't feel *finished.* A recruiter would clock several "this is still under construction" signals within 30 seconds. Those need to be resolved before this goes live.

---

## 🔴 Fix Before Launch

### 1. Two broken CSS variables — visible rendering bugs

[contact/page.tsx](file:///home/nickson/Projects/Potfolio(V3.2)/portfolio/app/contact/page.tsx#L118-L130) uses `var(--bg-card)` and `var(--text-muted)`, neither of which exists in [globals.css](file:///home/nickson/Projects/Potfolio(V3.2)/portfolio/app/globals.css). The testimonial-fallback card at the bottom of `/contact` is rendering with a **transparent background and invisible text** — it's effectively a ghost element. Either:
- Define the variables (map `--bg-card` → `--bg-secondary`, `--text-muted` → `--text-tertiary`)
- Or replace inline with the existing token names

### 2. Missing `badge-shipped` CSS class

Three projects (`akosombo`, `partner-sync`, `mpesa-tracker`) have `status: "shipped"`, which renders `<span class="badge badge-shipped">`. There is **no `.badge-shipped` rule** in [globals.css](file:///home/nickson/Projects/Potfolio(V3.2)/portfolio/app/globals.css). Those badges are unstyled — they'll appear as naked text with the base `.badge` pill styling but no background/color differentiation. Add a rule — e.g., a cool indigo or a neutral gray to distinguish from "active" (green) and "wip" (indigo).

### 3. Fastify logo maps to `fastapi.svg`

[stack/page.tsx line 33](file:///home/nickson/Projects/Potfolio(V3.2)/portfolio/app/stack/page.tsx#L33): Fastify's logo is set to `fastapi.svg`. That's FastAPI (a Python framework), not Fastify (a Node.js framework). A recruiter who knows their backend tools will notice. Either source a Fastify logo or drop the `logo` field so it falls back to the amber initial-letter placeholder.

### 4. `/writing` articles all say "coming — MDX pipeline ships in Phase 4"

A stranger doesn't know what "Phase 4" means. Three article stubs with a developer's internal milestone label reads as "this person published a site with nothing on it." Two options:
- **Remove the phase reference** — change the note to something like `// article in progress` or just omit it entirely
- **Or remove the Writing page from the nav** until at least one article is real. A page of coming-soon cards actively *hurts* credibility. Better to have 5 nav links than 6 where one is empty shelving.

### 5. Stack page: Missing "Mobile" group

The CONTENT_SPEC explicitly calls for a 7th group — **Mobile** (Kotlin, Jetpack Compose, React Native, Firebase). Without it, the Partner Sync and M-Pesa Tracker projects cite Android/mobile tech that doesn't appear anywhere on `/stack`. That's a coherence gap a technical reviewer would spot.

### 6. No `<head>` font preconnect

Fonts load via `@import url(...)` in CSS, which is a render-blocking chain (HTML → CSS → Google Fonts). Add `<link rel="preconnect" href="https://fonts.googleapis.com">` and `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` in [layout.tsx](file:///home/nickson/Projects/Potfolio(V3.2)/portfolio/app/layout.tsx) to shave ~200ms off first paint. Not a bug, but it'll tank your Lighthouse score.

### 7. `metadataBase` points to `https://nicknyagol.dev` — is that domain live?

[layout.tsx line 14](file:///home/nickson/Projects/Potfolio(V3.2)/portfolio/app/layout.tsx#L14): If this domain isn't registered and serving, OG previews will generate broken canonical URLs when shared on LinkedIn/Twitter. Either confirm the domain or change to a placeholder you actually control.

---

## 🟡 Fix Soon (Not Blockers, But Noticeable)

### 8. Project detail pages duplicate the tech stack

The [project detail page](file:///home/nickson/Projects/Potfolio(V3.2)/portfolio/app/projects/[slug]/page.tsx#L68-L75) renders the full stack twice — once in the main content body (`<h2>Stack</h2>` + tags) and once in the sidebar (`Tech Stack` label + tags). On desktop, a recruiter sees the identical tag list side-by-side. Either remove the main-content version or replace it with a prose explanation of *why* those tools were chosen.

### 9. Case study section labeling — "Problem" vs "Overview"

The CONTENT_SPEC specifies the section order as `Overview → Challenge → Approach → Key Features → Outcome`. The actual [detail page](file:///home/nickson/Projects/Potfolio(V3.2)/portfolio/app/projects/[slug]/page.tsx#L62) renders `Problem → Approach → Stack → Outcome`. The "Challenge" field from `projects.ts` **isn't rendered at all**. The Key Features list is also missing from the detail page. You're losing two of your strongest content sections.

### 10. Only one project has a link

Only `mis` has a GitHub link. The other five show no links at all. A recruiter will immediately wonder: *where's the code? Is this real?* Even linking to the Clown-nerd org as a fallback is better than empty sidebars.

### 11. About page labels "Experience & Education" — spec says just "Education"

[about/page.tsx line 163](file:///home/nickson/Projects/Potfolio(V3.2)/portfolio/app/about/page.tsx#L163): The section label says `Experience & Education` and the heading says `Experience & learning path`. The BRAND_BRIEF explicitly says there's no experience page because there's no corporate history to show. Calling this section "Experience" invites the question "is this all?" — the CONTENT_SPEC labels it just `Education` / `Learning path` to avoid that framing.

---

## 🟢 What's Genuinely Strong — Lean Into These

### The "Currently" strip is the best thing on the site

The horizontal bar on the homepage (`CS Diploma Student · Kasarani TVC` / `Lab Technician · TU Kenya` / `Multi-Tenant MIS · Kenya Tender Eye` / `Nairobi, Kenya 🇰🇪`) communicates more about who you are in 4 cells than most portfolios manage in 4 paragraphs. It's honest, specific, and immediately locates you. **Keep this. Consider making it sticky or repeating a simplified version in the footer.**

### The constraint cards are a real differentiator

"8 GB RAM / 128 GB SSD / Azure VM" is the most memorable section on the entire site. No other junior portfolio leads with their hardware limitations as an *architectural philosophy*. This is the kind of thing a recruiter tells their colleague about. **This is your signature section — it should be more prominent.** Consider referencing these constraints in individual project case studies ("built on the 8 GB machine using…").

### Civic-tech framing is uncommon and credible

Tender Eye, KPFAS, and the M-Pesa Tracker aren't toys — they solve problems that are clearly rooted in Kenyan context. Most student portfolios have a todo app and a weather widget. You have a government procurement tracker and a public finance automation backend. The framing doesn't oversell ("used by journalists tracking procurement patterns") and doesn't undersell. **This positioning is rare. Protect it.**

### Voice is consistent and specific

"I turn constraints into architecture" / "no tutorials, no toy apps" / "the workflow itself is a competitive advantage" — the copy doesn't read like AI-generated filler. It reads like a person with opinions. The brand brief's voice guidelines were followed well.

### The Antigravity workflow section is interesting but walks a line

Listing "Gemini for planning, Claude for code, GPT for copy" is transparent and unusual. But it could also read as "I use AI to do my work." **Add one line that makes the human judgment explicit** — something like "The models write drafts. I make the decisions." Otherwise a skeptical hiring manager will file this under "AI-dependent."

---

## Summary Punch-List

| Priority | Item | Effort |
|---|---|---|
| 🔴 | Fix `--bg-card` / `--text-muted` undefined CSS vars in contact page | 5 min |
| 🔴 | Add `.badge-shipped` CSS rule | 5 min |
| 🔴 | Fix Fastify → `fastapi.svg` logo mapping | 2 min |
| 🔴 | Remove or reword "Phase 4" text on `/writing` stubs | 5 min |
| 🔴 | Add Mobile stack group (Kotlin, Jetpack Compose, React Native, Firebase) | 10 min |
| 🔴 | Add font preconnect links to layout | 3 min |
| 🔴 | Verify `nicknyagol.dev` domain or update `metadataBase` | 2 min |
| 🟡 | Remove duplicate stack rendering on project detail pages | 5 min |
| 🟡 | Add Challenge + Key Features to project detail page | 15 min |
| 🟡 | Add fallback GitHub org links to linkless projects | 10 min |
| 🟡 | Rename "Experience & Education" → "Education" on about page | 2 min |

> **Total to address all red items: ~30 minutes of work.** Do those and this is launch-ready. The yellow items make it *better* but won't embarrass you if a recruiter sees the site tomorrow.
