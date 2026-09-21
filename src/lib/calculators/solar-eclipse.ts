import type { CalculationResult } from "@/types/calculator";

import { formatCalculatedNumber } from "./number-format";

export type SolarEclipseInput = {
  earthSunDistance: number;
  earthMoonDistance: number;
  moonRadius: number;
  sunRadius: number;
};

export type SolarEclipseDetails = {
  sunAngularDiameter: number;
  moonAngularDiameter: number;
  eclipseType: string;
};

function requirePositive(
  value: number,
  label: string,
): number {
  if (
    !Number.isFinite(value) ||
    value <= 0
  ) {
    throw new Error(
      `${label} must be a positive number.`,
    );
  }

  return value;
}

function angularDiameter(
  radius: number,
  distance: number,
): number {
  return (
    2 *
    Math.atan(radius / distance) *
    (180 / Math.PI)
  );
}

export function calculateSolarEclipse(
  input: SolarEclipseInput,
): CalculationResult<SolarEclipseDetails> {
  const earthSunDistance =
    requirePositive(
      input.earthSunDistance,
      "Earth-Sun distance",
    );

  const earthMoonDistance =
    requirePositive(
      input.earthMoonDistance,
      "Earth-Moon distance",
    );

  const moonRadius =
    requirePositive(
      input.moonRadius,
      "Moon radius",
    );

  const sunRadius =
    requirePositive(
      input.sunRadius,
      "Sun radius",
    );

  const sunAngularDiameter =
    angularDiameter(
      sunRadius,
      earthSunDistance,
    );

  const moonAngularDiameter =
    angularDiameter(
      moonRadius,
      earthMoonDistance,
    );

  let eclipseType = "Partial eclipse geometry";

  if (
    moonAngularDiameter >
    sunAngularDiameter
  ) {
    eclipseType =
      "Total eclipse geometry";
  } else if (
    Math.abs(
      moonAngularDiameter -
        sunAngularDiameter,
    ) < 0.05
  ) {
    eclipseType =
      "Near total eclipse geometry";
  } else {
    eclipseType =
      "Annular eclipse geometry";
  }

  return {
    value: moonAngularDiameter,
    formattedValue:
      formatCalculatedNumber(
        moonAngularDiameter,
      ),
    details: {
      sunAngularDiameter,
      moonAngularDiameter,
      eclipseType,
    },
  };
}
