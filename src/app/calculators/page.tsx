import { CalculatorHubFAQ } from "@/components/calculator-content/calculator-hub-faq";
import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorDirectory } from "@/components/calculator-directory";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { calculators } from "@/content/calculators/registry";
import { calculatorCategories } from "@/content/calculators/categories";
import { absoluteUrl } from "@/lib/seo/url";
import { createCollectionSchema } from "@/lib/seo/collection-schema";
import { createCalculatorHubFAQSchema } from "@/lib/seo/calculator-hub-faq-schema";

const pageTitle =
  "Free Science Calculators";

const pageDescription =
  "Use free physics, chemistry, statistics, and laboratory calculators with tested formulas, unit guidance, worked examples, and step-by-step solutions.";

const pagePath = "/calculators";

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



const collectionSchema = createCollectionSchema({
  name: pageTitle,
  description: pageDescription,
  path: pagePath,
  calculators,
});


export default function CalculatorsPage() {
  return (
    <main>
      

      


      

      <section className="directory-hero">
        <Container>
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li aria-current="page">Calculators</li>
            </ol>
          </nav>

          <div className="directory-hero__content">
            <p className="eyebrow">Interactive science tools</p>
            <h1>Science calculators with clear working steps</h1>
            <p>
              Use reviewed laboratory, chemistry, and physics calculators that
              explain the formula, variables, units, and calculation process.
            </p>
          </div>
        </Container>
      </section>

      <section className="directory-section">
        <Container>
          <article className="article-content">
            <p className="eyebrow">
              Science calculator guide
            </p>

            <h2>
              What are science calculators?
            </h2>

            <p>
              Science calculators are interactive tools that help students,
              researchers, and professionals solve scientific problems using
              established equations, formulas, and measurement methods.
              They provide clear calculations with variables, units, and
              explanations to support learning and accurate results.
            </p>

            <p>
              Our calculator collection covers major scientific fields,
              including physics calculators for motion, force, energy, and
              mechanics; chemistry calculators for solutions, reactions, and
              gas laws; and laboratory calculators for measurements, errors,
              statistics, and experimental analysis.
            </p>

            <h3>
              Explore calculators by science subject
            </h3>

            <ul className="article-list">
              <li>
                <strong>Physics calculators:</strong> motion, energy, forces,
                rotation, and mechanics equations.
              </li>
              <li>
                <strong>Chemistry calculators:</strong> molarity, stoichiometry,
                molecular calculations, and gas laws.
              </li>
              <li>
                <strong>Laboratory calculators:</strong> uncertainty,
                statistics, measurements, and scientific data analysis.
              </li>
            </ul>
          </article>
        </Container>
      </section>

      <section className="directory-section" aria-labelledby="available-heading">
        <Container>
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">Available now</p>
              <h2 id="available-heading">Published calculators</h2>
            </div>

            <p>
              Each published calculator includes validation, tested calculation
              logic, worked examples, and supporting educational guidance.
            </p>
          </div>

          <div className="calculator-category-grid">
  {calculatorCategories.map((category) => (
    <article
      key={category.slug}
      className="calculator-directory-card"
    >
      <h3>
        <Link href={`/calculators/${category.slug}`}>
          {category.name}
        </Link>
      </h3>

      <p>{category.description}</p>

      <Link
        className="calculator-directory-card__link"
        href={`/calculators/${category.slug}`}
      >
        Explore calculators
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  ))}
</div>

<CalculatorDirectory calculators={calculators} />
        </Container>
      </section>

      <section className="directory-section">
        <Container>
          <CalculatorHubFAQ />
        </Container>
      </section>

    </main>
  );
}
