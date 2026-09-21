import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type EarthquakeMagnitudeInput = {
  amplitude: number;
  referenceAmplitude: number;
};

export type EarthquakeMagnitudeDetails = {
  amplitude: number;
  referenceAmplitude: number;
  magnitude: number;
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

export function calculateEarthquakeMagnitude(
  input: EarthquakeMagnitudeInput,
): CalculationResult<EarthquakeMagnitudeDetails> {
  const amplitude =
    requirePositive(
      input.amplitude,
      "Amplitude",
    );

  const referenceAmplitude =
    requirePositive(
      input.referenceAmplitude,
      "Reference amplitude",
    );

  const magnitude =
    Math.log10(
      amplitude / referenceAmplitude,
    );

  return {
    value: magnitude,
    formattedValue:
      formatCalculatedNumber(
        magnitude,
      ),
    details: {
      amplitude,
      referenceAmplitude,
      magnitude,
      formula:
        "Magnitude = log10(Amplitude ÷ Reference Amplitude)",
    },
  };
}
