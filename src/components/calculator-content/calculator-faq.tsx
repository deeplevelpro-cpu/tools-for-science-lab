import { getCalculatorSEOContent } from "@/content/calculators/get-seo-content";

type CalculatorFAQProps = {
  slug: string;
};

export function CalculatorFAQ({
  slug,
}: CalculatorFAQProps) {
  const seoContent =
    getCalculatorSEOContent(slug);

  if (!seoContent?.faqs.length) {
    return null;
  }

  return (
    <section aria-labelledby="faq-heading">
      <p className="eyebrow">
        Questions and answers
      </p>

      <h2 id="faq-heading">
        Calculator FAQ
      </h2>

      <div className="faq-list">
        {seoContent.faqs.map((item) => (
          <details key={item.question}>
            <summary>
              {item.question}
            </summary>

            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
