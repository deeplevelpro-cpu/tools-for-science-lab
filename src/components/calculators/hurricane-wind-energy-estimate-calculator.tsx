"use client";

import { useState, type FormEvent } from "react";

import {
  calculateHurricaneWindEnergyEstimate,
  type HurricaneWindEnergyEstimateDetails,
} from "@/lib/calculators/hurricane-wind-energy-estimate";

import type { CalculationResult } from "@/types/calculator";

type HurricaneResult =
  CalculationResult<HurricaneWindEnergyEstimateDetails>;

const defaultValues = {
  airMass: "1000000",
  windSpeed: "70",
  duration: "60",
};

export function HurricaneWindEnergyEstimateCalculator() {
  const [values, setValues] =
    useState(defaultValues);

  const [result, setResult] =
    useState<HurricaneResult | null>(null);

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
        calculateHurricaneWindEnergyEstimate({
          airMass:
            Number(values.airMass),

          windSpeed:
            Number(values.windSpeed),

          duration:
            Number(values.duration),
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
            Air mass (kg)
          </span>

          <input
            type="number"
            value={values.airMass}
            onChange={(event) =>
              updateValue(
                "airMass",
                event.target.value,
              )
            }
          />
        </label>

        <label>
          <span>
            Wind speed (m/s)
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
            Duration (seconds)
          </span>

          <input
            type="number"
            value={values.duration}
            onChange={(event) =>
              updateValue(
                "duration",
                event.target.value,
              )
            }
          />
        </label>

        <button type="submit">
          Calculate Hurricane Wind Energy
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
            Hurricane wind energy estimate
          </h2>

          <p>
            <strong>
              {result.formattedValue}
            </strong>{" "}
            joules
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
