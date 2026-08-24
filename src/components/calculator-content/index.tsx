import type { CalculatorContent } from "@/content/calculators/calculator-content";

import { Container } from "@/components/ui/container";

type CalculatorContentSectionProps = {
  content: CalculatorContent;
};

export function CalculatorContentSection({
  content,
}: CalculatorContentSectionProps) {
  return (
    <section className="article-section">
      <Container className="article-layout">
        <article className="article-content">

          <section>
            <p className="eyebrow">
              Calculator guide
            </p>

            <h2>
              How this calculator works
            </h2>

            <p>
              {content.introduction}
            </p>
          </section>

          <section>
            <h2>
              Formula explanation
            </h2>

            <p>
              {content.formulaExplanation}
            </p>
          </section>

          <section>
            <h2>
              Worked example
            </h2>

            <p>
              {content.example}
            </p>
          </section>

          <section>
            <h2>
              Common mistakes
            </h2>

            <ul className="article-list">
              {content.commonMistakes.map((mistake) => (
                <li key={mistake}>
                  {mistake}
                </li>
              ))}
            </ul>
          </section>

        </article>
      </Container>
    </section>
  );
}
