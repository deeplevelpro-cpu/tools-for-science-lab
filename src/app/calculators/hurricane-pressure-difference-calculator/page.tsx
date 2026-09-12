import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { HurricanePressureDifferenceCalculator } from "@/components/calculators/hurricane-pressure-difference-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Hurricane Pressure Difference Calculator | Weather Physics Tool";

const pageDescription =
  "Calculate hurricane pressure difference using high and low pressure values. Learn how pressure differences influence weather systems.";

const pagePath =
  "/calculators/hurricane-pressure-difference-calculator";

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

export default function HurricanePressureDifferenceCalculatorPage() {
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
                Hurricane Pressure Difference Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Weather physics tool
            </p>

            <h1>
              Hurricane Pressure Difference Calculator
            </h1>

            <p>
              Calculate pressure difference between
              high and low pressure systems using
              weather physics.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Hurricane pressure difference calculator"
      >
        <Container>
          <HurricanePressureDifferenceCalculator />
        </Container>
      </section>

      <section className="article-section">
        <Container className="article-layout">
          <article className="article-content">

            <section>
              <p className="eyebrow">
                Atmospheric physics
              </p>

              <h2>
                What is hurricane pressure difference?
              </h2>

              <p>
                Pressure difference describes the
                difference between two pressure values
                in a weather system. It is an important
                concept in atmospheric science.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Pressure difference formula
              </h2>

              <div className="formula-card">
                <p>
                  Pressure Difference
                  <span>
                    = High Pressure − Low Pressure
                  </span>
                </p>
              </div>

              <p>
                Larger pressure differences can create
                stronger atmospheric pressure gradients.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of pressure difference calculations
              </h2>

              <p>
                These calculations help students learn
                meteorology, atmospheric physics, and
                severe weather concepts.
              </p>
            </section>

            <CalculatorFAQ slug="hurricane-pressure-difference-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
