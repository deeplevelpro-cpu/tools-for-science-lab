import { createCategoryFAQSchema } from "@/lib/seo/category-faq-schema";
import { CategoryFAQ } from "@/components/calculator-content/category-faq";
import type { Metadata } from "next";

import { CalculatorCategoryPage } from "@/components/calculator-directory";
import { calculatorCategories } from "@/content/calculators/categories";
import { getCategoryCalculators } from "@/content/calculators/get-category-calculators";
import { calculators } from "@/content/calculators/registry";
import { absoluteUrl } from "@/lib/seo/url";
import { createCollectionSchema } from "@/lib/seo/collection-schema";

const category = calculatorCategories.find(
  (item) => item.slug === "laboratory",
)!;

const pagePath = "/calculators/laboratory";

export const metadata: Metadata = {
  title: "Laboratory Calculators | Measurement, Error & Statistics Tools",
  description: "Laboratory calculators for measurements, uncertainty, statistics, and error analysis with formulas, examples, and scientific data tools for students and researchers.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: category.name,
    description: "Laboratory calculators for measurements, uncertainty, statistics, and error analysis with formulas, examples, and scientific data tools for students and researchers.",
    type: "website",
    url: absoluteUrl(pagePath),
  },
  robots: {
    index: true,
    follow: true,
  },

  twitter: {
    card: "summary_large_image",
    title: "ScienceCalcHub",
    description:
      "Laboratory calculators for measurements, uncertainty, statistics, error analysis, and scientific data processing for students, researchers, and science professionals.",
  },
};

const categoryCalculators = getCategoryCalculators(
  calculators,
  category.category,
);

const categorySchema = createCollectionSchema({
  name: category.name,
  description: category.description,
  path: pagePath,
  calculators: categoryCalculators,
});

export default function LaboratoryCalculatorsPage() {
  const laboratoryCalculators = categoryCalculators;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(categorySchema).replace(
            /</g,
            "\u003c",
          ),
        }}
      />

      <CalculatorCategoryPage
        category={category}
        calculators={laboratoryCalculators}
      />

      <CategoryFAQ slug="laboratory" />
    </>
  );
}
