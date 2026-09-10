import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { TornadoWindSpeedCalculator } from "@/components/calculators/tornado-wind-speed-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Tornado Wind Speed Calculator | Weather Science Tool";

const pageDescription =
  "Calculate wind speed using distance and time values. Learn the physics relationship behind tornado wind movement and speed estimation.";

const pagePath =
  "/calculators/tornado-wind-speed-calculator";

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

export default function TornadoWindSpeedCalculatorPage() {
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
                Tornado Wind Speed Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Weather science tool
            </p>

            <h1>
              Tornado Wind Speed Calculator
            </h1>

            <p>
              Estimate wind speed using distance and
              time measurements with a simple speed
              calculation formula.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Tornado wind speed calculator"
      >
        <Container>
          <TornadoWindSpeedCalculator />
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
                How is wind speed calculated?
              </h2>

              <p>
                Wind speed describes how quickly air
                moves over a distance. A simplified
                calculation divides distance traveled by
                the time required.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Wind speed formula
              </h2>

              <div className="formula-card">
                <p>
                  Speed
                  <span>
                    = Distance ÷ Time
                  </span>
                </p>
              </div>

              <p>
                This formula is useful for understanding
                motion and estimating movement speed in
                weather science examples.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of wind speed calculations
              </h2>

              <p>
                Wind speed calculations are useful in
                physics education, meteorology studies,
                and understanding atmospheric motion.
              </p>
            </section>

            <CalculatorFAQ slug="tornado-wind-speed-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
