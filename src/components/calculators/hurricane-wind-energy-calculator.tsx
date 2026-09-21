"use client";

import { useState, type FormEvent } from "react";

import {
  calculateHurricaneWindEnergy,
  type HurricaneWindEnergyDetails,
} from "@/lib/calculators/hurricane-wind-energy";

import type { CalculationResult } from "@/types/calculator";

type HurricaneWindEnergyResult =
  CalculationResult<HurricaneWindEnergyDetails>;

const defaultValues = {
  mass: "1000",
  velocity: "50",
};

export function HurricaneWindEnergyCalculator() {
  const [values, setValues] =
    useState(defaultValues);

  const [result, setResult] =
    useState<HurricaneWindEnergyResult | null>(null);

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
        calculateHurricaneWindEnergy({
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
            Moving air mass (kg)
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
            Hurricane wind energy
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
