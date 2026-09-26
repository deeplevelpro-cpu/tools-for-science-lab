import type { CalculatorDefinition } from "./registry";

const thermodynamicsSlugs = [
  "ideal-gas-law-calculator",
  "van-der-waals-equation-calculator",
  "combined-gas-law-calculator",
  "boyles-law-calculator",
  "charles-law-calculator",
  "gay-lussacs-law-calculator",
  "daltons-law-calculator",
  "pressure-calculator",
  "specific-heat-calculator",
] as const;

export function getThermodynamicsCalculators(
  calculators: readonly CalculatorDefinition[],
) {
  return calculators.filter((calculator) =>
    thermodynamicsSlugs.includes(
      calculator.slug as (typeof thermodynamicsSlugs)[number],
    ),
  );
}
