import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { TsunamiWaveForceCalculator } from "@/components/calculators/tsunami-wave-force-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Tsunami Wave Force Calculator | Ocean Physics Tool";

const pageDescription =
  "Calculate tsunami wave force using moving water mass and acceleration values with Newton's second law. Learn the physics behind tsunami forces.";

const pagePath =
  "/calculators/tsunami-wave-force-calculator";

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

export default function TsunamiWaveForceCalculatorPage() {
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
                Tsunami Wave Force Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Ocean physics tool
            </p>

            <h1>
              Tsunami Wave Force Calculator
            </h1>

            <p>
              Calculate tsunami wave force using
              moving water mass and acceleration
              based on force physics.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Tsunami wave force calculator"
      >
        <Container>
          <TsunamiWaveForceCalculator />
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
                What is tsunami wave force?
              </h2>

              <p>
                Tsunami wave force represents the force
                produced when moving water interacts with
                objects or surfaces. A simplified model
                uses mass and acceleration.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Tsunami force formula
              </h2>

              <div className="formula-card">
                <p>
                  Force
                  <span>
                    = Mass × Acceleration
                  </span>
                </p>
              </div>

              <p>
                Greater water mass and acceleration
                produce larger calculated forces.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of tsunami force calculations
              </h2>

              <p>
                These calculations help students learn
                ocean science, mechanics, waves, and
                natural hazard physics.
              </p>
            </section>

            <CalculatorFAQ slug="tsunami-wave-force-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
