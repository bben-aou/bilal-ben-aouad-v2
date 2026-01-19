export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "marjanemall",
    company: "Marjanemall",
    role: "Front-end Developer",
    location: "Casablanca, Morocco",
    period: "Jun 2025 - Present",
    description: "Morocco's leading e-commerce platform serving millions of customers with comprehensive retail solutions.",
    achievements: [
      "Led and built a comprehensive Product Information Management (PIM) platform to replace paid Octopia solution, creating a modern UI with dynamic product management featuring fully adaptable forms",
      "Achieved 85% Lighthouse score (up from 40%) through code cleanup, component consolidation, and layout optimization strategies",
      "Refactored data fetching architecture by migrating from Redux to React Query with robust caching strategies",
      "Implemented comprehensive RBAC system with dynamic UI rendering and feature access control across the platform",
      "Created end-to-end seller onboarding journey and specialized inventory management tools"
    ],
    technologies: ["React", "TypeScript", "React Query", "Vite", "Tailwind CSS", "ESLint"]
  },
  {
    id: "yakeey",
    company: "Yakeey MEA",
    role: "Front-end Developer",
    location: "Casablanca, Morocco",
    period: "Jan 2024 - Jun 2025",
    description: "Morocco's pioneering digital real estate platform, revolutionizing property transactions and financing through innovative technology solutions.",
    achievements: [
      "Led frontend development for Morocco's first fully digital real estate loan system with CIH Bank, serving 3M+ users",
      "Built sophisticated JSON-driven loan simulation engine using React and react-hook-form with dynamic step rendering and real-time validation",
      "Designed AI-powered document processing system with classification, anomaly detection, and structured data extraction",
      "Boosted landing page load time by 60% using Next.js optimization techniques",
      "Established testing infrastructure (Jest + RTL) achieving 80% coverage on core flows"
    ],
    technologies: ["React", "Next.js", "TypeScript", "React Hook Form", "Zod", "Jest", "Spring Boot"]
  },
  {
    id: "aswak-assalam",
    company: "Aswak Assalam",
    role: "Front-end Developer",
    location: "Casablanca, Morocco",
    period: "Jul 2021 - Dec 2023",
    description: "One of Morocco's largest retail groups, serving millions of customers via nationwide hypermarkets.",
    achievements: [
      "Refactored core e-commerce platform for better scalability, performance, and maintainability",
      "Integrated CMI payment gateway, replacing Shopify defaults and boosting conversions",
      "Developed enterprise notification platform with role-based delivery for real-time order updates",
      "Built real-time KPI dashboards using Chart.js & D3.js for actionable business insights",
      "Improved SEO with structured metadata and category-based filtering—driving higher organic visibility"
    ],
    technologies: ["React", "Shopify", "Chart.js", "D3.js", "Styled Components", "GraphQL"]
  },
  {
    id: "1337-labs",
    company: "1337 Labs x Banque Populaire",
    role: "Front-end Developer",
    location: "Khouribga, Morocco",
    period: "Jun 2020 - Jun 2021",
    description: "A strategic partnership developing an innovative digital banking platform for Banque Populaire's next-generation mobile banking services.",
    achievements: [
      "Developed responsive cross-platform banking interface with React Native (mobile) & React.js (web)",
      "Delivered biometric login & MFA ensuring compliance with banking-grade security standards",
      "Built real-time account management features for instant balance updates, transfers, and spending analytics",
      "Designed guided user onboarding journeys reducing friction for new customers",
      "Collaborated with designers, backend, and compliance teams in fast-paced agile sprints"
    ],
    technologies: ["React", "React Native", "TypeScript", "OAuth", "MFA", "Agile"]
  }
];
