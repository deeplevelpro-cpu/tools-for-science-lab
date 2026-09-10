"use client";

import { useState, type FormEvent } from "react";

import {
  calculateTornadoWindSpeed,
  type TornadoWindSpeedDetails,
} from "@/lib/calculators/tornado-wind-speed";

import type { CalculationResult } from "@/types/calculator";

type TornadoResult =
  CalculationResult<TornadoWindSpeedDetails>;

const defaultValues = {
  distance: "1000",
  time: "10",
};

export function TornadoWindSpeedCalculator() {
  const [values, setValues] =
    useState(defaultValues);

  const [result, setResult] =
    useState<TornadoResult | null>(null);

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
        calculateTornadoWindSpeed({
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
            Distance traveled (meters)
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
            Time taken (seconds)
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
          Calculate Wind Speed
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
            Tornado wind speed
          </h2>

          <p>
            <strong>
              {result.formattedValue}
            </strong>{" "}
            km/h
          </p>

          <p>
            Speed:
            {" "}
            {result.details.speedMetersPerSecond.toFixed(2)}
            {" "}
            m/s
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
