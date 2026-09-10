import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type TsunamiWaveSpeedInput = {
  depth: number;
  gravity?: number;
};

export type TsunamiWaveSpeedDetails = {
  depth: number;
  gravity: number;
  speedMetersPerSecond: number;
  speedKilometersPerHour: number;
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

export function calculateTsunamiWaveSpeed(
  input: TsunamiWaveSpeedInput,
): CalculationResult<TsunamiWaveSpeedDetails> {
  const depth =
    requirePositive(
      input.depth,
      "Ocean depth",
    );

  const gravity =
    input.gravity ?? 9.81;

  const speedMetersPerSecond =
    Math.sqrt(
      gravity * depth,
    );

  const speedKilometersPerHour =
    speedMetersPerSecond * 3.6;

  return {
    value: speedKilometersPerHour,
    formattedValue:
      formatCalculatedNumber(
        speedKilometersPerHour,
      ),

    details: {
      depth,
      gravity,
      speedMetersPerSecond,
      speedKilometersPerHour,
      formula:
        "Wave Speed = √(Gravity × Water Depth)",
    },
  };
}
