import ServicesSection from "../components/sections/ServicesSection";
import useSeo from "../hooks/useSeo";

function ServicesPage() {
  useSeo(
    "Leistungen | Terraclean Services",
    "Terrassenreinigung, Einfahrten reinigen, Gartenflächen, Treppen und Fassadenreinigung in Zug, Aargau und Zürich.",
    "Terrassenreinigung Kanton Zug, Einfahrten reinigen Zug, Fassadenreinigung Zürich"
  );

  return <ServicesSection />;
}

export default ServicesPage;
