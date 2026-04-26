import SectionHeading from "../common/SectionHeading";
import { siteContent } from "../../data/siteContent";

function AboutSection() {
  return (
    <section id="ueber-uns" className="py-16 md:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 md:grid-cols-2 md:items-center md:px-6">
        <SectionHeading
          eyebrow="Über uns"
          title={siteContent.about.title}
          description={siteContent.about.text}
        />
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <ul className="space-y-4 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-brand-green-600" />
              <span>Fachgerechte Ausführung mit Fokus auf langlebige Ergebnisse.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-brand-green-600" />
              <span>Transparente Kommunikation und verlässliche Terminplanung.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-brand-green-600" />
              <span>Konsequent hohe Qualitätsstandards für Privat- und Firmenkunden.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
