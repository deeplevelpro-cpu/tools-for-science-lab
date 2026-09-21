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

  text = text.replace(
`
  relatedCalculators:
    relatedCalculators.map((calculator) => ({
      name: calculator.name,
      href: calculator.href,
    })),`,
"",
  );

  fs.writeFileSync(file, text);
}

console.log("removed bad schema blocks");
