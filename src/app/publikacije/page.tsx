import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";

export const metadata = {
  title: "Publikacije",
  description:
    "Stručni tekstovi, komentari na propise i predavanja advokata kancelarije Kostić.",
};

const publikacije = [
  {
    datum: "Mart 2026.",
    naslov: "Novi Zakon o privrednim društvima — šta se menja za akcionare",
    izvod:
      "Pregled ključnih izmena, sa posebnim osvrtom na položaj manjinskih akcionara i obavezu obaveštavanja.",
    kategorija: "Privredno pravo",
  },
  {
    datum: "Decembar 2025.",
    naslov: "Arbitražna klauzula u međunarodnim ugovorima — pet čestih grešaka",
    izvod:
      "Komentar tipičnih propusta u redakciji arbitražnih klauzula, sa preporukama iz prakse pred ICC i VIAC.",
    kategorija: "Arbitraža",
  },
  {
    datum: "Septembar 2025.",
    naslov: "Sukcesija u porodičnim kompanijama — pravni i ljudski aspekti",
    izvod:
      "Predavanje na Pravnom fakultetu Univerziteta u Beogradu o izazovima prenosa upravljanja na sledeću generaciju.",
    kategorija: "Porodične kompanije",
  },
  {
    datum: "Juni 2025.",
    naslov: "Poreske implikacije transfernih cena za male i srednje kompanije",
    izvod:
      "Praktični pristup obavezi izrade dokumentacije o transfernim cenama u kontekstu domaćeg poreskog okvira.",
    kategorija: "Poresko pravo",
  },
  {
    datum: "Februar 2025.",
    naslov: "Pravni okvir za razvoj logističkih kompleksa u Srbiji",
    izvod:
      "Analiza najnovijih propisa i administrativne prakse u oblasti urbanističkih dozvola i finansiranja.",
    kategorija: "Nepokretnosti",
  },
];

export default function Publikacije() {
  return (
    <>
      <PageHero
        eyebrow="Publikacije"
        title="Stručni tekstovi i predavanja."
        intro="Naši advokati redovno objavljuju stručne tekstove, komentare i predavanja u oblastima u kojima rade. Niže možete pronaći izbor iz poslednjih godina."
      />

      <section className="mx-auto max-w-5xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="space-y-px bg-rule/40 border-y border-rule/40">
          {publikacije.map((p) => (
            <article
              key={p.naslov}
              className="bg-ivory hover:bg-parchment transition-colors p-8 lg:p-12 grid lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-3">
                <Eyebrow>{p.kategorija}</Eyebrow>
                <div className="font-serif italic text-ink-soft mt-3">
                  {p.datum}
                </div>
              </div>
              <div className="lg:col-span-9">
                <h3 className="font-serif text-2xl lg:text-3xl text-ink leading-tight">
                  {p.naslov}
                </h3>
                <p className="mt-4 text-ink-soft leading-relaxed font-light">
                  {p.izvod}
                </p>
                <div className="mt-6">
                  <span className="text-[11px] uppercase tracking-display text-gold border-b border-gold/50 pb-0.5">
                    Pročitajte više →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center text-ivory-soft">
          <p className="text-ink-soft text-sm">
            Za pristup celokupnoj arhivi stručnih tekstova obratite se kancelariji.
          </p>
        </div>
      </section>
    </>
  );
}
