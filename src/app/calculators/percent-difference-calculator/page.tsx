import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import type { Metadata } from "next";
import { CalculatorPageShell } from "@/components/calculators/calculator-page-shell";

import Link from "next/link";

import { PercentDifferenceCalculator } from "@/components/calculators/percent-difference-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle = "Percent Difference Calculator";
const pageDescription =
  "Calculate percent difference between two measurements with the formula, worked example, calculation steps, and a clear comparison with percent error.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/calculators/percent-difference-calculator",
  },
  openGraph: {
    title: `${pageTitle} | ${siteConfig.name}`,
    description: pageDescription,
    type: "website",
    url: absoluteUrl(
      "/calculators/percent-difference-calculator",
    ),
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


export default function PercentDifferenceCalculatorPage() {
  return (
    <main>
      

      

      <section className="tool-page-hero">
        <Container>
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/calculators">Calculators</Link>
              </li>
              <li aria-current="page">
                Percent Difference Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Laboratory comparison tool
            </p>
            <h1>Percent Difference Calculator</h1>
            <p>
              Compare two experimental measurements using their
              average magnitude and see the full calculation.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Percent difference calculator"
      >
        <Container>
          <CalculatorPageShell
            slug="percent-difference-calculator"
            subject="laboratory"
          >
            <PercentDifferenceCalculator />
          </CalculatorPageShell>
        </Container>
      </section>

      <section className="article-section">
        <Container className="article-layout">
          <article className="article-content">
            <section aria-labelledby="formula-heading">
              <p className="eyebrow">Formula</p>
              <h2 id="formula-heading">
                How percent difference is calculated
              </h2>

              <div className="formula-card">
                <p>
                  Percent difference =
                  <span>
                    |value 1 − value 2| ÷ ((|value 1| + |value
                    2|) ÷ 2) × 100
                  </span>
                </p>
              </div>

              <p>
                Find the absolute difference between the two
                measurements. Divide it by the average magnitude of
                both values, then multiply by 100.
              </p>
            </section>

            <section aria-labelledby="example-heading">
              <p className="eyebrow">Worked example</p>
              <h2 id="example-heading">
                Percent difference example
              </h2>

              <p>
                Two experimental measurements are{" "}
                <strong>10 units</strong> and{" "}
                <strong>12 units</strong>.
              </p>

              <ol className="calculation-steps">
                <li>
                  Find the absolute difference: |10 − 12| ={" "}
                  <strong>2</strong>
                </li>
                <li>
                  Find the average magnitude: (10 + 12) ÷ 2 ={" "}
                  <strong>11</strong>
                </li>
                <li>
                  Divide: 2 ÷ 11 ={" "}
                  <strong>0.181818...</strong>
                </li>
                <li>
                  Multiply by 100: 0.181818 × 100 ={" "}
                  <strong>18.1818%</strong>
                </li>
              </ol>
            </section>

            <section aria-labelledby="comparison-heading">
              <p className="eyebrow">Important distinction</p>
              <h2 id="comparison-heading">
                Percent difference vs. percent error
              </h2>

              <p>
                Use percent difference when neither measurement is
                treated as an accepted reference. Use percent error
                when one value is experimental and the other is a
                trusted accepted or theoretical value.
              </p>

              <p>
                Need to compare a measurement with a reference value?{" "}
                <Link
                  className="article-inline-link"
                  href="/calculators/percent-error-calculator"
                >
                  Use the Percent Error Calculator
                </Link>
                .
              </p>
            </section>

            <CalculatorFAQ slug="percent-difference-calculator" />
          </article>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <p className="sidebar-card__label">
                Quick reference
              </p>
              <h2>When to use this tool</h2>
              <ul>
                <li>Comparing repeated measurements</li>
                <li>Comparing results from two trials</li>
                <li>No accepted reference value is available</li>
                <li>Both values use the same units</li>
                <li>Final result is required as a percentage</li>
              </ul>
            </div>
          </aside>
        </Container>
        <Container>
          </Container>
      </section>
    

      </main>
  );
}
