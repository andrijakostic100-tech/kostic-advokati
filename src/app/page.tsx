import Link from "next/link";
import Eyebrow from "@/components/Eyebrow";
import SectionDivider from "@/components/SectionDivider";

const oblasti = [
  {
    naziv: "Privredno pravo",
    opis:
      "Osnivanje i restrukturiranje društava, korporativno upravljanje, ugovori između privrednih subjekata i savetovanje akcionara.",
    rim: "I",
  },
  {
    naziv: "M&A i transakcije",
    opis:
      "Statusne promene, due diligence, pregovori i strukturiranje akvizicija, prodaja kapitala i imovine.",
    rim: "II",
  },
  {
    naziv: "Arbitraža i sporovi",
    opis:
      "Zastupanje u privrednim sporovima, domaća i međunarodna trgovinska arbitraža, izvršenje stranih odluka.",
    rim: "III",
  },
  {
    naziv: "Nepokretnosti",
    opis:
      "Promet, razvoj i finansiranje nepokretnosti, gradnja, zakup i upravljanje portfeljom imovine.",
    rim: "IV",
  },
  {
    naziv: "Nasleđe i porodica",
    opis:
      "Planiranje nasledstva, ostavinski postupci, bračni ugovori i zaštita imovine kroz generacije.",
    rim: "V",
  },
  {
    naziv: "Poreski savetnik",
    opis:
      "Poreska optimizacija, transferne cene, postupci pred poreskom upravom i strukturiranje međunarodnih ulaganja.",
    rim: "VI",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative parchment-grain">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-24 lg:pt-36 pb-28 lg:pb-40">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 fade-up">
              <Eyebrow>Osnovano 1998. · Beograd</Eyebrow>
              <h1 className="font-serif text-[3.25rem] lg:text-[5.5rem] leading-[0.95] mt-8 text-ink">
                Tradicija.
                <br />
                <span className="italic text-ink-soft">Diskrecija.</span>
                <br />
                Rezultat.
              </h1>
              <p className="mt-10 max-w-xl text-lg lg:text-xl leading-relaxed text-ink-soft font-light">
                Advokatska kancelarija <strong className="font-medium">Kostić</strong> pruža
                pravno savetovanje zahtevnim klijentima u oblastima privrednog prava,
                arbitraže i upravljanja imovinom — sa pažnjom koju zaslužuju samo
                najvažnije odluke.
              </p>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-3 bg-ink text-ivory px-8 py-4 text-[11px] uppercase tracking-display hover:bg-burgundy transition-colors"
                >
                  Zakažite konsultaciju
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path d="M0 5h12m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </Link>
                <Link
                  href="/oblasti"
                  className="inline-flex items-center gap-3 border border-ink/70 text-ink px-8 py-4 text-[11px] uppercase tracking-display hover:bg-ink hover:text-ivory transition-colors"
                >
                  Oblasti prava
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 lg:pl-10 fade-up">
              <div className="relative aspect-[3/4] bg-ivory-soft border border-rule crest-shadow flex items-center justify-center overflow-hidden">
                <div className="absolute inset-4 border border-gold/40" />
                <div className="text-center px-10">
                  <div className="gold-divider mb-6">Anno MCMXCVIII</div>
                  <svg width="120" height="140" viewBox="0 0 40 44" className="mx-auto text-ink mb-6">
                    <path
                      d="M20 1 L38 7 V22 C38 32 30 39 20 43 C10 39 2 32 2 22 V7 L20 1Z"
                      stroke="currentColor"
                      strokeWidth="0.6"
                      fill="none"
                    />
                    <path
                      d="M20 5 L34 10 V22 C34 30 28 36 20 39 C12 36 6 30 6 22 V10 L20 5Z"
                      stroke="#A8842D"
                      strokeWidth="0.5"
                      fill="none"
                    />
                    <text
                      x="20"
                      y="27"
                      textAnchor="middle"
                      fontFamily="serif"
                      fontSize="14"
                      fill="currentColor"
                      fontStyle="italic"
                    >
                      K
                    </text>
                  </svg>
                  <div className="font-serif text-2xl text-ink leading-tight">
                    Advokatska
                    <br />
                    Kancelarija
                    <br />
                    <span className="italic">Kostić</span>
                  </div>
                  <div className="gold-divider mt-6 text-[9px]">Beograd</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CITATION / MOTTO */}
      <section className="border-y border-rule/40 bg-ivory-soft/50">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 py-20 text-center">
          <svg width="40" height="40" viewBox="0 0 40 40" className="text-gold mx-auto mb-8">
            <path
              d="M12 8c-5 0-9 4-9 9 0 5 4 9 9 9 0-3-2-5-2-9s2-6 4-7c0-1-1-2-2-2zm18 0c-5 0-9 4-9 9 0 5 4 9 9 9 0-3-2-5-2-9s2-6 4-7c0-1-1-2-2-2z"
              fill="currentColor"
              opacity="0.85"
            />
          </svg>
          <p className="font-serif text-3xl lg:text-4xl leading-snug text-ink italic">
            Pravna pomoć nije samo poznavanje propisa —<br />
            to je razumevanje konteksta, ljudi i posledica.
          </p>
          <div className="mt-8 text-[11px] uppercase tracking-display text-ink-soft">
            — Iz statuta kancelarije
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="text-center">
          <SectionDivider label="Oblasti Prava" />
          <h2 className="font-serif text-4xl lg:text-6xl text-ink">
            Šest stubova prakse
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-ink-soft leading-relaxed">
            Naše ekspertize povezuje princip ličnog zastupanja — svaki klijent ima
            advokata koji vodi njegov predmet od početka do kraja.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule/50 border border-rule/50">
          {oblasti.map((o) => (
            <article
              key={o.naziv}
              className="bg-ivory p-10 lg:p-12 hover:bg-parchment transition-colors group"
            >
              <div className="flex items-baseline gap-4 mb-5">
                <span className="font-serif text-3xl text-gold italic">{o.rim}</span>
                <span className="h-px flex-1 bg-rule" />
              </div>
              <h3 className="font-serif text-2xl text-ink mb-4 group-hover:text-burgundy transition-colors">
                {o.naziv}
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft font-light">
                {o.opis}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/oblasti"
            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-display text-ink border-b border-gold pb-1 hover:text-gold transition-colors"
          >
            Pogledajte sve oblasti
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M0 5h12m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </Link>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-ink text-ivory">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-eyebrow text-gold-light">
              <span className="h-px w-10 bg-gold-light" />
              Naša Filozofija
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl mt-6 leading-tight">
              Mali broj klijenata.
              <br />
              <span className="italic">Beskrajna pažnja.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-ivory/80 leading-relaxed">
            <p>
              Verujemo da se kvalitet pravnog savetovanja ne meri brojem
              predmeta, već dubinom razumevanja svakog pojedinačnog slučaja.
              Zato namerno ograničavamo broj klijenata sa kojima radimo
              istovremeno.
            </p>
            <p>
              Naš pristup je dosledan: pažljivo slušamo, temeljno analiziramo,
              jasno preporučujemo. Svaki dokument koji izađe iz naše kancelarije
              prošao je nekoliko stepena revizije — jer ime kuće stoji iza svake reči.
            </p>
            <div className="pt-6 grid grid-cols-3 gap-8 border-t border-ivory/15">
              <div>
                <div className="font-serif text-4xl text-gold-light">27</div>
                <div className="text-[10px] uppercase tracking-display text-ivory/60 mt-2">
                  Godina prakse
                </div>
              </div>
              <div>
                <div className="font-serif text-4xl text-gold-light">12</div>
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
        <h2 className="font-serif text-4xl lg:text-6xl text-ink">
          Prvi razgovor je bez naknade
        </h2>
        <p className="mt-6 text-ink-soft max-w-xl mx-auto leading-relaxed">
          Svaka saradnja počinje pažljivim razgovorom. Zakažite susret u
          kancelariji ili putem video poziva — odgovaramo u roku od jednog
          radnog dana.
        </p>
        <div className="mt-10">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-3 bg-ink text-ivory px-10 py-5 text-[11px] uppercase tracking-display hover:bg-burgundy transition-colors"
          >
            Zakažite konsultaciju
          </Link>
        </div>
      </section>
    </>
  );
}
