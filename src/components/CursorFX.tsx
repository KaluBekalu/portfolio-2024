"use client";

import { useEffect, useRef } from "react";
import styles from "./CursorFX.module.scss";

const SPARK_COLORS = ["#22d3ee", "#34d399", "#a5f3fc", "#6ee7b7"];

function spawnBurst(x: number, y: number) {
  for (let i = 0; i < 10; i++) {
    const spark = document.createElement("span");
    const angle = (Math.PI * 2 * i) / 10 + Math.random() * 0.6;
    const distance = 26 + Math.random() * 34;
    spark.className = styles.spark;
    spark.style.left = `${x}px`;
    spark.style.top = `${y}px`;
    spark.style.background =
      SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)];
    spark.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
    spark.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
    spark.addEventListener("animationend", () => spark.remove());
    document.body.appendChild(spark);
  }
}

export function CursorFX() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!finePointer || reducedMotion || !dot || !ring) return;

    document.documentElement.classList.add(styles.active);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId: number;

    const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      const interactive = (event.target as Element | null)?.closest?.(
        "a, button, [role='button'], input, textarea, select, label"
      );
      const hover = interactive ? "true" : "false";
      dot.dataset.hover = hover;
      ring.dataset.hover = hover;
    };

    const follow = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      rafId = requestAnimationFrame(follow);
    };

    const onDown = (event: MouseEvent) => {
      ring.dataset.down = "true";
      spawnBurst(event.clientX, event.clientY);
    };
    const onUp = () => {
      ring.dataset.down = "false";
    };
    const onLeave = () => {
      dot.dataset.away = "true";
      ring.dataset.away = "true";
    };
    const onEnter = () => {
      dot.dataset.away = "false";
      ring.dataset.away = "false";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    rafId = requestAnimationFrame(follow);

    return () => {
      document.documentElement.classList.remove(styles.active);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className={styles.ring} aria-hidden="true">
        <div className={styles.ringCircle} />
      </div>
      <div ref={dotRef} className={styles.dot} aria-hidden="true">
        <div className={styles.dotCircle} />
      </div>
    </>
  );
}
