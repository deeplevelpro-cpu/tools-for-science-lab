export type CalculatorSEOContent = {
  slug: string;

  seoIntroduction: string;

  howItWorks: string;

  formula: string;

  variables: readonly string[];

  applications: readonly string[];

  faqs: readonly {
    question: string;
    answer: string;
  }[];
};
