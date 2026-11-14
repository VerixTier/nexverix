import { processSteps } from "@/data/content";
import { Reveal } from "@/components/site/Reveal";

export function ProcessTimeline() {
  return (
    <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
      <div aria-hidden="true" className="absolute left-0 right-0 top-[2.15rem] hidden h-px bg-gradient-to-r from-transparent via-border-strong to-transparent lg:block" />
      {processSteps.map((step, i) => (
        <Reveal as="li" key={step.title} delay={i * 110} className="relative lg:px-5">
          <div className="flex h-full flex-col gap-5 rounded-3xl border border-border bg-card p-7 shadow-card lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
            <div className="flex items-center gap-4">
              <span className="relative grid h-[4.3rem] w-[4.3rem] shrink-0 place-items-center rounded-2xl border border-border-strong bg-background">
                <step.icon className="h-6 w-6 text-primary" strokeWidth={1.6} />
                <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-gradient-brand font-mono text-[0.62rem] font-semibold text-primary-foreground">
                  {i + 1}
                </span>
              </span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">Stage 0{i + 1}</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground">{step.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            <ul className="mt-auto flex flex-wrap gap-1.5">
              {step.points.map((p) => (
                <li key={p} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">{p}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
