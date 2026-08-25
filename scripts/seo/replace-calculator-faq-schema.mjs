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

  if (!text.includes("createFAQSchema")) {
    continue;
  }

  text = text.replace(
    'import { createFAQSchema } from "@/lib/seo/faq-schema";',
    'import { createCalculatorFAQSchema } from "@/lib/seo/calculator-faq-schema";'
  );

  const faqBlock = /const faqItems = \[[\s\S]*?\];\n\nconst faqSchema = createFAQSchema\(faqItems\);/;

  text = text.replace(
    faqBlock,
    `const faqSchema = createCalculatorFAQSchema(
  "${path.basename(path.dirname(file)).replace("-calculator", "-calculator")}",
);`
  );

  fs.writeFileSync(file, text);
  console.log("updated", file);
}

console.log("Done");
