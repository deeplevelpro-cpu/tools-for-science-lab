import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type TornadoWindSpeedEstimatorInput = {
  pressureDifference: number;
  airDensity: number;
};

export type TornadoWindSpeedEstimatorDetails = {
  pressureDifference: number;
  airDensity: number;
  windSpeed: number;
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

export function calculateTornadoWindSpeedEstimator(
  input: TornadoWindSpeedEstimatorInput,
): CalculationResult<TornadoWindSpeedEstimatorDetails> {
  const pressureDifference =
    requirePositive(
      input.pressureDifference,
      "Pressure difference",
    );

  const airDensity =
    requirePositive(
      input.airDensity,
      "Air density",
    );

  const windSpeed =
    Math.sqrt(
      (2 * pressureDifference) /
        airDensity,
    );

  return {
    value: windSpeed,

    formattedValue:
      formatCalculatedNumber(
        windSpeed,
      ),

    details: {
      pressureDifference,
      airDensity,
      windSpeed,
      formula:
        "Wind Speed = √(2 × Pressure Difference / Air Density)",
    },
  };
}
