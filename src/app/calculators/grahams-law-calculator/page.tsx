import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import type { Metadata } from "next";
import { CalculatorPageShell } from "@/components/calculators/calculator-page-shell";

import Link from "next/link";

import { GrahamsLawCalculator } from "@/components/calculators/grahams-law-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";
import { createCalculatorSchema } from "@/lib/seo/calculator-schema";
import { createCalculatorFAQSchema } from "@/lib/seo/calculator-faq-schema";

export const metadata: Metadata = {
  title: "Graham's Law Calculator | Rate, Time & Molar Mass",
  description:
    "Use Graham's law to calculate gas effusion or diffusion rate, time, and molar mass. Solve r₁/r₂ = √(M₂/M₁) with optional time-unit conversion.",
  alternates: {
    canonical: "/calculators/grahams-law-calculator",
  },
  openGraph: {
    title: "Graham's Law Calculator",
    description:
      "Compare gas diffusion or effusion rates and solve for rate, time, or molar mass using Graham's law.",
    url: absoluteUrl(
      "/calculators/grahams-law-calculator",
    ),
    siteName: siteConfig.name,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ScienceCalcHub",
    description:
      "Science calculators and educational tools for students, teachers, and researchers.",
  },
};

const calculatorSchema = createCalculatorSchema({
  name: "Graham's Law Calculator | Rate, Time & Molar Mass",
  description: "Use Graham's law to calculate gas effusion or diffusion rate, time, and molar mass. Solve r₁/r₂ = √(M₂/M₁) with optional time-unit conversion.",
  slug: "grahams-law-calculator",
  category: "Chemistry",
});

const faqJsonLd = createCalculatorFAQSchema("grahams-law-calculator");

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: absoluteUrl("/"),
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Calculators",
      item: absoluteUrl("/calculators"),
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Graham's Law Calculator",
      item: absoluteUrl(
        "/calculators/grahams-law-calculator",
      ),
    },
  ],
};



export default function GrahamsLawCalculatorPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(calculatorSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <section className="tool-page-hero">
        <Container>
          <p className="eyebrow">Chemistry calculator</p>

          <h1>Graham&apos;s Law Calculator</h1>

          <p className="tool-page-hero__description">
            Calculate gas diffusion or effusion rate,
            time, and molar mass using Graham&apos;s law,
            with automatic time-unit conversion.
          </p>

          <nav aria-label="Breadcrumb">
            <ol className="breadcrumb-list">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/calculators">Calculators</Link>
              </li>
              <li aria-current="page">
                Graham&apos;s Law Calculator
              </li>
            </ol>
          </nav>
        </Container>
      </section>

      <section
        className="calculator-section"
        aria-label="Graham's law calculator"
      >
        <Container>
          <CalculatorPageShell
            slug="grahams-law-calculator"
            subject="chemistry"
          >
            <GrahamsLawCalculator />
          </CalculatorPageShell>
        </Container>
      </section>

      <section className="article-section">
        <Container className="article-layout">
          <article className="article-content">
            <section aria-labelledby="overview-heading">
              <p className="eyebrow">Gas-rate guide</p>

              <h2 id="overview-heading">
                What is Graham&apos;s law?
              </h2>

              <p>
                Graham&apos;s law compares the diffusion
                or effusion rates of two gases through
                their molar masses. Under the same
                conditions, lighter gas particles move
                faster than heavier gas particles.
              </p>

              <p>
                The rate is inversely proportional to the
                square root of molar mass. This means a
                gas does not become twice as fast merely
                because its molar mass is half as large;
                the relationship follows a square root.
              </p>
            </section>

            <section aria-labelledby="formula-heading">
              <p className="eyebrow">Core equation</p>

              <h2 id="formula-heading">
                Graham&apos;s law formula
              </h2>

              <div className="formula-block">
                <strong>r₁/r₂ = √(M₂/M₁)</strong>
              </div>

              <ul className="article-list">
                <li>
                  r₁ is the diffusion or effusion rate of
                  gas 1.
                </li>
                <li>
                  r₂ is the diffusion or effusion rate of
                  gas 2.
                </li>
                <li>M₁ is the molar mass of gas 1.</li>
                <li>M₂ is the molar mass of gas 2.</li>
              </ul>

              <p>
                Molar masses must use the same unit,
                normally grams per mole. The two rates
                must also represent the same process and
                use compatible rate units.
              </p>
            </section>

            <section aria-labelledby="time-heading">
              <p className="eyebrow">Time relationship</p>

              <h2 id="time-heading">
                Graham&apos;s law using time
              </h2>

              <div className="formula-block">
                <strong>t₁/t₂ = √(M₁/M₂)</strong>
              </div>

              <p>
                Time is inversely proportional to rate.
                For equal quantities of gas effusing, or
                gases covering the same diffusion
                distance, the slower gas requires more
                time. The calculator can mix seconds,
                minutes, and hours.
              </p>
            </section>

            <section aria-labelledby="rearranged-heading">
              <p className="eyebrow">Solve any variable</p>

              <h2 id="rearranged-heading">
                Rearranged Graham&apos;s law equations
              </h2>

              <ul className="article-list">
                <li>
                  Gas 1 rate:{" "}
                  <strong>
                    r₁ = r₂ × √(M₂/M₁)
                  </strong>
                </li>
                <li>
                  Gas 2 rate:{" "}
                  <strong>
                    r₂ = r₁ × √(M₁/M₂)
                  </strong>
                </li>
                <li>
                  Gas 1 molar mass from rates:{" "}
                  <strong>
                    M₁ = M₂ × (r₂/r₁)²
                  </strong>
                </li>
                <li>
                  Gas 2 molar mass from rates:{" "}
                  <strong>
                    M₂ = M₁ × (r₁/r₂)²
                  </strong>
                </li>
                <li>
                  Gas 1 time:{" "}
                  <strong>
                    t₁ = t₂ × √(M₁/M₂)
                  </strong>
                </li>
                <li>
                  Gas 2 time:{" "}
                  <strong>
                    t₂ = t₁ × √(M₂/M₁)
                  </strong>
                </li>
              </ul>
            </section>

            <section aria-labelledby="example-heading">
              <p className="eyebrow">Worked example</p>

              <h2 id="example-heading">
                Compare hydrogen and oxygen effusion
              </h2>

              <p>
                Compare hydrogen gas, H₂, with a molar
                mass of approximately 2.016 g/mol to
                oxygen gas, O₂, with a molar mass of
                approximately 32.00 g/mol.
              </p>

              <ol className="calculation-steps">
                <li>
                  Write the equation:{" "}
                  <strong>
                    rH₂/rO₂ = √(MO₂/MH₂)
                  </strong>.
                </li>
                <li>
                  Substitute the molar masses:{" "}
                  <strong>
                    rH₂/rO₂ = √(32.00/2.016)
                  </strong>.
                </li>
                <li>
                  Evaluate the square root:{" "}
                  <strong>rH₂/rO₂ ≈ 3.98</strong>.
                </li>
                <li>
                  Hydrogen effuses approximately 3.98
                  times as fast as oxygen under the same
                  conditions.
                </li>
              </ol>
            </section>

            <section aria-labelledby="process-heading">
              <p className="eyebrow">Gas movement</p>

              <h2 id="process-heading">
                Diffusion versus effusion
              </h2>

              <p>
                Diffusion is the spreading and mixing of
                gas particles through available space.
                Effusion is the escape of gas particles
                through a very small opening into a
                vacuum or lower-pressure region.
              </p>

              <p>
                Graham&apos;s law is commonly applied to
                both processes, although controlled
                effusion experiments usually match its
                assumptions more closely.
              </p>
            </section>

            <section aria-labelledby="conditions-heading">
              <p className="eyebrow">
                Required conditions
              </p>

              <h2 id="conditions-heading">
                When Graham&apos;s law applies
              </h2>

              <ul className="article-list">
                <li>
                  Compare gases at the same temperature.
                </li>
                <li>
                  Use comparable pressure and experimental
                  conditions.
                </li>
                <li>
                  Compare the same diffusion distance or
                  the same effused quantity when using
                  time.
                </li>
                <li>
                  Use positive rates, times, and molar
                  masses.
                </li>
                <li>
                  Treat the gases as approximately ideal.
                </li>
              </ul>
            </section>

            <section aria-labelledby="limitations-heading">
              <p className="eyebrow">
                Calculation limits
              </p>

              <h2 id="limitations-heading">
                Important limitations and mistakes
              </h2>

              <ul className="article-list">
                <li>
                  Do not reverse the molar-mass ratio:
                  rate and molar mass have an inverse
                  relationship.
                </li>
                <li>
                  Apply the square root instead of using
                  the mass ratio directly.
                </li>
                <li>
                  Keep rate units compatible when entering
                  two measured rates.
                </li>
                <li>
                  Use time mode only for equivalent
                  distances or effused quantities.
                </li>
                <li>
                  Expect deviations for strongly
                  interacting gases or non-ideal
                  conditions.
                </li>
              </ul>
            </section>

            <section aria-labelledby="related-heading">
              <p className="eyebrow">Related tools</p>

              <h2 id="related-heading">
                Continue your gas calculations
              </h2>

              <p>
                Use the{" "}
                <Link
                  className="article-inline-link"
                  href="/calculators/daltons-law-calculator"
                >
                  Dalton&apos;s Law Calculator
                </Link>{" "}
                to calculate partial pressures in a gas
                mixture.
              </p>

              <p>
                Use the{" "}
                <Link
                  className="article-inline-link"
                  href="/calculators/avogadros-law-calculator"
                >
                  Avogadro&apos;s Law Calculator
                </Link>{" "}
                to relate gas volume to the amount of gas
                at constant temperature and pressure.
              </p>

              <p>
                Use the{" "}
                <Link
                  className="article-inline-link"
                  href="/calculators/ideal-gas-law-calculator"
                >
                  Ideal Gas Law Calculator
                </Link>{" "}
                when pressure, volume, amount, and
                temperature are involved.
              </p>
            </section>

            <CalculatorFAQ slug="grahams-law-calculator" />
          </article>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <p className="sidebar-card__label">
                Quick reference
              </p>

              <h2>Graham&apos;s law checklist</h2>

              <ul>
                <li>Select rate mode or time mode</li>
                <li>Select the unknown variable</li>
                <li>Enter the other three values</li>
                <li>Use positive molar masses</li>
                <li>Compare gases under equal conditions</li>
                <li>Apply the correct square-root ratio</li>
              </ul>
            </div>

            <div className="sidebar-card">
              <p className="sidebar-card__label">
                Related calculator
              </p>

              <h2>Calculate gas pressure</h2>

              <p>
                Find total or partial pressure for a gas
                mixture.
              </p>

              <Link href="/calculators/daltons-law-calculator">
                Open Dalton&apos;s Law Calculator
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
