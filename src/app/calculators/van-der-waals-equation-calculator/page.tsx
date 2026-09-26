import type { Metadata } from "next";

import { CalculatorPageShell } from "@/components/calculators/calculator-page-shell";
import { VanDerWaalsEquationCalculator } from "@/components/calculators/van-der-waals-equation-calculator";

import { Container } from "@/components/ui/container";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Van der Waals Equation Calculator | Real Gas Law Formula Tool";

const pageDescription =
  "Calculate real gas properties using the Van der Waals equation. Solve pressure and temperature problems with molecular constants, formulas, examples, and step-by-step calculations.";

const pagePath =
  "/calculators/van-der-waals-equation-calculator";

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
};

export default function VanDerWaalsEquationCalculatorPage() {
  return (
    <CalculatorPageShell
      slug="van-der-waals-equation-calculator"
      subject="physics"
    >
      <Container>
        <VanDerWaalsEquationCalculator />
      </Container>
    </CalculatorPageShell>
  );
}
