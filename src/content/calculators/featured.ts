import type { CalculatorDefinition } from "./registry";
import { calculators } from "./registry";

const featuredSlugs = [
  "force-calculator",
  "acceleration-calculator",
  "momentum-calculator",
  "ohms-law-calculator",
  "molarity-calculator",
  "molecular-weight-calculator",
  "ph-calculator",
  "significant-figures-calculator",
  "standard-deviation-calculator",
  "measurement-uncertainty-calculator",
] as const;

export const featuredCalculators: CalculatorDefinition[] = featuredSlugs
  .map((slug) =>
    calculators.find(
      (calculator) => calculator.slug === slug,
    ),
  )
  .filter(
    (calculator): calculator is CalculatorDefinition =>
      Boolean(calculator),
  );
