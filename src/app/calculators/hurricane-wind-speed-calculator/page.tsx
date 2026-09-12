import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { HurricaneWindSpeedCalculator } from "@/components/calculators/hurricane-wind-speed-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Hurricane Wind Speed Calculator | Weather Physics Tool";

const pageDescription =
  "Calculate hurricane wind speed using distance and time values. Learn the physics relationship between motion, speed, and storm science.";

const pagePath =
  "/calculators/hurricane-wind-speed-calculator";

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

export default function HurricaneWindSpeedCalculatorPage() {
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
                Hurricane Wind Speed Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Weather physics tool
            </p>

            <h1>
              Hurricane Wind Speed Calculator
            </h1>

            <p>
              Calculate wind speed using distance and
              time based on motion physics.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Hurricane wind speed calculator"
      >
        <Container>
          <HurricaneWindSpeedCalculator />
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
                What is hurricane wind speed?
              </h2>

              <p>
                Wind speed measures how far moving air
                travels over a period of time. A simple
                calculation uses distance divided by time.
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
                Greater distance traveled in the same
                time results in higher wind speed.
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
                These calculations help students learn
                motion physics, meteorology, and storm
                science concepts.
              </p>
            </section>

            <CalculatorFAQ slug="hurricane-wind-speed-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
