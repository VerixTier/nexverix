import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { HexOutline } from "./PageHero";

interface CtaSectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryTo?: "/services" | "/work" | "/solutions" | "/about";
}

export function CtaSection({
  title = "Have an Idea? Let's Make It Happen.",
  description = "Every meaningful digital experience starts with an idea. Let's explore what we can build together.",
  primaryLabel = "Let's Talk About Your Project",
  secondaryLabel = "Explore Our Services",
  secondaryTo = "/services",
}: CtaSectionProps) {
  return (
    <section className="section-y">
      <div className="container-x">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-16 shadow-elevated sm:px-12 md:py-24">
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid opacity-70 [mask-image:radial-gradient(ellipse_70%_80%_at_50%_100%,black,transparent)]" />
            <div aria-hidden="true" className="absolute -bottom-48 left-1/2 -z-10 h-[30rem] w-[56rem] -translate-x-1/2 animate-drift glow-primary" />
            <div aria-hidden="true" className="absolute -right-20 -top-28 -z-10 h-80 w-80 glow-cyan" />
            <HexOutline className="absolute -left-20 -top-20 -z-10 h-72 w-72 text-border-strong opacity-60" />
            <HexOutline className="absolute -bottom-24 -right-16 -z-10 h-80 w-80 text-border-strong opacity-50" />
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
              <span className="eyebrow"><span aria-hidden="true" className="h-px w-6 bg-gradient-brand" />Start a conversation</span>
              <h2 className="display-lg text-foreground">{title}</h2>
              <p className="lead max-w-xl">{description}</p>
              <div className="mt-2 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
                <Button asChild variant="hero" size="xl">
                  <Link to="/contact">
                    <span>{primaryLabel}</span>
                    <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </Button>
                <Button asChild variant="subtle" size="xl">
                  <Link to={secondaryTo}>
                    <span>{secondaryLabel}</span>
                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
