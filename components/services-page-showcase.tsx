"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  BarChart3,
  Bot,
  Database,
  LayoutDashboard,
  MessageSquareText,
  PhoneCall,
  ScanLine,
  Workflow
} from "lucide-react";
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
      "linear-gradient(135deg, rgba(115,30,30,0.2), rgba(255,255,255,0.03) 46%, rgba(255,255,255,0.02))",
    visual: "automation" as const
  },
  {
    id: "software-dev",
    tab: "Software Development",
    eyebrow: "Websites, QR, admin, database",
    title: "Software systems built to sell, manage, and scale.",
    description:
      "We build the full software layer: websites, booking flows, ordering QR systems, admin panels, database-backed dashboards, e-commerce, and the internal tools behind real operations.",
    panelGradient:
      "linear-gradient(135deg, rgba(152,0,0,0.16), rgba(255,255,255,0.03) 46%, rgba(255,255,255,0.02))",
    visual: "software" as const
  },
  {
    id: "marketing",
    tab: "Marketing",
    eyebrow: "Social, content, paid, branding",
    title: "Marketing systems that make the brand easier to grow.",
    description:
      "We support launches with social media systems, content creation, paid ads, brand scaling strategy, and brand development so the site and software are backed by a real growth layer.",
    panelGradient:
      "linear-gradient(135deg, rgba(132,114,114,0.18), rgba(255,255,255,0.03) 46%, rgba(255,255,255,0.02))",
    visual: "marketing" as const
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

          <div className="mt-2 overflow-hidden rounded-[28px] border border-white/10 bg-[rgba(255,255,255,0.03)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={prefersReducedMotion ? false : { opacity: 0, x: 24 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, x: -20 }}
                transition={{ duration: 0.45, ease }}
                className="grid min-h-[31rem] lg:min-h-[34rem] lg:grid-cols-[0.72fr_1.28fr]"
              >
                <div
                  className="order-1 px-4 py-4 sm:px-5 sm:py-5 lg:order-1 lg:border-r lg:px-7 lg:py-7"
                  style={{ backgroundImage: activeService.panelGradient }}
                >
                  <div className="inline-flex rounded-full border border-white/14 bg-white/[0.08] px-3 py-1.5 text-xs uppercase tracking-[0.22em] text-white/72">
                    {activeService.eyebrow}
                  </div>

                  <h3 className="mt-4 max-w-[12ch] text-balance text-[clamp(1.8rem,4vw,4.1rem)] font-semibold leading-[0.94] tracking-[-0.07em]">
                    {activeService.title}
                  </h3>

                  <p className="mt-3 max-w-[32rem] text-sm leading-relaxed text-white/68 sm:text-base lg:text-lg">
                    {activeService.description}
                  </p>
                </div>

                <div className="order-2 border-t border-white/10 px-3 py-3 sm:px-4 sm:py-4 lg:order-2 lg:border-t-0 lg:px-5 lg:py-5">
                  <ServiceVisual
                    visual={activeService.visual}
                    prefersReducedMotion={prefersReducedMotion}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceVisual({
  visual,
  prefersReducedMotion
}: {
  visual: "software" | "automation" | "marketing";
  prefersReducedMotion: boolean;
}) {
  if (visual === "software") {
    return <SoftwareVisual prefersReducedMotion={prefersReducedMotion} />;
  }

  if (visual === "automation") {
    return <AutomationVisual prefersReducedMotion={prefersReducedMotion} />;
  }

  return <MarketingVisual prefersReducedMotion={prefersReducedMotion} />;
}

function SoftwareVisual({
  prefersReducedMotion
}: {
  prefersReducedMotion: boolean;
}) {
  return (
    <div className="relative min-h-[22rem] overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,#1a1a1b,#111112)] p-3 sm:min-h-[28rem] sm:rounded-[28px] sm:p-5">
      <Glow accent="rgba(152,0,0,0.22)" className="-right-12 top-8" prefersReducedMotion={prefersReducedMotion} />
      <Glow accent="rgba(255,255,255,0.08)" className="-left-10 bottom-6" prefersReducedMotion={prefersReducedMotion} />

      <FloatCard
        className="absolute right-4 top-4 z-10 rounded-[18px] border border-white/10 bg-white/[0.08] px-4 py-3 backdrop-blur-sm"
        prefersReducedMotion={prefersReducedMotion}
        movement={{ y: [-4, 6, -4] }}
      >
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">Software stack</p>
        <p className="mt-1 text-sm font-semibold text-white">Website + admin + QR</p>
      </FloatCard>

      <div className="overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.05] sm:rounded-[24px]">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-xs uppercase tracking-[0.22em] text-white/34">
              Software development preview
            </span>
          </div>

      <div className="space-y-3 p-3 sm:space-y-4 sm:p-4">
            <div className="rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,#faf7f4,#efe9e4)] p-3 text-black sm:rounded-[22px] sm:p-4">
              <div className="flex items-center justify-between gap-3 text-[11px] text-black/42">
                <span className="font-semibold tracking-[-0.03em]">Aureon</span>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span>Services</span>
                  <span>About</span>
                  <span>Contact</span>
                </div>
              </div>

              <div className="mt-4 grid gap-4 lg:grid-cols-[0.64fr_0.36fr] lg:items-end">
                <div>
                  <div className="inline-flex rounded-full border border-black/8 bg-white px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-black/48">
                    Website
                  </div>
                  <p className="mt-4 max-w-[10ch] text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
                    Aureon Launch
                  </p>
                  <p className="mt-3 max-w-[28rem] text-sm leading-relaxed text-black/58 sm:text-base">
                    A sharper homepage with clear positioning, strong service framing,
                    and a direct path into contact, bookings, and the systems behind it.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <div className="rounded-full bg-[var(--accent)] px-4 py-2 text-xs font-semibold text-white">
                      Start project
                    </div>
                    <div className="rounded-full border border-black/8 bg-white px-4 py-2 text-xs text-black/62">
                      See services
                    </div>
                  </div>
                </div>

                <div className="rounded-[20px] border border-black/8 bg-[linear-gradient(180deg,#1d1b1c,#2b2728)] p-4 text-white shadow-[0_14px_28px_rgba(0,0,0,0.18)]">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/36">
                    Hero focus
                  </p>
                  <div className="mt-4 space-y-3">
                    <div className="h-2.5 w-20 rounded-full bg-white/70" />
                    <div className="h-2.5 w-full rounded-full bg-white/18" />
                    <div className="h-2.5 w-[74%] rounded-full bg-[var(--accent)]" />
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    {["High-converting", "Launch ready"].map((item) => (
                      <div
                        key={item}
                        className="rounded-[14px] border border-white/10 bg-white/[0.05] px-3 py-3 text-center text-[11px] text-white/72"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-3 lg:grid-cols-[0.58fr_0.42fr] lg:gap-4">
              <div className="rounded-[18px] border border-white/10 bg-white/[0.05] p-3 sm:rounded-[22px] sm:p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[rgba(152,0,0,0.18)] text-[var(--accent)]">
                      <LayoutDashboard className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-white/36">
                        Admin panel
                      </p>
                      <p className="mt-1 text-base font-semibold text-white">
                        Simple control layer
                      </p>
                    </div>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/44">
                    Live ops
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    ["Orders", "126"],
                    ["Pending", "08"],
                    ["Users", "24"]
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-[14px] border border-white/8 bg-black/18 px-3 py-3"
                    >
                      <p className="text-[10px] uppercase tracking-[0.16em] text-white/32">
                        {label}
                      </p>
                      <p className="mt-2 text-lg font-semibold tracking-[-0.05em] text-white">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid gap-2">
                  {[
                    ["Dashboard", "overview"],
                    ["Bookings", "today"],
                    ["Orders", "selected"]
                  ].map(([item, meta]) => {
                    const selected = item === "Orders";

                    return (
                      <div
                        key={item}
                        className={`flex items-center justify-between rounded-[14px] border px-3 py-3 text-sm ${
                          selected
                            ? "border-[rgba(152,0,0,0.24)] bg-[rgba(152,0,0,0.12)] text-white"
                            : "border-white/8 bg-black/18 text-white/72"
                        }`}
                      >
                        <span>{item}</span>
                        <span
                          className={`text-[10px] uppercase tracking-[0.16em] ${
                            selected ? "text-white/60" : "text-white/32"
                          }`}
                        >
                          {meta}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-3">
                <div className="rounded-[18px] border border-white/10 bg-black/18 p-3 sm:rounded-[22px] sm:p-4">
                  <div className="flex items-center gap-2">
                    <Database className="h-4 w-4 text-[var(--accent)]" />
                    <p className="text-xs uppercase tracking-[0.18em] text-white/38">
                      Database activity
                    </p>
                  </div>
                  <div className="mt-3 flex h-24 items-end gap-2 sm:h-28">
                    {[30, 46, 62, 58, 72, 84].map((height, index) => (
                      <motion.div
                        key={height}
                        initial={prefersReducedMotion ? false : { scaleY: 0.6, opacity: 0.45 }}
                        animate={prefersReducedMotion ? undefined : { scaleY: 1, opacity: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.03, ease }}
                        className="flex-1 rounded-t-[16px] bg-[linear-gradient(180deg,rgba(152,0,0,0.95),rgba(152,0,0,0.16))]"
                        style={{ height: `${height}%`, transformOrigin: "bottom" }}
                      />
                    ))}
                  </div>
                </div>

                <motion.div
                  animate={prefersReducedMotion ? undefined : { y: [0, -6, 0], rotate: [0, -1, 0] }}
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : { duration: 5.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
                  }
                  className="rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,#faf5ef,#f2e8df)] p-3 text-black sm:rounded-[24px] sm:p-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.18em] text-black/42">Ordering QR</p>
                    <ScanLine className="h-4 w-4 text-[var(--accent)]" />
                  </div>
                  <div className="mt-3 mx-auto grid w-[5.8rem] grid-cols-7 gap-1 sm:w-[7rem]">
                    {Array.from({ length: 49 }).map((_, index) => {
                      const filled = [
                        0, 1, 2, 4, 6, 7, 9, 13, 14, 16, 18, 21, 24, 27, 29, 31, 35, 36,
                        37, 39, 41, 45, 47, 48
                      ].includes(index);

                      return (
                        <div
                          key={index}
                          className={`aspect-square rounded-[2px] ${
                            filled ? "bg-black" : "bg-black/10"
                          }`}
                        />
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

function AutomationVisual({
  prefersReducedMotion
}: {
  prefersReducedMotion: boolean;
}) {
  return (
    <div className="relative min-h-[21rem] overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,#161718,#101112)] p-3 sm:min-h-[27rem] sm:rounded-[28px] sm:p-5">
      <Glow accent="rgba(152,0,0,0.24)" className="-right-10 top-6" prefersReducedMotion={prefersReducedMotion} />
      <Glow accent="rgba(255,255,255,0.08)" className="-left-12 bottom-4" prefersReducedMotion={prefersReducedMotion} />

      <FloatCard
        className="absolute right-3 top-3 z-10 rounded-[16px] border border-white/12 bg-[rgba(20,18,18,0.82)] px-3 py-2.5 shadow-[0_10px_24px_rgba(0,0,0,0.28)] backdrop-blur-md sm:right-4 sm:top-4 sm:rounded-[18px] sm:px-4 sm:py-3"
        prefersReducedMotion={prefersReducedMotion}
        movement={{ y: [0, -7, 0] }}
      >
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">Automation live</p>
        <p className="mt-1 text-sm font-semibold text-white">12 leads responded</p>
      </FloatCard>

      <div className="grid gap-3 lg:grid-cols-[0.72fr_0.28fr] lg:gap-4">
        <div className="overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.05] sm:rounded-[24px]">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <Bot className="h-4 w-4 text-[var(--accent)]" />
            <span className="text-xs uppercase tracking-[0.22em] text-white/34">
              AI automation canvas
            </span>
          </div>

          <div className="space-y-3 p-3 sm:space-y-4 sm:p-4">
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                ["Calls", "38"],
                ["Booked", "11"],
                ["Texts", "96"]
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[16px] border border-white/10 bg-black/18 px-3 py-3 sm:rounded-[18px] sm:px-4 sm:py-4"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-white/34">{label}</p>
                  <p className="mt-2 text-[1.7rem] font-semibold tracking-[-0.05em] text-white sm:mt-3 sm:text-2xl">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-3 sm:rounded-[22px] sm:p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/36">
                    Agent flow
                  </p>
                  <p className="mt-2 text-base font-semibold tracking-[-0.04em] text-white sm:text-lg">
                    Calls in, qualifies, then books.
                  </p>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[rgba(152,0,0,0.16)] text-[var(--accent)]">
                  <Bot className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-4 grid gap-2 sm:grid-cols-3 sm:gap-3">
                {[
                  { icon: PhoneCall, label: "AI answers" },
                  { icon: MessageSquareText, label: "Text follows up" },
                  { icon: Workflow, label: "Books pipeline" }
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[14px] border border-white/8 bg-black/18 px-3 py-3 sm:rounded-[16px] sm:py-4"
                  >
                    <div className="flex items-center gap-2 text-sm text-white/78 sm:flex-col sm:items-center sm:text-center">
                      <item.icon className="h-4 w-4 text-[var(--accent)]" />
                      <span>{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [0, -7, 0], rotate: [0, 1, 0] }}
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 5.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
          }
          className="rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,#faf5ef,#f0e8df)] p-3 text-black sm:rounded-[24px] sm:p-4"
        >
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.2em] text-black/42">AI call panel</p>
            <PhoneCall className="h-4 w-4 text-[var(--accent)]" />
          </div>
          <p className="mt-3 text-[1.55rem] font-semibold leading-none tracking-[-0.05em] sm:mt-4 sm:text-[1.9rem]">
            Lead qualified
          </p>
          <p className="mt-3 text-sm leading-relaxed text-black/60">
            Caller wants a website and booking flow. Appointment proposed for Tuesday.
          </p>
          <div className="mt-3 rounded-[14px] border border-black/8 bg-white/70 px-3 py-3 text-sm text-black/72">
            Next action: confirm slot and send reminder.
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function MarketingVisual({
  prefersReducedMotion
}: {
  prefersReducedMotion: boolean;
}) {
  return (
    <div className="relative min-h-[22rem] overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,#171717,#111111)] p-3 sm:min-h-[28rem] sm:rounded-[28px] sm:p-5">
      <Glow accent="rgba(152,0,0,0.18)" className="-left-12 bottom-4" prefersReducedMotion={prefersReducedMotion} />
      <Glow accent="rgba(255,255,255,0.08)" className="-right-8 top-6" prefersReducedMotion={prefersReducedMotion} />

      <FloatCard
        className="absolute right-4 top-4 z-10 rounded-[18px] border border-white/10 bg-white/[0.08] px-4 py-3 backdrop-blur-sm"
        prefersReducedMotion={prefersReducedMotion}
        movement={{ y: [0, -7, 0] }}
      >
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">Growth pulse</p>
        <p className="mt-1 text-sm font-semibold text-white">ROAS +3.4x</p>
      </FloatCard>

      <div className="relative space-y-4">
        <div className="overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.05] sm:rounded-[26px]">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-white/[0.06]">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/36">Marketing OS</p>
                <p className="text-lg font-semibold text-white">Campaign dashboard</p>
              </div>
            </div>
            <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/56">
              April snapshot
            </div>
          </div>

          <div className="space-y-3 p-3 sm:space-y-4 sm:p-4">
            <div className="grid gap-2 sm:grid-cols-3 sm:gap-3">
              {[
                ["Spend", "$12.4k"],
                ["Leads", "482"],
                ["Conversion", "8.2%"]
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-[16px] border border-white/8 bg-black/18 px-3 py-3 sm:rounded-[18px] sm:px-4 sm:py-4"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-white/34">{label}</p>
                  <p className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-white">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-3 sm:rounded-[24px] sm:p-4">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/34">
                    Revenue trend
                  </p>
                  <p className="mt-2 text-sm text-white/56">
                    Paid, organic, and landing page lift tracked together.
                  </p>
                </div>
                <p className="text-sm font-semibold text-white">+28%</p>
              </div>

              <div className="relative mt-4 flex h-32 items-end gap-2 sm:mt-6 sm:h-44 sm:gap-3">
                {[22, 36, 31, 54, 58, 72, 81, 88].map((height, index) => (
                  <div key={height} className="relative flex flex-1 items-end justify-center">
                    <motion.div
                      initial={prefersReducedMotion ? false : { scaleY: 0.5, opacity: 0.4 }}
                      animate={prefersReducedMotion ? undefined : { scaleY: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.03, ease }}
                      className="w-full rounded-t-[16px] bg-white/14"
                      style={{ height: `${height}%`, transformOrigin: "bottom" }}
                    />
                  </div>
                ))}
                <svg
                  viewBox="0 0 320 150"
                  className="pointer-events-none absolute inset-x-4 bottom-4 h-44"
                  fill="none"
                >
                  <path
                    d="M8 122C46 112 62 97 96 91C134 84 147 58 182 49C218 40 239 43 274 22C287 15 300 12 312 10"
                    stroke="rgba(152,0,0,0.95)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 122C46 112 62 97 96 91C134 84 147 58 182 49C218 40 239 43 274 22C287 15 300 12 312 10"
                    stroke="rgba(255,255,255,0.22)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    opacity="0.25"
                  />
                </svg>
              </div>
            </div>
            </div>
          </div>
        </div>
    </div>
  );
}

function Glow({
  accent,
  className,
  prefersReducedMotion
}: {
  accent: string;
  className: string;
  prefersReducedMotion: boolean;
}) {
  return (
    <motion.div
      animate={
        prefersReducedMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }
      }
      transition={
        prefersReducedMotion
          ? undefined
          : { duration: 6.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
      }
      className={`pointer-events-none absolute h-48 w-48 rounded-full blur-3xl ${className}`}
      style={{ background: accent }}
    />
  );
}

function FloatCard({
  children,
  className,
  prefersReducedMotion,
  movement
}: {
  children: React.ReactNode;
  className: string;
  prefersReducedMotion: boolean;
  movement: { y?: number[]; rotate?: number[] };
}) {
  return (
    <motion.div
      animate={prefersReducedMotion ? undefined : movement}
      transition={
        prefersReducedMotion
          ? undefined
          : { duration: 5.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
