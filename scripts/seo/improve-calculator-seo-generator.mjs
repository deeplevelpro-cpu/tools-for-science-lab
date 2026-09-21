import fs from "fs";

const file = "scripts/seo/generate-calculator-seo-content.mjs";

let text = fs.readFileSync(file, "utf8");

text = text.replace(
`const faqTopics =
      knowledge?.faqTopics ??
      [
        \`What is the \${name.replace(
          " Calculator",
          "",
        )} calculator used for?\`,
        "Why are correct units important?",
      ];`,
`const faqTopics =
      knowledge?.faqTopics ??
      [
        \`How is \${name.replace(
          " Calculator",
          "",
        ).toLowerCase()} calculated?\`,
        "What formula does this calculator use?",
        "What units should be used?",
      ];`
);

text = text.replace(
`"This calculator provides accurate scientific calculations with clear explanations and reliable results."`,
`"\${name} explains the calculation method, required inputs, and scientific relationship between variables used in the result."`
);

text = text.replace(
`assumptions: [
      "Input values are provided using consistent scientific units",
      "The calculator follows the standard scientific model for this calculation",
    ],`,
`assumptions: [
      "Input values should use compatible scientific units",
      "Results depend on the accuracy of entered measurements and constants",
    ],`
);

text = text.replace(
`examples: [
      "Enter known values and review the calculated result with the formula explanation",
      "Use the calculator to verify classroom or laboratory calculations",
    ],`,
`examples: [
      "Enter the required values and review the calculated result.",
      "Compare the result with textbook problems, experiments, or scientific analysis.",
    ],`
);

fs.writeFileSync(file, text);

console.log("SEO generator improved");
