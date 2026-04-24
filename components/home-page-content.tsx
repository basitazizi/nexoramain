"use client";

import {
  ArrowUpRight,
  CheckCircle2,
  Database,
  Gauge,
  Globe,
  MessageSquare,
  PenTool,
  ShieldCheck
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { processSteps } from "./site-data";
import { SiteShell } from "./site-shell";

const highlightPills = [
  "Software development, databases, and admin panels",
  "Websites, booking systems, ordering QR, and e-commerce",
  "Marketing, social media, paid ads, and brand growth"
];

const capabilityRows = [
  { icon: PenTool, label: "Websites, brand direction, and UI design" },
  { icon: Database, label: "Software systems, databases, and admin panels" },
  { icon: Gauge, label: "Marketing, content, social media, and paid ads" },
  { icon: ShieldCheck, label: "Booking, ordering QR, e-commerce, and AI agents" }
];

const websiteModules = ["Clear positioning", "Trust blocks", "Conversion CTA"];

const ease = [0.22, 1, 0.36, 1] as const;

export default function HomePageContent() {
  const prefersReducedMotion = useReducedMotion() ?? false;

  return (
    <SiteShell>
      <div className="relative -mt-8 overflow-x-clip pt-8">
        <div className="pointer-events-none absolute inset-0 dot-grid opacity-60" />

        <div className="relative space-y-10 pb-6 sm:space-y-12">
          <section className="relative left-1/2 w-screen -translate-x-1/2 px-6 pt-8 lg:px-10 lg:pt-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(152,0,0,0.08),transparent_62%)]" />

            <div className="relative mx-auto flex max-w-[960px] flex-col items-center text-center">
              <Reveal prefersReducedMotion={prefersReducedMotion}>
                <div className="inline-flex items-center gap-3 rounded-full border border-[var(--line)] bg-white/88 px-4 py-2 text-sm text-black/60">
                  <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                  Software, systems, websites, and growth support for modern businesses.
                </div>
              </Reveal>

              <Reveal prefersReducedMotion={prefersReducedMotion} delay={0.08}>
                <h1 className="mt-5 max-w-[12.5ch] text-balance text-[clamp(3rem,9vw,6.4rem)] font-semibold leading-[0.88] tracking-[-0.09em] text-[var(--foreground)]">
                  Aureon builds{" "}
                  <span className="font-serif-display font-medium italic text-[var(--foreground-soft)]">
                    digital
                  </span>{" "}
                  systems for modern businesses.
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
                  <DisabledAction className="bg-[var(--accent)] text-white sm:px-7 sm:text-base">
                    Start a project
                    <ArrowUpRight className="h-4 w-4" />
                  </DisabledAction>
                  <DisabledAction className="border border-[var(--line)] bg-white/90 text-black/55 sm:px-7 sm:text-base">
                    See services
                  </DisabledAction>
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
                  <p className="mt-4 text-balance text-base leading-relaxed text-white/62">
                    From customer-facing websites to internal systems, we create digital
                    tools that help businesses manage operations, sell online, take
                    bookings, handle orders, and scale their brand more clearly.
                  </p>

                  <div className="mt-6 space-y-2.5">
                    {capabilityRows.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.label}
                          className="flex items-center gap-3 rounded-[18px] bg-white/[0.05] px-4 py-3 text-sm text-white/76"
                        >
                          <Icon className="h-4 w-4 text-white/58" />
                          {item.label}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <MockupStage prefersReducedMotion={prefersReducedMotion} />
              </div>
            </Reveal>
          </section>

          <section className="mx-auto max-w-[1040px] px-4 sm:px-0">
            <Reveal prefersReducedMotion={prefersReducedMotion}>
              <div className="grid gap-5 border-t border-[var(--line)] pt-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
                <div className="max-w-[24rem]">
                  <p className="text-xs uppercase tracking-[0.24em] text-black/38">Process</p>
                  <h2 className="mt-4 text-balance text-[clamp(2.25rem,4.6vw,4.2rem)] font-semibold leading-[0.94] tracking-[-0.07em]">
                    A focused process from strategy to launch.
                  </h2>
                </div>

                <p className="max-w-[31rem] text-balance text-sm leading-relaxed text-black/56 lg:justify-self-end">
                  We define the direction, design the experience, build the system, and
                  support the rollout so the website, product, and growth layer move as
                  one.
                </p>
              </div>
            </Reveal>

            <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={prefersReducedMotion ? undefined : { once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.06, ease }}
                  className="min-w-0 rounded-[22px] border border-[var(--line)] bg-white/95 px-4 py-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs uppercase tracking-[0.22em] text-black/38">
                      0{index + 1}
                    </p>
                    <MoveDot prefersReducedMotion={prefersReducedMotion} />
                  </div>
                  <h3 className="mt-4 text-[1.45rem] font-semibold leading-[0.98] tracking-[-0.05em]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/56">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
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
                      <DisabledAction className="bg-[var(--accent)] text-white sm:px-7 sm:text-base">
                        Go to contact
                        <ArrowUpRight className="h-4 w-4" />
                      </DisabledAction>
                      <DisabledAction className="border border-white/14 bg-white/[0.03] text-white/58 sm:px-7 sm:text-base">
                        See services
                      </DisabledAction>
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

function DisabledAction({
  children,
  className
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <span
      aria-disabled="true"
      className={`inline-flex flex-1 cursor-not-allowed items-center justify-center gap-2 whitespace-nowrap rounded-full px-3 py-3.5 text-[0.95rem] font-semibold opacity-80 sm:flex-none ${className}`}
    >
      {children}
    </span>
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

        <div className="p-4 md:p-5">
          <div className="rounded-[22px] bg-white px-4 py-4 text-[var(--foreground)] md:px-5 md:py-5">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-black/38">
                  <Globe className="h-3.5 w-3.5" />
                  Website preview
              </div>
              <div className="rounded-full bg-[var(--background-soft)] px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-black/42">
                Home
              </div>
            </div>

            <div className="mt-4 rounded-[20px] border border-[var(--line)] bg-[linear-gradient(180deg,#ffffff,#f7f7f7)] p-4">
              <div className="flex items-center justify-between gap-3 text-[11px] text-black/38">
                <span>Aureon</span>
                <div className="flex items-center gap-2">
                  <span>Services</span>
                  <span>About</span>
                  <span>Contact</span>
                </div>
              </div>

              <p className="mt-5 max-w-[9ch] text-[clamp(1.8rem,3.4vw,3.1rem)] font-semibold leading-[0.92] tracking-[-0.07em]">
                Websites and systems built to sell, manage, and scale.
              </p>
              <p className="mt-3 max-w-[24rem] text-sm leading-relaxed text-black/56">
                Clear messaging, better structure, and direct paths into bookings,
                orders, enquiries, and the internal systems behind them.
              </p>

              <div className="mt-4 flex gap-2">
                <div className="rounded-full bg-[var(--accent)] px-3 py-2 text-xs font-medium text-white">
                  Start a project
                </div>
                <div className="rounded-full border border-[var(--line)] px-3 py-2 text-xs text-black/66">
                  See services
                </div>
              </div>

              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                {websiteModules.map((item) => (
                  <div
                    key={item}
                    className="rounded-[16px] bg-[var(--background-soft)] px-3 py-3 text-xs text-black/58"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-[18px] bg-[var(--background-soft)] px-4 py-4">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-black/38">
                    Core offer
                  </p>
                  <div className="mt-4 space-y-3">
                    <div className="h-2 rounded-full bg-black/8">
                      <div className="h-2 w-[68%] rounded-full bg-[var(--foreground)]" />
                    </div>
                    <div className="h-2 rounded-full bg-black/8">
                      <div className="h-2 w-[54%] rounded-full bg-[var(--accent)]" />
                    </div>
                    <div className="h-2 rounded-full bg-black/8">
                      <div className="h-2 w-[76%] rounded-full bg-black/18" />
                    </div>
                  </div>
                </div>

                <div className="rounded-[18px] bg-[var(--foreground)] px-4 py-4 text-white">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/42">
                      Business result
                    </p>
                    <MessageSquare className="h-4 w-4 text-white/54" />
                  </div>
                  <p className="mt-4 text-lg font-semibold leading-snug tracking-[-0.04em]">
                    Better digital tools, clearer customer journeys, and stronger brand growth.
                  </p>
                  <div className="mt-4 rounded-full bg-white/[0.08] px-3 py-2 text-xs text-white/70">
                    Software, websites, operations, and marketing aligned in one direction.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, x: 18, y: 18 }}
        animate={
          prefersReducedMotion ? undefined : { opacity: 1, x: 0, y: [0, -6, 0] }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : {
                opacity: { duration: 0.45, delay: 0.25 },
                x: { duration: 0.45, delay: 0.25 },
                y: { duration: 4.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
              }
        }
        className="absolute -bottom-4 right-4 hidden rounded-[20px] bg-[var(--accent)] px-4 py-3 text-white md:block"
      >
        <div className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4" />
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/56">
              Conversion note
            </p>
            <p className="mt-1 text-sm font-medium">Clearer writing, fewer dead ends.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function MoveDot({
  prefersReducedMotion
}: {
  prefersReducedMotion: boolean;
}) {
  return (
    <motion.div
      animate={
        prefersReducedMotion ? undefined : { x: [0, 10, 0], opacity: [0.45, 1, 0.45] }
      }
      transition={
        prefersReducedMotion
          ? undefined
          : { duration: 3.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
      }
      className="h-2 w-8 rounded-full bg-[linear-gradient(90deg,var(--accent),rgba(152,0,0,0.16))]"
    />
  );
}
