import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { SolarFlareEnergyCalculator } from "@/components/calculators/solar-flare-energy-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Solar Flare Energy Calculator | Space Physics Tool";

const pageDescription =
  "Calculate solar flare energy using plasma mass and velocity values with a kinetic energy formula. Learn the physics behind solar eruptions.";

const pagePath =
  "/calculators/solar-flare-energy-calculator";

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

export default function SolarFlareEnergyCalculatorPage() {
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
                Solar Flare Energy Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Space physics tool
            </p>

            <h1>
              Solar Flare Energy Calculator
            </h1>

            <p>
              Estimate solar flare energy using plasma
              mass and velocity values based on kinetic
              energy principles.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Solar flare energy calculator"
      >
        <Container>
          <SolarFlareEnergyCalculator />
        </Container>
      </section>

      <section className="article-section">
        <Container className="article-layout">
          <article className="article-content">

            <section>
              <p className="eyebrow">
                Space science
              </p>

              <h2>
                What is solar flare energy?
              </h2>

              <p>
                Solar flare energy represents energy
                released by powerful events on the Sun.
                A simplified physics model can estimate
                the kinetic energy of moving plasma.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Solar plasma energy formula
              </h2>

              <div className="formula-card">
                <p>
                  Energy
                  <span>
                    = 1/2 × Mass × Velocity²
                  </span>
                </p>
              </div>

              <p>
                Since velocity is squared, faster plasma
                motion produces a much larger increase
                in calculated kinetic energy.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of solar energy calculations
              </h2>

              <p>
                These calculations support physics
                education, astronomy learning, and
                understanding energetic space events.
              </p>
            </section>

            <CalculatorFAQ slug="solar-flare-energy-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
