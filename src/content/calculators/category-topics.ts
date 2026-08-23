import type { CalculatorDefinition } from "./registry";

type CalculatorTopic = {
  title: string;
  description: string;
  keywords: readonly string[];
};

export const calculatorTopics = {
  Physics: [
    {
      title: "Motion and Kinematics",
      description:
        "Calculators for velocity, acceleration, displacement, free fall, and projectile motion.",
      keywords: [
        "motion",
        "velocity",
        "acceleration",
        "kinematic",
        "projectile",
        "free fall",
      ],
    },
    {
      title: "Forces and Energy",
      description:
        "Tools for force, work, power, energy, momentum, and related physics calculations.",
      keywords: [
        "force",
        "energy",
        "work",
        "power",
        "momentum",
      ],
    },
    {
      title: "Rotational Physics",
      description:
        "Calculate angular motion, torque, rotation, and rotational energy.",
      keywords: [
        "rotation",
        "angular",
        "torque",
        "rotational",
      ],
    },
    {
      title: "Gravity and Circular Motion",
      description:
        "Physics tools for gravity, orbital motion, and circular movement.",
      keywords: [
        "gravity",
        "centripetal",
        "circular",
      ],
    },
  ],

  Chemistry: [
    {
      title: "Chemical Quantities",
      description:
        "Calculate moles, molar mass, molecular weight, and chemical formulas.",
      keywords: [
        "moles",
        "molar",
        "molecular",
        "formula",
      ],
    },
    {
      title: "Solutions and Concentration",
      description:
        "Calculate molarity, molality, dilution, and solution chemistry values.",
      keywords: [
        "molarity",
        "molality",
        "solution",
        "concentration",
        "dilution",
      ],
    },
    {
      title: "Gas Laws",
      description:
        "Solve pressure, volume, temperature, and gas relationship calculations.",
      keywords: [
        "gas",
        "pressure",
        "volume",
        "temperature",
      ],
    },
    {
      title: "Chemical Reactions",
      description:
        "Tools for stoichiometry, yield, and reaction calculations.",
      keywords: [
        "reaction",
        "stoichiometry",
        "yield",
      ],
    },
  ],

  Laboratory: [
    {
      title: "Measurement and Uncertainty",
      description:
        "Analyze measurements, precision, significant figures, and uncertainty.",
      keywords: [
        "measurement",
        "uncertainty",
        "significant",
        "error",
      ],
    },
    {
      title: "Statistics and Data Analysis",
      description:
        "Analyze scientific datasets using statistical calculators.",
      keywords: [
        "statistics",
        "mean",
        "median",
        "standard",
        "regression",
      ],
    },
  ],
} satisfies Record<string, readonly CalculatorTopic[]>;


export function getCategoryTopics(
  category: CalculatorDefinition["category"],
) {
  return calculatorTopics[category];
}
