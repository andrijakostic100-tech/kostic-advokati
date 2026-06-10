"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useT } from "@/i18n/Provider";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useT();
  const [open, setOpen] = useState(false);

  const nav = [
    { href: "/o-nama", label: t.nav.about },
    { href: "/oblasti", label: t.nav.areas },
    { href: "/tim", label: t.nav.team },
    { href: "/blog", label: t.nav.blog },
    { href: "/kontakt", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 bg-ivory/90 backdrop-blur-sm border-b border-rule/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-24 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center group" aria-label="Kostić Jović & partners">
          <Image
            src="/logo-header-green.png"
            alt="Kostić Jović & partners"
            width={1600}
            height={595}
            priority
            className="h-16 lg:h-20 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] uppercase tracking-display text-ink-soft hover:text-green transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          <Link
            href="/kontakt"
            className="hidden lg:inline-flex items-center gap-2 border border-green text-green px-5 py-2.5 text-[11px] uppercase tracking-display hover:bg-green hover:text-ivory transition-colors whitespace-nowrap"
          >
            {t.nav.book}
          </Link>

          <button
            aria-label="Menu"
            className="lg:hidden text-ink p-2"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="28" height="18" viewBox="0 0 28 18" fill="none">
              <path d="M0 1h28M0 9h28M0 17h28" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-rule/40 bg-ivory">
          <div className="px-6 py-6 flex flex-col gap-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-display text-ink-soft"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="mt-2 inline-flex w-fit border border-green text-green px-5 py-2.5 text-[11px] uppercase tracking-display"
              onClick={() => setOpen(false)}
            >
              {t.nav.book}
            </Link>
            <div className="pt-4 border-t border-rule/40 md:hidden">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
