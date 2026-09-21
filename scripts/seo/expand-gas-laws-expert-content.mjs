import fs from "fs";

const file =
"src/content/calculators/expert-content.ts";

let text = fs.readFileSync(file, "utf8");

const addition = `

  "ideal-gas-law-calculator": {
    formulaExplanation:
      "The ideal gas law relates pressure, volume, temperature, and amount of gas using PV = nRT.",
    example:
      "Example: Gas pressure can be calculated when volume, temperature, and amount of gas are known.",
    commonMistakes: [
      "Using incorrect temperature units.",
      "Forgetting pressure unit conversions.",
      "Using the wrong gas constant."
    ],
  },

  "boyles-law-calculator": {
    formulaExplanation:
      "Boyle's law describes the inverse relationship between gas pressure and volume when temperature remains constant.",
    example:
      "Example: Increasing gas volume decreases pressure when temperature and amount remain unchanged.",
    commonMistakes: [
      "Changing temperature during calculation.",
      "Using inconsistent pressure units.",
      "Confusing direct and inverse relationships."
    ],
  },

  "charles-law-calculator": {
    formulaExplanation:
      "Charles's law explains how gas volume changes directly with temperature when pressure remains constant.",
    example:
      "Example: Heating a gas increases its volume under constant pressure conditions.",
    commonMistakes: [
      "Using Celsius instead of Kelvin.",
      "Ignoring constant pressure conditions.",
      "Mixing volume units."
    ],
  },

  "combined-gas-law-calculator": {
    formulaExplanation:
      "The combined gas law connects pressure, volume, and temperature changes for a fixed amount of gas.",
    example:
      "Example: Initial and final gas states can be compared using pressure, volume, and temperature values.",
    commonMistakes: [
      "Using incorrect temperature scales.",
      "Mixing initial and final values.",
      "Ignoring unit consistency."
    ],
  },

  "gay-lussacs-law-calculator": {
    formulaExplanation:
      "Gay-Lussac's law describes the direct relationship between gas pressure and temperature at constant volume.",
    example:
      "Example: Gas pressure increases when temperature rises in a fixed container.",
    commonMistakes: [
      "Using Celsius temperatures.",
      "Changing container volume.",
      "Ignoring Kelvin conversion."
    ],
  },

  "daltons-law-calculator": {
    formulaExplanation:
      "Dalton's law calculates total pressure of a gas mixture by adding individual partial pressures.",
    example:
      "Example: Total pressure equals the sum of all gas component pressures.",
    commonMistakes: [
      "Adding incompatible pressure units.",
      "Ignoring individual gas pressures.",
      "Confusing concentration with pressure."
    ],
  },

  "grahams-law-calculator": {
    formulaExplanation:
      "Graham's law compares gas diffusion rates based on molar masses.",
    example:
      "Example: Lighter gases diffuse faster than heavier gases under similar conditions.",
    commonMistakes: [
      "Using incorrect molar masses.",
      "Reversing diffusion rate ratios.",
      "Ignoring gas conditions."
    ],
  },
`;

text = text.replace(
  /\n};\s*$/,
  `${addition}\n};`
);

fs.writeFileSync(file, text);

console.log("gas laws expert content added");
