import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, CircleDot, Package, Sparkles, Target } from "lucide-react";
import { pageHead, breadcrumbJsonLd } from "@/lib/seo";
import { availabilityLabel, services } from "@/data/services";
import { findTech } from "@/data/technologies";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { TechIcon } from "@/components/site/TechIcon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => {
    const h = pageHead({
      title: "Services",
      description:
        "Web development, custom software, UI/UX design, e-commerce, API integration, automation and digital product development from NexVerix.",
      path: "/services",
    });
    return {
      ...h,
      scripts: [
        breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]),
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: services.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: { "@type": "Service", name: s.title, description: s.summary, provider: { "@type": "Organization", name: "NexVerix" } },
            })),
          }),
        },
      ],
    };
  },
  component: ServicesPage,
});

function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [ids]);
  return active;
}

const ids = services.map((s) => s.slug);

function ServicesPage() {
  const active = useScrollSpy(ids);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Capabilities built around <span className="text-gradient">your business.</span></>}
        description="Each service starts with the problem you need to solve. Explore what we offer today, and where our capabilities are actively growing."
      >
        <div className="flex flex-wrap gap-4 pt-2 text-sm">
          <span className="inline-flex items-center gap-2 text-foreground"><span className="h-2 w-2 rounded-full bg-success" />{availabilityLabel.available}</span>
          <span className="inline-flex items-center gap-2 text-muted-foreground"><span className="h-2 w-2 rounded-full bg-warning" />{availabilityLabel.growing}</span>
        </div>
      </PageHero>

      {/* Mobile service chips */}
      <nav aria-label="Services" className="sticky top-18 z-30 border-b border-border bg-header lg:hidden">
        <ul className="no-scrollbar container-x flex gap-2 overflow-x-auto py-3">
          {services.map((s) => (
            <li key={s.slug} className="shrink-0">
              <a
                href={`#${s.slug}`}
                className={cn(
                  "block rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
                  active === s.slug ? "border-primary/50 bg-primary-soft text-foreground" : "border-border text-muted-foreground",
                )}
              >
                {s.shortTitle}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="container-x grid gap-12 py-16 lg:grid-cols-[16rem_1fr] lg:gap-16 lg:py-24">
        <aside className="hidden lg:block">
          <nav aria-label="Services" className="sticky top-28 flex flex-col">
            <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">On this page</p>
            <ul className="flex flex-col border-l border-border">
              {services.map((s, i) => (
                <li key={s.slug}>
                  <a
                    href={`#${s.slug}`}
                    aria-current={active === s.slug ? "true" : undefined}
                    className={cn(
                      "-ml-px flex items-center gap-3 border-l py-2.5 pl-4 text-sm transition-colors",
                      active === s.slug ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <span className="font-mono text-[0.65rem] text-primary">{String(i + 1).padStart(2, "0")}</span>
                    {s.shortTitle}
                  </a>
                </li>
              ))}
            </ul>
            <Button asChild variant="hero" size="pill" className="mt-8">
              <Link to="/contact"><span>Discuss a project</span><ArrowUpRight /></Link>
            </Button>
          </nav>
        </aside>

        <div className="flex flex-col gap-10">
          {services.map((s, i) => (
            <Reveal as="article" key={s.slug}>
              <div id={s.slug} className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-card">
                <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 glow-primary" />
                <header className="relative flex flex-col gap-6 border-b border-border p-7 md:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-cta">
                      <s.icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">Service {String(i + 1).padStart(2, "0")}</span>
                    <span
                      className={cn(
                        "ml-auto inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.15em]",
                        s.availability === "available" ? "border-success/40 text-success" : "border-warning/40 text-warning",
                      )}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      {availabilityLabel[s.availability]}
                    </span>
                  </div>
                  <h2 className="display-md text-foreground">{s.title}</h2>
                  <p className="max-w-3xl text-[1.02rem] leading-relaxed text-muted-foreground">{s.overview}</p>
                </header>

                <div className="relative grid gap-px bg-border md:grid-cols-2">
                  <DetailBlock icon={Target} title="Business problems it addresses" items={s.problems} />
                  <DetailBlock icon={Sparkles} title="Key capabilities" items={s.capabilities} />
                  <DetailBlock icon={Package} title="Potential deliverables" items={s.deliverables} />
                  <DetailBlock icon={CircleDot} title="Typical use cases" items={s.useCases} />
                </div>

                <footer className="relative flex flex-col gap-5 border-t border-border p-7 md:flex-row md:items-center md:justify-between md:p-10">
                  <div className="flex flex-col gap-3">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">Relevant technologies</p>
                    <ul className="flex flex-wrap gap-2">
                      {s.technologies.map((t) => {
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
                  <Button asChild variant="subtle" size="pill" className="shrink-0 self-start md:self-auto">
                    <Link to="/contact" search={{ service: s.title }}>
                      <span>Discuss {s.shortTitle}</span>
                      <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </Button>
                </footer>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <CtaSection title="Not sure which service you need?" description="Describe the challenge in your own words. We'll help you work out the right combination." primaryLabel="Tell Us About Your Project" secondaryLabel="Browse Solutions" secondaryTo="/solutions" />
    </>
  );
}

function DetailBlock({ icon: Icon, title, items }: { icon: typeof Target; title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-4 bg-card p-7 md:p-10">
      <h3 className="flex items-center gap-2.5 font-display text-base font-bold text-foreground">
        <Icon className="h-4 w-4 text-primary" />
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
