import type { CalculatorDefinition } from "./registry";

const electricitySlugs = [
  "ohms-law-calculator",
  "power-calculator",
] as const;

export function getElectricityCalculators(
  calculators: readonly CalculatorDefinition[],
) {
  return calculators.filter((calculator) =>
    electricitySlugs.includes(
      calculator.slug as (typeof electricitySlugs)[number],
    ),
  );
}
