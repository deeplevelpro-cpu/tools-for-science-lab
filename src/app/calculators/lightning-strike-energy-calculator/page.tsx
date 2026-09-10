import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { LightningStrikeEnergyCalculator } from "@/components/calculators/lightning-strike-energy-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Lightning Strike Energy Calculator | Electricity Physics Tool";

const pageDescription =
  "Calculate lightning strike energy using electrical charge and voltage values with the electrical energy formula. Learn the physics behind lightning power.";

const pagePath =
  "/calculators/lightning-strike-energy-calculator";

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

export default function LightningStrikeEnergyCalculatorPage() {
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
                Lightning Strike Energy Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Electricity physics tool
            </p>

            <h1>
              Lightning Strike Energy Calculator
            </h1>

            <p>
              Estimate lightning energy using electrical
              charge and voltage values based on basic
              electrical energy principles.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Lightning strike energy calculator"
      >
        <Container>
          <LightningStrikeEnergyCalculator />
        </Container>
      </section>

      <section className="article-section">
        <Container className="article-layout">
          <article className="article-content">

            <section>
              <p className="eyebrow">
                Electrical science
              </p>

              <h2>
                What is lightning strike energy?
              </h2>

              <p>
                Lightning energy describes the amount of
                electrical energy released during a
                lightning discharge. It depends on the
                electrical charge and voltage involved.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Electrical energy formula
              </h2>

              <div className="formula-card">
                <p>
                  Energy
                  <span>
                    = Charge × Voltage
                  </span>
                </p>
              </div>

              <p>
                This simplified relationship helps
                explain how electrical charge and
                voltage determine stored energy.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of lightning energy calculations
              </h2>

              <p>
                These calculations are useful for
                physics education, electricity concepts,
                atmospheric science, and learning about
                lightning events.
              </p>
            </section>

            <CalculatorFAQ slug="lightning-strike-energy-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
