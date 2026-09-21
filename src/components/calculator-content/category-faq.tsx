import { categorySEOContent } from "@/content/categories/seo-content";

type CategoryFAQProps = {
  slug: string;
};

export function CategoryFAQ({
  slug,
}: CategoryFAQProps) {
  const content =
    categorySEOContent[slug];

  if (!content?.faqs.length) {
    return null;
  }

  return (
    <section aria-labelledby="category-faq-heading">
      <p className="eyebrow">
        Questions and answers
      </p>

      <h2 id="category-faq-heading">
        Frequently Asked Questions
      </h2>

      <div className="faq-list">
        {content.faqs.map((item) => (
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
