import { siteConfig } from "@/config/site";

interface PageMeta {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  noindex?: boolean;
}

/** Builds per-route head() metadata: title, description, Open Graph, Twitter and canonical. */
export function pageHead({ title, description, path, type = "website", noindex }: PageMeta) {
  const fullTitle = path === "/" ? `${siteConfig.name} — ${title}` : `${title} | ${siteConfig.name}`;
  const url = `${siteConfig.url}${path}`;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
      ...(noindex ? [{ name: "robots", content: "noindex" }] : []),
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: `${siteConfig.url}${item.path}`,
      })),
    }),
  };
}
