import fs from "fs";
import path from "path";

const calculatorsDir = "src/app/calculators";

let updated = 0;
let skipped = 0;

for (const slug of fs.readdirSync(calculatorsDir)) {
  if (!slug.endsWith("-calculator")) {
    continue;
  }

  const file = path.join(
    calculatorsDir,
    slug,
    "page.tsx",
  );

  if (!fs.existsSync(file)) {
    continue;
  }

  let content = fs.readFileSync(file, "utf8");

  if (content.includes("CalculatorContentLoader")) {
    skipped++;
    continue;
  }

  const trustImport =
    'import { CalculatorTrustPanel } from "@/components/calculator-trust";';

  if (!content.includes(trustImport)) {
    console.log(`Missing trust anchor: ${slug}`);
    continue;
  }

  content = content.replace(
    trustImport,
    `${trustImport}\nimport { CalculatorContentLoader } from "@/components/calculator-content/calculator-content-loader";`,
  );

  const anchor = "<CalculatorTrustPanel";

  const index = content.indexOf(anchor);

  if (index === -1) {
    console.log(`No trust component: ${slug}`);
    continue;
  }

  content =
    content.slice(0, index) +
    `<CalculatorContentLoader slug="${slug}" />\n\n          ` +
    content.slice(index);

  fs.writeFileSync(file, content);

  updated++;
  console.log(`Updated: ${slug}`);
}

console.log("");
console.log(`Updated: ${updated}`);
console.log(`Skipped: ${skipped}`);
