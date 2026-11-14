import { Rocket, Store, ShoppingCart, LayoutDashboard, Workflow, Layers, type LucideIcon } from "lucide-react";

/** Business-oriented solution categories. Each links a real business need to a possible digital answer. */
export interface Solution {
  slug: string;
  title: string;
  audience: string;
  icon: LucideIcon;
  need: string;
  approach: string;
  outcomes: string[];
  relatedServices: string[]; // service slugs
}

export const solutions: Solution[] = [
  {
    slug: "startups",
    title: "Startup Digital Solutions",
    audience: "Startups & founders",
    icon: Rocket,
    need: "You have an idea and limited time to prove it. You need a credible presence and a first version of the product that real users can try.",
    approach:
      "We help define the smallest useful version of the product, design it clearly and build it on a foundation that can grow with feedback.",
    outcomes: ["Launch-ready MVP", "Investor- and customer-ready website", "Clear roadmap for next releases"],
    relatedServices: ["digital-product-development", "ui-ux-design", "web-development"],
  },
  {
    slug: "small-business",
    title: "Small Business Digital Presence",
    audience: "Small businesses",
    icon: Store,
    need: "Customers search online before they call or visit. Without a clear, trustworthy website, opportunities go to competitors.",
    approach:
      "We create a professional website that explains what you do, works beautifully on phones and makes it easy for people to reach you.",
    outcomes: ["Professional, mobile-friendly website", "Easy enquiries and contact", "Search-ready foundations"],
    relatedServices: ["web-development", "ui-ux-design"],
  },
  {
    slug: "ecommerce",
    title: "E-commerce Platforms",
    audience: "Online businesses",
    icon: ShoppingCart,
    need: "Selling online means more than listing products — stock, payments, orders and customer communication all need to work together.",
    approach:
      "We build storefronts and admin tools that keep the shopping experience smooth and day-to-day operations manageable.",
    outcomes: ["Online store with secure checkout", "Product and order management", "Connected payment and shipping tools"],
    relatedServices: ["ecommerce-solutions", "api-development"],
  },
  {
    slug: "custom-applications",
    title: "Custom Business Applications",
    audience: "Growing companies",
    icon: LayoutDashboard,
    need: "As a company grows, spreadsheets and generic tools stop keeping up. Teams need software that reflects how they really work.",
    approach:
      "We map your processes, then design and build focused applications with the right roles, data and reports.",
    outcomes: ["Purpose-built internal tools", "Reliable, structured data", "Dashboards for better decisions"],
    relatedServices: ["software-development", "api-development"],
  },
  {
    slug: "automation",
    title: "Workflow & Process Automation",
    audience: "Organizations seeking digital transformation",
    icon: Workflow,
    need: "Repetitive tasks, manual hand-offs and copy-paste between systems quietly cost hours every week.",
    approach:
      "We identify the processes worth automating, connect your systems and replace manual steps with dependable workflows.",
    outcomes: ["Less repetitive manual work", "Connected business systems", "Fewer errors and lost hand-offs"],
    relatedServices: ["business-automation", "api-development"],
  },
  {
    slug: "saas",
    title: "SaaS & Digital Products",
    audience: "Entrepreneurs",
    icon: Layers,
    need: "Turning expertise or an internal tool into a product requires accounts, subscriptions, onboarding and a dependable platform.",
    approach:
      "We help shape the product, plan its architecture and deliver it in iterations that learn from real users.",
    outcomes: ["Subscription-ready platform", "Onboarding and account management", "Architecture built to evolve"],
    relatedServices: ["digital-product-development", "software-development"],
  },
];

/** Business goals used on the Solutions page. */
export const solutionGoals = [
  { title: "Establishing a digital presence", problem: "Hard to find or understand online.", solution: "A clear, fast, mobile-ready website that explains what you offer and invites contact." },
  { title: "Building custom platforms", problem: "Generic tools don't fit how you work.", solution: "Purpose-built web platforms shaped around your users, data and processes." },
  { title: "Improving business workflows", problem: "Too much manual, repetitive work.", solution: "Automated workflows, notifications and reports that free up your team." },
  { title: "Launching online stores", problem: "Sales limited to in-person or messaging.", solution: "A storefront with catalogue, checkout and order management in one place." },
  { title: "Connecting business systems", problem: "Data copied between disconnected tools.", solution: "APIs and integrations that keep information in sync automatically." },
  { title: "Developing digital products", problem: "An idea without a buildable plan.", solution: "A scoped MVP, delivered in iterations and refined with real feedback." },
];
