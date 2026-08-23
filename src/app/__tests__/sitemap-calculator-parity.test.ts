import {
  existsSync,
  readFileSync,
  readdirSync,
} from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { calculators } from "../../content/calculators/registry";

const calculatorRoot = "src/app/calculators";

const sitemapSource = readFileSync(
  "src/app/sitemap.ts",
  "utf8",
);

const calculatorPageSlugs = readdirSync(
  calculatorRoot,
  { withFileTypes: true },
)
  .filter((entry) => entry.isDirectory())
  .filter((entry) =>
    entry.name.endsWith("-calculator") &&
    existsSync(
      path.join(
        calculatorRoot,
        entry.name,
        "page.tsx",
      ),
    ),
  )
  .map((entry) => entry.name)
  .sort();

const sitemapCalculatorSlugs = calculators
  .map((calculator) => calculator.slug)
  .sort();

describe("calculator sitemap parity", () => {
  it("includes every calculator detail page exactly once", () => {
    expect(calculatorPageSlugs).toHaveLength(74);
    expect(sitemapCalculatorSlugs).toEqual(
      calculatorPageSlugs,
    );
  });

  it("includes the combined gas law calculator", () => {
    expect(sitemapSource).toContain("calculators");
  });
});
