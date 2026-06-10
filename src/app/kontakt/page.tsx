import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Kontakt",
  description:
    "Advokatska kancelarija Kostić Jović i partneri — Obrenovićeva 46, TC Kalča, lamela D, lokal 109, Niš.",
};

export default function Kontakt() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Pišite nam. Saslušaćemo."
        intro="Svaka saradnja počinje pažljivim razgovorom. Pozovite nas, pošaljite poruku ili dođite u kancelariju u Nišu — odgovaramo u roku od jednog radnog dana."
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <Eyebrow>Poverljivi upit</Eyebrow>
          <h2 className="font-serif text-3xl lg:text-4xl mt-6 mb-12 text-green">
            Recite nam o čemu se radi.
          </h2>
          <ContactForm />
        </div>

        <aside className="lg:col-span-5 lg:pl-10 lg:border-l border-rule space-y-12">
          <div>
            <Eyebrow>Kancelarija</Eyebrow>
            <h3 className="font-serif text-2xl mt-4 text-green">Niš</h3>
            <address className="not-italic mt-4 text-ink-soft leading-relaxed">
              Obrenovićeva 46<br />
              TC Kalča, lamela D<br />
              prvi sprat, lokal 109<br />
              18000 Niš, Srbija
            </address>
            <a
              href="https://maps.google.com/?q=Obrenovi%C4%87eva+46,+TC+Kal%C4%8Da,+Ni%C5%A1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-[11px] uppercase tracking-display text-green border-b border-gold-deep pb-1 hover:text-gold-deep"
            >
              Otvori na mapi →
            </a>
          </div>

          <div>
            <Eyebrow>Radno vreme</Eyebrow>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Ponedeljak–Petak, 09–17h<br />
              vikendom po dogovoru.
            </p>
          </div>

          <div>
            <Eyebrow>Advokat Andrija Kostić</Eyebrow>
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
            <Eyebrow>Advokat Aleksandar N. Jović</Eyebrow>
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
            <Eyebrow>Diskrecija</Eyebrow>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Sve informacije koje nam dostavite tretiramo kao strogo
              poverljive — i pre nego što formalno postanete naš klijent.
              Advokatska tajna je osnov našeg poziva.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
