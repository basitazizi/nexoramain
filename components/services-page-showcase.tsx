"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Bot,
  ChevronDown,
  LayoutDashboard,
  Megaphone,
  Monitor,
  type LucideIcon
} from "lucide-react";
import { useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type ServiceStory = {
  id: string;
  tab: string;
  eyebrow: string;
  title: string;
  description: string;
  whyItMatters: string;
  icon: LucideIcon;
  emphasis?: "accent";
};

const serviceStories: ServiceStory[] = [
  {
    id: "websites",
    tab: "Website Development",
    eyebrow: "Business sites, booking, QR ordering, e-commerce",
    title: "Custom websites, online ordering flows, and eCommerce builds designed to turn attention into action.",
    description:
      "We build business websites, booking flows, online stores, and restaurant ordering systems with in-store QR code ordering, kitchen-ready order flow, payment handling, and online pickup setup.",
    whyItMatters:
      "A stronger website builds trust faster, explains the offer clearly, and gives customers a direct path to enquire, book, buy, or place a QR order that goes straight into operations.",
    icon: Monitor
  },
  {
    id: "ai-agents",
    tab: "AI Agents",
    eyebrow: "Calls, follow-up, reminders",
    title: "AI agents that answer, follow up, and keep the workflow moving.",
    description:
      "From missed-call coverage to automated follow-up, reminders, and qualification, we build AI workflows around the way your business already runs.",
    whyItMatters:
      "AI agents reduce missed opportunities by responding faster, following up automatically, and taking repetitive workload off the team.",
    icon: Bot,
    emphasis: "accent"
  },
  {
    id: "dashboards",
    tab: "Admin Dashboards",
    eyebrow: "Database, reporting, internal tools",
    title: "Dashboards and internal systems that give operations one clean control layer.",
    description:
      "We build connected dashboards for clients, orders, staff workflows, reporting, and internal tools so the business can run from one place.",
    whyItMatters:
      "A connected dashboard gives your team better visibility, cleaner operations, and less friction across day-to-day management.",
    icon: LayoutDashboard
  },
  {
    id: "marketing",
    tab: "Paid Advertising",
    eyebrow: "Ads, content creation, brand scaling",
    title: "Paid advertising, content creation, and brand scaling strategy built to grow revenue.",
    description:
      "We manage Meta, Facebook, TikTok, and Instagram campaigns alongside short-form content creation and brand scaling strategy to support stronger growth.",
    whyItMatters:
      "Paid advertising and content systems help your brand reach new customers, improve creative performance, and scale with more consistency.",
    icon: Megaphone
  }
];

export function ServicesPageShowcase() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [activeId, setActiveId] = useState<ServiceStory["id"] | null>(null);

  return (
    <section
      id="services-showcase"
      className="relative overflow-hidden rounded-[36px] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,#151414,#221f20)] px-4 py-5 text-white shadow-[0_22px_44px_rgba(27,26,26,0.18)] sm:px-5 sm:py-6 lg:px-7 lg:py-7"
    >
      <div className="pointer-events-none absolute inset-0 stage-noise opacity-65" />

      <div className="relative">
        <div className="mx-auto max-w-[68rem] px-1 pb-6 pt-2 text-center sm:px-2">
          <p className="text-xs uppercase tracking-[0.24em] text-white/42">
            What we do
          </p>
          <h2 className="mt-4 text-balance text-[clamp(2.3rem,5vw,4.9rem)] font-semibold leading-[0.94] text-white">
            What we <span className="font-serif-display font-medium italic text-white/82">actually</span> do.
          </h2>
        </div>

        <div className="grid gap-4 md:hidden">
          {serviceStories.map((story, index) => {
            const active = story.id === activeId;
            const Icon = story.icon;

            return (
              <div key={story.id} className="grid gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveId((current) => (current === story.id ? null : story.id))
                  }
                  className="flex w-full items-center justify-between gap-4 rounded-full bg-white px-5 py-4 text-left text-[var(--foreground)] shadow-[0_16px_30px_rgba(0,0,0,0.16)]"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[1.55rem] font-semibold leading-none">
                        {story.tab}
                      </span>
                      <span className="mt-1 block text-sm leading-snug text-black/58">
                        {story.eyebrow}
                      </span>
                    </span>
                  </span>
                  <ChevronDown
                    className={`h-8 w-8 shrink-0 text-[var(--accent)] transition-transform duration-300 ${
                      active ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {active ? (
                    <motion.div
                      key={`${story.id}-panel`}
                      initial={prefersReducedMotion ? false : { opacity: 0, y: -10, height: 0 }}
                      animate={
                        prefersReducedMotion
                          ? { opacity: 1, height: "auto" }
                          : { opacity: 1, y: 0, height: "auto" }
                      }
                      exit={
                        prefersReducedMotion
                          ? { opacity: 0, height: 0 }
                          : { opacity: 0, y: -8, height: 0 }
                      }
                      transition={{ duration: 0.34, ease }}
                      className="overflow-hidden rounded-[28px] bg-white text-[var(--foreground)] shadow-[0_18px_34px_rgba(0,0,0,0.16)]"
                    >
                      <div className="grid gap-5 px-5 py-6 text-center">
                        <div className="flex justify-center">
                          <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-[linear-gradient(135deg,var(--accent-soft),rgba(255,255,255,0.9))] text-[var(--accent)]">
                            <Icon className="h-7 w-7" />
                          </div>
                        </div>

                        <div>
                          <p className="text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
                            0{index + 1}
                          </p>
                          <h3 className="mt-3 text-[1.7rem] font-semibold leading-[1.02]">
                            {story.title}
                          </h3>
                        </div>

                        <p className="text-base leading-relaxed text-black/66">
                          {story.description}
                        </p>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="hidden gap-4 md:grid lg:grid-cols-2 xl:grid-cols-4">
          {serviceStories.map((story, index) => {
            const Icon = story.icon;
            const isAccent = story.emphasis === "accent";

            return (
              <article
                key={story.id}
                className={`flex h-full flex-col rounded-[30px] border px-5 py-5 shadow-[0_18px_34px_rgba(0,0,0,0.14)] lg:px-6 lg:py-6 ${
                  isAccent
                    ? "border-white/10 bg-white text-[var(--foreground)]"
                    : "border-white/10 bg-white/[0.05] text-white"
                }`}
              >
                <div className="flex h-full flex-col justify-between">
                  <div className="text-center">
                    <div className="flex justify-center">
                      <span
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] ${
                          isAccent
                            ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                            : "bg-white/[0.08] text-white"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </span>
                    </div>
                    <p
                      className={`mt-4 text-xs uppercase tracking-[0.22em] ${
                        isAccent ? "text-black/42" : "text-white/38"
                      }`}
                    >
                      0{index + 1}
                    </p>
                    <h3 className="mt-2 text-[1.65rem] font-semibold leading-none">
                      {story.tab}
                    </h3>
                    <p
                      className={`mt-4 text-sm uppercase tracking-[0.2em] ${
                        isAccent ? "text-[var(--accent)]" : "text-white/44"
                      }`}
                    >
                      {story.eyebrow}
                    </p>

                    <h4 className="mt-4 text-[1.8rem] font-semibold leading-[1.02]">
                      {story.title}
                    </h4>

                    <p
                      className={`mt-4 text-base leading-relaxed ${
                        isAccent ? "text-black/64" : "text-white/66"
                      }`}
                    >
                      {story.description}
                    </p>
                  </div>
                  <div
                    className={`mx-auto mt-6 h-1.5 w-24 rounded-full ${
                      isAccent ? "bg-[var(--accent)]/70" : "bg-white/18"
                    }`}
                  />
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {serviceStories.map((story, index) => {
            const isAccent = story.emphasis === "accent";

            return (
              <div
                key={`${story.id}-why`}
                className={`rounded-[26px] px-5 py-5 text-center shadow-[0_16px_30px_rgba(0,0,0,0.14)] ${
                  isAccent
                    ? "bg-[linear-gradient(135deg,var(--accent-soft-alt),rgba(255,255,255,0.94))] text-[var(--foreground)]"
                    : "border border-white/10 bg-white/[0.05] text-white"
                }`}
              >
                <p
                  className={`text-[11px] uppercase tracking-[0.24em] ${
                    isAccent ? "text-[var(--accent)]" : "text-white/44"
                  }`}
                >
                  Why it matters
                </p>
                <h3 className="mt-3 text-[1.35rem] font-semibold leading-[1.05]">
                  {story.tab}
                </h3>
                <p
                  className={`mx-auto mt-3 max-w-[34rem] text-sm leading-relaxed ${
                    isAccent ? "text-black/68" : "text-white/72"
                  }`}
                >
                  {story.whyItMatters}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
