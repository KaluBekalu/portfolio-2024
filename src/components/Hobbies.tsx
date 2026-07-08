"use client";

import { useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { SiYoutube, SiTiktok } from "react-icons/si";
import { FaGuitar } from "react-icons/fa";
import { GiMusicalKeyboard } from "react-icons/gi";
import { Flex, Heading, Text } from "@/once-ui/components";
import styles from "./Hobbies.module.scss";

const ICONS: Record<string, IconType[]> = {
  youtube: [SiYoutube],
  tiktok: [SiTiktok],
  music: [FaGuitar, GiMusicalKeyboard],
};

export interface HobbyItem {
  icon: string;
  platform: string;
  stat?: number;
  statSuffix?: string;
  statText?: string;
  label: string;
  quip: string;
  color: string;
}

function formatStat(value: number) {
  return value >= 1000 ? `${Math.round(value / 1000)}K` : `${value}`;
}

function HobbyCard({ item }: { item: HobbyItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(item.stat ? "0" : item.statText || "");
  const started = useRef(false);

  // Count up when the card scrolls into view.
  useEffect(() => {
    if (!item.stat || !cardRef.current) return;
    const target = item.stat;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting) || started.current) return;
        started.current = true;
        const t0 = performance.now();
        const duration = 1400;
        const tick = (now: number) => {
          const progress = Math.min(1, (now - t0) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(formatStat(Math.round(target * eased)));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [item.stat]);

  // Playful tilt toward the pointer.
  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(700px) rotateY(${px * 10}deg) rotateX(${py * -10}deg) translateY(-4px)`;
  };
  const onMouseLeave = () => {
    const el = cardRef.current;
    if (el) el.style.transform = "";
  };

  const icons = ICONS[item.icon] || [];

  return (
    <div
      ref={cardRef}
      className={styles.card}
      style={{ "--hobby-color": item.color } as React.CSSProperties}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.iconRow}>
        {icons.map((Icon, i) => (
          <Icon key={i} className={styles.icon} />
        ))}
      </div>
      <div className={styles.stat}>
        {display}
        {item.stat && item.statSuffix ? item.statSuffix : ""}
      </div>
      <Text variant="label-strong-s" className={styles.platform}>
        {item.platform} · {item.label}
      </Text>
      <Text variant="body-default-s" onBackground="neutral-weak">
        {item.quip}
      </Text>
    </div>
  );
}

interface HobbiesProps {
  title: string;
  description: string;
  items: HobbyItem[];
}

export function Hobbies({ title, description, items }: HobbiesProps) {
  return (
    <Flex direction="column" fillWidth gap="m">
      <Heading as="h2" id={title} variant="display-strong-s">
        {title}
      </Heading>
      <Text variant="body-default-l" onBackground="neutral-weak">
        {description}
      </Text>
      <div className={styles.grid}>
        {items.map((item) => (
          <HobbyCard key={item.platform + item.label} item={item} />
        ))}
      </div>
    </Flex>
  );
}
