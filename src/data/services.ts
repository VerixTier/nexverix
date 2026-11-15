import {
  Globe,
  Boxes,
  Smartphone,
  PenTool,
  ShoppingBag,
  Workflow,
  Cable,
  Layers,
  type LucideIcon,
} from "lucide-react";

/**
 * Centralized service data. Used by the homepage grid, the Services page, the contact form
 * and the footer. `availability` distinguishes services offered today from capabilities
 * NexVerix is actively growing — update it as the agency evolves.
 */
export type ServiceAvailability = "available" | "growing";

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  summary: string;
  availability: ServiceAvailability;
  overview: string;
  problems: string[];
  capabilities: string[];
  deliverables: string[];
  technologies: string[];
  useCases: string[];
}

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Development",
    icon: Globe,
    summary: "Professional business websites, web platforms and custom web applications.",
    availability: "available",
    overview:
      "We build fast, accessible and maintainable websites and web applications designed around your business requirements — from a clear company presence to platforms your customers use every day.",
    problems: [
      "An outdated website that no longer reflects the business",
      "Slow, hard-to-update pages that frustrate visitors and staff",
      "Manual processes that could live inside a simple web tool",
      "No clear way for visitors to understand services or get in touch",
    ],
    capabilities: [
      "Business and marketing websites",
      "Custom web applications and portals",
      "Content management and editable pages",
      "Performance, accessibility and SEO foundations",
    ],
    deliverables: [
      "Responsive website or web application",
      "Reusable component and design foundation",
      "Deployment setup and handover documentation",
      "Analytics and search-ready metadata",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Django"],
    useCases: [
      "Company website for a new business",
      "Customer or member portal",
      "Booking or enquiry platform",
      "Internal dashboard for a small team",
    ],
  },
  {
    slug: "software-development",
    title: "Custom Software Development",
    shortTitle: "Software Development",
    icon: Boxes,
    summary: "Custom software designed to address specific operational and business requirements.",
    availability: "available",
    overview:
      "When off-the-shelf tools don't fit, we design and develop software shaped around the way your organization actually works — reliable, understandable and built to evolve.",
    problems: [
      "Teams juggling spreadsheets and disconnected tools",
      "Generic software that forces awkward workarounds",
      "Business rules that live only in people's heads",
      "Data that is difficult to find, trust or report on",
    ],
    capabilities: [
      "Requirements discovery and solution design",
      "Role-based business applications",
      "Data modelling and reporting",
      "Modernizing or extending existing tools",
    ],
    deliverables: [
      "Working software with documented features",
      "Data structure and access rules",
      "Admin interfaces for day-to-day management",
      "Testing and a plan for future iterations",
    ],
    technologies: ["Python", "Django", "Node.js", "PostgreSQL", "React", "Docker"],
    useCases: [
      "Inventory or order management",
      "Client and project tracking",
      "Internal approval systems",
      "Reporting dashboards",
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile Application Development",
    shortTitle: "Mobile Apps",
    icon: Smartphone,
    summary: "Mobile-first digital experiences and application development.",
    availability: "growing",
    overview:
      "We design mobile-first experiences and are growing our application development capability — starting with responsive web apps and cross-platform approaches that suit early-stage products.",
    problems: [
      "Customers who mostly reach you from their phones",
      "Experiences that feel cramped or broken on small screens",
      "Needing an app-like product without large upfront investment",
    ],
    capabilities: [
      "Mobile-first interface design",
      "Progressive and responsive web applications",
      "Cross-platform app prototypes",
      "Integration with existing backends",
    ],
    deliverables: [
      "Mobile-ready product or prototype",
      "Interface designs for key screens",
      "Connected backend or API",
      "Recommendations for native or cross-platform paths",
    ],
    technologies: ["React", "React Native", "Flutter", "Expo", "Node.js"],
    useCases: [
      "Booking or scheduling app concept",
      "Customer loyalty experience",
      "Field-team companion tool",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortTitle: "UI/UX Design",
    icon: PenTool,
    summary: "Intuitive interfaces, thoughtful user experiences and modern digital product design.",
    availability: "available",
    overview:
      "Good products feel obvious to use. We shape the structure, flow and visual language of digital products so people can find what they need and complete tasks with confidence.",
    problems: [
      "Users who drop off before completing key actions",
      "Inconsistent screens built over time without a system",
      "Ideas that need to be visualized before development",
    ],
    capabilities: [
      "User flows and information architecture",
      "Wireframes and interactive prototypes",
      "Visual interface design",
      "Design systems and component libraries",
    ],
    deliverables: [
      "Clickable prototype",
      "Screen designs for desktop and mobile",
      "Reusable design system",
      "Developer-ready specifications",
    ],
    technologies: ["Figma", "Tailwind CSS", "React"],
    useCases: [
      "Validating a startup idea",
      "Redesigning a confusing dashboard",
      "Creating a consistent brand interface",
    ],
  },
  {
    slug: "ecommerce-solutions",
    title: "E-commerce Solutions",
    shortTitle: "E-commerce",
    icon: ShoppingBag,
    summary: "Online stores, shopping experiences, product management and commerce integrations.",
    availability: "available",
    overview:
      "We help businesses sell online with storefronts that are pleasant to browse, simple to manage and connected to the payment and operational tools they rely on.",
    problems: [
      "Selling only in person or through social messages",
      "A store that is hard to update or slow on mobile",
      "Orders, stock and payments tracked in separate places",
    ],
    capabilities: [
      "Custom and platform-based storefronts",
      "Product catalogue and inventory management",
      "Checkout and payment gateway integration",
      "Order notifications and admin tools",
    ],
    deliverables: [
      "Responsive online store",
      "Product and order management area",
      "Payment and shipping integrations",
      "Launch checklist and handover",
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe"],
    useCases: [
      "Retail brand moving online",
      "Specialty product catalogue",
      "Pre-orders or limited drops",
    ],
  },
  {
    slug: "api-development",
    title: "API Development & Integration",
    shortTitle: "API & Integration",
    icon: Cable,
    summary: "Backend systems, API architecture, third-party integrations and connected applications.",
    availability: "available",
    overview:
      "We design dependable backend services and connect the systems your business already uses, so information flows where it is needed without copy-and-paste.",
    problems: [
      "Tools that don't talk to each other",
      "Duplicate data entry across platforms",
      "A product that needs a backend to grow",
    ],
    capabilities: [
      "REST API design and development",
      "Third-party service integrations",
      "Authentication and access control",
      "Webhooks and data synchronization",
    ],
    deliverables: [
      "Documented API",
      "Integration between selected systems",
      "Secure configuration of keys and access",
      "Monitoring and error-handling approach",
    ],
    technologies: ["Node.js", "Express.js", "Python", "Django", "PostgreSQL", "REST APIs"],
    useCases: [
      "Connecting a store to accounting software",
      "Backend for a web or mobile app",
      "Syncing CRM and marketing tools",
    ],
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    shortTitle: "Automation",
    icon: Workflow,
    summary: "Digital workflows, process automation and technology-driven operational improvements.",
    availability: "growing",
    overview:
      "We look for repetitive work that slows teams down and replace it with simple, reliable digital workflows — always starting with how the process works today.",
    problems: [
      "Hours spent on repetitive manual tasks",
      "Approvals and hand-offs that get lost",
      "Reports compiled by hand every week",
    ],
    capabilities: [
      "Process mapping and opportunity review",
      "Workflow and form automation",
      "Scheduled tasks and notifications",
      "Automated reporting",
    ],
    deliverables: [
      "Process map with recommended improvements",
      "Automated workflow or internal tool",
      "Notifications and status tracking",
      "Guide for the team using it",
    ],
    technologies: ["Python", "Node.js", "REST APIs", "PostgreSQL"],
    useCases: [
      "Automated enquiry routing",
      "Invoice or document generation",
      "Weekly operations reports",
    ],
  },
  {
    slug: "digital-product-development",
    title: "SaaS & Digital Product Development",
    shortTitle: "Digital Products",
    icon: Layers,
    summary: "SaaS platforms, digital tools and custom product-oriented software.",
    availability: "growing",
    overview:
      "For founders and teams with a product idea, we help shape a focused first version, build it on a foundation that can grow, and refine it through real feedback.",
    problems: [
      "An idea that needs a clear, buildable first version",
      "Uncertainty about scope, priorities or technology",
      "A prototype that needs to become a real product",
    ],
    capabilities: [
      "Product discovery and MVP scoping",
      "Accounts, subscriptions and dashboards",
      "Scalable application architecture",
      "Iterative releases and refinement",
    ],
    deliverables: [
      "Product roadmap for the first release",
      "Working MVP",
      "Admin and analytics foundations",
      "Plan for the next iterations",
    ],
    technologies: ["Next.js", "React", "Node.js", "Python", "PostgreSQL", "Docker"],
    useCases: [
      "Niche SaaS tool for a specific industry",
      "Subscription-based platform",
      "Internal tool turned into a product",
    ],
  },
];

export const availabilityLabel: Record<ServiceAvailability, string> = {
  available: "Available now",
  growing: "Growing capability",
};

export const serviceOptions = [services[0]!.title, ...services.slice(1).map((s) => s.title), "Not sure yet"] as [string, ...string[]];
