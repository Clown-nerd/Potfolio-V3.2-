"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Sitewide staggered-entrance system powered by ScrollTrigger.batch().
 *
 * Replaces the old IntersectionObserver + `.visible` class toggle.
 * Elements with the `selector` class start at { opacity: 0, y: 24, scale: 0.97 }
 * (set in globals.css) and animate to their natural position when they
 * scroll into view, staggered in batches for performance.
 *
 * @param selector  CSS selector for revealable elements (default: ".fade-up")
 * @param scope     Optional React ref to scope the query to a subtree
 */
export function useStaggerReveal(
  selector: string = ".fade-up",
  scope?: React.RefObject<HTMLElement | null>
) {
  const pathname = usePathname();
  // Track pathname in a ref so useGSAP's dependency array triggers re-runs
  // on soft navigations (same pattern as the old IntersectionObserver).
  const pathnameRef = useRef(pathname);
  pathnameRef.current = pathname;

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // Scope the query to a container ref if provided, otherwise document
      const root = scope?.current ?? document;
      const elements = root.querySelectorAll<HTMLElement>(selector);

      if (elements.length === 0) return;

      if (prefersReducedMotion) {
        // Snap everything to final state immediately — no animation
        gsap.set(elements, { opacity: 1, y: 0, scale: 1 });
        return;
      }

      // Batch observer — groups elements entering the viewport in the same
      // frame tick and staggers them as a cohort. Far more performant than
      // individual ScrollTriggers when there are dozens of .fade-up targets.
      ScrollTrigger.batch(elements, {
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.08,
            duration: 0.6,
            ease: "power3.out",
            overwrite: "auto",
          });
        },
        // once: true equivalent — don't reverse when scrolling back out.
        // We only use onEnter (not onLeave/onLeaveBack), so elements stay
        // revealed once they've appeared.
        start: "top 92%",
        end: "bottom 8%",
      });
    },
    {
      // Re-run when pathname changes so newly rendered page elements get picked up.
      // scope limits GSAP context cleanup to the ref container.
      scope: scope ?? undefined,
      dependencies: [pathname, selector],
      // revertOnUpdate cleans up old ScrollTrigger.batch instances before
      // re-creating them on route change — prevents duplicates.
      revertOnUpdate: true,
    }
  );
}
