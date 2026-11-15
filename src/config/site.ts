/**
 * Central NexVerix site configuration.
 * Edit company details here — every page, the footer and metadata read from this file.
 * Only add contact details and social links once they are real and verified.
 */
export const siteConfig = {
  name: "NexVerix",
  tagline: "Engineering Digital Experiences.",
  category: "Digital Solutions & Technology Agency",
  description:
    "NexVerix is a digital solutions and technology agency helping startups, entrepreneurs and businesses turn ideas into practical digital experiences through thoughtful design and reliable engineering.",
  signature: "Digital Solutions. Modern Technology. Meaningful Innovation.",
  /**
   * Production domain. Set VITE_SITE_URL (e.g. https://www.your-domain.com) once a domain is live.
   * When empty, canonical links stay relative and the sitemap uses the current request host.
   */
  url: (import.meta.env["VITE_SITE_URL"] as string | undefined)?.replace(/\/$/, "") ?? "",
  contact: {
    /** Public business email — leave null until a verified inbox exists. */
    email: "mdaziz.nexverix@gmail.com" as string | null,
    /** Public phone number — leave null until verified. */
    phone: null as string | null,
    /** Business location to show publicly — leave null to hide. */
    location: null as string | null,
    responseNote: "We read every message and reply personally.",
  },
  /** Add verified profiles only. Discord stays as text until an invite URL is supplied. */
  social: [
    { label: "GitHub", href: "https://github.com/nexverix" },
    { label: "X", href: "https://x.com/nexverix_dev" },
    { label: "Discord", href: "https://discord.gg/nUdXRTW7Be" },
  ] as {
    label: "LinkedIn" | "GitHub" | "X" | "Instagram" | "Facebook" | "Dribbble" | "Discord";
    href: string | null;
    text?: string;
  }[],
  legal: {
    lastUpdated: "November 14, 2026",
  },
} as const;

export const mainNav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Solutions", to: "/solutions" },
  { label: "Industries", to: "/industries" },
  { label: "Our Work", to: "/work" },
  { label: "Contact", to: "/contact" },
] as const;
