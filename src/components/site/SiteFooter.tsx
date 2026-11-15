import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { mainNav, siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";
import { Logo } from "./Logo";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { contact, social } = siteConfig;

  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 glow-primary opacity-60" />
      <div className="container-x relative pb-10 pt-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div className="flex max-w-sm flex-col gap-5">
            <Logo showTagline />
            <p className="text-sm leading-relaxed text-muted-foreground">{siteConfig.description}</p>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground/80">{siteConfig.signature}</p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            <FooterColumn title="Company">
              {mainNav.filter((n) => n.to !== "/").map((n) => (
                <li key={n.to}><Link to={n.to} className="footer-link">{n.label}</Link></li>
              ))}
              <li><Link to="/technologies" className="footer-link">Technologies</Link></li>
            </FooterColumn>
            <FooterColumn title="Services">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}><Link to="/services" hash={s.slug} className="footer-link">{s.shortTitle}</Link></li>
              ))}
            </FooterColumn>
            <FooterColumn title="Solutions">
              {solutions.map((s) => (
                <li key={s.slug}><Link to="/solutions" hash={s.slug} className="footer-link">{s.title.replace(" Digital Solutions", "").replace(" Digital Presence", "")}</Link></li>
              ))}
            </FooterColumn>
            <FooterColumn title="Connect">
              <li>
                <Link to="/contact" className="footer-link inline-flex items-center gap-1.5">
                  Start a project <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </li>
              {contact.email && (
                <li><a href={`mailto:${contact.email}`} className="footer-link inline-flex items-center gap-2"><Mail className="h-3.5 w-3.5" />{contact.email}</a></li>
              )}
              {contact.phone && (
                <li><a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="footer-link inline-flex items-center gap-2"><Phone className="h-3.5 w-3.5" />{contact.phone}</a></li>
              )}
              {contact.location && (
                <li className="inline-flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-3.5 w-3.5" />{contact.location}</li>
              )}
              {social.map((s) => (
                <li key={s.label}>
                  {s.href ? (
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="footer-link">{s.label}</a>
                  ) : (
                    <span className="text-sm text-muted-foreground">{s.label}: {s.text}</span>
                  )}
                </li>
              ))}
              {social.length === 0 && (
                <li className="text-sm text-muted-foreground/70">Social profiles coming soon</li>
              )}
            </FooterColumn>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} NexVerix. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
            <li><Link to="/terms" className="footer-link">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-w-0">
      <h3 className="mb-4 font-mono text-[0.68rem] font-medium uppercase tracking-[0.2em] text-foreground">{title}</h3>
      <ul className="flex flex-col gap-2.5">{children}</ul>
    </div>
  );
}
