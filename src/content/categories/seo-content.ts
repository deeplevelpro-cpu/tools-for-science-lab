export type CategorySEOContent = {
  slug: string;
  introduction: string;
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const categorySEOContent: Record<
  string,
  CategorySEOContent
> = {
  physics: {
    slug: "physics",
    introduction:
      "Physics calculators help students, researchers, and engineers solve problems involving motion, forces, energy, momentum, rotation, and scientific measurements.",
    faqs: [
      {
        question:
          "What can physics calculators be used for?",
        answer:
          "Physics calculators solve common problems involving mechanics, energy, motion, forces, and measurement using scientific formulas.",
      },
      {
        question:
          "Are physics calculator results accurate?",
        answer:
          "Results depend on correct input values, consistent units, and the scientific model used for each calculation.",
      },
      {
        question:
          "Who uses physics calculators?",
        answer:
          "Students, teachers, engineers, and researchers use physics calculators for education and scientific analysis.",
      },
    ],
  },

  chemistry: {
    slug: "chemistry",
    introduction:
      "Chemistry calculators help solve problems involving reactions, concentration, molecular quantities, gas laws, and chemical measurements.",
    faqs: [
      {
        question:
          "What chemistry calculations can these tools solve?",
        answer:
          "Chemistry calculators solve problems involving molarity, stoichiometry, molecular weight, gas laws, and chemical formulas.",
      },
      {
        question:
          "Why are units important in chemistry calculations?",
        answer:
          "Consistent units are required because chemical formulas depend on accurate measurements and conversions.",
      },
      {
        question:
          "Who benefits from chemistry calculators?",
        answer:
          "Students, laboratory workers, and researchers use chemistry calculators to verify scientific calculations.",
      },
    ],
  },

  laboratory: {
    slug: "laboratory",
    introduction:
      "Laboratory calculators support scientific measurement, uncertainty analysis, statistics, error calculations, and experimental data processing.",
    faqs: [
      {
        question:
          "What are laboratory calculators used for?",
        answer:
          "Laboratory calculators help analyze measurements, uncertainty, experimental error, and scientific datasets.",
      },
      {
        question:
          "Can these tools be used for experiments?",
        answer:
          "Yes. They help verify calculations used in classroom and professional laboratory experiments.",
      },
      {
        question:
          "Why is measurement accuracy important?",
        answer:
          "Accurate measurements improve reliability and reduce errors in scientific conclusions.",
      },
    ],
  },
};
