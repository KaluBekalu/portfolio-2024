import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Kalkidan",
  lastName: "Bekalu",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full-Stack Developer",
  avatar: "/images/avatar.jpg",
  location: "America/Chicago",
  city: "Chicago",
  languages: ["JavaScript", "TypeScript", "Java", "Rust", "Go"], // Languages based on your technical skills
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
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full-Stack Developer</>,
  subline: (
    <>
      I'm <InlineCode>{person.firstName}</InlineCode>, a {person.city}-based
      full-stack developer dedicated to building user-focused applications.
      While seeking my next opportunity, I continue creating innovative side
      projects that solve real-world problems.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, a ${person.role} from ${person.location}`,
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
        Kalkidan is a {person.city}-based full-stack developer with a passion
        for transforming complex challenges into simple, efficient web
        solutions.
        <br />
        His work spans scalable systems, APIs, and interactive experiences.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Kimberly Clark",
        timeframe: "November 2022 - October 2024",
        role: "Full-Stack Developer",
        achievements: [
          <>
            Designed a customer resource management tool in TypeScript and
            Node.js, improving client tracking and communication.
          </>,
          <>
            Integrated OAuth 2.0 for secure authentication and standards
            compliance.
          </>,
          <>
            Led security audits to enhance application stability and API
            security.
          </>,
        ],
        images: [
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Kimberly Clark Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Xtivia Inc.",
        timeframe: "January 2021 - March 2023",
        role: "Full-Stack Developer",
        achievements: [
          <>
            Redesigned company websites to improve user experience and
            functionality.
          </>,
          <>
            Built internal portals to streamline team collaboration and
            efficiency.
          </>,
        ],
        images: [],
      },
      {
        company: "Acelab",
        timeframe: "March 2019 - May 2021",
        role: "Full-Stack Developer",
        achievements: [
          <>
            Designed audit procedure backend applications for accurate auditing
            processes.
          </>,
          <>
            Built features using Java, Spring Boot, and MongoDB for data
            management.
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
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "React",
        description: <>Building dynamic and interactive user interfaces.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Node.js",
        description: <>Creating robust backend services and APIs.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Microservices",
        description: (
          <>Designing scalable and efficient service architectures.</>
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
  title: "My projects",
  description: `A showcase of projects developed by ${person.name}, ranging from real-time apps to e-commerce platforms.`,
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

export { person, social, newsletter, home, about, blog, work, gallery };
