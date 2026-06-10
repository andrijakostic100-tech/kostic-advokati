"use client";

import { useState } from "react";

// Na koju adresu stižu upiti sa sajta
const PRIMARY_EMAIL = "adv.andrijakostic@gmail.com";
const CC_EMAIL = "aleksandarn.jovic@gmail.com";

const OBLASTI = [
  "Prekršajno pravo",
  "Odštetno pravo",
  "Krivično pravo",
  "Nepokretnosti",
  "Drugo",
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

    fd.append("_subject", `Upit sa sajta — ${fd.get("oblast") || "Opšti upit"}`);
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
        throw new Error(data.message || "Greška pri slanju");
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Nepoznata greška";
      setStatus("error");
      setErrorMsg(message);
    }
  }

  if (status === "ok") {
    return (
      <div className="border border-gold-deep/60 bg-parchment p-10 text-center">
        <div className="text-[11px] uppercase tracking-display text-gold-deep mb-4">
          Hvala vam
        </div>
        <h3 className="font-serif text-3xl text-green leading-tight">
          Vaš upit je poslat.
        </h3>
        <p className="mt-5 text-ink-soft leading-relaxed">
          Odgovaramo u roku od jednog radnog dana. Ukoliko je predmet hitan,
          pozovite nas direktno.
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
          Pošalji novi upit
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Ime i prezime" name="name" required />
        <Field label="Elektronska adresa" name="email" type="email" required />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <Field label="Telefon" name="phone" type="tel" />
        <div>
          <label className="block text-[10px] uppercase tracking-display text-ink-soft mb-3">
            Oblast
          </label>
          <select
            name="oblast"
            defaultValue="Prekršajno pravo"
            className="w-full bg-transparent border-b border-rule/80 py-3 text-ink focus:border-gold-deep focus:outline-none font-light"
          >
            {OBLASTI.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>
      <Field
        label="Vaša poruka"
        name="message"
        textarea
        required
        placeholder="Ukratko opišite o čemu se radi. Sve informacije tretiramo kao strogo poverljive."
      />

      {status === "error" && (
        <div className="border border-burgundy/40 bg-burgundy/5 p-4 text-sm text-burgundy">
          Slanje nije uspelo: {errorMsg}. Molimo pokušajte ponovo ili nas pozovite
          direktno na 066 / 8420 455.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-3 bg-green text-ivory px-10 py-4 text-[11px] uppercase tracking-display hover:bg-green-deep transition-colors disabled:opacity-60 disabled:cursor-wait"
      >
        {status === "sending" ? "Slanje…" : "Pošalji upit"}
        {status !== "sending" && (
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M0 5h12m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        )}
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
