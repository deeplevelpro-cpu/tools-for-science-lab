import fs from "fs";
import path from "path";

const base = "src/app/calculators";

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
  const title = titleMatch[1];

  text = text.replace(
    'import { createCalculatorSchema } from "@/lib/seo/calculator-schema";',
    `import {
  createCalculatorSchema,
  createCalculatorBreadcrumbSchema,
} from "@/lib/seo/calculator-schema";`
  );

  text = text.replace(
    'const faqSchema = createCalculatorFAQSchema',
    `const breadcrumbSchema =
  createCalculatorBreadcrumbSchema({
    name: pageTitle,
    slug: "${slug}",
    category: "Physics",
  });

const faqSchema = createCalculatorFAQSchema`
  );

  text = text.replace(
    `      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            calculatorSchema,
          ).replace(/</g, "\\\\u003c"),
        }}
      />`,
    `$&

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema,
          ).replace(/</g, "\\\\u003c"),
        }}
      />`
  );

  fs.writeFileSync(file, text);

  console.log("updated", file);
}

console.log("breadcrumb integration complete");
