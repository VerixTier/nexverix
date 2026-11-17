
import { supabase } from "@/integrations/supabase/client";
import type { Project, ProjectType } from "@/data/projects";

type ProjectRow = {
  slug: string;
  title: string;
  category: string;
  type: ProjectType;
  summary: string;
  cover_url: string | null;
  cover_alt: string;
  technologies: string[];
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
  details: { label: string; value: string }[];
  live_url: string | null;
  github_url: string | null;
  featured: boolean;
  sort_order: number;
};

function mapProject(row: ProjectRow): Project {
  return {
    slug: row.slug,
    title: row.title,
    category: row.category,
    type: row.type,
    summary: row.summary,
    cover: row.cover_url ?? "",
    coverAlt: row.cover_alt,
    technologies: row.technologies,
    overview: row.overview,
    challenge: row.challenge,
    solution: row.solution,
    features: row.features,
    details: row.details,
    liveUrl: row.live_url ?? undefined,
    featured: row.featured,
  };
}

export async function getPublishedProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from("projects")
    .select(
      "slug, title, category, type, summary, cover_url, cover_alt, technologies, overview, challenge, solution, features, details, live_url, github_url, featured, sort_order"
    )
    .eq("is_published", true)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("Unable to load published projects:", error);
    throw new Error("Unable to load projects.");
  }

  return (data ?? []).map((row) => mapProject(row as ProjectRow));
}

export async function getPublishedProject(slug: string): Promise<Project | undefined> {
  const { data, error } = await supabase
    .from("projects")
    .select(
      "slug, title, category, type, summary, cover_url, cover_alt, technologies, overview, challenge, solution, features, details, live_url, github_url, featured, sort_order"
    )
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle();

  if (error) {
    console.error("Unable to load project:", error);
    throw new Error("Unable to load project.");
  }

  return data ? mapProject(data as ProjectRow) : undefined;
}
