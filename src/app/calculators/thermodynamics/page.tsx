import { createCollectionSchema } from "@/lib/seo/collection-schema";
import type { Metadata } from "next";

import { CalculatorCategoryPage } from "@/components/calculator-directory";
import { calculatorCategories } from "@/content/calculators/categories";
import { getThermodynamicsCalculators } from "@/content/calculators/thermodynamics";
import { calculators } from "@/content/calculators/registry";
import { absoluteUrl } from "@/lib/seo/url";

const pagePath = "/calculators/thermodynamics";

const thermodynamicsCalculators =
  getThermodynamicsCalculators(calculators);

export const metadata: Metadata = {
  title:
    "Thermodynamics Calculator | Gas Laws, Heat & Energy Tools",
  description:
    "Thermodynamics calculators for gas laws, heat, pressure, temperature, and real gas equations. Solve physics and chemistry problems with formulas and step-by-step calculations.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title:
      "Thermodynamics Calculator | Gas Laws, Heat & Energy Tools",
    description:
      "Calculate gas properties, heat transfer, pressure, and thermodynamic equations using scientific formulas.",
    type: "website",
    url: absoluteUrl(pagePath),
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Thermodynamics Calculator | Gas Laws, Heat & Energy Tools",
    description:
      "Free thermodynamics calculators for gas laws, heat, pressure, and energy calculations.",
  },
};

const category = calculatorCategories.find(
  (item) => item.slug === "physics",
)!;

const collectionSchema = createCollectionSchema({
  name: "Thermodynamics Calculator",
  description:
    "Thermodynamics tools for gas laws, heat, pressure, temperature, and energy calculations.",
  path: pagePath,
  calculators: thermodynamicsCalculators,
});

export default function ThermodynamicsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <CalculatorCategoryPage
        category={{
          ...category,
          name: "Thermodynamics Calculator",
          description:
            "Calculate gas laws, heat transfer, pressure, temperature, and thermodynamic properties using scientific formulas.",
          introduction:
            "Thermodynamics studies heat, energy, temperature, pressure, and the behavior of gases. These calculators help students and researchers solve common thermodynamic equations.",
        }}
        calculators={thermodynamicsCalculators}
      />
    </>
  );
}
