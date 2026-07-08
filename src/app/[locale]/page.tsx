import {
  Arrow,
  Avatar,
  Button,
  Flex,
  Heading,
  RevealFx,
  SmartImage,
  Text,
} from "@/once-ui/components";
import { baseURL, renderContent } from "@/app/resources";
import { routes } from "@/app/resources";
import { Projects } from "@/components/work/Projects";
import { EmailCTA } from "@/components/EmailCTA";
import { Hobbies } from "@/components/Hobbies";
import { SkillGrid } from "@/components/SkillGrid";
import { FocusSection } from "@/components/FocusSection";
import { HeroHeader } from "@/components/HeroHeader";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations();
  const { person, about, social } = renderContent(t);
  const title = "Kalkidan Aleme";
  const description = about.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/${locale}/blog`,
      images: [
        {
          // url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function About({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  const { person, about, social, hobbies } = renderContent(t);
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: "Selected Work",
      display: routes["/work"],
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map(
        (experience: any) => experience.company
      ),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill: any) => skill.title),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map(
        (institution: any) => institution.name
      ),
    },
    {
      title: hobbies.title,
      display: hobbies.display,
      items: [],
    },
  ];
  return (
    <Flex className={styles.homeContent} fillWidth direction="column">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: person.name,
            jobTitle: person.role,
            description: about.intro.description,
            url: `https://${baseURL}/about`,
            image: `${baseURL}/images/${person.avatar}`,
            sameAs: social
              .filter(
                (item: any) => item.link && !item.link.startsWith("mailto:")
              ) // Filter out empty links and email links
              .map((item: any) => item.link),
            worksFor: {
              "@type": "Organization",
              name: about.work.experiences[0].company || "",
            },
          }),
        }}
      />
      {about.tableOfContent.display && (
        <Flex
          style={{ left: "0", top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          direction="column"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Flex>
      )}
      <Flex fillWidth mobileDirection="column" justifyContent="center">
        <Flex
          className={styles.blockAlign}
          fillWidth
          direction="column"
        >
          <HeroHeader
            id={about.intro.title}
            name={person.name}
            role={person.role}
            avatar={person.avatar}
            showAvatar={about.avatar.display}
            location={person.location}
            languages={person.languages}
            social={social}
            resumeHref="/Kalkidan_Aleme_Resume.pdf"
          />

          <FocusSection>
            {about.intro.display && (
              <Flex
                direction="column"
                textVariant="body-default-l"
                fillWidth
                gap="m"
              >
                {about.intro.description}
              </Flex>
            )}

            <Flex fillWidth style={{ marginTop: 30, marginBottom: 120 }}>
              <RevealFx translateY="12" delay={0.4}>
                <Flex gap="16" alignItems="flex-start" wrap>
                  <EmailCTA
                    email="kalkidan.aleme@yahoo.com"
                    avatar={person.avatar}
                    showAvatar={about.avatar.display}
                  />
                  {about.calendar.display && (
                    <Button
                      data-border="rounded"
                      href={about.calendar.link}
                      variant="secondary"
                      size="m"
                      prefixIcon="calendar"
                      label="Schedule a call"
                      target="_blank"
                      rel="noreferrer"
                    />
                  )}
                </Flex>
              </RevealFx>
            </Flex>
          </FocusSection>

          {routes["/work"] && (
            <FocusSection id="Selected Work">
              <Flex direction="column" fillWidth gap="m" marginBottom="xl">
                <Heading as="h2" variant="display-strong-s" marginBottom="m">
                  Selected Work
                </Heading>
                <RevealFx translateY="16" delay={0.2}>
                  <Projects locale={locale} variant="slider" />
                </RevealFx>
                <Flex fillWidth justifyContent="center">
                  <Button
                    href={`/${locale}/work`}
                    variant="secondary"
                    size="m"
                    suffixIcon="arrowRight"
                    label="View all projects"
                  />
                </Flex>
              </Flex>
            </FocusSection>
          )}

          {about.work.display && (
            <FocusSection>
              <Heading
                as="h2"
                id={about.work.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.work.title}
              </Heading>
              <Flex direction="column" fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience: any, index: any) => (
                  <Flex
                    key={`${experience.company}-${experience.role}-${index}`}
                    fillWidth
                    direction="column"
                  >
                    <Flex
                      fillWidth
                      justifyContent="space-between"
                      alignItems="flex-end"
                      marginBottom="4"
                    >
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text
                        variant="heading-default-xs"
                        onBackground="neutral-weak"
                      >
                        {experience.timeframe}
                      </Text>
                    </Flex>
                    <Text
                      variant="body-default-s"
                      onBackground="brand-weak"
                      marginBottom="m"
                    >
                      {experience.role}
                    </Text>
                    <Flex as="ul" direction="column" gap="16">
                      {experience.achievements.map(
                        (achievement: string, index: any) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${index}`}
                          >
                            {achievement}
                          </Text>
                        )
                      )}
                    </Flex>
                    {experience.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" paddingLeft="40" wrap>
                        {experience.images.map((image: any, index: any) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            borderStyle="solid-1"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <SmartImage
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Flex>
                ))}
              </Flex>
            </FocusSection>
          )}

          {about.technical.display && (
            <FocusSection>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {about.technical.title}
              </Heading>
              <Flex direction="column" fillWidth gap="l">
                {about.technical.skills.map((skill: any, index: any) => (
                  <Flex
                    key={`${skill}-${index}`}
                    fillWidth
                    gap="4"
                    direction="column"
                  >
                    <Text id={skill.title} variant="heading-strong-l">
                      {skill.title}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.techs?.length > 0 && (
                      <SkillGrid techs={skill.techs} />
                    )}
                    {skill.images?.length > 0 && (
                      <Flex fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image: any, index: any) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            borderStyle="solid-1"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <SmartImage
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Flex>
                ))}
              </Flex>
            </FocusSection>
          )}

          {about.studies.display && (
            <FocusSection>
              <Heading
                as="h2"
                id={about.studies.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.studies.title}
              </Heading>
              <Flex direction="column" fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map(
                  (institution: any, index: any) => (
                    <Flex
                      key={`${institution.name}-${index}`}
                      fillWidth
                      gap="4"
                      direction="column"
                    >
                      <Text id={institution.name} variant="heading-strong-l">
                        {institution.name}
                      </Text>
                      <Text
                        variant="heading-default-xs"
                        onBackground="neutral-weak"
                      >
                        {institution.description}
                      </Text>
                    </Flex>
                  )
                )}
              </Flex>
            </FocusSection>
          )}

          {hobbies.display && (
            <FocusSection>
              <Hobbies
                title={hobbies.title}
                description={hobbies.description}
                items={hobbies.items}
              />
            </FocusSection>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
