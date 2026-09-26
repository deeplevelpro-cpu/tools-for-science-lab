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
  "kinetic-energy-calculator",
  "elastic-potential-energy-calculator",
  "gravitational-potential-energy-calculator",
  "rotational-kinetic-energy-calculator",
  "free-fall-calculator",
  "friction-calculator",
  "impulse-calculator",
  "average-speed-calculator",
  "average-velocity-calculator",
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
