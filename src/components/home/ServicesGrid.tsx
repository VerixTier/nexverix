import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { availabilityLabel, services } from "@/data/services";
import { Reveal } from "@/components/site/Reveal";

export function ServicesGrid() {
  return (
    <div className="grid overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4 [&>*]:bg-background gap-px">
      {services.map((s, i) => (
        <Reveal key={s.slug} delay={(i % 4) * 70} className="h-full">
          <Link
            to="/services"
            hash={s.slug}
            className="group hairline-top flex h-full flex-col gap-5 p-7 transition-colors duration-500 hover:bg-card hover:before:opacity-100 md:p-8"
          >
            <div className="flex items-start justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-surface text-primary transition-all duration-500 group-hover:border-primary/50 group-hover:bg-primary-soft group-hover:text-cyan">
                <s.icon className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <div className="flex flex-col gap-2.5">
              <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
            </div>
            <div className="mt-auto flex items-center justify-between gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
                Learn More
                <ArrowUpRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
              {s.availability === "growing" && (
                <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted-foreground">
                  {availabilityLabel.growing}
                </span>
              )}
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
