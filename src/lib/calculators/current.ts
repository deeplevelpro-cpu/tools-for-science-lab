import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type CurrentVariable =
  | "current"
  | "voltage"
  | "resistance";

export type CurrentInput = {
  current?: number;
  voltage?: number;
  resistance?: number;
  solveFor: CurrentVariable;
};

export type CurrentDetails = {
  current: number;
  voltage: number;
  resistance: number;
  solvedVariable: CurrentVariable;
  formula: string;
};

const variableLabels: Record<
  CurrentVariable,
  string
> = {
  current: "Current",
  voltage: "Voltage",
  resistance: "Resistance",
};

function requireFiniteValue(
  value: number | undefined,
  variable: CurrentVariable,
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

function requireNonZeroResistance(
  value: number | undefined,
): number {
  const finiteValue = requireFiniteValue(
    value,
    "resistance",
  );

  if (finiteValue === 0) {
    throw new Error(
      "Resistance cannot be zero when calculating current.",
    );
  }

  return finiteValue;
}

export function calculateCurrent({
  current,
  voltage,
  resistance,
  solveFor,
}: CurrentInput): CalculationResult<CurrentDetails> {
  let calculatedCurrent = current;
  let calculatedVoltage = voltage;
  let calculatedResistance = resistance;

  switch (solveFor) {
    case "current": {
      calculatedVoltage =
        requireFiniteValue(
          voltage,
          "voltage",
        );

      calculatedResistance =
        requireNonZeroResistance(
          resistance,
        );

      calculatedCurrent =
        calculatedVoltage /
        calculatedResistance;

      break;
    }

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

    case "resistance": {
      calculatedVoltage =
        requireFiniteValue(
          voltage,
          "voltage",
        );

      calculatedCurrent =
        requireNonZeroResistance(
          current,
        );

      calculatedResistance =
        calculatedVoltage /
        calculatedCurrent;

      break;
    }

    default: {
      const exhaustiveCheck: never = solveFor;

      throw new Error(
        `Unsupported current variable: ${exhaustiveCheck}`,
      );
    }
  }

  const solvedValue = {
    current: calculatedCurrent,
    voltage: calculatedVoltage,
    resistance: calculatedResistance,
  }[solveFor];

  if (
    calculatedCurrent === undefined ||
    calculatedVoltage === undefined ||
    calculatedResistance === undefined ||
    solvedValue === undefined ||
    !Number.isFinite(solvedValue)
  ) {
    throw new Error(
      "The current calculation could not be completed.",
    );
  }

  return {
    value: solvedValue,
    formattedValue:
      formatCalculatedNumber(solvedValue),
    details: {
      current: calculatedCurrent,
      voltage: calculatedVoltage,
      resistance: calculatedResistance,
      solvedVariable: solveFor,
      formula: "I = V / R",
    },
  };
}

export function calculateCurrentFromVoltage(
  voltage: number,
  resistance: number,
) {
  return calculateCurrent({
    voltage,
    resistance,
    solveFor: "current",
  });
}
