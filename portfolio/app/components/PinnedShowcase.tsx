"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./PinnedShowcase.css";

gsap.registerPlugin(ScrollTrigger);

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ShowcaseStage {
  /** Label displayed above the detail text (e.g. "Overview", "Tech Stack") */
  label: string;
  /** Paragraph of text for this stage */
  detail: string;
}

export interface PinnedShowcaseProps {
  /** 2–3 image paths (screenshot crops) used as depth layers */
  images: string[];
  /** Text stages to crossfade through as scroll progresses */
  stages: ShowcaseStage[];
  /** Optional wrapper class for the pinned container */
  className?: string;
}

// ---------------------------------------------------------------------------
// Depth-offset presets per image layer (max 3 images)
// These define the "exploded view" peak state at ~progress 0.35.
// ---------------------------------------------------------------------------

const LAYER_OFFSETS = [
  // Front layer — stays close, slight forward push
  { z: 60, x: "-6%", y: "-4%", rotateY: -4, rotateX: 2 },
  // Middle layer — medium depth
  { z: -120, x: "4%", y: "3%", rotateY: 6, rotateX: -3 },
  // Back layer — deepest
  { z: -280, x: "-2%", y: "6%", rotateY: -8, rotateX: 4 },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function PinnedShowcase({
  images,
  stages,
  className = "",
}: PinnedShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [activeStage, setActiveStage] = useState(0);

  // Detect prefers-reduced-motion (client-only)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Build the pinned, scrubbed timeline
  useGSAP(
    () => {
      if (reducedMotion || !containerRef.current) return;

      const container = containerRef.current;
      const imageLayers = container.querySelectorAll<HTMLElement>(
        ".pinned-showcase__image-layer"
      );
      const stageEls = container.querySelectorAll<HTMLElement>(
        ".pinned-showcase__stage"
      );

      if (imageLayers.length === 0 || stageEls.length === 0) return;

      // --- Master timeline ---
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 0.8,
          start: "top top",
          end: `+=${window.innerHeight * 3}`, // 3 viewport-heights of scroll
          onUpdate: (self) => {
            // Update active stage for progress dots
            const stageCount = stageEls.length;
            const newStage = Math.min(
              Math.floor(self.progress * stageCount),
              stageCount - 1
            );
            setActiveStage(newStage);
          },
        },
      });

      const imageCount = imageLayers.length;
      const stageCount = stageEls.length;

      // --- Phase 1: Explode images outward (progress 0.00 → 0.30) ---
      imageLayers.forEach((layer, i) => {
        const offset = LAYER_OFFSETS[i] ?? LAYER_OFFSETS[LAYER_OFFSETS.length - 1];
        tl.to(
          layer,
          {
            z: offset.z,
            xPercent: parseFloat(offset.x),
            yPercent: parseFloat(offset.y),
            rotationY: offset.rotateY,
            rotationX: offset.rotateX,
            opacity: 1 - i * 0.12,
            duration: 0.30,
            ease: "power2.inOut",
          },
          0 // all start at timeline position 0
        );
      });

      // --- Phase 2: Hold exploded, subtle drift (progress 0.30 → 0.70) ---
      imageLayers.forEach((layer, i) => {
        const offset = LAYER_OFFSETS[i] ?? LAYER_OFFSETS[LAYER_OFFSETS.length - 1];
        tl.to(
          layer,
          {
            z: offset.z + (i % 2 === 0 ? 15 : -15),
            rotationY: offset.rotateY + (i % 2 === 0 ? 2 : -2),
            duration: 0.40,
            ease: "none",
          },
          0.30
        );
      });

      // --- Phase 3: Collapse back (progress 0.70 → 1.00) ---
      imageLayers.forEach((layer) => {
        tl.to(
          layer,
          {
            z: 0,
            xPercent: 0,
            yPercent: 0,
            rotationY: 0,
            rotationX: 0,
            opacity: 1,
            duration: 0.30,
            ease: "power2.inOut",
          },
          0.70
        );
      });

      // --- Text crossfades: distribute evenly across timeline ---
      const stageDuration = 1 / stageCount;

      stageEls.forEach((stage, i) => {
        const fadeInStart = i * stageDuration;
        const fadeInEnd = fadeInStart + stageDuration * 0.25;
        const holdEnd = fadeInStart + stageDuration * 0.75;
        const fadeOutEnd = fadeInStart + stageDuration;

        if (i === 0) {
          // First stage: already visible, hold then fade out
          tl.to(
            stage,
            {
              opacity: 1,
              y: 0,
              duration: holdEnd,
              ease: "none",
            },
            0
          );
          if (stageCount > 1) {
            tl.to(
              stage,
              {
                opacity: 0,
                y: -10,
                duration: fadeOutEnd - holdEnd,
                ease: "power2.in",
              },
              holdEnd
            );
          }
        } else if (i === stageCount - 1) {
          // Last stage: fade in and hold to the end
          tl.fromTo(
            stage,
            { opacity: 0, y: 12 },
            {
              opacity: 1,
              y: 0,
              duration: fadeInEnd - fadeInStart,
              ease: "power2.out",
            },
            fadeInStart
          );
        } else {
          // Middle stages: fade in, hold, fade out
          tl.fromTo(
            stage,
            { opacity: 0, y: 12 },
            {
              opacity: 1,
              y: 0,
              duration: fadeInEnd - fadeInStart,
              ease: "power2.out",
            },
            fadeInStart
          );
          tl.to(
            stage,
            {
              opacity: 0,
              y: -10,
              duration: fadeOutEnd - holdEnd,
              ease: "power2.in",
            },
            holdEnd
          );
        }
      });

      // Apply will-change only while pinned, remove after
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: `+=${window.innerHeight * 3}`,
        onEnter: () => {
          imageLayers.forEach((el) => {
            el.style.willChange = "transform, opacity";
          });
          stageEls.forEach((el) => {
            el.style.willChange = "transform, opacity";
          });
        },
        onLeave: () => {
          imageLayers.forEach((el) => {
            el.style.willChange = "auto";
          });
          stageEls.forEach((el) => {
            el.style.willChange = "auto";
          });
        },
        onLeaveBack: () => {
          imageLayers.forEach((el) => {
            el.style.willChange = "auto";
          });
          stageEls.forEach((el) => {
            el.style.willChange = "auto";
          });
        },
        onEnterBack: () => {
          imageLayers.forEach((el) => {
            el.style.willChange = "transform, opacity";
          });
          stageEls.forEach((el) => {
            el.style.willChange = "transform, opacity";
          });
        },
      });
    },
    {
      scope: containerRef,
      dependencies: [reducedMotion, images.length, stages.length],
      revertOnUpdate: true,
    }
  );

  // --- Render ---
  const modifierClass = reducedMotion ? " pinned-showcase--reduced" : "";

  return (
    <div
      ref={containerRef}
      className={`pinned-showcase${modifierClass} ${className}`.trim()}
    >
      <div className="pinned-showcase__inner">
        {/* Visual panel */}
        <div className="pinned-showcase__visuals">
          {images.map((src, i) => (
            <div
              key={src}
              className="pinned-showcase__image-layer"
              style={{ zIndex: images.length - i }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Project screenshot ${i + 1}`}
                className="pinned-showcase__image"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Text panel */}
        <div className="pinned-showcase__text">
          {stages.map((stage, i) => (
            <div key={stage.label} className="pinned-showcase__stage">
              <p className="pinned-showcase__stage-label">{stage.label}</p>
              <p className="pinned-showcase__stage-detail">{stage.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Progress dots */}
      {!reducedMotion && (
        <div className="pinned-showcase__progress">
          {stages.map((stage, i) => (
            <span
              key={stage.label}
              className={`pinned-showcase__progress-dot${
                i === activeStage ? " pinned-showcase__progress-dot--active" : ""
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
