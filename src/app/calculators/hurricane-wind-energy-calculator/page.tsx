import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { HurricaneWindEnergyCalculator } from "@/components/calculators/hurricane-wind-energy-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Hurricane Wind Energy Calculator | Weather Science Tool";

const pageDescription =
  "Calculate hurricane wind energy using air mass and wind velocity values with a kinetic energy formula. Learn the physics behind powerful storms.";

const pagePath =
  "/calculators/hurricane-wind-energy-calculator";

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

export default function HurricaneWindEnergyCalculatorPage() {
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
                Hurricane Wind Energy Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Weather science tool
            </p>

            <h1>
              Hurricane Wind Energy Calculator
            </h1>

            <p>
              Estimate the energy carried by hurricane
              winds using air mass and velocity based
              on kinetic energy principles.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Hurricane wind energy calculator"
      >
        <Container>
          <HurricaneWindEnergyCalculator />
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
                kinetic energy contained in moving air.
                The amount of energy depends on the
                moving air mass and wind velocity.
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
                Because velocity is squared, stronger
                winds contain significantly more kinetic
                energy.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of wind energy calculations
              </h2>

              <p>
                These calculations help students learn
                about meteorology, atmospheric motion,
                storm physics, and energy concepts.
              </p>
            </section>

            <CalculatorFAQ slug="hurricane-wind-energy-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
