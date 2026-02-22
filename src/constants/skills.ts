export type SkillLevel = 1 | 2 | 3 | 4 | 5;

export interface SkillItem {
  id: number;
  title: string;
  currentLevel: SkillLevel;
}

export interface SkillGroup {
  group: string;
  items: SkillItem[];
}

export const skills: SkillGroup[] = [
  {
    group: "Frontend",
    items: [
      { id: 1, title: "HTML", currentLevel: 4 },
      { id: 2, title: "CSS", currentLevel: 4 },
      { id: 3, title: "JavaScript", currentLevel: 4 },
      { id: 4, title: "TypeScript", currentLevel: 2 },
      { id: 5, title: "React", currentLevel: 4 },
      { id: 6, title: "Next.js", currentLevel: 3 },
      { id: 7, title: "Tailwind CSS", currentLevel: 4 },
    ],
  },
  {
    group: "Backend",
    items: [
      { id: 1, title: "Node.js", currentLevel: 3 },
      { id: 2, title: "Express.js", currentLevel: 4 },
      { id: 3, title: "REST APIs", currentLevel: 4 },
      { id: 4, title: "Authentication & Authorization", currentLevel: 4 },
    ],
  },
  {
    group: "Databases & Cloud",
    items: [
      { id: 1, title: "MongoDB", currentLevel: 3 },
      { id: 2, title: "SQL", currentLevel: 3 },
      { id: 3, title: "Firebase", currentLevel: 4 },
      { id: 4, title: "Vercel", currentLevel: 3 },
    ],
  },
  {
    group: "Programming",
    items: [
      { id: 1, title: "C", currentLevel: 4 },
      { id: 2, title: "C++", currentLevel: 4 },
    ],
  },
  {
    group: "Product & SaaS",
    items: [
      { id: 1, title: "SaaS Product Development", currentLevel: 4 },
      { id: 2, title: "Startup & Entrepreneurship", currentLevel: 4 },
      { id: 3, title: "MVP Planning & Execution", currentLevel: 4 },
      { id: 4, title: "Product Thinking", currentLevel: 4 },
    ],
  },
];

export interface CoreSkill {
  id: number;
  title: string;
  text: string;
}

export const coreSkills: CoreSkill[] = [
  {
    id: 1,
    title: "React.js",
    text: "Building responsive and dynamic SPAs with hooks, state management, and reusable components.",
  },
  {
    id: 2,
    title: "TypeScript",
    text: "Strongly typed, scalable, and maintainable codebases with improved developer experience.",
  },
  {
    id: 3,
    title: "Next.js",
    text: "Production-ready React apps with SSR, SSG, routing, and performance optimizations.",
  },
  {
    id: 4,
    title: "Tailwind CSS",
    text: "Utility-first styling for modern, responsive, and accessible UI systems.",
  },
  {
    id: 5,
    title: "Node.js & Express",
    text: "Designing and building RESTful APIs and backend services for full-stack applications.",
  },
  {
    id: 6,
    title: "REST APIs",
    text: "API design, integration, error handling, and secure data communication.",
  },
  {
    id: 7,
    title: "Authentication & Authorization",
    text: "Implementing secure auth flows using JWT, sessions, and role-based access control.",
  },
  {
    id: 8,
    title: "MongoDB & SQL",
    text: "Data modeling, querying, and optimization for both NoSQL and relational databases.",
  },
  {
    id: 9,
    title: "Firebase",
    text: "Authentication, real-time databases, cloud functions, and SaaS-ready integrations.",
  },
  {
    id: 10,
    title: "SaaS Product Development",
    text: "Building and shipping scalable SaaS products with a strong focus on user experience.",
  },
  {
    id: 11,
    title: "MVP Planning & Execution",
    text: "Turning product ideas into functional MVPs through rapid iteration and feedback.",
  },
  {
    id: 12,
    title: "Framer Motion",
    text: "Crafting smooth, performant animations and micro-interactions for modern interfaces.",
  },
];

export const skillsDescription: string =
  "The modern web stack I use to turn ideas into scalable, production-ready applications, built with performance, maintainability, and reliability in mind.";


  