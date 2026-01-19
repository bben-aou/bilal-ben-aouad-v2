export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Core",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"]
  },
  {
    name: "Styling & UI",
    skills: ["Tailwind CSS", "Styled Components", "CSS Modules", "Framer Motion", "Responsive Design"]
  },
  {
    name: "State & Data",
    skills: ["React Query", "Redux", "Zustand", "React Hook Form", "Zod", "GraphQL"]
  },
  {
    name: "Testing & Quality",
    skills: ["Jest", "React Testing Library", "Unit Testing", "E2E Testing", "ESLint", "TypeScript Strict"]
  },
  {
    name: "Performance & Architecture",
    skills: ["Code Splitting", "Lazy Loading", "Caching Strategies", "Component Architecture", "Design Systems"]
  },
  {
    name: "Backend & Infrastructure",
    skills: ["Spring Boot", "Express", "Prisma", "PostgreSQL", "Docker", "Git"]
  },
  {
    name: "Tools & Platforms",
    skills: ["Vite", "Webpack", "Shopify", "Socket.IO", "OAuth", "CI/CD"]
  }
];

export const highlightedSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "React Query",
  "Performance Optimization"
];
