import Link from "next/link";
import Image from "next/image";
import Eyebrow from "@/components/Eyebrow";
import SectionDivider from "@/components/SectionDivider";

const oblasti = [
  {
    rim: "I",
    naziv: "Prekršajno pravo",
    slug: "prekrsajno-pravo",
    opis:
      "Zastupanje okrivljenih u prekršajnim postupcima — saobraćajni, carinski i komunalni prekršaji, zaštitne mere i kazneni poeni.",
  },
  {
    rim: "II",
    naziv: "Odštetno pravo",
    slug: "odstetno-pravo",
    opis:
      "Naknada materijalne i nematerijalne štete — saobraćajne nezgode, povrede na radu, padovi, ujedi pasa i druge vrste štete.",
  },
  {
    rim: "III",
    naziv: "Krivično pravo",
    slug: "krivicno-pravo",
    opis:
      "Odbrana okrivljenih i zastupanje oštećenih u svim fazama krivičnog postupka — od istrage do pravnosnažne presude.",
  },
  {
    rim: "IV",
    naziv: "Nepokretnosti",
    slug: "nepokretnosti",
    opis:
      "Ugovori o kupoprodaji i zakupu, posredovanje u prometu, upis u katastar, zabeležbe i rešavanje imovinsko-pravnih odnosa.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative parchment-grain">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 lg:pt-28 pb-24 lg:pb-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 fade-up">
              <Eyebrow>Advokatska kancelarija · Niš</Eyebrow>
              <h1 className="font-serif text-[3rem] lg:text-[5.25rem] leading-[0.95] mt-8 text-green">
                Sve je
                <br />
                <span className="italic">na</span>
                <br />
                dokazima.
              </h1>
              <p className="mt-6 font-serif text-lg lg:text-xl italic text-ink-soft/80 max-w-lg">
                Od uviđaja do presude — činjenice odlučuju.
              </p>
              <p className="mt-8 max-w-xl text-lg lg:text-xl leading-relaxed text-ink-soft font-light">
                Advokatska kancelarija <strong className="font-medium text-green">Kostić Jović i partneri</strong> zastupa klijente u prekršajnim, odštetnim i krivičnim postupcima — na teritoriji cele Srbije.
              </p>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-3 bg-green text-ivory px-8 py-4 text-[11px] uppercase tracking-display hover:bg-green-deep transition-colors"
                >
                  Zakažite konsultaciju
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M0 5h12m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </Link>
                <Link
                  href="/oblasti"
                  className="inline-flex items-center gap-3 border border-green text-green px-8 py-4 text-[11px] uppercase tracking-display hover:bg-green hover:text-ivory transition-colors"
                >
                  Oblasti prava
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 lg:pl-10 fade-up">
              <div className="relative aspect-[3/4] bg-green crest-shadow overflow-hidden">
                <div className="absolute inset-4 border border-gold/40" />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <Image
                    src="/logo-color.png"
                    alt="Kostić Jović i partneri"
                    width={500}
                    height={600}
                    priority
                    className="w-full max-w-[320px] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CITATION / MOTTO */}
      <section className="border-y border-rule/40 bg-ivory-soft/50">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 py-20 text-center">
          <svg width="40" height="40" viewBox="0 0 40 40" className="text-gold-deep mx-auto mb-8">
            <path
              d="M12 8c-5 0-9 4-9 9 0 5 4 9 9 9 0-3-2-5-2-9s2-6 4-7c0-1-1-2-2-2zm18 0c-5 0-9 4-9 9 0 5 4 9 9 9 0-3-2-5-2-9s2-6 4-7c0-1-1-2-2-2z"
              fill="currentColor"
              opacity="0.85"
            />
          </svg>
          <p className="font-serif text-3xl lg:text-4xl leading-snug text-green italic">
            Kada vam preti kazna, zabrana vožnje ili kazneni poeni —<br />
            nema mesta improvizaciji.
          </p>
          <div className="mt-8 text-[11px] uppercase tracking-display text-ink-soft">
            — Iz prakse kancelarije
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="text-center">
          <SectionDivider label="Oblasti prava" />
          <h2 className="font-serif text-4xl lg:text-6xl text-green">
            Čime se bavimo
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-ink-soft leading-relaxed">
            Fokusiramo se na četiri oblasti u kojima imamo najviše iskustva — zastupamo klijente pred svim prekršajnim sudovima, parničnim sudovima i krivičnim organima u Srbiji.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-px bg-rule/50 border border-rule/50">
          {oblasti.map((o) => (
            <Link
              key={o.naziv}
              href={`/oblasti#${o.slug}`}
              className="bg-ivory p-10 lg:p-12 hover:bg-parchment transition-colors group block"
            >
              <div className="flex items-baseline gap-4 mb-5">
                <span className="font-serif text-3xl text-gold-deep italic">{o.rim}</span>
                <span className="h-px flex-1 bg-rule" />
              </div>
              <h3 className="font-serif text-3xl text-green mb-4 group-hover:text-gold-deep transition-colors">
                {o.naziv}
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft font-light">
                {o.opis}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-display text-green border-b border-gold/60 pb-1">
                Saznajte više
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M0 4h10m-3-3 3 3-3 3" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-green text-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-eyebrow text-gold-light">
              <span className="h-px w-10 bg-gold-light" />
              Zašto baš mi
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl mt-6 leading-tight">
              Praksa koju vodi
              <br />
              <span className="italic text-gold-light">princip, ne kalkulacija.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-ivory/85 leading-relaxed">
            <p>
              Polazimo od jednostavnog pravila: <strong className="text-ivory">teret dokazivanja je na državi, a ne na vama</strong>. Svaki navod iz zahteva pažljivo proveravamo, tražimo materijalne dokaze tamo gde ih nema i dosledno štitimo vaše pravo na odbranu.
            </p>
            <p>
              Zastupamo klijente pred svim prekršajnim sudovima i Prekršajnim apelacionim sudom, bez obzira na to gde se postupak vodi. Zahvaljujući razvijenoj mreži advokata saradnika, pokrivamo celu Srbiju.
            </p>
            <div className="pt-6 grid grid-cols-3 gap-8 border-t border-ivory/15">
              <div>
                <div className="font-serif text-4xl text-gold-light">Niš</div>
                <div className="text-[10px] uppercase tracking-display text-ivory/60 mt-2">
                  Sedište kancelarije
                </div>
              </div>
              <div>
                <div className="font-serif text-4xl text-gold-light">4</div>
                <div className="text-[10px] uppercase tracking-display text-ivory/60 mt-2">
                  Advokata i saradnika
                </div>
              </div>
              <div>
                <div className="font-serif text-4xl text-gold-light">4</div>
                <div className="text-[10px] uppercase tracking-display text-ivory/60 mt-2">
                  Jezika u radu
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 lg:px-10 py-24 lg:py-32 text-center">
        <SectionDivider label="Pozovite nas" />
        <h2 className="font-serif text-4xl lg:text-6xl text-green">
          Razgovarajmo o vašem slučaju.
        </h2>
        <p className="mt-6 text-ink-soft max-w-xl mx-auto leading-relaxed">
          Svaka saradnja počinje pažljivim razgovorom. Zakažite susret u kancelariji u Nišu ili putem telefona — odgovaramo u roku od jednog radnog dana.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-3 bg-green text-ivory px-10 py-5 text-[11px] uppercase tracking-display hover:bg-green-deep transition-colors"
          >
            Zakažite konsultaciju
          </Link>
          <a
            href="tel:+381668420455"
            className="inline-flex items-center gap-3 border border-green text-green px-10 py-5 text-[11px] uppercase tracking-display hover:bg-green hover:text-ivory transition-colors"
          >
            066 / 8420 455
          </a>
        </div>
      </section>
    </>
  );
}
