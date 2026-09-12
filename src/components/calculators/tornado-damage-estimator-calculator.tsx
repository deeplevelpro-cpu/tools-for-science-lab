"use client";

import { useState, type FormEvent } from "react";

import {
  calculateTornadoDamageEstimator,
  type TornadoDamageEstimatorDetails,
} from "@/lib/calculators/tornado-damage-estimator";

import type { CalculationResult } from "@/types/calculator";

type TornadoDamageResult =
  CalculationResult<TornadoDamageEstimatorDetails>;

const defaultValues = {
  windSpeed: "150",
  affectedArea: "100",
  buildingFactor: "2",
};

export function TornadoDamageEstimatorCalculator() {
  const [values, setValues] =
    useState(defaultValues);

  const [result, setResult] =
    useState<TornadoDamageResult | null>(null);

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
        calculateTornadoDamageEstimator({
          windSpeed:
            Number(values.windSpeed),

          affectedArea:
            Number(values.affectedArea),

          buildingFactor:
            Number(values.buildingFactor),
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
            Affected area (m²)
          </span>

          <input
            type="number"
            value={values.affectedArea}
            onChange={(event) =>
              updateValue(
                "affectedArea",
                event.target.value,
              )
            }
          />
        </label>

        <label>
          <span>
            Building vulnerability factor
          </span>

          <input
            type="number"
            value={values.buildingFactor}
            onChange={(event) =>
              updateValue(
                "buildingFactor",
                event.target.value,
              )
            }
          />
        </label>

        <button type="submit">
          Calculate Tornado Damage
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
            Tornado damage estimate
          </h2>

          <p>
            <strong>
              Score: {result.formattedValue}
            </strong>
          </p>

          <p>
            Risk level:
            {" "}
            {result.details.riskLevel}
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
