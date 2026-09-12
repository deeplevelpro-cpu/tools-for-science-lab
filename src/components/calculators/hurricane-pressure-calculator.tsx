"use client";

import { useState, type FormEvent } from "react";

import {
  calculateHurricanePressure,
  type HurricanePressureDetails,
} from "@/lib/calculators/hurricane-pressure";

import type { CalculationResult } from "@/types/calculator";

type HurricanePressureResult =
  CalculationResult<HurricanePressureDetails>;

const defaultValues = {
  force: "100000",
  area: "100",
};

export function HurricanePressureCalculator() {
  const [values, setValues] =
    useState(defaultValues);

  const [result, setResult] =
    useState<HurricanePressureResult | null>(null);

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
        calculateHurricanePressure({
          force:
            Number(values.force),

          area:
            Number(values.area),
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
            Wind force (N)
          </span>

          <input
            type="number"
            value={values.force}
            onChange={(event) =>
              updateValue(
                "force",
                event.target.value,
              )
            }
          />
        </label>

        <label>
          <span>
            Surface area (m²)
          </span>

          <input
            type="number"
            value={values.area}
            onChange={(event) =>
              updateValue(
                "area",
                event.target.value,
              )
            }
          />
        </label>

        <button type="submit">
          Calculate Hurricane Pressure
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
            Hurricane pressure
          </h2>

          <p>
            <strong>
              {result.formattedValue}
            </strong>{" "}
            pascals
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
