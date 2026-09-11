import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { HurricaneWindEnergyEstimateCalculator } from "@/components/calculators/hurricane-wind-energy-estimate-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Hurricane Wind Energy Estimate Calculator | Weather Physics Tool";

const pageDescription =
  "Estimate hurricane wind energy using object mass and wind velocity values with a kinetic energy formula. Learn the physics behind extreme wind forces.";

const pagePath =
  "/calculators/hurricane-wind-energy-estimate-calculator";

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

export default function HurricaneWindEnergyEstimateCalculatorPage() {
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
                Hurricane Wind Energy Estimate Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Weather physics tool
            </p>

            <h1>
              Hurricane Wind Energy Estimate Calculator
            </h1>

            <p>
              Estimate hurricane wind energy using
              moving object mass and wind velocity
              based on kinetic energy principles.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Hurricane wind energy calculator"
      >
        <Container>
          <HurricaneWindEnergyEstimateCalculator />
        </Container>
      </section>

      <section className="article-section">
        <Container className="article-layout">
          <article className="article-content">

            <section>
              <p className="eyebrow">
                Weather physics
              </p>

              <h2>
                What is hurricane wind energy?
              </h2>

              <p>
                Hurricane wind energy represents the
                kinetic energy of objects moved by
                powerful winds. A simplified model uses
                mass and velocity to estimate energy.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Wind energy formula
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
                Wind velocity has a strong effect because
                velocity is squared in the kinetic energy
                formula.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of hurricane energy calculations
              </h2>

              <p>
                These calculations help students learn
                physics, weather science, storms, and
                natural hazard energy concepts.
              </p>
            </section>

            <CalculatorFAQ slug="hurricane-wind-energy-estimate-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
