import AboutSection from "../components/sections/AboutSection";
import BenefitsSection from "../components/sections/BenefitsSection";
import useSeo from "../hooks/useSeo";

function AboutPage() {
  useSeo(
    "Über uns | Terraclean Services",
    "Terraclean Services steht für Qualität, Präzision und Zuverlässigkeit in der professionellen Aussenreinigung.",
    "Aussenreinigung Unternehmen Zug, professionelle Hochdruckreinigung Zug"
  );

  return (
    <>
      <AboutSection />
      <BenefitsSection />
    </>
  );
}

export default AboutPage;
