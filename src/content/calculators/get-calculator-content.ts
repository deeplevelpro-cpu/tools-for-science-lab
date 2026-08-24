import {
  calculatorContent,
  type CalculatorContent,
} from "./calculator-content";

export function getCalculatorContent(
  slug: string,
): CalculatorContent | null {
  return calculatorContent[slug] ?? null;
}
