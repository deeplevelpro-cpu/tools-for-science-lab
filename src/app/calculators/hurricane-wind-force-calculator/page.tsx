import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { HurricaneWindForceCalculator } from "@/components/calculators/hurricane-wind-force-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Hurricane Wind Force Calculator | Storm Physics Tool";

const pageDescription =
  "Calculate simplified hurricane wind force using wind speed and affected surface area. Learn the physics relationship between wind and force.";

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
              Storm physics tool
            </p>

            <h1>
              Hurricane Wind Force Calculator
            </h1>

            <p>
              Estimate simplified wind force produced
              by hurricane-level winds over an area.
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
                Wind physics
              </p>

              <h2>
                What is hurricane wind force?
              </h2>

              <p>
                Wind force describes the push created
                by moving air against a surface. It
                depends on air density, velocity, and
                exposed area.
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
                  Wind Force
                  <span>
                    = 0.5 × Air Density × Wind Velocity² × Area
                  </span>
                </p>
              </div>

              <p>
                Wind velocity has a large effect because
                it is squared in the physics equation.
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
                Students can explore fluid mechanics,
                weather science, engineering concepts,
                and hurricane physics.
              </p>
            </section>

            <CalculatorFAQ slug="hurricane-wind-force-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
