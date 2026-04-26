import { Link } from "react-router-dom";
import { siteContent } from "../../data/siteContent";

function SpringOfferSection() {
  const { springOffer } = siteContent;

  return (
    <section className="bg-brand-green-50 py-10 md:py-12">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <div className="rounded-2xl border border-brand-green-200 bg-white p-6 shadow-sm md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-green-600">
            {springOffer.badge}
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-brand-blue-900 md:text-3xl">
            {springOffer.title}
          </h2>
          <p className="mt-3 max-w-3xl text-slate-700">{springOffer.description}</p>
          <p className="mt-4 text-lg font-semibold text-brand-blue-900">{springOffer.offerText}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/kontakt"
              className="rounded-full bg-brand-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-green-400"
            >
              Jetzt Offerte anfordern
            </Link>
            <Link
              to="/leistungen"
              className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-brand-green-400 hover:text-brand-green-600"
            >
              Leistungen ansehen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpringOfferSection;
