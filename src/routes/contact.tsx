import { useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { pageHead } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { serviceOptions } from "@/data/services";
import { budgetOptions, contactSchema } from "@/lib/contact-schema";
import { submitContact } from "@/lib/contact.functions";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): { service?: string } =>
    typeof s["service"] === "string" ? { service: s["service"] } : {},
  head: () =>
    pageHead({
      title: "Contact",
      description: "Tell NexVerix about your project idea or business challenge. We read every message and reply personally.",
      path: "/contact",
    }),
  component: ContactPage,
});

type Errors = Partial<Record<string, string>>;
const field = "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";

function ContactPage() {
  const { service } = Route.useSearch();
  const send = useServerFn(submitContact);
  const startedAt = useRef(Date.now());
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const initialService = (serviceOptions as readonly string[]).includes(service ?? "") ? service : "";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries()) as Record<string, string>;
    const parsed = contactSchema.safeParse({ ...raw, startedAt: startedAt.current });
    if (!parsed.success) {
      const errs: Errors = {};
      for (const issue of parsed.error.issues) errs[String(issue.path[0])] ??= issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const res = await send({ data: { ...raw, startedAt: startedAt.current } });
      if (res.ok) setStatus("sent");
      else { setServerError(res.error); setStatus("error"); }
    } catch {
      setServerError("Something went wrong. Please check your details and try again.");
      setStatus("error");
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's Build Something <span className="text-gradient">Meaningful.</span></>}
        description="Whether you have a project idea, a business challenge, or simply want to explore possibilities, we'd love to hear from you."
      />
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div className="flex flex-col gap-6">
            <h2 className="display-md text-foreground">What happens next</h2>
            <ol className="flex flex-col gap-4 text-sm text-muted-foreground">
              <li><strong className="text-foreground">1. We read your message</strong> — {siteConfig.contact.responseNote}</li>
              <li><strong className="text-foreground">2. A short conversation</strong> — to understand goals, users and constraints.</li>
              <li><strong className="text-foreground">3. A clear proposal</strong> — scope, approach and next steps.</li>
            </ol>
            {siteConfig.contact.email && <a className="text-primary" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>}
          </div>

          <div className="rounded-[2rem] border border-border bg-card p-6 shadow-card md:p-10">
            {status === "sent" ? (
              <div role="status" className="flex flex-col items-center gap-4 py-12 text-center">
                <CheckCircle2 className="h-12 w-12 text-success" />
                <h2 className="display-md text-foreground">Message received.</h2>
                <p className="text-muted-foreground">Thank you for reaching out. We'll review your project details and get back to you.</p>
              </div>
            ) : (
              <form noValidate onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="fullName" error={errors["fullName"]}><input id="fullName" name="fullName" autoComplete="name" className={field} maxLength={100} /></Field>
                <Field label="Email Address" name="email" error={errors["email"]}><input id="email" name="email" type="email" autoComplete="email" className={field} maxLength={255} /></Field>
                <Field label="Company Name (optional)" name="company" error={errors["company"]}><input id="company" name="company" autoComplete="organization" className={field} maxLength={120} /></Field>
                <Field label="Service Interested In" name="service" error={errors["service"]}>
                  <select id="service" name="service" defaultValue={initialService} className={field}>
                    <option value="" disabled>Select a service</option>
                    {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </Field>
                <Field label="Project Budget (optional)" name="budget" error={errors["budget"]} wide>
                  <select id="budget" name="budget" defaultValue="" className={field}>
                    <option value="">Prefer not to say</option>
                    {budgetOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </Field>
                <Field label="Project Description" name="message" error={errors["message"]} wide>
                  <textarea id="message" name="message" rows={6} maxLength={3000} className={field} placeholder="What would you like to build, and what problem should it solve?" />
                </Field>
                {/* Honeypot: hidden from people, tempting for bots */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="website">Website</label>
                  <input id="website" name="website" tabIndex={-1} autoComplete="off" />
                </div>
                {status === "error" && <p role="alert" className="text-sm text-destructive sm:col-span-2">{serverError}</p>}
                <div className="sm:col-span-2">
                  <Button type="submit" variant="hero" size="xl" disabled={status === "sending"} className="w-full sm:w-auto">
                    {status === "sending" ? <><Loader2 className="animate-spin" /><span>Sending…</span></> : <><span>Send Message</span><Send /></>}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, error, wide, children }: { label: string; name: string; error?: string | undefined; wide?: boolean; children: React.ReactNode }) {
  return (
    <div className={wide ? "flex flex-col gap-2 sm:col-span-2" : "flex flex-col gap-2"}>
      <label htmlFor={name} className="text-sm font-medium text-foreground">{label}</label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
