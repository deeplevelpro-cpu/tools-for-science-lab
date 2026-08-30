import { readFileSync } from "node:fs";

import { describe, expect, it } from "vitest";

import { calculators } from "../../../content/calculators/registry";

const shellSource = readFileSync(
  "src/components/calculators/calculator-page-shell.tsx",
  "utf8",
);

describe("calculator trust coverage", () => {
  it("covers all published calculator pages", () => {
    expect(calculators).toHaveLength(74);
  });

  it("renders trust panel centrally in calculator shell", () => {
    expect(shellSource).toContain(
      'from "@/components/calculator-trust"',
    );

    expect(shellSource).toContain(
      "<CalculatorTrustPanel",
    );
  });

  it("passes calculator subject into trust panel", () => {
    expect(shellSource).toContain(
      "subject={subject}",
    );
  });

  it("keeps the expected subject distribution", () => {
    const distribution = calculators.reduce(
      (counts, calculator) => {
        const subject =
          calculator.category.toLowerCase();

        counts[subject] =
          (counts[subject] ?? 0) + 1;

        return counts;
      },
      {} as Record<string, number>,
    );

    expect(distribution).toEqual({
      laboratory: 10,
      chemistry: 19,
      physics: 45,
    });
  });
});
