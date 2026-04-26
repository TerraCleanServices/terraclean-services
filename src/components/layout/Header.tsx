import { NavLink } from "react-router-dom";
import { siteContent } from "../../data/siteContent";

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <NavLink to="/" className="flex items-center gap-3 text-brand-blue-900">
          <img
            src="/assets/terraclean-logo.png"
            alt="Terraclean Services Logo"
            className="h-14 w-auto object-contain md:h-16"
          />
          <span className="text-sm font-semibold md:text-base">{siteContent.brand}</span>
        </NavLink>

        <nav className="hidden gap-6 md:flex">
          {siteContent.navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? "text-brand-green-600" : "text-slate-700 hover:text-brand-green-600"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/kontakt"
          className="rounded-full bg-brand-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-green-400"
        >
          Offerte anfordern
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
