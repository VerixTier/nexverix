import {
  siHtml5, siCss, siJavascript, siTypescript, siReact, siNextdotjs, siTailwindcss,
  siPython, siDjango, siNodedotjs, siExpress, siFastapi,
  siFlutter, siExpo, siAndroid, siApple,
  siPostgresql, siMysql, siSqlite, siMongodb, siRedis,
  siDocker, siCloudflare, siVercel, siLinux, siNginx,
  siGraphql, siStripe, siOpenapiinitiative, siJson,
  siGit, siGithub, siFigma, siPostman, siVite,
} from "simple-icons";
import { Cloud, Plug, Webhook, type LucideIcon } from "lucide-react";

/**
 * Adaptable technology toolkit. Add, remove or move technologies here — the homepage
 * and Technologies page render from this file. `focus` keeps claims honest:
 *  - "core": tools regularly used in NexVerix work
 *  - "exploring": tools being learned or evaluated for suitable projects
 */
export type TechFocus = "core" | "exploring";

export interface Technology {
  name: string;
  description: string;
  focus: TechFocus;
  /** Brand icon from simple-icons (SVG path) */
  path?: string;
  /** Fallback generic icon */
  icon?: LucideIcon;
}

export interface TechCategory {
  slug: string;
  title: string;
  summary: string;
  /** Show this category in the homepage summary */
  home?: boolean;
  homeTitle?: string;
  items: Technology[];
}

const si = (i: { path: string }) => i.path;

export const techCategories: TechCategory[] = [
  {
    slug: "frontend",
    title: "Frontend Development",
    homeTitle: "Frontend",
    home: true,
    summary: "Interfaces people enjoy using — fast, accessible and consistent.",
    items: [
      { name: "HTML", description: "Semantic, accessible page structure.", focus: "core", path: si(siHtml5) },
      { name: "CSS", description: "Layout, responsive design and motion.", focus: "core", path: si(siCss) },
      { name: "JavaScript", description: "Interactive behaviour in the browser.", focus: "core", path: si(siJavascript) },
      { name: "TypeScript", description: "Type-safe, maintainable codebases.", focus: "core", path: si(siTypescript) },
      { name: "React", description: "Component-based user interfaces.", focus: "core", path: si(siReact) },
      { name: "Next.js", description: "Full-stack React with server rendering.", focus: "core", path: si(siNextdotjs) },
      { name: "Tailwind CSS", description: "Utility-first styling and design systems.", focus: "core", path: si(siTailwindcss) },
      { name: "Vite", description: "Fast modern build tooling.", focus: "core", path: si(siVite) },
    ],
  },
  {
    slug: "backend",
    title: "Backend Development",
    homeTitle: "Backend",
    home: true,
    summary: "Reliable application logic, data processing and services.",
    items: [
      { name: "Python", description: "Readable language for apps, data and automation.", focus: "core", path: si(siPython) },
      { name: "Django", description: "Batteries-included Python web framework.", focus: "core", path: si(siDjango) },
      { name: "Node.js", description: "JavaScript runtime for servers and tooling.", focus: "core", path: si(siNodedotjs) },
      { name: "Express.js", description: "Minimal, flexible Node.js web framework.", focus: "core", path: si(siExpress) },
      { name: "FastAPI", description: "High-performance Python APIs.", focus: "exploring", path: si(siFastapi) },
    ],
  },
  {
    slug: "mobile",
    title: "Mobile Development",
    summary: "Mobile-first and cross-platform approaches for app experiences.",
    items: [
      { name: "React Native", description: "Cross-platform apps with React.", focus: "exploring", path: si(siReact) },
      { name: "Expo", description: "Tooling for building and shipping React Native apps.", focus: "exploring", path: si(siExpo) },
      { name: "Flutter", description: "Cross-platform UI toolkit.", focus: "exploring", path: si(siFlutter) },
      { name: "Android", description: "Google's mobile platform.", focus: "exploring", path: si(siAndroid) },
      { name: "iOS", description: "Apple's mobile platform.", focus: "exploring", path: si(siApple) },
    ],
  },
  {
    slug: "databases",
    title: "Database Systems",
    homeTitle: "Databases",
    home: true,
    summary: "Structured, dependable storage chosen for each product's needs.",
    items: [
      { name: "PostgreSQL", description: "Robust relational database.", focus: "core", path: si(siPostgresql) },
      { name: "MySQL", description: "Widely used relational database.", focus: "core", path: si(siMysql) },
      { name: "SQLite", description: "Lightweight embedded database.", focus: "core", path: si(siSqlite) },
      { name: "MongoDB", description: "Flexible document database.", focus: "core", path: si(siMongodb) },
      { name: "Redis", description: "In-memory caching and queues.", focus: "exploring", path: si(siRedis) },
    ],
  },
  {
    slug: "cloud",
    title: "Cloud & Infrastructure",
    homeTitle: "Infrastructure & Tools",
    home: true,
    summary: "Deployment and hosting that keep products available and maintainable.",
    items: [
      { name: "Docker", description: "Consistent, portable environments.", focus: "core", path: si(siDocker) },
      { name: "Cloud Platforms", description: "Managed hosting, storage and services.", focus: "core", icon: Cloud },
      { name: "Linux", description: "Server operating environment.", focus: "core", path: si(siLinux) },
      { name: "Nginx", description: "Web server and reverse proxy.", focus: "exploring", path: si(siNginx) },
      { name: "Vercel", description: "Frontend hosting and deployment.", focus: "exploring", path: si(siVercel) },
      { name: "Cloudflare", description: "Edge network, DNS and security.", focus: "exploring", path: si(siCloudflare) },
    ],
  },
  {
    slug: "apis",
    title: "APIs & Integrations",
    summary: "Connecting products with the services and systems around them.",
    items: [
      { name: "REST APIs", description: "Standard, well-documented HTTP interfaces.", focus: "core", icon: Plug },
      { name: "API Integrations", description: "Connecting third-party business services.", focus: "core", icon: Plug },
      { name: "Webhooks", description: "Event-driven communication between systems.", focus: "core", icon: Webhook },
      { name: "JSON", description: "Lightweight data exchange format.", focus: "core", path: si(siJson) },
      { name: "OpenAPI", description: "API specification and documentation.", focus: "exploring", path: si(siOpenapiinitiative) },
      { name: "GraphQL", description: "Flexible query language for APIs.", focus: "exploring", path: si(siGraphql) },
      { name: "Stripe", description: "Online payments integration.", focus: "exploring", path: si(siStripe) },
    ],
  },
  {
    slug: "tools",
    title: "Development Tools",
    summary: "The workflow behind well-organized, collaborative engineering.",
    items: [
      { name: "Git", description: "Version control for every change.", focus: "core", path: si(siGit) },
      { name: "GitHub", description: "Code hosting, reviews and automation.", focus: "core", path: si(siGithub) },
      { name: "Figma", description: "Interface design and prototyping.", focus: "core", path: si(siFigma) },
      { name: "Postman", description: "API testing and documentation.", focus: "core", path: si(siPostman) },
    ],
  },
];

/** Homepage summary: the four categories with the brief's core list. */
export const homeTechCategories = techCategories
  .filter((c) => c.home)
  .map((c) => ({
    ...c,
    items:
      c.slug === "cloud"
        ? [
            ...techCategories.find((x) => x.slug === "tools")!.items.filter((i) => i.name === "Git" || i.name === "GitHub"),
            ...c.items.filter((i) => i.name === "Docker" || i.name === "Cloud Platforms"),
            techCategories.find((x) => x.slug === "apis")!.items.find((i) => i.name === "API Integrations")!,
          ]
        : c.items.filter((i) => i.focus === "core" && !(c.slug === "frontend" && (i.name === "Vite" || i.name === "TypeScript"))),
  }));

const allTech = techCategories.flatMap((c) => c.items);
export function findTech(name: string) {
  return allTech.find((t) => t.name === name);
}
