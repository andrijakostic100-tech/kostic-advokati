import PageHero from "@/components/PageHero";
import SectionDivider from "@/components/SectionDivider";

export const metadata = {
  title: "Tim",
  description:
    "Članovi advokatske kancelarije Kostić Jović i partneri — osnivači, advokati i saradnici.",
};

const partneri = [
  {
    ime: "Andrija Kostić",
    pozicija: "Osnivač · Partner · Advokat",
    inicijali: "AK",
    email: "adv.andrijakostic@gmail.com",
    tel: "066 / 8420 455",
    telHref: "+381668420455",
    jezici: "Srpski · Engleski · Italijanski",
    bio:
      "Advokat i jedan od osnivača kancelarije. Bavi se prekršajnim, odštetnim i krivičnim pravom, sa posebnim fokusom na saobraćajne prekršaje i naknadu štete iz saobraćajnih nezgoda. Aktivno zastupa klijente širom Srbije.",
  },
  {
    ime: "Aleksandar N. Jović",
    pozicija: "Osnivač · Partner · Advokat",
    inicijali: "AJ",
    email: "aleksandarn.jovic@gmail.com",
    tel: "064 / 9359 118",
    telHref: "+381649359118",
    jezici: "Srpski · Engleski · Francuski",
    bio:
      "Advokat i jedan od osnivača kancelarije. Zastupa klijente u prekršajnim, odštetnim i krivičnim postupcima, kao i u pravnim poslovima u vezi sa nepokretnostima. Dugogodišnje iskustvo u vođenju odštetnih predmeta.",
  },
];

const saradnici = [
  {
    ime: "Milan Tufegdžić",
    pozicija: "Advokat · Saradnik",
    inicijali: "MT",
    opis:
      "Advokat saradnik u kancelariji. Učestvuje u vođenju prekršajnih, odštetnih i krivičnih predmeta i podršci klijentima u svakodnevnom radu.",
  },
  {
    ime: "Andrija Adamović",
    pozicija: "Advokatski pripravnik",
    inicijali: "AA",
    opis:
      "Advokatski pripravnik u kancelariji. Podržava tim u pripremi podnesaka, analizi dokazne građe i zastupanju pred sudovima.",
  },
];

export default function Tim() {
  return (
    <>
      <PageHero
        eyebrow="Tim"
        title="Ljudi iza svake odluke."
        intro="Kancelariju čine dva osnivača-partnera, advokat saradnik i advokatski pripravnik. U svakom predmetu klijent ima svog advokata — i zna kome se obraća."
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <SectionDivider label="Osnivači · Partneri" />

        <div className="grid lg:grid-cols-2 gap-px bg-rule/40 border border-rule/40 mt-10">
          {partneri.map((p) => (
            <article key={p.ime} className="bg-ivory p-10 lg:p-14 flex flex-col">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-28 h-28 lg:w-32 lg:h-32 bg-green flex items-center justify-center flex-shrink-0 relative">
                  <div className="absolute inset-2 border border-gold/40" />
                  <div className="font-serif italic text-5xl lg:text-6xl text-gold-light">
                    {p.inicijali}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-display text-gold-deep mb-2">
                    {p.pozicija}
                  </div>
                  <h3 className="font-serif text-3xl text-green leading-tight">
                    {p.ime}
                  </h3>
                </div>
              </div>

              <div className="h-px bg-gold-deep/30 my-4" />

              <p className="text-ink-soft leading-relaxed font-light flex-1">
                {p.bio}
              </p>

              <dl className="mt-8 space-y-3 text-sm">
                <div className="grid grid-cols-[8rem_1fr] gap-3">
                  <dt className="text-[10px] uppercase tracking-display text-ink-soft/70 pt-1">
                    Kontakt
                  </dt>
                  <dd className="text-ink-soft">
                    <a
                      href={`tel:${p.telHref}`}
                      className="hover:text-green block"
                    >
                      {p.tel}
                    </a>
                    <a
                      href={`mailto:${p.email}`}
                      className="hover:text-green text-xs block mt-1 break-all"
                    >
                      {p.email}
                    </a>
                  </dd>
                </div>
                <div className="grid grid-cols-[8rem_1fr] gap-3 pt-2 border-t border-rule/40">
                  <dt className="text-[10px] uppercase tracking-display text-ink-soft/70 pt-1">
                    Jezici
                  </dt>
                  <dd className="text-ink-soft text-sm">{p.jezici}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <SectionDivider label="Advokat saradnik · Pripravnik" />

        <div className="grid md:grid-cols-2 gap-px bg-rule/40 border border-rule/40 mt-10">
          {saradnici.map((s) => (
            <article key={s.ime} className="bg-ivory p-10 lg:p-12 flex flex-col">
              <div className="flex items-start gap-5 mb-6">
                <div className="w-20 h-20 bg-parchment border border-rule flex items-center justify-center flex-shrink-0 relative">
                  <div className="absolute inset-1.5 border border-gold/30" />
                  <div className="font-serif italic text-3xl text-green">
                    {s.inicijali}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-display text-gold-deep mb-2">
                    {s.pozicija}
                  </div>
                  <h3 className="font-serif text-2xl text-green leading-tight">
                    {s.ime}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-ink-soft leading-relaxed font-light">
                {s.opis}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
