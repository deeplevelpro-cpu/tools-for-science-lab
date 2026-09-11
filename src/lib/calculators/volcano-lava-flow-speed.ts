import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type VolcanoLavaFlowSpeedInput = {
  distance: number;
  time: number;
};

export type VolcanoLavaFlowSpeedDetails = {
  distance: number;
  time: number;
  speed: number;
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

export function calculateVolcanoLavaFlowSpeed(
  input: VolcanoLavaFlowSpeedInput,
): CalculationResult<VolcanoLavaFlowSpeedDetails> {
  const distance =
    requirePositive(
      input.distance,
      "Distance",
    );

  const time =
    requirePositive(
      input.time,
      "Time",
    );

  const speed =
    distance /
    time;

  return {
    value: speed,

    formattedValue:
      formatCalculatedNumber(
        speed,
      ),

    details: {
      distance,
      time,
      speed,
      formula:
        "Speed = Distance ÷ Time",
    },
  };
}
