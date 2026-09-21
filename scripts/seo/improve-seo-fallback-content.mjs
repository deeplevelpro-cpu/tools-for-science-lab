import fs from "fs";

const file =
  "scripts/seo/generate-calculator-seo-content.mjs";

let text = fs.readFileSync(file, "utf8");

text = text.replace(
`const formula =
      knowledge?.formula ??
      "The formula depends on the scientific model used by this calculator. Enter the required values to calculate the result.";`,
`const formula =
      knowledge?.formula ??
      \`\${name} uses a scientific relationship between its input variables to calculate the requested result.\`;`
);

text = text.replace(
`const explanation =
      knowledge?.explanation ??
      \`This \${category.toLowerCase()} calculator applies scientific equations using the provided input values. It explains the relationship between variables and helps users understand the calculation process.\`;`,
`const explanation =
      knowledge?.explanation ??
      \`\${name} applies \${category.toLowerCase()} principles to process measured values and calculate results using the relationship between the selected variables.\`;`
);

fs.writeFileSync(file, text);

console.log("fallback SEO content improved");
