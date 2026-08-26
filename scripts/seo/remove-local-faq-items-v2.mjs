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

  const patterns = [
    /const faqItems\s*=\s*\[[\s\S]*?\];\n\n(?=const (calculatorSchema|faqSchema|faqJsonLd))/,
    /const faqItems\s*=\s*\[[\s\S]*?\]\s+as const;\n\n(?=const (calculatorSchema|faqSchema|faqJsonLd))/,
  ];

  let changed = false;

  for (const pattern of patterns) {
    if (pattern.test(text)) {
      text = text.replace(pattern, "");
      changed = true;
      break;
    }
  }

  if (changed) {
    fs.writeFileSync(file, text);
    console.log("removed", file);
  }
}

console.log("Done");
