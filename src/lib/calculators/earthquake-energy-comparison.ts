import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type EarthquakeEnergyComparisonInput = {
  magnitude1: number;
  magnitude2: number;
};

export type EarthquakeEnergyComparisonDetails = {
  magnitude1: number;
  magnitude2: number;
  energyRatio: number;
  formula: string;
};

function requireMagnitude(
  value: number,
  label: string,
): number {
  if (
    !Number.isFinite(value)
  ) {
    throw new Error(
      `${label} must be a valid number.`,
    );
  }

  return value;
}

export function calculateEarthquakeEnergyComparison(
  input: EarthquakeEnergyComparisonInput,
): CalculationResult<EarthquakeEnergyComparisonDetails> {
  const magnitude1 =
    requireMagnitude(
      input.magnitude1,
      "First magnitude",
    );

  const magnitude2 =
    requireMagnitude(
      input.magnitude2,
      "Second magnitude",
    );

  const energyRatio =
    10 ** (1.5 * (magnitude2 - magnitude1));

  return {
    value: energyRatio,

    formattedValue:
      formatCalculatedNumber(
        energyRatio,
      ),

    details: {
      magnitude1,
      magnitude2,
      energyRatio,
      formula:
        "Energy Ratio = 10^(1.5 × Difference in Magnitude)",
    },
  };
}
