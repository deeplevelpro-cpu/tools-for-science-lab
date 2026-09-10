"use client";

import { useState, type FormEvent } from "react";

import {
  calculateTsunamiWaveSpeed,
  type TsunamiWaveSpeedDetails,
} from "@/lib/calculators/tsunami-wave-speed";

import type { CalculationResult } from "@/types/calculator";

type TsunamiResult =
  CalculationResult<TsunamiWaveSpeedDetails>;

const defaultValues = {
  depth: "4000",
};

export function TsunamiWaveSpeedCalculator() {
  const [values, setValues] =
    useState(defaultValues);

  const [result, setResult] =
    useState<TsunamiResult | null>(null);

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
        calculateTsunamiWaveSpeed({
          depth:
            Number(values.depth),
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
            Ocean depth (meters)
          </span>

          <input
            type="number"
            value={values.depth}
            onChange={(event) =>
              updateValue(
                "depth",
                event.target.value,
              )
            }
          />
        </label>

        <button type="submit">
          Calculate Wave Speed
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
            Tsunami wave speed
          </h2>

          <p>
            <strong>
              {result.formattedValue}
            </strong>{" "}
            km/h
          </p>

          <p>
            Speed:
            {" "}
            {result.details.speedMetersPerSecond.toFixed(2)}
            {" "}
            m/s
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
