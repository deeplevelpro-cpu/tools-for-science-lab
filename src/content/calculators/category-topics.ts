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
        "Calculators for velocity, acceleration, displacement, free fall, projectile motion, and kinematic equations.",
      keywords: [
        "motion",
        "velocity",
        "acceleration",
        "kinematic",
        "projectile",
        "free fall",
        "displacement",
        "speed",
      ],
    },
    {
      title: "Forces and Newton's Laws",
      description:
        "Tools for force, friction, normal force, weight, inclined planes, elasticity, and Newtonian mechanics.",
      keywords: [
        "force",
        "friction",
        "normal force",
        "weight",
        "inclined",
        "hooke",
        "newton",
      ],
    },
    {
      title: "Energy, Work and Power",
      description:
        "Calculate kinetic energy, potential energy, work, power, and energy transformations.",
      keywords: [
        "energy",
        "kinetic",
        "potential",
        "work",
        "power",
        "joule",
      ],
    },
    {
      title: "Momentum and Impulse",
      description:
        "Physics calculators for momentum, impulse, and conservation of motion concepts.",
      keywords: [
        "momentum",
        "impulse",
      ],
    },
    {
      title: "Rotational Physics",
      description:
        "Calculate torque, angular motion, rotational energy, RPM, and rotational dynamics.",
      keywords: [
        "rotation",
        "angular",
        "torque",
        "rotational",
        "rpm",
        "moment of inertia",
      ],
    },
    {
      title: "Circular Motion and Gravity",
      description:
        "Physics tools for centripetal force, circular velocity, gravity, and orbital motion.",
      keywords: [
        "gravity",
        "centripetal",
        "circular",
      ],
    },
    {
      title: "Electricity and Circuit Calculations",
      description:
        "Calculate voltage, current, resistance, electrical power, and circuit relationships using electricity formulas.",
      keywords: [
        "electricity",
        "voltage",
        "current",
        "resistance",
        "ohm",
        "circuit",
        "electrical",
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
    {
      title: "Experimental Data Processing",
      description:
        "Process laboratory data using regression, variation, uncertainty propagation, and scientific analysis methods.",
      keywords: [
        "regression",
        "variation",
        "uncertainty propagation",
        "data processing",
        "analysis",
      ],
    },
  ],
} satisfies Record<string, readonly CalculatorTopic[]>;


export function getCategoryTopics(
  category: CalculatorDefinition["category"],
) {
  return calculatorTopics[category];
}
