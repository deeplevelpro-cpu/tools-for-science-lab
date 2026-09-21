"use client";

import { useState, type FormEvent } from "react";

import {
  calculateLightningStrikeEnergy,
  type LightningStrikeEnergyDetails,
} from "@/lib/calculators/lightning-strike-energy";

import type { CalculationResult } from "@/types/calculator";

type LightningResult =
  CalculationResult<LightningStrikeEnergyDetails>;

const defaultValues = {
  charge: "30",
  voltage: "100000000",
};

export function LightningStrikeEnergyCalculator() {
  const [values, setValues] =
    useState(defaultValues);

  const [result, setResult] =
    useState<LightningResult | null>(null);

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
        calculateLightningStrikeEnergy({
          charge:
            Number(values.charge),

          voltage:
            Number(values.voltage),
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
            Electrical charge (coulombs)
          </span>

          <input
            type="number"
            value={values.charge}
            onChange={(event) =>
              updateValue(
                "charge",
                event.target.value,
              )
            }
          />
        </label>

        <label>
          <span>
            Voltage (volts)
          </span>

          <input
            type="number"
            value={values.voltage}
            onChange={(event) =>
              updateValue(
                "voltage",
                event.target.value,
              )
            }
          />
        </label>

        <button type="submit">
          Calculate Lightning Energy
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
            Lightning strike energy
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
