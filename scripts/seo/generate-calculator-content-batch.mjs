
import fs from "fs";

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


const slugMatches = [
  ...registry.matchAll(
    /slug:\s*"([^"]+)"/g
  ),
];


const existingSlugs = new Set(
  [
    ...existing.matchAll(
      /"([^"]+-calculator)":\s*{/g
    ),
  ].map(
    (m) => m[1],
  ),
);


const missing = slugMatches
  .map((m) => m[1])
  .filter(
    (slug) => !existingSlugs.has(slug),
  );


console.log(
  `Missing calculators: ${missing.length}`,
);


if (!missing.length) {
  console.log("No missing content.");
  process.exit(0);
}


const generated = missing.map(
  (slug) => {

    const readable = slug
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


    return `
  "${slug}": {
    introduction:
      "The ${title} helps users calculate ${readable} values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard ${readable} equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },
`;
  },
);


const insert =
  generated.join("\n");


const updated =
  existing.replace(
    /\n};\s*$/,
    `\n${insert}\n};`,
  );


fs.writeFileSync(
  contentPath,
  updated,
);


console.log(
  `Added ${missing.length} calculator content entries.`,
);
