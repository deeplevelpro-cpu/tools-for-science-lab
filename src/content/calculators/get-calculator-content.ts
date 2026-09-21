import {
  calculatorContent,
  type CalculatorContent,
} from "./calculator-content";

import {
  getCalculatorSEOContent,
} from "./get-seo-content";

import {
  getExpertCalculatorContent,
} from "./get-expert-content";

import {
  mergeCalculatorContent,
  type ExtendedCalculatorContent,
} from "./seo-content/merge-content";


export function getCalculatorContent(
  slug: string,
): ExtendedCalculatorContent | null {

  const baseContent: CalculatorContent | null =
    calculatorContent[slug] ?? null;

  const seoContent =
    getCalculatorSEOContent(slug);

  const expertContent =
    getExpertCalculatorContent(slug);

  return mergeCalculatorContent(
    baseContent,
    seoContent,
    expertContent,
  );
}
