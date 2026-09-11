import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { LandslideEnergyCalculator } from "@/components/calculators/landslide-energy-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Landslide Energy Calculator | Earth Science Physics Tool";

const pageDescription =
  "Calculate landslide energy using moving earth mass and velocity values with a kinetic energy formula. Learn the physics behind landslide motion.";

const pagePath =
  "/calculators/landslide-energy-calculator";

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

export default function LandslideEnergyCalculatorPage() {
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
                Landslide Energy Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Earth science tool
            </p>

            <h1>
              Landslide Energy Calculator
            </h1>

            <p>
              Estimate landslide energy using moving
              earth mass and velocity values based on
              kinetic energy principles.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Landslide energy calculator"
      >
        <Container>
          <LandslideEnergyCalculator />
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
                What is landslide energy?
              </h2>

              <p>
                Landslide energy represents the kinetic
                energy of moving soil, rocks, and debris.
                A simplified model estimates energy using
                mass and velocity.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Landslide energy formula
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
                Higher velocity creates a much larger
                increase in landslide energy because
                velocity is squared.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of landslide energy calculations
              </h2>

              <p>
                These calculations help students learn
                geology, physics, slope hazards, and
                natural event energy concepts.
              </p>
            </section>

            <CalculatorFAQ slug="landslide-energy-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
