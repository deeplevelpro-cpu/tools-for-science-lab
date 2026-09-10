"use client";

import { useState, type FormEvent } from "react";

import {
  calculateEarthquakeEnergy,
  type EarthquakeEnergyDetails,
} from "@/lib/calculators/earthquake-energy";

import type { CalculationResult } from "@/types/calculator";

type EarthquakeEnergyResult =
  CalculationResult<EarthquakeEnergyDetails>;

const defaultValues = {
  magnitude: "5",
};

export function EarthquakeEnergyCalculator() {
  const [values, setValues] =
    useState(defaultValues);

  const [result, setResult] =
    useState<EarthquakeEnergyResult | null>(null);

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
        calculateEarthquakeEnergy({
          magnitude:
            Number(values.magnitude),
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
            Earthquake magnitude
          </span>

          <input
            type="number"
            value={values.magnitude}
            onChange={(event) =>
              updateValue(
                "magnitude",
                event.target.value,
              )
            }
          />
        </label>

        <button type="submit">
          Calculate Energy
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
            Earthquake energy
          </h2>

          <p>
            <strong>
              {result.formattedValue}
            </strong>{" "}
            joules
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
