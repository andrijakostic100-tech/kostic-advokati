import PageHero from "@/components/PageHero";
import SectionDivider from "@/components/SectionDivider";

export const metadata = {
  title: "Тим",
  description:
    "Чланови адвокатске канцеларије Костић Јовић и партнери — оснивачи, адвокати и сарадници.",
};

const partneri = [
  {
    ime: "Андрија Костић",
    pozicija: "Оснивач · Партнер · Адвокат",
    inicijali: "АК",
    email: "adv.andrijakostic@gmail.com",
    tel: "066 / 8420 455",
    telHref: "+381668420455",
    jezici: "Српски · Енглески · Италијански",
    bio:
      "Адвокат и један од оснивача канцеларије. Бави се прекршајним, одштетним и кривичним правом, са посебним фокусом на саобраћајне прекршаје и накнаду штете из саобраћајних незгода. Активно заступа клијенте широм Србије.",
  },
  {
    ime: "Александар Н. Јовић",
    pozicija: "Оснивач · Партнер · Адвокат",
    inicijali: "АЈ",
    email: "aleksandarn.jovic@gmail.com",
    tel: "064 / 9359 118",
    telHref: "+381649359118",
    jezici: "Српски · Енглески · Француски",
    bio:
      "Адвокат и један од оснивача канцеларије. Заступа клијенте у прекршајним, одштетним и кривичним поступцима, као и у правним пословима у вези са непокретностима. Дугогодишње искуство у вођењу одштетних предмета.",
  },
];

const saradnici = [
  {
    ime: "Милан Туфегџић",
    pozicija: "Адвокат · Сарадник",
    inicijali: "МТ",
    opis:
      "Адвокат сарадник у канцеларији. Учествује у вођењу прекршајних, одштетних и кривичних предмета и подршци клијентима у свакодневном раду.",
  },
  {
    ime: "Андрија Адамовић",
    pozicija: "Адвокатски приправник",
    inicijali: "АА",
    opis:
      "Адвокатски приправник у канцеларији. Подржава тим у припреми поднесака, анализи доказне грађе и заступању пред судовима.",
  },
];

export default function Tim() {
  return (
    <>
      <PageHero
        eyebrow="Тим"
        title="Људи иза сваке одлуке."
        intro="Канцеларију чине два оснивача-партнера, адвокат сарадник и адвокатски приправник. У сваком предмету клијент има свог адвоката — и зна коме се обраћа."
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <SectionDivider label="Оснивачи · Партнери" />

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
                    Контакт
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
                    Језици
                  </dt>
                  <dd className="text-ink-soft text-sm">{p.jezici}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <SectionDivider label="Адвокат сарадник · Приправник" />

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
