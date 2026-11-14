import type { ReactNode } from "react";
import { Eyebrow } from "./SectionHeading";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
}

/** Shared hero for inner pages: grid backdrop, accent glow and oversized headline. */
export function PageHero({ eyebrow, title, description, children, aside }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border pt-32 pb-16 md:pt-40 md:pb-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] animate-drift glow-primary" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-60 top-20 h-[28rem] w-[28rem] glow-cyan" />
      <HexOutline className="pointer-events-none absolute -right-24 bottom-[-6rem] hidden h-[28rem] w-[28rem] text-border md:block" />
      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div className="flex max-w-4xl flex-col gap-6 animate-page-in">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="display-xl text-foreground">{title}</h1>
            <p className="lead max-w-2xl">{description}</p>
            {children}
          </div>
          {aside && <div className="animate-page-in [animation-delay:120ms]">{aside}</div>}
        </div>
      </div>
    </section>
  );
}

export function HexOutline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className={className} fill="none" stroke="currentColor">
      <polygon points="100,8 180,54 180,146 100,192 20,146 20,54" strokeWidth="0.6" />
      <polygon points="100,34 157,67 157,133 100,166 43,133 43,67" strokeWidth="0.5" opacity="0.7" />
      <polygon points="100,60 134,80 134,120 100,140 66,120 66,80" strokeWidth="0.4" opacity="0.5" />
      <line x1="100" y1="8" x2="100" y2="192" strokeWidth="0.3" opacity="0.5" />
      <line x1="20" y1="54" x2="180" y2="146" strokeWidth="0.3" opacity="0.5" />
      <line x1="180" y1="54" x2="20" y2="146" strokeWidth="0.3" opacity="0.5" />
    </svg>
  );
}
