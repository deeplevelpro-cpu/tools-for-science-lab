import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type TsunamiTravelTimeInput = {
  distance: number;
  speed: number;
};

export type TsunamiTravelTimeDetails = {
  distance: number;
  speed: number;
  time: number;
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

export function calculateTsunamiTravelTime(
  input: TsunamiTravelTimeInput,
): CalculationResult<TsunamiTravelTimeDetails> {
  const distance =
    requirePositive(
      input.distance,
      "Distance",
    );

  const speed =
    requirePositive(
      input.speed,
      "Speed",
    );

  const time =
    distance /
    speed;

  return {
    value: time,

    formattedValue:
      formatCalculatedNumber(
        time,
      ),

    details: {
      distance,
      speed,
      time,
      formula:
        "Travel Time = Distance ÷ Speed",
    },
  };
}
