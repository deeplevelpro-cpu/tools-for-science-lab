import type {
  CalculatorContent,
} from "../calculator-content";

import type {
  CalculatorSEOContent,
} from "./types";


export type ExpertCalculatorContent = {
  formulaExplanation?: string;
  example?: string;
  commonMistakes?: string[];
};


export type ExtendedCalculatorContent =
  CalculatorContent & {
    seo?: CalculatorSEOContent;
    expert?: ExpertCalculatorContent;
  };


export function mergeCalculatorContent(
  base: CalculatorContent | null,
  seo: CalculatorSEOContent | null,
  expert: ExpertCalculatorContent | null,
): ExtendedCalculatorContent | null {

  if (!base && !seo && !expert) {
    return null;
  }

  return {
    introduction:
      seo?.seoIntroduction ??
      base?.introduction ??
      "",

    formulaExplanation:
      expert?.formulaExplanation ??
      seo?.howItWorks ??
      base?.formulaExplanation ??
      "",

    example:
      expert?.example ??
      seo?.formula ??
      base?.example ??
      "",

    commonMistakes:
      expert?.commonMistakes ??
      base?.commonMistakes ??
      [],

    seo: seo ?? undefined,

    expert: expert ?? undefined,
  };
}
