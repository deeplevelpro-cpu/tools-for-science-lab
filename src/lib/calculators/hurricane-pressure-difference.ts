import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type HurricanePressureDifferenceInput = {
  pressureHigh: number;
  pressureLow: number;
};

export type HurricanePressureDifferenceDetails = {
  pressureHigh: number;
  pressureLow: number;
  difference: number;
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

export function calculateHurricanePressureDifference(
  input: HurricanePressureDifferenceInput,
): CalculationResult<HurricanePressureDifferenceDetails> {
  const pressureHigh =
    requirePositive(
      input.pressureHigh,
      "High pressure",
    );

  const pressureLow =
    requirePositive(
      input.pressureLow,
      "Low pressure",
    );

  const difference =
    pressureHigh -
    pressureLow;

  return {
    value: difference,

    formattedValue:
      formatCalculatedNumber(
        difference,
      ),

    details: {
      pressureHigh,
      pressureLow,
      difference,
      formula:
        "Pressure Difference = High Pressure − Low Pressure",
    },
  };
}
