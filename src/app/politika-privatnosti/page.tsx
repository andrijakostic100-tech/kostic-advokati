import PageHero from "@/components/PageHero";

export const metadata = { title: "Politika privatnosti" };

export default function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Pravna napomena"
        title="Politika privatnosti"
        intro="Advokatska kancelarija Kostić štiti privatnost svih korisnika sajta i poštuje važeće propise o zaštiti podataka o ličnosti."
      />
      <article className="mx-auto max-w-3xl px-6 lg:px-10 py-20 prose prose-lg text-ink-soft leading-relaxed space-y-6">
        <p>
          Ova politika privatnosti opisuje koje podatke prikupljamo putem
          internet stranice <strong>kostic-advokati.rs</strong>, kako ih
          koristimo i koja prava imate u vezi sa svojim podacima.
        </p>
        <h2 className="font-serif text-2xl text-ink">Podaci koje prikupljamo</h2>
        <p>
          Prikupljamo samo podatke koje nam dobrovoljno dostavite preko
          kontakt forme: ime, prezime, elektronsku adresu, broj telefona i
          tekst poruke. Te podatke koristimo isključivo radi odgovora na vaš
          upit.
        </p>
        <h2 className="font-serif text-2xl text-ink">Čuvanje podataka</h2>
        <p>
          Podatke čuvamo onoliko koliko je potrebno za odgovor i eventualno
          uspostavljanje saradnje, a najduže pet godina od prve poruke. Nakon
          tog roka podaci se brišu, osim ako postoji zakonska obaveza dužeg
          čuvanja.
        </p>
        <h2 className="font-serif text-2xl text-ink">Vaša prava</h2>
        <p>
          Imate pravo da zatražite uvid, ispravku ili brisanje vaših
          podataka. Za sva pitanja u vezi sa privatnošću pišite nam na{" "}
          <a href="mailto:office@kostic-advokati.rs" className="underline">
            office@kostic-advokati.rs
          </a>
          .
        </p>
      </article>
    </>
  );
}
