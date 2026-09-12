"use client";

import { useState, type FormEvent } from "react";

import {
  calculateHurricaneStormSurge,
  type HurricaneStormSurgeDetails,
} from "@/lib/calculators/hurricane-storm-surge";

import type { CalculationResult } from "@/types/calculator";

type HurricaneStormSurgeResult =
  CalculationResult<HurricaneStormSurgeDetails>;

const defaultValues = {
  windSpeed: "120",
  pressureDrop: "50",
  coastalSlope: "2",
};

export function HurricaneStormSurgeCalculator() {
  const [values, setValues] =
    useState(defaultValues);

  const [result, setResult] =
    useState<HurricaneStormSurgeResult | null>(null);

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
        calculateHurricaneStormSurge({
          windSpeed:
            Number(values.windSpeed),

          pressureDrop:
            Number(values.pressureDrop),

          coastalSlope:
            Number(values.coastalSlope),
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
            Pressure drop
          </span>

          <input
            type="number"
            value={values.pressureDrop}
            onChange={(event) =>
              updateValue(
                "pressureDrop",
                event.target.value,
              )
            }
          />
        </label>

        <label>
          <span>
            Coastal slope factor
          </span>

          <input
            type="number"
            value={values.coastalSlope}
            onChange={(event) =>
              updateValue(
                "coastalSlope",
                event.target.value,
              )
            }
          />
        </label>

        <button type="submit">
          Calculate Storm Surge
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
            Hurricane storm surge
          </h2>

          <p>
            <strong>
              {result.formattedValue}
            </strong>{" "}
            meters
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
