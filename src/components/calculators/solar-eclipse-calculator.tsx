"use client";

import { useState, type FormEvent } from "react";

import {
  calculateSolarEclipse,
  type SolarEclipseDetails,
} from "@/lib/calculators/solar-eclipse";

import type { CalculationResult } from "@/types/calculator";

type SolarEclipseResult =
  CalculationResult<SolarEclipseDetails>;

const defaultValues = {
  earthSunDistance: "149597870",
  earthMoonDistance: "384400",
  moonRadius: "1737",
  sunRadius: "696340",
};

const fields = [
  {
    key: "earthSunDistance",
    label: "Earth-Sun distance (km)",
  },
  {
    key: "earthMoonDistance",
    label: "Earth-Moon distance (km)",
  },
  {
    key: "moonRadius",
    label: "Moon radius (km)",
  },
  {
    key: "sunRadius",
    label: "Sun radius (km)",
  },
] as const;

export function SolarEclipseCalculator() {
  const [values, setValues] =
    useState(defaultValues);

  const [result, setResult] =
    useState<SolarEclipseResult | null>(null);

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
        calculateSolarEclipse({
          earthSunDistance:
            Number(values.earthSunDistance),

          earthMoonDistance:
            Number(values.earthMoonDistance),

          moonRadius:
            Number(values.moonRadius),

          sunRadius:
            Number(values.sunRadius),
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
        {fields.map((field) => (
          <label key={field.key}>
            <span>{field.label}</span>

            <input
              type="number"
              value={values[field.key]}
              onChange={(event) =>
                updateValue(
                  field.key,
                  event.target.value,
                )
              }
            />
          </label>
        ))}

        <button type="submit">
          Calculate Eclipse Geometry
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
            Result
          </h2>

          <p>
            Eclipse classification:{" "}
            <strong>
              {result.details.eclipseType}
            </strong>
          </p>

          <p>
            Moon angular diameter:{" "}
            {result.details.moonAngularDiameter.toFixed(
              4,
            )}°
          </p>

          <p>
            Sun angular diameter:{" "}
            {result.details.sunAngularDiameter.toFixed(
              4,
            )}°
          </p>
        </section>
      )}
    </div>
  );
}
