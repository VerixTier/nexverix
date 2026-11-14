import { ShoppingBag, GraduationCap, HeartPulse, Briefcase, Hotel, Rocket, type LucideIcon } from "lucide-react";

/**
 * Potential industry segments. These describe how digital solutions can help —
 * they are not claims of existing clients, domain certification or regulatory compliance.
 */
export interface Industry {
  slug: string;
  title: string;
  icon: LucideIcon;
  intro: string;
  useCases: string[];
  note?: string;
}

export const industries: Industry[] = [
  {
    slug: "retail",
    title: "E-commerce & Retail",
    icon: ShoppingBag,
    intro: "Help customers discover, compare and buy — online and in-store — while keeping stock and orders under control.",
    useCases: ["Online storefronts", "Inventory and order dashboards", "Loyalty and promotions", "Product catalogue management"],
  },
  {
    slug: "education",
    title: "Education & Learning",
    icon: GraduationCap,
    intro: "Make learning materials, schedules and communication easier to access for students, parents and educators.",
    useCases: ["Course and content portals", "Enrolment and registration forms", "Class scheduling tools", "Progress tracking dashboards"],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    icon: HeartPulse,
    intro: "Simplify the administrative side of care — information, appointments and communication — so people can focus on patients.",
    useCases: ["Clinic information websites", "Appointment request systems", "Internal scheduling tools", "Staff resource portals"],
    note: "Projects handling medical data require specific regulatory review, which we scope with you before any work begins.",
  },
  {
    slug: "finance",
    title: "Finance & Professional Services",
    icon: Briefcase,
    intro: "Present expertise clearly and streamline client onboarding, document exchange and internal reporting.",
    useCases: ["Professional firm websites", "Client intake and onboarding", "Document request workflows", "Reporting dashboards"],
    note: "Regulated financial functionality requires appropriate compliance review before development.",
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    icon: Hotel,
    intro: "Turn interest into bookings with inviting digital experiences and smoother day-to-day operations.",
    useCases: ["Restaurant and venue websites", "Reservation and booking flows", "Digital menus", "Guest feedback tools"],
  },
  {
    slug: "startups",
    title: "Startups & Technology",
    icon: Rocket,
    intro: "Move from idea to a working product quickly, with foundations that won't need to be rebuilt as you grow.",
    useCases: ["MVP development", "Landing pages for launch", "SaaS dashboards", "API and integration backends"],
  },
];
