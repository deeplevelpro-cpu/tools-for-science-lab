import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type WaterLevelInput = {
  length: number;
  width: number;
  depth: number;
};

export type WaterLevelDetails = {
  length: number;
  width: number;
  depth: number;
  volumeCubicMeters: number;
  volumeLiters: number;
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

export function calculateWaterLevel(
  input: WaterLevelInput,
): CalculationResult<WaterLevelDetails> {
  const length =
    requirePositive(
      input.length,
      "Length",
    );

  const width =
    requirePositive(
      input.width,
      "Width",
    );

  const depth =
    requirePositive(
      input.depth,
      "Depth",
    );

  const volumeCubicMeters =
    length *
    width *
    depth;

  const volumeLiters =
    volumeCubicMeters *
    1000;

  return {
    value: volumeLiters,
    formattedValue:
      formatCalculatedNumber(
        volumeLiters,
      ),
    details: {
      length,
      width,
      depth,
      volumeCubicMeters,
      volumeLiters,
      formula:
        "Volume = Length × Width × Depth",
    },
  };
}
