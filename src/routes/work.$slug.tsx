import { createFileRoute, Link, notFound, useRouter, type ErrorComponentProps } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Info } from "lucide-react";
import { pageHead, breadcrumbJsonLd } from "@/lib/seo";
import { getProject, projects } from "@/data/projects";
import { findTech } from "@/data/technologies";
import { Eyebrow } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { ProjectTypeBadge } from "@/components/site/ProjectCard";
import { TechIcon } from "@/components/site/TechIcon";
import { CtaSection } from "@/components/site/CtaSection";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return pageHead({ title: "Project not found", description: "This project could not be found.", path: `/work/${params.slug}`, noindex: true });
    }
    const p = loaderData.project;
    const h = pageHead({ title: `${p.title} — ${p.category}`, description: p.summary, path: `/work/${p.slug}`, type: "article" });
    return {
      ...h,
      scripts: [
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Our Work", path: "/work" },
          { name: p.title, path: `/work/${p.slug}` },
        ]),
      ],
    };
  },
  component: ProjectPage,
  notFoundComponent: ProjectNotFound,
  errorComponent: ProjectError,
});

function ProjectNotFound() {
  return (
    <div className="container-x flex min-h-[70vh] flex-col items-center justify-center gap-5 pt-24 text-center">
      <Eyebrow>Project not found</Eyebrow>
      <h1 className="display-lg text-foreground">We couldn't find that project.</h1>
      <Button asChild variant="hero" size="pill"><Link to="/work"><ArrowLeft /><span>Back to Our Work</span></Link></Button>
    </div>
  );
}

function ProjectError({ error, reset }: ErrorComponentProps) {
  const router = useRouter();
  return (
    <div className="container-x flex min-h-[70vh] flex-col items-center justify-center gap-5 pt-24 text-center">
      <h1 className="display-md text-foreground">This project didn't load.</h1>
      <p className="text-muted-foreground">{error instanceof Error ? error.message : "Please try again."}</p>
      <Button variant="hero" size="pill" onClick={() => { router.invalidate(); reset(); }}>Try again</Button>
    </div>
  );
}

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length]!;

  return (
    <>
      <section className="relative overflow-hidden border-b border-border pt-28 pb-12 md:pt-36 md:pb-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] glow-primary" />
        <div className="container-x relative flex flex-col gap-8 animate-page-in">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/work" className="hover:text-foreground">Our Work</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-foreground">{p.title}</li>
            </ol>
          </nav>
          <div className="flex flex-wrap items-center gap-3">
            <ProjectTypeBadge type={p.type} />
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-primary">{p.category}</span>
          </div>
          <h1 className="display-xl max-w-4xl text-foreground">{p.title}</h1>
          <p className="lead max-w-2xl">{p.summary}</p>
        </div>
      </section>

      <section className="container-x pt-10 md:pt-14">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-border bg-media-frame shadow-elevated">
            <img src={p.cover} alt={p.coverAlt} width={1600} height={1008} className="aspect-[16/10] w-full object-cover" />
          </div>
        </Reveal>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <div className="flex flex-col gap-12">
            {p.type === "demo" && (
              <p className="flex items-start gap-2.5 rounded-2xl border border-warning/30 bg-card px-4 py-3 text-sm text-muted-foreground">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
                This is a demonstration concept created to show the type of work NexVerix can deliver. It is not a client project.
              </p>
            )}
            <Block title="Overview" text={p.overview} />
            <Block title="The challenge" text={p.challenge} />
            <Block title="The solution" text={p.solution} />
            <Reveal className="flex flex-col gap-5">
              <h2 className="display-md text-foreground">Key features</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <aside className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-border bg-card p-7">
              <h2 className="mb-5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">Project details</h2>
              <dl className="flex flex-col divide-y divide-border">
                {p.details.map((d) => (
                  <div key={d.label} className="flex justify-between gap-4 py-3 text-sm">
                    <dt className="text-muted-foreground">{d.label}</dt>
                    <dd className="text-right text-foreground">{d.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-3xl border border-border bg-card p-7">
              <h2 className="mb-5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">Technologies</h2>
              <ul className="flex flex-wrap gap-2">
                {p.technologies.map((t) => {
                  const tech = findTech(t);
                  return (
                    <li key={t} className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs text-foreground">
                      {tech && <TechIcon tech={tech} className="h-3.5 w-3.5 text-muted-foreground" />}
                      {t}
                    </li>
                  );
                })}
              </ul>
            </div>
            {p.liveUrl && (
              <Button asChild variant="hero" size="xl">
                <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"><span>Visit live project</span><ArrowUpRight /></a>
              </Button>
            )}
          </aside>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-x py-10">
          <Link to="/work/$slug" params={{ slug: next.slug }} className="group flex items-center justify-between gap-6">
            <span className="flex flex-col gap-1">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">Next project</span>
              <span className="font-display text-2xl font-bold text-foreground md:text-3xl">{next.title}</span>
            </span>
            <ArrowRight className="h-6 w-6 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <CtaSection title="Want something like this for your business?" secondaryLabel="View All Work" secondaryTo="/work" />
    </>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <Reveal className="flex flex-col gap-4">
      <h2 className="display-md text-foreground">{title}</h2>
      <p className="text-[1.05rem] leading-relaxed text-muted-foreground">{text}</p>
    </Reveal>
  );
}
