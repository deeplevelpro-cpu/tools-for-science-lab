import fs from "fs";
import path from "path";

const base = "src/app/calculators";

const skip = [
  "src/app/calculators/page.tsx",
  "src/app/calculators/physics/page.tsx",
  "src/app/calculators/chemistry/page.tsx",
  "src/app/calculators/laboratory/page.tsx",
];

function scan(dir, files = []) {
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);

    if (fs.statSync(full).isDirectory()) {
      scan(full, files);
    }

    if (item === "page.tsx") {
      files.push(full);
    }
  }

  return files;
}

for (const file of scan(base)) {
  if (skip.includes(file)) {
    continue;
  }

  let text = fs.readFileSync(file, "utf8");

  if (text.includes("createCalculatorBreadcrumbSchema")) {
    continue;
  }

  const slugMatch = text.match(
    /slug:\s*"([^"]+)"/,
  );

  const titleMatch = text.match(
    /const pageTitle = "([^"]+)"/,
  );

  if (!slugMatch || !titleMatch) {
    console.log("skip", file);
    continue;
  }

  const slug = slugMatch[1];

  if (text.includes('from "@/lib/seo/calculator-schema";')) {
    text = text.replace(
      'import { createCalculatorSchema } from "@/lib/seo/calculator-schema";',
      `import {
  createCalculatorSchema,
  createCalculatorBreadcrumbSchema,
} from "@/lib/seo/calculator-schema";`
    );
  }

  if (!text.includes("breadcrumbSchema")) {
    text = text.replace(
      /const faqSchema = createCalculatorFAQSchema\([^\n]+\);/,
      `const breadcrumbSchema =
  createCalculatorBreadcrumbSchema({
    name: pageTitle,
    slug: "${slug}",
    category: "Physics",
  });

const faqSchema = createCalculatorFAQSchema("${slug}");`
    );
  }

  if (!text.includes("JSON.stringify(breadcrumbSchema)")) {
    text = text.replace(
      /(<script[\s\S]*?JSON\.stringify\(\s*calculatorSchema\s*\)[\s\S]*?\/>)/,
      `$1

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema,
          ).replace(/</g, "\\\\u003c"),
        }}
      />`
    );
  }

  fs.writeFileSync(file, text);

  console.log("updated", file);
}

console.log("remaining breadcrumb integration complete");
