"use client";

import { useRef, useState } from "react";
import { Arrow, Avatar, Button, Flex, Text } from "@/once-ui/components";

interface EmailCTAProps {
  email: string;
  avatar?: string;
  showAvatar?: boolean;
}

export const EmailCTA = ({ email, avatar, showAvatar = true }: EmailCTAProps) => {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout>>();

  const handleClick = () => {
    // Copy first so the visitor always walks away with the address,
    // then hand the mailto to the browser for those with a mail app.
    navigator.clipboard?.writeText(email).catch(() => {});
    setCopied(true);
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setCopied(false), 3000);
    window.location.href = `mailto:${email}`;
  };

  return (
    <Flex direction="column" gap="8">
      <Button
        id="contact"
        data-border="rounded"
        onClick={handleClick}
        variant="tertiary"
        size="m"
      >
        <Flex gap="8" alignItems="center">
          {showAvatar && avatar && (
            <Avatar
              style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
              src={avatar}
              size="m"
            />
          )}
          {copied ? "Email copied to clipboard!" : "Let's have a chat!"}
          <Arrow trigger="#contact" />
        </Flex>
      </Button>
      <Flex paddingLeft="16">
        <Text variant="body-default-s" onBackground="neutral-weak">
          {copied
            ? "Opening your mail app — or paste the address anywhere."
            : email}
        </Text>
      </Flex>
    </Flex>
  );
};
