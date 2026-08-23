import { CalculatorCard } from "./calculator-card";
import { getCategoryFAQ } from "@/content/calculators/category-faq";
import { createFAQSchema } from "@/lib/seo/faq-schema";
import { createCalculatorCategoryBreadcrumbSchema } from "@/lib/seo/calculator-schema";
import { Container } from "@/components/ui/container";
import type { CalculatorCategory } from "@/content/calculators/categories";
import type { CalculatorDefinition } from "@/content/calculators/registry";

type CalculatorCategoryPageProps = {
  category: CalculatorCategory;
  calculators: readonly CalculatorDefinition[];
};

export function CalculatorCategoryPage({
  category,
  calculators,
}: CalculatorCategoryPageProps) {
  const faqItems = getCategoryFAQ(category.category);
  const faqSchema = createFAQSchema(faqItems);

  const breadcrumbSchema =
    createCalculatorCategoryBreadcrumbSchema({
      name: category.name,
      slug: category.slug,
    });

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(
            /</g,
            "\u003c",
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <section className="directory-hero">
        <Container>
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol>
              <li>
                <a href="/calculators">Calculators</a>
              </li>
              <li aria-current="page">
                {category.name}
              </li>
            </ol>
          </nav>

          <div className="directory-hero__content">
            <p className="eyebrow">
              Science calculator collection
            </p>

            <h1>{category.name}</h1>

            <p>{category.description}</p>
          </div>
        </Container>
      </section>

      <section className="directory-section directory-section--muted">
        <Container>
          <div className="section-heading">
            <p className="eyebrow">
              About this calculator category
            </p>

            <h2>
              {category.name} tools for learning and calculation
            </h2>

            <p>
              ScienceCalcHub provides educational calculators
              designed to help students, teachers, and researchers
              understand scientific concepts, apply formulas, and
              verify calculations with clear explanations.
            </p>
          </div>
        </Container>
      </section>

      <section className="directory-section">
        <Container>
          <div className="section-heading">
            <p className="eyebrow">
              Available calculators
            </p>

            <h2>
              {calculators.length} {category.category} calculators
            </h2>
          </div>

          <div className="calculator-directory-grid">
            {calculators.map((calculator) => (
              <CalculatorCard
                key={calculator.slug}
                calculator={calculator}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="directory-section directory-section--muted">
        <Container>
          <div className="section-heading">
            <p className="eyebrow">
              Frequently asked questions
            </p>

            <h2>
              Questions about {category.name}
            </h2>
          </div>

          <div className="faq-list">
            {faqItems.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
