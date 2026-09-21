"use client";

import { useState, type FormEvent } from "react";

import {
  calculateHurricaneCategory,
  type HurricaneCategoryDetails,
} from "@/lib/calculators/hurricane-category";

import type { CalculationResult } from "@/types/calculator";

type HurricaneCategoryResult =
  CalculationResult<HurricaneCategoryDetails>;

const defaultValues = {
  windSpeed: "120",
};

export function HurricaneCategoryCalculator() {
  const [values, setValues] =
    useState(defaultValues);

  const [result, setResult] =
    useState<HurricaneCategoryResult | null>(null);

  const [error, setError] =
    useState("");

  function updateValue(
    value: string,
  ) {
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
        calculateHurricaneCategory({
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
          Calculate Hurricane Category
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
            {result.details.description}
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
