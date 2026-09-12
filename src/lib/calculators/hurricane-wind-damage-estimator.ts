import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type HurricaneWindDamageEstimatorInput = {
  windSpeed: number;
  exposureArea: number;
  buildingFactor: number;
};

export type HurricaneWindDamageEstimatorDetails = {
  windSpeed: number;
  exposureArea: number;
  buildingFactor: number;
  damageScore: number;
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

export function calculateHurricaneWindDamageEstimator(
  input: HurricaneWindDamageEstimatorInput,
): CalculationResult<HurricaneWindDamageEstimatorDetails> {
  const windSpeed =
    requirePositive(
      input.windSpeed,
      "Wind speed",
    );

  const exposureArea =
    requirePositive(
      input.exposureArea,
      "Exposure area",
    );

  const buildingFactor =
    requirePositive(
      input.buildingFactor,
      "Building factor",
    );

  const damageScore =
    ((windSpeed * windSpeed) *
      exposureArea *
      buildingFactor) /
    1000;

  let riskLevel = "Low";

  if (damageScore >= 10000) {
    riskLevel = "Extreme";
  } else if (damageScore >= 5000) {
    riskLevel = "High";
  } else if (damageScore >= 1000) {
    riskLevel = "Moderate";
  }

  return {
    value: damageScore,

    formattedValue:
      formatCalculatedNumber(
        damageScore,
      ),

    details: {
      windSpeed,
      exposureArea,
      buildingFactor,
      damageScore,
      riskLevel,
      formula:
        "Damage Score = Wind Speed² × Exposure Area × Building Factor / 1000",
    },
  };
}
