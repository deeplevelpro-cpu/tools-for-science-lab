import {
  calculators,
} from "@/content/calculators/registry";

import {
  createCalculatorSchema,
  createCalculatorBreadcrumbSchema,
} from "@/lib/seo/calculator-schema";

import {
  createCalculatorFAQSchema,
} from "@/lib/seo/calculator-faq-schema";


type CalculatorJsonLdProps = {
  slug: string;
};


export function CalculatorJsonLd({
  slug,
}: CalculatorJsonLdProps) {

  const calculator =
    calculators.find(
      (item) => item.slug === slug,
    );

  if (!calculator) {
    return null;
  }


  const calculatorSchema =
    createCalculatorSchema({
      name: calculator.name,
      description:
        calculator.shortDescription,
      slug: calculator.slug,
      category: calculator.category,
    });


  const breadcrumbSchema =
    createCalculatorBreadcrumbSchema({
      name: calculator.name,
      slug: calculator.slug,
      category: calculator.category,
    });


  const faqSchema =
    createCalculatorFAQSchema(
      calculator.slug,
    );


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              calculatorSchema,
            ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              breadcrumbSchema,
            ),
        }}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(
                faqSchema,
              ),
          }}
        />
      )}
    </>
  );
}
