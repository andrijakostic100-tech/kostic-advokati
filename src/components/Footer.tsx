import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-ivory/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <svg width="34" height="38" viewBox="0 0 40 44" fill="none">
              <path
                d="M20 1 L38 7 V22 C38 32 30 39 20 43 C10 39 2 32 2 22 V7 L20 1Z"
                stroke="#C9A55C"
                strokeWidth="1"
                fill="none"
              />
              <text
                x="20"
                y="26"
                textAnchor="middle"
                fontFamily="serif"
                fontSize="13"
                fill="#C9A55C"
                fontStyle="italic"
              >
                K
              </text>
            </svg>
            <div className="leading-tight">
              <div className="font-serif text-xl text-ivory">Kostić</div>
              <div className="text-[10px] uppercase tracking-eyebrow text-gold-light/80">
                Advokatska Kancelarija
              </div>
            </div>
          </div>
          <p className="font-serif text-2xl leading-snug text-ivory/95 max-w-md">
            &ldquo;Pravo je umetnost dobrog i pravičnog.&rdquo;
          </p>
          <p className="text-xs mt-2 tracking-display uppercase text-gold-light/70">
            — Celsus
          </p>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-display text-gold-light mb-4">
            Kontakt
          </div>
          <address className="not-italic text-sm leading-relaxed text-ivory/75">
            Knez Mihailova 24<br />
            11000 Beograd<br />
            Srbija
          </address>
          <div className="mt-4 text-sm space-y-1 text-ivory/75">
            <div>+381 (0)11 328 4900</div>
            <a
              href="mailto:office@kostic-advokati.rs"
              className="hover:text-gold-light transition-colors block"
            >
              office@kostic-advokati.rs
            </a>
          </div>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-display text-gold-light mb-4">
            Kancelarija
          </div>
          <ul className="space-y-2 text-sm text-ivory/75">
            <li>
              <Link href="/o-nama" className="hover:text-gold-light">
                O nama
              </Link>
            </li>
            <li>
              <Link href="/oblasti" className="hover:text-gold-light">
                Oblasti prava
              </Link>
            </li>
            <li>
              <Link href="/tim" className="hover:text-gold-light">
                Tim
              </Link>
            </li>
            <li>
              <Link href="/publikacije" className="hover:text-gold-light">
                Publikacije
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:text-gold-light">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] uppercase tracking-display text-ivory/50">
          <div>© {new Date().getFullYear()} Advokatska kancelarija Kostić</div>
          <div className="flex gap-6">
            <Link href="/politika-privatnosti" className="hover:text-gold-light">
              Politika privatnosti
            </Link>
            <Link href="/uslovi" className="hover:text-gold-light">
              Uslovi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
