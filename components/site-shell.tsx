"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navigation } from "./site-data";

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

  return (
    <div className="page-shell min-h-screen px-4 pb-10 pt-4 text-[var(--foreground)] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1180px]">
        <header className="sticky top-4 z-50">
          <div className="flex items-center justify-between gap-4 rounded-[28px] border border-[var(--line)] bg-white/94 px-5 py-3 shadow-[0_6px_18px_rgba(27,26,26,0.06)] backdrop-blur-xl md:px-4 md:py-4">
            <Link
              href="/"
              className="font-serif-display text-[1.7rem] leading-none tracking-[-0.06em] md:text-[1.8rem]"
            >
              Aureon
            </Link>

            <nav className="hidden flex-wrap gap-2 md:flex">
              {navigation.map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      active
                        ? "border border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                        : "bg-[var(--background-soft)] text-black/72 hover:bg-[var(--background-muted)] hover:text-black"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
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
            <div className="mt-4 grid gap-2 rounded-[24px] border border-[var(--line)] bg-white p-3 shadow-[0_6px_18px_rgba(27,26,26,0.06)] md:hidden">
              {navigation.map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-[18px] px-4 py-3 text-sm font-medium transition ${
                      active
                        ? "border border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                        : "bg-[var(--background-soft)] text-black/72 hover:bg-[var(--background-muted)] hover:text-black"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          ) : null}
        </header>

        <main className="pt-8">{children}</main>

        <footer className="mt-10 rounded-[28px] border border-[var(--line)] bg-[var(--background-soft)] px-5 py-5 shadow-[0_4px_14px_rgba(27,26,26,0.04)] sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-serif-display text-[1.5rem] leading-none tracking-[-0.05em]">
                Aureon
              </p>
              <p className="mt-2 text-sm text-black/54">
                Software, websites, systems, and growth support for modern businesses.
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-black/36">
                All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-black/62">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-black"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
