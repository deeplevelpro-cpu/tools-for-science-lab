import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { WaterLevelCalculator } from "@/components/calculators/water-level-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Water Level Calculator | Calculate Water Volume";

const pageDescription =
  "Calculate water volume from length, width, and water depth. Convert tank or pool measurements into cubic meters and liters.";

const pagePath =
  "/calculators/water-level-calculator";

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

export default function WaterLevelCalculatorPage() {
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
                Water Level Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Environmental science tool
            </p>

            <h1>
              Water Level Calculator
            </h1>

            <p>
              Calculate water volume from container
              dimensions and water depth using a
              scientific volume formula.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Water level calculator"
      >
        <Container>
          <WaterLevelCalculator />
        </Container>
      </section>

      <section className="article-section">
        <Container className="article-layout">
          <article className="article-content">

            <section>
              <p className="eyebrow">
                Water science
              </p>

              <h2>
                How is water volume calculated?
              </h2>

              <p>
                Water volume can be calculated by
                multiplying the length, width, and depth
                of a rectangular space containing water.
                This principle is used in tanks, pools,
                reservoirs, and environmental studies.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Water volume formula
              </h2>

              <div className="formula-card">
                <p>
                  Volume
                  <span>
                    = Length × Width × Depth
                  </span>
                </p>
              </div>

              <p>
                One cubic meter of water equals
                approximately 1000 liters.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Where water level calculations are used
              </h2>

              <p>
                Water volume calculations are useful
                for tanks, swimming pools, irrigation
                systems, rainwater collection, and
                environmental science measurements.
              </p>
            </section>

            <CalculatorFAQ slug="water-level-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
