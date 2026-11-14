import { useId, useState, type KeyboardEvent } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { solutions } from "@/data/solutions";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

/** Interactive tabbed explorer: business need on the left, matching solution on the right. */
export function SolutionsExplorer() {
  const [active, setActive] = useState(0);
  const id = useId();
  const current = solutions[active]!;

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const keys = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"];
    if (!keys.includes(e.key)) return;
    e.preventDefault();
    const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1;
    const next = (active + dir + solutions.length) % solutions.length;
    setActive(next);
    document.getElementById(`${id}-tab-${next}`)?.focus();
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-10">
      <div role="tablist" aria-orientation="vertical" aria-label="Solution categories" className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0">
        {solutions.map((s, i) => {
          const selected = i === active;
          return (
            <button
              key={s.slug}
              id={`${id}-tab-${i}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`${id}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={onKey}
              className={cn(
                "group flex shrink-0 items-center gap-4 rounded-full border px-4 py-2.5 text-left transition-all duration-300 lg:rounded-none lg:border-0 lg:border-b lg:px-2 lg:py-5",
                selected ? "border-primary/50 bg-primary-soft lg:bg-transparent" : "border-border hover:border-border-strong",
              )}
            >
              <span className={cn("hidden font-mono text-xs transition-colors lg:inline", selected ? "text-primary" : "text-muted-foreground")}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={cn("font-display text-sm font-semibold transition-colors lg:text-xl", selected ? "text-foreground" : "text-muted-foreground group-hover:text-foreground")}>
                {s.title}
              </span>
              <ArrowRight className={cn("ml-auto hidden h-5 w-5 transition-all duration-300 lg:block", selected ? "translate-x-0 text-primary opacity-100" : "-translate-x-2 opacity-0")} />
            </button>
          );
        })}
      </div>

      <div
        id={`${id}-panel`}
        role="tabpanel"
        aria-labelledby={`${id}-tab-${active}`}
        className="relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card md:p-10"
      >
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 glow-primary" />
        <div key={current.slug} className="relative flex animate-page-in flex-col gap-7">
          <div className="flex items-center gap-4">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-cta">
              <current.icon className="h-6 w-6" strokeWidth={1.6} />
            </span>
            <div className="min-w-0">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">For {current.audience.toLowerCase()}</p>
              <h3 className="display-md mt-1 text-foreground">{current.title}</h3>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background/60 p-5">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-warning">The need</p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground/90">{current.need}</p>
            </div>
            <div className="rounded-2xl border border-primary/30 bg-primary-soft p-5">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-cyan">Our approach</p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground/90">{current.approach}</p>
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-3">
            {current.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-2.5 text-sm text-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {o}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6">
            <span className="text-xs text-muted-foreground">Related services:</span>
            {current.relatedServices.map((slug) => {
              const svc = services.find((x) => x.slug === slug);
              return svc ? (
                <Link key={slug} to="/services" hash={slug} className="text-sm font-medium text-foreground underline-offset-4 hover:text-primary hover:underline">
                  {svc.shortTitle}
                </Link>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
