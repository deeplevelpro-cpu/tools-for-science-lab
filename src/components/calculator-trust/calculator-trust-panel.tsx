import Link from "next/link";

import { siteConfig } from "@/config/site";

type CalculatorTrustPanelProps = {
  subject?: string;
};

export function CalculatorTrustPanel({
  subject = "science",
}: CalculatorTrustPanelProps) {
  return (
    <section
      className="calculator-trust-panel"
      aria-labelledby="calculator-trust-heading"
    >
      <div className="calculator-trust-panel__content">
        <p className="eyebrow">Accuracy and transparency</p>

        <h2 id="calculator-trust-heading">
          Created and maintained by our editorial team
        </h2>

        <p>
          This {subject} calculator is maintained by the{" "}
          <strong>{siteConfig.creator}</strong>. Its calculation
          logic is tested with representative inputs, while the
          supporting guidance is checked for formula clarity,
          units, assumptions, and common mistakes.
        </p>

        <dl className="calculator-trust-panel__details">
          <div>
            <dt>Written by</dt>
            <dd>{siteConfig.creator}</dd>
          </div>

          <div>
            <dt>Reviewed by</dt>
            <dd>ScienceCalcHub Scientific Review Team</dd>
          </div>

          <div>
            <dt>Review standard</dt>
            <dd>Formula accuracy, units, examples, and educational clarity</dd>
          </div>

          <div>
            <dt>Last reviewed</dt>
            <dd>September 2026</dd>
          </div>
        </dl>

        <p>
          Learn more about our{" "}
          <Link
            className="article-inline-link"
            href="/editorial-policy"
          >
            formula-review and correction process
          </Link>
          , explore our{" "}
          <Link
            className="article-inline-link"
            href="/methodology"
          >
            calculation methodology
          </Link>
          , or view our{" "}
          <Link
            className="article-inline-link"
            href="/references"
          >
            scientific references
          </Link>
          .
        </p>
      </div>

      <ul
        className="calculator-trust-panel__checks"
        aria-label="Calculator quality checks"
      >
        <li>Calculation logic tested</li>
        <li>Variables and units explained</li>
        <li>Assumptions stated clearly</li>
        <li>Scientific formulas verified</li>
        <li>Corrections handled transparently</li>
      </ul>
    </section>
  );
}
