import { createFileRoute } from "@tanstack/react-router";
import { pageHead, breadcrumbJsonLd } from "@/lib/seo";
import { techCategories, type TechFocus } from "@/data/technologies";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { TechIcon } from "@/components/site/TechIcon";
import { CtaSection } from "@/components/site/CtaSection";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/technologies")({
  head: () => {
    const h = pageHead({
      title: "Technologies",
      description:
        "The frontend, backend, mobile, database, cloud and integration tools NexVerix uses — chosen for each project's needs, not for trends.",
      path: "/technologies",
    });
    return { ...h, scripts: [breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Technologies", path: "/technologies" }])] };
  },
  component: TechnologiesPage,
});

const focusLabel: Record<TechFocus, string> = { core: "Regularly used", exploring: "Exploring" };

function FocusBadge({ focus }: { focus: TechFocus }) {
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 font-mono text-[0.58rem] uppercase tracking-[0.15em]",
      focus === "core" ? "text-success" : "text-warning",
    )}>
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" />
      {focusLabel[focus]}
    </span>
  );
}

function TechnologiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Technologies"
        title={<>The right tools <span className="text-gradient">for each problem.</span></>}
        description="We aren't tied to one language or platform. This toolkit grows as our work does — and every choice starts with what your project actually needs."
      >
        <div className="flex flex-wrap gap-5 pt-2 text-sm">
          <FocusBadge focus="core" />
          <FocusBadge focus="exploring" />
        </div>
      </PageHero>

      <section className="section-y">
        <div className="container-x flex flex-col gap-16">
          {techCategories.map((cat, ci) => (
            <div key={cat.slug} id={cat.slug} className="grid scroll-mt-28 gap-8 lg:grid-cols-[18rem_1fr] lg:gap-14">
              <Reveal className="flex flex-col gap-3 lg:sticky lg:top-28 lg:self-start">
                <span className="font-mono text-xs text-primary">{String(ci + 1).padStart(2, "0")}</span>
                <h2 className="font-display text-2xl font-bold text-foreground">{cat.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{cat.summary}</p>
              </Reveal>
              <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {cat.items.map((t, i) => (
                  <Reveal as="li" key={t.name} delay={(i % 3) * 60}>
                    <div className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-colors duration-300 hover:border-primary/40">
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface text-foreground transition-colors group-hover:text-primary">
                          <TechIcon tech={t} />
                        </span>
                        <h3 className="font-display text-base font-bold text-foreground">{t.name}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">{t.description}</p>
                      <div className="mt-auto pt-1"><FocusBadge focus={t.focus} /></div>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y border-t border-border bg-surface">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="How we choose"
            title={<>Fit over fashion. <span className="text-gradient">Always.</span></>}
            description="We weigh suitability, maintainability, cost and your team's future needs before recommending any technology — and we explain the trade-offs in plain language."
          />
        </div>
      </section>

      <CtaSection title="Wondering which stack suits your idea?" description="Tell us what you want to build. We'll recommend an approach that fits your goals and budget." />
    </>
  );
}
