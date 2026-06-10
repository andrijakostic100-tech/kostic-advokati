"use client";

import Link from "next/link";
import Image from "next/image";
import { useT } from "@/i18n/Provider";

export default function Footer() {
  const t = useT();
  return (
    <footer className="mt-24 bg-green text-ivory/85">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Image
            src="/logo-header-green.png"
            alt="Kostić Jović & partners"
            width={1600}
            height={595}
            className="h-24 lg:h-28 w-auto mb-6 -ml-4"
          />
          <p className="font-serif text-2xl leading-snug text-ivory/95 max-w-md italic">
            {t.footer.motto}
          </p>
          <p className="text-xs mt-3 tracking-display uppercase text-gold-light/80">
            {t.footer.mottoAttr}
          </p>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-display text-gold-light mb-4">
            {t.footer.contact}
          </div>
          <address className="not-italic text-sm leading-relaxed text-ivory/80">
            {t.contact.addressLines.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </address>
          <div className="mt-4 text-sm space-y-2 text-ivory/80">
            <div>
              <span className="text-gold-light/70 text-xs">Andrija Kostić</span>
              <br />
              <a href="tel:+381668420455" className="hover:text-gold-light">
                066 / 8420 455
              </a>
            </div>
            <div>
              <span className="text-gold-light/70 text-xs">Aleksandar Jović</span>
              <br />
              <a href="tel:+381649359118" className="hover:text-gold-light">
                064 / 9359 118
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-display text-gold-light mb-4">
            {t.footer.office}
          </div>
          <ul className="space-y-2 text-sm text-ivory/80">
            <li>
              <Link href="/o-nama" className="hover:text-gold-light">
                {t.nav.about}
              </Link>
            </li>
            <li>
              <Link href="/oblasti" className="hover:text-gold-light">
                {t.nav.areas}
              </Link>
            </li>
            <li>
              <Link href="/tim" className="hover:text-gold-light">
                {t.nav.team}
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gold-light">
                {t.nav.blog}
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:text-gold-light">
                {t.nav.contact}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] uppercase tracking-display text-ivory/55">
          <div>© {new Date().getFullYear()} Kostić Jović & partners</div>
          <div className="flex gap-6">
            <Link href="/politika-privatnosti" className="hover:text-gold-light">
              {t.footer.privacy}
            </Link>
            <Link href="/uslovi" className="hover:text-gold-light">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
