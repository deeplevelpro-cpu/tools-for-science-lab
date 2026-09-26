import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type VanDerWaalsVariable =
  | "pressure"
  | "volume"
  | "temperature";

export type VanDerWaalsInput = {
  pressure?: number;
  volume?: number;
  temperature?: number;
  moles: number;
  constantA: number;
  constantB: number;
  solveFor: VanDerWaalsVariable;
};

export type VanDerWaalsDetails = {
  pressure: number;
  volume: number;
  temperature: number;
  moles: number;
  constantA: number;
  constantB: number;
  formula: string;
  solvedVariable: VanDerWaalsVariable;
};

const R = 0.082057;

function positive(value: number, name: string) {
  if (!Number.isFinite(value) || value <= 0) {
    throw new Error(`${name} must be greater than zero.`);
  }

  return value;
}

export function calculateVanDerWaals({
  pressure,
  volume,
  temperature,
  moles,
  constantA,
  constantB,
  solveFor,
}: VanDerWaalsInput): CalculationResult<VanDerWaalsDetails> {

  const n = positive(moles, "Moles");
  const a = positive(constantA, "Constant a");
  const b = positive(constantB, "Constant b");

  let calculatedPressure = pressure ?? 0;
  let calculatedVolume = volume ?? 0;
  let calculatedTemperature = temperature ?? 0;

  if (solveFor === "pressure") {
    calculatedVolume = positive(volume ?? 0, "Volume");
    calculatedTemperature = positive(
      temperature ?? 0,
      "Temperature",
    );

    calculatedPressure =
      (n * R * calculatedTemperature) /
        (calculatedVolume - n * b) -
      (a * n * n) /
        (calculatedVolume * calculatedVolume);
  }

  if (solveFor === "temperature") {
    calculatedPressure = positive(pressure ?? 0, "Pressure");
    calculatedVolume = positive(volume ?? 0, "Volume");

    calculatedTemperature =
      ((calculatedPressure +
        (a * n * n) /
          (calculatedVolume * calculatedVolume)) *
        (calculatedVolume - n * b)) /
      (n * R);
  }

  if (solveFor === "volume") {
    throw new Error(
      "Volume solving requires numerical iteration and will be added next.",
    );
  }

  return {
    value: calculatedPressure,
    formattedValue: formatCalculatedNumber(calculatedPressure),
    details: {
      pressure: calculatedPressure,
      volume: calculatedVolume,
      temperature: calculatedTemperature,
      moles: n,
      constantA: a,
      constantB: b,
      formula:
        "(P + an²/V²)(V - nb) = nRT",
      solvedVariable: solveFor,
    },
  };
}
