import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type SpinInput = {
  mass?: number;
  radius?: number;
  angularVelocity?: number;
};

export type SpinDetails = {
  mass: number;
  radius: number;
  angularVelocity: number;
  momentOfInertia: number;
  angularMomentum: number;
  formula: string;
};

function requirePositive(
  value: number | undefined,
  name: string,
): number {
  if (
    value === undefined ||
    !Number.isFinite(value) ||
    value <= 0
  ) {
    throw new Error(
      `${name} must be greater than zero.`,
    );
  }

  return value;
}

export function calculateSpin({
  mass,
  radius,
  angularVelocity,
}: SpinInput): CalculationResult<SpinDetails> {
  const m = requirePositive(mass, "Mass");
  const r = requirePositive(radius, "Radius");
  const omega = requirePositive(
    angularVelocity,
    "Angular velocity",
  );

  const momentOfInertia = m * r * r;

  const angularMomentum =
    momentOfInertia * omega;

  return {
    value: angularMomentum,
    formattedValue:
      formatCalculatedNumber(
        angularMomentum,
      ),
    details: {
      mass: m,
      radius: r,
      angularVelocity: omega,
      momentOfInertia,
      angularMomentum,
      formula:
        "I = mr², L = Iω = mr²ω",
    },
  };
}
