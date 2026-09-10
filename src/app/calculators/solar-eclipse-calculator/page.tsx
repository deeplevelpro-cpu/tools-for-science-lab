import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { SolarEclipseCalculator } from "@/components/calculators/solar-eclipse-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Solar Eclipse Calculator | Eclipse Geometry Tool";

const pageDescription =
  "Calculate solar eclipse geometry by comparing the apparent sizes of the Sun and Moon using astronomical measurements.";

const pagePath =
  "/calculators/solar-eclipse-calculator";

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

export default function SolarEclipseCalculatorPage() {
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
                Solar Eclipse Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Astronomy calculation tool
            </p>

            <h1>
              Solar Eclipse Calculator
            </h1>

            <p>
              Compare the apparent angular sizes of
              the Sun and Moon to understand eclipse
              geometry.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Solar eclipse calculator"
      >
        <Container>
          <SolarEclipseCalculator />
        </Container>
      </section>

      <section className="article-section">
        <Container className="article-layout">
          <article className="article-content">

            <section>
              <p className="eyebrow">
                Astronomy basics
              </p>

              <h2>
                What causes a solar eclipse?
              </h2>

              <p>
                A solar eclipse happens when the Moon
                passes between Earth and the Sun,
                blocking some or all sunlight from
                reaching observers on Earth.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Angular diameter calculation
              </h2>

              <div className="formula-card">
                <p>
                  Angular diameter
                  <span>
                    θ = 2 × arctan(radius ÷ distance)
                  </span>
                </p>
              </div>

              <p>
                The calculator compares the apparent
                size of the Sun and Moon in the sky.
                Similar angular sizes allow total
                eclipse conditions.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Science explanation
              </p>

              <h2>
                Total and annular eclipses
              </h2>

              <p>
                When the Moon appears larger than the
                Sun, it can completely cover the solar
                disk. When it appears smaller, a bright
                ring of sunlight remains visible.
              </p>
            </section>

            <CalculatorFAQ slug="solar-eclipse-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
