import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Users } from "lucide-react";
import { pageHead, breadcrumbJsonLd } from "@/lib/seo";
import { solutionGoals, solutions } from "@/data/solutions";
import { services } from "@/data/services";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";

export const Route = createFileRoute("/solutions")({
  head: () => {
    const h = pageHead({
      title: "Solutions",
      description:
        "Digital solutions for startups, small businesses, online stores and growing companies — from first websites to custom platforms and automation.",
      path: "/solutions",
    });
    return { ...h, scripts: [breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Solutions", path: "/solutions" }])] };
  },
  component: SolutionsPage,
});

const serviceBySlug = new Map(services.map((s) => [s.slug, s]));

function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={<>Start with the business need. <span className="text-gradient">Then choose the technology.</span></>}
        description="Whether you're launching an idea or improving how an established team works, these are the most common ways we can help."
      >
        <ul className="flex flex-wrap gap-2 pt-2">
          {solutions.map((s) => (
            <li key={s.slug}>
              <a href={`#${s.slug}`} className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground">
                <s.icon className="h-3.5 w-3.5 text-primary" />
                {s.audience}
              </a>
            </li>
          ))}
        </ul>
      </PageHero>

      <section className="section-y">
        <div className="container-x flex flex-col gap-8">
          {solutions.map((s, i) => (
            <Reveal key={s.slug} as="article">
              <div id={s.slug} className="relative grid scroll-mt-28 overflow-hidden rounded-[2rem] border border-border bg-card shadow-card lg:grid-cols-[1fr_1.15fr]">
                <div aria-hidden="true" className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 glow-primary" />
                <div className="relative flex flex-col gap-6 border-b border-border p-7 md:p-10 lg:border-b-0 lg:border-r">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-cta">
                      <s.icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")} / {String(solutions.length).padStart(2, "0")}</span>
                  </div>
                  <h2 className="display-md text-foreground">{s.title}</h2>
                  <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4 text-cyan" /> For {s.audience.toLowerCase()}
                  </p>
                  <div className="mt-auto flex flex-col gap-3 pt-4">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">Related services</p>
                    <ul className="flex flex-wrap gap-2">
                      {s.relatedServices.map((slug) => {
                        const svc = serviceBySlug.get(slug);
                        if (!svc) return null;
                        return (
                          <li key={slug}>
                            <Link to="/services" hash={slug} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs text-foreground transition-colors hover:border-primary/40">
                              {svc.shortTitle}
                              <ArrowUpRight className="h-3 w-3 text-primary" />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="relative flex flex-col gap-8 p-7 md:p-10">
                  <div className="flex flex-col gap-2">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-warning">The need</p>
                    <p className="text-[1.02rem] leading-relaxed text-foreground">{s.need}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary">How we help</p>
                    <p className="text-[1.02rem] leading-relaxed text-muted-foreground">{s.approach}</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-cyan">What you can expect</p>
                    <ul className="grid gap-2.5 sm:grid-cols-2">
                      {s.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-y border-t border-border bg-surface">
        <div className="container-x flex flex-col gap-12">
          <SectionHeading
            eyebrow="Business goals"
            title={<>From challenge to <span className="text-gradient">digital answer.</span></>}
            description="A quick way to see how common business goals translate into practical digital solutions."
          />
          <div className="overflow-hidden rounded-3xl border border-border bg-card">
            <div className="hidden grid-cols-[1.1fr_1fr_1.4fr] gap-6 border-b border-border px-8 py-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground md:grid">
              <span>Goal</span><span>Common challenge</span><span>Possible solution</span>
            </div>
            <ul>
              {solutionGoals.map((g, i) => (
                <Reveal as="li" key={g.title} delay={i * 50}>
                  <div className="grid gap-3 border-b border-border px-6 py-6 last:border-b-0 md:grid-cols-[1.1fr_1fr_1.4fr] md:items-center md:gap-6 md:px-8">
                    <h3 className="font-display text-base font-bold text-foreground">{g.title}</h3>
                    <p className="text-sm text-muted-foreground">{g.problem}</p>
                    <p className="flex items-start gap-2.5 text-sm text-foreground">
                      <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {g.solution}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaSection title="Have a challenge that doesn't fit a category?" description="Most projects don't. Tell us what you're trying to achieve and we'll shape the right solution together." secondaryLabel="See Our Work" secondaryTo="/work" />
    </>
  );
}
