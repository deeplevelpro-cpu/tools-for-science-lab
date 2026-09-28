import type { CalculatorDefinition } from "./registry";

export type CategoryGuideSection = {
  title: string;
  description: string;
  links?: readonly string[];
};

export const categoryGuides: Record<
  CalculatorDefinition["category"],
  readonly CategoryGuideSection[]
> = {
  Physics: [
    {
      title: "Mechanics and Motion Calculators",
      description:
        "Physics mechanics calculators help solve problems involving velocity, acceleration, displacement, force, momentum, and motion equations.",
      links: [
        "acceleration-calculator",
        "force-calculator",
        "momentum-calculator",
        "kinematic-equations-calculator",
      ],
    },

    {
      title: "Energy, Work and Power Calculations",
      description:
        "Use energy calculators to analyze kinetic energy, work, potential energy, and power relationships in physical systems.",
      links: [
        "kinetic-energy-calculator",
        "work-calculator",
        "power-calculator",
      ],
    },

    {
      title: "Electricity and Circuit Calculations",
      description:
        "Electricity calculators apply Ohm's Law and electrical formulas to calculate voltage, current, resistance, and power.",
      links: [
        "ohms-law-calculator",
        "voltage-calculator",
        "current-calculator",
        "power-calculator",
      ],
    },

    {
      title: "Rotational Physics Calculators",
      description:
        "Rotational calculators solve angular motion, torque, rotational energy, and RPM problems.",
      links: [
        "torque-calculator",
        "rotational-kinetic-energy-calculator",
        "rpm-calculator",
      ],
    },
  ],

  Chemistry: [],

  Laboratory: [],
};
