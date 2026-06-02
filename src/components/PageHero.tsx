import Eyebrow from "./Eyebrow";

export default function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-rule/40 bg-parchment">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 py-24 lg:py-32 text-center">
        <div className="flex justify-center">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h1 className="font-serif text-5xl lg:text-7xl leading-[1.05] mt-6 text-green">
          {title}
        </h1>
        {intro && (
          <p className="mt-8 max-w-2xl mx-auto text-lg leading-relaxed text-ink-soft font-light">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
