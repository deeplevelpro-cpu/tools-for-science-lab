import fs from "fs";

const file =
"src/content/calculators/expert-content.ts";

let text = fs.readFileSync(file, "utf8");

const addition = `

  "ideal-gas-law-calculator": {
    formulaExplanation:
      "The ideal gas law relates pressure, volume, temperature, and amount of gas using the equation PV = nRT.",
    example:
      "Example: Gas pressure can be calculated when volume, temperature, and number of moles are known.",
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
      "Example: If pressure increases, gas volume decreases proportionally under constant temperature conditions.",
    commonMistakes: [
      "Changing temperature during calculation.",
      "Using inconsistent pressure units.",
      "Confusing direct and inverse relationships."
    ],
  },

  "charles-law-calculator": {
    formulaExplanation:
      "Charles's law explains the direct relationship between gas volume and absolute temperature when pressure remains constant.",
    example:
      "Example: Gas volume increases when absolute temperature increases.",
    commonMistakes: [
      "Using Celsius instead of Kelvin.",
      "Ignoring constant pressure conditions.",
      "Mixing volume units."
    ],
  },

  "gay-lussacs-law-calculator": {
    formulaExplanation:
      "Gay-Lussac's law calculates the relationship between gas pressure and temperature when volume remains constant.",
    example:
      "Example: Increasing gas temperature increases pressure in a sealed container.",
    commonMistakes: [
      "Using Celsius temperatures.",
      "Ignoring constant volume.",
      "Incorrect pressure conversions."
    ],
  },

  "combined-gas-law-calculator": {
    formulaExplanation:
      "The combined gas law connects pressure, volume, and temperature changes for a fixed amount of gas.",
    example:
      "Example: Initial and final gas conditions can be used to calculate an unknown variable.",
    commonMistakes: [
      "Mixing temperature scales.",
      "Using inconsistent units.",
      "Applying the formula to changing gas amounts."
    ],
  },

  "daltons-law-calculator": {
    formulaExplanation:
      "Dalton's law calculates total gas pressure by adding the partial pressures of individual gases.",
    example:
      "Example: Total pressure equals the sum of all individual gas partial pressures.",
    commonMistakes: [
      "Adding incompatible pressure units.",
      "Ignoring individual gas contributions.",
      "Confusing partial and total pressure."
    ],
  },

  "avogadros-law-calculator": {
    formulaExplanation:
      "Avogadro's law describes the relationship between gas volume and number of molecules at constant temperature and pressure.",
    example:
      "Example: Increasing the amount of gas increases its volume proportionally.",
    commonMistakes: [
      "Changing pressure or temperature conditions.",
      "Confusing moles with molecules.",
      "Using incorrect volume values."
    ],
  },

  "density-calculator": {
    formulaExplanation:
      "Density is calculated by dividing mass by volume and describes how much matter exists in a given space.",
    example:
      "Example: A substance with 10 grams of mass occupying 2 cubic centimeters has a density of 5 g/cm³.",
    commonMistakes: [
      "Mixing mass and volume units.",
      "Using incorrect volume measurements.",
      "Ignoring unit conversions."
    ],
  },

  "specific-heat-calculator": {
    formulaExplanation:
      "Specific heat calculations determine heat transfer using mass, temperature change, and material heat capacity.",
    example:
      "Example: Heat energy increases when mass, specific heat, or temperature difference increases.",
    commonMistakes: [
      "Using incorrect temperature differences.",
      "Mixing energy units.",
      "Ignoring material properties."
    ],
  },

  "measurement-uncertainty-calculator": {
    formulaExplanation:
      "Measurement uncertainty calculations estimate confidence limits and variations in scientific measurements.",
    example:
      "Example: Experimental values can be reported with uncertainty to show measurement reliability.",
    commonMistakes: [
      "Ignoring significant figures.",
      "Using inconsistent measurements.",
      "Misinterpreting uncertainty values."
    ],
  }
`;

text = text.replace(
  /\n};\s*$/,
  `${addition}\n};`
);

fs.writeFileSync(file, text);

console.log("chemistry gas expert content expanded");
