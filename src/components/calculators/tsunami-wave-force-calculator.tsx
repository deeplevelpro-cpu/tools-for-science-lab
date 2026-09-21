"use client";

import { useState, type FormEvent } from "react";

import {
  calculateTsunamiWaveForce,
  type TsunamiWaveForceDetails,
} from "@/lib/calculators/tsunami-wave-force";

import type { CalculationResult } from "@/types/calculator";

type TsunamiForceResult =
  CalculationResult<TsunamiWaveForceDetails>;

const defaultValues = {
  mass: "100000000",
  acceleration: "5",
};

export function TsunamiWaveForceCalculator() {
  const [values, setValues] =
    useState(defaultValues);

  const [result, setResult] =
    useState<TsunamiForceResult | null>(null);

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
        calculateTsunamiWaveForce({
          mass:
            Number(values.mass),

          acceleration:
            Number(values.acceleration),
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
            Moving water mass (kg)
          </span>

          <input
            type="number"
            value={values.mass}
            onChange={(event) =>
              updateValue(
                "mass",
                event.target.value,
              )
            }
          />
        </label>

        <label>
          <span>
            Water acceleration (m/s²)
          </span>

          <input
            type="number"
            value={values.acceleration}
            onChange={(event) =>
              updateValue(
                "acceleration",
                event.target.value,
              )
            }
          />
        </label>

        <button type="submit">
          Calculate Tsunami Wave Force
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
            Tsunami wave force
          </h2>

          <p>
            <strong>
              {result.formattedValue}
            </strong>{" "}
            newtons
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
