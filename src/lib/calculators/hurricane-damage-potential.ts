import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type HurricaneDamagePotentialInput = {
  windSpeed: number;
  category: number;
  populationDensity: number;
};

export type HurricaneDamagePotentialDetails = {
  windSpeed: number;
  category: number;
  populationDensity: number;
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

export function calculateHurricaneDamagePotential(
  input: HurricaneDamagePotentialInput,
): CalculationResult<HurricaneDamagePotentialDetails> {
  const windSpeed =
    requirePositive(
      input.windSpeed,
      "Wind speed",
    );

  const category =
    requirePositive(
      input.category,
      "Category",
    );

  const populationDensity =
    requirePositive(
      input.populationDensity,
      "Population density",
    );

  const damageScore =
    windSpeed *
    category *
    populationDensity /
    100;

  let riskLevel = "Low";

  if (damageScore >= 1000) {
    riskLevel = "Extreme";
  } else if (damageScore >= 500) {
    riskLevel = "High";
  } else if (damageScore >= 100) {
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
      category,
      populationDensity,
      damageScore,
      riskLevel,
      formula:
        "Damage Score = Wind Speed × Category × Population Density / 100",
    },
  };
}
