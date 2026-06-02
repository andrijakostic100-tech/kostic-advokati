import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Контакт",
  description:
    "Адвокатска канцеларија Костић Јовић и партнери — Обреновићева 46, ТЦ Калча, ламела Д, локал 109, Ниш.",
};

export default function Kontakt() {
  return (
    <>
      <PageHero
        eyebrow="Контакт"
        title="Пишите нам. Саслушаћемо."
        intro="Свака сарадња почиње пажљивим разговором. Позовите нас, пошаљите поруку или дођите у канцеларију у Нишу — одговарамо у року од једног радног дана."
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <Eyebrow>Поверљиви упит</Eyebrow>
          <h2 className="font-serif text-3xl lg:text-4xl mt-6 mb-12 text-green">
            Реците нам о чему се ради.
          </h2>
          <ContactForm />
        </div>

        <aside className="lg:col-span-5 lg:pl-10 lg:border-l border-rule space-y-12">
          <div>
            <Eyebrow>Канцеларија</Eyebrow>
            <h3 className="font-serif text-2xl mt-4 text-green">Ниш</h3>
            <address className="not-italic mt-4 text-ink-soft leading-relaxed">
              Обреновићева 46<br />
              ТЦ Калча, ламела Д<br />
              први спрат, локал 109<br />
              18000 Ниш, Србија
            </address>
            <a
              href="https://maps.google.com/?q=Obrenovi%C4%87eva+46,+TC+Kal%C4%8Da,+Ni%C5%A1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-[11px] uppercase tracking-display text-green border-b border-gold-deep pb-1 hover:text-gold-deep"
            >
              Отвори на мапи →
            </a>
          </div>

          <div>
            <Eyebrow>Адвокат Андрија Костић</Eyebrow>
            <div className="mt-4 space-y-1 text-ink-soft">
              <a
                href="tel:+381668420455"
                className="font-serif text-xl text-green hover:text-gold-deep block"
              >
                066 / 8420 455
              </a>
              <a
                href="mailto:adv.andrijakostic@gmail.com"
                className="text-sm hover:text-green block"
              >
                adv.andrijakostic@gmail.com
              </a>
            </div>
          </div>

          <div>
            <Eyebrow>Адвокат Александар Н. Јовић</Eyebrow>
            <div className="mt-4 space-y-1 text-ink-soft">
              <a
                href="tel:+381649359118"
                className="font-serif text-xl text-green hover:text-gold-deep block"
              >
                064 / 9359 118
              </a>
              <a
                href="mailto:aleksandarn.jovic@gmail.com"
                className="text-sm hover:text-green block"
              >
                aleksandarn.jovic@gmail.com
              </a>
            </div>
          </div>

          <div className="bg-parchment border border-rule/50 p-8">
            <Eyebrow>Дискреција</Eyebrow>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Све информације које нам доставите третирамо као строго
              поверљиве — и пре него што формално постанете наш клијент.
              Адвокатска тајна је основ нашег позива.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
