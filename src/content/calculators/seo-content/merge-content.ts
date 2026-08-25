import type {
  CalculatorContent,
} from "../calculator-content";

import type {
  CalculatorSEOContent,
} from "./types";


export type ExtendedCalculatorContent =
  CalculatorContent & {
    seo?: CalculatorSEOContent;
  };


export function mergeCalculatorContent(
  base: CalculatorContent | null,
  seo: CalculatorSEOContent | null,
): ExtendedCalculatorContent | null {

  if (!base && !seo) {
    return null;
  }

  return {
    introduction:
      seo?.seoIntroduction ??
      base?.introduction ??
      "",

    formulaExplanation:
      seo?.howItWorks ??
      base?.formulaExplanation ??
      "",

    example:
      seo?.formula ??
      base?.example ??
      "",

    commonMistakes:
      base?.commonMistakes ??
      [],

    seo: seo ?? undefined,
  };
}
