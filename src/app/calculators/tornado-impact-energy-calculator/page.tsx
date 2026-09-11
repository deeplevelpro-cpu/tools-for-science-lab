import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { TornadoImpactEnergyCalculator } from "@/components/calculators/tornado-impact-energy-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Tornado Impact Energy Calculator | Weather Physics Tool";

const pageDescription =
  "Calculate tornado impact energy using object mass and wind velocity values with a kinetic energy formula. Learn the physics behind tornado forces.";

const pagePath =
  "/calculators/tornado-impact-energy-calculator";

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

export default function TornadoImpactEnergyCalculatorPage() {
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
                Tornado Impact Energy Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Weather physics tool
            </p>

            <h1>
              Tornado Impact Energy Calculator
            </h1>

            <p>
              Estimate tornado impact energy using
              moving object mass and wind velocity
              based on kinetic energy principles.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Tornado impact energy calculator"
      >
        <Container>
          <TornadoImpactEnergyCalculator />
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
                What is tornado impact energy?
              </h2>

              <p>
                Tornado impact energy represents the
                kinetic energy of objects moved by
                extreme winds. A simplified model uses
                mass and velocity to estimate energy.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Tornado energy formula
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
                Wind velocity has a major effect because
                velocity is squared in the kinetic energy
                formula.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of tornado energy calculations
              </h2>

              <p>
                These calculations help students learn
                physics, weather science, storms, and
                natural hazard energy concepts.
              </p>
            </section>

            <CalculatorFAQ slug="tornado-impact-energy-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
