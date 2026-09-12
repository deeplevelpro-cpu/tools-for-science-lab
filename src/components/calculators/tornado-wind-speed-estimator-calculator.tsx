"use client";

import { useState, type FormEvent } from "react";

import {
  calculateTornadoWindSpeedEstimator,
  type TornadoWindSpeedEstimatorDetails,
} from "@/lib/calculators/tornado-wind-speed-estimator";

import type { CalculationResult } from "@/types/calculator";

type TornadoWindSpeedResult =
  CalculationResult<TornadoWindSpeedEstimatorDetails>;

const defaultValues = {
  pressureDifference: "500",
  airDensity: "1.225",
};

export function TornadoWindSpeedEstimatorCalculator() {
  const [values, setValues] =
    useState(defaultValues);

  const [result, setResult] =
    useState<TornadoWindSpeedResult | null>(null);

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
        calculateTornadoWindSpeedEstimator({
          pressureDifference:
            Number(values.pressureDifference),

          airDensity:
            Number(values.airDensity),
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
            Pressure difference (Pa)
          </span>

          <input
            type="number"
            value={values.pressureDifference}
            onChange={(event) =>
              updateValue(
                "pressureDifference",
                event.target.value,
              )
            }
          />
        </label>

        <label>
          <span>
            Air density (kg/m³)
          </span>

          <input
            type="number"
            value={values.airDensity}
            onChange={(event) =>
              updateValue(
                "airDensity",
                event.target.value,
              )
            }
          />
        </label>

        <button type="submit">
          Calculate Tornado Wind Speed
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
            Tornado wind speed estimate
          </h2>

          <p>
            <strong>
              {result.formattedValue}
            </strong>{" "}
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
