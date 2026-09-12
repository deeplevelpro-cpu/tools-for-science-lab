import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { HurricaneWindForceCalculator } from "@/components/calculators/hurricane-wind-force-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Hurricane Wind Force Calculator | Weather Physics Tool";

const pageDescription =
  "Calculate hurricane wind force using moving air mass and acceleration values. Learn the physics relationship between wind motion and force.";

const pagePath =
  "/calculators/hurricane-wind-force-calculator";

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

export default function HurricaneWindForceCalculatorPage() {
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
                Hurricane Wind Force Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Weather physics tool
            </p>

            <h1>
              Hurricane Wind Force Calculator
            </h1>

            <p>
              Calculate wind force using mass and
              acceleration based on Newton's second law.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Hurricane wind force calculator"
      >
        <Container>
          <HurricaneWindForceCalculator />
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
                What is hurricane wind force?
              </h2>

              <p>
                Wind force describes the push created
                by moving air. A simplified physics model
                uses mass and acceleration.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Wind force formula
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
                Greater moving air mass or acceleration
                produces greater calculated force.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of wind force calculations
              </h2>

              <p>
                These calculations help students learn
                mechanics, atmospheric physics, and
                storm science concepts.
              </p>
            </section>

            <CalculatorFAQ slug="hurricane-wind-force-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
