import { CalculatorContentLoader } from "@/components/calculator-content/calculator-content-loader";
import { CalculatorTrustPanel } from "@/components/calculator-trust";
import { RelatedCalculators } from "@/components/related-calculators";

import {
  getRelatedCalculators,
} from "@/content/calculators/get-related-calculators";

import {
  calculators,
} from "@/content/calculators/registry";

type CalculatorPageShellProps = {
  slug: string;
  subject: "physics" | "chemistry" | "laboratory";
  children: React.ReactNode;
};

export function CalculatorPageShell({
  slug,
  subject,
  children,
}: CalculatorPageShellProps) {

  const relatedCalculators =
    getRelatedCalculators(
      slug,
      calculators,
    );

  return (
    <>
      {children}

      <section>
        {children}

        <CalculatorContentLoader
          slug={slug}
        />

        <CalculatorTrustPanel
          subject={subject}
        />
      </section>

      <RelatedCalculators
        calculators={relatedCalculators}
      />
    </>
  );
}
