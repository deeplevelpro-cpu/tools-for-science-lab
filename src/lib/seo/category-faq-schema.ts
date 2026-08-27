import { categorySEOContent } from "@/content/categories/seo-content";

export function createCategoryFAQSchema(
  slug: string,
) {
  const content =
    categorySEOContent[slug];

  if (!content?.faqs.length) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
