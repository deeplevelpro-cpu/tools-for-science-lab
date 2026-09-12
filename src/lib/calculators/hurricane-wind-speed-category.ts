import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type HurricaneWindSpeedCategoryInput = {
  windSpeed: number;
};

export type HurricaneWindSpeedCategoryDetails = {
  windSpeed: number;
  category: number;
  categoryName: string;
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

export function calculateHurricaneWindSpeedCategory(
  input: HurricaneWindSpeedCategoryInput,
): CalculationResult<HurricaneWindSpeedCategoryDetails> {
  const windSpeed =
    requirePositive(
      input.windSpeed,
      "Wind speed",
    );

  let category = 0;
  let categoryName =
    "Tropical storm or below hurricane threshold";

  if (windSpeed >= 157) {
    category = 5;
    categoryName = "Category 5 Hurricane";
  } else if (windSpeed >= 130) {
    category = 4;
    categoryName = "Category 4 Hurricane";
  } else if (windSpeed >= 111) {
    category = 3;
    categoryName = "Category 3 Hurricane";
  } else if (windSpeed >= 96) {
    category = 2;
    categoryName = "Category 2 Hurricane";
  } else if (windSpeed >= 74) {
    category = 1;
    categoryName = "Category 1 Hurricane";
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
      categoryName,
      formula:
        "Category = Sustained Wind Speed Classification",
    },
  };
}
