import fs from "fs";
import path from "path";

const base = "src/app/calculators";

function scan(dir, files = []) {
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir,item);

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
  let text = fs.readFileSync(file,"utf8");

  if (!text.includes("createCalculatorFAQSchema")) {
    continue;
  }

  if (text.includes("CalculatorFAQ")) {
    continue;
  }

  text =
`import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";
` + text;

  fs.writeFileSync(file,text);

  console.log("updated",file);
}

console.log("done");
