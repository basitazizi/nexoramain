"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const serviceStories = [
  {
    id: "ai-automation",
    tab: "AI Agents",
    eyebrow: "Calls, workflows, texting, booking",
    title: "AI agents that answer, follow up, and book for the business.",
    description:
      "AI agents are the biggest scope here: inbound call handling, appointment setting, texting, workflow routing, lead qualification, reminders, and operational automations that keep moving without manual delay.",
    panelGradient:
      "linear-gradient(135deg, rgba(115,30,30,0.2), rgba(255,255,255,0.03) 46%, rgba(255,255,255,0.02))"
  },
  {
    id: "software-dev",
    tab: "Software Development",
    eyebrow: "Websites, QR, admin, database",
    title: "Software systems built to sell, manage, and scale.",
    description:
      "We build the full software layer: websites, booking flows, ordering QR systems, admin panels, database-backed dashboards, e-commerce, and the internal tools behind real operations.",
    panelGradient:
      "linear-gradient(135deg, rgba(152,0,0,0.16), rgba(255,255,255,0.03) 46%, rgba(255,255,255,0.02))"
  },
  {
    id: "marketing",
    tab: "Marketing",
    eyebrow: "Social, content, paid, branding",
    title: "Marketing systems that make the brand easier to grow.",
    description:
      "We support launches with social media systems, content creation, paid ads, brand scaling strategy, and brand development so the site and software are backed by a real growth layer.",
    panelGradient:
      "linear-gradient(135deg, rgba(132,114,114,0.18), rgba(255,255,255,0.03) 46%, rgba(255,255,255,0.02))"
  }
] as const;

export function ServicesPageShowcase() {
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [activeId, setActiveId] = useState<(typeof serviceStories)[number]["id"]>(
    serviceStories[0].id
  );
  const activeService =
    serviceStories.find((story) => story.id === activeId) ?? serviceStories[0];

  return (
    <section
      id="services-showcase"
      className="relative overflow-hidden rounded-[40px] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,#101111,#171717)] px-4 py-5 text-white shadow-[0_22px_44px_rgba(27,26,26,0.18)] sm:px-5 sm:py-6"
    >
      <div className="pointer-events-none absolute inset-0 stage-noise opacity-70" />
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(152,0,0,0.26),transparent_68%)] blur-2xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_68%)] blur-2xl" />

      <div className="relative">
        <div className="px-2 pb-5 pt-2 sm:px-4">
          <p className="text-xs uppercase tracking-[0.24em] text-white/42">
            Service stories
          </p>
          <h2 className="mt-4 max-w-[12ch] text-balance text-[clamp(2.6rem,5vw,4.8rem)] font-semibold leading-[0.94] tracking-[-0.07em]">
            Pick the lane that fits the build.
          </h2>
          <p className="mt-4 max-w-[42rem] text-base leading-relaxed text-white/64 sm:text-lg">
            One connected component, one active service card, and a true horizontal
            tab row that stays side-by-side on phone and desktop.
          </p>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-2">
          <div className="grid grid-cols-3 gap-2 pb-1">
            {serviceStories.map((story) => {
              const active = story.id === activeId;

              return (
                <button
                  key={story.id}
                  type="button"
                  onClick={() => setActiveId(story.id)}
                  className={`relative min-w-0 overflow-hidden rounded-[18px] border px-2.5 py-3 text-left transition sm:rounded-[20px] sm:px-4 sm:py-4 ${
                    active
                      ? "border-white/14"
                      : "border-white/8 bg-black/10 hover:bg-white/[0.03]"
                  }`}
                >
                  {active ? (
                    <motion.span
                      layoutId="services-active-pill"
                      transition={{ duration: 0.35, ease }}
                      className="absolute inset-0 rounded-[20px] bg-white"
                    />
                  ) : null}

                  <span className="relative flex items-center justify-between gap-2 sm:gap-4">
                    <span className="min-w-0 flex-1">
                      <span
                        className={`hidden text-[11px] uppercase tracking-[0.24em] sm:block ${
                          active ? "text-black/42" : "text-white/34"
                        }`}
                      >
                        {story.eyebrow}
                      </span>
                      <span
                        className={`block text-[0.92rem] font-semibold leading-[1.05] tracking-[-0.04em] whitespace-normal sm:mt-2 sm:text-[1.45rem] sm:leading-none sm:tracking-[-0.05em] ${
                          active ? "text-black" : "text-white"
                        }`}
                      >
                        {story.tab}
                      </span>
                    </span>
                    <span
                      className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                        active ? "bg-[var(--accent)] shadow-[0_0_18px_rgba(152,0,0,0.55)]" : "bg-white/28"
                      }`}
                    />
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-2 overflow-hidden rounded-[24px] bg-[rgba(255,255,255,0.03)] sm:rounded-[28px] sm:border sm:border-white/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={prefersReducedMotion ? false : { opacity: 0, x: 24 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, x: -20 }}
                transition={{ duration: 0.45, ease }}
                className="block"
              >
                <div
                  className="px-4 py-4 sm:px-6 sm:py-6 lg:px-7 lg:py-7"
                  style={{ backgroundImage: activeService.panelGradient }}
                >
                  <div className="inline-flex rounded-full border border-white/14 bg-white/[0.08] px-3 py-1.5 text-xs uppercase tracking-[0.22em] text-white/72">
                    {activeService.eyebrow}
                  </div>

                  <h3 className="mt-4 max-w-[18ch] text-balance text-[clamp(1.8rem,4vw,4.1rem)] font-semibold leading-[0.94] tracking-[-0.07em]">
                    {activeService.title}
                  </h3>

                  <p className="mt-3 max-w-[56rem] text-sm leading-relaxed text-white/68 sm:text-base lg:text-lg">
                    {activeService.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
