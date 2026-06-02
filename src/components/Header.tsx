"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const nav = [
  { href: "/o-nama", label: "О канцеларији" },
  { href: "/oblasti", label: "Области права" },
  { href: "/tim", label: "Тим" },
  { href: "/kontakt", label: "Контакт" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-ivory/90 backdrop-blur-sm border-b border-rule/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center group" aria-label="Костић Јовић и партнери — почетна">
          <Image
            src="/logo-bw.png"
            alt="Костић Јовић и партнери"
            width={260}
            height={130}
            priority
            className="h-14 lg:h-16 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] uppercase tracking-display text-ink-soft hover:text-green transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 border border-green text-green px-5 py-2.5 text-[11px] uppercase tracking-display hover:bg-green hover:text-ivory transition-colors"
          >
            Заказите консултацију
          </Link>
        </div>

        <button
          aria-label="Мени"
          className="lg:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="28" height="18" viewBox="0 0 28 18" fill="none">
            <path d="M0 1h28M0 9h28M0 17h28" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </button>
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
              Заказите консултацију
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
