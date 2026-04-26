import SectionHeading from "../common/SectionHeading";
import { siteContent } from "../../data/siteContent";

function ServicesSection() {
  return (
    <section id="leistungen" className="bg-brand-blue-50 py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Leistungen"
          title="Professionelle Aussenreinigung für anspruchsvolle Flächen"
          description="Jede Leistung ist auf Werterhalt, Optik und Hygiene ausgelegt. Wir stimmen den Reinigungsprozess auf Material, Verschmutzung und Einsatzbereich ab."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {siteContent.services.map((service) => (
            <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-brand-blue-900">{service.title}</h3>
              <p className="mt-3 text-slate-600">{service.text}</p>
              <p className="mt-4 border-l-2 border-brand-green-400 pl-3 text-sm font-medium text-brand-blue-700">
                Nutzen: {service.value}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
