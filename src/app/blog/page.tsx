import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionDivider from "@/components/SectionDivider";
import { getAllPostsMeta, formatDate } from "@/lib/blog";

export const metadata = {
  title: "Blog · Pravni saveti",
  description:
    "Stručni tekstovi i pravni saveti advokatske kancelarije Kostić Jović i partneri — prekršajno, odštetno i krivično pravo, nepokretnosti. Nedeljni članci o vašim pravima.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Kostić Jović i partneri",
    description:
      "Stručni pravni saveti — prekršaji u saobraćaju, naknada štete, krivično pravo i nepokretnosti.",
    type: "website",
  },
};

export default function BlogIndex() {
  const posts = getAllPostsMeta();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Pravni saveti."
        intro="Praktični tekstovi o pravima i obavezama građana — prekršajni postupci, naknada štete, krivično pravo i nepokretnosti. Pišu advokati naše kancelarije."
      />

      <section className="mx-auto max-w-6xl px-6 lg:px-10 py-20 lg:py-28">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-serif text-2xl text-ink-soft italic">
              Uskoro objavljujemo prve tekstove.
            </p>
          </div>
        ) : (
          <div className="space-y-px bg-rule/40 border-y border-rule/40">
            {posts.map((p, i) => (
              <article
                key={p.slug}
                className="bg-ivory hover:bg-parchment transition-colors"
              >
                <Link
                  href={`/blog/${p.slug}`}
                  className="block p-8 lg:p-12 grid lg:grid-cols-12 gap-8 items-start"
                >
                  <div className="lg:col-span-3">
                    <div className="text-[11px] uppercase tracking-display text-gold-deep mb-2">
                      {p.category}
                    </div>
                    <div className="font-serif italic text-ink-soft">
                      {formatDate(p.date)}
                    </div>
                  </div>
                  <div className="lg:col-span-9">
                    <h2 className="font-serif text-2xl lg:text-3xl text-green leading-tight group-hover:text-gold-deep">
                      {p.title}
                    </h2>
                    {p.description && (
                      <p className="mt-4 text-ink-soft leading-relaxed font-light">
                        {p.description}
                      </p>
                    )}
                    <div className="mt-6 flex items-center gap-4">
                      <span className="text-[11px] uppercase tracking-display text-green border-b border-gold-deep/60 pb-0.5">
                        Pročitajte →
                      </span>
                      <span className="text-xs text-ink-soft/60">
                        · {i + 1}. od {posts.length}
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}

        <SectionDivider label="Pratite nas" />

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-ink-soft leading-relaxed">
            Nove tekstove objavljujemo redovno. Ako imate pravno pitanje na koje
            biste želeli da pišemo, javite nam — često birane teme postaju naši
            naredni tekstovi.
          </p>
          <div className="mt-8">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-3 border border-green text-green px-8 py-3 text-[11px] uppercase tracking-display hover:bg-green hover:text-ivory transition-colors"
            >
              Predloži temu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
