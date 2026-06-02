import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";

export const metadata = {
  title: "Kontakt",
  description:
    "Zakažite konsultaciju u Advokatskoj kancelariji Kostić. Knez Mihailova 24, Beograd.",
};

export default function Kontakt() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Pišite nam. Saslušaćemo."
        intro="Svaki novi predmet počinje pažljivim razgovorom. Ostavite poruku ili nam pišite direktno — odgovaramo u roku od jednog radnog dana."
      />

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-16">
        {/* Form */}
        <div className="lg:col-span-7">
          <Eyebrow>Poverljivi upit</Eyebrow>
          <h2 className="font-serif text-3xl lg:text-4xl mt-6 mb-12 text-ink">
            Recite nam o čemu se radi.
          </h2>
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Ime i prezime" name="name" required />
              <Field label="Elektronska adresa" name="email" type="email" required />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Telefon" name="phone" type="tel" />
              <Field label="Privredno društvo (opciono)" name="company" />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-display text-ink-soft mb-3">
                Oblast od interesa
              </label>
              <select
                name="oblast"
                className="w-full bg-transparent border-b border-rule/80 py-3 text-ink focus:border-gold focus:outline-none font-light"
              >
                <option>Privredno pravo</option>
                <option>M&A i transakcije</option>
                <option>Arbitraža i sporovi</option>
                <option>Nepokretnosti</option>
                <option>Nasleđe i porodica</option>
                <option>Poresko savetovanje</option>
                <option>Drugo</option>
              </select>
            </div>
            <Field
              label="Vaša poruka"
              name="message"
              textarea
              required
              placeholder="Ukratko opišite o čemu se radi. Sve informacije tretiramo kao strogo poverljive."
            />
            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-ink text-ivory px-10 py-4 text-[11px] uppercase tracking-display hover:bg-burgundy transition-colors"
            >
              Pošalji upit
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M0 5h12m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </button>
            <p className="text-xs text-ink-soft/70 leading-relaxed">
              Slanjem upita pristajete na obradu podataka u svrhu odgovora.
              Pogledajte našu{" "}
              <a href="/politika-privatnosti" className="underline">
                politiku privatnosti
              </a>
              .
            </p>
          </form>
        </div>

        {/* Info */}
        <aside className="lg:col-span-5 lg:pl-10 lg:border-l border-rule space-y-12">
          <div>
            <Eyebrow>Kancelarija</Eyebrow>
            <h3 className="font-serif text-2xl mt-4 text-ink">Beograd</h3>
            <address className="not-italic mt-4 text-ink-soft leading-relaxed">
              Knez Mihailova 24<br />
              11000 Beograd<br />
              Srbija
            </address>
          </div>

          <div>
            <Eyebrow>Telefon</Eyebrow>
            <div className="mt-4 space-y-1 text-ink-soft">
              <div className="font-serif text-xl text-ink">+381 11 328 4900</div>
              <div className="text-sm">Radnim danima 09—18h</div>
            </div>
          </div>

          <div>
            <Eyebrow>Elektronska pošta</Eyebrow>
            <div className="mt-4 space-y-2 text-ink-soft text-sm">
              <div>
                <span className="block text-ink font-serif text-lg">
                  office@kostic-advokati.rs
                </span>
                opšti upiti
              </div>
              <div>
                <span className="block text-ink font-serif text-lg">
                  arbitraza@kostic-advokati.rs
                </span>
                sporovi i arbitraža
              </div>
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

function Field({
  label,
  name,
  type = "text",
  required = false,
  textarea = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
}) {
  const cls =
    "w-full bg-transparent border-b border-rule/80 py-3 text-ink focus:border-gold focus:outline-none font-light placeholder:text-ink-soft/40";
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[10px] uppercase tracking-display text-ink-soft mb-3"
      >
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          required={required}
          placeholder={placeholder}
          className={cls + " resize-none"}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={cls}
        />
      )}
    </div>
  );
}
