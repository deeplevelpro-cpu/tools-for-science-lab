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
      "Physics calculators help students, teachers, and researchers solve problems involving classical mechanics, motion, forces, energy, momentum, gravity, and rotational systems. These tools apply scientific equations with measurable variables, SI units, and guided explanations to make physics calculations easier to understand.",
    formulaAreas: [
      "Kinematic equations and motion calculations",
      "Newton's laws, forces, and dynamics",
      "Work, energy, power, and momentum relationships",
      "Gravity and rotational motion formulas",
    ],
    learningGuidance:
      "Identify the physical quantities provided, select the appropriate physics equation, convert values into consistent SI units, calculate the result, and interpret what the answer means in the real physical system.",
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
      "Chemistry calculators support quantitative chemistry by helping students, teachers, and researchers solve problems involving molecules, chemical reactions, solutions, concentrations, and mathematical relationships used in chemistry. These tools apply formulas for laboratory calculations with clear variables and units.",
    formulaAreas: [
      "Mole and molecular calculations",
      "Molarity, molality, and concentration formulas",
      "Gas law equations and chemical relationships",
      "Reaction stoichiometry and yield calculations",
    ],
    learningGuidance:
      "Identify the chemical quantities provided, choose the correct equation or relationship, convert units carefully, perform the calculation, and verify that the result matches the expected chemical context.",
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
      "Laboratory calculators help students, researchers, and scientists analyze experimental measurements, evaluate uncertainty, process scientific data, and improve laboratory reporting workflows. These tools support accurate interpretation of experimental results using established statistical and measurement methods.",
    formulaAreas: [
      "Measurement uncertainty and propagation",
      "Statistical analysis and data evaluation",
      "Experimental error calculations",
      "Scientific data processing and interpretation",
    ],
    learningGuidance:
      "Use reliable measurements, select appropriate statistical methods, calculate uncertainty or error values, and interpret experimental data while considering limitations and accuracy.",
    keywords: [
      "laboratory calculators",
      "measurement calculators",
      "scientific calculators",
      "error analysis",
    ],
  },
];
