import fs from "fs";

const file =
"src/content/calculators/expert-content.ts";

let text = fs.readFileSync(file, "utf8");

const addition = `

  "specific-heat-calculator": {
    formulaExplanation:
      "Specific heat calculations determine the heat required to change a substance's temperature using mass, temperature change, and heat capacity.",
    example:
      "Example: Materials with higher specific heat require more energy to increase temperature by the same amount.",
    commonMistakes: [
      "Using incorrect temperature differences.",
      "Mixing mass and volume values.",
      "Ignoring unit conversions."
    ],
  },

  "molarity-calculator": {
    formulaExplanation:
      "Molarity measures solution concentration by calculating moles of solute divided by liters of solution.",
    example:
      "Example: A solution containing one mole of solute in one liter of solution has a concentration of 1 M.",
    commonMistakes: [
      "Using solvent volume instead of solution volume.",
      "Confusing molarity with molality.",
      "Ignoring unit conversions."
    ],
  },

  "molality-calculator": {
    formulaExplanation:
      "Molality measures concentration using moles of solute divided by kilograms of solvent and remains independent of temperature-based volume changes.",
    example:
      "Example: One mole of solute dissolved in one kilogram of solvent gives a molality of 1 m.",
    commonMistakes: [
      "Using solution mass instead of solvent mass.",
      "Confusing molality with molarity.",
      "Using incorrect mass units."
    ],
  },

  "dilution-calculator": {
    formulaExplanation:
      "Dilution calculations determine how concentration changes when solvent is added while the amount of solute remains constant.",
    example:
      "Example: A concentrated solution can be diluted by adding solvent to reach a lower target concentration.",
    commonMistakes: [
      "Changing the amount of solute incorrectly.",
      "Using inconsistent volume units.",
      "Confusing concentration and volume."
    ],
  },

  "ph-calculator": {
    formulaExplanation:
      "pH calculations measure acidity or alkalinity using the logarithmic relationship between hydrogen ion concentration and pH.",
    example:
      "Example: Lower pH values indicate higher hydrogen ion concentration and stronger acidity.",
    commonMistakes: [
      "Confusing pH with pOH.",
      "Ignoring logarithmic scale behavior.",
      "Using incorrect concentration values."
    ],
  },
`;

text = text.replace(
  /\n};\s*$/,
  `${addition}\n};`
);

fs.writeFileSync(file, text);

console.log("thermodynamics solution expert content added");
