# Scroll Architecture

> **Single animation system**: GSAP ScrollTrigger drives every scroll-linked animation on this site. There is no IntersectionObserver, no CSS-transition-based reveal system — only GSAP. The one exception is `RevealImage`, which uses a native CSS `animation-timeline: view()` composited animation (no JS, no conflict).

---

## 1. Sitewide Stagger Reveals — `useStaggerReveal`

### What it does

Replaces the old `.fade-up` + IntersectionObserver system. Elements with the `.fade-up` class start invisible (`opacity: 0; translateY: 24px; scale: 0.97`) and animate into place when they scroll into view.

Uses `ScrollTrigger.batch()` under the hood — elements entering the viewport in the same frame are grouped and staggered as a cohort, which is far more performant than creating individual ScrollTrigger instances.

### Hook API

```ts
import { useStaggerReveal } from "@/app/hooks/useStaggerReveal";

// Default: targets all ".fade-up" elements in the document
useStaggerReveal();

// Custom selector
useStaggerReveal(".reveal-item");

// Scoped to a container ref (useful for dynamically loaded content)
const containerRef = useRef<HTMLDivElement>(null);
useStaggerReveal(".fade-up", containerRef);
```

**Parameters:**

| Param      | Type                             | Default      | Description                                    |
|------------|----------------------------------|--------------|------------------------------------------------|
| `selector` | `string`                         | `".fade-up"` | CSS selector for revealable elements           |
| `scope`    | `RefObject<HTMLElement \| null>` | `undefined`  | Limits query to a subtree (optional)           |

### How it's activated

`<GsapInit />` is rendered in `layout.tsx` and calls `useStaggerReveal()` once — this covers all `.fade-up` elements sitewide. The hook re-runs on every route change (via `usePathname()`) so soft-navigated pages get picked up automatically.

### CSS requirement

Elements must have the `.fade-up` class in `globals.css`, which sets the initial hidden state:

```css
.fade-up {
  opacity: 0;
  transform: translateY(24px) scale(0.97);
  will-change: transform, opacity;
}
```

GSAP animates to `{ opacity: 1, y: 0, scale: 1 }` — no `.visible` class is toggled.

### Animation values

| Property  | From    | To    | Duration | Ease          | Stagger |
|-----------|---------|-------|----------|---------------|---------|
| `opacity` | `0`     | `1`   | 0.6s     | `power3.out`  | 0.08s   |
| `y`       | `24px`  | `0`   | 0.6s     | `power3.out`  | 0.08s   |
| `scale`   | `0.97`  | `1`   | 0.6s     | `power3.out`  | 0.08s   |

### Reduced motion

If `prefers-reduced-motion: reduce` is active, `gsap.set()` snaps all elements to final state immediately — no animation at all.

---

## 2. Pinned Project Showcase — `<PinnedShowcase />`

### What it does

A pinned, scrub-driven component for featuring a project. The container pins to the viewport, and scroll input drives a single GSAP timeline that controls both a depth-exploded image view and crossfading text stages.

### Component API

```tsx
import PinnedShowcase from "@/app/components/PinnedShowcase";
import type { ShowcaseStage } from "@/app/components/PinnedShowcase";

const stages: ShowcaseStage[] = [
  { label: "Overview",   detail: "What the project does..." },
  { label: "Tech Stack", detail: "Built with Next.js, PostgreSQL..." },
  { label: "Approach",   detail: "How the architecture was designed..." },
  { label: "Impact",     detail: "12 active tenants, zero incidents..." },
];

<PinnedShowcase
  images={[
    "/projects/tender-eye-1.png",
    "/projects/tender-eye-2.png",
    "/projects/tender-eye-3.png",
  ]}
  stages={stages}
  className="my-custom-wrapper"
/>
```

**Props:**

| Prop        | Type               | Required | Description                                     |
|-------------|--------------------| ---------|-------------------------------------------------|
| `images`    | `string[]`         | Yes      | 2–3 image paths used as depth layers            |
| `stages`    | `ShowcaseStage[]`  | Yes      | Text stages to crossfade through                |
| `className` | `string`           | No       | Optional wrapper class                          |

**`ShowcaseStage` type:**

```ts
interface ShowcaseStage {
  label: string;   // e.g. "Overview"
  detail: string;  // paragraph of text
}
```

### Scroll-Progress → Timeline Mapping (0 → 1)

The component pins for **3 viewport-heights** of scroll travel (`end: "+=300%"`). A single `gsap.timeline` with `scrub: 0.8` maps scroll position to timeline progress:

```
Progress  Visual (Images)                         Text (Stages)
────────  ──────────────────────────────────────  ──────────────────────────
0.00      All images stacked flat, centered       Stage 0 visible
          ↓ Images separate — translateZ/X/Y      ↓ Stage 0 fades out
          ↓ diverge, slight rotateY/X applied     ↓
0.30      Full exploded view (max Z-spread)       Stage 1 fades in
          ↓ Hold exploded, subtle drift           ↓ Stages crossfade
          ↓ (±15px Z wobble, ±2° rotation)        ↓ evenly distributed
0.70      Images begin collapsing back            Penultimate stage fading
          ↓ translateZ/X/Y → 0                    ↓
1.00      Images reconverge, settled              Final stage fully visible
```

**Key design decisions:**

- **One timeline, two tracks**: Image depth + text crossfade are keyframes on the _same_ `gsap.timeline`. They share the identical scroll-progress value — never two separately-synced animations.
- **`scrub: 0.8`**: Adds 0.8s of smooth lag. Scrolling back plays in reverse; stopping mid-scroll freezes the animation exactly where it is.
- **Pin release**: ScrollTrigger automatically unpins the container when progress reaches 1.

### Depth Effect Details

Images are wrapped in a container with `perspective: 1200px`. Each image layer animates:

| Layer | translateZ | xPercent | yPercent | rotateY | rotateX | opacity |
|-------|------------|----------|----------|---------|---------|---------|
| Front | +60px      | -6%      | -4%      | -4°     | +2°     | 1.00    |
| Mid   | -120px     | +4%      | +3%      | +6°     | -3°     | 0.88    |
| Back  | -280px     | -2%      | +6%      | -8°     | +4°     | 0.76    |

These are the values at peak separation (~progress 0.30). The images converge back to `translateZ(0)` by progress 1.00.

### Reduced Motion Fallback

When `prefers-reduced-motion: reduce` is active:
- **No pin, no scrub** — the section scrolls normally
- **No 3D transforms** — images render flat, stacked vertically
- **Text stages** render as a vertical stack, all visible, separated by dividers
- The `.pinned-showcase--reduced` CSS modifier class handles the layout shift

### Performance Contract

| ✅ Animated              | ❌ Never Animated              |
|--------------------------|-------------------------------|
| `transform` (all axes)   | `width`, `height`             |
| `opacity`                | `top`, `left`, `right`        |
|                          | `margin`, `padding`           |
|                          | `border-width`                |

- `will-change: transform, opacity` is applied only while the pin is active, removed on leave
- Image layers use `contain: layout style` for paint isolation
- Target: 60fps — only compositor-friendly properties are touched

---

## 3. Architecture Summary

```
layout.tsx
  └─ <GsapInit />                    ← Sitewide, renders null
       └─ useStaggerReveal()          ← ScrollTrigger.batch(".fade-up")

[any page].tsx
  ├─ .fade-up elements               ← Auto-revealed by the batch
  └─ <PinnedShowcase />              ← Self-contained pinned section
       └─ Own ScrollTrigger timeline  ← Pin + scrub + depth + crossfade
```

**No competing systems**: The old IntersectionObserver (`ScrollAnimator.tsx`) has been deleted. GSAP ScrollTrigger is the only scroll-animation driver.

---

## 4. Wiring Into Pages (Next Steps)

To use `PinnedShowcase` on a project detail page:

1. Import the component and its `ShowcaseStage` type
2. Map the project's data (`description`, `stack`, `approach`, `outcome` from `projects.ts`) to `ShowcaseStage[]`
3. Pass the project's screenshot paths as `images[]`
4. Render `<PinnedShowcase images={...} stages={...} />` where you want the pinned section

The `.fade-up` stagger system requires no page changes — it works on any element with the `.fade-up` class, exactly as before.
