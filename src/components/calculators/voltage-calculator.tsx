"use client";

import { useState, type FormEvent } from "react";

import {
  calculateVoltage,
  type OhmsLawDetails,
} from "@/lib/calculators/ohms-law";

import type { CalculationResult } from "@/types/calculator";

type VoltageResult =
  CalculationResult<OhmsLawDetails>;

export function VoltageCalculator() {
  const [current, setCurrent] =
    useState("");

  const [resistance, setResistance] =
    useState("");

  const [result, setResult] =
    useState<VoltageResult | null>(null);

  const [error, setError] =
    useState("");

  function calculate(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setError("");
    setResult(null);

    const currentValue = Number(current);
    const resistanceValue = Number(resistance);

    if (
      !Number.isFinite(currentValue) ||
      !Number.isFinite(resistanceValue)
    ) {
      setError(
        "Enter valid current and resistance values.",
      );
      return;
    }

    try {
      const calculation =
        calculateVoltage(
          currentValue,
          resistanceValue,
        );

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
    <div className="calculator-panel">
      <form
        className="calculator-form"
        onSubmit={calculate}
        noValidate
      >
        <div className="calculator-form__heading">
          <div>
            <p className="calculator-form__label">
              Ohm's Law
            </p>

            <h2>
              Calculate Voltage
            </h2>
          </div>

          <span className="calculator-form__status">
            Free tool
          </span>
        </div>

        <div className="density-fields">
          <div className="form-field">
            <label>
              Current (A)
            </label>

            <input
              value={current}
              onChange={(event) =>
                setCurrent(event.target.value)
              }
              placeholder="Enter current"
            />
          </div>

          <div className="form-field">
            <label>
              Resistance (Ω)
            </label>

            <input
              value={resistance}
              onChange={(event) =>
                setResistance(event.target.value)
              }
              placeholder="Enter resistance"
            />
          </div>
        </div>

        <button type="submit">
          Calculate Voltage
        </button>
      </form>

      {error && (
        <p className="text-red-600">
          {error}
        </p>
      )}

      {result && (
        <section>
          <h2>
            Result
          </h2>

          <p>
            Voltage: {result.value} V
          </p>

          <p>
            Formula: V = I × R
          </p>
        </section>
      )}
    </div>
  );
}
