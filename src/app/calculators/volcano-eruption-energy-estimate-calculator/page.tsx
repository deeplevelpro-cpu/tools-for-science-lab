import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { VolcanoEruptionEnergyEstimateCalculator } from "@/components/calculators/volcano-eruption-energy-estimate-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Volcano Eruption Energy Estimate Calculator | Earth Science Tool";

const pageDescription =
  "Estimate volcano eruption energy using ejected material mass and velocity values with a kinetic energy formula. Learn the physics behind volcanic events.";

const pagePath =
  "/calculators/volcano-eruption-energy-estimate-calculator";

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

export default function VolcanoEruptionEnergyEstimateCalculatorPage() {
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
                Volcano Eruption Energy Estimate Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Earth science tool
            </p>

            <h1>
              Volcano Eruption Energy Estimate Calculator
            </h1>

            <p>
              Estimate volcanic eruption energy using
              material mass and velocity based on
              kinetic energy principles.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Volcano eruption energy calculator"
      >
        <Container>
          <VolcanoEruptionEnergyEstimateCalculator />
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
                What is volcano eruption energy?
              </h2>

              <p>
                Volcano eruption energy represents the
                kinetic energy of material moving during
                an eruption. A simplified model uses
                mass and velocity to estimate energy.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Eruption energy formula
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
                Faster moving volcanic material carries
                significantly more energy because
                velocity is squared.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of volcanic energy calculations
              </h2>

              <p>
                These calculations help students learn
                geology, physics, natural hazards, and
                volcanic process concepts.
              </p>
            </section>

            <CalculatorFAQ slug="volcano-eruption-energy-estimate-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
