import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { HurricaneStormSurgeCalculator } from "@/components/calculators/hurricane-storm-surge-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Hurricane Storm Surge Calculator | Coastal Risk Tool";

const pageDescription =
  "Estimate simplified hurricane storm surge height using wind speed, pressure drop, and coastal slope values. Learn storm surge science concepts.";

const pagePath =
  "/calculators/hurricane-storm-surge-calculator";

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

export default function HurricaneStormSurgeCalculatorPage() {
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
                Hurricane Storm Surge Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Coastal storm science tool
            </p>

            <h1>
              Hurricane Storm Surge Calculator
            </h1>

            <p>
              Estimate simplified storm surge height
              using hurricane intensity and coastal
              factors.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Hurricane storm surge calculator"
      >
        <Container>
          <HurricaneStormSurgeCalculator />
        </Container>
      </section>

      <section className="article-section">
        <Container className="article-layout">
          <article className="article-content">

            <section>
              <p className="eyebrow">
                Coastal storm science
              </p>

              <h2>
                What is hurricane storm surge?
              </h2>

              <p>
                Storm surge is an abnormal rise in
                seawater caused by storm winds and
                atmospheric pressure changes during
                hurricanes.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Storm surge formula
              </h2>

              <div className="formula-card">
                <p>
                  Surge Height
                  <span>
                    = (Wind Speed × 0.02) + (Pressure Drop × 0.01) / Coastal Slope
                  </span>
                </p>
              </div>

              <p>
                This educational model demonstrates how
                storm intensity and coastal conditions
                can influence surge estimates.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of storm surge calculations
              </h2>

              <p>
                Students can explore hurricanes,
                ocean science, meteorology, and
                simplified coastal risk concepts.
              </p>
            </section>

            <CalculatorFAQ slug="hurricane-storm-surge-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
