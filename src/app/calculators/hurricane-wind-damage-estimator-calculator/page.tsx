import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { HurricaneWindDamageEstimatorCalculator } from "@/components/calculators/hurricane-wind-damage-estimator-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Hurricane Wind Damage Estimator Calculator | Storm Risk Tool";

const pageDescription =
  "Estimate simplified hurricane wind damage potential using wind speed, exposed area, and building vulnerability factors.";

const pagePath =
  "/calculators/hurricane-wind-damage-estimator-calculator";

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

export default function HurricaneWindDamageEstimatorCalculatorPage() {
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
                Hurricane Wind Damage Estimator Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Storm risk science tool
            </p>

            <h1>
              Hurricane Wind Damage Estimator Calculator
            </h1>

            <p>
              Estimate simplified wind damage risk
              using storm intensity and exposure factors.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Hurricane wind damage estimator calculator"
      >
        <Container>
          <HurricaneWindDamageEstimatorCalculator />
        </Container>
      </section>

      <section className="article-section">
        <Container className="article-layout">
          <article className="article-content">

            <section>
              <p className="eyebrow">
                Wind damage science
              </p>

              <h2>
                What is hurricane wind damage estimation?
              </h2>

              <p>
                Wind damage estimation uses storm
                intensity and exposure factors to
                understand how strong winds may affect
                structures.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Wind damage score formula
              </h2>

              <div className="formula-card">
                <p>
                  Damage Score
                  <span>
                    = Wind Speed² × Exposure Area × Building Factor / 1000
                  </span>
                </p>
              </div>

              <p>
                Wind speed has a major effect because
                velocity is squared in the model.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of wind damage calculations
              </h2>

              <p>
                Students can explore meteorology,
                engineering concepts, physics, and
                simplified disaster risk modeling.
              </p>
            </section>

            <CalculatorFAQ slug="hurricane-wind-damage-estimator-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
