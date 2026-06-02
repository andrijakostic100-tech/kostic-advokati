import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-24 bg-green text-ivory/85">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Image
            src="/logo-white.png"
            alt="Костић Јовић и партнери"
            width={320}
            height={160}
            className="h-20 w-auto mb-6"
          />
          <p className="font-serif text-2xl leading-snug text-ivory/95 max-w-md italic">
            &ldquo;Терет доказивања је на држави, а не на вама.&rdquo;
          </p>
          <p className="text-xs mt-3 tracking-display uppercase text-gold-light/80">
            — Из праксе канцеларије
          </p>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-display text-gold-light mb-4">
            Контакт
          </div>
          <address className="not-italic text-sm leading-relaxed text-ivory/80">
            Обреновићева 46<br />
            ТЦ Калча, ламела Д<br />
            први спрат, локал 109<br />
            18000 Ниш, Србија
          </address>
          <div className="mt-4 text-sm space-y-1 text-ivory/80">
            <div>
              <span className="text-gold-light/70 text-xs">Костић</span><br />
              <a href="tel:+381668420455" className="hover:text-gold-light">
                066 / 8420 455
              </a>
            </div>
            <div className="pt-2">
              <span className="text-gold-light/70 text-xs">Јовић</span><br />
              <a href="tel:+381649359118" className="hover:text-gold-light">
                064 / 9359 118
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-display text-gold-light mb-4">
            Канцеларија
          </div>
          <ul className="space-y-2 text-sm text-ivory/80">
            <li>
              <Link href="/o-nama" className="hover:text-gold-light">
                О нама
              </Link>
            </li>
            <li>
              <Link href="/oblasti" className="hover:text-gold-light">
                Области права
              </Link>
            </li>
            <li>
              <Link href="/tim" className="hover:text-gold-light">
                Тим
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:text-gold-light">
                Контакт
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] uppercase tracking-display text-ivory/55">
          <div>© {new Date().getFullYear()} Костић Јовић и партнери</div>
          <div className="flex gap-6">
            <Link href="/politika-privatnosti" className="hover:text-gold-light">
              Политика приватности
            </Link>
            <Link href="/uslovi" className="hover:text-gold-light">
              Услови
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
