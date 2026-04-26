import { siteContent } from "../../data/siteContent";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-brand-blue-900 py-10 text-slate-200">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 md:grid-cols-2 md:px-6">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/assets/terraclean-logo.png"
              alt="Terraclean Services Logo"
              className="h-14 w-auto object-contain md:h-16"
            />
            <p className="text-lg font-semibold text-white">{siteContent.brand}</p>
          </div>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-300">
            Professionelle Hochdruckreinigung und Aussenreinigung fuer private und gewerbliche
            Liegenschaften in der Region.
          </p>
        </div>
        <div className="space-y-2 text-sm md:text-right">
          <p>Einsatzgebiet: {siteContent.contact.area}</p>
          <p>
            Tel:{" "}
            <a className="font-medium text-white hover:text-brand-green-100" href={siteContent.contact.phoneHref}>
              {siteContent.contact.phoneDisplay}
            </a>
          </p>
          <p>
            E-Mail:{" "}
            <a className="font-medium text-white hover:text-brand-green-100" href={siteContent.contact.emailHref}>
              {siteContent.contact.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
