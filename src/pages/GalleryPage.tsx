import GallerySection from "../components/sections/GallerySection";
import useSeo from "../hooks/useSeo";

function GalleryPage() {
  useSeo(
    "Galerie | Terraclean Services",
    "Vorher/Nachher Beispiele von professioneller Terrassen-, Einfahrten- und Fassadenreinigung in Zug, Aargau und Zürich.",
    "Vorher Nachher Terrassenreinigung Zug, Fassadenreinigung Beispiele"
  );

  return <GallerySection />;
}

export default GalleryPage;
