import { createServerFn } from "@tanstack/react-start";
import { contactSchema } from "./contact-schema";

/** Stores a contact-form submission in the contact_submissions table after server-side validation. */
export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    // Silently accept bot submissions (honeypot filled or submitted too fast) without storing them.
    if (data.website || Date.now() - data.startedAt < 3000) return { ok: true as const };
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      full_name: data.fullName,
      email: data.email,
      company: data.company || null,
      service: data.service,
      budget: data.budget || null,
      message: data.message,
    });
    if (error) {
      console.error("contact insert failed", error.message);
      return { ok: false as const, error: "We couldn't send your message right now. Please try again shortly." };
    }
    return { ok: true as const };
  });
