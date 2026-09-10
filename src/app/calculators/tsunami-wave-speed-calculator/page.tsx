import type { Metadata } from "next";
import Link from "next/link";

import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
import { TsunamiWaveSpeedCalculator } from "@/components/calculators/tsunami-wave-speed-calculator";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

const pageTitle =
  "Tsunami Wave Speed Calculator | Ocean Science Tool";

const pageDescription =
  "Calculate tsunami wave speed from ocean depth using shallow water wave equations and learn how depth affects tsunami movement.";

const pagePath =
  "/calculators/tsunami-wave-speed-calculator";

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

export default function TsunamiWaveSpeedCalculatorPage() {
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
                Tsunami Wave Speed Calculator
              </li>
            </ol>
          </nav>

          <div className="tool-page-hero__content">
            <p className="eyebrow">
              Ocean science tool
            </p>

            <h1>
              Tsunami Wave Speed Calculator
            </h1>

            <p>
              Calculate tsunami wave speed from ocean
              depth and understand how deep water
              affects wave movement.
            </p>
          </div>
        </Container>
      </section>

      <section
        className="tool-section"
        aria-label="Tsunami wave speed calculator"
      >
        <Container>
          <TsunamiWaveSpeedCalculator />
        </Container>
      </section>

      <section className="article-section">
        <Container className="article-layout">
          <article className="article-content">

            <section>
              <p className="eyebrow">
                Ocean science
              </p>

              <h2>
                What determines tsunami wave speed?
              </h2>

              <p>
                Tsunami waves travel faster in deeper
                water because wave speed depends on the
                depth of the ocean. As waves approach
                shallow coastal areas, they slow down
                and increase in height.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Formula
              </p>

              <h2>
                Tsunami wave speed formula
              </h2>

              <div className="formula-card">
                <p>
                  Wave Speed
                  <span>
                    = √(Gravity × Water Depth)
                  </span>
                </p>
              </div>

              <p>
                This simplified shallow-water wave
                equation explains why deep ocean
                tsunamis can cross large distances
                quickly.
              </p>
            </section>

            <section>
              <p className="eyebrow">
                Applications
              </p>

              <h2>
                Uses of tsunami calculations
              </h2>

              <p>
                Wave speed calculations are useful for
                oceanography education, coastal science,
                disaster awareness, and understanding
                tsunami behavior.
              </p>
            </section>

            <CalculatorFAQ slug="tsunami-wave-speed-calculator" />

          </article>
        </Container>
      </section>
    </main>
  );
}
