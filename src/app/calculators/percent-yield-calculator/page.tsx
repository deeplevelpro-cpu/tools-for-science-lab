import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";

import { PercentYieldCalculator } from "@/components/calculators/percent-yield-calculator";

import { CalculatorPageShell } from "@/components/calculators/calculator-page-shell";

import Link from "next/link";

import { Container } from "@/components/ui/container";

import { absoluteUrl } from "@/lib/seo/url";

import { siteConfig } from "@/config/site";

import type { Metadata } from "next";


const pagePath = "/calculators/percent-yield-calculator";
const pageUrl = absoluteUrl(pagePath);

const title =
  "Percent Yield Calculator: Calculate Reaction Yield";

const description =
  "Calculate percent yield from actual and theoretical yield. Use the free chemistry calculator with formulas, worked examples, and clear guidance.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};




export default function PercentYieldCalculatorPage() {
  return (
    <main>
      

      <section className="calculator-page">
        <Container>
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/calculators">Calculators</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">
              Percent Yield Calculator
            </span>
          </nav>

          <div className="calculator-page__intro">
            <p className="eyebrow">Chemistry calculator</p>

            <h1>Percent Yield Calculator</h1>

            <p>
              Calculate reaction percent yield from actual and
              theoretical yield, review the formula, and understand
              why an experimental result may fall below or rise
              above 100%.
            </p>
          </div>

          <CalculatorPageShell
            slug="percent-yield-calculator"
            subject="laboratory"
          >
            <PercentYieldCalculator />
          </CalculatorPageShell>
        </Container>
      </section>

      <section className="article-section">
        <Container className="article-layout">
          <article className="article-content">
            <section aria-labelledby="formula-heading">
              <p className="eyebrow">Percent yield formula</p>

              <h2 id="formula-heading">
                How to calculate percent yield
              </h2>

              <p>
                Percent yield measures the efficiency of a chemical
                reaction by comparing the product collected in an
                experiment with the maximum product predicted by
                stoichiometry.
              </p>

              <div className="formula-card">
                <p>
                  Percent yield = (actual yield ÷ theoretical
                  yield) × 100
                </p>
              </div>

              <p>
                Actual and theoretical yield must be expressed in
                the same unit. Because one value is divided by the
                other, the units cancel and the final result is
                reported as a percentage.
              </p>
            </section>

            <section aria-labelledby="steps-heading">
              <p className="eyebrow">Calculation process</p>

              <h2 id="steps-heading">
                How to use the percent yield calculator
              </h2>

              <ol className="article-list">
                <li>
                  Determine the actual amount of product collected
                  during the experiment.
                </li>
                <li>
                  Calculate or obtain the theoretical yield from
                  the balanced chemical equation.
                </li>
                <li>
                  Confirm that both yield values use the same unit.
                </li>
                <li>
                  Enter the actual yield and theoretical yield.
                </li>
                <li>
                  Select calculate to obtain the percent yield.
                </li>
                <li>
                  Review the yield difference and efficiency ratio
                  shown with the result.
                </li>
              </ol>
            </section>

            <section aria-labelledby="example-heading">
              <p className="eyebrow">Worked example</p>

              <h2 id="example-heading">
                Percent yield calculation example
              </h2>

              <p>
                Suppose a reaction has a theoretical yield of 8.4
                grams, but the experiment produces 7.35 grams of
                purified product.
              </p>

              <div className="formula-card">
                <p>
                  Percent yield = (7.35 g ÷ 8.4 g) × 100
                  = 87.5%
                </p>
              </div>

              <p>
                The reaction produced 87.5% of the maximum amount
                predicted by the stoichiometric calculation. The
                difference between theoretical and actual yield is
                1.05 grams.
              </p>
            </section>

            <section aria-labelledby="meaning-heading">
              <p className="eyebrow">Interpreting results</p>

              <h2 id="meaning-heading">
                What does the percent yield mean?
              </h2>

              <p>
                A result close to 100% means the measured product
                amount is close to the theoretical maximum. A lower
                result indicates that some expected product was not
                recovered or formed.
              </p>

              <p>
                Percent yield does not independently prove product
                purity or reaction quality. A high apparent yield
                may include solvent, moisture, unreacted material,
                or other impurities.
              </p>

              <ul className="article-list">
                <li>
                  Below 100%: product loss or incomplete conversion
                  may have occurred.
                </li>
                <li>
                  Equal to 100%: actual yield matches the ideal
                  theoretical prediction.
                </li>
                <li>
                  Above 100%: inspect the sample and measurements
                  for moisture, impurities, or error.
                </li>
              </ul>
            </section>

            <section aria-labelledby="difference-heading">
              <p className="eyebrow">Important definitions</p>

              <h2 id="difference-heading">
                Actual yield versus theoretical yield
              </h2>

              <p>
                <strong>Actual yield</strong> is the amount of
                product physically recovered and measured after an
                experiment. It is determined using laboratory
                observations.
              </p>

              <p>
                <strong>Theoretical yield</strong> is the maximum
                product amount predicted from the limiting
                reactant, balanced-equation mole ratios, and ideal
                reaction assumptions.
              </p>

              <p>
                Theoretical yield should not be estimated from the
                final experimental result. It must be calculated
                independently from the available reactants.
              </p>
            </section>

            <section aria-labelledby="low-yield-heading">
              <p className="eyebrow">Laboratory interpretation</p>

              <h2 id="low-yield-heading">
                Why can percent yield be low?
              </h2>

              <ul className="article-list">
                <li>
                  The reaction may not proceed to completion.
                </li>
                <li>
                  Side reactions may consume some reactant.
                </li>
                <li>
                  Product may remain in the reaction vessel or
                  filtration equipment.
                </li>
                <li>
                  Material may be lost during transfer,
                  purification, drying, or weighing.
                </li>
                <li>
                  The reaction conditions may not be optimal.
                </li>
                <li>
                  Measurement uncertainty may affect reactant or
                  product quantities.
                </li>
              </ul>
            </section>

            <section aria-labelledby="above-heading">
              <p className="eyebrow">Results above 100%</p>

              <h2 id="above-heading">
                Can percent yield exceed 100 percent?
              </h2>

              <p>
                The calculator permits values above 100% because
                they can occur in real laboratory records. However,
                a pure dry product cannot exceed its valid
                theoretical maximum under the assumed reaction.
              </p>

              <p>
                An apparent yield above 100% often means the sample
                contains water, residual solvent, unreacted
                material, filter paper, or another contaminant. It
                may also indicate an incorrect theoretical-yield
                calculation or an instrument error.
              </p>
            </section>

            <section aria-labelledby="mistakes-heading">
              <p className="eyebrow">Common mistakes</p>

              <h2 id="mistakes-heading">
                Percent-yield calculation mistakes
              </h2>

              <ul className="article-list">
                <li>
                  Dividing theoretical yield by actual yield.
                </li>
                <li>
                  Entering values that use different units.
                </li>
                <li>
                  Using reactant mass as the actual product yield.
                </li>
                <li>
                  Calculating theoretical yield from an unbalanced
                  chemical equation.
                </li>
                <li>
                  Ignoring the limiting reactant when determining
                  theoretical yield.
                </li>
                <li>
                  Treating an apparent yield above 100% as proof of
                  exceptional reaction efficiency.
                </li>
              </ul>
            </section>

            <section aria-labelledby="related-heading">
              <p className="eyebrow">Related chemistry tools</p>

              <h2 id="related-heading">
                Continue your reaction calculations
              </h2>

              <p>
                Use the{" "}
                <Link
                  className="article-inline-link"
                  href="/calculators/limiting-reactant-calculator"
                >
                  Limiting Reactant Calculator
                </Link>{" "}
                to identify which reactant controls the theoretical
                product yield.
              </p>

              <p>
                Use the{" "}
                <Link
                  className="article-inline-link"
                  href="/calculators/stoichiometry-calculator"
                >
                  Stoichiometry Calculator
                </Link>{" "}
                to calculate reactant and product quantities from
                balanced-equation mole ratios.
              </p>

              <p>
                Use the{" "}
                <Link
                  className="article-inline-link"
                  href="/calculators/mass-moles-calculator"
                >
                  Mass to Moles Calculator
                </Link>{" "}
                to convert between mass, moles, and molar mass.
              </p>
            </section>

            <CalculatorFAQ slug="percent-yield-calculator" />
          </article>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <p className="sidebar-card__label">
                Quick reference
              </p>

              <h2>Percent-yield checklist</h2>

              <ul>
                <li>Find the actual product yield</li>
                <li>Calculate the theoretical yield</li>
                <li>Use the same unit for both values</li>
                <li>Divide actual by theoretical yield</li>
                <li>Multiply the ratio by 100</li>
                <li>Investigate results above 100%</li>
              </ul>
            </div>
          </aside>
        </Container>

        <Container>
          </Container>
      </section>
    

      </main>
  );
}
