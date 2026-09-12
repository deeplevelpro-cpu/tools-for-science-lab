import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { HurricanePressureCalculator } from "@/components/calculators/hurricane-pressure-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Hurricane Pressure Calculator | Weather Physics Tool";

const pageDescription =
  "Calculate hurricane pressure using force and area values. Learn the physics relationship between force and pressure in severe weather systems.";

const pagePath =
  "/calculators/hurricane-pressure-calculator";

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

export default function HurricanePressureCalculatorPage() {
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
                Hurricane Pressure Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Weather physics tool
            </p>

            <h1>
              Hurricane Pressure Calculator
            </h1>

            <p>
              Calculate pressure using force and area
              values based on the pressure formula.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Hurricane pressure calculator"
      >
        <Container>
          <HurricanePressureCalculator />
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
                What is hurricane pressure?
              </h2>

              <p>
                Pressure describes the amount of force
                applied over an area. A simplified model
                uses force divided by surface area.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Pressure formula
              </h2>

              <div className="formula-card">
                <p>
                  Pressure
                  <span>
                    = Force ÷ Area
                  </span>
                </p>
              </div>

              <p>
                Greater force over the same area creates
                higher calculated pressure.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of pressure calculations
              </h2>

              <p>
                These calculations help students learn
                atmospheric physics, weather science,
                and pressure concepts.
              </p>
            </section>

            <CalculatorFAQ slug="hurricane-pressure-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
