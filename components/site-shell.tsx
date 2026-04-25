"use client";

import {
  X
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { isEnabledRoute, navigation } from "./site-data";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
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

  function getMobileMenuCaption(href: string) {
    switch (href) {
      case "/":
        return "Main page";
      case "/services":
        return "What we build";
      case "/about-us":
        return "Studio story";
      case "/contact":
        return "Reach out";
      default:
        return "Section";
    }
  }

  function renderMobileMenuItem(item: (typeof navigation)[number], index: number) {
    const active = isActive(pathname, item.href);
    const enabled = isEnabledRoute(item.href);
    const caption = getMobileMenuCaption(item.href);
    const className = `group flex items-center gap-4 rounded-[22px] border px-4 py-4 transition ${
      active
        ? "border-[rgba(152,0,0,0.22)] bg-white/[0.82] text-[var(--foreground)]"
        : "border-black/8 bg-white/[0.5] text-[var(--foreground)] hover:bg-white/[0.68]"
    } ${enabled ? "" : "cursor-not-allowed opacity-55"}`;

    const content = (
      <>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <p className="text-base font-semibold tracking-[-0.03em]">{item.label}</p>
            <span className="text-[10px] uppercase tracking-[0.22em] text-black/28">
              0{index + 1}
            </span>
          </div>
          <p className="mt-1 text-sm text-black/42">{caption}</p>
        </div>
      </>
    );

    if (!enabled) {
      return (
        <span key={item.href} aria-disabled="true" className={className}>
          {content}
        </span>
      );
    }

    return (
      <Link key={item.href} href={item.href} className={className}>
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
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-transparent text-[var(--foreground)] md:hidden"
                >
                  <span className="flex flex-col gap-[5px]">
                    <span className="block h-[2px] w-6 rounded-full bg-current" />
                    <span className="block h-[2px] w-6 rounded-full bg-current" />
                    <span className="block h-[2px] w-6 rounded-full bg-current" />
                  </span>
                </button>
              </div>
            ) : null}
          </div>

          {hasExtraNavigation && menuOpen ? (
            <div className="fixed inset-0 z-50 md:hidden">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="absolute inset-0 bg-[rgba(20,18,18,0.08)]"
              />

              <div className="absolute inset-y-3 right-3 flex justify-end">
                <div className="relative h-full w-[58vw] min-w-[248px] max-w-[292px] overflow-hidden rounded-l-[42px] rounded-r-[28px] border border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(250,247,244,0.9))] shadow-[0_18px_40px_rgba(27,26,26,0.12)] backdrop-blur-[14px]">
                  <div className="absolute inset-x-5 top-3 h-20 rounded-[26px] bg-[linear-gradient(180deg,rgba(255,255,255,0.55),transparent)] blur-lg" />
                  <div className="absolute left-0 top-0 h-full w-full rounded-l-[42px] border-l border-white/55" />

                  <div className="relative flex h-full flex-col px-3.5 py-4">
                    <div className="flex items-center justify-between">
                      <div className="rounded-full border border-black/8 bg-white/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-black/38">
                        Menu
                      </div>
                      <button
                        type="button"
                        aria-label="Close menu"
                        onClick={() => setMenuOpen(false)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/8 bg-white/78 text-black/64"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="mt-6 grid gap-3">
                      {navigation.map((item, index) => renderMobileMenuItem(item, index))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </header>

        <main className="pt-8">{children}</main>

        <footer className="mt-10 rounded-[28px] border border-[var(--line)] bg-white px-6 py-5 sm:px-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[560px]">
              <div className="flex items-center gap-2.5">
                <Image
                  src="/aureon-logo-mark.png"
                  alt=""
                  aria-hidden="true"
                  width={32}
                  height={32}
                  className="h-6 w-6 object-contain"
                />
                <p className="font-serif-display text-[1.45rem] leading-none tracking-[-0.05em]">
                  Aureon
                </p>
              </div>
              <p className="mt-2 text-sm text-black/54">
                Software, websites, systems, and growth support for modern businesses.
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-black/36">
                All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-black/52">
              {navigation.map((item) =>
                renderNavItem(
                  item,
                  "transition-colors",
                  "text-black/52",
                  "text-black/52 hover:text-black"
                )
              )}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
