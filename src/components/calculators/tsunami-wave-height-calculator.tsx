"use client";

import { useState, type FormEvent } from "react";

import {
  calculateTsunamiWaveHeight,
  type TsunamiWaveHeightDetails,
} from "@/lib/calculators/tsunami-wave-height";

import type { CalculationResult } from "@/types/calculator";

type TsunamiHeightResult =
  CalculationResult<TsunamiWaveHeightDetails>;

const defaultValues = {
  amplitude: "10",
};

export function TsunamiWaveHeightCalculator() {
  const [values, setValues] =
    useState(defaultValues);

  const [result, setResult] =
    useState<TsunamiHeightResult | null>(null);

  const [error, setError] =
    useState("");

  function updateValue(
    value: string,
  ) {
    setValues({
      amplitude: value,
    });

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
        calculateTsunamiWaveHeight({
          amplitude:
            Number(values.amplitude),
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
            Wave amplitude (m)
          </span>

          <input
            type="number"
            value={values.amplitude}
            onChange={(event) =>
              updateValue(
                event.target.value,
              )
            }
          />
        </label>

        <button type="submit">
          Calculate Tsunami Wave Height
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
            Tsunami wave height
          </h2>

          <p>
            <strong>
              {result.formattedValue}
            </strong>{" "}
            meters
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
