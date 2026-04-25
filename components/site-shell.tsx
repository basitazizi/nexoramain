"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { isEnabledRoute, navigation } from "./site-data";

const ease = [0.22, 1, 0.36, 1] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion() ?? false;
  const [menuOpen, setMenuOpen] = useState(false);
  const hasExtraNavigation = navigation.length > 1;

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  function renderNavItem(
    item: (typeof navigation)[number],
    className: string,
    activeClassName: string,
    inactiveClassName: string
  ) {
    const active = isActive(pathname, item.href);
    const enabled = isEnabledRoute(item.href);
    const resolvedClassName = `${className} ${
      active ? activeClassName : inactiveClassName
    } ${enabled ? "" : "cursor-not-allowed opacity-55"}`;

    if (!enabled) {
      return (
        <span
          key={item.href}
          aria-disabled="true"
          className={resolvedClassName}
        >
          {item.label}
        </span>
      );
    }

    return (
      <Link key={item.href} href={item.href} className={resolvedClassName}>
        {item.label}
      </Link>
    );
  }

  function renderMobileMenuItem(item: (typeof navigation)[number], index: number) {
    const active = isActive(pathname, item.href);
    const enabled = isEnabledRoute(item.href);
    const itemClassName = `group relative block py-1.5 pl-5 text-[2rem] font-semibold leading-[0.92] tracking-[-0.07em] transition ${
      active ? "text-[var(--foreground)]" : "text-black/42 hover:text-black/72"
    } ${enabled ? "" : "cursor-not-allowed opacity-35"}`;

    const content = (
      <motion.span
        initial={prefersReducedMotion ? false : { opacity: 0, x: 18, filter: "blur(8px)" }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{
          duration: 0.34,
          delay: prefersReducedMotion ? 0 : 0.04 * index,
          ease
        }}
        className="relative block"
      >
        {active ? (
          <motion.span
            layoutId="mobile-menu-active-line"
            transition={{ duration: 0.28, ease }}
            className="absolute -left-5 top-1/2 h-11 w-1 -translate-y-1/2 rounded-full bg-[var(--accent)]"
          />
        ) : null}
        {item.label}
      </motion.span>
    );

    if (!enabled) {
      return (
        <span key={item.href} aria-disabled="true" className={itemClassName}>
          {content}
        </span>
      );
    }

    return (
      <Link key={item.href} href={item.href} className={itemClassName}>
        {content}
      </Link>
    );
  }

  const brandMark = (
    <Image
      src="/aureon-logo-mark.png"
      alt=""
      aria-hidden="true"
      width={40}
      height={40}
      className="h-8 w-8 object-contain sm:h-9 sm:w-9"
      priority
    />
  );

  return (
    <div className="page-shell min-h-screen px-4 pb-10 pt-4 text-[var(--foreground)] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1180px]">
        <header className="sticky top-4 z-50">
          <div className="flex items-center justify-between gap-4 rounded-[28px] border border-[var(--line)] bg-white/94 px-5 py-3 backdrop-blur-xl md:px-4 md:py-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-[var(--foreground)]"
            >
              {brandMark}
              <span className="font-serif-display text-[1.7rem] leading-none tracking-[-0.06em] md:text-[1.8rem]">
                Aureon
              </span>
            </Link>

            <nav className="ml-auto hidden items-center gap-2 md:flex">
              {navigation.map((item) =>
                renderNavItem(
                  item,
                  "rounded-full px-5 py-2.5 text-sm font-medium transition",
                  "border border-[var(--accent)] bg-white text-[var(--foreground)]",
                  "bg-white text-black/46 hover:text-black"
                )
              )}
            </nav>

            {hasExtraNavigation ? (
              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  aria-label="Toggle menu"
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen((current) => !current)}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px] border border-[var(--line)] bg-white/88 text-[var(--foreground)] shadow-[0_10px_20px_rgba(27,26,26,0.08)] md:hidden"
                >
                  <span className="relative h-5 w-6">
                    <span
                      className={`absolute left-0 top-0.5 block h-[2.5px] w-6 rounded-full bg-current transition duration-300 ${
                        menuOpen ? "translate-y-[8px] rotate-45" : ""
                      }`}
                    />
                    <span
                      className={`absolute left-0 top-2.5 block h-[2.5px] w-6 rounded-full bg-current transition duration-300 ${
                        menuOpen ? "opacity-0" : "opacity-100"
                      }`}
                    />
                    <span
                      className={`absolute left-0 top-[18px] block h-[2.5px] w-6 rounded-full bg-current transition duration-300 ${
                        menuOpen ? "-translate-y-[9px] -rotate-45" : ""
                      }`}
                    />
                  </span>
                </button>
              </div>
            ) : null}
          </div>

          <AnimatePresence>
            {hasExtraNavigation && menuOpen ? (
              <>
                <motion.button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  initial={prefersReducedMotion ? false : { opacity: 0 }}
                  animate={prefersReducedMotion ? undefined : { opacity: 1 }}
                  exit={prefersReducedMotion ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.2, ease }}
                  className="fixed inset-0 z-40 bg-[rgba(20,18,18,0.12)] backdrop-blur-md md:hidden"
                />

                <motion.div
                  initial={
                    prefersReducedMotion
                      ? false
                      : { opacity: 0, y: -10, x: 10, scale: 0.97 }
                  }
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : { opacity: 1, y: 0, x: 0, scale: 1 }
                  }
                  exit={
                    prefersReducedMotion
                      ? undefined
                      : { opacity: 0, y: -10, x: 10, scale: 0.97 }
                  }
                  transition={{ duration: 0.26, ease }}
                  className="fixed right-4 top-20 z-50 h-[70svh] min-h-[30rem] max-h-[calc(100svh-6rem)] w-[20.5rem] max-w-[calc(100vw-1rem)] md:hidden"
                >
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[34px] border border-black/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(244,241,239,0.94))] px-4 pb-6 pt-4 shadow-[0_22px_40px_rgba(27,26,26,0.14)] backdrop-blur-[16px]">
                    <div className="pointer-events-none absolute inset-x-5 top-3 h-24 rounded-[24px] bg-[linear-gradient(180deg,rgba(255,255,255,0.64),transparent)] blur-lg" />
                    <div className="pointer-events-none absolute bottom-4 left-4 top-4 w-px bg-[linear-gradient(180deg,rgba(152,0,0,0.24),rgba(48,46,47,0.12))]" />

                    <div className="relative flex h-full flex-col pl-5 pr-2">
                      <div className="flex items-center justify-between">
                        <div className="rounded-full border border-black/8 bg-white/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.24em] text-black/38">
                          Menu
                        </div>
                        <button
                          type="button"
                          aria-label="Close menu"
                          onClick={() => setMenuOpen(false)}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-black/62 transition hover:bg-black/[0.04]"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>

                      <div className="mt-8 flex flex-1 flex-col justify-start gap-2 overflow-y-auto pr-2">
                        {navigation.map((item, index) => renderMobileMenuItem(item, index))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            ) : null}
          </AnimatePresence>
        </header>

        <main className="pt-8">{children}</main>

        <footer className="mt-10 border-t border-[var(--line)] px-4 py-5">
          <div className="mx-auto flex max-w-[620px] flex-col items-center text-center">
            <div className="flex items-center gap-2">
              <Image
                src="/aureon-logo-mark.png"
                alt=""
                aria-hidden="true"
                width={28}
                height={28}
                className="h-5 w-5 object-contain"
              />
              <p className="font-serif-display text-[1.35rem] leading-none tracking-[-0.05em]">
                Aureon
              </p>
            </div>

            <p className="mt-1 text-[0.78rem] text-black/46">
              Software, websites, systems, and growth support.
            </p>

            <div className="mt-3 w-full border-t border-dashed border-[var(--line)] pt-2">
              <p className="text-[0.68rem] uppercase tracking-[0.22em] text-black/34">
                All rights reserved.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-black/44">
              {navigation.map((item) =>
                renderNavItem(
                  item,
                  "transition-colors",
                  "text-black/56",
                  "text-black/44 hover:text-black/72"
                )
              )}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
