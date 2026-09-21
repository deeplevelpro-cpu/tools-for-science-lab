"use client";

import { useState, type FormEvent } from "react";

import {
  calculateLandslideEnergy,
  type LandslideEnergyDetails,
} from "@/lib/calculators/landslide-energy";

import type { CalculationResult } from "@/types/calculator";

type LandslideResult =
  CalculationResult<LandslideEnergyDetails>;

const defaultValues = {
  mass: "500000",
  velocity: "25",
};

export function LandslideEnergyCalculator() {
  const [values, setValues] =
    useState(defaultValues);

  const [result, setResult] =
    useState<LandslideResult | null>(null);

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
        calculateLandslideEnergy({
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
            Moving earth mass (kg)
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
            Landslide velocity (m/s)
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
          Calculate Landslide Energy
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
            Landslide energy
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
