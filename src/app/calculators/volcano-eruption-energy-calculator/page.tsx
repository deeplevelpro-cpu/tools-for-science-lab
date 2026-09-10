import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { VolcanoEruptionEnergyCalculator } from "@/components/calculators/volcano-eruption-energy-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Volcano Eruption Energy Calculator | Volcanic Science Tool";

const pageDescription =
  "Calculate volcanic eruption energy using ejected material mass and velocity with a kinetic energy formula. Learn the physics behind volcanic motion.";

const pagePath =
  "/calculators/volcano-eruption-energy-calculator";

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

export default function VolcanoEruptionEnergyCalculatorPage() {
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
                Volcano Eruption Energy Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Earth science tool
            </p>

            <h1>
              Volcano Eruption Energy Calculator
            </h1>

            <p>
              Estimate volcanic eruption energy using
              mass and velocity values based on kinetic
              energy principles.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Volcano eruption energy calculator"
      >
        <Container>
          <VolcanoEruptionEnergyCalculator />
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
                What is volcanic eruption energy?
              </h2>

              <p>
                Volcanic eruptions release energy
                through moving lava, ash, gases, and
                rock fragments. Physics calculations
                help explain how mass and velocity
                affect the energy of moving material.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Kinetic energy formula
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
                This simplified model applies kinetic
                energy principles to understand the
                movement of volcanic materials.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses in earth science education
              </h2>

              <p>
                Energy calculations help students
                connect physics concepts with geology,
                volcano activity, and natural hazard
                studies.
              </p>
            </section>

            <CalculatorFAQ slug="volcano-eruption-energy-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
