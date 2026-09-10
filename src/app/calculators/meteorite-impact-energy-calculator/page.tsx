import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { MeteoriteImpactEnergyCalculator } from "@/components/calculators/meteorite-impact-energy-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Meteorite Impact Energy Calculator | Space Physics Tool";

const pageDescription =
  "Calculate meteorite impact energy using mass and velocity values with a kinetic energy formula. Learn the physics behind asteroid and meteor impacts.";

const pagePath =
  "/calculators/meteorite-impact-energy-calculator";

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

export default function MeteoriteImpactEnergyCalculatorPage() {
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
                Meteorite Impact Energy Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Space physics tool
            </p>

            <h1>
              Meteorite Impact Energy Calculator
            </h1>

            <p>
              Estimate the energy released by a
              meteorite impact using mass and velocity
              based on kinetic energy principles.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Meteorite impact energy calculator"
      >
        <Container>
          <MeteoriteImpactEnergyCalculator />
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
                What is meteorite impact energy?
              </h2>

              <p>
                Meteorite impact energy represents the
                kinetic energy carried by a moving space
                object before collision with a surface.
                It depends on the object's mass and
                velocity.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Impact energy formula
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
                Because velocity is squared, faster
                moving meteorites contain much greater
                impact energy.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of impact energy calculations
              </h2>

              <p>
                These calculations help students learn
                astronomy, physics, planetary science,
                and impact event concepts.
              </p>
            </section>

            <CalculatorFAQ slug="meteorite-impact-energy-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
