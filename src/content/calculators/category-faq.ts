import type { CalculatorCategory } from "./categories";

type FAQItem = {
  question: string;
  answer: string;
};

export function getCategoryFAQ(
  category: CalculatorCategory["category"],
): readonly FAQItem[] {
  if (category === "Physics") {
    return [
      {
        question: "What are physics calculators used for?",
        answer:
          "Physics calculators help solve equations involving motion, forces, energy, momentum, rotation, and other physical quantities with clear calculation steps.",
      },
      {
        question: "Can physics calculators help students learn formulas?",
        answer:
          "Yes. They provide calculated results while helping students understand how scientific formulas are applied.",
      },
      {
        question: "Are physics calculator results always exact?",
        answer:
          "Results depend on the input values and assumptions used in the formula. Real experiments may differ because of measurement uncertainty and environmental factors.",
      },
    ];
  }

  if (category === "Chemistry") {
    return [
      {
        question: "What chemistry calculations can these tools solve?",
        answer:
          "Chemistry calculators help with formulas including molarity, molality, gas laws, stoichiometry, molecular calculations, and related laboratory calculations.",
      },
      {
        question: "Are chemistry calculators useful for laboratory work?",
        answer:
          "Yes. They can assist students and researchers in checking calculations and understanding chemical relationships.",
      },
      {
        question: "Should calculator results replace experimental measurements?",
        answer:
          "No. Calculators support calculations, while experimental measurements require proper procedures and scientific validation.",
      },
    ];
  }

  return [
    {
      question: "What are laboratory calculators used for?",
      answer:
        "Laboratory calculators help with measurement analysis, uncertainty, statistics, significant figures, and experimental data calculations.",
    },
    {
      question: "Who can use laboratory calculators?",
      answer:
        "Students, teachers, researchers, and laboratory users can use these tools for educational and calculation support.",
    },
    {
      question: "Why are significant figures and uncertainty important?",
      answer:
        "They help communicate measurement precision and reliability in scientific experiments.",
    },
  ];
}
