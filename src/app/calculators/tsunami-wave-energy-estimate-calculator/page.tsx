import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { TsunamiWaveEnergyEstimateCalculator } from "@/components/calculators/tsunami-wave-energy-estimate-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Tsunami Wave Energy Estimate Calculator | Ocean Science Tool";

const pageDescription =
  "Estimate tsunami wave energy using water mass and velocity values with a kinetic energy formula. Learn the physics behind tsunami motion.";

const pagePath =
  "/calculators/tsunami-wave-energy-estimate-calculator";

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

export default function TsunamiWaveEnergyEstimateCalculatorPage() {
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
                Tsunami Wave Energy Estimate Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Ocean science tool
            </p>

            <h1>
              Tsunami Wave Energy Estimate Calculator
            </h1>

            <p>
              Estimate wave energy using water mass and
              velocity values based on kinetic energy
              principles.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Tsunami wave energy calculator"
      >
        <Container>
          <TsunamiWaveEnergyEstimateCalculator />
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
                What is tsunami wave energy?
              </h2>

              <p>
                Tsunami wave energy represents the
                kinetic energy of moving water. A
                simplified model uses water mass and
                wave velocity to estimate energy.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Wave energy formula
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
                Higher wave velocity increases energy
                significantly because velocity is
                squared in the formula.
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
                ocean science, physics, wave motion, and
                natural hazard concepts.
              </p>
            </section>

            <CalculatorFAQ slug="tsunami-wave-energy-estimate-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
