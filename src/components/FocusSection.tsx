"use client";

import React, { useEffect, useRef } from "react";
import styles from "./FocusSection.module.scss";

// Shared across all instances so only one section is "in focus" at a time.
// The section whose box contains the reading line (35% down the viewport)
// wins; otherwise the one closest to it. Recomputed every scroll frame, so
// the state can never go stale.
const sections = new Set<HTMLElement>();
let ticking = false;
let listening = false;

function computeActive() {
  const focusY = window.innerHeight * 0.3;
  let active: HTMLElement | null = null;
  let bestDist = Infinity;

  sections.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const dist =
      rect.top <= focusY && rect.bottom >= focusY
        ? -1
        : rect.top > focusY
          ? rect.top - focusY
          : focusY - rect.bottom;
    if (dist < bestDist) {
      bestDist = dist;
      active = el;
    }
  });

  sections.forEach((el) => {
    el.dataset.dim = active && el !== active ? "true" : "false";
  });
}

function onScrollOrResize() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    ticking = false;
    computeActive();
  });
}

function ensureListeners() {
  if (listening) return;
  listening = true;
  window.addEventListener("scroll", onScrollOrResize, { passive: true });
  window.addEventListener("resize", onScrollOrResize);
}

function removeListenersIfIdle() {
  if (!listening || sections.size > 0) return;
  listening = false;
  window.removeEventListener("scroll", onScrollOrResize);
  window.removeEventListener("resize", onScrollOrResize);
}

interface FocusSectionProps {
  id?: string;
  children: React.ReactNode;
}

export const FocusSection: React.FC<FocusSectionProps> = ({ id, children }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    sections.add(el);
    ensureListeners();
    computeActive();
    return () => {
      sections.delete(el);
      removeListenersIfIdle();
    };
  }, []);

  return (
    <div id={id} ref={ref} className={styles.section}>
      {children}
    </div>
  );
};
