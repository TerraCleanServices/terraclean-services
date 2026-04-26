import { useEffect } from "react";
import { siteContent } from "../data/siteContent";

function useSeo(title?: string, description?: string, keywords?: string) {
  useEffect(() => {
    document.title = title || siteContent.seo.title;

    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", description || siteContent.seo.description);
    }

    const keywordsTag = document.querySelector('meta[name="keywords"]');
    if (keywordsTag) {
      keywordsTag.setAttribute("content", keywords || siteContent.seo.keywords);
    }
  }, [description, keywords, title]);
}

export default useSeo;
