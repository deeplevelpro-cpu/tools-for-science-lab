import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import type { Metadata } from "next";
import { CalculatorPageShell } from "@/components/calculators/calculator-page-shell";

import Link from "next/link";

import {
  GravitationalPotentialEnergyCalculator,
} from "@/components/calculators/gravitational-potential-energy-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";
import { createCalculatorSchema } from "@/lib/seo/calculator-schema";
import { createCalculatorFAQSchema } from "@/lib/seo/calculator-faq-schema";

const pageTitle =
  "Gravitational Potential Energy Calculator";

const pageDescription =
  "Calculate gravitational potential energy, mass, gravitational acceleration, or height using PE = mgh, with units and step-by-step results.";

const pagePath =
  "/calculators/gravitational-potential-energy-calculator";

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

const calculatorSchema = createCalculatorSchema({
  name: pageTitle,
  description: pageDescription,
  slug: "gravitational-potential-energy-calculator",
  category: "Physics",
});

const faqSchema = createCalculatorFAQSchema("gravitational-potential-energy-calculator");

export default function GravitationalPotentialEnergyCalculatorPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            calculatorSchema,
          ).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <section className="tool-page-hero">
        <Container>
          <nav
            className="breadcrumbs"
            aria-label="Breadcrumb"
          >
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/calculators">
                  Calculators
                </Link>
              </li>
              <li aria-current="page">
                Gravitational Potential Energy Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Mass, gravity, and height tool
            </p>

            <h1>
              Gravitational Potential Energy Calculator
            </h1>

            <p>
              Solve potential energy, mass,
              gravitational acceleration, or height
              using PE = mgh.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Gravitational potential energy calculator"
      >
        <Container>
          <CalculatorPageShell
          slug="gravitational-potential-energy-calculator"
          subject="physics"
        >
          <GravitationalPotentialEnergyCalculator />
        </CalculatorPageShell>
        </Container>
      </section>

      <section className="article-section">
        <Container className="article-layout">
          <article className="article-content">
            <section aria-labelledby="overview-heading">
              <p className="eyebrow">
                Energy due to position
              </p>

              <h2 id="overview-heading">
                What is gravitational potential energy?
              </h2>

              <p>
                Gravitational potential energy is the
                energy stored by an object because of
                its vertical position in a
                gravitational field.
              </p>
            </section>

            <section aria-labelledby="formula-heading">
              <p className="eyebrow">Formula</p>

              <h2 id="formula-heading">
                Gravitational potential energy formula
              </h2>

              <div className="formula-card">
                <p>
                  Potential Energy
                  <span>PE = mgh</span>
                </p>
              </div>

              <ul className="article-list">
                <li>
                  <strong>PE</strong> is potential
                  energy in joules.
                </li>
                <li>
                  <strong>m</strong> is mass in
                  kilograms.
                </li>
                <li>
                  <strong>g</strong> is gravitational
                  acceleration in meters per second
                  squared.
                </li>
                <li>
                  <strong>h</strong> is height in
                  meters.
                </li>
              </ul>
            </section>

            <section aria-labelledby="example-heading">
              <p className="eyebrow">
                Worked example
              </p>

              <h2 id="example-heading">
                A 10 kg object is raised 5 m
              </h2>

              <ol className="calculation-steps">
                <li>
                  Write the formula:{" "}
                  <strong>PE = mgh</strong>.
                </li>
                <li>
                  Substitute the values:{" "}
                  <strong>
                    PE = 10 × 9.8 × 5
                  </strong>.
                </li>
                <li>
                  Calculate the energy:{" "}
                  <strong>PE = 490 J</strong>.
                </li>
              </ol>
            </section>

            <section aria-labelledby="rearranged-heading">
              <p className="eyebrow">
                Rearranged equations
              </p>

              <h2 id="rearranged-heading">
                Solve for mass, gravity, or height
              </h2>

              <div className="comparison-grid">
                <article className="comparison-card">
                  <p className="comparison-card__label">
                    Mass
                  </p>

                  <h3>m = PE ÷ gh</h3>

                  <p>
                    Divide potential energy by gravity
                    multiplied by height.
                  </p>
                </article>

                <article className="comparison-card">
                  <p className="comparison-card__label">
                    Gravity
                  </p>

                  <h3>g = PE ÷ mh</h3>

                  <p>
                    Divide potential energy by mass
                    multiplied by height.
                  </p>
                </article>

                <article className="comparison-card">
                  <p className="comparison-card__label">
                    Height
                  </p>

                  <h3>h = PE ÷ mg</h3>

                  <p>
                    Divide potential energy by mass
                    multiplied by gravity.
                  </p>
                </article>
              </div>
            </section>

            <section aria-labelledby="units-heading">
              <p className="eyebrow">Units</p>

              <h2 id="units-heading">
                Standard SI units
              </h2>

              <p>
                Use kilograms for mass, meters per
                second squared for gravity, and meters
                for height.
              </p>

              <div className="formula-card">
                <p>
                  One joule
                  <span>1 J = 1 kg·m²/s²</span>
                </p>
              </div>
            </section>

            <section aria-labelledby="gravity-heading">
              <p className="eyebrow">
                Gravity values
              </p>

              <h2 id="gravity-heading">
                Earth and other gravitational fields
              </h2>

              <p>
                On Earth, gravitational acceleration is
                commonly approximated as 9.8 m/s².
                Different planets and moons have
                different gravity values, which can be
                entered directly in the calculator.
              </p>
            </section>

            <section aria-labelledby="limitations-heading">
              <p className="eyebrow">
                Calculation limits
              </p>

              <h2 id="limitations-heading">
                Important assumptions
              </h2>

              <ul className="article-list">
                <li>
                  Mass must be greater than zero.
                </li>
                <li>
                  Gravitational acceleration must be
                  greater than zero.
                </li>
                <li>
                  Height must be greater than zero.
                </li>
                <li>
                  Potential energy must be greater than
                  zero when solving for another
                  variable.
                </li>
                <li>
                  The calculator does not automatically
                  convert units.
                </li>
              </ul>
            </section>

            <section aria-labelledby="related-heading">
              <p className="eyebrow">
                Related tools
              </p>

              <h2 id="related-heading">
                Continue analyzing energy
              </h2>

              <p>
                Use the{" "}
                <Link
                  className="article-inline-link"
                  href="/calculators/kinetic-energy-calculator"
                >
                  Kinetic Energy Calculator
                </Link>{" "}
                to calculate energy due to motion.
              </p>

              <p>
                Use the{" "}
                <Link
                  className="article-inline-link"
                  href="/calculators/work-calculator"
                >
                  Work Calculator
                </Link>{" "}
                for force and displacement, or use the{" "}
                <Link
                  className="article-inline-link"
                  href="/calculators/power-calculator"
                >
                  Power Calculator
                </Link>{" "}
                for work completed over time.
              </p>
            </section>

            <CalculatorFAQ slug="gravitational-potential-energy-calculator" />
          </article>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <p className="sidebar-card__label">
                Quick reference
              </p>

              <h2>Potential energy checklist</h2>

              <ul>
                <li>Convert mass to kilograms</li>
                <li>Use the correct gravity value</li>
                <li>Convert height to meters</li>
                <li>Use PE = mgh</li>
                <li>Report energy in joules</li>
              </ul>
            </div>

            <div className="sidebar-card">
              <p className="sidebar-card__label">
                Related calculator
              </p>

              <h2>Calculate kinetic energy</h2>

              <p>
                Solve kinetic energy, mass, or speed
                using KE = ½mv².
              </p>

              <Link href="/calculators/kinetic-energy-calculator">
                Open Kinetic Energy Calculator
              </Link>
            </div>
          </aside>
        </Container>
        <Container>
          </Container>
      </section>
    

      </main>
  );
}
