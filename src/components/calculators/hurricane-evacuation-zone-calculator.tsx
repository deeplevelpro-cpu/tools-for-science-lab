"use client";

import { useState, type FormEvent } from "react";

import {
  calculateHurricaneEvacuationZone,
  type HurricaneEvacuationZoneDetails,
} from "@/lib/calculators/hurricane-evacuation-zone";

import type { CalculationResult } from "@/types/calculator";

type HurricaneEvacuationResult =
  CalculationResult<HurricaneEvacuationZoneDetails>;

const defaultValues = {
  category: "3",
  windSpeed: "120",
  distanceFromCoast: "20",
};

export function HurricaneEvacuationZoneCalculator() {
  const [values, setValues] =
    useState(defaultValues);

  const [result, setResult] =
    useState<HurricaneEvacuationResult | null>(null);

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
        calculateHurricaneEvacuationZone({
          category:
            Number(values.category),

          windSpeed:
            Number(values.windSpeed),

          distanceFromCoast:
            Number(values.distanceFromCoast),
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
            Distance from coast (miles)
          </span>

          <input
            type="number"
            value={values.distanceFromCoast}
            onChange={(event) =>
              updateValue(
                "distanceFromCoast",
                event.target.value,
              )
            }
          />
        </label>

        <button type="submit">
          Calculate Evacuation Zone
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
            Hurricane evacuation zone
          </h2>

          <p>
            <strong>
              Score: {result.formattedValue}
            </strong>
          </p>

          <p>
            {result.details.zone}
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
