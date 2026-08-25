import {
  calculatorSEOContent,
} from "./seo-content/registry";

import type {
  CalculatorSEOContent,
} from "./seo-content/types";


export function getCalculatorSEOContent(
  slug: string,
): CalculatorSEOContent | null {
  return calculatorSEOContent[slug] ?? null;
}
