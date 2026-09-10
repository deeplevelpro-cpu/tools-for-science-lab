import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type SnowInput = {
  precipitation: number;
  snowRatio: number;
};

export type SnowDetails = {
  precipitation: number;
  snowRatio: number;
  snowfallDepth: number;
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

export function calculateSnow(
  input: SnowInput,
): CalculationResult<SnowDetails> {
  const precipitation =
    requirePositive(
      input.precipitation,
      "Precipitation",
    );

  const snowRatio =
    requirePositive(
      input.snowRatio,
      "Snow ratio",
    );

  const snowfallDepth =
    precipitation * snowRatio;

  return {
    value: snowfallDepth,
    formattedValue:
      formatCalculatedNumber(
        snowfallDepth,
      ),
    details: {
      precipitation,
      snowRatio,
      snowfallDepth,
      formula:
        "Snow Depth = Liquid Precipitation × Snow Ratio",
    },
  };
}
