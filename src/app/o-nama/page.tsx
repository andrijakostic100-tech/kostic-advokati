import PageHero from "@/components/PageHero";
import SectionDivider from "@/components/SectionDivider";
import Eyebrow from "@/components/Eyebrow";

export const metadata = {
  title: "О канцеларији",
  description:
    "Адвокатска канцеларија Костић Јовић и партнери — Ниш. Сазнајте више о нашем приступу, вредностима и тиму.",
};

const principi = [
  {
    naslov: "Доступност",
    tekst:
      "Клијент увек зна ко води његов предмет и у којој је фази. Не делегирамо одговорност — ту смо од почетка до краја.",
  },
  {
    naslov: "Доказивање",
    tekst:
      "Терет доказивања је на држави, не на вама. Сваки навод суочавамо са материјалним доказима — и тамо где их нема, инсистирамо на томе.",
  },
  {
    naslov: "Доследност",
    tekst:
      "Радимо по правилима струке и принципу in dubio pro reo. Не препоручујемо оно што и сами не бисмо урадили да смо у клијентовој ситуацији.",
  },
  {
    naslov: "Дискреција",
    tekst:
      "Адвокатска тајна је основ нашег позива. Свака информација коју нам поверите остаје у канцеларији.",
  },
];

export default function ONama() {
  return (
    <>
      <PageHero
        eyebrow="О канцеларији"
        title="Канцеларија у срцу Ниша."
        intro="Адвокатска канцеларија Костић Јовић и партнери налази се у пословном центру Калча у Нишу. Заступамо клијенте у прекршајним, одштетним и кривичним поступцима, као и у правним пословима у вези са непокретностима — на територији целе Србије."
      />

      {/* Mission */}
      <section className="mx-auto max-w-6xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <Eyebrow>Наш приступ</Eyebrow>
          <h2 className="font-serif text-4xl lg:text-5xl mt-6 leading-tight text-green">
            Принципи испред <span className="italic">калкулације.</span>
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-ink-soft leading-relaxed">
          <p>
            Наша канцеларија гради праксу на једноставној идеји: клијенту дугујемо
            пажњу, познавање прописа и доследну одбрану — без обзира на то да ли
            се ради о прекршајном поступку из саобраћаја или о захтеву за накнаду
            штете од осигурања.
          </p>
          <p>
            Заступамо клијенте у целој Србији захваљујући развијеној мрежи
            адвоката сарадника. Без обзира на то у којем граду се води поступак,
            наш клијент има свог адвоката који води његов предмет и објашњава му
            сваки корак.
          </p>
          <p>
            Поред адвокатских послова, дугогодишња сарадња са овлашћеним
            проценитељима штете и судским вештацима различитих струка омогућава
            нам да у одштетним предметима осигурамо објективну и стручну процену
            која значајно јача позицију клијента.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-parchment border-y border-rule/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <div className="text-center">
            <SectionDivider label="Вредности" />
            <h2 className="font-serif text-4xl lg:text-5xl text-green">
              Четири правила куће
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
        <SectionDivider label="Територија" />
        <h2 className="font-serif text-4xl lg:text-5xl text-green">
          Заступамо широм Србије
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-ink-soft leading-relaxed">
          Седиште канцеларије је у Нишу, али захваљујући мрежи адвоката
          сарадника, заступамо клијенте пред свим прекршајним судовима,
          парничним судовима и кривичним органима у Србији — од Београда и
          Новог Сада до Крагујевца, Лесковца, Врања и осталих градова.
        </p>
      </section>
    </>
  );
}
