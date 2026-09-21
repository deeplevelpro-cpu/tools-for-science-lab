import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = "src/app/calculators";

const pages = readdirSync(root, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .filter((entry) => {
    try {
      readFileSync(join(root, entry.name, "page.tsx"), "utf8");
      return true;
    } catch {
      return false;
    }
  })
  .filter((entry) =>
    !["physics", "chemistry", "laboratory"].includes(entry.name)
  )
  .map((entry) => entry.name)
  .sort();

const results = [];

for (const slug of pages) {
  const file = join(root, slug, "page.tsx");
  const source = readFileSync(file, "utf8");

  results.push({
    slug,
    title:
      source.includes("title:") ||
      source.includes("<h1")
        ? "YES"
        : "NO",
    formula:
      /formula|equation|calculated|calculate/i.test(source)
        ? "YES"
        : "NO",
    example:
      /example|worked|sample/i.test(source)
        ? "YES"
        : "NO",
    faq:
      source.includes("FAQPage") ||
      /frequently asked/i.test(source)
        ? "YES"
        : "NO",
    trust:
      source.includes("CalculatorTrustPanel")
        ? "YES"
        : "NO",
    related:
      /Related|related|calculator-link/i.test(source)
        ? "YES"
        : "NO",
  });
}

console.table(results);

const missing = results.filter(
  (item) =>
    item.formula === "NO" ||
    item.example === "NO" ||
    item.related === "NO"
);

console.log(
  `\nTotal calculators: ${results.length}`
);

console.log(
  `Needs content improvement: ${missing.length}`
);
