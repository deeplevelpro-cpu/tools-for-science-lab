import { getCalculatorContent } from "@/content/calculators/get-calculator-content";

import { CalculatorContentSection } from "./index";

type CalculatorContentLoaderProps = {
  slug: string;
};

export function CalculatorContentLoader({
  slug,
}: CalculatorContentLoaderProps) {
  const content = getCalculatorContent(slug);

  if (!content) {
    return null;
  }

  return (
    <CalculatorContentSection content={content} />
  );
}
