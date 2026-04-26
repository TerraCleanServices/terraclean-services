import { useId, useState, type ChangeEvent, type FormEvent } from "react";
import SectionHeading from "../common/SectionHeading";
import { siteContent } from "../../data/siteContent";

function ContactSection() {
  const formId = useId();
  const [imageError, setImageError] = useState("");
  const [status, setStatus] = useState<{
    type: "idle" | "sending" | "success" | "error";
    message?: string;
  }>({ type: "idle" });

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileCount = event.target.files?.length ?? 0;

    if (fileCount === 0) {
      setImageError("Bitte laden Sie mindestens 1 Bild hoch.");
      return;
    }

    if (fileCount > 2) {
      setImageError("Bitte maximal 2 Bilder hochladen.");
      event.target.value = "";
      return;
    }

    setImageError("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ type: "idle" });

    const form = event.currentTarget;
    const fileInput = form.querySelector<HTMLInputElement>('input[type="file"][name="bilder"]');
    const files = fileInput?.files ? Array.from(fileInput.files) : [];

    if (files.length < 1) {
      setImageError("Bitte laden Sie mindestens 1 Bild hoch.");
      return;
    }

    if (files.length > 2) {
      setImageError("Bitte maximal 2 Bilder hochladen.");
      return;
    }

    setImageError("");
    setStatus({ type: "sending" });

    const data = new FormData(form);
    data.delete("_captcha");
    data.delete("_subject");
    data.delete("_template");

    const response = await fetch("/api/send-offer", {
      method: "POST",
      body: data,
    });

    const payload = (await response.json().catch(() => null)) as { error?: string } | null;

    if (!response.ok) {
      setStatus({
        type: "error",
        message: payload?.error || "Senden fehlgeschlagen. Bitte versuchen Sie es erneut.",
      });
      return;
    }

    setStatus({
      type: "success",
      message: "Vielen Dank! Ihre Anfrage wurde erfolgreich verschickt.",
    });
    form.reset();
  };

  return (
    <section id="kontakt" className="py-16 md:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 md:grid-cols-2 md:px-6">
        <div>
          <SectionHeading
            eyebrow="Kontakt"
            title="Jetzt unverbindliche Offerte anfordern"
            description="Wir beraten Sie gerne zu Ihrer Fläche und erstellen eine passgenaue Empfehlung für eine professionelle Reinigung."
          />
          <div className="mt-8 space-y-3 text-slate-700">
            <p>
              <span className="font-semibold text-brand-blue-900">Telefon:</span>{" "}
              <a className="hover:text-brand-green-600" href={siteContent.contact.phoneHref}>
                {siteContent.contact.phoneDisplay}
              </a>
            </p>
            <p>
              <span className="font-semibold text-brand-blue-900">E-Mail:</span>{" "}
              <a className="hover:text-brand-green-600" href={siteContent.contact.emailHref}>
                {siteContent.contact.email}
              </a>
            </p>
            <p>
              <span className="font-semibold text-brand-blue-900">Einsatzgebiet:</span>{" "}
              {siteContent.contact.area}
            </p>
          </div>
        </div>

        <form
          className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          id={formId}
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-slate-700">Name</span>
            <input
              type="text"
              name="name"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-brand-green-400 focus:ring-2"
              placeholder="Ihr Name"
              required
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-slate-700">E-Mail</span>
            <input
              type="email"
              name="email"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-brand-green-400 focus:ring-2"
              placeholder="ihre.email@beispiel.ch"
              required
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-slate-700">Telefon (optional)</span>
            <input
              type="tel"
              name="phone"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-brand-green-400 focus:ring-2"
              placeholder="07X XXX XX XX"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-slate-700">
              Geschätzte Fläche (m²)
            </span>
            <input
              type="number"
              name="area"
              min={1}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-brand-green-400 focus:ring-2"
              placeholder="z. B. 45"
              required
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-slate-700">
              Bilder der Fläche (1-2 Bilder)
            </span>
            <input
              type="file"
              name="bilder"
              accept="image/*"
              multiple
              required
              onChange={handleImageChange}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 file:mr-4 file:rounded-full file:border-0 file:bg-brand-green-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-brand-green-400"
            />
            {imageError ? (
              <p className="mt-1 text-sm text-red-600">{imageError}</p>
            ) : (
              <p className="mt-1 text-xs text-slate-500">
                Bitte 1 bis 2 Fotos hochladen, damit wir die Fläche besser einschätzen können.
              </p>
            )}
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium text-slate-700">Nachricht</span>
            <textarea
              name="message"
              rows={5}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none ring-brand-green-400 focus:ring-2"
              placeholder="Beschreiben Sie kurz Ihr Anliegen und die zu reinigenden Flächen."
              required
            />
          </label>
          <button
            type="submit"
            disabled={status.type === "sending"}
            className="w-full rounded-full bg-brand-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-green-400"
          >
            {status.type === "sending" ? "Wird gesendet..." : "Offerte anfordern"}
          </button>
          {status.type === "success" ? (
            <p className="text-sm font-medium text-emerald-700">{status.message}</p>
          ) : null}
          {status.type === "error" ? (
            <p className="text-sm font-medium text-red-700">{status.message}</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
