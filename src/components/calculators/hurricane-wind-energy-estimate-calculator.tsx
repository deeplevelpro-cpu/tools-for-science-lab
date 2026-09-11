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
  mass: "1000000",
  velocity: "70",
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
          mass:
            Number(values.mass),

          velocity:
            Number(values.velocity),
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
            Airborne object mass (kg)
          </span>

          <input
            type="number"
            value={values.mass}
            onChange={(event) =>
              updateValue(
                "mass",
                event.target.value,
              )
            }
          />
        </label>

        <label>
          <span>
            Wind velocity (m/s)
          </span>

          <input
            type="number"
            value={values.velocity}
            onChange={(event) =>
              updateValue(
                "velocity",
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
