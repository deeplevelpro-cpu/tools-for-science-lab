import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { TsunamiTravelTimeCalculator } from "@/components/calculators/tsunami-travel-time-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Tsunami Travel Time Calculator | Ocean Physics Tool";

const pageDescription =
  "Calculate tsunami travel time using distance and wave speed values. Learn how ocean waves travel across distances using physics principles.";

const pagePath =
  "/calculators/tsunami-travel-time-calculator";

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

export default function TsunamiTravelTimeCalculatorPage() {
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
                Tsunami Travel Time Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Ocean physics tool
            </p>

            <h1>
              Tsunami Travel Time Calculator
            </h1>

            <p>
              Calculate tsunami travel time using
              distance and wave speed based on
              simple motion physics.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Tsunami travel time calculator"
      >
        <Container>
          <TsunamiTravelTimeCalculator />
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
                What is tsunami travel time?
              </h2>

              <p>
                Tsunami travel time estimates how long
                a wave takes to move from one location
                to another using distance and speed.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Travel time formula
              </h2>

              <div className="formula-card">
                <p>
                  Travel Time
                  <span>
                    = Distance ÷ Speed
                  </span>
                </p>
              </div>

              <p>
                Longer distances increase travel time,
                while faster wave speeds reduce the
                required time.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of tsunami travel calculations
              </h2>

              <p>
                These calculations help students learn
                ocean waves, motion physics, and
                natural hazard concepts.
              </p>
            </section>

            <CalculatorFAQ slug="tsunami-travel-time-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
