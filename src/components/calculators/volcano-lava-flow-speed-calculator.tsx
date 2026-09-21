"use client";

import { useState, type FormEvent } from "react";

import {
  calculateVolcanoLavaFlowSpeed,
  type VolcanoLavaFlowSpeedDetails,
} from "@/lib/calculators/volcano-lava-flow-speed";

import type { CalculationResult } from "@/types/calculator";

type LavaSpeedResult =
  CalculationResult<VolcanoLavaFlowSpeedDetails>;

const defaultValues = {
  distance: "5000",
  time: "3600",
};

export function VolcanoLavaFlowSpeedCalculator() {
  const [values, setValues] =
    useState(defaultValues);

  const [result, setResult] =
    useState<LavaSpeedResult | null>(null);

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
        calculateVolcanoLavaFlowSpeed({
          distance:
            Number(values.distance),

          time:
            Number(values.time),
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
            Lava travel distance (meters)
          </span>

          <input
            type="number"
            value={values.distance}
            onChange={(event) =>
              updateValue(
                "distance",
                event.target.value,
              )
            }
          />
        </label>

        <label>
          <span>
            Flow time (seconds)
          </span>

          <input
            type="number"
            value={values.time}
            onChange={(event) =>
              updateValue(
                "time",
                event.target.value,
              )
            }
          />
        </label>

        <button type="submit">
          Calculate Lava Flow Speed
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
            Lava flow speed
          </h2>

          <p>
            <strong>
              {result.formattedValue}
            </strong>{" "}
            meters per second
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
