import type { CalculatorDefinition } from "./registry";

const dynamicsSlugs = [
  "force-calculator",
  "acceleration-calculator",
  "momentum-calculator",
  "angular-momentum-calculator",
  "rotational-dynamics-calculator",
  "torque-calculator",
  "centripetal-force-calculator",
  "projectile-motion-calculator",
  "work-calculator",
  "power-calculator",
] as const;

export function getDynamicsCalculators(
  calculators: readonly CalculatorDefinition[],
) {
  return calculators.filter((calculator) =>
    dynamicsSlugs.includes(
      calculator.slug as (typeof dynamicsSlugs)[number],
    ),
  );
}
