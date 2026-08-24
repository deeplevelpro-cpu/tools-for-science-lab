import fs from "fs";

import { calculators as calculatorRegistry } from "../../src/content/calculators/registry.ts";
import { getContentTemplate } from "../../src/content/calculators/get-content-template.ts";

const registryPath =
  "src/content/calculators/registry.ts";

const contentPath =
  "src/content/calculators/calculator-content.ts";


const registry = fs.readFileSync(
  registryPath,
  "utf8",
);

const existing = fs.readFileSync(
  contentPath,
  "utf8",
);


// Extract calculator definitions
const legacyCalculators = [
  ...registry.matchAll(
    /slug:\s*"([^"]+)"[\s\S]*?category:\s*"([^"]+)"/g,
  ),
].map((match) => ({
  slug: match[1],
  category: match[2],
}));


const existingSlugs = new Set(
  [
    ...existing.matchAll(
      /"([^"]+-calculator)":\s*{/g,
    ),
  ].map((m) => m[1]),
);


const forceMode = process.argv.includes("--force");

const targets = forceMode
  ? calculatorRegistry
  : calculatorRegistry.filter(
      (calculator) =>
        !existingSlugs.has(calculator.slug),
    );


console.log(
  forceMode
    ? `Force mode enabled. Regenerating: ${targets.length} calculators`
    : `Missing calculators: ${targets.length}`,
);


if (!targets.length) {
  console.log("No missing content.");
  process.exit(0);
}


function createContent(calculator) {
  const readable =
    calculator.slug
      .replace(
        /-calculator$/,
        "",
      )
      .replaceAll(
        "-",
        " ",
      );


  const title =
    readable.charAt(0).toUpperCase() +
    readable.slice(1);


  if (calculator.category === "Physics") {
    return {
      introduction:
        `${title} helps solve physics problems involving measurable quantities, formulas, and scientific relationships.`,
      formulaExplanation:
        `This calculator applies physics equations using input values, correct units, and scientific assumptions.`,
      example:
        `Example: Students can use the ${title} to apply formulas and understand how physical quantities are calculated.`,
      mistakes: [
        "Using incorrect units.",
        "Ignoring formula assumptions.",
        "Ignoring measurement uncertainty.",
      ],
    };
  }


  if (calculator.category === "Chemistry") {
    return {
      introduction:
        `${title} supports chemistry calculations involving chemical quantities, reactions, formulas, and laboratory measurements.`,
      formulaExplanation:
        `This calculator applies chemistry equations using accurate values and proper scientific relationships.`,
      example:
        `Example: Researchers can use the ${title} to verify chemical calculations before laboratory analysis.`,
      mistakes: [
        "Entering incorrect chemical values.",
        "Using wrong measurement units.",
        "Confusing theoretical and experimental results.",
      ],
    };
  }


  return {
    introduction:
      `${title} helps analyze laboratory measurements, scientific data, and experimental calculations.`,
    formulaExplanation:
      `Laboratory calculations require accurate measurements, correct units, and proper data interpretation.`,
    example:
      `Example: Students and researchers can use the ${title} to process experimental values.`,
    mistakes: [
      "Recording measurements incorrectly.",
      "Ignoring significant figures.",
      "Using unsuitable calculation methods.",
    ],
  };
}


const generated = targets.map(
  (calculator) => {
    const content = createContent(calculator);

    return `
  "${calculator.slug}": {
    introduction:
      "${content.introduction}",

    formulaExplanation:
      "${content.formulaExplanation}",

    example:
      "${content.example}",

    commonMistakes: [
      "${content.mistakes[0]}",
      "${content.mistakes[1]}",
      "${content.mistakes[2]}",
    ],
  },
`;
  },
);


const updated =
  existing.replace(
    /\n};\s*$/,
    `\n${generated.join("\n")}\n};`,
  );


fs.writeFileSync(
  contentPath,
  updated,
);


console.log(
  `Added ${targets.length} calculator content entries.`,
);
