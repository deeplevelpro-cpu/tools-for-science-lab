import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { SnowCalculator } from "@/components/calculators/snow-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Snow Calculator | Estimate Snowfall From Precipitation";

const pageDescription =
  "Estimate snowfall depth using liquid precipitation and snow ratio. Learn how meteorologists convert water equivalent into expected snow accumulation.";

const pagePath =
  "/calculators/snow-calculator";

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

export default function SnowCalculatorPage() {
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
                Snow Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Weather science tool
            </p>

            <h1>
              Snow Calculator
            </h1>

            <p>
              Estimate snowfall depth by converting
              liquid precipitation into snow
              accumulation using a snow ratio.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Snow calculator"
      >
        <Container>
          <SnowCalculator />
        </Container>
      </section>

      <section className="article-section">
        <Container className="article-layout">
          <article className="article-content">

            <section>
              <p className="eyebrow">
                Weather science
              </p>

              <h2>
                How is snowfall calculated?
              </h2>

              <p>
                Snowfall estimates are often based on
                the amount of liquid water contained in
                precipitation. Meteorologists use snow
                ratios to estimate how much snow will
                accumulate from a given amount of water.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Snowfall conversion formula
              </h2>

              <div className="formula-card">
                <p>
                  Snow Depth
                  <span>
                    = Liquid Precipitation × Snow Ratio
                  </span>
                </p>
              </div>

              <p>
                A common snow ratio is 10:1, meaning
                one inch of liquid precipitation may
                produce around ten inches of snow.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Snow ratio
              </p>

              <h2>
                Why snow ratios change
              </h2>

              <p>
                Snow density depends on temperature,
                humidity, crystal structure, and
                atmospheric conditions. Cold dry snow
                usually produces higher ratios, while
                wet snow produces lower ratios.
              </p>
            </section>

            <CalculatorFAQ slug="snow-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
