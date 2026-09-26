import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type OhmsLawVariable =
  | "voltage"
  | "current"
  | "resistance";

export type OhmsLawInput = {
  voltage?: number;
  current?: number;
  resistance?: number;
  solveFor: OhmsLawVariable;
};

export type OhmsLawDetails = {
  voltage: number;
  current: number;
  resistance: number;
  solvedVariable: OhmsLawVariable;
  formula: string;
};

const variableLabels: Record<
  OhmsLawVariable,
  string
> = {
  voltage: "Voltage",
  current: "Current",
  resistance: "Resistance",
};

function requireFiniteValue(
  value: number | undefined,
  variable: OhmsLawVariable,
): number {
  if (
    value === undefined ||
    !Number.isFinite(value)
  ) {
    throw new Error(
      `${variableLabels[variable]} must be a finite number.`,
    );
  }

  return value;
}

function requireNonZeroValue(
  value: number | undefined,
  variable: OhmsLawVariable,
): number {
  const finiteValue = requireFiniteValue(
    value,
    variable,
  );

  if (finiteValue === 0) {
    throw new Error(
      `${variableLabels[variable]} cannot be zero.`,
    );
  }

  return finiteValue;
}

export function calculateOhmsLaw({
  voltage,
  current,
  resistance,
  solveFor,
}: OhmsLawInput): CalculationResult<OhmsLawDetails> {
  let calculatedVoltage = voltage;
  let calculatedCurrent = current;
  let calculatedResistance = resistance;

  switch (solveFor) {
    case "voltage": {
      calculatedCurrent =
        requireFiniteValue(
          current,
          "current",
        );

      calculatedResistance =
        requireFiniteValue(
          resistance,
          "resistance",
        );

      calculatedVoltage =
        calculatedCurrent *
        calculatedResistance;

      break;
    }

    case "current": {
      calculatedVoltage =
        requireFiniteValue(
          voltage,
          "voltage",
        );

      calculatedResistance =
        requireNonZeroValue(
          resistance,
          "resistance",
        );

      calculatedCurrent =
        calculatedVoltage /
        calculatedResistance;

      break;
    }

    case "resistance": {
      calculatedVoltage =
        requireFiniteValue(
          voltage,
          "voltage",
        );

      calculatedCurrent =
        requireNonZeroValue(
          current,
          "current",
        );

      calculatedResistance =
        calculatedVoltage /
        calculatedCurrent;

      break;
    }

    default: {
      const exhaustiveCheck: never = solveFor;

      throw new Error(
        `Unsupported Ohm's law variable: ${exhaustiveCheck}`,
      );
    }
  }

  const solvedValue = {
    voltage: calculatedVoltage,
    current: calculatedCurrent,
    resistance: calculatedResistance,
  }[solveFor];

  if (
    calculatedVoltage === undefined ||
    calculatedCurrent === undefined ||
    calculatedResistance === undefined ||
    solvedValue === undefined ||
    !Number.isFinite(solvedValue)
  ) {
    throw new Error(
      "The Ohm's law calculation could not be completed.",
    );
  }

  return {
    value: solvedValue,
    formattedValue:
      formatCalculatedNumber(solvedValue),
    details: {
      voltage: calculatedVoltage,
      current: calculatedCurrent,
      resistance: calculatedResistance,
      solvedVariable: solveFor,
      formula: "V = IR",
    },
  };
}
