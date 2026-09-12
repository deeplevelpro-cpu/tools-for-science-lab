"use client";

import { useState, type FormEvent } from "react";

import {
  calculateHurricaneWindForce,
  type HurricaneWindForceDetails,
} from "@/lib/calculators/hurricane-wind-force";

import type { CalculationResult } from "@/types/calculator";

type HurricaneWindForceResult =
  CalculationResult<HurricaneWindForceDetails>;

const defaultValues = {
  windSpeed: "120",
  area: "100",
};

export function HurricaneWindForceCalculator() {
  const [values, setValues] =
    useState(defaultValues);

  const [result, setResult] =
    useState<HurricaneWindForceResult | null>(null);

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
        calculateHurricaneWindForce({
          windSpeed:
            Number(values.windSpeed),

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
            Wind speed (mph)
          </span>

          <input
            type="number"
            value={values.windSpeed}
            onChange={(event) =>
              updateValue(
                "windSpeed",
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
          Calculate Hurricane Wind Force
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
            Hurricane wind force
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
