import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { LegalPage, type LegalSection } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead({
      title: "Terms of Service",
      description: "The terms that apply when you use the NexVerix website.",
      path: "/terms",
    }),
  component: TermsPage,
});

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Using this website",
    body: <p>By using this website you agree to these terms. If you don't agree, please don't use the site.</p>,
  },
  {
    id: "information",
    title: "Information on this site",
    body: (
      <>
        <p>The content on this website describes our services and approach in general terms. It is provided for information only and does not form an offer or a contract.</p>
        <p>Projects marked as <strong>demo concepts</strong> are demonstrations created by NexVerix to illustrate the type of work we can deliver. They are not client engagements.</p>
      </>
    ),
  },
  {
    id: "projects",
    title: "Project engagements",
    body: <p>Any project we take on is covered by a separate written agreement that sets out scope, timeline, fees and responsibilities. That agreement takes priority over anything on this website.</p>,
  },
  {
    id: "enquiries",
    title: "Enquiries",
    body: <p>Sending a message through the contact form does not create a business relationship or any obligation on either side. Please don't send confidential information until we've agreed how it will be handled.</p>,
  },
  {
    id: "ip",
    title: "Intellectual property",
    body: <p>The NexVerix name, logo, design and content of this website belong to NexVerix. Please don't copy or reuse them without permission. Third-party technology names and logos belong to their respective owners and are shown for reference only.</p>,
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>Send spam, malicious code or misleading information through the site</li>
          <li>Try to access parts of the site or its systems you aren't authorised to use</li>
          <li>Interfere with the site's normal operation</li>
        </ul>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: <p>We work to keep this website accurate and available, but we can't guarantee it will always be error-free or uninterrupted. To the extent allowed by law, NexVerix isn't liable for losses arising from use of the website.</p>,
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: <p>We may update these terms from time to time. The date at the top of the page shows when they were last changed.</p>,
  },
];

function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="These terms explain the basic rules for using the NexVerix website."
      sections={sections}
    />
  );
}
