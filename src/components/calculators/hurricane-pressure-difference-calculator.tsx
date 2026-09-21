"use client";

import { useState, type FormEvent } from "react";

import {
  calculateHurricanePressureDifference,
  type HurricanePressureDifferenceDetails,
} from "@/lib/calculators/hurricane-pressure-difference";

import type { CalculationResult } from "@/types/calculator";

type HurricanePressureDifferenceResult =
  CalculationResult<HurricanePressureDifferenceDetails>;

const defaultValues = {
  pressureHigh: "1015",
  pressureLow: "950",
};

export function HurricanePressureDifferenceCalculator() {
  const [values, setValues] =
    useState(defaultValues);

  const [result, setResult] =
    useState<HurricanePressureDifferenceResult | null>(null);

  const [error, setError] =
    useState("");

  function updateValue(
    key: keyof typeof values,
    value: string,
  ) {
    setValues((current) => ({
      ...current,
      [key]: value,
    }));

    setResult(null);
    setError("");
  }

  function calculate(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setError("");
    setResult(null);

    try {
      const calculation =
        calculateHurricanePressureDifference({
          pressureHigh:
            Number(values.pressureHigh),

          pressureLow:
            Number(values.pressureLow),
        });

      setResult(calculation);
    } catch (calculationError) {
      setError(
        calculationError instanceof Error
          ? calculationError.message
          : "Calculation failed.",
      );
    }
  }

  return (
    <div className="calculator-card">
      <form onSubmit={calculate}>
        <label>
          <span>
            High pressure (hPa)
          </span>

          <input
            type="number"
            value={values.pressureHigh}
            onChange={(event) =>
              updateValue(
                "pressureHigh",
                event.target.value,
              )
            }
          />
        </label>

        <label>
          <span>
            Low pressure (hPa)
          </span>

          <input
            type="number"
            value={values.pressureLow}
            onChange={(event) =>
              updateValue(
                "pressureLow",
                event.target.value,
              )
            }
          />
        </label>

        <button type="submit">
          Calculate Pressure Difference
        </button>
      </form>

      {error && (
        <p role="alert">
          {error}
        </p>
      )}

      {result && (
        <section>
          <h2>
            Hurricane pressure difference
          </h2>

          <p>
            <strong>
              {result.formattedValue}
            </strong>{" "}
            hPa
          </p>

          <p>
            Formula:
            {" "}
            {result.details.formula}
          </p>
        </section>
      )}
    </div>
  );
}
