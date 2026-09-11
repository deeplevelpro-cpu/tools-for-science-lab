"use client";

import { useState, type FormEvent } from "react";

import {
  calculateTornadoImpactEnergy,
  type TornadoImpactEnergyDetails,
} from "@/lib/calculators/tornado-impact-energy";

import type { CalculationResult } from "@/types/calculator";

type TornadoResult =
  CalculationResult<TornadoImpactEnergyDetails>;

const defaultValues = {
  mass: "100000",
  velocity: "80",
};

export function TornadoImpactEnergyCalculator() {
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
        calculateTornadoImpactEnergy({
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
            Moving object mass (kg)
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
          Calculate Tornado Energy
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
            Tornado impact energy
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
