import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type HurricaneCategoryInput = {
  windSpeed: number;
};

export type HurricaneCategoryDetails = {
  windSpeed: number;
  category: number;
  description: string;
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

export function calculateHurricaneCategory(
  input: HurricaneCategoryInput,
): CalculationResult<HurricaneCategoryDetails> {
  const windSpeed =
    requirePositive(
      input.windSpeed,
      "Wind speed",
    );

  let category = 0;
  let description = "Below hurricane category threshold.";

  if (windSpeed >= 157) {
    category = 5;
    description = "Category 5 hurricane";
  } else if (windSpeed >= 130) {
    category = 4;
    description = "Category 4 hurricane";
  } else if (windSpeed >= 111) {
    category = 3;
    description = "Category 3 hurricane";
  } else if (windSpeed >= 96) {
    category = 2;
    description = "Category 2 hurricane";
  } else if (windSpeed >= 74) {
    category = 1;
    description = "Category 1 hurricane";
  }

  return {
    value: category,

    formattedValue:
      formatCalculatedNumber(
        category,
      ),

    details: {
      windSpeed,
      category,
      description,
      formula:
        "Category determined from sustained wind speed",
    },
  };
}
