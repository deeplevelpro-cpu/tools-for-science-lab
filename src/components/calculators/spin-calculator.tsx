"use client";

import { useState, type FormEvent } from "react";

import {
  calculateSpin,
  type SpinDetails,
} from "@/lib/calculators/spin";

import type { CalculationResult } from "@/types/calculator";

type SpinResult =
  CalculationResult<SpinDetails>;

export function SpinCalculator() {
  const [mass, setMass] = useState("");
  const [radius, setRadius] = useState("");
  const [angularVelocity, setAngularVelocity] =
    useState("");

  const [result, setResult] =
    useState<SpinResult | null>(null);

  const [error, setError] = useState("");

  function calculate(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setError("");
    setResult(null);

    try {
      const calculation =
        calculateSpin({
          mass: Number(mass),
          radius: Number(radius),
          angularVelocity: Number(angularVelocity),
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
    <div className="space-y-8">
      <form
        onSubmit={calculate}
        className="space-y-5"
      >
        <div>
          <label>
            Mass (kg)
          </label>
          <input
            value={mass}
            onChange={(e) =>
              setMass(e.target.value)
            }
            className="w-full border p-2"
            placeholder="Example: 5"
          />
        </div>

        <div>
          <label>
            Radius (m)
          </label>
          <input
            value={radius}
            onChange={(e) =>
              setRadius(e.target.value)
            }
            className="w-full border p-2"
            placeholder="Example: 2"
          />
        </div>

        <div>
          <label>
            Angular Velocity (rad/s)
          </label>
          <input
            value={angularVelocity}
            onChange={(e) =>
              setAngularVelocity(e.target.value)
            }
            className="w-full border p-2"
            placeholder="Example: 4"
          />
        </div>

        <button
          type="submit"
          className="rounded bg-black px-5 py-2 text-white"
        >
          Calculate Spin
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
            Angular Momentum:
            {" "}
            {result.details.angularMomentum}
            {" "}
            kg·m²/s
          </p>

          <p>
            Moment of Inertia:
            {" "}
            {result.details.momentOfInertia}
            {" "}
            kg·m²
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
