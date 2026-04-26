import BenefitsSection from "../components/sections/BenefitsSection";
import HeroSection from "../components/sections/HeroSection";
import SpringOfferSection from "../components/sections/SpringOfferSection";
import useSeo from "../hooks/useSeo";

function HomePage() {
  useSeo();

  return (
    <>
      <HeroSection />
      <SpringOfferSection />
      <BenefitsSection />
    </>
  );
}

export default HomePage;
