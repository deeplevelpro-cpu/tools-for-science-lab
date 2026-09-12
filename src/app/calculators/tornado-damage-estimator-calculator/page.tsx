import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { TornadoDamageEstimatorCalculator } from "@/components/calculators/tornado-damage-estimator-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Tornado Damage Estimator Calculator | Storm Risk Tool";

const pageDescription =
  "Estimate simplified tornado damage risk using wind speed, affected area, and building vulnerability factors.";

const pagePath =
  "/calculators/tornado-damage-estimator-calculator";

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

export default function TornadoDamageEstimatorCalculatorPage() {
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
                Tornado Damage Estimator Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Tornado risk science tool
            </p>

            <h1>
              Tornado Damage Estimator Calculator
            </h1>

            <p>
              Estimate simplified tornado wind damage
              risk using storm intensity and exposure
              factors.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Tornado damage estimator calculator"
      >
        <Container>
          <TornadoDamageEstimatorCalculator />
        </Container>
      </section>

      <section className="article-section">
        <Container className="article-layout">
          <article className="article-content">

            <section>
              <p className="eyebrow">
                Tornado science
              </p>

              <h2>
                What is tornado damage estimation?
              </h2>

              <p>
                Tornado damage estimation uses wind
                intensity and exposure factors to
                understand potential storm impact.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Damage score formula
              </h2>

              <div className="formula-card">
                <p>
                  Damage Score
                  <span>
                    = Wind Speed² × Affected Area × Building Factor / 1000
                  </span>
                </p>
              </div>

              <p>
                Wind speed has a major effect because
                velocity increases the energy and force
                of moving air.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of tornado damage calculations
              </h2>

              <p>
                Students can explore meteorology,
                physics, engineering, and disaster risk
                modeling concepts.
              </p>
            </section>

            <CalculatorFAQ slug="tornado-damage-estimator-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
