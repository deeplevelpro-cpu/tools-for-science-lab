import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import type { Metadata } from "next";
import { CalculatorPageShell } from "@/components/calculators/calculator-page-shell";

import Link from "next/link";

import { MolarityCalculator } from "@/components/calculators/molarity-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle = "Molarity Calculator | Moles, Volume & Concentration";
const pageDescription =
  "Calculate solution molarity from moles of solute and volume in liters or milliliters. Includes formula, unit conversion, worked example, and common mistakes.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/calculators/molarity-calculator",
  },
  openGraph: {
    title: `${pageTitle} | ${siteConfig.name}`,
    description: pageDescription,
    type: "website",
    url: absoluteUrl("/calculators/molarity-calculator"),
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


export default function MolarityCalculatorPage() {
  return (
    <main>
      

      

      <section className="tool-page-hero">
        <Container>
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/calculators">Calculators</Link>
              </li>
              <li aria-current="page">Molarity Calculator</li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Chemistry concentration tool
            </p>
            <h1>Molarity Calculator</h1>
            <p>
              Calculate molar concentration from moles of solute
              and total solution volume, with automatic liter and
              milliliter conversion.
            </p>
          </div>
        </Container>
      </section>

      <section className="tool-section" aria-label="Molarity calculator">
        <Container>
          <CalculatorPageShell
            slug="molarity-calculator"
            subject="chemistry"
          >
            <MolarityCalculator />
          </CalculatorPageShell>
        </Container>
      </section>

      <section className="article-section">
        <Container className="article-layout">
          <article className="article-content">
            <section aria-labelledby="formula-heading">
              <p className="eyebrow">Formula</p>
              <h2 id="formula-heading">
                How molarity is calculated
              </h2>

              <div className="formula-card">
                <p>
                  Molarity =
                  <span>
                    moles of solute ÷ solution volume in liters
                  </span>
                </p>
              </div>

              <p>
                Molarity describes how many moles of solute are
                present in each liter of the final solution.
              </p>
            </section>

            <section aria-labelledby="example-heading">
              <p className="eyebrow">Worked example</p>
              <h2 id="example-heading">
                Molarity calculation example
              </h2>

              <p>
                A solution contains <strong>0.25 moles</strong> of
                solute in a total volume of{" "}
                <strong>500 milliliters</strong>.
              </p>

              <ol className="calculation-steps">
                <li>
                  Convert volume to liters: 500 mL ÷ 1000 ={" "}
                  <strong>0.5 L</strong>
                </li>
                <li>
                  Divide moles by liters: 0.25 ÷ 0.5 ={" "}
                  <strong>0.5</strong>
                </li>
                <li>
                  Report the concentration as{" "}
                  <strong>0.5 mol/L</strong>, or{" "}
                  <strong>0.5 M</strong>
                </li>
              </ol>
            </section>

            <section aria-labelledby="mistakes-heading">
              <p className="eyebrow">Chemistry guidance</p>
              <h2 id="mistakes-heading">
                Common molarity mistakes
              </h2>

              <ul className="article-list">
                <li>
                  Using milliliters directly without converting to
                  liters.
                </li>
                <li>
                  Using solvent volume instead of final solution
                  volume.
                </li>
                <li>
                  Entering solute mass in grams instead of moles.
                </li>
                <li>
                  Confusing molarity with molality or mass
                  concentration.
                </li>
                <li>Rounding intermediate values too early.</li>
              </ul>
            </section>

            <section aria-labelledby="related-heading">
              <p className="eyebrow">Related chemistry tools</p>
              <h2 id="related-heading">
                Continue with solution calculations
              </h2>

              <p>
                Use the{" "}
                <Link
                  className="article-inline-link"
                  href="/calculators/dilution-calculator"
                >
                  Dilution Calculator
                </Link>{" "}
                to calculate concentration and volume changes when
                preparing a diluted solution.
              </p>

              <p>
                Use the{" "}
                <Link
                  className="article-inline-link"
                  href="/calculators/mass-moles-calculator"
                >
                  Mass to Moles Calculator
                </Link>{" "}
                when the solute amount is provided as mass instead
                of moles.
              </p>
            </section>

            <CalculatorFAQ slug="molarity-calculator" />
          </article>

          <aside className="article-sidebar">
            <div className="sidebar-card">
              <p className="sidebar-card__label">
                Quick reference
              </p>
              <h2>Molarity checklist</h2>
              <ul>
                <li>Use moles of solute</li>
                <li>Use final solution volume</li>
                <li>Convert volume to liters</li>
                <li>Divide moles by liters</li>
                <li>Report the result in mol/L or M</li>
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
