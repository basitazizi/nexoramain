import type { Metadata } from "next";

import { ContactFormSection } from "../../components/site-sections";
import { SiteShell } from "../../components/site-shell";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a consultation for websites, AI agents, dashboards, and growth support."
};

export default function ContactPage() {
  return (
    <SiteShell>
      <ContactFormSection
        eyebrow="Request a consultation"
        title="Let’s build the setup your business actually needs."
        description="Tell us what you need help with, choose the service that fits best, and send the details. We build websites, AI agents, admin dashboards, and growth systems that are meant to work together."
      />
    </SiteShell>
  );
}
