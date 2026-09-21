export type CalculatorCategory = {
  slug: string;
  name: string;
  category: "Laboratory" | "Chemistry" | "Physics";
  description: string;
  introduction: string;
  formulaAreas: readonly string[];
  learningGuidance: string;
  keywords: readonly string[];
};

export const calculatorCategories: readonly CalculatorCategory[] = [
  {
    slug: "physics",
    name: "Physics Calculators",
    category: "Physics",
    description:
      "Solve physics problems involving motion, forces, energy, momentum, rotation, and measurement using accurate educational calculators.",
    introduction:
      "Physics calculators help students explore relationships between measurable quantities, apply scientific equations, and understand mechanics concepts through guided calculations.",
    formulaAreas: [
      "Kinematic equations",
      "Newtonian mechanics",
      "Energy and momentum relationships",
      "Rotational motion formulas",
    ],
    learningGuidance:
      "Start by identifying known variables, selecting the correct formula, checking units, and interpreting the calculated result.",
    keywords: [
      "physics calculators",
      "physics formulas",
      "mechanics calculators",
      "energy calculators",
    ],
  },
  {
    slug: "chemistry",
    name: "Chemistry Calculators",
    category: "Chemistry",
    description:
      "Calculate chemistry values including concentration, reactions, molecular quantities, gas laws, and chemical formulas.",
    introduction:
      "Chemistry calculators support quantitative chemistry by helping learners solve problems involving molecules, reactions, solutions, and chemical relationships.",
    formulaAreas: [
      "Mole calculations",
      "Concentration formulas",
      "Gas law equations",
      "Reaction stoichiometry",
    ],
    learningGuidance:
      "Identify the chemical quantities provided, select the appropriate relationship, maintain correct units, and verify the result.",
    keywords: [
      "chemistry calculators",
      "chemistry formulas",
      "stoichiometry calculator",
      "molarity calculator",
    ],
  },
  {
    slug: "laboratory",
    name: "Laboratory Calculators",
    category: "Laboratory",
    description:
      "Use laboratory calculators for measurements, uncertainty, statistics, error analysis, and scientific data processing.",
    introduction:
      "Laboratory calculators help analyze experimental measurements, improve data interpretation, and support scientific reporting workflows.",
    formulaAreas: [
      "Measurement uncertainty",
      "Statistical analysis",
      "Error calculations",
      "Scientific data processing",
    ],
    learningGuidance:
      "Use accurate measurements, apply appropriate statistical methods, and evaluate uncertainty when interpreting experimental results.",
    keywords: [
      "laboratory calculators",
      "measurement calculators",
      "scientific calculators",
      "error analysis",
    ],
  },
];
