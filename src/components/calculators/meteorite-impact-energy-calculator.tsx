"use client";

import { useState, type FormEvent } from "react";

import {
  calculateMeteoriteImpactEnergy,
  type MeteoriteImpactEnergyDetails,
} from "@/lib/calculators/meteorite-impact-energy";

import type { CalculationResult } from "@/types/calculator";

type MeteoriteResult =
  CalculationResult<MeteoriteImpactEnergyDetails>;

const defaultValues = {
  mass: "10000",
  velocity: "20000",
};

export function MeteoriteImpactEnergyCalculator() {
  const [values, setValues] =
    useState(defaultValues);

  const [result, setResult] =
    useState<MeteoriteResult | null>(null);

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
        calculateMeteoriteImpactEnergy({
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
            Meteorite mass (kg)
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
            Impact velocity (m/s)
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
          Calculate Impact Energy
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
            Meteorite impact energy
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
