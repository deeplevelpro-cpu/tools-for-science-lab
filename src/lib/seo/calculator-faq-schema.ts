import { createFAQSchema } from "./faq-schema";

import { getCalculatorSEOContent } from "@/content/calculators/get-seo-content";


export function createCalculatorFAQSchema(
  slug: string,
) {
  const seoContent =
    getCalculatorSEOContent(slug);

  if (!seoContent?.faqs.length) {
    return null;
  }

  return createFAQSchema(
    seoContent.faqs,
  );
}
