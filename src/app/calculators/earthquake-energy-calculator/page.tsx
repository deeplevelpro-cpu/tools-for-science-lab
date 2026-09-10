import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { EarthquakeEnergyCalculator } from "@/components/calculators/earthquake-energy-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Earthquake Energy Calculator | Seismic Energy Tool";

const pageDescription =
  "Calculate earthquake energy released from magnitude values and understand the relationship between earthquake magnitude and energy.";

const pagePath =
  "/calculators/earthquake-energy-calculator";

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

export default function EarthquakeEnergyCalculatorPage() {
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
                Earthquake Energy Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Earth science tool
            </p>

            <h1>
              Earthquake Energy Calculator
            </h1>

            <p>
              Estimate energy released by an
              earthquake using magnitude and a
              logarithmic energy relationship.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Earthquake energy calculator"
      >
        <Container>
          <EarthquakeEnergyCalculator />
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
                How is earthquake energy calculated?
              </h2>

              <p>
                Earthquake energy calculations show
                how magnitude relates to the amount of
                energy released during seismic events.
                Because magnitude uses a logarithmic
                scale, small increases represent large
                energy differences.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Earthquake energy formula
              </h2>

              <div className="formula-card">
                <p>
                  Energy
                  <span>
                    = 10^(1.5 × Magnitude + 4.8)
                  </span>
                </p>
              </div>

              <p>
                This relationship is commonly used to
                estimate seismic energy released from
                earthquake magnitude values.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of earthquake energy calculations
              </h2>

              <p>
                These calculations are useful in
                geology education, seismology studies,
                engineering awareness, and learning
                about earthquake scales.
              </p>
            </section>

            <CalculatorFAQ slug="earthquake-energy-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
