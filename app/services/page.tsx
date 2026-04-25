import type { Metadata } from "next";

import { ServicesPageShowcase } from "../../components/services-page-showcase";
import { FinalCta } from "../../components/site-sections";
import { SiteShell } from "../../components/site-shell";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Aureon's admin systems, QR ordering, and growth platform services."
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <ServicesPageShowcase />

      <FinalCta
        title="Need one service or a blended build?"
        description="We can combine dashboards, QR ordering, websites, and growth systems into one cleaner project plan based on what the business actually needs next."
        primaryAction={{ label: "Contact us", href: "/contact" }}
        secondaryAction={{ label: "About us", href: "/about-us" }}
      />
    </SiteShell>
  );
}
