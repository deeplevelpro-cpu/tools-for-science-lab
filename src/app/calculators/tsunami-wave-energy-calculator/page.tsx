import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { TsunamiWaveEnergyCalculator } from "@/components/calculators/tsunami-wave-energy-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Tsunami Wave Energy Calculator | Ocean Physics Tool";

const pageDescription =
  "Calculate tsunami wave energy using water mass and velocity values with a kinetic energy formula. Learn the physics behind ocean waves.";

const pagePath =
  "/calculators/tsunami-wave-energy-calculator";

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

export default function TsunamiWaveEnergyCalculatorPage() {
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
                Tsunami Wave Energy Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Ocean physics tool
            </p>

            <h1>
              Tsunami Wave Energy Calculator
            </h1>

            <p>
              Estimate tsunami wave energy using water
              mass and velocity based on kinetic energy
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
          <TsunamiWaveEnergyCalculator />
        </Container>
      </section>

      <section className="article-section">
        <Container className="article-layout">
          <article className="article-content">

            <section>
              <p className="eyebrow">
                Ocean science
              </p>

              <h2>
                What is tsunami wave energy?
              </h2>

              <p>
                Tsunami wave energy represents the
                energy carried by moving water during
                large ocean wave events. The energy
                depends on the amount of moving water
                and its velocity.
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
                This simplified physics model helps
                explain how faster and larger moving
                water masses carry more energy.
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
                These calculations are useful for ocean
                physics education, coastal science,
                disaster awareness, and understanding
                wave mechanics.
              </p>
            </section>

            <CalculatorFAQ slug="tsunami-wave-energy-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
