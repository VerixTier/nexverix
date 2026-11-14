import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { projectTypeLabel, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectTypeBadge({ type, className }: { type: Project["type"]; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em]",
        type === "client" ? "border-success/40 text-success" : "border-warning/40 bg-background/70 text-warning",
        className,
      )}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" />
      {projectTypeLabel[type]}
    </span>
  );
}

export function ProjectCard({ project, size = "default", index }: { project: Project; size?: "default" | "large"; index?: number }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
      <div className={cn("relative overflow-hidden bg-media-frame", size === "large" ? "aspect-[16/10]" : "aspect-[16/10]")}>
        <img
          src={project.cover}
          alt={project.coverAlt}
          loading="lazy"
          width={1600}
          height={1008}
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <ProjectTypeBadge type={project.type} />
        </div>
        {typeof index === "number" && (
          <span className="absolute right-4 top-4 font-mono text-xs text-primary-foreground/80">/{String(index + 1).padStart(2, "0")}</span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-primary">{project.category}</span>
        </div>
        <h3 className={cn("font-display font-bold text-foreground", size === "large" ? "text-2xl md:text-3xl" : "text-xl md:text-2xl")}>
          <Link to="/work/$slug" params={{ slug: project.slug }} className="after:absolute after:inset-0">
            {project.title}
          </Link>
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">{project.summary}</p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-2" aria-label="Technologies">
          {project.technologies.slice(0, 4).map((t) => (
            <li key={t} className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground">{t}</li>
          ))}
        </ul>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
          View Project
          <ArrowUpRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  );
}
