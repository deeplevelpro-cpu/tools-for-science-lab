import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type HurricaneEvacuationZoneInput = {
  category: number;
  windSpeed: number;
  distanceFromCoast: number;
};

export type HurricaneEvacuationZoneDetails = {
  category: number;
  windSpeed: number;
  distanceFromCoast: number;
  evacuationScore: number;
  zone: string;
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

export function calculateHurricaneEvacuationZone(
  input: HurricaneEvacuationZoneInput,
): CalculationResult<HurricaneEvacuationZoneDetails> {
  const category =
    requirePositive(
      input.category,
      "Category",
    );

  const windSpeed =
    requirePositive(
      input.windSpeed,
      "Wind speed",
    );

  const distanceFromCoast =
    requirePositive(
      input.distanceFromCoast,
      "Distance from coast",
    );

  const evacuationScore =
    (category * windSpeed) /
    distanceFromCoast;

  let zone = "Low Risk Zone";

  if (evacuationScore >= 150) {
    zone = "Mandatory Evacuation Zone";
  } else if (evacuationScore >= 75) {
    zone = "High Risk Zone";
  } else if (evacuationScore >= 30) {
    zone = "Moderate Risk Zone";
  }

  return {
    value: evacuationScore,

    formattedValue:
      formatCalculatedNumber(
        evacuationScore,
      ),

    details: {
      category,
      windSpeed,
      distanceFromCoast,
      evacuationScore,
      zone,
      formula:
        "Evacuation Score = Category × Wind Speed / Distance From Coast",
    },
  };
}
