import type { Metadata } from "next";
import Link from "next/link";

import { ServicesPageShowcase } from "../../components/services-page-showcase";
import { FinalCta } from "../../components/site-sections";
import { SiteShell } from "../../components/site-shell";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom websites, AI agents, dashboards, paid advertising, content creation, and growth strategy for modern businesses."
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden px-6 pb-8 pt-2 lg:px-10">
        <div className="pointer-events-none absolute inset-0 dot-grid opacity-45" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-52 bg-[radial-gradient(circle_at_top,var(--accent-glow),transparent_62%)]" />

        <div className="relative mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-[72rem] text-center">
            <h1 className="mx-auto max-w-[12ch] text-balance text-[clamp(3.3rem,8vw,7rem)] font-semibold leading-[0.88] tracking-[-0.09em] text-[var(--foreground)]">
              Custom-built for <span className="font-serif-display font-medium italic text-[var(--foreground-soft)]">how</span> your business runs.
            </h1>

            <p className="mx-auto mt-6 max-w-[56rem] text-[clamp(1rem,1.8vw,1.3rem)] leading-relaxed tracking-[-0.03em] text-black/58">
              We build custom websites, AI agents, admin dashboards, paid advertising
              systems, content creation pipelines, and brand growth strategy for
              businesses that want stronger execution online.
            </p>

            <div className="mx-auto mt-8 flex max-w-[22rem] flex-row gap-3 sm:max-w-none sm:justify-center sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex flex-1 items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3.5 text-center text-[0.98rem] font-semibold text-white shadow-[0_12px_24px_var(--shadow-color)] transition hover:-translate-y-0.5 hover:bg-[var(--accent-hover)] sm:flex-none sm:px-6 sm:text-base"
              >
                Contact us
              </Link>
              <Link
                href="/"
                className="inline-flex flex-1 items-center justify-center rounded-full border border-[var(--line)] bg-white px-5 py-3.5 text-center text-[0.98rem] font-medium text-black/78 shadow-[0_10px_20px_var(--shadow-color)] transition hover:bg-[var(--background-soft)] sm:flex-none sm:px-6 sm:text-base"
              >
                Back home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServicesPageShowcase />

      <FinalCta
        title="Ready to build the right setup for your business?"
        description="Tell us what you need and we will map the right mix of website, systems, AI, and growth support."
        primaryAction={{ label: "Start the conversation", href: "/contact" }}
        secondaryAction={{ label: "See home", href: "/" }}
        compact
      />
    </SiteShell>
  );
}
