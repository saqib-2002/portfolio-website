export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Understand",
    description:
      "Clarify the problem, goals, constraints, and users before writing code.",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "I design scalable system architecture and define clear technical solutions.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "I develop iteratively with clean code, performance, and best practices at the core.",
  },
  {
    step: "04",
    title: "Refine",
    description:
      "I optimize, polish, and improve based on feedback and real-world usage.",
  },
];

export interface Service {
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications using modern frontend frameworks and scalable backend systems, built with clean architecture and long-term maintainability in mind.",
  },
  {
    title: "SaaS & Product Development",
    description:
      "From MVPs to production-ready platforms, I help turn ideas into scalable SaaS products focused on growth, performance, and real users.",
  },
  {
    title: "Frontend & UX Engineering",
    description:
      "Responsive, accessible, and polished interfaces with attention to usability, micro-interactions, and smooth animations.",
  },
  {
    title: "Backend APIs & Architecture",
    description:
      "Secure, efficient APIs, authentication systems, and database designs that scale with your product.",
  },
  {
    title: "Problem Solving & Optimization",
    description:
      "Breaking down complex requirements, refactoring legacy systems, and improving performance across the stack.",
  },
];

export const outcomes = [
  "Clean, scalable codebases",
  "Performance-focused builds",
  "Clear communication & ownership",
  "Production-ready delivery",
];
