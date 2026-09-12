import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { HurricaneEvacuationZoneCalculator } from "@/components/calculators/hurricane-evacuation-zone-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Hurricane Evacuation Zone Calculator | Storm Risk Tool";

const pageDescription =
  "Estimate a simplified hurricane evacuation risk zone using hurricane category, wind speed, and distance from coast values.";

const pagePath =
  "/calculators/hurricane-evacuation-zone-calculator";

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

export default function HurricaneEvacuationZoneCalculatorPage() {
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
                Hurricane Evacuation Zone Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Storm science tool
            </p>

            <h1>
              Hurricane Evacuation Zone Calculator
            </h1>

            <p>
              Estimate a simplified evacuation risk zone
              using storm strength and coastal distance
              factors.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Hurricane evacuation zone calculator"
      >
        <Container>
          <HurricaneEvacuationZoneCalculator />
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
                What is a hurricane evacuation zone?
              </h2>

              <p>
                Evacuation zones help communities understand
                potential storm risk based on hazard
                factors such as wind intensity and coastal
                exposure.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Evacuation score formula
              </h2>

              <div className="formula-card">
                <p>
                  Evacuation Score
                  <span>
                    = Category × Wind Speed / Distance From Coast
                  </span>
                </p>
              </div>

              <p>
                Higher scores represent greater simplified
                evacuation risk in this educational model.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of evacuation calculations
              </h2>

              <p>
                Students can explore meteorology,
                geography, disaster science, and
                simplified risk assessment concepts.
              </p>
            </section>

            <CalculatorFAQ slug="hurricane-evacuation-zone-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
