import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type EarthquakeEnergyInput = {
  magnitude: number;
};

export type EarthquakeEnergyDetails = {
  magnitude: number;
  energyJoules: number;
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

export function calculateEarthquakeEnergy(
  input: EarthquakeEnergyInput,
): CalculationResult<EarthquakeEnergyDetails> {
  const magnitude =
    requirePositive(
      input.magnitude,
      "Magnitude",
    );

  const energyJoules =
    10 ** (1.5 * magnitude + 4.8);

  return {
    value: energyJoules,

    formattedValue:
      formatCalculatedNumber(
        energyJoules,
      ),

    details: {
      magnitude,
      energyJoules,
      formula:
        "Energy = 10^(1.5 × Magnitude + 4.8)",
    },
  };
}
