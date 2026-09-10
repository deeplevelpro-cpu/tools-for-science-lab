"use client";

import { useState, type FormEvent } from "react";

import {
  calculateWaterLevel,
  type WaterLevelDetails,
} from "@/lib/calculators/water-level";

import type { CalculationResult } from "@/types/calculator";

type WaterLevelResult =
  CalculationResult<WaterLevelDetails>;

const defaultValues = {
  length: "2",
  width: "3",
  depth: "1",
};

export function WaterLevelCalculator() {
  const [values, setValues] =
    useState(defaultValues);

  const [result, setResult] =
    useState<WaterLevelResult | null>(null);

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
        calculateWaterLevel({
          length:
            Number(values.length),

          width:
            Number(values.width),

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
            Length (meters)
          </span>

          <input
            type="number"
            value={values.length}
            onChange={(event) =>
              updateValue(
                "length",
                event.target.value,
              )
            }
          />
        </label>

        <label>
          <span>
            Width (meters)
          </span>

          <input
            type="number"
            value={values.width}
            onChange={(event) =>
              updateValue(
                "width",
                event.target.value,
              )
            }
          />
        </label>

        <label>
          <span>
            Water depth (meters)
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
          Calculate Water Volume
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
            Water volume
          </h2>

          <p>
            <strong>
              {result.formattedValue}
            </strong>{" "}
            liters
          </p>

          <p>
            Cubic meters:{" "}
            {result.details.volumeCubicMeters}
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
