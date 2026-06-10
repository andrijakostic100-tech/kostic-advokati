import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";

export const metadata = {
  title: "Oblasti prava",
  description:
    "Prekršajno, odštetno i krivično pravo, nepokretnosti — glavne oblasti u kojima zastupamo klijente.",
};

const oblasti = [
  {
    rim: "I",
    slug: "prekrsajno-pravo",
    naziv: "Prekršajno pravo",
    podnaslov: "Kada vam preti kazna, zabrana vožnje ili kazneni poeni.",
    intro:
      "Zastupamo okrivljene u prekršajnim postupcima pred prekršajnim sudovima i Prekršajnim apelacionim sudom, sa posebnim iskustvom u predmetima iz oblasti bezbednosti saobraćaja na putevima.",
    sekcije: [
      {
        naslov: "Šta obuhvata naša praksa",
        stavke: [
          "Saobraćajni prekršaji — upravljanje vozilom pod dejstvom alkohola i psihoaktivnih supstanci, odbijanje alkotestiranja, prolazak kroz crveno svetlo, prekoračenje brzine, nasilnička vožnja i drugi prekršaji iz Zakona o bezbednosti saobraćaja na putevima",
          "Zaštitne mere i kazneni poeni — osporavanje i ublažavanje mere zabrane upravljanja motornim vozilom, kao i postupanje u vezi sa izrečenim kaznenim poenima",
          "Carinski prekršaji — nedozvoljeni unos i iznošenje robe, netačno prijavljivanje, prekršaji u vezi sa carinskim i deviznim propisima",
          "Prekršaji protiv javnog reda i mira i komunalni prekršaji",
          "Sastavljanje pisanih odbrana u prvostepenom postupku i izjavljivanje žalbi drugostepenom sudu",
        ],
      },
    ],
    paragraph:
      "U svakom predmetu polazimo od načela da je teret dokazivanja na podnosiocu zahteva, a ne na okrivljenom. Pažljivo analiziramo dokaznu građu, ukazujemo na izostanak materijalnih dokaza (fotografija, video-zapisa, evidencija o ispravnosti mernih uređaja) i dosledno štitimo pravo na odbranu i pravo na pravično suđenje zajemčeno Ustavom i Evropskom konvencijom o ljudskim pravima — uključujući pravo okrivljenog da ispituje svedoke optužbe.",
    paragraph2:
      "Cilj nam je da svaki navod iz zahteva za pokretanje prekršajnog postupka bude potkrepljen pouzdanim dokazima, a da se, tamo gde osnova za odgovornost nema, dosledno primeni načelo in dubio pro reo.",
    callout:
      "Pokrivamo celu Srbiju. Zahvaljujući širokoj mreži advokata saradnika, zastupamo klijente pred svim prekršajnim sudovima i Prekršajnim apelacionim sudom, bez obzira na to gde se postupak vodi.",
  },
  {
    rim: "II",
    slug: "odstetno-pravo",
    naziv: "Odštetno pravo",
    podnaslov: "Vi se oporavite — o svemu ostalom brinemo mi.",
    intro:
      "Specijalizovani smo za odštetno pravo — zastupamo oštećene pred osiguravajućim društvima, sudovima i organima unutrašnjih poslova, i stajemo iza vas od trenutka nastanka štete do konačne naplate.",
    sekcije: [
      {
        naslov: "Vrste štete koju pokrivamo",
        stavke: [
          "Saobraćajne nezgode — materijalna šteta na vozilu i nematerijalna šteta usled pretrpljenih povreda",
          "Povrede na radu — obezbeđivanje naknade od poslodavca i osiguranja",
          "Padovi na javnim površinama, u šahtama, na ledu i neodržavanim stazama",
          "Ujedi pasa i drugih životinja",
          "Svi ostali slučajevi materijalne i nematerijalne štete",
        ],
      },
      {
        naslov: "Šta sve radimo za vas",
        stavke: [
          "Pribavljanje i kompletiranje celokupne dokumentacije neophodne za ostvarivanje prava na naknadu",
          "Stručnu procenu materijalne i nematerijalne štete preko naših ovlašćenih procenitelja",
          "Podnošenje i vođenje odštetnih zahteva pred osiguravajućim društvima",
          "Zastupanje u sudskim postupcima radi ostvarivanja pune naknade",
          "Zastupanje pred organima unutrašnjih poslova",
          "Naplatu dosuđene odnosno priznate štete",
        ],
      },
    ],
    paragraph:
      "Zastupamo klijente u svim fazama postupka — u vansudskom postupku pred osiguravajućim društvima, u parničnim postupcima pred nadležnim sudovima, kao i u postupcima pred organima unutrašnjih poslova. Bez obzira da li se radi o materijalnoj šteti na vozilu ili o nematerijalnoj šteti usled pretrpljenih povreda, preuzimamo kompletan posao umesto vas.",
    paragraph2:
      "Zahvaljujući razvijenoj mreži ovlašćenih procenitelja štete i dugogodišnjoj uspešnoj saradnji sa sudskim veštacima različitih struka, u mogućnosti smo da obezbedimo stručnu i objektivnu procenu svake štete, što značajno jača poziciju klijenta u postupku naplate.",
    callout:
      "Naš cilj je da klijent ostvari maksimalnu naknadu koja mu po zakonu pripada, uz minimum obaveza i stresa na njegovoj strani.",
  },
  {
    rim: "III",
    slug: "krivicno-pravo",
    naziv: "Krivično pravo",
    podnaslov: "Odbrana u kojoj ništa nije prepušteno slučaju.",
    intro:
      "Zastupamo okrivljene i oštećene u svim fazama krivičnog postupka — od pretkrivičnog postupka i istrage, preko glavnog pretresa, do pravnosnažne presude i postupaka po vanrednim pravnim lekovima.",
    sekcije: [
      {
        naslov: "Čime se bavimo",
        stavke: [
          "Odbrana okrivljenih u svim fazama postupka — pred policijom, tužilaštvom i sudom",
          "Zastupanje oštećenih — podnošenje krivičnih prijava, ostvarivanje svojstva oštećenog, imovinsko-pravni zahtev",
          "Postupci po krivičnim delima protiv bezbednosti javnog saobraćaja, imovine, ličnosti i službene dužnosti",
          "Krivična dela u vezi sa zloupotrebom opojnih droga",
          "Izjavljivanje žalbi i vanrednih pravnih lekova — zahtev za zaštitu zakonitosti, ponavljanje postupka",
          "Postupci uslovnog otpusta i zaštitnog nadzora",
        ],
      },
    ],
    paragraph:
      "Krivični postupak iziskuje pažljivu i doslednu strategiju odbrane od samog početka. Od prve policijske radnje — saslušanja, pretresa, privremenog oduzimanja predmeta — do poslednje odluke suda, sve što se propusti može imati posledice koje se kasnije teško ispravljaju.",
    paragraph2:
      "Polazimo od pretpostavke nevinosti i dosledno štitimo procesna prava okrivljenog. Ukazujemo na svaku povredu zakona, osporavamo nezakonito pribavljene dokaze i insistiramo da se sumnje tumače u korist okrivljenog.",
    callout:
      "U svakom predmetu zastupamo princip da je sloboda pravilo, a lišenje slobode izuzetak — i svaki izuzetak mora biti najstrože obrazložen.",
  },
  {
    rim: "IV",
    slug: "nepokretnosti",
    naziv: "Nepokretnosti",
    podnaslov: "Sigurnost u poslu koji ne trpi improvizaciju.",
    intro:
      "Pružamo kompletnu pravnu podršku u prometu i upravljanju nepokretnostima — od posredovanja i pregovora do upisa prava u katastar i rešavanja imovinsko-pravnih odnosa.",
    sekcije: [
      {
        naslov: "Šta obuhvata naša praksa",
        stavke: [
          "Ugovori o kupoprodaji nepokretnosti (stanovi, kuće, poslovni prostor, zemljište)",
          "Ugovori o zakupu i podzakupu",
          "Ugovori o doživotnom izdržavanju i poklonu",
          "Posredovanje u prometu nepokretnosti",
          "Upis prava u katastar nepokretnosti",
          "Zabeležbe, hipoteke i opterećenja",
          "Rešavanje imovinsko-pravnih odnosa, utvrđivanje prava svojine",
          "Parnični postupci u vezi sa nepokretnostima",
        ],
      },
    ],
    paragraph:
      "Svaka nepokretnost ima svoju priču — teret, prethodne vlasnike, moguće sporove. Pre potpisivanja bilo kog ugovora, pažljivo proveravamo pravni status nepokretnosti u katastru i ostalim javnim registrima, i upozoravamo klijenta na svaki rizik koji bi u budućnosti mogao da ugrozi njegovo pravo.",
    paragraph2:
      "Za klijente koji kupuju ili prodaju nepokretnost preuzimamo celokupnu pravnu stranu posla — od nacrta ugovora i provere dokumentacije, preko overe kod javnog beležnika, do upisa u katastar.",
    callout:
      "Cilj nam je da klijent uđe u posao sa punim poznavanjem pravne situacije — i da izađe iz njega sa pravom koje niko ne može uspešno osporiti.",
  },
];

export default function Oblasti() {
  return (
    <>
      <PageHero
        eyebrow="Oblasti prava"
        title="Čime se bavimo."
        intro="Fokusiramo se na četiri oblasti u kojima naša kancelarija ima najviše iskustva i rezultata. U svakom predmetu spajamo pažljivu analizu, doslednu odbranu i poštovanje pravila struke."
      />

      <section className="mx-auto max-w-6xl px-6 lg:px-10 py-24 lg:py-32 space-y-32">
        {oblasti.map((o) => (
          <article key={o.naziv} id={o.slug} className="scroll-mt-28">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <div className="font-serif italic text-7xl text-gold-deep opacity-80">
                  {o.rim}
                </div>
                <Eyebrow>Oblast</Eyebrow>
                <h2 className="font-serif text-4xl lg:text-5xl mt-6 leading-tight text-green">
                  {o.naziv}
                </h2>
                <p className="mt-4 font-serif italic text-xl text-ink-soft">
                  {o.podnaslov}
                </p>
              </div>
              <div className="lg:col-span-8 lg:pl-10 lg:border-l border-rule space-y-8">
                <p className="text-lg text-ink-soft font-light leading-relaxed">
                  {o.intro}
                </p>

                {o.sekcije.map((s) => (
                  <div key={s.naslov}>
                    <h3 className="text-[11px] uppercase tracking-display text-gold-deep mb-5">
                      {s.naslov}
                    </h3>
                    <ul className="space-y-4">
                      {s.stavke.map((stavka) => (
                        <li
                          key={stavka}
                          className="flex items-start gap-4 text-ink-soft border-b border-rule/40 pb-4"
                        >
                          <span className="text-gold-deep mt-1.5 flex-shrink-0">◆</span>
                          <span className="leading-relaxed">{stavka}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {o.paragraph && (
                  <p className="text-ink-soft leading-relaxed font-light">
                    {o.paragraph}
                  </p>
                )}
                {o.paragraph2 && (
                  <p className="text-ink-soft leading-relaxed font-light">
                    {o.paragraph2}
                  </p>
                )}
                {o.callout && (
                  <div className="border-l-2 border-gold-deep bg-parchment p-6">
                    <p className="font-serif text-xl italic text-green leading-snug">
                      {o.callout}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
