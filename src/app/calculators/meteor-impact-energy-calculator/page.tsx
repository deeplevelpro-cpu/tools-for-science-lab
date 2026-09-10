import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { MeteorImpactEnergyCalculator } from "@/components/calculators/meteor-impact-energy-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Meteor Impact Energy Calculator | Asteroid Impact Tool";

const pageDescription =
  "Calculate meteor impact energy using mass and velocity values with a kinetic energy formula. Learn the physics behind asteroid impacts.";

const pagePath =
  "/calculators/meteor-impact-energy-calculator";

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

export default function MeteorImpactEnergyCalculatorPage() {
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
                Meteor Impact Energy Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Space science tool
            </p>

            <h1>
              Meteor Impact Energy Calculator
            </h1>

            <p>
              Estimate the energy released by a meteor
              impact using mass and velocity based on
              kinetic energy principles.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Meteor impact energy calculator"
      >
        <Container>
          <MeteorImpactEnergyCalculator />
        </Container>
      </section>

      <section className="article-section">
        <Container className="article-layout">
          <article className="article-content">

            <section>
              <p className="eyebrow">
                Space physics
              </p>

              <h2>
                What is meteor impact energy?
              </h2>

              <p>
                Meteor impact energy describes the
                kinetic energy released when a space
                object collides with a planetary
                surface. The energy depends strongly on
                both the object's mass and velocity.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Meteor impact energy formula
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
                Because velocity is squared, even small
                increases in impact speed can create a
                very large increase in impact energy.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of impact energy calculations
              </h2>

              <p>
                These calculations are useful for space
                science education, planetary geology,
                asteroid studies, and understanding
                impact events.
              </p>
            </section>

            <CalculatorFAQ slug="meteor-impact-energy-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
