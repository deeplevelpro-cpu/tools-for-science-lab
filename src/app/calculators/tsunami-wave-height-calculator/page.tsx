import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { TsunamiWaveHeightCalculator } from "@/components/calculators/tsunami-wave-height-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Tsunami Wave Height Calculator | Ocean Physics Tool";

const pageDescription =
  "Calculate tsunami wave height using wave amplitude values. Learn the relationship between amplitude and wave height in ocean physics.";

const pagePath =
  "/calculators/tsunami-wave-height-calculator";

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

export default function TsunamiWaveHeightCalculatorPage() {
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
                Tsunami Wave Height Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Ocean physics tool
            </p>

            <h1>
              Tsunami Wave Height Calculator
            </h1>

            <p>
              Calculate tsunami wave height using
              amplitude values based on wave physics.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Tsunami wave height calculator"
      >
        <Container>
          <TsunamiWaveHeightCalculator />
        </Container>
      </section>

      <section className="article-section">
        <Container className="article-layout">
          <article className="article-content">

            <section>
              <p className="eyebrow">
                Ocean physics
              </p>

              <h2>
                What is tsunami wave height?
              </h2>

              <p>
                Tsunami wave height describes the
                vertical distance of a wave from trough
                to crest. A simplified calculation uses
                wave amplitude.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Tsunami wave height formula
              </h2>

              <div className="formula-card">
                <p>
                  Wave Height
                  <span>
                    = 2 × Amplitude
                  </span>
                </p>
              </div>

              <p>
                Amplitude represents half of the total
                wave height, so doubling amplitude gives
                the full wave height.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of wave height calculations
              </h2>

              <p>
                These calculations help students learn
                ocean waves, physics, and natural hazard
                concepts.
              </p>
            </section>

            <CalculatorFAQ slug="tsunami-wave-height-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
