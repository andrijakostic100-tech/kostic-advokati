import PageHero from "@/components/PageHero";
import SectionDivider from "@/components/SectionDivider";
import Eyebrow from "@/components/Eyebrow";

export const metadata = {
  title: "O kancelariji",
  description:
    "Tradicija pravne struke, savremena praksa. Saznajte više o istoriji, vrednostima i pristupu Advokatske kancelarije Kostić.",
};

const principi = [
  {
    naslov: "Diskrecija",
    tekst:
      "Poverljivost odnosa sa klijentom je temelj naše prakse. Tretiramo svaku informaciju sa pažnjom dostojnom porodičnog savetnika.",
  },
  {
    naslov: "Pažnja",
    tekst:
      "Svaki predmet vodi advokat koji ga je preuzeo. Klijent uvek zna ko za njega radi i zašto se neki pravac smatra ispravnim.",
  },
  {
    naslov: "Postojanost",
    tekst:
      "Pravna pitanja se ne završavaju jednom konsultacijom. Pratimo klijente godinama — često decenijama — kroz sve faze njihovih poslova i života.",
  },
  {
    naslov: "Mera",
    tekst:
      "Najbolji savet nije uvek najduži. Pišemo jasno, pregovaramo mirno, sporimo se odmereno. Snaga je u preciznosti.",
  },
];

const milestones = [
  { godina: "1998", dogadjaj: "Osnivanje kancelarije u Beogradu." },
  { godina: "2004", dogadjaj: "Otvoreno odeljenje za privredno pravo i M&A." },
  { godina: "2011", dogadjaj: "Saradnja sa međunarodnim arbitražnim institucijama." },
  { godina: "2017", dogadjaj: "Osnovan tim za savetovanje porodičnih kompanija." },
  { godina: "2024", dogadjaj: "Otvoren ogranak za savetovanje u oblasti nepokretnosti." },
];

export default function ONama() {
  return (
    <>
      <PageHero
        eyebrow="O kancelariji"
        title="Pravna tradicija, savremeni pristup."
        intro="Kancelarija je osnovana 1998. godine sa idejom da spoji klasičnu pravnu školu i pragmatičnu poslovnu pamet. Već gotovo tri decenije zastupamo pojedince, porodice i privredne subjekte u predmetima koji zahtevaju strpljenje, znanje i diskreciju."
      />

      {/* History */}
      <section className="mx-auto max-w-6xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <Eyebrow>Naša priča</Eyebrow>
          <h2 className="font-serif text-4xl lg:text-5xl mt-6 leading-tight text-ink">
            Kuća izgrađena <span className="italic">strpljivo</span>.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-ink-soft leading-relaxed">
          <p>
            Kancelarija je započela rad u jednoj prostoriji u centru Beograda,
            sa dva advokata i jednim pisaćim stolom. U godinama koje su usledile
            izgradili smo praksu koja se temelji na ličnom kontaktu sa klijentom
            i preciznom pravnom radu — bez agresivne tržišne ekspanzije.
          </p>
          <p>
            Danas zapošljavamo dvanaest advokata i saradnika koji pokrivaju
            ključne oblasti privrednog prava, arbitraže i upravljanja imovinom.
            Pratimo nekoliko porodičnih kompanija od osnivanja, što nam je
            omogućilo da razumemo poslovni svet iz prve ruke — ne samo iz
            spisa predmeta.
          </p>
          <p>
            Princip ostaje isti: malo klijenata, mnogo pažnje, dosledan
            kvalitet. Verujemo da je to formula koja proizvodi rezultate koji
            traju.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-parchment border-y border-rule/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <div className="text-center">
            <SectionDivider label="Vrednosti" />
            <h2 className="font-serif text-4xl lg:text-5xl text-ink">
              Četiri principa kuće
            </h2>
          </div>
          <div className="mt-16 grid md:grid-cols-2 gap-px bg-rule/40 border border-rule/40">
            {principi.map((p, i) => (
              <div key={p.naslov} className="bg-ivory p-10 lg:p-14">
                <div className="flex items-baseline gap-4 mb-5">
                  <span className="font-serif italic text-gold text-2xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-rule" />
                </div>
                <h3 className="font-serif text-3xl text-ink mb-4">{p.naslov}</h3>
                <p className="text-ink-soft leading-relaxed font-light">
                  {p.tekst}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-5xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="text-center">
          <SectionDivider label="Putokazi" />
          <h2 className="font-serif text-4xl lg:text-5xl text-ink">
            Trenuci koji su nas oblikovali
          </h2>
        </div>
        <div className="mt-16 space-y-px bg-rule/40 border-y border-rule/40">
          {milestones.map((m) => (
            <div
              key={m.godina}
              className="bg-ivory grid grid-cols-12 items-center px-6 py-8"
            >
              <div className="col-span-3 font-serif text-3xl text-gold italic">
                {m.godina}
              </div>
              <div className="col-span-9 text-ink-soft leading-relaxed">
                {m.dogadjaj}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
