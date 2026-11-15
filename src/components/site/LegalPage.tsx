import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { siteConfig } from "@/config/site";
import { Eyebrow } from "./SectionHeading";

export interface LegalSection {
  id: string;
  title: string;
  body: ReactNode;
}

/** Shared layout for Privacy Policy and Terms of Service. */
export function LegalPage({ eyebrow, title, intro, sections }: { eyebrow: string; title: string; intro: string; sections: LegalSection[] }) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border pt-32 pb-12 md:pt-40 md:pb-16">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade" />
        <div className="container-x relative flex max-w-4xl flex-col gap-5 animate-page-in">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="display-xl text-foreground">{title}</h1>
          <p className="lead max-w-2xl">{intro}</p>
          <p className="font-mono text-xs text-muted-foreground">Last updated: {siteConfig.legal.lastUpdated}</p>
        </div>
      </section>
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[15rem_1fr] lg:gap-16 lg:py-20">
        <aside className="hidden lg:block">
          <nav aria-label="Sections" className="sticky top-28">
            <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">Contents</p>
            <ol className="flex flex-col gap-2.5 border-l border-border pl-4 text-sm">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-muted-foreground transition-colors hover:text-foreground">
                    <span className="mr-2 font-mono text-[0.65rem] text-primary">{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>
        <article className="flex max-w-3xl flex-col gap-12">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-28">
              <h2 className="mb-4 flex items-baseline gap-3 font-display text-xl font-bold text-foreground md:text-2xl">
                <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </h2>
              <div className="legal-prose flex flex-col gap-4 leading-relaxed text-muted-foreground [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-foreground [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2">
                {s.body}
              </div>
            </section>
          ))}
          <p className="rounded-2xl border border-border bg-card px-5 py-4 text-sm text-muted-foreground">
            Questions about this page? <Link to="/contact" className="font-semibold text-primary">Contact us</Link> and we'll respond personally.
          </p>
        </article>
      </div>
    </>
  );
}
