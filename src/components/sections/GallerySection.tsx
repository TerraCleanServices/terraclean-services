import SectionHeading from "../common/SectionHeading";
import { siteContent } from "../../data/siteContent";

function GallerySection() {
  return (
    <section id="galerie" className="bg-brand-blue-50 py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Galerie"
          title="Vorher/Nachher: Sichtbare Resultate unserer Aussenreinigung"
          description="Die Galerie zeigt typische Einsatzbereiche und Ergebnisqualität. Weitere Vorher/Nachher-Projekte ergänzen wir laufend."
        />
        <div className="mt-10 grid gap-6">
          {siteContent.galleryItems.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-slate-200 p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Vorher</p>
                  {item.beforeImage ? (
                    <img
                      src={item.beforeImage}
                      alt={`${item.title} Vorher`}
                      className="mt-2 h-52 w-full rounded-lg object-cover md:h-72"
                      loading="lazy"
                    />
                  ) : (
                    <div className="mt-2 h-52 rounded-lg bg-slate-300 md:h-72" />
                  )}
                </div>
                <div className="rounded-xl bg-brand-green-100 p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-green-600">Nachher</p>
                  {item.afterImage ? (
                    <img
                      src={item.afterImage}
                      alt={`${item.title} Nachher`}
                      className="mt-2 h-52 w-full rounded-lg object-cover md:h-72"
                      loading="lazy"
                    />
                  ) : (
                    <div className="mt-2 h-52 rounded-lg bg-brand-green-400/40 md:h-72" />
                  )}
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brand-blue-900">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{item.tag}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
