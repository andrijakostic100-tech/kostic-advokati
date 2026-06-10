import type { Locale } from "./types";

export type Dict = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    areas: string;
    team: string;
    blog: string;
    contact: string;
    book: string;
  };
  footer: {
    contact: string;
    office: string;
    motto: string;
    mottoAttr: string;
    privacy: string;
    terms: string;
  };
  home: {
    eyebrow: string;
    heroTitleLine1: string;
    heroTitleLine2: string;
    heroTitleLine3: string;
    heroIntro: string;
    bookCta: string;
    areasCta: string;
    quote: string;
    quoteAttr: string;
    areasTitle: string;
    areasIntro: string;
    learnMore: string;
    whyEyebrow: string;
    whyTitle1: string;
    whyTitle2: string;
    whyP1: string;
    whyP2: string;
    statSeat: string;
    statSeatLabel: string;
    statLawyers: string;
    statLawyersLabel: string;
    statLanguages: string;
    statLanguagesLabel: string;
    callusLabel: string;
    ctaTitle: string;
    ctaIntro: string;
  };
  areas: {
    short: { name: string; opis: string }[];
    eyebrowLabel: string;
    pageEyebrow: string;
    pageTitle: string;
    pageIntro: string;
    sectionLabel: string;
    detailed: AreaDetail[];
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    approachEyebrow: string;
    approachTitle1: string;
    approachTitle2: string;
    approachP1: string;
    approachP2: string;
    approachP3: string;
    valuesLabel: string;
    valuesTitle: string;
    values: { naslov: string; tekst: string }[];
    coverageLabel: string;
    coverageTitle: string;
    coverageIntro: string;
  };
  team: {
    eyebrow: string;
    title: string;
    intro: string;
    foundersLabel: string;
    associatesLabel: string;
    partners: TeamPerson[];
    associates: TeamPerson[];
    contactLabel: string;
    languagesLabel: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    formEyebrow: string;
    formTitle: string;
    fieldName: string;
    fieldEmail: string;
    fieldPhone: string;
    fieldArea: string;
    fieldMessage: string;
    fieldMessagePlaceholder: string;
    submit: string;
    sending: string;
    privacy: string;
    privacyLink: string;
    okEyebrow: string;
    okTitle: string;
    okBody: string;
    okNew: string;
    errPrefix: string;
    errSuffix: string;
    officeLabel: string;
    officeCity: string;
    addressLines: string[];
    mapLink: string;
    discretionLabel: string;
    discretionBody: string;
    areaOptions: string[];
  };
  legal: {
    privacyTitle: string;
    privacyEyebrow: string;
    privacyIntro: string;
    privacyBody: { h?: string; p: string }[];
    termsTitle: string;
    termsEyebrow: string;
    termsIntro: string;
    termsBody: { h?: string; p: string }[];
  };
};

type AreaDetail = {
  rim: string;
  slug: string;
  naziv: string;
  podnaslov: string;
  intro: string;
  sekcije: { naslov: string; stavke: string[] }[];
  paragraph?: string;
  paragraph2?: string;
  callout?: string;
};

type TeamPerson = {
  ime: string;
  pozicija: string;
  inicijali: string;
  email?: string;
  tel?: string;
  telHref?: string;
  jezici?: string;
  bio: string;
};

// ─────────────────────────────────────────────────────────────────────────
// SR (Serbian Latin) — default
// ─────────────────────────────────────────────────────────────────────────
const sr: Dict = {
  meta: {
    title: "Advokatska kancelarija Kostić Jović i partneri — Niš",
    description:
      "Advokatska kancelarija Kostić Jović i partneri — prekršajno, odštetno i krivično pravo, nepokretnosti. Zastupamo klijente širom Srbije.",
  },
  nav: {
    about: "O kancelariji",
    areas: "Oblasti prava",
    team: "Tim",
    blog: "Blog",
    contact: "Kontakt",
    book: "Zakažite konsultaciju",
  },
  footer: {
    contact: "Kontakt",
    office: "Kancelarija",
    motto: "„Teret dokazivanja je na državi, a ne na vama.”",
    mottoAttr: "— Iz prakse kancelarije",
    privacy: "Politika privatnosti",
    terms: "Uslovi",
  },
  home: {
    eyebrow: "Advokatska kancelarija · Niš",
    heroTitleLine1: "Sve je",
    heroTitleLine2: "na",
    heroTitleLine3: "dokazima.",
    heroIntro:
      "Advokatska kancelarija Kostić Jović i partneri zastupa klijente u prekršajnim, odštetnim i krivičnim postupcima — na teritoriji cele Srbije.",
    bookCta: "Zakažite konsultaciju",
    areasCta: "Oblasti prava",
    quote:
      "Kada vam preti kazna, zabrana vožnje ili kazneni poeni — nema mesta improvizaciji.",
    quoteAttr: "— Iz prakse kancelarije",
    areasTitle: "Čime se bavimo",
    areasIntro:
      "Fokusiramo se na četiri oblasti u kojima imamo najviše iskustva — zastupamo klijente pred svim prekršajnim sudovima, parničnim sudovima i krivičnim organima u Srbiji.",
    learnMore: "Saznajte više",
    whyEyebrow: "Zašto baš mi",
    whyTitle1: "Praksa koju vodi",
    whyTitle2: "princip, ne kalkulacija.",
    whyP1:
      "Polazimo od jednostavnog pravila: teret dokazivanja je na državi, a ne na vama. Svaki navod iz zahteva pažljivo proveravamo, tražimo materijalne dokaze tamo gde ih nema i dosledno štitimo vaše pravo na odbranu.",
    whyP2:
      "Zastupamo klijente pred svim prekršajnim sudovima i Prekršajnim apelacionim sudom, bez obzira na to gde se postupak vodi. Zahvaljujući razvijenoj mreži advokata saradnika, pokrivamo celu Srbiju.",
    statSeat: "Niš",
    statSeatLabel: "Sedište kancelarije",
    statLawyers: "4",
    statLawyersLabel: "Advokata i saradnika",
    statLanguages: "5",
    statLanguagesLabel: "Jezika u radu",
    callusLabel: "Pozovite nas",
    ctaTitle: "Prva konsultacija je bez naknade",
    ctaIntro:
      "Svaka saradnja počinje pažljivim razgovorom. Zakažite susret u kancelariji u Nišu ili putem telefona — odgovaramo u roku od jednog radnog dana.",
  },
  areas: {
    eyebrowLabel: "Oblast",
    pageEyebrow: "Oblasti prava",
    pageTitle: "Čime se bavimo.",
    pageIntro:
      "Fokusiramo se na četiri oblasti u kojima naša kancelarija ima najviše iskustva i rezultata. U svakom predmetu spajamo pažljivu analizu, doslednu odbranu i poštovanje pravila struke.",
    sectionLabel: "Šta obuhvata naša praksa",
    short: [
      {
        name: "Prekršajno pravo",
        opis:
          "Zastupanje okrivljenih u prekršajnim postupcima — saobraćajni, carinski i komunalni prekršaji, zaštitne mere i kazneni poeni.",
      },
      {
        name: "Odštetno pravo",
        opis:
          "Naknada materijalne i nematerijalne štete — saobraćajne nezgode, povrede na radu, padovi, ujedi pasa i druge vrste štete.",
      },
      {
        name: "Krivično pravo",
        opis:
          "Odbrana okrivljenih i zastupanje oštećenih u svim fazama krivičnog postupka — od istrage do pravnosnažne presude.",
      },
      {
        name: "Nepokretnosti",
        opis:
          "Ugovori o kupoprodaji i zakupu, posredovanje u prometu, upis u katastar, zabeležbe i rešavanje imovinsko-pravnih odnosa.",
      },
    ],
    detailed: [
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
              "Zastupanje oštećenih — podnošenje krivičnih prijava, obeležavanje u svojstvu oštećenog, imovinsko-pravni zahtev",
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
          "Svaka nepokretnost ima svoju priču — terete, prethodne vlasnike, moguće sporove. Pre potpisivanja bilo kog ugovora, pažljivo proveravamo pravni status nepokretnosti u katastru i ostalim javnim registrima, i upozoravamo klijenta na svaki rizik koji bi u budućnosti mogao da ugrozi njegovo pravo.",
        paragraph2:
          "Za klijente koji kupuju ili prodaju nepokretnost preuzimamo celokupnu pravnu stranu posla — od nacrta ugovora i provere dokumentacije, preko overe kod javnog beležnika, do upisa u katastar.",
        callout:
          "Cilj nam je da klijent uđe u posao sa punim poznavanjem pravne situacije — i da izađe iz njega sa pravom koje niko ne može uspešno osporiti.",
      },
    ],
  },
  about: {
    eyebrow: "O kancelariji",
    title: "Kancelarija u srcu Niša.",
    intro:
      "Advokatska kancelarija Kostić Jović i partneri nalazi se u poslovnom centru Kalča u Nišu. Zastupamo klijente u prekršajnim, odštetnim i krivičnim postupcima, kao i u pravnim poslovima u vezi sa nepokretnostima — na teritoriji cele Srbije.",
    approachEyebrow: "Naš pristup",
    approachTitle1: "Principi ispred",
    approachTitle2: "kalkulacije.",
    approachP1:
      "Naša kancelarija gradi praksu na jednostavnoj ideji: klijentu dugujemo pažnju, poznavanje propisa i doslednu odbranu — bez obzira na to da li se radi o prekršajnom postupku iz saobraćaja ili o zahtevu za naknadu štete od osiguranja.",
    approachP2:
      "Zastupamo klijente u celoj Srbiji zahvaljujući razvijenoj mreži advokata saradnika. Bez obzira na to u kojem gradu se vodi postupak, naš klijent ima svog advokata koji vodi njegov predmet i objašnjava mu svaki korak.",
    approachP3:
      "Pored advokatskih poslova, dugogodišnja saradnja sa ovlašćenim procenjivačima štete i sudskim veštacima različitih struka omogućava nam da u odštetnim predmetima osiguramo objektivnu i stručnu procenu koja značajno jača poziciju klijenta.",
    valuesLabel: "Vrednosti",
    valuesTitle: "Četiri pravila kuće",
    values: [
      {
        naslov: "Dostupnost",
        tekst:
          "Klijent uvek zna ko vodi njegov predmet i u kojoj je fazi. Ne delegiramo odgovornost — tu smo od početka do kraja.",
      },
      {
        naslov: "Dokazivanje",
        tekst:
          "Teret dokazivanja je na državi, ne na vama. Svaki navod suočavamo sa materijalnim dokazima — i tamo gde ih nema, insistiramo na tome.",
      },
      {
        naslov: "Doslednost",
        tekst:
          "Radimo po pravilima struke i principu in dubio pro reo. Ne preporučujemo ono što i sami ne bismo uradili da smo u klijentovoj situaciji.",
      },
      {
        naslov: "Diskrecija",
        tekst:
          "Advokatska tajna je osnov našeg poziva. Svaka informacija koju nam poverite ostaje u kancelariji.",
      },
    ],
    coverageLabel: "Teritorija",
    coverageTitle: "Zastupamo širom Srbije",
    coverageIntro:
      "Sedište kancelarije je u Nišu, ali zahvaljujući mreži advokata saradnika, zastupamo klijente pred svim prekršajnim sudovima, parničnim sudovima i krivičnim organima u Srbiji — od Beograda i Novog Sada do Kragujevca, Leskovca, Vranja i ostalih gradova.",
  },
  team: {
    eyebrow: "Tim",
    title: "Ljudi iza svake odluke.",
    intro:
      "Kancelariju čine dva osnivača-partnera, advokat saradnik i advokatski pripravnik. U svakom predmetu klijent ima svog advokata — i zna kome se obraća.",
    foundersLabel: "Osnivači · Partneri",
    associatesLabel: "Advokat saradnik · Pripravnik",
    partners: [
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
    ],
    associates: [
      {
        ime: "Milan Tufegdžić",
        pozicija: "Advokat · Saradnik",
        inicijali: "MT",
        bio:
          "Advokat saradnik u kancelariji. Učestvuje u vođenju prekršajnih, odštetnih i krivičnih predmeta i podršci klijentima u svakodnevnom radu.",
      },
      {
        ime: "Andrija Adamović",
        pozicija: "Advokatski pripravnik",
        inicijali: "AA",
        bio:
          "Advokatski pripravnik u kancelariji. Podržava tim u pripremi podnesaka, analizi dokazne građe i zastupanju pred sudovima.",
      },
    ],
    contactLabel: "Kontakt",
    languagesLabel: "Jezici",
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Pišite nam. Saslušaćemo.",
    intro:
      "Svaka saradnja počinje pažljivim razgovorom. Pozovite nas, pošaljite poruku ili dođite u kancelariju u Nišu — odgovaramo u roku od jednog radnog dana.",
    formEyebrow: "Poverljivi upit",
    formTitle: "Recite nam o čemu se radi.",
    fieldName: "Ime i prezime",
    fieldEmail: "Elektronska adresa",
    fieldPhone: "Telefon",
    fieldArea: "Oblast",
    fieldMessage: "Vaša poruka",
    fieldMessagePlaceholder:
      "Ukratko opišite o čemu se radi. Sve informacije tretiramo kao strogo poverljive.",
    submit: "Pošalji upit",
    sending: "Slanje…",
    privacy: "Slanjem upita pristajete na obradu podataka u svrhu odgovora. Pogledajte našu",
    privacyLink: "politiku privatnosti",
    okEyebrow: "Hvala vam",
    okTitle: "Vaš upit je poslat.",
    okBody:
      "Odgovaramo u roku od jednog radnog dana. Ukoliko je predmet hitan, pozovite nas direktno.",
    okNew: "Pošalji novi upit",
    errPrefix: "Slanje nije uspelo:",
    errSuffix: ". Molimo pokušajte ponovo ili nas pozovite direktno na 066 / 8420 455.",
    officeLabel: "Kancelarija",
    officeCity: "Niš",
    addressLines: [
      "Obrenovićeva 46",
      "TC Kalča, lamela D",
      "prvi sprat, lokal 109",
      "18000 Niš, Srbija",
    ],
    mapLink: "Otvori na mapi",
    discretionLabel: "Diskrecija",
    discretionBody:
      "Sve informacije koje nam dostavite tretiramo kao strogo poverljive — i pre nego što formalno postanete naš klijent. Advokatska tajna je osnov našeg poziva.",
    areaOptions: [
      "Prekršajno pravo",
      "Odštetno pravo",
      "Krivično pravo",
      "Nepokretnosti",
      "Drugo",
    ],
  },
  legal: {
    privacyTitle: "Politika privatnosti",
    privacyEyebrow: "Pravna napomena",
    privacyIntro:
      "Advokatska kancelarija Kostić Jović i partneri štiti privatnost svih korisnika sajta i poštuje važeće propise o zaštiti podataka o ličnosti.",
    privacyBody: [
      {
        p: "Ova politika privatnosti opisuje koje podatke prikupljamo putem internet stranice, kako ih koristimo i koja prava imate u vezi sa svojim podacima.",
      },
      {
        h: "Podaci koje prikupljamo",
        p: "Prikupljamo samo podatke koje nam dobrovoljno dostavite preko kontakt forme: ime, prezime, elektronsku adresu, broj telefona i tekst poruke. Te podatke koristimo isključivo radi odgovora na vaš upit.",
      },
      {
        h: "Čuvanje podataka",
        p: "Podatke čuvamo onoliko koliko je potrebno za odgovor i eventualno uspostavljanje saradnje. Nakon tog roka podaci se brišu, osim ako postoji zakonska obaveza dužeg čuvanja.",
      },
      {
        h: "Vaša prava",
        p: "Imate pravo da zatražite uvid, ispravku ili brisanje vaših podataka. Za sva pitanja u vezi sa privatnošću pišite nam na adv.andrijakostic@gmail.com.",
      },
    ],
    termsTitle: "Uslovi korišćenja",
    termsEyebrow: "Pravna napomena",
    termsIntro:
      "Korišćenjem internet stranice advokatske kancelarije Kostić Jović i partneri prihvatate uslove koji slede.",
    termsBody: [
      {
        p: "Sadržaj ove internet stranice ima isključivo informativni karakter i ne predstavlja pravni savet. Pojedinačne pravne situacije zahtevaju pojedinačnu analizu — za sve konkretne savete pozovite kancelariju.",
      },
      {
        h: "Autorska prava",
        p: "Sav sadržaj (tekstovi, fotografije, logotipi) je vlasništvo advokatske kancelarije Kostić Jović i partneri ili je korišćen uz dozvolu nosioca prava.",
      },
      {
        h: "Odgovornost",
        p: "Trudimo se da informacije na sajtu budu tačne i ažurne, ali ne preuzimamo odgovornost za eventualne greške ili posledice koje mogu nastati iz oslanjanja na sadržaj sajta bez konsultacije sa advokatom.",
      },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────
// EN
// ─────────────────────────────────────────────────────────────────────────
const en: Dict = {
  meta: {
    title: "Kostić Jović & Partners Law Firm — Niš, Serbia",
    description:
      "Kostić Jović & Partners — misdemeanor law, personal injury & damages, criminal defense, real estate. Representation across Serbia.",
  },
  nav: {
    about: "The Firm",
    areas: "Practice Areas",
    team: "Team",
    blog: "Insights",
    contact: "Contact",
    book: "Book a Consultation",
  },
  footer: {
    contact: "Contact",
    office: "Firm",
    motto: "“The burden of proof rests with the State, not with you.”",
    mottoAttr: "— From firm practice",
    privacy: "Privacy policy",
    terms: "Terms",
  },
  home: {
    eyebrow: "Law Firm · Niš, Serbia",
    heroTitleLine1: "Everything",
    heroTitleLine2: "rests on",
    heroTitleLine3: "the evidence.",
    heroIntro:
      "Kostić Jović & Partners represents clients in misdemeanor, personal injury and criminal proceedings — throughout Serbia.",
    bookCta: "Book a consultation",
    areasCta: "Practice areas",
    quote:
      "When a fine, a driving ban or penalty points are on the line — there is no room for improvisation.",
    quoteAttr: "— From firm practice",
    areasTitle: "What we do",
    areasIntro:
      "We focus on four areas where we have the deepest experience — representing clients before all misdemeanor courts, civil courts and criminal authorities in Serbia.",
    learnMore: "Learn more",
    whyEyebrow: "Why work with us",
    whyTitle1: "A practice guided by",
    whyTitle2: "principle, not calculation.",
    whyP1:
      "We start from one rule: the burden of proof rests with the State, not with you. We carefully examine every allegation, demand material evidence where it is missing, and consistently protect your right to a defense.",
    whyP2:
      "We represent clients before all misdemeanor courts and the Misdemeanor Appellate Court, regardless of where the proceedings take place. Through a network of associated attorneys, we cover the entire country.",
    statSeat: "Niš",
    statSeatLabel: "Firm headquarters",
    statLawyers: "4",
    statLawyersLabel: "Attorneys & associates",
    statLanguages: "5",
    statLanguagesLabel: "Working languages",
    callusLabel: "Call us",
    ctaTitle: "Your first consultation is on us",
    ctaIntro:
      "Every engagement begins with a careful conversation. Schedule a meeting at our Niš office or by phone — we respond within one business day.",
  },
  areas: {
    eyebrowLabel: "Area",
    pageEyebrow: "Practice Areas",
    pageTitle: "What we do.",
    pageIntro:
      "We focus on four areas where the firm has the deepest experience and results. In every matter we combine careful analysis, consistent advocacy and respect for the rules of the profession.",
    sectionLabel: "Our practice covers",
    short: [
      {
        name: "Misdemeanor law",
        opis:
          "Representing defendants in misdemeanor proceedings — traffic, customs and public-order offenses, protective measures and penalty points.",
      },
      {
        name: "Personal injury & damages",
        opis:
          "Material and non-material damages — traffic accidents, work injuries, slip-and-fall, dog bites and other claims.",
      },
      {
        name: "Criminal defense",
        opis:
          "Defending the accused and representing the injured party at every stage of criminal proceedings — from investigation to final judgment.",
      },
      {
        name: "Real estate",
        opis:
          "Purchase, sale and lease agreements, conveyancing, cadastre registration, encumbrances and property-rights disputes.",
      },
    ],
    detailed: [
      {
        rim: "I",
        slug: "prekrsajno-pravo",
        naziv: "Misdemeanor law",
        podnaslov: "When a fine, driving ban or penalty points are on the line.",
        intro:
          "We represent defendants in misdemeanor proceedings before misdemeanor courts and the Misdemeanor Appellate Court, with particular experience in road traffic safety matters.",
        sekcije: [
          {
            naslov: "Our practice covers",
            stavke: [
              "Traffic offenses — driving under the influence of alcohol or psychoactive substances, refusal to take a breath test, running a red light, speeding, reckless driving and other offenses under the Road Traffic Safety Act",
              "Protective measures and penalty points — challenging and reducing driving bans and penalty points",
              "Customs offenses — illegal import or export of goods, false declarations, customs and foreign exchange violations",
              "Offenses against public order and municipal violations",
              "Drafting written defenses in first-instance proceedings and filing appeals before the second-instance court",
            ],
          },
        ],
        paragraph:
          "In every matter, we start from the principle that the burden of proof lies with the petitioner, not with the accused. We carefully analyze the evidence, point out the absence of material proof (photographs, video recordings, calibration records of measuring devices), and consistently protect the right to a defense and the right to a fair trial guaranteed by the Constitution and the European Convention on Human Rights — including the accused's right to examine witnesses for the prosecution.",
        paragraph2:
          "Our goal is for every allegation in the petition to be backed by reliable evidence, and where no basis for liability exists, for the in dubio pro reo principle to be consistently applied.",
        callout:
          "We cover all of Serbia. Through a broad network of associated attorneys, we represent clients before all misdemeanor courts and the Misdemeanor Appellate Court, regardless of where the proceedings are conducted.",
      },
      {
        rim: "II",
        slug: "odstetno-pravo",
        naziv: "Personal injury & damages",
        podnaslov: "You recover — we handle the rest.",
        intro:
          "We specialize in damages — representing injured parties before insurance companies, courts and police authorities, and standing by you from the moment damage occurs to final payment.",
        sekcije: [
          {
            naslov: "Types of damages we handle",
            stavke: [
              "Traffic accidents — material damage to vehicles and non-material damage from injuries",
              "Workplace injuries — securing compensation from employer and insurer",
              "Falls on public surfaces, manholes, ice and unmaintained paths",
              "Dog bites and other animal-related injuries",
              "All other cases of material and non-material damage",
            ],
          },
          {
            naslov: "What we do for you",
            stavke: [
              "Collecting and completing all documentation required to claim compensation",
              "Expert assessment of material and non-material damage through our authorized assessors",
              "Filing and pursuing claims before insurance companies",
              "Representation in court proceedings to recover full compensation",
              "Representation before police authorities",
              "Collection of awarded or recognized compensation",
            ],
          },
        ],
        paragraph:
          "We represent clients at every stage — out-of-court before insurance companies, in civil litigation before the competent courts, and before police authorities. Whether the matter concerns material damage to a vehicle or non-material damage from injuries, we take on the entire process on your behalf.",
        paragraph2:
          "Thanks to our network of authorized damage assessors and our long-standing cooperation with court experts in various fields, we are able to secure professional and objective valuations that significantly strengthen our client's position in the recovery process.",
        callout:
          "Our goal is for the client to recover the maximum compensation provided by law — with minimum effort and stress on their side.",
      },
      {
        rim: "III",
        slug: "krivicno-pravo",
        naziv: "Criminal defense",
        podnaslov: "A defense where nothing is left to chance.",
        intro:
          "We represent both the accused and the injured party at every stage of criminal proceedings — from pre-trial investigation, through the main hearing, to final judgment and extraordinary legal remedies.",
        sekcije: [
          {
            naslov: "What we do",
            stavke: [
              "Defense of the accused at every stage — before police, prosecutors and courts",
              "Representation of the injured party — filing criminal complaints, asserting injured-party status, civil claims",
              "Cases concerning offenses against road safety, property, persons and official duty",
              "Drug-related offenses",
              "Appeals and extraordinary legal remedies — request for the protection of legality, reopening of proceedings",
              "Conditional release and probation proceedings",
            ],
          },
        ],
        paragraph:
          "A criminal case requires a careful, consistent defense strategy from the outset. From the first police action — interrogation, search, temporary seizure of items — to the court's final decision, anything overlooked can have consequences that are hard to undo later.",
        paragraph2:
          "We start from the presumption of innocence and consistently protect the procedural rights of the accused. We flag every violation of the law, challenge unlawfully obtained evidence, and insist that doubts be construed in favor of the accused.",
        callout:
          "In every matter we uphold the principle that liberty is the rule and detention the exception — and every exception must be subjected to the strictest justification.",
      },
      {
        rim: "IV",
        slug: "nepokretnosti",
        naziv: "Real estate",
        podnaslov: "Certainty in transactions that allow no room for guesswork.",
        intro:
          "We provide full legal support in real-estate transactions and management — from brokerage and negotiation to registration of rights in the cadastre and resolving property-rights disputes.",
        sekcije: [
          {
            naslov: "Our practice covers",
            stavke: [
              "Purchase and sale agreements for real estate (apartments, houses, commercial space, land)",
              "Lease and sub-lease agreements",
              "Life-care and gift agreements",
              "Brokerage in real-estate transactions",
              "Registration of rights in the real-estate cadastre",
              "Annotations, mortgages and encumbrances",
              "Resolving property-rights disputes; establishing ownership",
              "Civil litigation involving real estate",
            ],
          },
        ],
        paragraph:
          "Every property has a story — encumbrances, previous owners, potential disputes. Before any contract is signed, we carefully verify the legal status of the property in the cadastre and other public registers, and warn the client of any risk that could threaten their rights in the future.",
        paragraph2:
          "For clients buying or selling real estate, we take on the entire legal side of the transaction — from drafting the contract and reviewing documentation, through notarization, to registration in the cadastre.",
        callout:
          "Our goal is for the client to enter the transaction with full understanding of the legal landscape — and to leave it with a title no one can successfully challenge.",
      },
    ],
  },
  about: {
    eyebrow: "The Firm",
    title: "A firm at the heart of Niš.",
    intro:
      "Kostić Jović & Partners is based at the Kalča business center in Niš. We represent clients in misdemeanor, personal injury and criminal proceedings, as well as in real-estate matters — throughout Serbia.",
    approachEyebrow: "Our approach",
    approachTitle1: "Principle ahead of",
    approachTitle2: "calculation.",
    approachP1:
      "The firm is built on a simple idea: every client deserves attention, mastery of the law and consistent advocacy — whether the matter is a traffic misdemeanor or an insurance claim.",
    approachP2:
      "We represent clients throughout Serbia through a network of associated attorneys. No matter the city where the proceedings take place, the client has a dedicated attorney who handles the file and explains every step.",
    approachP3:
      "Long-standing cooperation with authorized damage assessors and court experts in various fields allows us to secure objective, professional valuations that strengthen our clients' position in damages matters.",
    valuesLabel: "Values",
    valuesTitle: "The four rules of the firm",
    values: [
      {
        naslov: "Availability",
        tekst:
          "The client always knows who is handling their case and at what stage. We do not delegate responsibility — we are there from start to finish.",
      },
      {
        naslov: "Proof",
        tekst:
          "The burden of proof rests with the State, not with you. We test every allegation against material evidence — and where it is absent, we say so.",
      },
      {
        naslov: "Consistency",
        tekst:
          "We work by the rules of the profession and the principle of in dubio pro reo. We do not recommend what we would not do in the client's shoes.",
      },
      {
        naslov: "Discretion",
        tekst:
          "Attorney-client privilege is the foundation of our calling. Whatever you entrust to us stays in the firm.",
      },
    ],
    coverageLabel: "Territory",
    coverageTitle: "We represent throughout Serbia",
    coverageIntro:
      "The firm is headquartered in Niš, but through a network of associated attorneys we represent clients before all misdemeanor courts, civil courts and criminal authorities in Serbia — from Belgrade and Novi Sad to Kragujevac, Leskovac, Vranje and beyond.",
  },
  team: {
    eyebrow: "Team",
    title: "The people behind every decision.",
    intro:
      "The firm consists of two founding partners, an associate attorney and a trainee attorney. In every matter the client has a dedicated lawyer — and knows whom to call.",
    foundersLabel: "Founders · Partners",
    associatesLabel: "Associate · Trainee",
    partners: [
      {
        ime: "Andrija Kostić",
        pozicija: "Founder · Partner · Attorney",
        inicijali: "AK",
        email: "adv.andrijakostic@gmail.com",
        tel: "066 / 8420 455",
        telHref: "+381668420455",
        jezici: "Serbian · English · Italian",
        bio:
          "Attorney and co-founder of the firm. Focuses on misdemeanor, personal injury and criminal law, with particular emphasis on traffic offenses and damages arising from road accidents. Actively represents clients throughout Serbia.",
      },
      {
        ime: "Aleksandar N. Jović",
        pozicija: "Founder · Partner · Attorney",
        inicijali: "AJ",
        email: "aleksandarn.jovic@gmail.com",
        tel: "064 / 9359 118",
        telHref: "+381649359118",
        jezici: "Serbian · English · French",
        bio:
          "Attorney and co-founder of the firm. Represents clients in misdemeanor, personal injury and criminal proceedings, as well as in real-estate matters. Long-standing experience in handling damages cases.",
      },
    ],
    associates: [
      {
        ime: "Milan Tufegdžić",
        pozicija: "Attorney · Associate",
        inicijali: "MT",
        bio:
          "Associate attorney with the firm. Works on misdemeanor, personal injury and criminal matters and supports clients in daily operations.",
      },
      {
        ime: "Andrija Adamović",
        pozicija: "Trainee Attorney",
        inicijali: "AA",
        bio:
          "Trainee attorney. Supports the team with drafting submissions, evidence analysis and representation before the courts.",
      },
    ],
    contactLabel: "Contact",
    languagesLabel: "Languages",
  },
  contact: {
    eyebrow: "Contact",
    title: "Write to us. We listen.",
    intro:
      "Every engagement begins with a careful conversation. Call us, send a message, or visit the office in Niš — we respond within one business day.",
    formEyebrow: "Confidential inquiry",
    formTitle: "Tell us what this is about.",
    fieldName: "Full name",
    fieldEmail: "Email address",
    fieldPhone: "Phone",
    fieldArea: "Area",
    fieldMessage: "Your message",
    fieldMessagePlaceholder:
      "Briefly describe the matter. All information is treated as strictly confidential.",
    submit: "Send inquiry",
    sending: "Sending…",
    privacy: "By sending, you consent to data processing for the purpose of replying. See our",
    privacyLink: "privacy policy",
    okEyebrow: "Thank you",
    okTitle: "Your inquiry has been sent.",
    okBody:
      "We respond within one business day. If the matter is urgent, please call us directly.",
    okNew: "Send another inquiry",
    errPrefix: "Sending failed:",
    errSuffix: ". Please try again or call us directly at +381 66 842 0455.",
    officeLabel: "Office",
    officeCity: "Niš",
    addressLines: [
      "Obrenovićeva 46",
      "Kalča Shopping Center, Lamela D",
      "1st floor, unit 109",
      "18000 Niš, Serbia",
    ],
    mapLink: "Open in maps",
    discretionLabel: "Discretion",
    discretionBody:
      "All information you provide is treated as strictly confidential — even before you formally become our client. Attorney-client privilege is the foundation of our profession.",
    areaOptions: [
      "Misdemeanor law",
      "Personal injury & damages",
      "Criminal defense",
      "Real estate",
      "Other",
    ],
  },
  legal: {
    privacyTitle: "Privacy policy",
    privacyEyebrow: "Legal notice",
    privacyIntro:
      "Kostić Jović & Partners protects the privacy of all website visitors and complies with applicable data protection laws.",
    privacyBody: [
      { p: "This policy describes what data we collect through the website, how we use it, and what rights you have." },
      { h: "Data we collect", p: "We only collect data you voluntarily provide through the contact form: name, email, phone and message text. We use this data solely to reply to your inquiry." },
      { h: "Data retention", p: "We retain data only as long as needed to reply and potentially establish cooperation. After that period the data is deleted, unless a longer retention period is required by law." },
      { h: "Your rights", p: "You may request access, correction or deletion of your data. For privacy matters, write to adv.andrijakostic@gmail.com." },
    ],
    termsTitle: "Terms of use",
    termsEyebrow: "Legal notice",
    termsIntro:
      "By using the website of Kostić Jović & Partners you agree to the terms below.",
    termsBody: [
      { p: "The content of this website is informational only and does not constitute legal advice. Each legal situation requires individual analysis — for specific advice please contact the firm." },
      { h: "Copyright", p: "All content (texts, images, logos) is the property of Kostić Jović & Partners or used with permission of the rights holder." },
      { h: "Liability", p: "We take care that information on the site is accurate and up to date, but we accept no responsibility for any errors or consequences arising from reliance on the site without consulting an attorney." },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────
// DE (German)
// ─────────────────────────────────────────────────────────────────────────
const de: Dict = {
  meta: {
    title: "Rechtsanwaltskanzlei Kostić Jović & Partners — Niš, Serbien",
    description:
      "Kostić Jović & Partners — Ordnungswidrigkeitenrecht, Schadensersatz, Strafrecht, Immobilien. Vertretung in ganz Serbien.",
  },
  nav: {
    about: "Die Kanzlei",
    areas: "Tätigkeitsfelder",
    team: "Team",
    blog: "Magazin",
    contact: "Kontakt",
    book: "Beratung vereinbaren",
  },
  footer: {
    contact: "Kontakt",
    office: "Kanzlei",
    motto: "„Die Beweislast liegt beim Staat, nicht bei Ihnen.“",
    mottoAttr: "— Aus der Kanzleipraxis",
    privacy: "Datenschutz",
    terms: "Nutzungsbedingungen",
  },
  home: {
    eyebrow: "Rechtsanwaltskanzlei · Niš, Serbien",
    heroTitleLine1: "Alles ruht",
    heroTitleLine2: "auf den",
    heroTitleLine3: "Beweisen.",
    heroIntro:
      "Kostić Jović & Partners vertritt Mandanten in Ordnungswidrigkeiten-, Schadensersatz- und Strafverfahren — in ganz Serbien.",
    bookCta: "Beratung vereinbaren",
    areasCta: "Tätigkeitsfelder",
    quote:
      "Wenn Strafe, Fahrverbot oder Punkte drohen — ist kein Platz für Improvisation.",
    quoteAttr: "— Aus der Kanzleipraxis",
    areasTitle: "Was wir tun",
    areasIntro:
      "Wir konzentrieren uns auf vier Bereiche, in denen wir die größte Erfahrung haben — wir vertreten Mandanten vor allen Ordnungswidrigkeitengerichten, Zivilgerichten und Strafbehörden in Serbien.",
    learnMore: "Mehr erfahren",
    whyEyebrow: "Warum gerade wir",
    whyTitle1: "Eine Praxis geleitet vom",
    whyTitle2: "Prinzip, nicht von der Kalkulation.",
    whyP1:
      "Wir beginnen mit einer einfachen Regel: Die Beweislast liegt beim Staat, nicht bei Ihnen. Jeden Vorwurf prüfen wir sorgfältig, fordern materielle Beweise dort, wo sie fehlen, und schützen konsequent Ihr Recht auf Verteidigung.",
    whyP2:
      "Wir vertreten Mandanten vor allen Ordnungswidrigkeitengerichten und dem Berufungsgericht für Ordnungswidrigkeiten — unabhängig davon, wo das Verfahren stattfindet. Dank eines Netzwerks von Korrespondenzanwälten decken wir ganz Serbien ab.",
    statSeat: "Niš",
    statSeatLabel: "Kanzleisitz",
    statLawyers: "4",
    statLawyersLabel: "Anwälte & Mitarbeiter",
    statLanguages: "5",
    statLanguagesLabel: "Arbeitssprachen",
    callusLabel: "Rufen Sie an",
    ctaTitle: "Die erste Beratung ist kostenfrei",
    ctaIntro:
      "Jede Zusammenarbeit beginnt mit einem aufmerksamen Gespräch. Vereinbaren Sie einen Termin in unserer Kanzlei in Niš oder telefonisch — wir antworten innerhalb eines Werktags.",
  },
  areas: {
    eyebrowLabel: "Bereich",
    pageEyebrow: "Tätigkeitsfelder",
    pageTitle: "Was wir tun.",
    pageIntro:
      "Wir konzentrieren uns auf vier Bereiche, in denen die Kanzlei die größte Erfahrung und Erfolge hat. In jedem Mandat verbinden wir sorgfältige Analyse, konsequente Verteidigung und Respekt vor den Regeln des Berufs.",
    sectionLabel: "Unsere Praxis umfasst",
    short: [
      {
        name: "Ordnungswidrigkeitenrecht",
        opis:
          "Vertretung von Betroffenen in Bußgeldverfahren — Verkehr, Zoll und öffentliche Ordnung, Schutzmaßnahmen und Punkte.",
      },
      {
        name: "Schadensersatzrecht",
        opis:
          "Materieller und immaterieller Schadensersatz — Verkehrsunfälle, Arbeitsunfälle, Stürze, Hundebisse und weitere Ansprüche.",
      },
      {
        name: "Strafrecht",
        opis:
          "Verteidigung Beschuldigter und Vertretung Geschädigter in allen Phasen des Strafverfahrens — von der Ermittlung bis zum rechtskräftigen Urteil.",
      },
      {
        name: "Immobilienrecht",
        opis:
          "Kauf-, Verkaufs- und Mietverträge, Vermittlung, Eintragung im Kataster, Belastungen und Eigentumsstreitigkeiten.",
      },
    ],
    detailed: [
      {
        rim: "I",
        slug: "prekrsajno-pravo",
        naziv: "Ordnungswidrigkeitenrecht",
        podnaslov: "Wenn Strafe, Fahrverbot oder Punkte drohen.",
        intro:
          "Wir vertreten Betroffene in Bußgeldverfahren vor Ordnungswidrigkeitengerichten und dem Berufungsgericht für Ordnungswidrigkeiten — mit besonderem Schwerpunkt auf Straßenverkehrssicherheit.",
        sekcije: [
          {
            naslov: "Unsere Praxis umfasst",
            stavke: [
              "Verkehrsdelikte — Trunkenheit am Steuer, Verweigerung des Alkoholtests, Rotlichtverstoß, Geschwindigkeitsüberschreitung, rücksichtsloses Fahren und weitere Verstöße",
              "Schutzmaßnahmen und Punkte — Anfechtung und Milderung von Fahrverboten sowie Verfahren zu erteilten Punkten",
              "Zollordnungswidrigkeiten — unzulässige Wareneinfuhr/-ausfuhr, unrichtige Erklärungen, Zoll- und Devisenverstöße",
              "Verstöße gegen die öffentliche Ordnung und kommunale Ordnungswidrigkeiten",
              "Schriftliche Verteidigung in der ersten Instanz und Berufungsschriftsätze",
            ],
          },
        ],
        paragraph:
          "Wir gehen vom Grundsatz aus, dass die Beweislast beim Antragsteller liegt — nicht beim Betroffenen. Wir analysieren das Beweismaterial sorgfältig, weisen auf fehlende materielle Beweise hin (Fotos, Videos, Kalibrierungsnachweise der Messgeräte) und schützen konsequent das Recht auf Verteidigung und auf ein faires Verfahren — einschließlich des Rechts, Belastungszeugen zu befragen.",
        paragraph2:
          "Unser Ziel: Jeder Vorwurf muss durch verlässliche Beweise gestützt werden — und wo keine Grundlage für eine Haftung besteht, gilt konsequent in dubio pro reo.",
        callout:
          "Wir decken ganz Serbien ab. Dank eines breiten Korrespondenznetzwerks vertreten wir Mandanten vor allen Ordnungswidrigkeitengerichten — unabhängig vom Verfahrensort.",
      },
      {
        rim: "II",
        slug: "odstetno-pravo",
        naziv: "Schadensersatzrecht",
        podnaslov: "Sie erholen sich — alles andere übernehmen wir.",
        intro:
          "Wir sind auf Schadensersatzrecht spezialisiert — vertreten Geschädigte gegenüber Versicherungen, Gerichten und Polizei und stehen Ihnen vom Schadensereignis bis zur Auszahlung zur Seite.",
        sekcije: [
          {
            naslov: "Schadensarten",
            stavke: [
              "Verkehrsunfälle — Sachschäden am Fahrzeug und Schmerzensgeld bei Verletzungen",
              "Arbeitsunfälle — Sicherung der Entschädigung von Arbeitgeber und Versicherung",
              "Stürze auf öffentlichen Flächen, in Schächten, auf Eis und ungepflegten Wegen",
              "Hundebisse und andere Tierschäden",
              "Alle weiteren Fälle materieller und immaterieller Schäden",
            ],
          },
          {
            naslov: "Was wir für Sie tun",
            stavke: [
              "Beschaffung und Komplettierung der erforderlichen Unterlagen",
              "Sachverständige Bewertung des Schadens durch zertifizierte Gutachter",
              "Einreichung und Verfolgung von Ansprüchen bei Versicherungen",
              "Vertretung in Zivilverfahren zur Durchsetzung der vollen Entschädigung",
              "Vertretung gegenüber den Polizeibehörden",
              "Einziehung des zuerkannten Betrags",
            ],
          },
        ],
        paragraph:
          "Wir vertreten Mandanten in allen Phasen — außergerichtlich gegenüber Versicherungen, in Zivilverfahren vor den zuständigen Gerichten sowie gegenüber den Polizeibehörden. Egal ob materieller Fahrzeugschaden oder Schmerzensgeld nach Verletzungen — wir übernehmen den gesamten Prozess.",
        paragraph2:
          "Durch das Netzwerk zertifizierter Sachverständiger und unsere langjährige Zusammenarbeit mit Gerichtsgutachtern aus verschiedenen Fachrichtungen erreichen wir objektive und fachkundige Bewertungen, die die Position des Mandanten erheblich stärken.",
        callout:
          "Unser Ziel: maximale, gesetzlich zustehende Entschädigung — mit minimalem Aufwand und Stress für den Mandanten.",
      },
      {
        rim: "III",
        slug: "krivicno-pravo",
        naziv: "Strafrecht",
        podnaslov: "Eine Verteidigung, bei der nichts dem Zufall überlassen wird.",
        intro:
          "Wir vertreten Beschuldigte und Geschädigte in allen Phasen des Strafverfahrens — vom Ermittlungsverfahren über die Hauptverhandlung bis zum rechtskräftigen Urteil und außerordentlichen Rechtsmitteln.",
        sekcije: [
          {
            naslov: "Was wir tun",
            stavke: [
              "Verteidigung in allen Verfahrensstadien — vor Polizei, Staatsanwaltschaft und Gericht",
              "Vertretung von Geschädigten — Strafanzeige, Geschädigtenstellung, Adhäsionsverfahren",
              "Verfahren zu Verkehrsstraftaten, Eigentums-, Personen- und Amtsdelikten",
              "Betäubungsmittelstrafrecht",
              "Berufungen und außerordentliche Rechtsmittel — Antrag auf Wahrung der Gesetzlichkeit, Wiederaufnahme",
              "Bewährungs- und Führungsaufsichtsverfahren",
            ],
          },
        ],
        paragraph:
          "Ein Strafverfahren verlangt von Anfang an eine sorgfältige und konsequente Verteidigungsstrategie. Von der ersten polizeilichen Maßnahme — Vernehmung, Durchsuchung, vorläufige Beschlagnahme — bis zur letzten Gerichtsentscheidung kann jede Versäumnis Folgen haben, die später schwer zu korrigieren sind.",
        paragraph2:
          "Wir gehen von der Unschuldsvermutung aus und schützen die Verfahrensrechte des Beschuldigten konsequent. Wir rügen jede Gesetzesverletzung, fechten rechtswidrig erlangte Beweise an und bestehen darauf, dass Zweifel zugunsten des Beschuldigten ausgelegt werden.",
        callout:
          "In jedem Mandat vertreten wir den Grundsatz: Freiheit ist die Regel, Freiheitsentziehung die Ausnahme — und jede Ausnahme bedarf strengster Begründung.",
      },
      {
        rim: "IV",
        slug: "nepokretnosti",
        naziv: "Immobilienrecht",
        podnaslov: "Sicherheit in Geschäften, die keine Improvisation dulden.",
        intro:
          "Wir bieten umfassende rechtliche Unterstützung im Immobiliengeschäft — von Vermittlung und Verhandlung bis zur Eintragung der Rechte im Kataster und der Klärung von Eigentumsverhältnissen.",
        sekcije: [
          {
            naslov: "Unsere Praxis umfasst",
            stavke: [
              "Kauf- und Verkaufsverträge (Wohnungen, Häuser, Gewerbeflächen, Grundstücke)",
              "Miet- und Untermietverträge",
              "Verträge über lebenslange Unterhaltung und Schenkung",
              "Vermittlung im Immobilienverkehr",
              "Eintragung von Rechten im Immobilienkataster",
              "Vormerkungen, Hypotheken und Belastungen",
              "Klärung von Eigentumsverhältnissen, Feststellung des Eigentumsrechts",
              "Zivilverfahren zu Immobilien",
            ],
          },
        ],
        paragraph:
          "Jede Immobilie hat ihre Geschichte — Belastungen, frühere Eigentümer, mögliche Streitigkeiten. Vor der Unterzeichnung eines Vertrags prüfen wir den rechtlichen Status der Immobilie im Kataster und in anderen öffentlichen Registern und weisen den Mandanten auf jedes Risiko hin.",
        paragraph2:
          "Für Mandanten, die kaufen oder verkaufen, übernehmen wir die gesamte rechtliche Seite — vom Vertragsentwurf über die Notarprüfung bis zur Eintragung im Kataster.",
        callout:
          "Unser Ziel: Der Mandant betritt das Geschäft mit vollem Verständnis der rechtlichen Lage — und verlässt es mit einem Recht, das niemand erfolgreich anfechten kann.",
      },
    ],
  },
  about: {
    eyebrow: "Die Kanzlei",
    title: "Eine Kanzlei im Herzen von Niš.",
    intro:
      "Kostić Jović & Partners hat ihren Sitz im Geschäftszentrum Kalča in Niš. Wir vertreten Mandanten in Ordnungswidrigkeiten-, Schadensersatz- und Strafverfahren sowie in Immobilienangelegenheiten — in ganz Serbien.",
    approachEyebrow: "Unser Ansatz",
    approachTitle1: "Prinzipien vor",
    approachTitle2: "Kalkulation.",
    approachP1:
      "Die Kanzlei beruht auf einer einfachen Idee: Jeder Mandant verdient Aufmerksamkeit, Rechtskenntnis und konsequente Verteidigung — ob es um eine Verkehrsordnungswidrigkeit oder einen Versicherungsanspruch geht.",
    approachP2:
      "Dank eines Netzwerks von Korrespondenzanwälten vertreten wir Mandanten in ganz Serbien. Egal in welcher Stadt das Verfahren läuft — der Mandant hat seinen Anwalt, der die Akte führt und jeden Schritt erklärt.",
    approachP3:
      "Langjährige Zusammenarbeit mit zertifizierten Schadensgutachtern und Gerichtsexperten ermöglicht uns objektive Bewertungen, die die Position unserer Mandanten in Schadensfällen erheblich stärken.",
    valuesLabel: "Werte",
    valuesTitle: "Die vier Regeln des Hauses",
    values: [
      { naslov: "Erreichbarkeit", tekst: "Der Mandant weiß stets, wer seine Akte führt und in welchem Stadium sie sich befindet. Wir delegieren keine Verantwortung — wir sind von Anfang bis Ende dabei." },
      { naslov: "Beweis", tekst: "Die Beweislast liegt beim Staat, nicht bei Ihnen. Wir konfrontieren jeden Vorwurf mit materiellen Beweisen — und wo sie fehlen, sagen wir es." },
      { naslov: "Konsequenz", tekst: "Wir arbeiten nach den Regeln des Berufs und dem Grundsatz in dubio pro reo. Wir empfehlen nichts, was wir an Stelle des Mandanten nicht selbst täten." },
      { naslov: "Diskretion", tekst: "Das Anwaltsgeheimnis ist die Grundlage unseres Berufs. Was Sie uns anvertrauen, bleibt in der Kanzlei." },
    ],
    coverageLabel: "Territorium",
    coverageTitle: "Wir vertreten in ganz Serbien",
    coverageIntro:
      "Sitz der Kanzlei ist Niš, doch dank des Korrespondenznetzwerks vertreten wir Mandanten vor allen Ordnungswidrigkeiten-, Zivil- und Strafgerichten in Serbien — von Belgrad und Novi Sad bis Kragujevac, Leskovac, Vranje und weiteren Städten.",
  },
  team: {
    eyebrow: "Team",
    title: "Die Menschen hinter jeder Entscheidung.",
    intro:
      "Die Kanzlei besteht aus zwei Gründungspartnern, einem Mitarbeiteranwalt und einem Rechtsreferendar. In jedem Mandat hat der Mandant seinen Anwalt — und weiß, an wen er sich wendet.",
    foundersLabel: "Gründer · Partner",
    associatesLabel: "Mitarbeiter · Referendar",
    partners: [
      {
        ime: "Andrija Kostić",
        pozicija: "Gründer · Partner · Rechtsanwalt",
        inicijali: "AK",
        email: "adv.andrijakostic@gmail.com",
        tel: "066 / 8420 455",
        telHref: "+381668420455",
        jezici: "Serbisch · Englisch · Italienisch",
        bio:
          "Rechtsanwalt und Mitgründer der Kanzlei. Schwerpunkte: Ordnungswidrigkeitenrecht, Schadensersatz und Strafrecht, insbesondere Verkehrsordnungswidrigkeiten und Schadensersatz aus Verkehrsunfällen.",
      },
      {
        ime: "Aleksandar N. Jović",
        pozicija: "Gründer · Partner · Rechtsanwalt",
        inicijali: "AJ",
        email: "aleksandarn.jovic@gmail.com",
        tel: "064 / 9359 118",
        telHref: "+381649359118",
        jezici: "Serbisch · Englisch · Französisch",
        bio:
          "Rechtsanwalt und Mitgründer der Kanzlei. Vertritt Mandanten in Ordnungswidrigkeiten-, Schadensersatz- und Strafverfahren sowie in Immobilienangelegenheiten. Langjährige Erfahrung in Schadensfällen.",
      },
    ],
    associates: [
      {
        ime: "Milan Tufegdžić",
        pozicija: "Rechtsanwalt · Mitarbeiter",
        inicijali: "MT",
        bio:
          "Mitarbeiteranwalt der Kanzlei. Unterstützt die Bearbeitung von Ordnungswidrigkeits-, Schadensersatz- und Strafsachen.",
      },
      {
        ime: "Andrija Adamović",
        pozicija: "Rechtsreferendar",
        inicijali: "AA",
        bio:
          "Rechtsreferendar. Unterstützt das Team bei Schriftsätzen, Beweisanalyse und Vertretung vor Gericht.",
      },
    ],
    contactLabel: "Kontakt",
    languagesLabel: "Sprachen",
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Schreiben Sie uns. Wir hören zu.",
    intro:
      "Jede Zusammenarbeit beginnt mit einem aufmerksamen Gespräch. Rufen Sie an, schreiben Sie uns oder besuchen Sie unsere Kanzlei in Niš — wir antworten innerhalb eines Werktags.",
    formEyebrow: "Vertrauliche Anfrage",
    formTitle: "Sagen Sie uns, worum es geht.",
    fieldName: "Name",
    fieldEmail: "E-Mail-Adresse",
    fieldPhone: "Telefon",
    fieldArea: "Bereich",
    fieldMessage: "Ihre Nachricht",
    fieldMessagePlaceholder:
      "Beschreiben Sie kurz Ihr Anliegen. Alle Informationen werden streng vertraulich behandelt.",
    submit: "Anfrage senden",
    sending: "Wird gesendet…",
    privacy: "Mit dem Absenden stimmen Sie der Datenverarbeitung zur Beantwortung zu. Siehe unsere",
    privacyLink: "Datenschutzerklärung",
    okEyebrow: "Vielen Dank",
    okTitle: "Ihre Anfrage wurde gesendet.",
    okBody:
      "Wir antworten innerhalb eines Werktags. Bei dringenden Anliegen rufen Sie uns bitte direkt an.",
    okNew: "Neue Anfrage senden",
    errPrefix: "Senden fehlgeschlagen:",
    errSuffix: ". Bitte versuchen Sie es erneut oder rufen Sie +381 66 842 0455 an.",
    officeLabel: "Kanzlei",
    officeCity: "Niš",
    addressLines: [
      "Obrenovićeva 46",
      "Einkaufszentrum Kalča, Lamela D",
      "1. Stock, Lokal 109",
      "18000 Niš, Serbien",
    ],
    mapLink: "In Karten öffnen",
    discretionLabel: "Diskretion",
    discretionBody:
      "Alle uns übermittelten Informationen werden streng vertraulich behandelt — auch bevor Sie offiziell unser Mandant werden. Das Anwaltsgeheimnis ist die Grundlage unseres Berufs.",
    areaOptions: [
      "Ordnungswidrigkeitenrecht",
      "Schadensersatzrecht",
      "Strafrecht",
      "Immobilienrecht",
      "Sonstiges",
    ],
  },
  legal: {
    privacyTitle: "Datenschutzerklärung",
    privacyEyebrow: "Rechtlicher Hinweis",
    privacyIntro:
      "Kostić Jović & Partners schützt die Privatsphäre aller Website-Besucher und befolgt die geltenden Datenschutzgesetze.",
    privacyBody: [
      { p: "Diese Erklärung beschreibt, welche Daten wir über die Website erheben, wie wir sie verwenden und welche Rechte Sie haben." },
      { h: "Erhobene Daten", p: "Wir erheben nur Daten, die Sie freiwillig über das Kontaktformular angeben: Name, E-Mail, Telefon, Nachricht. Diese Daten dienen ausschließlich zur Beantwortung Ihrer Anfrage." },
      { h: "Speicherung", p: "Wir speichern die Daten nur so lange, wie zur Beantwortung und ggf. Mandatsbegründung erforderlich. Anschließend werden sie gelöscht, sofern keine gesetzliche Aufbewahrungspflicht besteht." },
      { h: "Ihre Rechte", p: "Sie können Auskunft, Berichtigung oder Löschung Ihrer Daten verlangen. Anfragen an: adv.andrijakostic@gmail.com." },
    ],
    termsTitle: "Nutzungsbedingungen",
    termsEyebrow: "Rechtlicher Hinweis",
    termsIntro:
      "Mit der Nutzung der Website von Kostić Jović & Partners stimmen Sie den folgenden Bedingungen zu.",
    termsBody: [
      { p: "Die Inhalte dieser Website dienen nur zur Information und stellen keine Rechtsberatung dar. Jeder Sachverhalt erfordert eine eigene Beurteilung — wenden Sie sich für konkrete Beratung an die Kanzlei." },
      { h: "Urheberrecht", p: "Sämtliche Inhalte (Texte, Bilder, Logos) sind Eigentum der Kanzlei oder mit Erlaubnis der Rechteinhaber verwendet." },
      { h: "Haftung", p: "Wir bemühen uns um Richtigkeit und Aktualität, übernehmen aber keine Haftung für Fehler oder Folgen einer Nutzung ohne anwaltliche Beratung." },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────
// IT (Italian)
// ─────────────────────────────────────────────────────────────────────────
const it: Dict = {
  meta: {
    title: "Studio Legale Kostić Jović & Partners — Niš, Serbia",
    description:
      "Kostić Jović & Partners — diritto sanzionatorio amministrativo, risarcimento danni, diritto penale, immobili. Assistenza in tutta la Serbia.",
  },
  nav: {
    about: "Lo Studio",
    areas: "Aree di pratica",
    team: "Team",
    blog: "Rivista",
    contact: "Contatti",
    book: "Prenota una consulenza",
  },
  footer: {
    contact: "Contatti",
    office: "Studio",
    motto: "«L'onere della prova è dello Stato, non vostro.»",
    mottoAttr: "— Dalla prassi dello studio",
    privacy: "Informativa sulla privacy",
    terms: "Condizioni",
  },
  home: {
    eyebrow: "Studio legale · Niš, Serbia",
    heroTitleLine1: "Tutto",
    heroTitleLine2: "dipende",
    heroTitleLine3: "dalle prove.",
    heroIntro:
      "Kostić Jović & Partners assiste i clienti in procedimenti per illeciti amministrativi, risarcimento danni e procedimenti penali — in tutta la Serbia.",
    bookCta: "Prenota una consulenza",
    areasCta: "Aree di pratica",
    quote:
      "Quando rischiate una sanzione, il ritiro della patente o punti — non c'è spazio per l'improvvisazione.",
    quoteAttr: "— Dalla prassi dello studio",
    areasTitle: "Cosa facciamo",
    areasIntro:
      "Ci concentriamo su quattro aree in cui abbiamo la maggiore esperienza — assistiamo clienti dinanzi a tutti i giudici per gli illeciti amministrativi, ai tribunali civili e alle autorità penali in Serbia.",
    learnMore: "Scopri di più",
    whyEyebrow: "Perché noi",
    whyTitle1: "Una pratica guidata dal",
    whyTitle2: "principio, non dal calcolo.",
    whyP1:
      "Partiamo da una regola semplice: l'onere della prova spetta allo Stato, non a voi. Esaminiamo con cura ogni contestazione, esigiamo prove materiali laddove mancano e tuteliamo con coerenza il vostro diritto alla difesa.",
    whyP2:
      "Assistiamo clienti dinanzi a tutti i giudici per gli illeciti amministrativi e alla Corte d'appello per gli illeciti — a prescindere dalla sede del procedimento. Grazie a una rete di corrispondenti, copriamo tutto il Paese.",
    statSeat: "Niš",
    statSeatLabel: "Sede dello studio",
    statLawyers: "4",
    statLawyersLabel: "Avvocati e collaboratori",
    statLanguages: "5",
    statLanguagesLabel: "Lingue di lavoro",
    callusLabel: "Chiamateci",
    ctaTitle: "La prima consulenza è gratuita",
    ctaIntro:
      "Ogni collaborazione comincia con un colloquio attento. Fissate un incontro in studio a Niš o telefonico — rispondiamo entro un giorno lavorativo.",
  },
  areas: {
    eyebrowLabel: "Area",
    pageEyebrow: "Aree di pratica",
    pageTitle: "Cosa facciamo.",
    pageIntro:
      "Ci concentriamo su quattro aree in cui lo studio vanta la maggiore esperienza e risultati. In ogni caso uniamo analisi accurata, difesa coerente e rispetto delle regole della professione.",
    sectionLabel: "La nostra pratica include",
    short: [
      {
        name: "Illeciti amministrativi",
        opis:
          "Difesa nei procedimenti amministrativi — illeciti stradali, doganali e di ordine pubblico, misure protettive e punti.",
      },
      {
        name: "Risarcimento danni",
        opis:
          "Danni patrimoniali e non patrimoniali — incidenti stradali, infortuni sul lavoro, cadute, morsi di cani e altri sinistri.",
      },
      {
        name: "Diritto penale",
        opis:
          "Difesa degli indagati e assistenza alle parti lese in tutte le fasi del procedimento — dall'indagine alla sentenza definitiva.",
      },
      {
        name: "Immobiliare",
        opis:
          "Contratti di compravendita e locazione, mediazione, iscrizione nel catasto, annotazioni e controversie sui diritti reali.",
      },
    ],
    detailed: [
      {
        rim: "I",
        slug: "prekrsajno-pravo",
        naziv: "Illeciti amministrativi",
        podnaslov: "Quando rischiate una sanzione, il ritiro della patente o punti.",
        intro:
          "Assistiamo i contravventori nei procedimenti dinanzi ai giudici per gli illeciti e alla Corte d'appello, con particolare esperienza nella sicurezza stradale.",
        sekcije: [
          {
            naslov: "La nostra pratica include",
            stavke: [
              "Illeciti stradali — guida in stato di ebbrezza o sotto effetto di sostanze, rifiuto dell'alcoltest, passaggio col rosso, eccesso di velocità, guida pericolosa e altri illeciti",
              "Misure protettive e punti — impugnazione e attenuazione del ritiro della patente e gestione dei punti",
              "Illeciti doganali — introduzione/esportazione illecita, dichiarazioni inesatte, violazioni valutarie",
              "Illeciti contro l'ordine pubblico e illeciti comunali",
              "Redazione di memorie difensive di primo grado e ricorsi in appello",
            ],
          },
        ],
        paragraph:
          "Partiamo dal principio che l'onere della prova è del ricorrente e non del contravventore. Analizziamo le prove con cura, evidenziamo l'assenza di riscontri materiali (foto, video, registri di taratura) e tuteliamo coerentemente il diritto alla difesa e al giusto processo — incluso il diritto di esaminare i testimoni d'accusa.",
        paragraph2:
          "Il nostro obiettivo: ogni contestazione deve essere supportata da prove attendibili e, ove manchi il fondamento della responsabilità, va applicato in dubio pro reo.",
        callout:
          "Copriamo tutta la Serbia. Grazie alla rete di corrispondenti, assistiamo clienti dinanzi a tutti i giudici per gli illeciti, indipendentemente dalla sede del procedimento.",
      },
      {
        rim: "II",
        slug: "odstetno-pravo",
        naziv: "Risarcimento danni",
        podnaslov: "Voi vi rimettete — al resto pensiamo noi.",
        intro:
          "Specializzati nel risarcimento danni — rappresentiamo i danneggiati davanti a compagnie assicurative, tribunali e autorità di pubblica sicurezza, dal momento dell'evento fino al pagamento finale.",
        sekcije: [
          {
            naslov: "Tipologie di danno",
            stavke: [
              "Incidenti stradali — danno materiale al veicolo e danno non patrimoniale da lesioni",
              "Infortuni sul lavoro — risarcimento dal datore di lavoro e dall'assicuratore",
              "Cadute su spazi pubblici, in tombini, su ghiaccio o percorsi non manutenuti",
              "Morsi di cani e altri animali",
              "Ogni altro caso di danno patrimoniale o non patrimoniale",
            ],
          },
          {
            naslov: "Cosa facciamo per voi",
            stavke: [
              "Raccolta e completamento della documentazione necessaria",
              "Valutazione tecnica del danno tramite periti autorizzati",
              "Presentazione e gestione delle richieste alle assicurazioni",
              "Assistenza in giudizio per ottenere il pieno risarcimento",
              "Rappresentanza davanti alle autorità di pubblica sicurezza",
              "Incasso delle somme riconosciute o liquidate",
            ],
          },
        ],
        paragraph:
          "Assistiamo i clienti in ogni fase — stragiudiziale presso le assicurazioni, contenziosa dinanzi ai tribunali e procedure presso le autorità di pubblica sicurezza. Che si tratti di danni al veicolo o di danni da lesioni, assumiamo l'intera gestione al posto vostro.",
        paragraph2:
          "Grazie alla rete di periti autorizzati e alla collaborazione decennale con consulenti tecnici dei tribunali, garantiamo valutazioni obiettive che rafforzano la posizione del cliente nel recupero.",
        callout:
          "L'obiettivo: ottenere il massimo risarcimento previsto dalla legge, con il minimo carico per il cliente.",
      },
      {
        rim: "III",
        slug: "krivicno-pravo",
        naziv: "Diritto penale",
        podnaslov: "Una difesa in cui nulla è lasciato al caso.",
        intro:
          "Assistiamo indagati e parti lese in tutte le fasi del procedimento penale — dall'indagine al dibattimento, fino alla sentenza definitiva e ai mezzi straordinari di impugnazione.",
        sekcije: [
          {
            naslov: "Cosa facciamo",
            stavke: [
              "Difesa in ogni fase — davanti a polizia, procura e tribunale",
              "Assistenza alle parti lese — denunce, costituzione di parte lesa, azione civile",
              "Reati contro la sicurezza stradale, il patrimonio, la persona e i doveri d'ufficio",
              "Reati in materia di stupefacenti",
              "Appelli e mezzi straordinari — ricorso per la legittimità, revisione",
              "Procedure di liberazione condizionale e affidamento",
            ],
          },
        ],
        paragraph:
          "Il procedimento penale richiede una strategia attenta e coerente fin dall'inizio. Dal primo atto della polizia — interrogatorio, perquisizione, sequestro — alla decisione finale, ogni omissione può avere conseguenze difficili da correggere.",
        paragraph2:
          "Partiamo dalla presunzione di innocenza e tuteliamo i diritti processuali. Eccepiamo ogni violazione di legge, contestiamo le prove illegittimamente acquisite e insistiamo affinché il dubbio sia interpretato a favore dell'imputato.",
        callout:
          "Sosteniamo il principio: la libertà è la regola, la privazione l'eccezione — e ogni eccezione richiede la motivazione più rigorosa.",
      },
      {
        rim: "IV",
        slug: "nepokretnosti",
        naziv: "Immobiliare",
        podnaslov: "Sicurezza in operazioni che non tollerano improvvisazione.",
        intro:
          "Offriamo un'assistenza completa in materia immobiliare — dalla mediazione alle trattative, all'iscrizione dei diritti nel catasto e alla risoluzione delle controversie.",
        sekcije: [
          {
            naslov: "La nostra pratica include",
            stavke: [
              "Contratti di compravendita immobiliare (appartamenti, case, locali, terreni)",
              "Contratti di locazione e sublocazione",
              "Contratti di vitalizio e donazione",
              "Mediazione immobiliare",
              "Iscrizione dei diritti nel catasto immobiliare",
              "Annotazioni, ipoteche e oneri",
              "Risoluzione di controversie sui diritti reali, accertamento di proprietà",
              "Contenzioso civile in materia immobiliare",
            ],
          },
        ],
        paragraph:
          "Ogni immobile ha la sua storia — oneri, proprietari precedenti, possibili controversie. Prima di firmare verifichiamo lo status nel catasto e in altri registri pubblici, segnalando ogni rischio al cliente.",
        paragraph2:
          "Per chi compra o vende, gestiamo l'intera parte legale — bozza del contratto, controllo della documentazione, atto notarile, iscrizione catastale.",
        callout:
          "L'obiettivo: entrare nell'operazione con piena consapevolezza giuridica — e uscirne con un diritto inattaccabile.",
      },
    ],
  },
  about: {
    eyebrow: "Lo Studio",
    title: "Uno studio nel cuore di Niš.",
    intro:
      "Kostić Jović & Partners ha sede nel centro commerciale Kalča a Niš. Assistiamo clienti in procedimenti per illeciti amministrativi, risarcimento danni, procedimenti penali e in materia immobiliare — in tutta la Serbia.",
    approachEyebrow: "Il nostro approccio",
    approachTitle1: "Principi prima del",
    approachTitle2: "calcolo.",
    approachP1:
      "Lo studio si fonda su un'idea semplice: ogni cliente merita attenzione, padronanza del diritto e una difesa coerente — sia per un'infrazione stradale sia per una richiesta di risarcimento all'assicurazione.",
    approachP2:
      "Grazie alla rete di corrispondenti, assistiamo clienti in tutta la Serbia. In qualunque città si svolga il procedimento, il cliente ha un avvocato di riferimento che segue il fascicolo e spiega ogni passaggio.",
    approachP3:
      "La collaborazione di lunga data con periti autorizzati e consulenti tecnici di tribunale ci consente di ottenere valutazioni obiettive che rafforzano la posizione del cliente nelle cause di risarcimento.",
    valuesLabel: "Valori",
    valuesTitle: "Le quattro regole della casa",
    values: [
      { naslov: "Disponibilità", tekst: "Il cliente sa sempre chi segue il suo caso e a che punto è. Non deleghiamo la responsabilità — siamo presenti dall'inizio alla fine." },
      { naslov: "Prova", tekst: "L'onere della prova è dello Stato, non vostro. Confrontiamo ogni contestazione con prove materiali — e dove mancano, lo affermiamo." },
      { naslov: "Coerenza", tekst: "Operiamo secondo le regole della professione e in dubio pro reo. Non consigliamo ciò che noi stessi non faremmo." },
      { naslov: "Riservatezza", tekst: "Il segreto professionale è il fondamento della nostra attività. Quello che ci affidate resta in studio." },
    ],
    coverageLabel: "Territorio",
    coverageTitle: "Assistiamo in tutta la Serbia",
    coverageIntro:
      "Lo studio ha sede a Niš, ma grazie alla rete di corrispondenti assistiamo clienti dinanzi a tutti i giudici per gli illeciti, ai tribunali civili e alle autorità penali — da Belgrado e Novi Sad a Kragujevac, Leskovac, Vranje e altre città.",
  },
  team: {
    eyebrow: "Team",
    title: "Le persone dietro ogni decisione.",
    intro:
      "Lo studio è composto da due soci fondatori, un avvocato collaboratore e un praticante. In ogni caso il cliente ha un avvocato di riferimento — e sa a chi rivolgersi.",
    foundersLabel: "Fondatori · Soci",
    associatesLabel: "Collaboratore · Praticante",
    partners: [
      {
        ime: "Andrija Kostić",
        pozicija: "Fondatore · Socio · Avvocato",
        inicijali: "AK",
        email: "adv.andrijakostic@gmail.com",
        tel: "066 / 8420 455",
        telHref: "+381668420455",
        jezici: "Serbo · Inglese · Italiano",
        bio:
          "Avvocato e cofondatore dello studio. Si occupa di diritto degli illeciti amministrativi, risarcimento danni e penale, con particolare focus su infrazioni stradali e danni da incidenti.",
      },
      {
        ime: "Aleksandar N. Jović",
        pozicija: "Fondatore · Socio · Avvocato",
        inicijali: "AJ",
        email: "aleksandarn.jovic@gmail.com",
        tel: "064 / 9359 118",
        telHref: "+381649359118",
        jezici: "Serbo · Inglese · Francese",
        bio:
          "Avvocato e cofondatore dello studio. Assiste clienti in procedimenti per illeciti, risarcimento danni e penali, oltre che in materia immobiliare. Lunga esperienza nelle cause risarcitorie.",
      },
    ],
    associates: [
      { ime: "Milan Tufegdžić", pozicija: "Avvocato · Collaboratore", inicijali: "MT", bio: "Avvocato collaboratore. Partecipa alla gestione di pratiche di illeciti, risarcimento e penali." },
      { ime: "Andrija Adamović", pozicija: "Praticante avvocato", inicijali: "AA", bio: "Praticante. Supporta il team nella redazione degli atti, analisi delle prove e udienze." },
    ],
    contactLabel: "Contatti",
    languagesLabel: "Lingue",
  },
  contact: {
    eyebrow: "Contatti",
    title: "Scriveteci. Vi ascolteremo.",
    intro:
      "Ogni collaborazione inizia con un colloquio attento. Chiamateci, scriveteci o venite in studio a Niš — rispondiamo entro un giorno lavorativo.",
    formEyebrow: "Richiesta riservata",
    formTitle: "Diteci di cosa si tratta.",
    fieldName: "Nome e cognome",
    fieldEmail: "Indirizzo email",
    fieldPhone: "Telefono",
    fieldArea: "Area",
    fieldMessage: "Il vostro messaggio",
    fieldMessagePlaceholder:
      "Descrivete brevemente la questione. Tutte le informazioni sono trattate con riservatezza.",
    submit: "Invia richiesta",
    sending: "Invio…",
    privacy: "Inviando, acconsentite al trattamento dei dati per rispondervi. Consultate la nostra",
    privacyLink: "informativa sulla privacy",
    okEyebrow: "Grazie",
    okTitle: "La vostra richiesta è stata inviata.",
    okBody:
      "Rispondiamo entro un giorno lavorativo. Per urgenze, chiamateci direttamente.",
    okNew: "Invia nuova richiesta",
    errPrefix: "Invio non riuscito:",
    errSuffix: ". Riprovate o chiamate direttamente +381 66 842 0455.",
    officeLabel: "Studio",
    officeCity: "Niš",
    addressLines: [
      "Obrenovićeva 46",
      "Centro Kalča, lamela D",
      "primo piano, locale 109",
      "18000 Niš, Serbia",
    ],
    mapLink: "Apri sulla mappa",
    discretionLabel: "Riservatezza",
    discretionBody:
      "Tutte le informazioni che ci fornite sono trattate con stretta riservatezza — anche prima che diveniate formalmente clienti. Il segreto professionale è il fondamento della nostra attività.",
    areaOptions: [
      "Illeciti amministrativi",
      "Risarcimento danni",
      "Diritto penale",
      "Immobiliare",
      "Altro",
    ],
  },
  legal: {
    privacyTitle: "Informativa sulla privacy",
    privacyEyebrow: "Nota legale",
    privacyIntro:
      "Kostić Jović & Partners tutela la privacy dei visitatori del sito e rispetta la normativa applicabile sulla protezione dei dati.",
    privacyBody: [
      { p: "Questa informativa descrive quali dati raccogliamo tramite il sito, come li usiamo e quali diritti avete." },
      { h: "Dati raccolti", p: "Raccogliamo solo i dati forniti volontariamente tramite il modulo di contatto: nome, email, telefono e messaggio. Li usiamo esclusivamente per rispondere." },
      { h: "Conservazione", p: "Conserviamo i dati per il tempo necessario alla risposta ed eventuale instaurazione del rapporto. Dopo, vengono cancellati salvo obblighi di legge." },
      { h: "Diritti", p: "Avete diritto di accesso, rettifica o cancellazione. Per richieste: adv.andrijakostic@gmail.com." },
    ],
    termsTitle: "Condizioni d'uso",
    termsEyebrow: "Nota legale",
    termsIntro:
      "Utilizzando il sito di Kostić Jović & Partners accettate le condizioni che seguono.",
    termsBody: [
      { p: "I contenuti del sito hanno carattere meramente informativo e non costituiscono parere legale. Ogni situazione richiede un'analisi specifica — per consigli concreti contattate lo studio." },
      { h: "Diritti d'autore", p: "Tutti i contenuti (testi, immagini, loghi) sono di proprietà dello studio o usati con autorizzazione." },
      { h: "Responsabilità", p: "Curiamo l'esattezza delle informazioni, ma non rispondiamo di eventuali errori o conseguenze derivanti dall'affidamento ai contenuti senza consulenza." },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────
// FR (French)
// ─────────────────────────────────────────────────────────────────────────
const fr: Dict = {
  meta: {
    title: "Cabinet Kostić Jović & Partners — Niš, Serbie",
    description:
      "Kostić Jović & Partners — droit des contraventions, indemnisation, droit pénal, immobilier. Représentation dans toute la Serbie.",
  },
  nav: {
    about: "Le Cabinet",
    areas: "Domaines",
    team: "Équipe",
    blog: "Journal",
    contact: "Contact",
    book: "Prendre rendez-vous",
  },
  footer: {
    contact: "Contact",
    office: "Cabinet",
    motto: "« La charge de la preuve incombe à l'État, pas à vous. »",
    mottoAttr: "— De la pratique du cabinet",
    privacy: "Politique de confidentialité",
    terms: "Conditions",
  },
  home: {
    eyebrow: "Cabinet d'avocats · Niš, Serbie",
    heroTitleLine1: "Tout repose",
    heroTitleLine2: "sur les",
    heroTitleLine3: "preuves.",
    heroIntro:
      "Kostić Jović & Partners assiste ses clients dans les procédures de contraventions, d'indemnisation et pénales — partout en Serbie.",
    bookCta: "Prendre rendez-vous",
    areasCta: "Domaines",
    quote:
      "Quand une amende, un retrait de permis ou des points sont en jeu — l'improvisation n'a pas sa place.",
    quoteAttr: "— De la pratique du cabinet",
    areasTitle: "Ce que nous faisons",
    areasIntro:
      "Nous nous concentrons sur quatre domaines où notre expérience est la plus profonde — nous représentons des clients devant tous les tribunaux contraventionnels, civils et pénaux de Serbie.",
    learnMore: "En savoir plus",
    whyEyebrow: "Pourquoi nous",
    whyTitle1: "Une pratique guidée par le",
    whyTitle2: "principe, non le calcul.",
    whyP1:
      "Nous partons d'une règle simple : la charge de la preuve incombe à l'État, non à vous. Nous examinons chaque allégation, exigeons des preuves matérielles là où elles manquent et défendons vos droits avec constance.",
    whyP2:
      "Nous représentons nos clients devant tous les tribunaux contraventionnels et la Cour d'appel des contraventions — où que la procédure se tienne. Grâce à un réseau de confrères, nous couvrons tout le pays.",
    statSeat: "Niš",
    statSeatLabel: "Siège du cabinet",
    statLawyers: "4",
    statLawyersLabel: "Avocats et collaborateurs",
    statLanguages: "5",
    statLanguagesLabel: "Langues de travail",
    callusLabel: "Appelez-nous",
    ctaTitle: "La première consultation est offerte",
    ctaIntro:
      "Toute collaboration commence par un entretien attentif. Prenez rendez-vous à notre cabinet de Niš ou par téléphone — nous répondons dans un jour ouvré.",
  },
  areas: {
    eyebrowLabel: "Domaine",
    pageEyebrow: "Domaines de pratique",
    pageTitle: "Ce que nous faisons.",
    pageIntro:
      "Nous nous concentrons sur quatre domaines où le cabinet a la plus grande expérience et les meilleurs résultats. Chaque dossier allie analyse rigoureuse, défense constante et respect des règles de la profession.",
    sectionLabel: "Notre pratique couvre",
    short: [
      {
        name: "Droit des contraventions",
        opis:
          "Défense dans les procédures contraventionnelles — circulation, douane, ordre public, mesures protectrices et points.",
      },
      {
        name: "Indemnisation",
        opis:
          "Dommages matériels et moraux — accidents de la route, accidents du travail, chutes, morsures de chiens et autres préjudices.",
      },
      {
        name: "Droit pénal",
        opis:
          "Défense des prévenus et représentation des parties lésées à toutes les étapes — de l'instruction au jugement définitif.",
      },
      {
        name: "Immobilier",
        opis:
          "Contrats de vente et de bail, intermédiation, inscription au cadastre, mentions et litiges relatifs aux droits réels.",
      },
    ],
    detailed: [
      {
        rim: "I",
        slug: "prekrsajno-pravo",
        naziv: "Droit des contraventions",
        podnaslov: "Quand une amende, un retrait de permis ou des points sont en jeu.",
        intro:
          "Nous défendons les contrevenants devant les tribunaux contraventionnels et la Cour d'appel des contraventions, avec une expérience particulière en matière de sécurité routière.",
        sekcije: [
          {
            naslov: "Notre pratique couvre",
            stavke: [
              "Infractions routières — conduite sous l'influence de l'alcool ou de substances, refus d'éthylotest, feu rouge grillé, excès de vitesse, conduite dangereuse",
              "Mesures protectrices et points — contestation et réduction de l'interdiction de conduire et des points",
              "Infractions douanières — importation/exportation illicite, fausses déclarations, infractions de change",
              "Atteintes à l'ordre public et infractions communales",
              "Rédaction des défenses écrites en première instance et appels",
            ],
          },
        ],
        paragraph:
          "Dans chaque dossier, nous partons du principe que la charge de la preuve pèse sur le requérant, non sur le prévenu. Nous analysons soigneusement les preuves, soulignons l'absence de preuves matérielles (photos, vidéos, registres d'étalonnage) et défendons le droit à un procès équitable, y compris le droit d'interroger les témoins à charge.",
        paragraph2:
          "Notre objectif : que chaque grief soit étayé par des preuves fiables ; à défaut, que le principe in dubio pro reo s'applique pleinement.",
        callout:
          "Nous couvrons toute la Serbie. Grâce à un large réseau de confrères, nous représentons les clients devant tous les tribunaux contraventionnels — où que se tienne la procédure.",
      },
      {
        rim: "II",
        slug: "odstetno-pravo",
        naziv: "Indemnisation",
        podnaslov: "Vous vous rétablissez — nous nous occupons du reste.",
        intro:
          "Spécialistes en indemnisation — nous représentons les victimes face aux assureurs, aux tribunaux et à la police, du sinistre au paiement final.",
        sekcije: [
          {
            naslov: "Types de préjudices",
            stavke: [
              "Accidents de la route — dommages matériels au véhicule et préjudice moral lié aux blessures",
              "Accidents du travail — indemnisation auprès de l'employeur et de l'assureur",
              "Chutes sur la voie publique, dans des regards, sur la glace ou des chemins mal entretenus",
              "Morsures de chiens et autres animaux",
              "Tous autres cas de dommages matériels ou moraux",
            ],
          },
          {
            naslov: "Ce que nous faisons pour vous",
            stavke: [
              "Constitution et collecte complète des pièces nécessaires",
              "Évaluation experte par des experts agréés",
              "Présentation et suivi des demandes auprès des assureurs",
              "Représentation en justice pour obtenir la réparation intégrale",
              "Représentation devant les autorités de police",
              "Recouvrement des sommes accordées",
            ],
          },
        ],
        paragraph:
          "Nous intervenons à toutes les étapes — amiable devant l'assureur, contentieuse devant les juridictions compétentes, et devant les autorités de police. Qu'il s'agisse de dommages au véhicule ou de préjudice corporel, nous prenons la procédure en charge.",
        paragraph2:
          "Grâce à notre réseau d'experts agréés et à notre longue collaboration avec des experts judiciaires, nous obtenons des évaluations objectives qui renforcent significativement la position du client.",
        callout:
          "Notre but : obtenir pour le client la réparation maximale prévue par la loi, avec un minimum de charges pour lui.",
      },
      {
        rim: "III",
        slug: "krivicno-pravo",
        naziv: "Droit pénal",
        podnaslov: "Une défense où rien n'est laissé au hasard.",
        intro:
          "Nous représentons les prévenus et les parties lésées à toutes les étapes — de l'enquête préliminaire à l'audience principale, jusqu'au jugement définitif et aux voies de recours extraordinaires.",
        sekcije: [
          {
            naslov: "Ce que nous faisons",
            stavke: [
              "Défense à chaque étape — devant la police, le parquet et le juge",
              "Représentation des parties lésées — plaintes, constitution de partie lésée, action civile",
              "Infractions à la sécurité routière, au patrimoine, aux personnes et aux devoirs de service",
              "Affaires de stupéfiants",
              "Appels et voies de recours extraordinaires — pourvoi en légalité, révision",
              "Procédures de libération conditionnelle et de surveillance",
            ],
          },
        ],
        paragraph:
          "L'affaire pénale exige une stratégie de défense rigoureuse dès le début. Du premier acte de la police — interrogatoire, perquisition, saisie — à la décision finale, tout oubli peut avoir des conséquences difficiles à corriger.",
        paragraph2:
          "Nous partons de la présomption d'innocence et défendons les droits processuels. Nous relevons chaque irrégularité, contestons les preuves illégalement obtenues et exigeons que le doute profite au prévenu.",
        callout:
          "Nous portons le principe : la liberté est la règle, la privation l'exception — et toute exception doit être strictement motivée.",
      },
      {
        rim: "IV",
        slug: "nepokretnosti",
        naziv: "Immobilier",
        podnaslov: "La sécurité dans des opérations qui ne tolèrent pas l'à-peu-près.",
        intro:
          "Nous offrons un accompagnement juridique complet dans les transactions immobilières — de la médiation à la négociation, jusqu'à l'inscription au cadastre et au règlement des litiges.",
        sekcije: [
          {
            naslov: "Notre pratique couvre",
            stavke: [
              "Contrats de vente immobilière (appartements, maisons, locaux commerciaux, terrains)",
              "Contrats de bail et sous-location",
              "Contrats de soins à vie et donations",
              "Médiation immobilière",
              "Inscription des droits au cadastre",
              "Mentions, hypothèques et charges",
              "Règlement des litiges sur les droits réels et constatation de propriété",
              "Contentieux civil en matière immobilière",
            ],
          },
        ],
        paragraph:
          "Chaque bien a son histoire — charges, anciens propriétaires, litiges possibles. Avant toute signature, nous vérifions le statut juridique du bien au cadastre et dans les registres publics, et alertons le client sur tout risque futur.",
        paragraph2:
          "Pour les clients qui achètent ou vendent, nous prenons en charge l'ensemble de la partie juridique — projet de contrat, vérification des documents, signature notariée, inscription au cadastre.",
        callout:
          "Notre but : entrer dans l'opération en pleine connaissance juridique — et en sortir avec un droit que personne ne pourra utilement contester.",
      },
    ],
  },
  about: {
    eyebrow: "Le Cabinet",
    title: "Un cabinet au cœur de Niš.",
    intro:
      "Kostić Jović & Partners est situé au centre d'affaires Kalča à Niš. Nous représentons des clients dans les procédures contraventionnelles, en indemnisation, au pénal et en immobilier — partout en Serbie.",
    approachEyebrow: "Notre approche",
    approachTitle1: "Le principe avant",
    approachTitle2: "le calcul.",
    approachP1:
      "Le cabinet repose sur une idée simple : chaque client mérite attention, maîtrise du droit et défense constante — qu'il s'agisse d'une contravention routière ou d'une demande d'indemnisation auprès d'un assureur.",
    approachP2:
      "Grâce à notre réseau de confrères, nous représentons des clients dans toute la Serbie. Quelle que soit la ville, le client a un avocat dédié qui suit son dossier et lui explique chaque étape.",
    approachP3:
      "Notre longue collaboration avec des experts agréés et des experts judiciaires nous permet d'obtenir des évaluations objectives qui renforcent la position du client dans les dossiers d'indemnisation.",
    valuesLabel: "Valeurs",
    valuesTitle: "Les quatre règles de la maison",
    values: [
      { naslov: "Disponibilité", tekst: "Le client sait toujours qui suit son dossier et à quel stade. Nous ne déléguons pas — nous sommes présents de A à Z." },
      { naslov: "Preuve", tekst: "La charge de la preuve incombe à l'État, pas à vous. Nous confrontons chaque grief à des preuves matérielles — et nous le disons là où elles manquent." },
      { naslov: "Constance", tekst: "Nous travaillons selon les règles du barreau et in dubio pro reo. Nous ne recommandons rien que nous ne ferions à votre place." },
      { naslov: "Discrétion", tekst: "Le secret professionnel est le socle de notre métier. Ce que vous nous confiez reste au cabinet." },
    ],
    coverageLabel: "Territoire",
    coverageTitle: "Nous intervenons dans toute la Serbie",
    coverageIntro:
      "Le siège est à Niš, mais grâce au réseau de confrères, nous représentons des clients devant tous les tribunaux contraventionnels, civils et pénaux — de Belgrade et Novi Sad à Kragujevac, Leskovac, Vranje et d'autres villes.",
  },
  team: {
    eyebrow: "Équipe",
    title: "Les personnes derrière chaque décision.",
    intro:
      "Le cabinet est composé de deux associés fondateurs, d'un avocat collaborateur et d'un avocat stagiaire. Chaque client a son avocat — et sait qui appeler.",
    foundersLabel: "Fondateurs · Associés",
    associatesLabel: "Collaborateur · Stagiaire",
    partners: [
      {
        ime: "Andrija Kostić",
        pozicija: "Fondateur · Associé · Avocat",
        inicijali: "AK",
        email: "adv.andrijakostic@gmail.com",
        tel: "066 / 8420 455",
        telHref: "+381668420455",
        jezici: "Serbe · Anglais · Italien",
        bio:
          "Avocat et cofondateur du cabinet. Pratique le droit des contraventions, l'indemnisation et le pénal, avec un accent particulier sur les infractions routières et les dommages liés aux accidents de la route.",
      },
      {
        ime: "Aleksandar N. Jović",
        pozicija: "Fondateur · Associé · Avocat",
        inicijali: "AJ",
        email: "aleksandarn.jovic@gmail.com",
        tel: "064 / 9359 118",
        telHref: "+381649359118",
        jezici: "Serbe · Anglais · Français",
        bio:
          "Avocat et cofondateur du cabinet. Représente des clients en contraventions, indemnisation et pénal, ainsi qu'en immobilier. Longue expérience des affaires d'indemnisation.",
      },
    ],
    associates: [
      { ime: "Milan Tufegdžić", pozicija: "Avocat · Collaborateur", inicijali: "MT", bio: "Avocat collaborateur. Participe aux dossiers de contraventions, d'indemnisation et pénal." },
      { ime: "Andrija Adamović", pozicija: "Avocat stagiaire", inicijali: "AA", bio: "Stagiaire. Soutient l'équipe dans la rédaction des actes, l'analyse des preuves et les audiences." },
    ],
    contactLabel: "Contact",
    languagesLabel: "Langues",
  },
  contact: {
    eyebrow: "Contact",
    title: "Écrivez-nous. Nous vous écoutons.",
    intro:
      "Toute collaboration commence par un entretien attentif. Appelez-nous, écrivez-nous ou venez au cabinet à Niš — nous répondons dans un jour ouvré.",
    formEyebrow: "Demande confidentielle",
    formTitle: "Dites-nous de quoi il s'agit.",
    fieldName: "Nom et prénom",
    fieldEmail: "Adresse e-mail",
    fieldPhone: "Téléphone",
    fieldArea: "Domaine",
    fieldMessage: "Votre message",
    fieldMessagePlaceholder:
      "Décrivez brièvement le sujet. Toutes les informations sont traitées de manière strictement confidentielle.",
    submit: "Envoyer la demande",
    sending: "Envoi…",
    privacy: "En envoyant, vous consentez au traitement des données aux fins de réponse. Voir notre",
    privacyLink: "politique de confidentialité",
    okEyebrow: "Merci",
    okTitle: "Votre demande a été envoyée.",
    okBody:
      "Nous répondons dans un jour ouvré. Pour une urgence, appelez-nous directement.",
    okNew: "Envoyer une nouvelle demande",
    errPrefix: "L'envoi a échoué :",
    errSuffix: ". Réessayez ou appelez le +381 66 842 0455.",
    officeLabel: "Cabinet",
    officeCity: "Niš",
    addressLines: [
      "Obrenovićeva 46",
      "Centre Kalča, lamela D",
      "1er étage, local 109",
      "18000 Niš, Serbie",
    ],
    mapLink: "Ouvrir dans Maps",
    discretionLabel: "Discrétion",
    discretionBody:
      "Toutes les informations que vous nous transmettez sont strictement confidentielles — avant même que vous deveniez formellement notre client. Le secret professionnel est le socle de notre profession.",
    areaOptions: [
      "Droit des contraventions",
      "Indemnisation",
      "Droit pénal",
      "Immobilier",
      "Autre",
    ],
  },
  legal: {
    privacyTitle: "Politique de confidentialité",
    privacyEyebrow: "Mention légale",
    privacyIntro:
      "Kostić Jović & Partners protège la vie privée des visiteurs du site et respecte la réglementation applicable.",
    privacyBody: [
      { p: "Cette politique décrit les données que nous collectons via le site, leur utilisation et vos droits." },
      { h: "Données collectées", p: "Nous ne collectons que les données fournies volontairement via le formulaire : nom, e-mail, téléphone et message. Elles servent uniquement à vous répondre." },
      { h: "Conservation", p: "Nous conservons les données pendant la durée nécessaire à la réponse et à l'éventuelle prise de mandat. Après, elles sont supprimées, sauf obligation légale." },
      { h: "Vos droits", p: "Vous pouvez demander l'accès, la rectification ou la suppression de vos données : adv.andrijakostic@gmail.com." },
    ],
    termsTitle: "Conditions d'utilisation",
    termsEyebrow: "Mention légale",
    termsIntro:
      "En utilisant le site de Kostić Jović & Partners, vous acceptez les conditions ci-après.",
    termsBody: [
      { p: "Le contenu de ce site est purement informatif et ne constitue pas un avis juridique. Chaque situation requiert une analyse individuelle — pour un conseil, contactez le cabinet." },
      { h: "Droits d'auteur", p: "L'ensemble du contenu (textes, images, logos) est la propriété du cabinet ou utilisé avec autorisation." },
      { h: "Responsabilité", p: "Nous veillons à l'exactitude, mais déclinons toute responsabilité pour des erreurs ou conséquences d'une utilisation sans consultation préalable." },
    ],
  },
};

// ─────────────────────────────────────────────────────────────────────────
// ZH (Simplified Chinese)
// ─────────────────────────────────────────────────────────────────────────
const zh: Dict = {
  meta: {
    title: "科斯蒂奇 约维奇 律师事务所 — 塞尔维亚 尼什",
    description:
      "科斯蒂奇 约维奇 律师事务所 — 违法行为辩护、损害赔偿、刑事辩护、不动产。在塞尔维亚全境代理客户。",
  },
  nav: {
    about: "事务所",
    areas: "业务领域",
    team: "团队",
    blog: "文章",
    contact: "联系我们",
    book: "预约咨询",
  },
  footer: {
    contact: "联系",
    office: "事务所",
    motto: "「举证责任在国家,而不在您。」",
    mottoAttr: "— 出自事务所惯例",
    privacy: "隐私政策",
    terms: "条款",
  },
  home: {
    eyebrow: "律师事务所 · 塞尔维亚 尼什",
    heroTitleLine1: "一切",
    heroTitleLine2: "取决于",
    heroTitleLine3: "证据。",
    heroIntro:
      "科斯蒂奇 约维奇 律师事务所在塞尔维亚全境为客户提供违法行为、损害赔偿和刑事案件的代理服务。",
    bookCta: "预约咨询",
    areasCta: "业务领域",
    quote: "当面临罚款、吊销驾照或扣分时 — 没有即兴发挥的余地。",
    quoteAttr: "— 出自事务所惯例",
    areasTitle: "我们的工作",
    areasIntro:
      "我们专注于四个最具经验的领域 — 在塞尔维亚所有违法行为法院、民事法院和刑事机关代理客户。",
    learnMore: "了解更多",
    whyEyebrow: "为什么选择我们",
    whyTitle1: "由",
    whyTitle2: "原则,而非算计指引的执业。",
    whyP1:
      "我们从一个简单的规则出发:举证责任在国家,不在您。我们仔细审视每项指控,要求在缺乏物证之处提出证据,并始终维护您的辩护权。",
    whyP2:
      "我们在所有违法行为法院和违法行为上诉法院代理客户,不论案件审理地点。借助合作律师网络,我们覆盖整个塞尔维亚。",
    statSeat: "尼什",
    statSeatLabel: "事务所所在地",
    statLawyers: "4",
    statLawyersLabel: "律师与助理",
    statLanguages: "5",
    statLanguagesLabel: "工作语言",
    callusLabel: "致电我们",
    ctaTitle: "首次咨询免费",
    ctaIntro:
      "每段合作都始于认真的交谈。请到尼什办公室会面或通过电话联系 — 我们将在一个工作日内回复。",
  },
  areas: {
    eyebrowLabel: "领域",
    pageEyebrow: "业务领域",
    pageTitle: "我们的工作。",
    pageIntro:
      "我们专注于事务所最具经验和成果的四个领域。在每个案件中,我们结合细致分析、坚定辩护与对职业规范的尊重。",
    sectionLabel: "我们的业务包括",
    short: [
      { name: "违法行为辩护", opis: "在违法行为程序中为被告辩护 — 交通、海关、公共秩序违法、保护性措施和扣分。" },
      { name: "损害赔偿", opis: "物质和非物质损害赔偿 — 交通事故、工伤、跌倒、犬咬伤等。" },
      { name: "刑事辩护", opis: "在刑事程序各阶段为被告辩护、为受害人代理 — 从侦查到终审判决。" },
      { name: "不动产", opis: "买卖与租赁合同、中介、不动产登记、备注和物权争议。" },
    ],
    detailed: [
      {
        rim: "I",
        slug: "prekrsajno-pravo",
        naziv: "违法行为辩护",
        podnaslov: "当面临罚款、吊销驾照或扣分时。",
        intro:
          "我们在违法行为法院及违法行为上诉法院为被告辩护,在道路交通安全领域拥有特别经验。",
        sekcije: [
          {
            naslov: "我们的业务包括",
            stavke: [
              "交通违法 — 酒驾、毒驾、拒绝酒精检测、闯红灯、超速、危险驾驶等",
              "保护性措施与扣分 — 异议或减轻吊销驾照及处理扣分",
              "海关违法 — 非法进出口、虚假申报、海关与外汇违规",
              "扰乱公共秩序及市政违法",
              "撰写一审书面辩护和提起上诉",
            ],
          },
        ],
        paragraph:
          "在每个案件中,我们坚持举证责任在请求方而非被告。我们仔细分析证据,指出材料证据(照片、视频、测量设备校准记录)的缺失,坚定维护辩护权与公正审判权,包括询问控方证人的权利。",
        paragraph2:
          "我们的目标:每项指控都必须有可靠证据支撑;在缺乏责任基础时,坚持适用 in dubio pro reo 原则。",
        callout:
          "我们覆盖塞尔维亚全境。通过广泛的合作律师网络,我们在所有违法行为法院代理客户,无论审理地点。",
      },
      {
        rim: "II",
        slug: "odstetno-pravo",
        naziv: "损害赔偿",
        podnaslov: "您专心康复 — 其余的交给我们。",
        intro:
          "我们专长损害赔偿 — 在保险公司、法院和公安机关面前代理受害方,从损害发生至最终赔付始终陪伴。",
        sekcije: [
          {
            naslov: "我们处理的损害类型",
            stavke: [
              "交通事故 — 车辆物质损失与伤害引起的非物质损害",
              "工伤 — 向雇主与保险公司索赔",
              "公共场所跌倒、井盖、结冰及失修路面",
              "犬只及其他动物咬伤",
              "其他一切物质和非物质损害",
            ],
          },
          {
            naslov: "我们为您做什么",
            stavke: [
              "收集与整理索赔所需全部文件",
              "由授权评估师对损害进行专业评估",
              "向保险公司提出并跟进索赔",
              "在法院代理以获取完整赔偿",
              "在公安机关面前代理",
              "追收获判或承认的赔偿款",
            ],
          },
        ],
        paragraph:
          "我们在所有阶段为客户代理 — 保险公司庭外、有管辖权的法院诉讼以及公安程序。无论是车辆物质损害还是伤害引起的非物质损害,我们都全程承担。",
        paragraph2:
          "依托授权评估师网络及多年与各专业法庭鉴定人的合作,我们能获得客观专业的评估,大幅强化客户在追偿中的地位。",
        callout:
          "我们的目标是让客户依法获得最高赔偿,而其负担与压力降至最低。",
      },
      {
        rim: "III",
        slug: "krivicno-pravo",
        naziv: "刑事辩护",
        podnaslov: "不容偶然的辩护。",
        intro:
          "我们在刑事程序各阶段为被告和受害人代理 — 从侦查、庭审到终审判决及非常救济程序。",
        sekcije: [
          {
            naslov: "我们的工作",
            stavke: [
              "在各阶段为被告辩护 — 警察、检察官与法院",
              "为受害人代理 — 提起刑事告诉、确立受害人地位、提起民事赔偿请求",
              "道路安全、财产、人身和公职犯罪案件",
              "毒品犯罪案件",
              "上诉与非常救济 — 合法性保护请求、再审",
              "假释与保护监督程序",
            ],
          },
        ],
        paragraph:
          "刑事案件自始就需要细致、连贯的辩护策略。从最初的警察行动 — 询问、搜查、临时扣押 — 到最终裁判,任何疏漏都可能造成日后难以纠正的后果。",
        paragraph2:
          "我们坚持无罪推定,始终维护被告的程序权利。我们指出每一项违法,质疑非法取得的证据,并坚持疑罪从无。",
        callout:
          "我们秉持原则:自由是常态,剥夺自由是例外 — 每个例外都必须经最严格的论证。",
      },
      {
        rim: "IV",
        slug: "nepokretnosti",
        naziv: "不动产",
        podnaslov: "在不容大意的交易中提供确定性。",
        intro:
          "我们提供不动产交易和管理的全方位法律支持 — 从中介、谈判到不动产登记和物权争议解决。",
        sekcije: [
          {
            naslov: "我们的业务包括",
            stavke: [
              "不动产买卖合同(公寓、住宅、商业用房、土地)",
              "租赁与转租合同",
              "终生赡养与赠与合同",
              "不动产交易中介",
              "不动产登记",
              "备注、抵押与负担",
              "物权争议解决、所有权确认",
              "不动产相关民事诉讼",
            ],
          },
        ],
        paragraph:
          "每处不动产都有其历史 — 负担、前任所有人、潜在争议。在签约前,我们会在不动产登记簿及其他公共登记机构核查法律状态,并就任何未来风险向客户预警。",
        paragraph2:
          "对买卖双方,我们承担全部法律事务 — 起草合同、文件审查、公证、办理登记。",
        callout:
          "目标是让客户带着对法律状况的充分了解进入交易 — 并以无人能成功挑战的权利退出。",
      },
    ],
  },
  about: {
    eyebrow: "事务所",
    title: "尼什市中心的律师事务所。",
    intro:
      "科斯蒂奇 约维奇 律师事务所位于尼什 Kalča 商业中心。我们在塞尔维亚全境代理客户处理违法行为、损害赔偿、刑事案件及不动产事务。",
    approachEyebrow: "我们的方法",
    approachTitle1: "原则先于",
    approachTitle2: "算计。",
    approachP1:
      "事务所的根基是一个简单的理念:每位客户都应得到关注、对法律的精通与始终如一的辩护 — 无论是交通违法案件还是向保险公司提出的索赔。",
    approachP2:
      "借助合作律师网络,我们在塞尔维亚全境代理客户。无论案件审理地点如何,客户都有专属律师跟进案件并解释每一步。",
    approachP3:
      "我们与授权损害评估师及各专业法庭鉴定人长期合作,能够提供客观专业的评估,显著增强客户在赔偿案件中的地位。",
    valuesLabel: "价值观",
    valuesTitle: "事务所四条家规",
    values: [
      { naslov: "可联系", tekst: "客户始终知道谁在处理案件以及处于何阶段。我们不转嫁责任 — 自始至终都在。" },
      { naslov: "证据", tekst: "举证责任在国家,不在您。我们用物证检验每项指控 — 在缺乏物证之处明确指出。" },
      { naslov: "一致性", tekst: "我们依职业规范并秉持 in dubio pro reo 行事。绝不建议我们换位时也不会做的事。" },
      { naslov: "保密", tekst: "律师保密义务是我们工作的基础。您所托付的内容仅限于事务所之内。" },
    ],
    coverageLabel: "地域",
    coverageTitle: "我们在塞尔维亚全境代理",
    coverageIntro:
      "事务所总部位于尼什,通过合作律师网络我们在塞尔维亚所有违法行为法院、民事法院与刑事机关代理客户 — 从贝尔格莱德、诺维萨德到克拉古耶瓦茨、莱斯科瓦茨、弗拉涅等地。",
  },
  team: {
    eyebrow: "团队",
    title: "每个决定背后的人。",
    intro:
      "事务所由两位创始合伙人、一位律师助理和一位实习律师组成。每个案件,客户都有专属律师 — 也知道该找谁。",
    foundersLabel: "创始人 · 合伙人",
    associatesLabel: "助理 · 实习",
    partners: [
      {
        ime: "Andrija Kostić",
        pozicija: "创始人 · 合伙人 · 律师",
        inicijali: "AK",
        email: "adv.andrijakostic@gmail.com",
        tel: "066 / 8420 455",
        telHref: "+381668420455",
        jezici: "塞尔维亚语 · 英语 · 意大利语",
        bio:
          "事务所联合创始人,律师。专注违法行为、损害赔偿与刑事辩护,尤其是交通违法和道路事故损害赔偿。",
      },
      {
        ime: "Aleksandar N. Jović",
        pozicija: "创始人 · 合伙人 · 律师",
        inicijali: "AJ",
        email: "aleksandarn.jovic@gmail.com",
        tel: "064 / 9359 118",
        telHref: "+381649359118",
        jezici: "塞尔维亚语 · 英语 · 法语",
        bio:
          "事务所联合创始人,律师。在违法行为、损害赔偿、刑事及不动产事务方面代理客户,在赔偿案件方面经验丰富。",
      },
    ],
    associates: [
      { ime: "Milan Tufegdžić", pozicija: "律师 · 助理", inicijali: "MT", bio: "事务所律师助理,参与违法行为、损害赔偿与刑事案件办理。" },
      { ime: "Andrija Adamović", pozicija: "实习律师", inicijali: "AA", bio: "实习律师,协助团队起草文件、分析证据与法庭代理。" },
    ],
    contactLabel: "联系",
    languagesLabel: "语言",
  },
  contact: {
    eyebrow: "联系我们",
    title: "请写信给我们。我们会倾听。",
    intro:
      "每段合作都始于认真的交谈。请致电、留言或亲临尼什办公室 — 我们在一个工作日内回复。",
    formEyebrow: "保密咨询",
    formTitle: "告诉我们案情。",
    fieldName: "姓名",
    fieldEmail: "电子邮箱",
    fieldPhone: "电话",
    fieldArea: "领域",
    fieldMessage: "您的信息",
    fieldMessagePlaceholder: "请简要描述事项。所有信息均严格保密。",
    submit: "发送咨询",
    sending: "发送中…",
    privacy: "提交即表示同意我们出于回复目的处理数据。请参阅我们的",
    privacyLink: "隐私政策",
    okEyebrow: "感谢您",
    okTitle: "您的咨询已发送。",
    okBody: "我们将在一个工作日内回复。如有紧急事项,请直接致电。",
    okNew: "发送新咨询",
    errPrefix: "发送失败:",
    errSuffix: "。请重试或直接拨打 +381 66 842 0455。",
    officeLabel: "办公室",
    officeCity: "尼什",
    addressLines: [
      "Obrenovićeva 46 号",
      "Kalča 购物中心 D 翼",
      "一楼 109 号",
      "18000 尼什,塞尔维亚",
    ],
    mapLink: "在地图中打开",
    discretionLabel: "保密",
    discretionBody: "您提供的所有信息均严格保密 — 即使在您正式成为客户之前也是如此。律师保密义务是我们工作的基础。",
    areaOptions: ["违法行为辩护", "损害赔偿", "刑事辩护", "不动产", "其他"],
  },
  legal: {
    privacyTitle: "隐私政策",
    privacyEyebrow: "法律声明",
    privacyIntro:
      "科斯蒂奇 约维奇 律师事务所保护所有访客的隐私,并遵守适用的数据保护法律。",
    privacyBody: [
      { p: "本政策说明我们通过网站收集的数据、其用途及您的权利。" },
      { h: "收集的数据", p: "我们仅收集您通过联系表格自愿提供的信息:姓名、邮箱、电话和信息内容。仅用于回复您。" },
      { h: "保留期", p: "我们仅在回复及可能建立合作所需时间内保留数据。其后将删除,除非法律要求更长保存期。" },
      { h: "您的权利", p: "您可要求查阅、更正或删除您的数据。请致信 adv.andrijakostic@gmail.com。" },
    ],
    termsTitle: "使用条款",
    termsEyebrow: "法律声明",
    termsIntro: "使用本网站即表示同意以下条款。",
    termsBody: [
      { p: "本网站内容仅供参考,不构成法律意见。每项法律情况均需个别分析 — 具体建议请联系事务所。" },
      { h: "著作权", p: "所有内容(文本、图像、标识)均为事务所所有或经权利人许可使用。" },
      { h: "责任", p: "我们尽力确保信息准确,但对未经咨询律师而依赖本站内容造成的错误或后果不承担责任。" },
    ],
  },
};

export const DICTS: Record<Locale, Dict> = { sr, en, de, it, fr, zh };
