import type { Metadata } from "next";

import { CalculatorCard } from "@/components/calculator-directory/calculator-card";
import { Container } from "@/components/ui/container";

import { calculators } from "@/content/calculators/registry";
import { getDynamicsCalculators } from "@/content/calculators/dynamics";

import { createCollectionSchema } from "@/lib/seo/collection-schema";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Dynamics Calculator | Force, Motion, Energy & Physics Tools";

const pageDescription =
  "Explore physics dynamics calculators for force, acceleration, momentum, torque, rotational motion, work, and power. Solve mechanics problems with formulas and step-by-step calculations.";

const pagePath =
  "/calculators/dynamics";

const dynamicsCalculators =
  getDynamicsCalculators(calculators);

const schema = createCollectionSchema({
  name: "Dynamics Calculators",
  description: pageDescription,
  path: pagePath,
  calculators: dynamicsCalculators,
});

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: absoluteUrl(pagePath),
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DynamicsCalculatorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <main>
        <section className="directory-hero">
          <Container>
            <nav
              className="breadcrumbs"
              aria-label="Breadcrumb"
            >
              <ol>
                <li>
                  <a href="/calculators">
                    Calculators
                  </a>
                </li>
                <li aria-current="page">
                  Dynamics
                </li>
              </ol>
            </nav>

            <div className="directory-hero__content">
              <p className="eyebrow">
                Physics calculator collection
              </p>

              <h1>
                Dynamics Calculators
              </h1>

              <p>
                Solve problems involving force,
                motion, acceleration, momentum,
                energy, and rotational dynamics
                using physics formulas and
                educational calculators.
              </p>
            </div>
          </Container>
        </section>

        <section className="directory-section">
          <Container>
            <div className="section-heading">
              <p className="eyebrow">
                Mechanics and motion
              </p>

              <h2>
                Physics dynamics tools
              </h2>

              <p>
                These calculators help students,
                teachers, and researchers apply
                Newtonian mechanics, rotational
                equations, and energy relationships.
              </p>
            </div>

            <div className="calculator-directory-grid">
              {dynamicsCalculators.map(
                (calculator) => (
                  <CalculatorCard
                    key={calculator.slug}
                    calculator={calculator}
                  />
                ),
              )}
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
