"use client";

import { useState, type FormEvent } from "react";

import {
  calculateEarthquakeMagnitude,
  type EarthquakeMagnitudeDetails,
} from "@/lib/calculators/earthquake-magnitude";

import type { CalculationResult } from "@/types/calculator";

type EarthquakeResult =
  CalculationResult<EarthquakeMagnitudeDetails>;

const defaultValues = {
  amplitude: "1000",
  referenceAmplitude: "1",
};

export function EarthquakeMagnitudeCalculator() {
  const [values, setValues] =
    useState(defaultValues);

  const [result, setResult] =
    useState<EarthquakeResult | null>(null);

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
        calculateEarthquakeMagnitude({
          amplitude:
            Number(values.amplitude),

          referenceAmplitude:
            Number(values.referenceAmplitude),
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
            Seismic amplitude
          </span>

          <input
            type="number"
            value={values.amplitude}
            onChange={(event) =>
              updateValue(
                "amplitude",
                event.target.value,
              )
            }
          />
        </label>

        <label>
          <span>
            Reference amplitude
          </span>

          <input
            type="number"
            value={values.referenceAmplitude}
            onChange={(event) =>
              updateValue(
                "referenceAmplitude",
                event.target.value,
              )
            }
          />
        </label>

        <button type="submit">
          Calculate Magnitude
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
            Earthquake magnitude
          </h2>

          <p>
            <strong>
              {result.formattedValue}
            </strong>
          </p>

          <p>
            Formula:{" "}
            {result.details.formula}
          </p>
        </section>
      )}
    </div>
  );
}
