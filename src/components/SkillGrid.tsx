"use client";

import { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiVite,
  SiReactquery,
  SiTailwindcss,
  SiMui,
  SiReacthookform,
  SiZod,
  SiNodedotjs,
  SiExpress,
  SiFastify,
  SiPython,
  SiFastapi,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiSqlalchemy,
  SiAmazonwebservices,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiNixos,
  SiGithubactions,
  SiVitest,
  SiTestinglibrary,
  SiBiome,
  SiPlaywright,
  SiAnthropic,
  SiOpenai,
} from "react-icons/si";
import { LuAtom, LuMousePointerClick, LuPlug } from "react-icons/lu";
import { FaDog } from "react-icons/fa";
import styles from "./SkillGrid.module.scss";

const ICONS: Record<string, IconType> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  vue: SiVuedotjs,
  vite: SiVite,
  tanstack: SiReactquery,
  jotai: LuAtom,
  tailwind: SiTailwindcss,
  mui: SiMui,
  reacthookform: SiReacthookform,
  zod: SiZod,
  nodejs: SiNodedotjs,
  express: SiExpress,
  fastify: SiFastify,
  python: SiPython,
  fastapi: SiFastapi,
  graphql: SiGraphql,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  redis: SiRedis,
  sqlalchemy: SiSqlalchemy,
  aws: SiAmazonwebservices,
  gcp: SiGooglecloud,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  terraform: SiTerraform,
  nix: SiNixos,
  githubactions: SiGithubactions,
  vitest: SiVitest,
  testinglibrary: SiTestinglibrary,
  biome: SiBiome,
  playwright: SiPlaywright,
  husky: FaDog,
  anthropic: SiAnthropic,
  openai: SiOpenai,
  cursor: LuMousePointerClick,
  mcp: LuPlug,
};

export interface Tech {
  name: string;
  icon: string;
  url: string;
}

export function SkillGrid({ techs }: { techs: Tech[] }) {
  return (
    <div className={styles.grid}>
      {techs.map((tech) => {
        const Icon = ICONS[tech.icon];
        return (
          <a
            key={tech.name}
            href={tech.url}
            target="_blank"
            rel="noreferrer"
            className={styles.chip}
            aria-label={`${tech.name} website`}
          >
            {Icon && (
              <span className={styles.icon} aria-hidden="true">
                <Icon />
              </span>
            )}
            <span className={styles.label}>{tech.name}</span>
          </a>
        );
      })}
    </div>
  );
}
