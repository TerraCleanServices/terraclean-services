import ContactSection from "../components/sections/ContactSection";
import useSeo from "../hooks/useSeo";

function ContactPage() {
  useSeo(
    "Kontakt | Terraclean Services",
    "Jetzt Offerte anfordern: Terraclean Services für Hochdruckreinigung und Aussenreinigung im Kanton Zug sowie Teilen von Aargau und Zürich.",
    "Kontakt Terrassenreinigung Zug, Offerte Aussenreinigung Zug"
  );

  return <ContactSection />;
}

export default ContactPage;
