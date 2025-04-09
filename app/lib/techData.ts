// lib/techData.ts
export interface TechItem {
    name: string;
    slug: string;
    category: string;
    logo: string;
    level: number;
    description?: string;
  }
  
  export const techStack: TechItem[] = [
    {
      name: "JavaScript",
      slug: "javascript",
      category: "Language",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      level: 5,
      description: "JavaScript is the language of the web, used for interactivity and dynamic content.",
    },
    {
      name: "TypeScript",
      slug: "typescript",
      category: "Language",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      level: 4,
      description: "TypeScript is JavaScript with static types, improving developer experience and app reliability.",
    },
    {
      name: "React",
      slug: "react",
      category: "Library",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      level: 5,
      description: "React is a JavaScript library for building fast, interactive UIs with reusable components.",
    },
    {
      name: "Next.js",
      slug: "nextjs",
      category: "Framework",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg",
      level: 4,
      description: "Next.js is a powerful React framework for building full-stack applications with SEO in mind.",
    },
    {
      name: "Tailwind CSS",
      slug: "tailwindcss",
      category: "Framework",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      level: 4,
      description: "Tailwind is a utility-first CSS framework that makes styling fast and responsive.",
    },
  ];
  