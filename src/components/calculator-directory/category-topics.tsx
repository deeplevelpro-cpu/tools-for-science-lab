import Link from "next/link";

import type { CalculatorDefinition } from "@/content/calculators/registry";
import { calculators } from "@/content/calculators/registry";
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
        {topics.map((topic) => {
          const related = calculators
            .filter((calculator) => {
              const text = [
                calculator.name,
                calculator.shortDescription,
                ...calculator.keywords,
              ]
                .join(" ")
                .toLowerCase();

              return topic.keywords.some((keyword) =>
                text.includes(keyword.toLowerCase()),
              );
            })
            .slice(0, 6);

          return (
            <article
              key={topic.title}
              className="calculator-directory-card"
            >
              <h3>{topic.title}</h3>

              <p>
                {topic.description}
              </p>

              <ul className="article-list">
                {related.map((calculator) => (
                  <li key={calculator.slug}>
                    <Link href={calculator.href}>
                      {calculator.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
