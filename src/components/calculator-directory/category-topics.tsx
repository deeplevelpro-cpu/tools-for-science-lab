import type { CalculatorDefinition } from "@/content/calculators/registry";
import { calculatorTopics } from "@/content/calculators/category-topics";

type Props = {
  category: CalculatorDefinition["category"];
};

export function CategoryTopics({ category }: Props) {
  const topics = calculatorTopics[category];

  return (
    <section className="directory-section directory-section--muted">
      <div className="section-heading">
        <p className="eyebrow">
          Explore topics
        </p>

        <h2>
          {category} calculator topics
        </h2>
      </div>

      <div className="calculator-directory-grid">
        {topics.map((topic) => (
          <article
            key={topic.title}
            className="calculator-directory-card"
          >
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
