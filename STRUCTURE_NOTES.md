# STRUCTURE_NOTES.md

## Overview
Based on the `BRAND_BRIEF.md` tech-approach decision, the Next.js 14 (App Router) shared skeleton has been verified and fully scaffolded at `/portfolio/`. The foundational elements are now in place to support the content injection in the next phase.

## What Was Set Up
- **Global Layout (`app/layout.tsx`)**: Updated `<title>` templates and default `<meta description>` to perfectly match the `CONTENT_SPEC.md` ("Nick Nyagol · Civic-Tech Systems Builder").
- **Design Tokens (`app/globals.css`)**: Verified that the "Terminal Meets Dashboard" design system is correctly implemented. CSS variables (`--bg-primary`, `--accent`, etc.) and typography (DM Sans, DM Mono) reflect the new brand direction. Playfair Display has been dropped.
- **Shared Chrome (`app/components/Nav.tsx`, `app/components/Footer.tsx`)**: The global navigation and footer are finalized. The Nav features the lowercase `nick nyagol` brand mark with the amber dot, and correctly links only to `/`, `/about`, `/projects`, `/stack`, `/writing`, and `/contact`.
- **Assets & Logos**: 
  - Created `/portfolio/public/logos/` and moved only the active stack logos (`postgresql.svg`, `docker.svg`, `vercel.svg`, `github.svg`, `typescript.svg`, `python.svg`, `redis.svg`, `ubuntu.svg`, `azure.svg`, `mongodb.svg`, `githubactions.svg`). The unused/irrelevant logos remain in the old root `/logos` directory but are not in the Next.js build.
  - Migrated `vendor/mermaid.min.js` to `/portfolio/public/vendor/` to support the architecture diagrams needed when the MDX pipeline is built in Phase 4.

## Files & Slots Ready for Content
The following files are now empty shells or contain placeholder text and are ready for the exact copy defined in `CONTENT_SPEC.md`:

### 1. Page Routes
- **`app/page.tsx`**: Ready for Hero, "Currently" strip data, Featured Projects (3 cards), and "How I Work" approach teaser.
- **`app/about/page.tsx`**: Ready for Page header, Origin Story, Antigravity Workflow, Constraints (3 cards), and Education sections.
- **`app/projects/page.tsx`**: Ready for Page header and Project grid setup.
- **`app/projects/[slug]/page.tsx`**: Layout is ready to consume data from `projects.ts`.
- **`app/stack/page.tsx`**: Ready for Stack groups and items. *(Note: Must add the 'Mobile' group per the flag in CONTENT_SPEC.md)*.
- **`app/writing/page.tsx`**: Ready for Page header and the 3 stub articles (with the updated "coming in Phase 4" label).
- **`app/contact/page.tsx`**: Ready for Page header, Contact links (Email, GitHub org, GitHub personal), and the Availability note.

### 2. Data Files
- **`app/data/projects.ts`**: The schema is ready, but requires copy updates and corrections for `akosombo`, `partner-sync`, and `mpesa-tracker` to match the real stack and project descriptions detailed in `CONTENT_SPEC.md`.

*Note: All dropped pages (`/experience`, `/impact`, `/recommendations`, `/research/*`) have been entirely omitted from the Next.js structure.*
