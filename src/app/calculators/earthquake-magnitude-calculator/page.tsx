import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { EarthquakeMagnitudeCalculator } from "@/components/calculators/earthquake-magnitude-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Earthquake Magnitude Calculator | Seismic Scale Tool";

const pageDescription =
  "Calculate earthquake magnitude using seismic amplitude measurements and understand logarithmic earthquake scale calculations.";

const pagePath =
  "/calculators/earthquake-magnitude-calculator";

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

export default function EarthquakeMagnitudeCalculatorPage() {
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
                Earthquake Magnitude Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Earth science tool
            </p>

            <h1>
              Earthquake Magnitude Calculator
            </h1>

            <p>
              Calculate seismic magnitude using
              amplitude measurements and logarithmic
              earthquake scale principles.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Earthquake magnitude calculator"
      >
        <Container>
          <EarthquakeMagnitudeCalculator />
        </Container>
      </section>

      <section className="article-section">
        <Container className="article-layout">
          <article className="article-content">

            <section>
              <p className="eyebrow">
                Earth science
              </p>

              <h2>
                What is earthquake magnitude?
              </h2>

              <p>
                Earthquake magnitude describes the
                amount of energy released during an
                earthquake. Magnitude scales are
                logarithmic, meaning each whole number
                increase represents a large increase in
                measured amplitude.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Earthquake magnitude formula
              </h2>

              <div className="formula-card">
                <p>
                  Magnitude
                  <span>
                    = log₁₀(Amplitude ÷ Reference Amplitude)
                  </span>
                </p>
              </div>

              <p>
                The logarithmic relationship allows
                scientists to compare earthquakes with
                very different seismic wave amplitudes.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of earthquake magnitude calculations
              </h2>

              <p>
                Seismic calculations are used in
                geology education, earthquake research,
                engineering analysis, and understanding
                Earth&apos;s internal activity.
              </p>
            </section>

            <CalculatorFAQ slug="earthquake-magnitude-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
