import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type HurricaneStormSurgeInput = {
  windSpeed: number;
  pressureDrop: number;
  coastalSlope: number;
};

export type HurricaneStormSurgeDetails = {
  windSpeed: number;
  pressureDrop: number;
  coastalSlope: number;
  surgeHeight: number;
  riskLevel: string;
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

export function calculateHurricaneStormSurge(
  input: HurricaneStormSurgeInput,
): CalculationResult<HurricaneStormSurgeDetails> {
  const windSpeed =
    requirePositive(
      input.windSpeed,
      "Wind speed",
    );

  const pressureDrop =
    requirePositive(
      input.pressureDrop,
      "Pressure drop",
    );

  const coastalSlope =
    requirePositive(
      input.coastalSlope,
      "Coastal slope",
    );

  const surgeHeight =
    (windSpeed * 0.02) +
    (pressureDrop * 0.01) /
    coastalSlope;

  let riskLevel = "Low";

  if (surgeHeight >= 5) {
    riskLevel = "Extreme";
  } else if (surgeHeight >= 3) {
    riskLevel = "High";
  } else if (surgeHeight >= 1) {
    riskLevel = "Moderate";
  }

  return {
    value: surgeHeight,

    formattedValue:
      formatCalculatedNumber(
        surgeHeight,
      ),

    details: {
      windSpeed,
      pressureDrop,
      coastalSlope,
      surgeHeight,
      riskLevel,
      formula:
        "Storm Surge Height = (Wind Speed × 0.02) + (Pressure Drop × 0.01) / Coastal Slope",
    },
  };
}
