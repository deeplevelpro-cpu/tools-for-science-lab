"use client";

import { useState, type FormEvent } from "react";

import {
  calculateOhmsLaw,
  type OhmsLawDetails,
  type OhmsLawVariable,
} from "@/lib/calculators/ohms-law";

import type { CalculationResult } from "@/types/calculator";

type OhmsLawResult =
  CalculationResult<OhmsLawDetails>;

const fields: {
  key: OhmsLawVariable;
  label: string;
  unit: string;
}[] = [
  {
    key: "voltage",
    label: "Voltage",
    unit: "V",
  },
  {
    key: "current",
    label: "Current",
    unit: "A",
  },
  {
    key: "resistance",
    label: "Resistance",
    unit: "Ω",
  },
];

export function OhmsLawCalculator() {
  const [solveFor, setSolveFor] =
    useState<OhmsLawVariable>("voltage");

  const [values, setValues] = useState({
    voltage: "",
    current: "",
    resistance: "",
  });

  const [result, setResult] =
    useState<OhmsLawResult | null>(null);

  const [error, setError] =
    useState("");

  function updateValue(
    key: OhmsLawVariable,
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

    const input: Parameters<
      typeof calculateOhmsLaw
    >[0] = {
      solveFor,
    };

    for (const field of fields) {
      if (field.key === solveFor) {
        continue;
      }

      const numberValue = Number(
        values[field.key],
      );

      if (
        values[field.key].trim() === "" ||
        !Number.isFinite(numberValue)
      ) {
        setError(
          `Enter a valid ${field.label.toLowerCase()}.`,
        );
        return;
      }

      input[field.key] = numberValue;
    }

    try {
      const calculation =
        calculateOhmsLaw(input);

      setResult(calculation);

      setValues((current) => ({
        ...current,
        [solveFor]: String(
          calculation.value,
        ),
      }));
    } catch (calculationError) {
      setError(
        calculationError instanceof Error
          ? calculationError.message
          : "Calculation failed.",
      );
    }
  }

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <label>
          Solve For
        </label>

        <select
          value={solveFor}
          onChange={(event) =>
            setSolveFor(
              event.target.value as OhmsLawVariable,
            )
          }
          className="w-full border p-2"
        >
          <option value="voltage">
            Voltage (V)
          </option>
          <option value="current">
            Current (I)
          </option>
          <option value="resistance">
            Resistance (R)
          </option>
        </select>
      </div>

      <form
        onSubmit={calculate}
        className="space-y-5"
      >
        {fields.map((field) => (
          <div key={field.key}>
            <label>
              {field.label} ({field.unit})
            </label>

            <input
              value={values[field.key]}
              disabled={
                solveFor === field.key
              }
              onChange={(event) =>
                updateValue(
                  field.key,
                  event.target.value,
                )
              }
              className="w-full border p-2"
              placeholder={`Enter ${field.label}`}
            />
          </div>
        ))}

        <button
          type="submit"
          className="rounded bg-black px-5 py-2 text-white"
        >
          Calculate Ohm's Law
        </button>
      </form>

      {error && (
        <p className="text-red-600">
          {error}
        </p>
      )}

      {result && (
        <section className="space-y-3">
          <h2>
            Result
          </h2>

          <p>
            Voltage: {result.details.voltage} V
          </p>

          <p>
            Current: {result.details.current} A
          </p>

          <p>
            Resistance: {result.details.resistance} Ω
          </p>

          <p>
            Formula: {result.details.formula}
          </p>
        </section>
      )}
    </div>
  );
}
