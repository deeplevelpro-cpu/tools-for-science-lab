import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { TsunamiImpactEnergyEstimateCalculator } from "@/components/calculators/tsunami-impact-energy-estimate-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Tsunami Impact Energy Estimate Calculator | Ocean Physics Tool";

const pageDescription =
  "Estimate tsunami impact energy using moving water mass and flow velocity values with a kinetic energy formula. Learn the physics behind tsunami forces.";

const pagePath =
  "/calculators/tsunami-impact-energy-estimate-calculator";

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

export default function TsunamiImpactEnergyEstimateCalculatorPage() {
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
                Tsunami Impact Energy Estimate Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Ocean physics tool
            </p>

            <h1>
              Tsunami Impact Energy Estimate Calculator
            </h1>

            <p>
              Estimate tsunami impact energy using
              moving water mass and flow velocity
              based on kinetic energy principles.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Tsunami impact energy calculator"
      >
        <Container>
          <TsunamiImpactEnergyEstimateCalculator />
        </Container>
      </section>

      <section className="article-section">
        <Container className="article-layout">
          <article className="article-content">

            <section>
              <p className="eyebrow">
                Ocean physics
              </p>

              <h2>
                What is tsunami impact energy?
              </h2>

              <p>
                Tsunami impact energy represents the
                kinetic energy of moving water. A
                simplified model estimates energy using
                water mass and flow velocity.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Tsunami energy formula
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
                Flow velocity has a major effect because
                velocity is squared in the kinetic energy
                formula.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of tsunami energy calculations
              </h2>

              <p>
                These calculations help students learn
                ocean science, physics, waves, and
                natural hazard energy concepts.
              </p>
            </section>

            <CalculatorFAQ slug="tsunami-impact-energy-estimate-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
