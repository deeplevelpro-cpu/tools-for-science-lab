"use client";

import { useState, type FormEvent } from "react";

import {
  calculateVanDerWaals,
  type VanDerWaalsVariable,
} from "@/lib/calculators/van-der-waals";

const emptyValues = {
  pressure: "",
  volume: "",
  temperature: "",
  moles: "",
  constantA: "",
  constantB: "",
};

export function VanDerWaalsEquationCalculator() {
  const [solveFor, setSolveFor] =
    useState<VanDerWaalsVariable>("pressure");

  const [values, setValues] = useState(emptyValues);

  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  function update(
    key: keyof typeof values,
    value: string,
  ) {
    setValues({
      ...values,
      [key]: value,
    });
    setResult("");
    setError("");
  }

  function calculate(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    try {
      const calculation =
        calculateVanDerWaals({
          pressure:
            values.pressure
              ? Number(values.pressure)
              : undefined,
          volume:
            values.volume
              ? Number(values.volume)
              : undefined,
          temperature:
            values.temperature
              ? Number(values.temperature)
              : undefined,
          moles: Number(values.moles),
          constantA: Number(values.constantA),
          constantB: Number(values.constantB),
          solveFor,
        });

      setResult(
        calculation.formattedValue,
      );

    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Calculation error",
      );
    }
  }

  return (
    <div className="calculator-card">
      <h2>
        Van der Waals Equation Calculator
      </h2>

      <p>
        Solve real gas calculations using
        (P + an²/V²)(V - nb) = nRT.
      </p>

      <form onSubmit={calculate}>
        <label>
          Solve for:
          <select
            value={solveFor}
            onChange={(e) =>
              setSolveFor(
                e.target.value as VanDerWaalsVariable,
              )
            }
          >
            <option value="pressure">
              Pressure
            </option>
            <option value="temperature">
              Temperature
            </option>
          </select>
        </label>

        {Object.keys(values).map((key) => (
          <label key={key}>
            {key}
            <input
              value={
                values[
                  key as keyof typeof values
                ]
              }
              onChange={(e) =>
                update(
                  key as keyof typeof values,
                  e.target.value,
                )
              }
            />
          </label>
        ))}

        <button type="submit">
          Calculate
        </button>
      </form>

      {result && (
        <p>
          Result: {result}
        </p>
      )}

      {error && (
        <p>
          {error}
        </p>
      )}
    </div>
  );
}
