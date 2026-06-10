import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-24 bg-green text-ivory/85">
      <div
        id="kontakt-podaci"
        className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 lg:grid-cols-4 scroll-mt-28"
      >
        <div className="lg:col-span-2">
          <Image
            src="/logo-header-green.png"
            alt="Kostić Jović & partners"
            width={1600}
            height={595}
            className="h-24 lg:h-28 w-auto mb-6 -ml-4"
          />
          <p className="font-serif text-2xl leading-snug text-ivory/95 max-w-md italic">
            „Teret dokazivanja je na državi, a ne na vama.”
          </p>
          <p className="text-xs mt-3 tracking-display uppercase text-gold-light/80">
            — Iz prakse kancelarije
          </p>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-display text-gold-light mb-4">
            Kontakt
          </div>
          <address className="not-italic text-sm leading-relaxed text-ivory/80">
            Obrenovićeva 46<br />
            TC Kalča, lamela D<br />
            prvi sprat, lokal 109<br />
            18000 Niš, Srbija
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
          <div className="mt-4 text-xs leading-relaxed text-ivory/70">
            Ponedeljak–Petak, 09–17h<br />
            vikendom po dogovoru.
          </div>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-display text-gold-light mb-4">
            Kancelarija
          </div>
          <ul className="space-y-2 text-sm text-ivory/80">
            <li>
              <Link href="/o-nama" className="hover:text-gold-light">
                O kancelariji
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
              <Link href="/blog" className="hover:text-gold-light">
                Blog
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
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] uppercase tracking-display text-ivory/55">
          <div>© {new Date().getFullYear()} Kostić Jović i partneri</div>
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
