"use client";

import { useState, type FormEvent } from "react";

import {
  calculateSnow,
  type SnowDetails,
} from "@/lib/calculators/snow";

import type { CalculationResult } from "@/types/calculator";

type SnowResult =
  CalculationResult<SnowDetails>;

const defaultValues = {
  precipitation: "1",
  snowRatio: "10",
};

export function SnowCalculator() {
  const [values, setValues] =
    useState(defaultValues);

  const [result, setResult] =
    useState<SnowResult | null>(null);

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
        calculateSnow({
          precipitation:
            Number(values.precipitation),

          snowRatio:
            Number(values.snowRatio),
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
            Liquid precipitation
          </span>

          <input
            type="number"
            value={values.precipitation}
            onChange={(event) =>
              updateValue(
                "precipitation",
                event.target.value,
              )
            }
          />
        </label>

        <label>
          <span>
            Snow ratio
          </span>

          <input
            type="number"
            value={values.snowRatio}
            onChange={(event) =>
              updateValue(
                "snowRatio",
                event.target.value,
              )
            }
          />
        </label>

        <button type="submit">
          Calculate Snowfall
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
            Estimated snowfall
          </h2>

          <p>
            <strong>
              {result.formattedValue}
            </strong>{" "}
            snow depth units
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
