import PageHero from "@/components/PageHero";
import SectionDivider from "@/components/SectionDivider";
import Eyebrow from "@/components/Eyebrow";

export const metadata = {
  title: "O kancelariji",
  description:
    "Advokatska kancelarija Kostić Jović i partneri — Niš. Saznajte više o našem pristupu, vrednostima i timu.",
};

const principi = [
  {
    naslov: "Dostupnost",
    tekst:
      "Klijent uvek zna ko vodi njegov predmet i u kojoj je fazi. Ne delegiramo odgovornost — tu smo od početka do kraja.",
  },
  {
    naslov: "Dokazivanje",
    tekst:
      "Teret dokazivanja je na državi, ne na vama. Svaki navod suočavamo sa materijalnim dokazima — i tamo gde ih nema, insistiramo na tome.",
  },
  {
    naslov: "Doslednost",
    tekst:
      "Radimo po pravilima struke i principu in dubio pro reo. Ne preporučujemo ono što i sami ne bismo uradili da smo u klijentovoj situaciji.",
  },
  {
    naslov: "Diskrecija",
    tekst:
      "Advokatska tajna je osnov našeg poziva. Svaka informacija koju nam poverite ostaje u kancelariji.",
  },
];

export default function ONama() {
  return (
    <>
      <PageHero
        eyebrow="O kancelariji"
        title="Kancelarija u srcu Niša."
        intro="Advokatska kancelarija Kostić Jović i partneri nalazi se u poslovnom centru Kalča u Nišu. Zastupamo klijente u prekršajnim, odštetnim i krivičnim postupcima, kao i u pravnim poslovima u vezi sa nepokretnostima — na teritoriji cele Srbije."
      />

      {/* Mission */}
      <section className="mx-auto max-w-6xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <Eyebrow>Naš pristup</Eyebrow>
          <h2 className="font-serif text-4xl lg:text-5xl mt-6 leading-tight text-green">
            Principi ispred <span className="italic">kalkulacije.</span>
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-ink-soft leading-relaxed">
          <p>
            Naša kancelarija gradi praksu na jednostavnoj ideji: klijentu dugujemo
            pažnju, poznavanje propisa i doslednu odbranu — bez obzira na to da li
            se radi o prekršajnom postupku iz saobraćaja ili o zahtevu za naknadu
            štete od osiguranja.
          </p>
          <p>
            Zastupamo klijente u celoj Srbiji zahvaljujući razvijenoj mreži
            advokata saradnika. Bez obzira na to u kojem gradu se vodi postupak,
            naš klijent ima svog advokata koji vodi njegov predmet i objašnjava mu
            svaki korak.
          </p>
          <p>
            Pored advokatskih poslova, dugogodišnja saradnja sa ovlašćenim
            procentiteljima štete i sudskim veštacima različitih struka omogućava
            nam da u odštetnim predmetima osiguramo objektivnu i stručnu procenu
            koja značajno jača poziciju klijenta.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-parchment border-y border-rule/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <div className="text-center">
            <SectionDivider label="Vrednosti" />
            <h2 className="font-serif text-4xl lg:text-5xl text-green">
              Četiri pravila kuće
            </h2>
          </div>
          <div className="mt-16 grid md:grid-cols-2 gap-px bg-rule/40 border border-rule/40">
            {principi.map((p, i) => (
              <div key={p.naslov} className="bg-ivory p-10 lg:p-14">
                <div className="flex items-baseline gap-4 mb-5">
                  <span className="font-serif italic text-gold-deep text-2xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-rule" />
                </div>
                <h3 className="font-serif text-3xl text-green mb-4">{p.naslov}</h3>
                <p className="text-ink-soft leading-relaxed font-light">
                  {p.tekst}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="mx-auto max-w-5xl px-6 lg:px-10 py-24 lg:py-32 text-center">
        <SectionDivider label="Teritorija" />
        <h2 className="font-serif text-4xl lg:text-5xl text-green">
          Zastupamo širom Srbije
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-ink-soft leading-relaxed">
          Sedište kancelarije je u Nišu, ali zahvaljujući mreži advokata
          saradnika, zastupamo klijente pred svim prekršajnim sudovima,
          parničnim sudovima i krivičnim organima u Srbiji — od Beograda i
          Novog Sada do Kragujevca, Leskovca, Vranja i ostalih gradova.
        </p>
      </section>
    </>
  );
}
