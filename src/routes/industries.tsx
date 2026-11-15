import { createFileRoute } from "@tanstack/react-router";
import { Check, Info } from "lucide-react";
import { pageHead, breadcrumbJsonLd } from "@/lib/seo";
import { industries } from "@/data/industries";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";

export const Route = createFileRoute("/industries")({
  head: () => {
    const h = pageHead({
      title: "Industries",
      description:
        "How digital solutions can support e-commerce, education, healthcare, professional services, hospitality and startups.",
      path: "/industries",
    });
    return { ...h, scripts: [breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }])] };
  },
  component: IndustriesPage,
});

const approach = [
  { title: "Learn the context", text: "Every sector has its own customers, vocabulary and constraints. We start by understanding yours." },
  { title: "Respect the rules", text: "Where regulations apply, we identify them early and plan the review they need before building." },
  { title: "Design for real users", text: "Staff, customers and partners each need something different. We design around how they actually work." },
];

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Technology across <span className="text-gradient">different industries.</span></>}
        description="Every sector moves at its own pace. These are areas where well-built digital solutions can simplify everyday work and improve customer experiences."
      />

      <section className="section-y">
        <div className="container-x flex flex-col gap-10">
          <Reveal>
            <p className="flex items-start gap-2.5 rounded-2xl border border-warning/30 bg-card px-4 py-3 text-sm text-muted-foreground">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
              These describe how digital solutions can help each sector. They are not a list of existing clients or industry certifications.
            </p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={(i % 2) * 80}>
                <article id={ind.slug} className="relative flex h-full scroll-mt-28 flex-col gap-6 overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card md:p-9">
                  <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 glow-cyan opacity-70" />
                  <div className="relative flex items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-surface text-primary">
                      <ind.icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <h2 className="font-display text-xl font-bold text-foreground md:text-2xl">{ind.title}</h2>
                  </div>
                  <p className="relative leading-relaxed text-muted-foreground">{ind.intro}</p>
                  <div className="relative flex flex-col gap-3">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">Possible solutions</p>
                    <ul className="grid gap-2.5 sm:grid-cols-2">
                      {ind.useCases.map((u) => (
                        <li key={u} className="flex items-start gap-2.5 text-sm text-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                          {u}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {ind.note && (
                    <p className="relative mt-auto rounded-xl border border-border bg-surface px-4 py-3 text-xs leading-relaxed text-muted-foreground">{ind.note}</p>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-t border-border bg-surface">
        <div className="container-x flex flex-col gap-12">
          <SectionHeading eyebrow="Our approach" title="Different sectors. The same careful process." />
          <div className="grid gap-5 md:grid-cols-3">
            {approach.map((a, i) => (
              <Reveal key={a.title} delay={i * 80}>
                <div className="flex h-full flex-col gap-3 rounded-3xl border border-border bg-card p-7">
                  <span className="font-mono text-xs text-primary">0{i + 1}</span>
                  <h3 className="font-display text-lg font-bold text-foreground">{a.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection title="Working in a different industry?" description="The principles stay the same. Tell us about your sector and the problem you'd like to solve." secondaryLabel="Browse Solutions" secondaryTo="/solutions" />
    </>
  );
}
