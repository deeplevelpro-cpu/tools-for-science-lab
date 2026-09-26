import type { Metadata } from "next";

import { CalculatorPageShell } from "@/components/calculators/calculator-page-shell";
import { OhmsLawCalculator } from "@/components/calculators/ohms-law-calculator";

import { Container } from "@/components/ui/container";
import { absoluteUrl } from "@/lib/seo/url";
import { siteConfig } from "@/config/site";

const pageTitle =
  "Ohm's Law Calculator | Voltage, Current & Resistance Tool";

const pageDescription =
  "Calculate voltage, current, or resistance using Ohm's Law V = IR. Solve electrical circuit problems with formulas, SI units, and step-by-step calculations.";

const pagePath =
  "/calculators/ohms-law-calculator";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,

  alternates: {
    canonical: pagePath,
  },

  openGraph: {
    title: `${pageTitle} | ${siteConfig.name}`,
    description: pageDescription,
    type: "website",
    url: absoluteUrl(pagePath),
  },

  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | ${siteConfig.name}`,
    description: pageDescription,
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function OhmsLawCalculatorPage() {
  return (
    <CalculatorPageShell
      slug="ohms-law-calculator"
      subject="physics"
    >
      <Container>
        <OhmsLawCalculator />
      </Container>
    </CalculatorPageShell>
  );
}
