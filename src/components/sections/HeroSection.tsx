import { Link } from "react-router-dom";
import { siteContent } from "../../data/siteContent";

function HeroSection() {
  return (
    <section id="start" className="bg-gradient-to-b from-brand-blue-900 to-brand-blue-700 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center md:px-6">
        <div>
          <img
            src="/assets/terraclean-logo.png"
            alt="Terraclean Services Logo"
            className="mb-6 h-28 w-auto rounded-xl border border-white/30 bg-white/95 p-1 object-contain md:h-32"
          />
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-brand-green-100">
            Professionelle Hochdruckreinigung
          </p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Saubere Flächen. Starker Eindruck.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-100 md:text-lg">
            {siteContent.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/kontakt"
              className="rounded-full bg-brand-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-green-400"
            >
              Offerte anfordern
            </Link>
            <a
              href={siteContent.contact.phoneHref}
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Jetzt Kontakt aufnehmen
            </a>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-green-100">
              Vorher
            </p>
            <div className="mt-2 h-36 rounded-xl bg-slate-100/20" aria-hidden="true" />
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-green-100">
              Nachher
            </p>
            <div className="mt-2 h-36 rounded-xl bg-brand-green-400/30" aria-hidden="true" />
          </div>
          <p className="sm:col-span-2 text-sm text-slate-100">
            Platzhalter für hochwertige Vorher/Nachher-Bilder. Geeignet für echte Referenzfotos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
