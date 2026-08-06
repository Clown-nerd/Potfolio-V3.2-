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

      // --- Text stages: distribute evenly across timeline ---
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
            { opacity: 1, y: 0, duration: holdEnd, ease: "none" },
            0
          );
          if (stageCount > 1) {
            tl.to(
              stage,
              { opacity: 0, y: -10, duration: fadeOutEnd - holdEnd, ease: "power2.in" },
              holdEnd
            );
          }
        } else if (i === stageCount - 1) {
          // Last stage: fade in and hold to the end
          tl.fromTo(
            stage,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: fadeInEnd - fadeInStart, ease: "power2.out" },
            fadeInStart
          );
        } else {
          // Middle stages: fade in, hold, fade out
          tl.fromTo(
            stage,
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: fadeInEnd - fadeInStart, ease: "power2.out" },
            fadeInStart
          );
          tl.to(
            stage,
            { opacity: 0, y: -10, duration: fadeOutEnd - holdEnd, ease: "power2.in" },
            holdEnd
          );
        }
      });

      // --- Images: independent segments based on imageCount ---
      // Same fadeIn / hold / fadeOut pattern as the text stages,
      // but segmented by imageCount, NOT stageCount.
      const imgSegment = 1 / imageCount;

      imageLayers.forEach((image, i) => {
        const imgFadeInStart = i * imgSegment;
        const imgFadeInEnd = imgFadeInStart + imgSegment * 0.2;
        const imgHoldEnd = imgFadeInStart + imgSegment * 0.8;
        const imgFadeOutEnd = imgFadeInStart + imgSegment;

        if (i === 0) {
          // First image: already visible via CSS, hold then crossfade out
          tl.to(
            image,
            { opacity: 1, scale: 1, y: 0, duration: imgHoldEnd, ease: "none" },
            0
          );
          if (imageCount > 1) {
            tl.to(
              image,
              { opacity: 0, scale: 0.97, duration: imgFadeOutEnd - imgHoldEnd, ease: "power2.inOut" },
              imgHoldEnd
            );
          }
        } else if (i === imageCount - 1) {
          // Last image: fade in and hold to the end
          tl.fromTo(
            image,
            { opacity: 0, scale: 1.05, y: 10 },
            { opacity: 1, scale: 1, y: 0, duration: imgFadeInEnd - imgFadeInStart, ease: "power2.inOut" },
            imgFadeInStart
          );
        } else {
          // Middle images: fade in, hold, fade out
          tl.fromTo(
            image,
            { opacity: 0, scale: 1.05, y: 10 },
            { opacity: 1, scale: 1, y: 0, duration: imgFadeInEnd - imgFadeInStart, ease: "power2.inOut" },
            imgFadeInStart
          );
          tl.to(
            image,
            { opacity: 0, scale: 0.97, duration: imgFadeOutEnd - imgHoldEnd, ease: "power2.inOut" },
            imgHoldEnd
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
