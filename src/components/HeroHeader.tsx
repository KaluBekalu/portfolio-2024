"use client";

import { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Flex,
  GlitchFx,
  Heading,
  Icon,
  IconButton,
  RevealFx,
  Tag,
  Text,
} from "@/once-ui/components";
import aboutStyles from "@/components/about/about.module.scss";
import styles from "./HeroHeader.module.scss";

interface SocialItem {
  name: string;
  icon: string;
  link: string;
}

interface HeroHeaderProps {
  id?: string;
  name: string;
  role: string;
  avatar: string;
  showAvatar?: boolean;
  location?: string;
  languages?: string[];
  social: SocialItem[];
  resumeHref: string;
}

export const HeroHeader = ({
  id,
  name,
  role,
  avatar,
  showAvatar = true,
  location,
  languages = [],
  social,
  resumeHref,
}: HeroHeaderProps) => {
  const [condensed, setCondensed] = useState(false);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Flex
        className={`${styles.bar} ${condensed ? styles.barVisible : ""}`}
        alignItems="center"
        justifyContent="space-between"
        aria-hidden={!condensed}
      >
        <Flex alignItems="center" gap="12">
          <Avatar src={avatar} size="s" />
          <Text variant="heading-strong-s">{name}</Text>
          <Flex hide="m">
            <Text variant="body-default-s" onBackground="neutral-weak">
              {role}
            </Text>
          </Flex>
        </Flex>
        <Flex alignItems="center" gap="4">
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  size="m"
                  variant="tertiary"
                  tooltip={item.name}
                  tooltipPosition="bottom"
                />
              )
          )}
          <IconButton
            href={resumeHref}
            icon="file"
            size="m"
            variant="tertiary"
            tooltip="Resume"
            tooltipPosition="bottom"
            target="_blank"
            rel="noreferrer"
          />
        </Flex>
      </Flex>

      <Flex
        id={id}
        fillWidth
        minHeight="160"
        gap="xl"
        alignItems="center"
        mobileDirection="column"
        marginBottom="32"
      >
        {showAvatar && (
          <Flex
            direction="column"
            gap="m"
            alignItems="center"
            style={{ flexShrink: 0 }}
          >
            <Avatar src={avatar} size="xl" />
            {location && (
              <Flex
                gap="8"
                alignItems="center"
                textVariant="body-default-s"
                onBackground="neutral-weak"
              >
                <Icon onBackground="accent-weak" name="globe" />
                {location}
              </Flex>
            )}
          </Flex>
        )}
        <Flex direction="column" justifyContent="center" fillWidth>
          <GlitchFx>
            <Heading
              className={aboutStyles.textAlign}
              variant="display-strong-xl"
            >
              {name}
            </Heading>
          </GlitchFx>
          <RevealFx style={{ flexDirection: "column" }}>
            <Text
              className={aboutStyles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {role}
            </Text>

            {social.length > 0 && (
              <Flex
                className={aboutStyles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
              >
                {social.map(
                  (item) =>
                    item.link && (
                      <Button
                        key={item.name}
                        href={item.link}
                        prefixIcon={item.icon}
                        label={item.name}
                        size="s"
                        variant="tertiary"
                      />
                    )
                )}
                <Button
                  id="resume"
                  label="Resume"
                  prefixIcon="file"
                  href={resumeHref}
                  size="s"
                  variant="tertiary"
                  target="_blank"
                  rel="noreferrer"
                />
              </Flex>
            )}

            {languages.length > 0 && (
              <Flex
                className={aboutStyles.blockAlign}
                paddingTop="8"
                wrap
                gap="8"
              >
                {languages.map((language) => (
                  <Tag key={language} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
          </RevealFx>
        </Flex>
      </Flex>
    </>
  );
};
