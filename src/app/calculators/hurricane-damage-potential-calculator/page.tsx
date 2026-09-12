import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { HurricaneDamagePotentialCalculator } from "@/components/calculators/hurricane-damage-potential-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Hurricane Damage Potential Calculator | Storm Risk Tool";

const pageDescription =
  "Estimate hurricane damage potential using wind speed, category, and population density values. Learn how storm factors influence risk assessment.";

const pagePath =
  "/calculators/hurricane-damage-potential-calculator";

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

export default function HurricaneDamagePotentialCalculatorPage() {
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
                Hurricane Damage Potential Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Storm science tool
            </p>

            <h1>
              Hurricane Damage Potential Calculator
            </h1>

            <p>
              Estimate simplified storm damage potential
              using wind speed, hurricane category, and
              population density factors.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Hurricane damage potential calculator"
      >
        <Container>
          <HurricaneDamagePotentialCalculator />
        </Container>
      </section>

      <section className="article-section">
        <Container className="article-layout">
          <article className="article-content">

            <section>
              <p className="eyebrow">
                Storm risk science
              </p>

              <h2>
                What is hurricane damage potential?
              </h2>

              <p>
                Hurricane damage potential describes a
                simplified estimate of how storm strength
                and affected population factors may
                influence risk.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Damage potential formula
              </h2>

              <div className="formula-card">
                <p>
                  Damage Score
                  <span>
                    = Wind Speed × Category × Population Density / 100
                  </span>
                </p>
              </div>

              <p>
                This educational model shows how multiple
                storm-related factors can combine into a
                simplified risk score.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of damage risk calculations
              </h2>

              <p>
                Students can use this tool to explore
                meteorology, disaster science, and
                simplified risk modeling concepts.
              </p>
            </section>

            <CalculatorFAQ slug="hurricane-damage-potential-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
