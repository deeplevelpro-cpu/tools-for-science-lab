import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import type { Metadata } from "next";
import { CalculatorPageShell } from "@/components/calculators/calculator-page-shell";

import Link from "next/link";

import {
  TangentialAccelerationCalculator,
} from "@/components/calculators/tangential-acceleration-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";
import { createCalculatorSchema } from "@/lib/seo/calculator-schema";
import { createCalculatorFAQSchema } from "@/lib/seo/calculator-faq-schema";

const pageTitle =
  "Tangential Acceleration Calculator";

const pageDescription =
  "Calculate tangential acceleration, radius, or angular acceleration using aₜ = rα, with SI units, formula guidance, and step-by-step results.";

const pagePath =
  "/calculators/tangential-acceleration-calculator";

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
  slug: "tangential-acceleration-calculator",
  category: "Physics",
});

const faqSchema = createCalculatorFAQSchema("tangential-acceleration-calculator");

export default function TangentialAccelerationCalculatorPage() {
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
                Tangential Acceleration Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Circular motion tool
            </p>

            <h1>
              Tangential Acceleration Calculator
            </h1>

            <p>
              Solve tangential acceleration, radius, or
              angular acceleration using aₜ = rα.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Tangential acceleration calculator"
      >
        <Container>
          <CalculatorPageShell
            slug="tangential-acceleration-calculator"
            subject="physics"
          >
            <TangentialAccelerationCalculator />
          </CalculatorPageShell>
        </Container>
      </section>

      <section className="article-section">
        <Container className="article-layout">
          <article className="article-content">
            <section aria-labelledby="overview-heading">
              <p className="eyebrow">
                Physics overview
              </p>

              <h2 id="overview-heading">
                What is tangential acceleration?
              </h2>

              <p>
                Tangential acceleration is the linear
                speed of an object moving along the
                edge of a circular path.
              </p>
            </section>

            <section aria-labelledby="formula-heading">
              <p className="eyebrow">Formula</p>

              <h2 id="formula-heading">
                Tangential acceleration formula
              </h2>

              <div className="formula-card">
                <p>
                  Tangential Velocity
                  <span>aₜ = rα</span>
                </p>
              </div>

              <ul className="article-list">
                <li>
                  <strong>v</strong> is tangential
                  velocity in m/s.
                </li>
                <li>
                  <strong>r</strong> is radius in
                  meters.
                </li>
                <li>
                  <strong>ω</strong> is angular
                  velocity in rad/s.
                </li>
              </ul>
            </section>

            <section aria-labelledby="example-heading">
              <p className="eyebrow">
                Worked example
              </p>

              <h2 id="example-heading">
                A point is 4 m from the axis and
                rotates at 3 rad/s
              </h2>

              <ol className="calculation-steps">
                <li>
                  Write the formula:{" "}
                  <strong>aₜ = rα</strong>.
                </li>
                <li>
                  Substitute the values:{" "}
                  <strong>v = 4 × 3</strong>.
                </li>
                <li>
                  Calculate tangential acceleration:{" "}
                  <strong>v = 12 m/s²</strong>.
                </li>
              </ol>
            </section>

            <section aria-labelledby="rearranged-heading">
              <p className="eyebrow">
                Rearranged equations
              </p>

              <h2 id="rearranged-heading">
                Solve for radius or angular acceleration
              </h2>

              <div className="comparison-grid">
                <article className="comparison-card">
                  <p className="comparison-card__label">
                    Radius
                  </p>

                  <h3>r = v ÷ ω</h3>

                  <p>
                    Divide tangential acceleration by
                    angular acceleration.
                  </p>
                </article>

                <article className="comparison-card">
                  <p className="comparison-card__label">
                    Angular acceleration
                  </p>

                  <h3>ω = v ÷ r</h3>

                  <p>
                    Divide tangential acceleration by
                    radius.
                  </p>
                </article>
              </div>
            </section>

            <section aria-labelledby="relationship-heading">
              <p className="eyebrow">
                Physical relationship
              </p>

              <h2 id="relationship-heading">
                Radius and rotation rate both affect v
              </h2>

              <p>
                Tangential acceleration increases when
                radius increases, angular acceleration
                increases, or both increase.
              </p>
            </section>

            <section aria-labelledby="units-heading">
              <p className="eyebrow">Units</p>

              <h2 id="units-heading">
                Standard SI units
              </h2>

              <p>
                Use meters per second squared for tangential
                velocity, meters for radius, and
                radians per second squared for angular
                velocity.
              </p>
            </section>

            <section aria-labelledby="applications-heading">
              <p className="eyebrow">
                Real-world applications
              </p>

              <h2 id="applications-heading">
                Where tangential acceleration is used
              </h2>

              <ul className="article-list">
                <li>
                  Wheels, gears, and rotating disks.
                </li>
                <li>
                  Turbines and mechanical shafts.
                </li>
                <li>
                  Amusement rides and rotating
                  platforms.
                </li>
                <li>
                  Planetary and satellite motion.
                </li>
                <li>
                  Motors and industrial machinery.
                </li>
              </ul>
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
                  All entered values must be greater
                  than zero.
                </li>
                <li>
                  Radius is measured from the rotation
                  axis.
                </li>
                <li>
                  Angular acceleration must be entered in
                  radians per second squared.
                </li>
                <li>
                  Direction is not represented.
                </li>
                <li>
                  Units are not converted
                  automatically.
                </li>
              </ul>
            </section>

            <section aria-labelledby="related-heading">
              <p className="eyebrow">
                Related tools
              </p>

              <h2 id="related-heading">
                Continue your circular motion analysis
              </h2>

              <p>
                Use the{" "}
                <Link
                  className="article-inline-link"
                  href="/calculators/angular-acceleration-calculator"
                >
                  Angular Acceleration Calculator
                </Link>{" "}
                to calculate angular acceleration,
                displacement, or time.
              </p>

              <p>
                Use the{" "}
                <Link
                  className="article-inline-link"
                  href="/calculators/centripetal-acceleration-calculator"
                >
                  Centripetal Acceleration Calculator
                </Link>{" "}
                to calculate inward acceleration in
                circular motion.
              </p>
            </section>

            <CalculatorFAQ slug="tangential-acceleration-calculator" />
          </article>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <p className="sidebar-card__label">
                Quick reference
              </p>

              <h2>
                Tangential acceleration checklist
              </h2>

              <ul>
                <li>
                  Use tangential acceleration in m/s
                </li>
                <li>Use radius in meters</li>
                <li>
                  Use angular acceleration in rad/s
                </li>
                <li>Apply aₜ = rα</li>
                <li>Check all values are positive</li>
              </ul>
            </div>

            <div className="sidebar-card">
              <p className="sidebar-card__label">
                Related calculator
              </p>

              <h2>
                Calculate angular acceleration
              </h2>

              <p>
                Solve angular acceleration, angular
                displacement, or time.
              </p>

              <Link href="/calculators/angular-acceleration-calculator">
                Open Angular Acceleration Calculator
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
