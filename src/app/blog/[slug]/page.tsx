import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import { getAllSlugs, getPostBySlug, getAllPostsMeta, formatDate } from "@/lib/blog";

type Params = { slug: string };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Tekst nije pronađen" };

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      images: post.cover ? [post.cover] : ["/logo-color.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPost(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPostsMeta().filter((p) => p.slug !== slug).slice(0, 3);

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author || "Kostić Jović i partneri",
    },
    publisher: {
      "@type": "LegalService",
      name: "Advokatska kancelarija Kostić Jović i partneri",
      logo: {
        "@type": "ImageObject",
        url: "/logo-color.png",
      },
    },
    keywords: post.keywords?.join(", "),
    articleSection: post.category,
    inLanguage: "sr-RS",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />

      <section className="border-b border-rule/40 bg-parchment">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 py-20 lg:py-28">
          <div className="flex justify-center mb-6">
            <Eyebrow>{post.category}</Eyebrow>
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl leading-[1.05] text-green text-center">
            {post.title}
          </h1>
          {post.description && (
            <p className="mt-8 text-center max-w-2xl mx-auto text-lg leading-relaxed text-ink-soft font-light italic">
              {post.description}
            </p>
          )}
          <div className="mt-10 flex items-center justify-center gap-3 text-[11px] uppercase tracking-display text-ink-soft/80">
            <span>{formatDate(post.date)}</span>
            <span className="text-gold-deep">·</span>
            <span>{post.readingMinutes} min čitanja</span>
            {post.author && (
              <>
                <span className="text-gold-deep">·</span>
                <span>{post.author}</span>
              </>
            )}
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 lg:px-10 py-16 lg:py-24">
        <div
          className="article-prose"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <div className="mt-16 pt-12 border-t border-rule/40">
          <div className="bg-parchment border border-rule/50 p-8 lg:p-10">
            <Eyebrow>Imate pitanje?</Eyebrow>
            <h3 className="font-serif text-2xl lg:text-3xl mt-4 text-green leading-tight">
              Razgovarajmo o vašem slučaju.
            </h3>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Ako vam je potrebna pravna pomoć u oblasti o kojoj ste čitali —
              pozovite nas ili pošaljite poruku.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 bg-green text-ivory px-6 py-3 text-[11px] uppercase tracking-display hover:bg-green-deep transition-colors"
              >
                Pošaljite poruku
              </Link>
              <a
                href="tel:+381668420455"
                className="inline-flex items-center gap-2 border border-green text-green px-6 py-3 text-[11px] uppercase tracking-display hover:bg-green hover:text-ivory transition-colors"
              >
                066 / 8420 455
              </a>
            </div>
          </div>
        </div>
      </article>

      {allPosts.length > 0 && (
        <section className="bg-ivory-soft/50 border-t border-rule/40">
          <div className="mx-auto max-w-5xl px-6 lg:px-10 py-16">
            <Eyebrow>Možda vas zanima</Eyebrow>
            <div className="mt-8 grid md:grid-cols-3 gap-px bg-rule/40 border border-rule/40">
              {allPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="bg-ivory p-6 hover:bg-parchment transition-colors block"
                >
                  <div className="text-[10px] uppercase tracking-display text-gold-deep mb-2">
                    {p.category}
                  </div>
                  <h4 className="font-serif text-xl text-green leading-tight">
                    {p.title}
                  </h4>
                  <div className="mt-4 text-xs text-ink-soft/70">
                    {formatDate(p.date)}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
