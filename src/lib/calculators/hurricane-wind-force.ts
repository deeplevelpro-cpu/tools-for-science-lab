import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type HurricaneWindForceInput = {
  mass: number;
  acceleration: number;
};

export type HurricaneWindForceDetails = {
  mass: number;
  acceleration: number;
  force: number;
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

export function calculateHurricaneWindForce(
  input: HurricaneWindForceInput,
): CalculationResult<HurricaneWindForceDetails> {
  const mass =
    requirePositive(
      input.mass,
      "Mass",
    );

  const acceleration =
    requirePositive(
      input.acceleration,
      "Acceleration",
    );

  const force =
    mass *
    acceleration;

  return {
    value: force,

    formattedValue:
      formatCalculatedNumber(
        force,
      ),

    details: {
      mass,
      acceleration,
      force,
      formula:
        "Force = Mass × Acceleration",
    },
  };
}
