import fs from "fs";

import {
  calculatorKnowledge,
} from "./calculator-knowledge.mjs";


const registryPath =
  "src/content/calculators/registry.ts";

const outputPath =
  "src/content/calculators/seo-content/registry.ts";


const source = fs.readFileSync(
  registryPath,
  "utf8",
);


const matches = [
  ...source.matchAll(
    /slug:\s*"([^"]+)"[\s\S]*?name:\s*"([^"]+)"[\s\S]*?shortDescription:\s*([\s\S]*?),\s*category:\s*"([^"]+)"/g,
  ),
];


const entries = matches.map(
  ([, slug, name, description, category]) => {

    const knowledge =
      calculatorKnowledge[slug];


    const cleanDescription =
      description
        .replace(/"/g, '\\"')
        .replace(/\s+/g, " ")
        .trim();


    const formula =
      knowledge?.formula ??
      "The formula depends on the scientific model used by this calculator. Enter the required values to calculate the result.";


    const variables =
      knowledge?.variables ??
      [
        "Input values required for calculation",
        "Scientific constants and measurements",
        "Units must remain consistent",
      ];


    const applications =
      knowledge?.applications ??
      [
        `${category} education`,
        "Laboratory and classroom calculations",
        "Scientific data analysis",
      ];


    const explanation =
      knowledge?.explanation ??
      `This ${category.toLowerCase()} calculator applies scientific equations using the provided input values. It explains the relationship between variables and helps users understand the calculation process.`;


    const faqTopics =
      knowledge?.faqTopics ??
      [
        `How is ${name.replace(
          " Calculator",
          "",
        ).toLowerCase()} calculated?`,
        "What formula does this calculator use?",
        "What units should be used?",
      ];


    return `
  "${slug}": {
    slug: "${slug}",

    seoIntroduction:
      "${name} helps users solve scientific calculations with accurate formulas and step-by-step explanations. ${cleanDescription}",

    howItWorks:
      "${explanation}",

    formula:
      "${formula}",

    variables: [
${variables.map(
  (item) => `      "${item}",`,
).join("\n")}
    ],

    applications: [
${applications.map(
  (item) => `      "${item}",`,
).join("\n")}
    ],

    assumptions: [
      "Input values should use compatible scientific units",
      "Results depend on the accuracy of entered measurements and constants",
    ],

    examples: [
      "Enter the required values and review the calculated result.",
      "Compare the result with textbook problems, experiments, or scientific analysis.",
    ],

    faqs: [
${faqTopics.map(
  (question) => `      {
        question:
          "${question}",
        answer:
          "${name} explains the calculation method, required inputs, and scientific relationship between variables used in the result.",
      },`,
).join("\n")}
    ],
  },`;
  },
);


const output = `import type { CalculatorSEOContent } from "./types";

export const calculatorSEOContent: Record<
  string,
  CalculatorSEOContent
> = {
${entries.join("\n")}
};
`;


fs.writeFileSync(
  outputPath,
  output,
);


console.log(
  `Generated SEO content for ${entries.length} calculators`,
);
