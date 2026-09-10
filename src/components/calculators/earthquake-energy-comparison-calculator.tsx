"use client";

import { useState, type FormEvent } from "react";

import {
  calculateEarthquakeEnergyComparison,
  type EarthquakeEnergyComparisonDetails,
} from "@/lib/calculators/earthquake-energy-comparison";

import type { CalculationResult } from "@/types/calculator";

type EarthquakeComparisonResult =
  CalculationResult<EarthquakeEnergyComparisonDetails>;

const defaultValues = {
  magnitude1: "5",
  magnitude2: "6",
};

export function EarthquakeEnergyComparisonCalculator() {
  const [values, setValues] =
    useState(defaultValues);

  const [result, setResult] =
    useState<EarthquakeComparisonResult | null>(null);

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
        calculateEarthquakeEnergyComparison({
          magnitude1:
            Number(values.magnitude1),

          magnitude2:
            Number(values.magnitude2),
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
            First earthquake magnitude
          </span>

          <input
            type="number"
            value={values.magnitude1}
            onChange={(event) =>
              updateValue(
                "magnitude1",
                event.target.value,
              )
            }
          />
        </label>

        <label>
          <span>
            Second earthquake magnitude
          </span>

          <input
            type="number"
            value={values.magnitude2}
            onChange={(event) =>
              updateValue(
                "magnitude2",
                event.target.value,
              )
            }
          />
        </label>

        <button type="submit">
          Compare Energy
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
            Earthquake energy comparison
          </h2>

          <p>
            <strong>
              {result.formattedValue}
            </strong>{" "}
            times more energy
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
