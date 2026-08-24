import fs from "fs";

const contentFile =
  "src/content/calculators/calculator-content.ts";

const text = fs.readFileSync(contentFile, "utf8");

const pages = fs.readdirSync(
  "src/app/calculators",
);

const calculators = pages.filter(
  (slug) => slug.endsWith("-calculator"),
);

const missing = calculators.filter(
  (slug) => !text.includes(`"${slug}"`),
);

console.log("Total calculators:", calculators.length);
console.log("With content:", calculators.length - missing.length);
console.log("Missing content:", missing.length);

console.log("\nMissing:");
missing.forEach((slug) =>
  console.log("-", slug),
);
