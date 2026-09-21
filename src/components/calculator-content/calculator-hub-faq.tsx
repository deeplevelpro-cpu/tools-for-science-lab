import { calculatorHubSEOContent } from "@/content/calculators/hub-seo-content";

export function CalculatorHubFAQ() {
  return (
    <section aria-labelledby="calculator-hub-faq-heading">
      <p className="eyebrow">
        Questions and answers
      </p>

      <h2 id="calculator-hub-faq-heading">
        Frequently Asked Questions
      </h2>

      <div className="faq-list">
        {calculatorHubSEOContent.faqs.map((item) => (
          <details key={item.question}>
            <summary>
              {item.question}
            </summary>

            <p>
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
