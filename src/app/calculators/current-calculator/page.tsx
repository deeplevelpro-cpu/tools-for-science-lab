import type { Metadata } from "next";

import { CalculatorPageShell } from "@/components/calculators/calculator-page-shell";
import { CurrentCalculator } from "@/components/calculators/current-calculator";

import { Container } from "@/components/ui/container";
import { absoluteUrl } from "@/lib/seo/url";
import { siteConfig } from "@/config/site";

const pageTitle =
  "Current Calculator | I = V ÷ R Formula | Calculate Current";

const pageDescription =
  "Calculate electrical current using Ohm's Law I = V ÷ R. Enter voltage and resistance values to find current with electrical formula explanations.";

const pagePath =
  "/calculators/current-calculator";

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

export default function CurrentCalculatorPage() {
  return (
    <main>
      <section className="tool-page-hero">
        <Container>
          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Electricity calculator
            </p>

            <h1>
              Current Calculator
            </h1>

            <p>
              Calculate electrical current from voltage
              and resistance using Ohm's Law.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Current calculator"
      >
        <Container>
          <CalculatorPageShell
            slug="current-calculator"
            subject="physics"
          >
            <CurrentCalculator />
          </CalculatorPageShell>
        </Container>
      </section>
    </main>
  );
}
