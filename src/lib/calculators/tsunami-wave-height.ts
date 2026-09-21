import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type TsunamiWaveHeightInput = {
  amplitude: number;
};

export type TsunamiWaveHeightDetails = {
  amplitude: number;
  height: number;
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

export function calculateTsunamiWaveHeight(
  input: TsunamiWaveHeightInput,
): CalculationResult<TsunamiWaveHeightDetails> {
  const amplitude =
    requirePositive(
      input.amplitude,
      "Wave amplitude",
    );

  const height =
    2 * amplitude;

  return {
    value: height,

    formattedValue:
      formatCalculatedNumber(
        height,
      ),

    details: {
      amplitude,
      height,
      formula:
        "Wave Height = 2 × Amplitude",
    },
  };
}
