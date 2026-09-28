"use client";

import { useState, type FormEvent } from "react";

import {
  calculateCurrent,
  type CurrentDetails,
  type CurrentVariable,
} from "@/lib/calculators/current";

import type { CalculationResult } from "@/types/calculator";

type CurrentResult =
  CalculationResult<CurrentDetails>;

const fields: {
  key: CurrentVariable;
  label: string;
  unit: string;
}[] = [
  {
    key: "current",
    label: "Current",
    unit: "A",
  },
  {
    key: "voltage",
    label: "Voltage",
    unit: "V",
  },
  {
    key: "resistance",
    label: "Resistance",
    unit: "Ω",
  },
];

export function CurrentCalculator() {
  const [solveFor, setSolveFor] =
    useState<CurrentVariable>("current");

  const [values, setValues] = useState({
    current: "",
    voltage: "",
    resistance: "",
  });

  const [result, setResult] =
    useState<CurrentResult | null>(null);

  const [error, setError] =
    useState("");

  function updateValue(
    key: CurrentVariable,
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
      typeof calculateCurrent
    >[0] = {
      solveFor,
    };

    for (const field of fields) {
      if (field.key === solveFor) {
        continue;
      }

      const rawValue = values[field.key];
      const numberValue = Number(rawValue);

      if (
        rawValue.trim() === "" ||
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
        calculateCurrent(input);

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
      <form
        onSubmit={calculate}
        className="space-y-5"
      >
        <label>
          Calculate
        </label>

        <select
          value={solveFor}
          onChange={(event) =>
            setSolveFor(
              event.target.value as CurrentVariable,
            )
          }
          className="w-full border p-2"
        >
          <option value="current">
            Current (A)
          </option>

          <option value="voltage">
            Voltage (V)
          </option>

          <option value="resistance">
            Resistance (Ω)
          </option>
        </select>

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
            />
          </div>
        ))}

        <button
          type="submit"
          className="rounded bg-black px-5 py-2 text-white"
        >
          Calculate Current
        </button>
      </form>

      {error && (
        <p className="text-red-600">
          {error}
        </p>
      )}

      {result && (
        <section>
          <h2>Result</h2>

          <p>
            Current: {result.details.current} A
          </p>

          <p>
            Voltage: {result.details.voltage} V
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
