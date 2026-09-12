import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type HurricaneWindEnergyEstimateInput = {
  airMass: number;
  windSpeed: number;
  duration: number;
};

export type HurricaneWindEnergyEstimateDetails = {
  airMass: number;
  windSpeed: number;
  duration: number;
  energyEstimate: number;
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

export function calculateHurricaneWindEnergyEstimate(
  input: HurricaneWindEnergyEstimateInput,
): CalculationResult<HurricaneWindEnergyEstimateDetails> {
  const airMass =
    requirePositive(
      input.airMass,
      "Air mass",
    );

  const windSpeed =
    requirePositive(
      input.windSpeed,
      "Wind speed",
    );

  const duration =
    requirePositive(
      input.duration,
      "Duration",
    );

  const energyEstimate =
    0.5 *
    airMass *
    windSpeed *
    windSpeed *
    duration;

  return {
    value: energyEstimate,

    formattedValue:
      formatCalculatedNumber(
        energyEstimate,
      ),

    details: {
      airMass,
      windSpeed,
      duration,
      energyEstimate,
      formula:
        "Energy Estimate = 1/2 × Mass × Velocity² × Time",
    },
  };
}
