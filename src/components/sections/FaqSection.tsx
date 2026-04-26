import { useMemo, useState } from "react";
import SectionHeading from "../common/SectionHeading";
import { siteContent } from "../../data/siteContent";

function FaqSection() {
  const items = siteContent.faq.items;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const contentIdBase = useMemo(() => "faq-item", []);

  return (
    <section id="faq" className="bg-brand-blue-50 py-16 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <SectionHeading eyebrow="FAQ" title={siteContent.faq.title} description={siteContent.faq.description} />
        <div className="mt-10 space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const contentId = `${contentIdBase}-${index}`;
            return (
              <div key={item.question} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-base font-semibold text-brand-blue-900 md:text-lg">{item.question}</span>
                  <span
                    className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-brand-blue-900 transition ${
                      isOpen ? "bg-brand-blue-50" : "bg-white"
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <div id={contentId} className="border-t border-slate-100 px-5 pb-5 pt-4 text-slate-700">
                    <p className="leading-relaxed">{item.answer}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
