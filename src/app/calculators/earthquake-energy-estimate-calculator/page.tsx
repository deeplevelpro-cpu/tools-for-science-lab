import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { EarthquakeEnergyEstimateCalculator } from "@/components/calculators/earthquake-energy-estimate-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Earthquake Energy Estimate Calculator | Earth Science Physics Tool";

const pageDescription =
  "Estimate earthquake energy using moving earth mass and velocity values with a kinetic energy formula. Learn the physics behind earthquake motion.";

const pagePath =
  "/calculators/earthquake-energy-estimate-calculator";

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

export default function EarthquakeEnergyEstimateCalculatorPage() {
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
                Earthquake Energy Estimate Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Earth science tool
            </p>

            <h1>
              Earthquake Energy Estimate Calculator
            </h1>

            <p>
              Estimate earthquake energy using moving
              earth mass and velocity values based on
              kinetic energy principles.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Earthquake energy calculator"
      >
        <Container>
          <EarthquakeEnergyEstimateCalculator />
        </Container>
      </section>

      <section className="article-section">
        <Container className="article-layout">
          <article className="article-content">

            <section>
              <p className="eyebrow">
                Earth physics
              </p>

              <h2>
                What is earthquake energy?
              </h2>

              <p>
                Earthquake energy represents energy
                associated with moving Earth materials.
                A simplified model estimates kinetic
                energy using mass and velocity.
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
                    = 1/2 × Mass × Velocity²
                  </span>
                </p>
              </div>

              <p>
                Because velocity is squared, small
                increases in movement speed can greatly
                increase calculated energy.
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
                These calculations help students learn
                geology, physics, seismic concepts, and
                natural hazard science.
              </p>
            </section>

            <CalculatorFAQ slug="earthquake-energy-estimate-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
