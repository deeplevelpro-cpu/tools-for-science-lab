"use client";

import { useState, type FormEvent } from "react";

import {
  calculateHurricaneWindSpeed,
  type HurricaneWindSpeedDetails,
} from "@/lib/calculators/hurricane-wind-speed";

import type { CalculationResult } from "@/types/calculator";

type HurricaneWindSpeedResult =
  CalculationResult<HurricaneWindSpeedDetails>;

const defaultValues = {
  distance: "1000",
  time: "10",
};

export function HurricaneWindSpeedCalculator() {
  const [values, setValues] =
    useState(defaultValues);

  const [result, setResult] =
    useState<HurricaneWindSpeedResult | null>(null);

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
        calculateHurricaneWindSpeed({
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
            Wind travel distance (meters)
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
            Travel time (seconds)
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
          Calculate Hurricane Wind Speed
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
            Hurricane wind speed
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
