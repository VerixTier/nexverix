import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { LegalPage, type LegalSection } from "@/components/site/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead({
      title: "Privacy Policy",
      description: "How NexVerix collects, uses and protects the information you share through this website.",
      path: "/privacy",
    }),
  component: PrivacyPage,
});

const sections: LegalSection[] = [
  {
    id: "information",
    title: "Information we collect",
    body: (
      <>
        <p>We only collect information you choose to send us. When you use the <Link to="/contact" className="text-primary">contact form</Link>, we receive:</p>
        <ul>
          <li>Your name and email address</li>
          <li>Your company name, if you provide it</li>
          <li>The service you're interested in and an optional budget range</li>
          <li>The message describing your project</li>
        </ul>
        <p>Like most websites, our hosting provider may also process basic technical data such as IP address, browser type and pages requested in order to deliver and secure the site.</p>
      </>
    ),
  },
  {
    id: "use",
    title: "How we use it",
    body: (
      <>
        <p>We use the information you send to:</p>
        <ul>
          <li>Read and respond to your enquiry</li>
          <li>Understand your project and prepare a proposal if you ask for one</li>
          <li>Protect the website and form from spam and abuse</li>
        </ul>
        <p><strong>We do not sell your information</strong>, and we don't add you to marketing lists without your permission.</p>
      </>
    ),
  },
  {
    id: "storage",
    title: "Storage and security",
    body: (
      <p>Contact form submissions are stored securely with our hosting and database provider and are accessible only to the NexVerix team. We apply reasonable technical safeguards, but no online transmission or storage can be guaranteed to be completely secure.</p>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: <p>We keep enquiries for as long as needed to respond and, where a project follows, for the duration of our working relationship. You can ask us to delete your information at any time.</p>,
  },
  {
    id: "cookies",
    title: "Cookies and local storage",
    body: <p>This website does not use advertising or tracking cookies. Your browser stores your light or dark theme preference locally so the site remembers it on your next visit.</p>,
  },
  {
    id: "third-parties",
    title: "Third-party services",
    body: <p>We rely on trusted providers for hosting and data storage. They process data on our behalf only to provide those services. If we add other tools, such as analytics, we will update this page first.</p>,
  },
  {
    id: "rights",
    title: "Your choices and rights",
    body: <p>You can ask us what information we hold about you, request a correction or ask us to delete it. Depending on where you live, you may have additional rights under local data protection law.</p>,
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: <p>We may update this policy as our services evolve. The date at the top of the page shows when it was last changed.</p>,
  },
];

function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="We respect your privacy. This page explains in plain language what information we collect through this website and how we use it."
      sections={sections}
    />
  );
}
