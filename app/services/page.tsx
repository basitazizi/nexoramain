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
        description="We can combine website, systems, and growth work into one clear plan."
        primaryAction={{ label: "Contact us", href: "/contact" }}
        secondaryAction={{ label: "About us", href: "/about-us" }}
        compact
      />
    </SiteShell>
  );
}
