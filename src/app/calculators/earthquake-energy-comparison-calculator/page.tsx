import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { EarthquakeEnergyComparisonCalculator } from "@/components/calculators/earthquake-energy-comparison-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Earthquake Energy Comparison Calculator | Seismic Tool";

const pageDescription =
  "Compare the energy released by two earthquakes using magnitude differences and understand the logarithmic earthquake energy scale.";

const pagePath =
  "/calculators/earthquake-energy-comparison-calculator";

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

export default function EarthquakeEnergyComparisonCalculatorPage() {
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
                <Link href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/calculators">
                  Calculators
                </Link>
              </li>

              <li aria-current="page">
                Earthquake Energy Comparison Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Earth science tool
            </p>

            <h1>
              Earthquake Energy Comparison Calculator
            </h1>

            <p>
              Compare how much more energy one
              earthquake releases compared with
              another magnitude.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Earthquake energy comparison calculator"
      >
        <Container>
          <EarthquakeEnergyComparisonCalculator />
        </Container>
      </section>

      <section className="article-section">
        <Container className="article-layout">
          <article className="article-content">

            <section>
              <p className="eyebrow">
                Seismic science
              </p>

              <h2>
                Why compare earthquake energy?
              </h2>

              <p>
                Earthquake magnitude uses a logarithmic
                scale, meaning small differences in
                magnitude can represent very large
                differences in released energy.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Earthquake energy comparison formula
              </h2>

              <div className="formula-card">
                <p>
                  Energy Ratio
                  <span>
                    = 10^(1.5 × Magnitude Difference)
                  </span>
                </p>
              </div>

              <p>
                This relationship helps compare the
                relative energy released by earthquakes
                with different magnitudes.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of seismic comparisons
              </h2>

              <p>
                Useful for geology education,
                earthquake awareness, and understanding
                how magnitude relates to physical energy.
              </p>
            </section>

            <CalculatorFAQ slug="earthquake-energy-comparison-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
