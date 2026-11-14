import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Compass, Eye, Target } from "lucide-react";
import { pageHead, breadcrumbJsonLd } from "@/lib/seo";
import { PageHero } from "@/components/site/PageHero";
import { Eyebrow, SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { coreValues, principles } from "@/data/content";

export const Route = createFileRoute("/about")({
  head: () => {
    const h = pageHead({
      title: "About NexVerix",
      description:
        "Learn how NexVerix approaches digital solutions: understanding the problem first, then applying thoughtful design and modern engineering.",
      path: "/about",
    });
    return { ...h, scripts: [breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])] };
  },
  component: AboutPage,
});

const techApproach = [
  { title: "Problem before platform", text: "We define what needs to be solved and for whom before choosing any language or framework." },
  { title: "Fit over fashion", text: "We select tools for their suitability, maintainability and long-term cost — not because they're trending." },
  { title: "Built to evolve", text: "We structure products so they can be extended, handed over or improved without starting again." },
  { title: "Open about trade-offs", text: "Every technical choice has pros and cons. We explain them in plain language so you can decide with confidence." },
];

const qualityCommitments = [
  "Responsive, accessible interfaces tested across devices",
  "Clean, documented and maintainable code",
  "Security-minded handling of data, keys and user input",
  "Performance budgets and search-ready foundations",
  "Clear communication and realistic timelines",
  "Support and refinement after launch",
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About NexVerix"
        title={<>We engineer digital experiences <span className="text-gradient">that matter.</span></>}
        description="We understand technology. We understand business. We build digital solutions that matter."
      />

      {/* Company introduction */}
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal className="flex flex-col gap-6">
            <Eyebrow index="01">Who we are</Eyebrow>
            <h2 className="display-lg text-foreground">A technology partner for ambitious ideas.</h2>
          </Reveal>
          <Reveal delay={120} className="flex flex-col gap-6 text-[1.05rem] leading-relaxed text-muted-foreground">
            <p>
              NexVerix is a digital solutions and technology agency that helps startups, entrepreneurs and businesses transform ideas
              into practical digital experiences through software engineering, modern design and technology.
            </p>
            <p>
              Rather than limiting ourselves to a single programming language, framework or platform, we focus on understanding each
              business need and delivering the solution that fits it best — whether that's a website, a custom application, an online
              store or a connected system.
            </p>
            <p className="text-foreground">
              We transform ideas into meaningful digital experiences through thoughtful design, modern technology, and reliable engineering.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-y relative overflow-hidden border-y border-border bg-surface">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-0 h-[30rem] w-[30rem] glow-primary" />
        <div className="container-x relative flex flex-col gap-14">
          <SectionHeading
            index="02"
            eyebrow="Our philosophy"
            title={<>Technology should solve problems, create opportunities, simplify processes, and help businesses <span className="text-gradient">move forward.</span></>}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-background p-6">
                  <p.icon className="h-5 w-5 text-primary" strokeWidth={1.6} />
                  <h3 className="font-display text-lg font-bold text-foreground">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-y">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {[
            { label: "Mission", icon: Target, text: "To empower businesses and individuals through thoughtful digital solutions and practical technology." },
            { label: "Vision", icon: Eye, text: "To become a trusted technology brand recognized for engineering meaningful digital experiences and innovative software solutions." },
          ].map((m, i) => (
            <Reveal key={m.label} delay={i * 120}>
              <div className="relative flex h-full flex-col gap-8 overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-card md:p-12">
                <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 glow-cyan" />
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                    <m.icon className="h-5 w-5" />
                  </span>
                  <span className="eyebrow">Our {m.label}</span>
                </div>
                <p className="relative font-display text-2xl font-semibold leading-snug text-foreground md:text-3xl">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Core values */}
      <section className="section-y border-t border-border">
        <div className="container-x flex flex-col gap-14">
          <SectionHeading index="03" eyebrow="Core values" title="The values behind our work." />
          <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 70} className="bg-background">
                <div className="flex h-full flex-col gap-3 p-7">
                  <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-lg font-bold text-foreground">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </Reveal>
            ))}
            <div className="hidden bg-gradient-brand p-7 lg:flex lg:flex-col lg:justify-end">
              <Compass className="h-8 w-8 text-primary-foreground" strokeWidth={1.4} />
              <p className="mt-4 font-display text-lg font-bold text-primary-foreground">Guided by purpose.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach to technology */}
      <section className="section-y border-t border-border bg-surface">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              index="04"
              eyebrow="How we approach technology"
              title="Technology is a tool — not our identity."
              description="Our focus is the outcome. The technology we choose is simply the best way we know to get there for each project."
            />
          </div>
          <ol className="flex flex-col">
            {techApproach.map((a, i) => (
              <Reveal as="li" key={a.title} delay={i * 80} className="border-b border-border py-7 first:pt-0">
                <div className="flex gap-6">
                  <span className="font-display text-3xl font-extrabold text-border-strong">0{i + 1}</span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-xl font-bold text-foreground">{a.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{a.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Commitment to quality */}
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <SectionHeading
            index="05"
            eyebrow="Our commitment to quality"
            title="Careful work, from the first line to the final release."
            description="Quality isn't a phase at the end of a project. It's a set of habits we bring to every stage."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {qualityCommitments.map((q, i) => (
              <Reveal as="li" key={q} delay={i * 60}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed text-foreground">{q}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection title="Let's Build Something Meaningful." description="Tell us about your idea or challenge — we'll help you find the right way forward." primaryLabel="Start a Conversation" />
    </>
  );
}
