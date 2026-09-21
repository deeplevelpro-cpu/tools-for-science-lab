export type CalculatorSEOContent = {
  slug: string;

  seoIntroduction: string;

  howItWorks: string;

  formula: string;

  variables: readonly string[];

  applications: readonly string[];

  assumptions: readonly string[];

  examples: readonly string[];

  faqs: readonly {
    question: string;
    answer: string;
  }[];

  references?: readonly string[];

  limitations?: readonly string[];

  reviewedBy?: string;

  lastReviewed?: string;
};
