import PageHero from "@/components/PageHero";

export const metadata = { title: "Politika privatnosti" };

export default function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Pravna napomena"
        title="Politika privatnosti"
        intro="Advokatska kancelarija Kostić Jović i partneri štiti privatnost svih korisnika sajta i poštuje važeće propise o zaštiti podataka o ličnosti."
      />
      <article className="mx-auto max-w-3xl px-6 lg:px-10 py-20 text-ink-soft leading-relaxed space-y-6">
        <p>
          Ova politika privatnosti opisuje koje podatke prikupljamo putem internet stranice, kako ih koristimo i koja prava imate u vezi sa svojim podacima.
        </p>

        <h2 className="font-serif text-2xl text-green">Rukovalac podataka</h2>
        <p>
          Rukovalac podataka u smislu Zakona o zaštiti podataka o ličnosti je{" "}
          <strong>Advokatska kancelarija Kostić Jović i partneri</strong>,
          Obrenovićeva 46, TC Kalča, lamela D, prvi sprat, lokal 109, 18000 Niš.
          Kontakt:{" "}
          <a href="mailto:adv.andrijakostic@gmail.com" className="underline">
            adv.andrijakostic@gmail.com
          </a>
          .
        </p>

        <h2 className="font-serif text-2xl text-green">Podaci koje prikupljamo</h2>
        <p>
          Prikupljamo samo podatke koje nam dobrovoljno dostavite preko kontakt forme: ime, prezime, elektronsku adresu, broj telefona i tekst poruke. Te podatke koristimo isključivo radi odgovora na vaš upit.
        </p>

        <h2 className="font-serif text-2xl text-green">Čuvanje podataka</h2>
        <p>
          Podatke čuvamo onoliko koliko je potrebno za odgovor i eventualno uspostavljanje saradnje. Nakon tog roka podaci se brišu, osim ako postoji zakonska obaveza dužeg čuvanja.
        </p>

        <h2 className="font-serif text-2xl text-green">Vaša prava</h2>
        <p>
          Imate pravo da zatražite uvid, ispravku ili brisanje vaših podataka, kao i pravo na ograničenje obrade i prenosivost podataka. Za sva pitanja u vezi sa privatnošću pišite nam na{" "}
          <a href="mailto:adv.andrijakostic@gmail.com" className="underline">
            adv.andrijakostic@gmail.com
          </a>
          .
        </p>
        <p>
          Ukoliko smatrate da je obrada vaših podataka u suprotnosti sa propisima, imate pravo pritužbe <strong>Povereniku za informacije od javnog značaja i zaštitu podataka o ličnosti</strong> (Bulevar kralja Aleksandra 15, 11000 Beograd; <a href="https://www.poverenik.rs" target="_blank" rel="noopener noreferrer" className="underline">www.poverenik.rs</a>).
        </p>
      </article>
    </>
  );
}
