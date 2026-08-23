import type { CalculatorDefinition } from "./registry";

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function keywordScore(
  current: readonly string[],
  target: readonly string[],
) {
  const currentWords = new Set(
    current.flatMap(normalize),
  );

  let score = 0;

  for (const keyword of target) {
    const words = normalize(keyword);

    if (
      words.every((word) =>
        currentWords.has(word),
      )
    ) {
      score += 3;
    }

    for (const word of words) {
      if (currentWords.has(word)) {
        score += 1;
      }
    }
  }

  return score;
}

export function getRelatedCalculators(
  currentSlug: string,
  calculators: readonly CalculatorDefinition[],
  limit = 4,
) {
  const current = calculators.find(
    (calculator) =>
      calculator.slug === currentSlug,
  );

  if (!current) {
    return [];
  }

  return calculators
    .filter(
      (calculator) =>
        calculator.slug !== currentSlug,
    )
    .map((calculator) => ({
      calculator,
      score:
        (calculator.category === current.category
          ? 5
          : 0) +
        keywordScore(
          current.keywords,
          calculator.keywords,
        ),
    }))
    .sort(
      (a, b) =>
        b.score - a.score,
    )
    .slice(0, limit)
    .map(
      ({ calculator }) =>
        calculator,
    );
}
