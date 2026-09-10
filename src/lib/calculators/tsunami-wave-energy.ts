import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type TsunamiWaveEnergyInput = {
  mass: number;
  velocity: number;
};

export type TsunamiWaveEnergyDetails = {
  mass: number;
  velocity: number;
  energy: number;
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

export function calculateTsunamiWaveEnergy(
  input: TsunamiWaveEnergyInput,
): CalculationResult<TsunamiWaveEnergyDetails> {
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
      formula:
        "Energy = 1/2 × Mass × Velocity²",
    },
  };
}
