import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type TornadoWindSpeedInput = {
  distance: number;
  time: number;
};

export type TornadoWindSpeedDetails = {
  distance: number;
  time: number;
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

export function calculateTornadoWindSpeed(
  input: TornadoWindSpeedInput,
): CalculationResult<TornadoWindSpeedDetails> {
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

  const speedMetersPerSecond =
    distance / time;

  const speedKilometersPerHour =
    speedMetersPerSecond * 3.6;

  return {
    value: speedKilometersPerHour,

    formattedValue:
      formatCalculatedNumber(
        speedKilometersPerHour,
      ),

    details: {
      distance,
      time,
      speedMetersPerSecond,
      speedKilometersPerHour,
      formula:
        "Wind Speed = Distance ÷ Time",
    },
  };
}
