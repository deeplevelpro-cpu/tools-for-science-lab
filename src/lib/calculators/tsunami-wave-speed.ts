import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type TsunamiWaveSpeedInput = {
  depth: number;
};

export type TsunamiWaveSpeedDetails = {
  depth: number;
  speedMetersPerSecond: number;
  formula: string;
};

const GRAVITY = 9.81;

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

export function calculateTsunamiWaveSpeed(
  input: TsunamiWaveSpeedInput,
): CalculationResult<TsunamiWaveSpeedDetails> {
  const depth =
    requirePositive(
      input.depth,
      "Water depth",
    );

  const speedMetersPerSecond =
    Math.sqrt(
      GRAVITY * depth,
    );

  return {
    value: speedMetersPerSecond,

    formattedValue:
      formatCalculatedNumber(
        speedMetersPerSecond,
      ),

    details: {
      depth,
      speedMetersPerSecond,
      formula:
        "Wave Speed = √(Gravity × Water Depth)",
    },
  };
}
