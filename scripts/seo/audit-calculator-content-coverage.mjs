import fs from "fs";
import path from "path";

const calculatorDir =
  "src/app/calculators";

const registryPath =
  "src/content/calculators/seo-content/registry.ts";

const ignored = [
  "physics",
  "chemistry",
  "laboratory",
];

const calculators = fs
  .readdirSync(calculatorDir)
  .filter((name) =>
    !ignored.includes(name),
  )
  .filter((name) =>
    fs.existsSync(
      path.join(
        calculatorDir,
        name,
        "page.tsx",
      ),
    ),
  );

const registry =
  fs.readFileSync(
    registryPath,
    "utf8",
  );

const missing = calculators.filter(
  (slug) =>
    !registry.includes(
      `"${slug}"`,
    ),
);

console.log(
  "Total calculators:",
  calculators.length,
);

console.log(
  "SEO covered:",
  calculators.length - missing.length,
);

console.log(
  "Missing SEO:",
  missing.length,
);

if (missing.length) {
  console.log("\nMissing:");
  missing.forEach((item) =>
    console.log("-", item),
  );
}
