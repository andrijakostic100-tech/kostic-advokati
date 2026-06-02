"use client";

import { useState } from "react";

// На коју адресу стижу упити са сајта
const PRIMARY_EMAIL = "adv.andrijakostic@gmail.com";
const CC_EMAIL = "aleksandarn.jovic@gmail.com";

const OBLASTI = [
  "Прекршајно право",
  "Одштетно право",
  "Кривично право",
  "Непокретности",
  "Друго",
];

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    // FormSubmit options
    fd.append("_subject", `Упит са сајта — ${fd.get("oblast") || "Општи упит"}`);
    fd.append("_template", "table");
    fd.append("_captcha", "false");
    fd.append("_cc", CC_EMAIL);

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(PRIMARY_EMAIL)}`,
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: fd,
        }
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (data.success === "true" || data.success === true) {
        setStatus("ok");
        form.reset();
      } else {
        throw new Error(data.message || "Грешка при слању");
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Непозната грешка";
      setStatus("error");
      setErrorMsg(message);
    }
  }

  if (status === "ok") {
    return (
      <div className="border border-gold-deep/60 bg-parchment p-10 text-center">
        <div className="text-[11px] uppercase tracking-display text-gold-deep mb-4">
          Хвала вам
        </div>
        <h3 className="font-serif text-3xl text-green leading-tight">
          Ваш упит је послат.
        </h3>
        <p className="mt-5 text-ink-soft leading-relaxed">
          Одговарамо у року од једног радног дана. Уколико је предмет хитан,
          позовите нас директно.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="tel:+381668420455"
            className="inline-flex items-center gap-2 bg-green text-ivory px-6 py-3 text-[11px] uppercase tracking-display hover:bg-green-deep transition-colors"
          >
            066 / 8420 455
          </a>
          <a
            href="tel:+381649359118"
            className="inline-flex items-center gap-2 border border-green text-green px-6 py-3 text-[11px] uppercase tracking-display hover:bg-green hover:text-ivory transition-colors"
          >
            064 / 9359 118
          </a>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 text-[10px] uppercase tracking-display text-ink-soft underline"
        >
          Пошаљи нови упит
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      {/* Anti-bot honeypot */}
      <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Име и презиме" name="name" required />
        <Field label="Електронска адреса" name="email" type="email" required />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Телефон" name="phone" type="tel" />
        <div>
          <label className="block text-[10px] uppercase tracking-display text-ink-soft mb-3">
            Област
          </label>
          <select
            name="oblast"
            defaultValue="Прекршајно право"
            className="w-full bg-transparent border-b border-rule/80 py-3 text-ink focus:border-gold-deep focus:outline-none font-light"
          >
            {OBLASTI.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>
      <Field
        label="Ваша порука"
        name="message"
        textarea
        required
        placeholder="Укратко опишите о чему се ради. Све информације третирамо као строго поверљиве."
      />

      {status === "error" && (
        <div className="border border-burgundy/40 bg-burgundy/5 p-4 text-sm text-burgundy">
          Слање није успело: {errorMsg}. Молимо покушајте поново или нас позовите
          директно на 066 / 8420 455.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-3 bg-green text-ivory px-10 py-4 text-[11px] uppercase tracking-display hover:bg-green-deep transition-colors disabled:opacity-60 disabled:cursor-wait"
      >
        {status === "sending" ? "Слање…" : "Пошаљи упит"}
        {status !== "sending" && (
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M0 5h12m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        )}
      </button>
      <p className="text-xs text-ink-soft/70 leading-relaxed">
        Слањем упита пристајете на обраду података у сврху одговора.
        Погледајте нашу{" "}
        <a href="/politika-privatnosti" className="underline">
          политику приватности
        </a>
        .
      </p>
    </form>
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
    "w-full bg-transparent border-b border-rule/80 py-3 text-ink focus:border-gold-deep focus:outline-none font-light placeholder:text-ink-soft/40";
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[10px] uppercase tracking-display text-ink-soft mb-3"
      >
        {label}
        {required && <span className="text-gold-deep ml-1">*</span>}
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
