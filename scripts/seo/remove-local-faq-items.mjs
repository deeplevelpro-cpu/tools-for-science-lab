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

  const faqBlock =
    /const faqItems\s*=\s*\[[\s\S]*?\];\n\n(?=const (calculatorSchema|faqSchema|faqJsonLd))/;

  if (!faqBlock.test(text)) {
    continue;
  }

  text = text.replace(faqBlock, "");

  fs.writeFileSync(file, text);

  console.log("removed", file);
}

console.log("Done");
