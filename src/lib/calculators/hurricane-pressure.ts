import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type HurricanePressureInput = {
  force: number;
  area: number;
};

export type HurricanePressureDetails = {
  force: number;
  area: number;
  pressure: number;
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

export function calculateHurricanePressure(
  input: HurricanePressureInput,
): CalculationResult<HurricanePressureDetails> {
  const force =
    requirePositive(
      input.force,
      "Force",
    );

  const area =
    requirePositive(
      input.area,
      "Area",
    );

  const pressure =
    force /
    area;

  return {
    value: pressure,

    formattedValue:
      formatCalculatedNumber(
        pressure,
      ),

    details: {
      force,
      area,
      pressure,
      formula:
        "Pressure = Force ÷ Area",
    },
  };
}
