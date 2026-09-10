import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type LightningStrikeEnergyInput = {
  charge: number;
  voltage: number;
};

export type LightningStrikeEnergyDetails = {
  charge: number;
  voltage: number;
  energy: number;
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

export function calculateLightningStrikeEnergy(
  input: LightningStrikeEnergyInput,
): CalculationResult<LightningStrikeEnergyDetails> {
  const charge =
    requirePositive(
      input.charge,
      "Charge",
    );

  const voltage =
    requirePositive(
      input.voltage,
      "Voltage",
    );

  const energy =
    charge *
    voltage;

  return {
    value: energy,

    formattedValue:
      formatCalculatedNumber(
        energy,
      ),

    details: {
      charge,
      voltage,
      energy,
      formula:
        "Energy = Charge × Voltage",
    },
  };
}
