import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { mainNav } from "@/config/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-500",
        scrolled || open ? "border-border/70 bg-header" : "border-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <div className="container-x grid h-18 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:grid-cols-[auto_1fr_auto]">
        <Logo />

        <nav aria-label="Primary" className="hidden justify-center lg:flex">
          <ul className="flex items-center gap-0.5 rounded-full border border-border/60 bg-card/30 p-1">
            {mainNav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="relative block rounded-full px-3.5 py-2 text-[0.84rem] font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:bg-primary-soft data-[status=active]:text-foreground xl:px-4"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-2">
          <ThemeToggle />
          <Button asChild variant="nav" size="pill" className="hidden sm:inline-flex">
            <Link to="/contact">
              <span>Let's Talk</span>
              <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Button>
          <button
            ref={toggleRef}
            type="button"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-card/50 text-foreground lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        hidden={!open}
        className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-border/70 lg:hidden"
      >
        <nav aria-label="Mobile" className="container-x flex min-h-full flex-col py-6">
          <ul className="flex flex-col">
            {mainNav.map((item, i) => (
              <li key={item.to} className="animate-fade-up" style={{ animationDelay: `${i * 40}ms` }}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="group flex items-center justify-between border-b border-border/60 py-4 font-display text-2xl font-semibold text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-primary">0{i + 1}</span>
                    {item.label}
                  </span>
                  <ArrowUpRight className="h-5 w-5 opacity-40 transition-all group-hover:opacity-100" />
                </Link>
              </li>
            ))}
            <li className="animate-fade-up" style={{ animationDelay: `${mainNav.length * 40}ms` }}>
              <Link
                to="/technologies"
                className="group flex items-center justify-between border-b border-border/60 py-4 font-display text-2xl font-semibold text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-primary">0{mainNav.length + 1}</span>
                  Technologies
                </span>
                <ArrowUpRight className="h-5 w-5 opacity-40 transition-all group-hover:opacity-100" />
              </Link>
            </li>
          </ul>
          <div className="mt-auto pt-8">
            <Button asChild variant="hero" size="xl" className="w-full">
              <Link to="/contact">
                <span>Let's Talk</span>
                <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
