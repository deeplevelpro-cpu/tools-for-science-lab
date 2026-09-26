import type { Metadata } from "next";

import { CalculatorPageShell } from "@/components/calculators/calculator-page-shell";
import { VoltageCalculator } from "@/components/calculators/voltage-calculator";

import { Container } from "@/components/ui/container";
import { absoluteUrl } from "@/lib/seo/url";
import { siteConfig } from "@/config/site";

const pageTitle =
  "Voltage Calculator | V = IR Formula | Calculate Voltage";

const pageDescription =
  "Calculate voltage using Ohm's Law V = I × R. Enter current and resistance values to find voltage with electrical formula explanations.";

const pagePath =
  "/calculators/voltage-calculator";

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

export default function VoltageCalculatorPage() {
  return (
    <main>
      <section className="tool-page-hero">
        <Container>
          <nav
            className="breadcrumbs"
            aria-label="Breadcrumb"
          >
            <ol>
              <li>
                <a href="/">
                  Home
                </a>
              </li>

              <li>
                <a href="/calculators">
                  Calculators
                </a>
              </li>

              <li aria-current="page">
                Voltage Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Electricity calculator
            </p>

            <h1>
              Voltage Calculator
            </h1>

            <p>
              Calculate electrical voltage from
              current and resistance using Ohm's Law.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Voltage calculator"
      >
        <Container>
          <CalculatorPageShell
            slug="voltage-calculator"
            subject="physics"
          >
            <VoltageCalculator />
          </CalculatorPageShell>
        </Container>
      </section>
    </main>
  );
}
