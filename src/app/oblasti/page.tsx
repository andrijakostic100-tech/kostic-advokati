import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";

export const metadata = {
  title: "Oblasti prava",
  description:
    "Privredno pravo, M&A, arbitraža, nepokretnosti, nasleđe i poresko savetovanje — oblasti u kojima nudimo dugogodišnju ekspertizu.",
};

const oblasti = [
  {
    rim: "I",
    naziv: "Privredno pravo",
    intro:
      "Pravna podrška društvima kapitala i njihovim akcionarima u svakodnevnom poslovanju.",
    stavke: [
      "Osnivanje i statusne promene privrednih društava",
      "Korporativno upravljanje i sednice organa",
      "Akcionarski sporazumi i ulagački aranžmani",
      "Komercijalni ugovori i opšti uslovi poslovanja",
      "Usklađenost i interne politike (compliance)",
    ],
  },
  {
    rim: "II",
    naziv: "M&A i transakcije",
    intro:
      "Pratimo klijente kroz složene transakcije — od ideje do potpisa i nakon zatvaranja.",
    stavke: [
      "Pravna analiza (due diligence) ciljnih društava",
      "Strukturiranje akvizicija i prodaja",
      "Pregovaranje SPA, SHA i pratećih ugovora",
      "Regulatorne saglasnosti i konkurencija",
      "Postupci nakon zatvaranja transakcije",
    ],
  },
  {
    rim: "III",
    naziv: "Arbitraža i sporovi",
    intro:
      "Zastupanje u privrednim sporovima i međunarodnoj arbitraži pred vodećim institucijama.",
    stavke: [
      "Privredni sporovi pred sudovima u Srbiji",
      "Domaća arbitraža (Stalni arbitražni sud PKS)",
      "Međunarodna arbitraža (ICC, VIAC, LCIA)",
      "Priznanje i izvršenje stranih odluka",
      "Investicione arbitraže i ICSID postupci",
    ],
  },
  {
    rim: "IV",
    naziv: "Nepokretnosti",
    intro:
      "Pravna pomoć u promet, razvoju i finansiranju nepokretnosti — od stana do logističkih kompleksa.",
    stavke: [
      "Promet poslovnih i stambenih nepokretnosti",
      "Pravna analiza vlasništva i tereta",
      "Razvoj projekata, dozvole i ugovori sa izvođačima",
      "Zakup i upravljanje imovinom",
      "Finansiranje i hipotekarno obezbeđenje",
    ],
  },
  {
    rim: "V",
    naziv: "Nasleđe i porodica",
    intro:
      "Diskretna podrška u pitanjima koja prevazilaze granicu pravnog savetovanja.",
    stavke: [
      "Planiranje nasleđa i sastavljanje testamenta",
      "Vođenje ostavinskih postupaka",
      "Bračni ugovori i imovinski odnosi",
      "Porodična uprava i sukcesija u kompanijama",
      "Fondacije i trastovi (uz inostrane saradnike)",
    ],
  },
  {
    rim: "VI",
    naziv: "Poresko savetovanje",
    intro:
      "Strateški pristup porezima — od svakodnevne usaglašenosti do složenih međunarodnih struktura.",
    stavke: [
      "Poreska optimizacija poslovanja",
      "Transferne cene i međukompanijski odnosi",
      "Postupci pred poreskom upravom",
      "Ugovori o izbegavanju dvostrukog oporezivanja",
      "Strukturiranje međunarodnih ulaganja",
    ],
  },
];

export default function Oblasti() {
  return (
    <>
      <PageHero
        eyebrow="Oblasti prava"
        title="Šest stubova naše prakse."
        intro="Specijalizovani smo za pravne oblasti u kojima i sami biramo klijente — kako bismo svakom predmetu mogli da pristupimo sa odgovarajućom pažnjom i ekspertizom."
      />

      <section className="mx-auto max-w-6xl px-6 lg:px-10 py-24 lg:py-32 space-y-24">
        {oblasti.map((o, i) => (
          <article key={o.naziv} className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="font-serif italic text-7xl text-gold opacity-80">
                {o.rim}
              </div>
              <Eyebrow>Oblast {i + 1}</Eyebrow>
              <h2 className="font-serif text-4xl lg:text-5xl mt-6 leading-tight text-ink">
                {o.naziv}
              </h2>
            </div>
            <div className="lg:col-span-8 lg:pl-10 lg:border-l border-rule">
              <p className="text-lg text-ink-soft font-light leading-relaxed mb-8">
                {o.intro}
              </p>
              <ul className="space-y-4">
                {o.stavke.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-4 text-ink-soft border-b border-rule/40 pb-4"
                  >
                    <span className="text-gold mt-1.5">◆</span>
                    <span className="leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
