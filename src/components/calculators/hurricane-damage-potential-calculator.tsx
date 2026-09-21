"use client";

import { useState, type FormEvent } from "react";

import {
  calculateHurricaneDamagePotential,
  type HurricaneDamagePotentialDetails,
} from "@/lib/calculators/hurricane-damage-potential";

import type { CalculationResult } from "@/types/calculator";

type HurricaneDamageResult =
  CalculationResult<HurricaneDamagePotentialDetails>;

const defaultValues = {
  windSpeed: "120",
  category: "3",
  populationDensity: "500",
};

export function HurricaneDamagePotentialCalculator() {
  const [values, setValues] =
    useState(defaultValues);

  const [result, setResult] =
    useState<HurricaneDamageResult | null>(null);

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
        calculateHurricaneDamagePotential({
          windSpeed:
            Number(values.windSpeed),

          category:
            Number(values.category),

          populationDensity:
            Number(values.populationDensity),
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
            Hurricane category
          </span>

          <input
            type="number"
            value={values.category}
            onChange={(event) =>
              updateValue(
                "category",
                event.target.value,
              )
            }
          />
        </label>

        <label>
          <span>
            Population density
          </span>

          <input
            type="number"
            value={values.populationDensity}
            onChange={(event) =>
              updateValue(
                "populationDensity",
                event.target.value,
              )
            }
          />
        </label>

        <button type="submit">
          Calculate Damage Potential
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
            Hurricane damage potential
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
