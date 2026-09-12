"use client";

import { useState, type FormEvent } from "react";

import {
  calculateHurricaneWindSpeedCategory,
  type HurricaneWindSpeedCategoryDetails,
} from "@/lib/calculators/hurricane-wind-speed-category";

import type { CalculationResult } from "@/types/calculator";

type HurricaneWindSpeedCategoryResult =
  CalculationResult<HurricaneWindSpeedCategoryDetails>;

const defaultValues = {
  windSpeed: "120",
};

export function HurricaneWindSpeedCategoryCalculator() {
  const [values, setValues] =
    useState(defaultValues);

  const [result, setResult] =
    useState<HurricaneWindSpeedCategoryResult | null>(null);

  const [error, setError] =
    useState("");

  function updateValue(value: string) {
    setValues({
      windSpeed: value,
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
        calculateHurricaneWindSpeedCategory({
          windSpeed:
            Number(values.windSpeed),
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
            Sustained wind speed (mph)
          </span>

          <input
            type="number"
            value={values.windSpeed}
            onChange={(event) =>
              updateValue(
                event.target.value,
              )
            }
          />
        </label>

        <button type="submit">
          Calculate Wind Speed Category
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
            Hurricane category
          </h2>

          <p>
            <strong>
              Category {result.formattedValue}
            </strong>
          </p>

          <p>
            {result.details.categoryName}
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
