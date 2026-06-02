"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/o-nama", label: "O Kancelariji" },
  { href: "/oblasti", label: "Oblasti Prava" },
  { href: "/tim", label: "Tim" },
  { href: "/publikacije", label: "Publikacije" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-ivory/85 backdrop-blur-sm border-b border-rule/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Crest />
          <div className="leading-tight">
            <div className="font-serif text-lg text-ink tracking-wide">
              Kostić
            </div>
            <div className="text-[10px] uppercase tracking-eyebrow text-ink-soft/80">
              Advokatska Kancelarija
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] uppercase tracking-display text-ink-soft hover:text-gold transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 border border-ink/80 px-5 py-2.5 text-[11px] uppercase tracking-display text-ink hover:bg-ink hover:text-ivory transition-colors"
          >
            Zakažite Konsultaciju
          </Link>
        </div>

        <button
          aria-label="Meni"
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
              className="mt-2 inline-flex w-fit border border-ink/80 px-5 py-2.5 text-[11px] uppercase tracking-display text-ink"
              onClick={() => setOpen(false)}
            >
              Zakažite Konsultaciju
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Crest() {
  return (
    <svg
      width="40"
      height="44"
      viewBox="0 0 40 44"
      fill="none"
      className="text-ink"
      aria-hidden
    >
      <path
        d="M20 1 L38 7 V22 C38 32 30 39 20 43 C10 39 2 32 2 22 V7 L20 1Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M20 5 L34 10 V22 C34 30 28 36 20 39 C12 36 6 30 6 22 V10 L20 5Z"
        stroke="#A8842D"
        strokeWidth="0.6"
        fill="none"
        opacity="0.8"
      />
      <text
        x="20"
        y="26"
        textAnchor="middle"
        fontFamily="serif"
        fontSize="13"
        fill="currentColor"
        fontStyle="italic"
      >
        K
      </text>
    </svg>
  );
}
