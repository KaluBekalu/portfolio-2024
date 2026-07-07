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
    link: "mailto:kalkidan.bekalu@yahoo.com",
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
    link: "https://cal.com",
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
          <>
            React 18/19, Next.js, Vue.js, Vite, TanStack Query, Jotai, Tailwind
            CSS, Material-UI, React Hook Form, Zod — accessible, validated
            interfaces built to WCAG guidelines.
          </>
        ),
        images: [],
      },
      {
        title: "Backend",
        description: (
          <>
            Node.js, Express, Fastify, Python, FastAPI, REST and GraphQL APIs,
            SQLAlchemy, Pydantic — with PostgreSQL, MongoDB, Redis, and
            Firestore.
          </>
        ),
        images: [],
      },
      {
        title: "Cloud & DevOps",
        description: (
          <>
            AWS (ECS, Fargate, ECR, S3, EC2, Lambda), GCP, Docker, Kubernetes,
            Terraform, Nix, and GitHub Actions CI/CD — owning pipelines from
            commit to production.
          </>
        ),
        images: [],
      },
      {
        title: "Testing & Quality",
        description: (
          <>
            Playwright end-to-end suites, Vitest unit tests, React Testing
            Library — plus Biome and Husky pre-commit hooks to keep quality
            enforced automatically.
          </>
        ),
        images: [],
      },
      {
        title: "AI-Assisted Development",
        description: (
          <>
            Claude Code, Cursor, and Model Context Protocol (MCP) — integrated
            with a disciplined view of where AI accelerates output versus where
            human judgment is required.
          </>
        ),
        images: [],
      },
    ],
  },
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

export { person, social, newsletter, contact, home, about, blog, work, gallery };
