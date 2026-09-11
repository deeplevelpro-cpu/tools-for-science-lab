import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { VolcanoLavaFlowSpeedCalculator } from "@/components/calculators/volcano-lava-flow-speed-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Volcano Lava Flow Speed Calculator | Geology Physics Tool";

const pageDescription =
  "Calculate volcanic lava flow speed using travel distance and time values. Learn the physics behind lava movement and volcanic hazards.";

const pagePath =
  "/calculators/volcano-lava-flow-speed-calculator";

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

export default function VolcanoLavaFlowSpeedCalculatorPage() {
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
                Volcano Lava Flow Speed Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Geology physics tool
            </p>

            <h1>
              Volcano Lava Flow Speed Calculator
            </h1>

            <p>
              Calculate lava flow speed using distance
              and travel time based on motion physics.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Volcano lava flow speed calculator"
      >
        <Container>
          <VolcanoLavaFlowSpeedCalculator />
        </Container>
      </section>

      <section className="article-section">
        <Container className="article-layout">
          <article className="article-content">

            <section>
              <p className="eyebrow">
                Volcanic science
              </p>

              <h2>
                What is lava flow speed?
              </h2>

              <p>
                Lava flow speed describes how quickly
                molten rock travels across the surface.
                A simplified calculation uses distance
                and time.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Lava speed formula
              </h2>

              <div className="formula-card">
                <p>
                  Speed
                  <span>
                    = Distance ÷ Time
                  </span>
                </p>
              </div>

              <p>
                Greater distances covered in shorter
                times produce faster lava flow speeds.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of lava flow calculations
              </h2>

              <p>
                These calculations help students learn
                geology, motion physics, and volcanic
                hazard concepts.
              </p>
            </section>

            <CalculatorFAQ slug="volcano-lava-flow-speed-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
