"use client";

import React, {
  Children,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Flex, IconButton } from "@/once-ui/components";
import styles from "./ProjectSlider.module.scss";

interface ProjectSliderProps {
  children: ReactNode;
}

export function ProjectSlider({ children }: ProjectSliderProps) {
  const slides = Children.toArray(children);
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);
  const wheelLockUntil = useRef(0);
  const wheelDelta = useRef(0);
  const touchStartX = useRef<number | null>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  const goTo = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(count - 1, next));
      indexRef.current = clamped;
      setIndex(clamped);
    },
    [count]
  );

  // Two-finger trackpad swipe: horizontal wheel deltas change slides.
  // Attached manually so preventDefault works (React wheel listeners are passive).
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return;
      event.preventDefault();
      const now = Date.now();
      if (now < wheelLockUntil.current) return;
      wheelDelta.current += event.deltaX;
      if (Math.abs(wheelDelta.current) > 60) {
        const direction = wheelDelta.current > 0 ? 1 : -1;
        wheelDelta.current = 0;
        wheelLockUntil.current = now + 650;
        goTo(indexRef.current + direction);
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [goTo]);

  // Inactive slides are inert: invisible to focus and assistive tech.
  useEffect(() => {
    slideRefs.current.forEach((el, i) => {
      if (el) (el as HTMLDivElement & { inert: boolean }).inert = i !== index;
    });
  }, [index, count]);

  const onTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - event.changedTouches[0].clientX;
    touchStartX.current = null;
    if (Math.abs(delta) > 50) {
      goTo(indexRef.current + (delta > 0 ? 1 : -1));
    }
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    }
  };

  if (count === 0) return null;

  return (
    <Flex direction="column" gap="16" fillWidth>
      <div
        ref={viewportRef}
        className={styles.viewport}
        role="region"
        aria-roledescription="carousel"
        aria-label="Project gallery"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className={styles.track}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              ref={(el) => {
                slideRefs.current[i] = el;
              }}
              className={`${styles.slide} ${i === index ? styles.active : ""}`}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
      <Flex fillWidth justifyContent="center" alignItems="center" gap="16">
        <IconButton
          icon="chevronLeft"
          variant="secondary"
          size="m"
          tooltip="Previous project"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
        />
        <Flex gap="8" alignItems="center">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to project ${i + 1}`}
              className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </Flex>
        <IconButton
          icon="chevronRight"
          variant="secondary"
          size="m"
          tooltip="Next project"
          onClick={() => goTo(index + 1)}
          disabled={index === count - 1}
        />
      </Flex>
    </Flex>
  );
}
