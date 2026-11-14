import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/hero-composition.jpg";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site/SectionHeading";
import { processSteps } from "@/data/content";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid bg-grid-fade" />
      <div aria-hidden="true" className="absolute -top-40 right-[-10%] -z-10 h-[44rem] w-[44rem] animate-drift glow-primary" />
      <div aria-hidden="true" className="absolute bottom-[-20%] left-[-15%] -z-10 h-[34rem] w-[34rem] glow-cyan" />

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
        <div className="flex flex-col gap-7">
          <div className="animate-fade-up">
            <Eyebrow>Your Digital Solutions Partner</Eyebrow>
          </div>
          <h1 className="display-xl animate-fade-up text-foreground [animation-delay:80ms]">
            Engineering <span className="text-gradient">Digital Experiences</span> That Move Businesses Forward.
          </h1>
          <p className="lead max-w-xl animate-fade-up [animation-delay:160ms]">
            From ambitious ideas to practical digital solutions, NexVerix helps businesses build, evolve, and grow through technology.
          </p>
          <div className="flex animate-fade-up flex-col gap-3 [animation-delay:240ms] sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                <span>Start a Project</span>
                <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button asChild variant="subtle" size="xl">
              <Link to="/services">
                <span>Explore Our Services</span>
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <dl className="mt-4 grid animate-fade-up grid-cols-3 gap-4 border-t border-border pt-6 [animation-delay:320ms] sm:max-w-lg">
            {[
              ["Strategy", "Problem first"],
              ["Design", "People centred"],
              ["Engineering", "Built to last"],
            ].map(([k, v]) => (
              <div key={k} className="min-w-0">
                <dt className="font-display text-sm font-bold text-foreground sm:text-base">{k}</dt>
                <dd className="mt-1 truncate font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground sm:text-[0.68rem]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-fade-up [animation-delay:200ms]">
          <div className="relative overflow-hidden rounded-[2rem] border border-border-strong bg-media-frame shadow-elevated">
            <img
              src={heroImage}
              alt="Abstract composition of interlocking geometric shapes and translucent interface panels connected by a network of light"
              width={1600}
              height={1280}
              fetchPriority="high"
              className="aspect-[5/4] h-full w-full object-cover"
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-primary-foreground/10" />
          </div>

          {/* Floating process card */}
          <div className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-border bg-header p-4 shadow-elevated sm:-left-6 sm:right-auto sm:w-80">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">Delivery pipeline</span>
              <span className="flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-cyan">
                <span className="h-1.5 w-1.5 animate-pulse-node rounded-full bg-cyan" />
                In motion
              </span>
            </div>
            <ol className="mt-4 grid grid-cols-4 gap-2">
              {processSteps.map((s, i) => (
                <li key={s.title} className="flex flex-col gap-2">
                  <span className={i < 3 ? "h-1 rounded-full bg-gradient-brand" : "h-1 rounded-full bg-border"} />
                  <span className="text-[0.7rem] font-semibold text-foreground">{s.title}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="absolute -right-3 -top-4 hidden rounded-xl border border-border bg-header px-3.5 py-2.5 shadow-card md:block">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">idea → product</span>
          </div>
        </div>
      </div>
    </section>
  );
}
