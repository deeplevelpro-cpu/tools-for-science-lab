import type { ExtendedCalculatorContent } from "@/content/calculators/seo-content/merge-content";

import { Container } from "@/components/ui/container";

type CalculatorContentSectionProps = {
  content: ExtendedCalculatorContent;
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

            {content.seo && (
              <>
                <h3>
                  Formula
                </h3>

                <p>
                  {content.seo.formula}
                </p>
              </>
            )}
          </section>

          <section>
            <h2>
              Worked example
            </h2>

            <p>
              {content.example}
            </p>
          </section>

          {content.seo && (
            <>
              <section>
                <h2>
                  Assumptions
                </h2>

                <ul className="article-list">
                  {content.seo.assumptions.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2>
                  Examples
                </h2>

                <ul className="article-list">
                  {content.seo.examples.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}

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

          {content.seo && (
            <>
              <section>
                <h2>
                  Variables
                </h2>

                <ul className="article-list">
                  {content.seo.variables.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {content.seo.limitations && (
                <section>
                  <h2>
                    Limitations
                  </h2>

                  <ul className="article-list">
                    {content.seo.limitations.map((item) => (
                      <li key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {content.seo.references && (
                <section>
                  <h2>
                    Scientific references
                  </h2>

                  <ul className="article-list">
                    {content.seo.references.map((item) => (
                      <li key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {(content.seo.reviewedBy ||
                content.seo.lastReviewed) && (
                <section>
                  <h2>
                    Content review
                  </h2>

                  <p>
                    {content.seo.reviewedBy &&
                      `Reviewed by: ${content.seo.reviewedBy}`}
                    {content.seo.lastReviewed &&
                      ` | Last reviewed: ${content.seo.lastReviewed}`}
                  </p>
                </section>
              )}

              <section>
                <h2>
                  Applications
                </h2>

                <ul className="article-list">
                  {content.seo.applications.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2>
                  Frequently asked questions
                </h2>

                {content.seo.faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3>
                      {faq.question}
                    </h3>

                    <p>
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </section>
            </>
          )}

        </article>
      </Container>
    </section>
  );
}
