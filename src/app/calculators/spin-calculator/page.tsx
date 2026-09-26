import type { Metadata } from "next";

import { CalculatorPageShell } from "@/components/calculators/calculator-page-shell";
import { SpinCalculator } from "@/components/calculators/spin-calculator";

import { Container } from "@/components/ui/container";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Spin Calculator | Angular Momentum & Rotational Physics Tool";

const pageDescription =
  "Calculate spin angular momentum using mass, radius, and angular velocity. Solve rotational physics problems with moment of inertia, formulas, units, and step-by-step calculations.";

const pagePath =
  "/calculators/spin-calculator";

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

export default function SpinCalculatorPage() {
  return (
    <CalculatorPageShell
      slug="spin-calculator"
      subject="physics"
    >
      <Container>
        <SpinCalculator />
      </Container>
    </CalculatorPageShell>
  );
}
