import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { HurricaneCategoryCalculator } from "@/components/calculators/hurricane-category-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Hurricane Category Calculator | Storm Classification Tool";

const pageDescription =
  "Calculate hurricane category using sustained wind speed. Learn how Category 1 to Category 5 hurricanes are classified.";

const pagePath =
  "/calculators/hurricane-category-calculator";

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

export default function HurricaneCategoryCalculatorPage() {
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
                Hurricane Category Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Storm science tool
            </p>

            <h1>
              Hurricane Category Calculator
            </h1>

            <p>
              Determine hurricane category from
              sustained wind speed values.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Hurricane category calculator"
      >
        <Container>
          <HurricaneCategoryCalculator />
        </Container>
      </section>

      <section className="article-section">
        <Container className="article-layout">
          <article className="article-content">

            <section>
              <p className="eyebrow">
                Storm classification
              </p>

              <h2>
                What is hurricane category?
              </h2>

              <p>
                Hurricane categories classify storms
                based on sustained wind speeds. The
                Saffir-Simpson scale uses categories
                from 1 to 5.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Classification
              </p>

              <h2>
                Wind speed categories
              </h2>

              <div className="formula-card">
                <p>
                  Category
                  <span>
                    = Sustained Wind Speed Range
                  </span>
                </p>
              </div>

              <p>
                Higher categories represent stronger
                sustained winds and greater potential
                impacts.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of hurricane classification
              </h2>

              <p>
                This tool helps students learn
                meteorology, weather science, and
                hurricane classification systems.
              </p>
            </section>

            <CalculatorFAQ slug="hurricane-category-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
