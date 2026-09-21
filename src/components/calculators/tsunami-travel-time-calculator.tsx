"use client";

import { useState, type FormEvent } from "react";

import {
  calculateTsunamiTravelTime,
  type TsunamiTravelTimeDetails,
} from "@/lib/calculators/tsunami-travel-time";

import type { CalculationResult } from "@/types/calculator";

type TsunamiTravelResult =
  CalculationResult<TsunamiTravelTimeDetails>;

const defaultValues = {
  distance: "1000",
  speed: "200",
};

export function TsunamiTravelTimeCalculator() {
  const [values, setValues] =
    useState(defaultValues);

  const [result, setResult] =
    useState<TsunamiTravelResult | null>(null);

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
        calculateTsunamiTravelTime({
          distance:
            Number(values.distance),

          speed:
            Number(values.speed),
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
            Distance traveled (km)
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
            Tsunami speed (km/h)
          </span>

          <input
            type="number"
            value={values.speed}
            onChange={(event) =>
              updateValue(
                "speed",
                event.target.value,
              )
            }
          />
        </label>

        <button type="submit">
          Calculate Tsunami Travel Time
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
            Tsunami travel time
          </h2>

          <p>
            <strong>
              {result.formattedValue}
            </strong>{" "}
            hours
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
