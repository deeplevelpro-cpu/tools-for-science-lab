import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { AvalancheEnergyCalculator } from "@/components/calculators/avalanche-energy-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Avalanche Energy Calculator | Snow Science Physics Tool";

const pageDescription =
  "Calculate avalanche energy using snow mass and velocity values with a kinetic energy formula. Learn the physics behind avalanche motion.";

const pagePath =
  "/calculators/avalanche-energy-calculator";

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

export default function AvalancheEnergyCalculatorPage() {
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
                Avalanche Energy Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Snow science tool
            </p>

            <h1>
              Avalanche Energy Calculator
            </h1>

            <p>
              Estimate avalanche energy using snow
              mass and velocity values based on
              kinetic energy principles.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Avalanche energy calculator"
      >
        <Container>
          <AvalancheEnergyCalculator />
        </Container>
      </section>

      <section className="article-section">
        <Container className="article-layout">
          <article className="article-content">

            <section>
              <p className="eyebrow">
                Snow physics
              </p>

              <h2>
                What is avalanche energy?
              </h2>

              <p>
                Avalanche energy represents the kinetic
                energy of moving snow and ice. A
                simplified model estimates energy using
                snow mass and avalanche velocity.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Avalanche energy formula
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
                Because velocity is squared, faster
                avalanches contain much greater
                kinetic energy.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of avalanche energy calculations
              </h2>

              <p>
                These calculations help students learn
                physics, snow science, mountain hazards,
                and natural event energy concepts.
              </p>
            </section>

            <CalculatorFAQ slug="avalanche-energy-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
