"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Globe,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { BrandWordmark } from "./brand-wordmark";
import { isEnabledRoute } from "./site-data";
import { SiteShell } from "./site-shell";

const highlightPills = [
  "Software development, databases, and admin panels",
  "Websites, booking systems, ordering QR, and e-commerce",
  "Marketing, social media, paid ads, and brand growth"
];

const capabilityRows = [
  "Websites and design",
  "Software and admin systems",
  "Marketing and paid ads",
  "Booking, e-commerce, and AI"
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function HomePageContent() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <SiteShell>
      <div className="relative -mt-8 overflow-x-clip pt-0">
        <div className="pointer-events-none absolute inset-0 dot-grid opacity-60" />

        <div className="relative space-y-10 pb-6 sm:space-y-12">
          <section className="relative left-1/2 w-screen -translate-x-1/2 px-6 pt-0 lg:px-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,var(--accent-glow),transparent_62%)]" />

            <div className="relative mx-auto flex max-w-[960px] flex-col items-center pt-2 text-center sm:pt-4">
              <Reveal prefersReducedMotion={prefersReducedMotion} delay={0.08}>
                <h1 className="max-w-[12.5ch] text-balance text-[clamp(3rem,9vw,6.4rem)] font-semibold leading-[0.88] tracking-[-0.09em] text-[var(--foreground)]">
                  We build the{" "}
                  <span className="font-serif-display font-medium italic text-[var(--foreground-soft)]">
                    digital
                  </span>{" "}
                  layer behind your business.
                </h1>
              </Reveal>

              <Reveal prefersReducedMotion={prefersReducedMotion} delay={0.14}>
                <p className="mt-5 max-w-[46rem] text-balance text-[clamp(1rem,1.8vw,1.2rem)] leading-relaxed tracking-[-0.03em] text-black/58">
                  We build software, databases, admin panels, websites, booking systems,
                  ordering QR flows, e-commerce, and AI agents, then support launch with
                  marketing, content, paid ads, and brand strategy.
                </p>
              </Reveal>

              <Reveal prefersReducedMotion={prefersReducedMotion} delay={0.2}>
                <div className="mt-8 flex w-full flex-row gap-3 sm:items-center sm:justify-center">
                  <ActionLink
                    href="/contact"
                    className="bg-[var(--accent)] text-white sm:px-7 sm:text-base"
                  >
                    Start a project
                    <ArrowUpRight className="h-4 w-4" />
                  </ActionLink>
                  <ActionLink
                    href="/services"
                    className="border border-[var(--line)] bg-white/90 text-black/55 sm:px-7 sm:text-base"
                  >
                    See services
                  </ActionLink>
                </div>
              </Reveal>
            </div>
          </section>

          <section className="mx-auto max-w-[1040px] px-0">
            <Reveal prefersReducedMotion={prefersReducedMotion} delay={0.26}>
              <div className="grid grid-cols-3 gap-3 px-4 sm:px-0">
                {highlightPills.map((item) => (
                  <div
                    key={item}
                    className="min-w-0 rounded-[22px] border border-[var(--line)] bg-white/92 px-3 py-3 text-[0.82rem] leading-relaxed text-black/62 sm:px-4 sm:py-4 sm:text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          <section className="mx-auto max-w-[1040px] px-4 sm:px-0">
            <Reveal prefersReducedMotion={prefersReducedMotion}>
              <div className="grid gap-8 rounded-[30px] border border-[var(--line)] bg-[linear-gradient(180deg,#1d1b1c,#262324)] px-5 py-6 text-white sm:px-6 sm:py-7 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
                <div className="max-w-[30rem]">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/38">
                    Showcase
                  </p>
                  <h2 className="mt-4 text-balance text-[clamp(2.3rem,4.8vw,4.4rem)] font-semibold leading-[0.94] tracking-[-0.07em]">
                    What we build and how it helps your business run better.
                  </h2>

                  <p className="mt-6 max-w-[28rem] text-balance text-base leading-relaxed text-white/66">
                    We combine websites, software systems, booking and e-commerce flows,
                    and growth support into one clearer digital setup for the business.
                  </p>
                </div>

                <MockupStage prefersReducedMotion={prefersReducedMotion} />
              </div>
            </Reveal>
          </section>

          <section className="mx-auto max-w-[1040px] px-4 sm:px-0">
            <Reveal prefersReducedMotion={prefersReducedMotion}>
              <div className="rounded-[28px] border border-[var(--line)] bg-[linear-gradient(135deg,#171616,#282526)] px-5 py-6 text-white sm:px-6 sm:py-7 lg:px-8">
                <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
                  <div className="max-w-[28rem]">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/38">
                      Next step
                    </p>
                    <h2 className="mt-4 text-balance text-[clamp(2.2rem,4.8vw,4.4rem)] font-semibold leading-[0.94] tracking-[-0.07em]">
                    Need software, a website, or growth support that actually fits the business?
                  </h2>
                    <p className="mt-4 text-balance text-base leading-relaxed text-white/62">
                    Send the scope. We can help with software development, admin systems,
                    websites, booking and ordering flows, e-commerce, AI agents, and the
                    marketing layer that supports growth after launch.
                  </p>
                </div>

                <div className="lg:justify-self-end">
                  <div className="flex items-center gap-3 text-sm text-white/70">
                    <CheckCircle2 className="h-4 w-4 text-[var(--accent)]" />
                    Built for operators, brands, and businesses that need both execution and strategy.
                  </div>
                    <div className="mt-5 flex flex-row gap-3 sm:justify-end">
                      <ActionLink
                        href="/contact"
                        className="bg-[var(--accent)] text-white sm:px-7 sm:text-base"
                      >
                        Go to contact
                        <ArrowUpRight className="h-4 w-4" />
                      </ActionLink>
                      <ActionLink
                        href="/services"
                        className="border border-white/14 bg-white/[0.03] text-white/58 sm:px-7 sm:text-base"
                      >
                        See services
                      </ActionLink>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>
        </div>
      </div>
    </SiteShell>
  );
}

function ActionLink({
  children,
  href,
  className
}: {
  children: React.ReactNode;
  href: string;
  className: string;
}) {
  return (
    isEnabledRoute(href) ? (
      <Link
        href={href}
        className={`inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full px-3 py-3.5 text-[0.95rem] font-semibold transition hover:-translate-y-0.5 sm:flex-none ${className}`}
      >
        {children}
      </Link>
    ) : (
      <span
        aria-disabled="true"
        className={`inline-flex flex-1 cursor-not-allowed items-center justify-center gap-2 whitespace-nowrap rounded-full px-3 py-3.5 text-[0.95rem] font-semibold opacity-60 sm:flex-none ${className}`}
      >
        {children}
      </span>
    )
  );
}

function Reveal({
  children,
  prefersReducedMotion,
  delay = 0
}: {
  children: React.ReactNode;
  prefersReducedMotion: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={prefersReducedMotion ? undefined : { once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function MockupStage({
  prefersReducedMotion
}: {
  prefersReducedMotion: boolean;
}) {
  return (
    <div className="relative min-h-[18rem] md:min-h-[21rem]">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={prefersReducedMotion ? undefined : { once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease }}
        className="overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.05]"
      >
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>

        <div className="p-3 md:p-5">
          <div className="rounded-[22px] bg-white px-3 py-3 text-[var(--foreground)] md:px-5 md:py-5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-black/38">
                <Globe className="h-3.5 w-3.5" />
                Website preview
              </div>
              <div className="rounded-full bg-[var(--background-soft)] px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-black/42">
                Home
              </div>
            </div>

            <div className="mt-3 rounded-[20px] border border-[var(--line)] bg-[linear-gradient(180deg,#ffffff,#f7f7f7)] p-3 md:p-4">
              <div className="flex items-center justify-between gap-3 text-[11px] text-black/38">
                <BrandWordmark className="h-4 w-auto opacity-85" />
                <div className="flex items-center gap-2">
                  <span>Services</span>
                  <span>About</span>
                  <span>Contact</span>
                </div>
              </div>

              <p className="mt-4 max-w-[10ch] text-[clamp(1.55rem,3vw,3.1rem)] font-semibold leading-[0.92] tracking-[-0.07em] md:max-w-[9ch]">
                Websites and systems built to sell, manage, and scale.
              </p>
              <p className="mt-3 max-w-[24rem] text-[0.92rem] leading-relaxed text-black/56 md:text-sm">
                Clear messaging, better structure, and direct paths into bookings,
                orders, enquiries, and the internal systems behind them.
              </p>

              <div className="mt-4 flex gap-2">
                <div className="rounded-full bg-[var(--accent)] px-3 py-2 text-[11px] font-medium text-white md:text-xs">
                  Start a project
                </div>
                <div className="rounded-full border border-[var(--line)] px-3 py-2 text-[11px] text-black/66 md:text-xs">
                  See services
                </div>
              </div>

            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
