import { calculatorHubSEOContent } from "@/content/calculators/hub-seo-content";

export function createCalculatorHubFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity:
      calculatorHubSEOContent.faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
  };
}
