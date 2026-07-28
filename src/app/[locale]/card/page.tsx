import React from "react";

import { Heading, Flex, Text, Button, RevealFx } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { unstable_setRequestLocale } from "next-intl/server";

const title = "Business Card — Kalkidan Aleme";
const description =
  "Founder & CEO, Tibeb Labs. We build software that moves business.";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/${locale}/card`,
      images: [
        {
          url: `https://${baseURL}/images/business-card/tibeb-card-front.png`,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://${baseURL}/images/business-card/tibeb-card-front.png`],
    },
  };
}

const cardStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: "40rem",
  borderRadius: "16px",
  display: "block",
  boxShadow: "0 24px 64px -24px rgba(0,0,0,.6)",
};

export default function Card({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <Flex
      fillWidth
      maxWidth="m"
      direction="column"
      alignItems="center"
      gap="l"
      paddingY="xl"
    >
      <Flex direction="column" alignItems="center" gap="s">
        <Heading variant="display-strong-s">Business Card</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          Kalkidan Aleme · Founder &amp; CEO, Tibeb Labs
        </Text>
      </Flex>

      <RevealFx translateY={8} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/business-card/tibeb-card-front.png"
          alt="Tibeb Labs business card — front"
          style={cardStyle}
        />
      </RevealFx>
      <RevealFx translateY={8} delay={0.2} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/business-card/tibeb-card-back.png"
          alt="Tibeb Labs business card — back"
          style={cardStyle}
        />
      </RevealFx>

      <Flex gap="m" wrap justifyContent="center">
        <Button
          href="/images/business-card/tibeb-card-front.png"
          variant="primary"
          size="m"
          label="Download front"
        />
        <Button
          href="/images/business-card/tibeb-card-back.png"
          variant="secondary"
          size="m"
          label="Download back"
        />
      </Flex>
    </Flex>
  );
}
