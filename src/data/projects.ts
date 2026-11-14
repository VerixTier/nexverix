import commerceCover from "@/assets/project-commerce.jpg";
import workflowCover from "@/assets/project-workflow.jpg";
import mobileCover from "@/assets/project-mobile.jpg";
import integrationCover from "@/assets/project-integration.jpg";

/**
 * Centralized project data. Add new work by appending an entry.
 * `type` must honestly describe the work:
 *  - "client": delivered for a real client (only with permission to show it)
 *  - "internal": built by NexVerix for its own use
 *  - "experiment": a personal or exploratory build
 *  - "demo": a demonstration concept showing the type of work NexVerix can deliver
 */
export type ProjectType = "client" | "internal" | "experiment" | "demo";

export interface Project {
  slug: string;
  title: string;
  category: string;
  type: ProjectType;
  summary: string;
  cover: string;
  coverAlt: string;
  technologies: string[];
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
  details: { label: string; value: string }[];
  liveUrl?: string;
  featured?: boolean;
}

export const projectTypeLabel: Record<ProjectType, string> = {
  client: "Client project",
  internal: "Internal project",
  experiment: "Experiment",
  demo: "Demo concept",
};

export const projects: Project[] = [
  {
    slug: "lumen-commerce",
    title: "Lumen Commerce",
    category: "E-commerce",
    type: "demo",
    summary: "A responsive storefront concept with a calm product browsing experience and a streamlined checkout.",
    cover: commerceCover,
    coverAlt: "Laptop and smartphone displaying a clean online store with product cards for headphones, watches and sneakers",
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "PostgreSQL"],
    overview:
      "Lumen Commerce is a demonstration concept exploring how a small retail brand could present products online with clarity and speed across desktop and mobile.",
    challenge:
      "Small retailers often rely on heavy templates that feel generic, load slowly on phones and make product updates tedious.",
    solution:
      "A lightweight storefront with focused product pages, a consistent component system and a simple admin flow for catalogue updates — designed mobile-first from the start.",
    features: ["Mobile-first product browsing", "Filterable catalogue", "Streamlined cart and checkout flow", "Simple catalogue management"],
    details: [
      { label: "Type", value: "Demonstration concept" },
      { label: "Focus", value: "Storefront UX & performance" },
      { label: "Platforms", value: "Web, mobile web" },
    ],
    featured: true,
  },
  {
    slug: "flowdesk-operations",
    title: "Flowdesk Operations",
    category: "Business Applications",
    type: "demo",
    summary: "An operations dashboard concept combining task boards, analytics and automated approval workflows.",
    cover: workflowCover,
    coverAlt: "Dark analytics dashboard with charts, kanban columns and an automation flow of connected steps",
    technologies: ["React", "TypeScript", "Django", "PostgreSQL"],
    overview:
      "Flowdesk is a demonstration concept for a growing team that needs one place to track work, see performance and automate routine approvals.",
    challenge:
      "Teams managing work across spreadsheets and chat lose visibility, and repetitive approvals slow everything down.",
    solution:
      "A role-based dashboard with a visual task board, clear reporting and a configurable workflow builder for common approval steps.",
    features: ["Kanban task tracking", "Performance dashboards", "Configurable approval workflows", "Role-based access"],
    details: [
      { label: "Type", value: "Demonstration concept" },
      { label: "Focus", value: "Internal tools & automation" },
      { label: "Platforms", value: "Web application" },
    ],
    featured: true,
  },
  {
    slug: "slotwise-booking",
    title: "Slotwise Booking",
    category: "Mobile",
    type: "demo",
    summary: "A mobile booking experience concept for appointment-based businesses, from date selection to confirmation.",
    cover: mobileCover,
    coverAlt: "Two smartphones showing a booking app with a monthly calendar, time slots and a list of available specialists",
    technologies: ["React Native", "Expo", "Node.js", "PostgreSQL"],
    overview:
      "Slotwise is a demonstration concept showing how service businesses — studios, clinics or salons — could let customers book appointments from their phones.",
    challenge:
      "Booking by phone or message is slow for customers and hard for businesses to manage during busy hours.",
    solution:
      "A simple three-step booking flow with real-time availability, reminders and a lightweight schedule view for staff.",
    features: ["Calendar and time-slot selection", "Specialist availability", "Booking reminders", "Staff schedule view"],
    details: [
      { label: "Type", value: "Demonstration concept" },
      { label: "Focus", value: "Mobile UX" },
      { label: "Platforms", value: "iOS & Android (cross-platform)" },
    ],
    featured: true,
  },
  {
    slug: "bridgeline-integrations",
    title: "Bridgeline Integrations",
    category: "Integrations",
    type: "demo",
    summary: "A service-integration concept connecting a storefront, database, cloud storage and reporting through one API layer.",
    cover: integrationCover,
    coverAlt: "Isometric illustration of connected hexagonal modules representing a database, cloud, server and code linked to a central hub",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Docker", "REST APIs"],
    overview:
      "Bridgeline is a demonstration concept for a central API layer that keeps several business systems in sync without manual data entry.",
    challenge:
      "Businesses often copy the same data between their store, accounting and reporting tools — causing delays and errors.",
    solution:
      "A documented integration service with webhooks, scheduled syncs and clear error handling, so each system receives the data it needs.",
    features: ["Central REST API", "Webhook-driven sync", "Scheduled data jobs", "Error monitoring and retries"],
    details: [
      { label: "Type", value: "Demonstration concept" },
      { label: "Focus", value: "Backend & integrations" },
      { label: "Platforms", value: "Cloud service" },
    ],
  },
];

export const projectCategories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
