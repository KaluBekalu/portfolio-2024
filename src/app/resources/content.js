import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Kalkidan",
  lastName: "Aleme",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full-Stack Software Engineer",
  avatar: "/images/avatar.jpg",
  location: "America/Chicago",
  city: "Chicago",
  languages: ["TypeScript", "JavaScript", "Python", "React", "Node.js", "AWS"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I write about full-stack development, best practices in web technologies,
      and personal projects.
    </>
  ),
};

const contact = {
  display: true,
  title: <>Let's Connect 📫</>,
  description: (
    <>
     Email me using the below form. I'll respond fast 🤞
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/kalubekalu",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/kalkidanaleme",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:kalkidan.aleme@yahoo.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name} — ${person.role}`,
  description: `Portfolio of ${person.name}, a full-stack software engineer building production web apps across healthcare, enterprise, and startups.`,
  headline: <>I build products end to end.</>,
  subline: (
    <>
      I'm <InlineCode>{person.firstName}</InlineCode>, a {person.city}-based
      full-stack engineer with 6+ years shipping production software. Right now
      I'm building a health-technology platform at SMYL Fitness Rx — from React
      19 frontends to Python and Node.js services on AWS.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, a ${person.role} from ${person.city}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    // TODO: replace with your Google Calendar appointment-schedule link
    // (Google Calendar → Appointment schedules → Share → copy link)
    link: "https://calendar.app.google/REPLACE-ME",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Full-stack software engineer with 6+ years building and shipping
        production web applications across healthcare, enterprise, and startup
        environments. Strong across React/TypeScript frontends and
        Node.js/Python backends, with hands-on ownership of CI/CD pipelines,
        Docker, and AWS infrastructure.
        <br />
        <br />
        Currently building a health-technology platform end to end —
        architecture, delivery, and deployment — while integrating AI-assisted
        development responsibly into day-to-day engineering.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "SMYL Fitness Rx",
        timeframe: "March 2025 - Present",
        role: "Software Engineer II",
        achievements: [
          <>
            Build and ship features end to end on a health-technology platform
            using React 19, TypeScript, and Vite, with TanStack Query and Jotai
            for state and Material-UI, React Hook Form, and Zod for accessible,
            validated interfaces.
          </>,
          <>
            Own GitHub Actions CI/CD pipelines covering automated testing,
            Docker builds, and AWS ECS/Fargate deployments; migrated build
            runners to Blacksmith for faster pipelines.
          </>,
          <>
            Implemented Mobile Device Management with Esper for remote tablet
            control and kiosk-mode enforcement, and Twilio IVR to automate
            customer communication.
          </>,
          <>
            Established a testing strategy across Playwright (E2E), Vitest
            (unit), and React Testing Library; enforced code quality with Biome
            and Husky pre-commit hooks.
          </>,
        ],
        images: [],
      },
      {
        company: "Kimberly-Clark",
        timeframe: "November 2022 - February 2025",
        role: "Full-Stack Engineer",
        achievements: [
          <>
            Built enterprise web applications serving 2,000+ internal users
            with React, Next.js, TypeScript, and Node.js in agile,
            cross-functional teams.
          </>,
          <>
            Implemented server-side solutions with Node.js and GraphQL,
            reducing API response times by roughly 30%.
          </>,
          <>
            Led a documentation initiative that cut new-developer onboarding
            time by roughly 40%, while maintaining a 90%+ sprint completion
            rate.
          </>,
        ],
        images: [],
      },
      {
        company: "XTIVIA, Inc.",
        timeframe: "February 2020 - October 2022",
        role: "Full-Stack Engineer",
        achievements: [
          <>
            Delivered full-stack features for enterprise and healthcare clients
            across React and Vue.js frontends and Node.js/Express backends.
          </>,
          <>
            Built real-time dashboards and patient-tracking tools with direct
            input from healthcare providers.
          </>,
          <>
            Architected microservices and deployed on AWS, reducing
            infrastructure costs by roughly 40%.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Adama Science and Technology University",
        description: (
          <>Bachelor of Science in Computer Science and Engineering</>
        ),
      },
      {
        name: "AWS Certified Developer – Associate",
        description: <>Amazon Web Services certification, 2023</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Frontend",
        description: (
          <>Accessible, validated interfaces built to WCAG guidelines.</>
        ),
        techs: [
          { name: "React 18/19", icon: "react", url: "https://react.dev" },
          { name: "Next.js", icon: "nextjs", url: "https://nextjs.org" },
          { name: "Vue.js", icon: "vue", url: "https://vuejs.org" },
          { name: "Vite", icon: "vite", url: "https://vitejs.dev" },
          { name: "TanStack Query", icon: "tanstack", url: "https://tanstack.com/query" },
          { name: "Jotai", icon: "jotai", url: "https://jotai.org" },
          { name: "Tailwind CSS", icon: "tailwind", url: "https://tailwindcss.com" },
          { name: "Material-UI", icon: "mui", url: "https://mui.com" },
          { name: "React Hook Form", icon: "reacthookform", url: "https://react-hook-form.com" },
          { name: "Zod", icon: "zod", url: "https://zod.dev" },
        ],
        images: [],
      },
      {
        title: "Backend",
        description: (
          <>Typed APIs and services on solid data models.</>
        ),
        techs: [
          { name: "Node.js", icon: "nodejs", url: "https://nodejs.org" },
          { name: "Express", icon: "express", url: "https://expressjs.com" },
          { name: "Fastify", icon: "fastify", url: "https://fastify.dev" },
          { name: "Python", icon: "python", url: "https://www.python.org" },
          { name: "FastAPI", icon: "fastapi", url: "https://fastapi.tiangolo.com" },
          { name: "GraphQL", icon: "graphql", url: "https://graphql.org" },
          { name: "SQLAlchemy", icon: "sqlalchemy", url: "https://www.sqlalchemy.org" },
          { name: "PostgreSQL", icon: "postgresql", url: "https://www.postgresql.org" },
          { name: "MongoDB", icon: "mongodb", url: "https://www.mongodb.com" },
          { name: "Redis", icon: "redis", url: "https://redis.io" },
        ],
        images: [],
      },
      {
        title: "Cloud & DevOps",
        description: (
          <>Owning pipelines from commit to production.</>
        ),
        techs: [
          { name: "AWS", icon: "aws", url: "https://aws.amazon.com" },
          { name: "Google Cloud", icon: "gcp", url: "https://cloud.google.com" },
          { name: "Docker", icon: "docker", url: "https://www.docker.com" },
          { name: "Kubernetes", icon: "kubernetes", url: "https://kubernetes.io" },
          { name: "Terraform", icon: "terraform", url: "https://www.terraform.io" },
          { name: "Nix", icon: "nix", url: "https://nixos.org" },
          { name: "GitHub Actions", icon: "githubactions", url: "https://github.com/features/actions" },
        ],
        images: [],
      },
      {
        title: "Testing & Quality",
        description: (
          <>Quality enforced automatically, not by discipline.</>
        ),
        techs: [
          { name: "Playwright", icon: "playwright", url: "https://playwright.dev" },
          { name: "Vitest", icon: "vitest", url: "https://vitest.dev" },
          { name: "Testing Library", icon: "testinglibrary", url: "https://testing-library.com" },
          { name: "Biome", icon: "biome", url: "https://biomejs.dev" },
          { name: "Husky", icon: "husky", url: "https://typicode.github.io/husky" },
        ],
        images: [],
      },
      {
        title: "Agentic Development",
        description: (
          <>
            AI acceleration with a disciplined view of where human judgment is
            required.
          </>
        ),
        techs: [
          { name: "Claude Code", icon: "anthropic", url: "https://claude.com/claude-code" },
          { name: "Cursor", icon: "cursor", url: "https://cursor.com" },
          { name: "Model Context Protocol", icon: "mcp", url: "https://modelcontextprotocol.io" },
          { name: "OpenAI", icon: "openai", url: "https://openai.com" },
        ],
        images: [],
      },
    ],
  },
};

const hobbies = {
  display: true,
  title: "Off the Clock",
  description:
    "Proof I occasionally close the laptop — usually to point a camera at it or trade the keyboard for the other kind.",
  items: [
    {
      icon: "youtube",
      platform: "YouTube",
      stat: 40000,
      statSuffix: "",
      label: "subscribers",
      quip: "The main channel. Forty thousand people showed up — still not sure who told them.",
      color: "#ff4d4d",
    },
    {
      icon: "youtube",
      platform: "YouTube",
      stat: 4000,
      statSuffix: "",
      label: "subscribers · channel #2",
      quip: "The side-quest channel. My own biggest competitor — the rivalry is intense.",
      color: "#ff8a65",
    },
    {
      icon: "tiktok",
      platform: "TikTok",
      stat: 55000,
      statSuffix: "+",
      label: "followers",
      quip: "Short-form content, long-form grind. The algorithm and I have an understanding.",
      color: "#fe2c55",
    },
    {
      icon: "music",
      platform: "Guitar & Keyboard",
      statText: "2",
      label: "instruments",
      quip: "I deploy to living rooms nightly. Zero downtime, occasional wrong notes.",
      color: "#fbbf24",
    },
  ],
};

const blog = {
  label: "Blog",
  title: "Writing about development and technology...",
  description: `Read what ${person.name} has been working on recently.`,
};

const work = {
  label: "Work",
  title: "Selected work",
  description: `Production systems built by ${person.name} — from a live health-technology platform to full-stack side projects running in the cloud.`,
};

const gallery = {
  label: "Gallery",
  title: "My Photo Gallery",
  description: `A curated collection of photographs by ${person.name}.`,
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, contact, home, about, blog, work, gallery, hobbies };
