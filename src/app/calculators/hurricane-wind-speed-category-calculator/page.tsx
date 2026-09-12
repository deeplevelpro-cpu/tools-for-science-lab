import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { HurricaneWindSpeedCategoryCalculator } from "@/components/calculators/hurricane-wind-speed-category-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Hurricane Wind Speed Category Calculator | Storm Classification Tool";

const pageDescription =
  "Determine hurricane category from sustained wind speed using a simple hurricane classification calculator.";

const pagePath =
  "/calculators/hurricane-wind-speed-category-calculator";

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

export default function HurricaneWindSpeedCategoryCalculatorPage() {
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
                Hurricane Wind Speed Category Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Weather science tool
            </p>

            <h1>
              Hurricane Wind Speed Category Calculator
            </h1>

            <p>
              Convert sustained hurricane wind speed
              into a storm category classification.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Hurricane wind speed category calculator"
      >
        <Container>
          <HurricaneWindSpeedCategoryCalculator />
        </Container>
      </section>

      <section className="article-section">
        <Container className="article-layout">
          <article className="article-content">

            <section>
              <p className="eyebrow">
                Hurricane classification
              </p>

              <h2>
                What is hurricane wind speed category?
              </h2>

              <p>
                Hurricane categories classify storms
                based on sustained wind speed using
                the Saffir-Simpson Hurricane Wind Scale.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Category classification formula
              </h2>

              <div className="formula-card">
                <p>
                  Category
                  <span>
                    = Sustained Wind Speed Classification
                  </span>
                </p>
              </div>

              <p>
                Higher sustained wind speeds correspond
                to stronger hurricane categories.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of hurricane classification
              </h2>

              <p>
                Students can explore meteorology,
                climate science, weather measurement,
                and storm classification concepts.
              </p>
            </section>

            <CalculatorFAQ slug="hurricane-wind-speed-category-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
