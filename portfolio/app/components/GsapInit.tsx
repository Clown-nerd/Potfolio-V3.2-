"use client";

import { useStaggerReveal } from "../hooks/useStaggerReveal";

/**
 * Global GSAP initialiser — replaces the old <ScrollAnimator />.
 *
 * Rendered once in layout.tsx. Registers GSAP plugins (via the hook's
 * module-level call) and starts the sitewide ScrollTrigger.batch()
 * observer for all `.fade-up` elements.
 *
 * Renders nothing to the DOM.
 */
export default function GsapInit() {
  useStaggerReveal();
  return null;
}
