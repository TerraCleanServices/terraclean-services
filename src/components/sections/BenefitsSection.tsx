import SectionHeading from "../common/SectionHeading";
import { siteContent } from "../../data/siteContent";

function BenefitsSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Ihre Vorteile"
          title="Warum sich Kunden für Terraclean Services entscheiden"
          description="Von der Erstbesichtigung bis zur finalen Reinigung setzen wir auf klare Prozesse, präzise Arbeit und dauerhaft überzeugende Ergebnisse."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {siteContent.benefits.map((benefit) => (
            <article key={benefit.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-brand-blue-900">{benefit.title}</h3>
              <p className="mt-3 text-slate-600">{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
