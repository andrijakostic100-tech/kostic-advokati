import PageHero from "@/components/PageHero";

export const metadata = { title: "Uslovi korišćenja" };

export default function Uslovi() {
  return (
    <>
      <PageHero
        eyebrow="Pravna napomena"
        title="Uslovi korišćenja"
        intro="Korišćenjem internet stranice advokatske kancelarije Kostić Jović i partneri prihvatate uslove koji slede."
      />
      <article className="mx-auto max-w-3xl px-6 lg:px-10 py-20 text-ink-soft leading-relaxed space-y-6">
        <p>
          Sadržaj ove internet stranice ima isključivo informativni karakter i ne predstavlja pravni savet. Pojedinačne pravne situacije zahtevaju pojedinačnu analizu — za sve konkretne savete pozovite kancelariju.
        </p>
        <h2 className="font-serif text-2xl text-green">Autorska prava</h2>
        <p>
          Sav sadržaj (tekstovi, fotografije, logotipi) je vlasništvo advokatske kancelarije Kostić Jović i partneri ili je korišćen uz dozvolu nosioca prava. Preuzimanje sadržaja moguće je samo uz prethodnu pisanu saglasnost.
        </p>
        <h2 className="font-serif text-2xl text-green">Odgovornost</h2>
        <p>
          Trudimo se da informacije na sajtu budu tačne i ažurne, ali ne preuzimamo odgovornost za eventualne greške ili posledice koje mogu nastati iz oslanjanja na sadržaj sajta bez konsultacije sa advokatom.
        </p>
      </article>
    </>
  );
}
