import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Info } from "lucide-react";
import { pageHead } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { SolutionsExplorer } from "@/components/home/SolutionsExplorer";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { Eyebrow, SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { ProjectCard } from "@/components/site/ProjectCard";
import { TechIcon } from "@/components/site/TechIcon";
import { principles } from "@/data/content";
import { industries } from "@/data/industries";
import { projects } from "@/data/projects";
import { homeTechCategories } from "@/data/technologies";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Engineering Digital Experiences",
      description:
        "NexVerix is a digital solutions and technology agency that helps startups and businesses turn ideas into practical websites, software and digital products.",
      path: "/",
    }),
  component: HomePage,
});

function ArrowLink({ to, children }: { to: "/about" | "/work" | "/technologies" | "/industries" | "/solutions"; children: string }) {
  return (
    <Link to={to} className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground">
      <span className="border-b border-border-strong pb-0.5 transition-colors group-hover:border-primary">{children}</span>
      <ArrowRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <Hero />

      {/* 2 — Introduction */}
      <section className="section-y relative">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal className="flex flex-col gap-6">
            <Eyebrow index="01">About NexVerix</Eyebrow>
            <h2 className="display-lg text-foreground">
              Where Ideas Meet <span className="text-gradient">Technology.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="flex flex-col gap-8">
            <p className="lead">
              NexVerix is a digital solutions and technology agency focused on helping businesses turn ideas into practical digital
              experiences. Through thoughtful design, modern engineering, and a problem-solving mindset, we create technology that
              serves real-world needs.
            </p>
            <blockquote className="relative border-l-2 border-primary pl-6">
              <p className="font-display text-xl font-semibold leading-snug text-foreground md:text-2xl">
                “Technology should solve problems, create opportunities, simplify processes, and help businesses move forward.”
              </p>
              <footer className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">Our philosophy</footer>
            </blockquote>
            <div>
              <Button asChild variant="subtle" size="pill">
                <Link to="/about">
                  <span>Discover NexVerix</span>
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3 — Services */}
      <section className="section-y border-t border-border">
        <div className="container-x flex flex-col gap-14">
          <SectionHeading
            index="02"
            eyebrow="What We Do"
            title="Technology Solutions for Real-World Challenges."
            description="Capabilities shaped around business outcomes — choose a single service or combine them into one complete solution."
            action={
              <Button asChild variant="subtle" size="pill">
                <Link to="/services">
                  <span>All services</span>
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            }
          />
          <ServicesGrid />
        </div>
      </section>

      {/* 4 — Why NexVerix */}
      <section className="section-y relative overflow-hidden border-y border-border bg-surface">
        <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-1/3 h-[30rem] w-[30rem] glow-primary" />
        <div className="container-x relative grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              index="03"
              eyebrow="Why NexVerix"
              title="Built Around Your Ideas. Driven by Purpose."
              description="Four principles guide every decision we make — from the first conversation to the final release."
            />
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 90} className="bg-surface">
                <div className="flex h-full flex-col gap-6 p-8 md:p-10">
                  <div className="flex items-center justify-between">
                    <p.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                    <span className="font-display text-5xl font-extrabold text-border-strong">0{i + 1}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">{p.title}</h3>
                  <p className="text-[0.95rem] leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Solutions */}
      <section className="section-y">
        <div className="container-x flex flex-col gap-14">
          <SectionHeading
            index="04"
            eyebrow="Solutions"
            title="Digital Solutions That Support Business Growth."
            description="Start from the challenge you're facing. Each solution connects a real business need with a practical digital answer."
            action={<ArrowLink to="/solutions">Explore solutions</ArrowLink>}
          />
          <SolutionsExplorer />
        </div>
      </section>

      {/* 6 — Industries */}
      <section className="section-y border-t border-border">
        <div className="container-x flex flex-col gap-14">
          <SectionHeading
            index="05"
            eyebrow="Industries"
            title="Technology Across Different Industries."
            description="Every sector has its own rhythm. These are areas where digital solutions can make everyday work simpler and customer experiences better."
            action={<ArrowLink to="/industries">View industries</ArrowLink>}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={(i % 3) * 80}>
                <Link
                  to="/industries"
                  hash={ind.slug}
                  className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-border p-7 transition-all duration-500 hover:border-primary/40 hover:bg-card"
                >
                  <div className="flex items-center gap-3">
                    <ind.icon className="h-5 w-5 text-primary" strokeWidth={1.6} />
                    <h3 className="font-display text-lg font-bold text-foreground">{ind.title}</h3>
                    <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{ind.intro}</p>
                  <ul className="mt-auto flex flex-wrap gap-1.5 pt-1">
                    {ind.useCases.slice(0, 3).map((u) => (
                      <li key={u} className="rounded-full bg-surface px-2.5 py-1 text-xs text-muted-foreground">{u}</li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — Featured projects */}
      <section className="section-y border-t border-border bg-surface">
        <div className="container-x flex flex-col gap-12">
          <SectionHeading
            index="06"
            eyebrow="Selected Work"
            title="Ideas Into Digital Experiences."
            action={
              <Button asChild variant="subtle" size="pill">
                <Link to="/work">
                  <span>View all work</span>
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            }
          />
          <Reveal>
            <p className="flex items-start gap-2.5 rounded-2xl border border-warning/30 bg-background/60 px-4 py-3 text-sm text-muted-foreground">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
              The projects below are demonstration concepts that illustrate the kind of work NexVerix can deliver. They are not client engagements.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <ProjectCard project={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — Technologies */}
      <section className="section-y">
        <div className="container-x flex flex-col gap-14">
          <SectionHeading
            index="07"
            eyebrow="Technologies"
            title="The Right Technology for the Right Solution."
            description="We believe technology should serve the product, the people using it, and the goals behind it. Our approach focuses on selecting suitable tools and technologies for each project's requirements."
            action={<ArrowLink to="/technologies">Full toolkit</ArrowLink>}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homeTechCategories.map((cat, i) => (
              <Reveal key={cat.slug} delay={i * 80}>
                <div className="flex h-full flex-col gap-5 rounded-3xl border border-border bg-card p-6 shadow-card">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-base font-bold text-foreground">{cat.homeTitle}</h3>
                    <span className="font-mono text-[0.65rem] text-muted-foreground">{String(cat.items.length).padStart(2, "0")}</span>
                  </div>
                  <ul className="flex flex-col gap-1">
                    {cat.items.map((t) => (
                      <li key={t.name} className="group flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-surface">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-border bg-background text-muted-foreground transition-colors group-hover:text-primary">
                          <TechIcon tech={t} className="h-4 w-4" />
                        </span>
                        <span className="text-sm text-foreground">{t.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9 — Process */}
      <section className="section-y border-t border-border">
        <div className="container-x flex flex-col gap-16">
          <SectionHeading
            index="08"
            eyebrow="Development Process"
            title="From Concept to Creation."
            description="A clear, collaborative process that keeps everyone aligned from the first conversation to launch — and beyond."
            align="center"
            className="mx-auto"
          />
          <ProcessTimeline />
        </div>
      </section>

      {/* 10 — CTA */}
      <CtaSection />
    </>
  );
}
