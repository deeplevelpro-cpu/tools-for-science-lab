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
  (item) => item.slug === "physics",
)!;

const pagePath = "/calculators/physics";

export const metadata: Metadata = {
  title: "Physics Calculator | Motion, Force, Energy & Formula Solvers",
  description: "Physics calculator collection for mechanics, motion, force, energy, waves, and scientific formulas. Solve physics problems with equations, units, examples, and step-by-step calculations.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: category.name,
    description: "Physics calculator collection for mechanics, motion, force, energy, waves, and scientific formulas. Solve physics problems with equations, units, examples, and step-by-step calculations.",
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
      "Free physics calculators for motion, mechanics, force, energy, and scientific equations with formulas and step-by-step solutions.",
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

export default function PhysicsCalculatorsPage() {
  const physicsCalculators = categoryCalculators;

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
        calculators={physicsCalculators}
      />

      <CategoryFAQ slug="physics" />
    </>
  );
}
