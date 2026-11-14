import { z } from "zod";
import { serviceOptions } from "@/data/services";

export const budgetOptions = ["Under $2,000", "$2,000 – $5,000", "$5,000 – $15,000", "$15,000+", "Not sure yet"] as const;

// Strip control characters (keeps newlines/tabs) from free text.
const clean = (v: string) => v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim();

export const contactSchema = z.object({
  fullName: z.string().transform(clean).pipe(z.string().min(2, "Please enter your full name").max(100, "Name is too long")),
  email: z.string().transform(clean).pipe(z.string().email("Please enter a valid email address").max(255)),
  company: z.string().transform(clean).pipe(z.string().max(120, "Company name is too long")).optional().or(z.literal("")),
  service: z.enum(serviceOptions, { errorMap: () => ({ message: "Please choose a service" }) }),
  budget: z.enum(budgetOptions).optional().or(z.literal("")),
  message: z.string().transform(clean).pipe(z.string().min(20, "Please share at least 20 characters about your project").max(3000, "Please keep it under 3000 characters")),
  // Spam protection: hidden honeypot must stay empty; form must be open for a few seconds.
  website: z.string().max(0).optional().or(z.literal("")),
  startedAt: z.number(),
});

export type ContactInput = z.input<typeof contactSchema>;
