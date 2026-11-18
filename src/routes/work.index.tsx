import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Info } from "lucide-react";
import { pageHead, breadcrumbJsonLd } from "@/lib/seo";
/* import { projectCategories, projects } from "@/data/projects"; */
import { getPublishedProjects } from "@/data/projectQueries";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ProjectCard } from "@/components/site/ProjectCard";
import { CtaSection } from "@/components/site/CtaSection";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/work/")({
  loader: () => getPublishedProjects(),
  head: () => { 
    const h = pageHead({
      title: "Our Work",
      description: "Demonstration concepts showing the kind of websites, applications and integrations NexVerix designs and builds.",
      path: "/work",
    });
    return { ...h, scripts: [breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Our Work", path: "/work" }])] };
  },
  component: WorkPage,
});

function WorkPage() {
  const projects = Route.useLoaderData();
  const projectCategories = ["All", ...new Set(projects.map((p) => p.category))];

  const [category, setCategory] = useState("All");
  const list = category === "All" ? projects : projects.filter((p) => p.category === category);
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title={<>Ideas into <span className="text-gradient">digital experiences.</span></>}
        description="A growing collection of concepts and builds that show how we approach design, engineering and problem solving."
      />

      <section className="section-y">
        <div className="container-x flex flex-col gap-10">
          <Reveal>
            <p className="flex items-start gap-2.5 rounded-2xl border border-warning/30 bg-card px-4 py-3 text-sm text-muted-foreground">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
              Every project is labelled honestly. Items marked “Demo concept” are demonstrations of the type of work we can deliver, not client engagements.
            </p>
          </Reveal>

          <div role="group" aria-label="Filter projects by category" className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1">
            {projectCategories.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  category === c ? "border-primary/50 bg-primary-soft text-foreground" : "border-border text-muted-foreground hover:text-foreground",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {list.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 80}>
                <ProjectCard project={p} index={projects.indexOf(p)} size="large" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection title="Your project could be next." description="Share your idea and we'll explore together how to turn it into a working digital product." />
    </>
  );
}
