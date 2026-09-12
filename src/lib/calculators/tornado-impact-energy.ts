import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type TornadoImpactEnergyInput = {
  mass: number;
  velocity: number;
};

export type TornadoImpactEnergyDetails = {
  mass: number;
  velocity: number;
  energy: number;
  impactLevel: string;
  formula: string;
};

function requirePositive(
  value: number,
  label: string,
): number {
  if (
    !Number.isFinite(value) ||
    value <= 0
  ) {
    throw new Error(
      `${label} must be a positive number.`,
    );
  }

  return value;
}

export function calculateTornadoImpactEnergy(
  input: TornadoImpactEnergyInput,
): CalculationResult<TornadoImpactEnergyDetails> {
  const mass =
    requirePositive(
      input.mass,
      "Mass",
    );

  const velocity =
    requirePositive(
      input.velocity,
      "Velocity",
    );

  const energy =
    0.5 *
    mass *
    velocity *
    velocity;

  let impactLevel = "Low";

  if (energy >= 1000000) {
    impactLevel = "Extreme";
  } else if (energy >= 500000) {
    impactLevel = "High";
  } else if (energy >= 100000) {
    impactLevel = "Moderate";
  }

  return {
    value: energy,

    formattedValue:
      formatCalculatedNumber(
        energy,
      ),

    details: {
      mass,
      velocity,
      energy,
      impactLevel,
      formula:
        "Impact Energy = 1/2 × Mass × Velocity²",
    },
  };
}
