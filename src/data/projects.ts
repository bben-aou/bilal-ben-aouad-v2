export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "pim-platform",
    title: "Product Information Management Platform",
    description: "Enterprise PIM solution replacing paid Octopia platform with dynamic product management, adaptable forms, and centralized configuration.",
    longDescription: "Led the complete frontend development of a comprehensive Product Information Management platform. Features include dynamic form generation based on product categories, conditional field logic, centralized configuration files, and a modern UI designed for efficiency. The platform handles thousands of products with complex attribute hierarchies.",
    tags: ["React", "TypeScript", "React Query", "Enterprise", "E-commerce"],
    featured: true
  },
  {
    id: "loan-simulator",
    title: "Real Estate Loan Simulation Engine",
    description: "Morocco's first fully digital real estate financing platform serving 3M+ users with CIH Bank integration.",
    longDescription: "Developed a sophisticated JSON-driven loan simulation engine that revolutionized real estate financing in Morocco. The system supports multiple loan types (purchase, construction, credit buyback), adapts forms based on property types, and provides real-time validation with seamless step navigation.",
    tags: ["Next.js", "React Hook Form", "Zod", "FinTech", "TypeScript"],
    featured: true
  },
  {
    id: "ai-document-processor",
    title: "AI-Powered Document Processing System",
    description: "Intelligent document upload system with AI classification, anomaly detection, and structured data extraction.",
    longDescription: "Designed and implemented a cutting-edge document processing system that leverages AI for automatic document classification, anomaly detection, and data extraction. Features include floating modal UI for multitasking, real-time processing feedback, and integration with backend ML services.",
    tags: ["React", "AI/ML", "TypeScript", "UX Design"],
    featured: true
  },
  {
    id: "kpi-dashboards",
    title: "Real-Time KPI Dashboards",
    description: "Business intelligence dashboards using Chart.js & D3.js for actionable insights across retail operations.",
    longDescription: "Built comprehensive real-time dashboard system for one of Morocco's largest retail groups. Visualizations include sales trends, inventory levels, customer analytics, and operational KPIs. Optimized for performance with large datasets and real-time WebSocket updates.",
    tags: ["D3.js", "Chart.js", "React", "WebSocket", "Analytics"],
    featured: false
  },
  {
    id: "mobile-banking",
    title: "Cross-Platform Banking Application",
    description: "Responsive banking platform with React Native (mobile) & React.js (web) featuring biometric auth and real-time transactions.",
    longDescription: "Developed a secure, cross-platform banking application for Banque Populaire. Implemented biometric authentication, multi-factor authentication, real-time account management, instant transfers, bill payments, and spending analytics. Ensured compliance with banking-grade security standards.",
    tags: ["React Native", "React", "TypeScript", "Security", "FinTech"],
    featured: false
  },
  {
    id: "rbac-system",
    title: "Dynamic RBAC Access Control System",
    description: "Comprehensive role-based access control with dynamic UI rendering and feature access control across enterprise platform.",
    longDescription: "Implemented a flexible Role-Based Access Control system that dynamically renders UI components based on user permissions. Features include role hierarchy management, feature flags, granular permission controls, and seamless integration with backend authorization services.",
    tags: ["React", "TypeScript", "Security", "Enterprise", "Architecture"],
    featured: false
  }
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsByTag(tag: string): Project[] {
  return projects.filter((project) => 
    project.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}

export function getAllProjectTags(): string[] {
  const tags = new Set<string>();
  projects.forEach((project) => {
    project.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}
