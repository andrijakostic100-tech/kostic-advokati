import PageHero from "@/components/PageHero";
import SectionDivider from "@/components/SectionDivider";

export const metadata = {
  title: "Tim",
  description:
    "Advokati i saradnici Advokatske kancelarije Kostić — iskustvo, obrazovanje i specijalnosti.",
};

const tim = [
  {
    ime: "Andrija Kostić",
    pozicija: "Osnivač · Partner",
    bio: "Diplomirao na Pravnom fakultetu Univerziteta u Beogradu. Master iz međunarodnog poslovnog prava na Sciences Po Paris. Specijalizovan za M&A transakcije i savetovanje porodičnih kompanija. Tečno govori engleski i francuski.",
    inicijali: "AK",
    oblasti: "M&A · Privredno pravo · Porodične kompanije",
  },
  {
    ime: "Milena Vasić",
    pozicija: "Partner",
    bio: "Vodi tim za arbitražu i sporove. Iskustvo u zastupanju klijenata pred ICC i VIAC arbitražom. Predavač na specijalističkim studijama iz međunarodnog privrednog prava.",
    inicijali: "MV",
    oblasti: "Arbitraža · Sporovi · Međunarodno pravo",
  },
  {
    ime: "Vuk Jovanović",
    pozicija: "Partner",
    bio: "Specijalista za poresko pravo i strukturiranje međunarodnih ulaganja. Bivši savetnik u Ministarstvu finansija. Magistar poreske ekonomije, Wirtschaftsuniversität Wien.",
    inicijali: "VJ",
    oblasti: "Poresko pravo · Strukturiranje · Compliance",
  },
  {
    ime: "Ana Petrović",
    pozicija: "Senior advokat",
    bio: "Vodi praksu za nepokretnosti i razvoj projekata. Ekspert za urbanističke postupke i finansiranje projekata u oblasti nekretnina.",
    inicijali: "AP",
    oblasti: "Nepokretnosti · Razvoj · Finansiranje",
  },
  {
    ime: "Filip Marković",
    pozicija: "Senior advokat",
    bio: "Specijalista za korporativno upravljanje i akcionarske sporove. Iskustvo u zastupanju manjinskih akcionara i institucionalnih investitora.",
    inicijali: "FM",
    oblasti: "Korporativno upravljanje · Akcionari",
  },
  {
    ime: "Jelena Đurić",
    pozicija: "Advokat",
    bio: "Pravna pomoć u oblasti nasleđa, porodičnog prava i sukcesije u porodičnim kompanijama. Posrednik (medijator) u privrednim sporovima.",
    inicijali: "JĐ",
    oblasti: "Nasleđe · Porodica · Medijacija",
  },
];

export default function Tim() {
  return (
    <>
      <PageHero
        eyebrow="Tim"
        title="Ljudi iza svake odluke."
        intro="Naš tim broji dvanaest advokata i saradnika. Predstavljamo članove koji vode pojedinačne oblasti prakse — oni su prvo lice kontakta za naše klijente."
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule/40 border border-rule/40">
          {tim.map((osoba) => (
            <article
              key={osoba.ime}
              className="bg-ivory p-10 lg:p-12 flex flex-col"
            >
              <div className="aspect-square mb-8 bg-parchment border border-rule/60 flex items-center justify-center relative">
                <div className="absolute inset-3 border border-gold/30" />
                <div className="font-serif italic text-7xl text-ink/70">
                  {osoba.inicijali}
                </div>
              </div>
              <div className="text-[10px] uppercase tracking-display text-gold mb-3">
                {osoba.pozicija}
              </div>
              <h3 className="font-serif text-2xl text-ink leading-tight">
                {osoba.ime}
              </h3>
              <div className="h-px w-12 bg-gold/60 my-5" />
              <p className="text-sm leading-relaxed text-ink-soft font-light flex-1">
                {osoba.bio}
              </p>
              <div className="mt-6 pt-5 border-t border-rule/50 text-[11px] tracking-wide uppercase text-ink-soft/80">
                {osoba.oblasti}
              </div>
            </article>
          ))}
        </div>

        <SectionDivider />

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-ink-soft leading-relaxed">
            Pored partnera i senior advokata, naš tim čini osam saradnika,
            advokatskih pripravnika i administrativnog osoblja. Svi članovi tima
            obavezuju se profesionalnom tajnom i etičkim kodeksom kancelarije.
          </p>
        </div>
      </section>
    </>
  );
}
