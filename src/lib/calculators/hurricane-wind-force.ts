import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type HurricaneWindForceInput = {
  windSpeed: number;
  area: number;
};

export type HurricaneWindForceDetails = {
  windSpeed: number;
  area: number;
  force: number;
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

export function calculateHurricaneWindForce(
  input: HurricaneWindForceInput,
): CalculationResult<HurricaneWindForceDetails> {
  const windSpeed =
    requirePositive(
      input.windSpeed,
      "Wind speed",
    );

  const area =
    requirePositive(
      input.area,
      "Area",
    );

  const force =
    0.5 *
    1.225 *
    (windSpeed * 0.44704) ** 2 *
    area;

  let riskLevel = "Low";

  if (force >= 100000) {
    riskLevel = "Extreme";
  } else if (force >= 50000) {
    riskLevel = "High";
  } else if (force >= 10000) {
    riskLevel = "Moderate";
  }

  return {
    value: force,

    formattedValue:
      formatCalculatedNumber(
        force,
      ),

    details: {
      windSpeed,
      area,
      force,
      riskLevel,
      formula:
        "Wind Force = 0.5 × Air Density × Wind Velocity² × Area",
    },
  };
}
