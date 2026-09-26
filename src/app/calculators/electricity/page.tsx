import type { Metadata } from "next";

import { CalculatorCategoryPage } from "@/components/calculator-directory";
import { calculators } from "@/content/calculators/registry";
import { getElectricityCalculators } from "@/content/calculators/electricity";
import { absoluteUrl } from "@/lib/seo/url";
import { createCollectionSchema } from "@/lib/seo/collection-schema";

const pagePath =
  "/calculators/electricity";

const pageTitle =
  "Electricity Calculator | Voltage, Current & Circuit Tools";

const pageDescription =
  "Electricity calculators for voltage, current, resistance, power, and circuit formulas. Solve electrical physics problems with SI units and calculation tools.";

const electricityCategory = {
  name: "Electricity Calculator",
  slug: "electricity",
  category: "Physics" as const,
  description:
    "Electrical physics calculators for circuits, voltage, current, resistance, and power calculations.",
  introduction:
    "Explore electricity calculators that help students, engineers, and learners solve common electrical formulas and understand circuit relationships.",
  formulaAreas: [
    "Ohm's Law",
    "Voltage, current, and resistance",
    "Electrical power",
    "Circuit calculations",
  ],
  keywords: [
    "electricity calculator",
    "ohms law calculator",
    "voltage calculator",
    "current calculator",
    "resistance calculator",
    "electrical circuit calculator",
  ],
  learningGuidance:
    "Use known electrical values to calculate unknown quantities while understanding the relationship between electrical variables.",
};

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,

  alternates: {
    canonical: pagePath,
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: absoluteUrl(pagePath),
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ElectricityCalculatorsPage() {
  const electricityCalculators =
    getElectricityCalculators(calculators);

  const schema = createCollectionSchema({
    name: electricityCategory.name,
    description: electricityCategory.description,
    path: pagePath,
    calculators: electricityCalculators,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <CalculatorCategoryPage
        category={electricityCategory}
        calculators={electricityCalculators}
      />
    </>
  );
}
