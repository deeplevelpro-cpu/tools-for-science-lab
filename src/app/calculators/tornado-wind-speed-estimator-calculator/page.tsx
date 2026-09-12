import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { TornadoWindSpeedEstimatorCalculator } from "@/components/calculators/tornado-wind-speed-estimator-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Tornado Wind Speed Calculator | Tornado Physics Tool";

const pageDescription =
  "Estimate tornado wind speed using pressure difference and air density values with a simplified physics calculator.";

const pagePath =
  "/calculators/tornado-wind-speed-estimator-calculator";

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

export default function TornadoWindSpeedEstimatorCalculatorPage() {
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
                Tornado Wind Speed Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Tornado physics tool
            </p>

            <h1>
              Tornado Wind Speed Calculator
            </h1>

            <p>
              Estimate wind speed from pressure
              difference using a simplified fluid
              dynamics equation.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Tornado wind speed calculator"
      >
        <Container>
          <TornadoWindSpeedEstimatorCalculator />
        </Container>
      </section>

      <section className="article-section">
        <Container className="article-layout">
          <article className="article-content">

            <section>
              <p className="eyebrow">
                Tornado physics
              </p>

              <h2>
                What is tornado wind speed estimation?
              </h2>

              <p>
                Tornado wind speed can be estimated
                using relationships between pressure
                differences and air movement.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Wind speed formula
              </h2>

              <div className="formula-card">
                <p>
                  Wind Speed
                  <span>
                    = √(2 × Pressure Difference / Air Density)
                  </span>
                </p>
              </div>

              <p>
                This educational model demonstrates
                the connection between atmospheric
                pressure changes and wind velocity.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of tornado wind calculations
              </h2>

              <p>
                Students can explore meteorology,
                fluid dynamics, atmospheric science,
                and storm physics.
              </p>
            </section>

            <CalculatorFAQ slug="tornado-wind-speed-estimator-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
