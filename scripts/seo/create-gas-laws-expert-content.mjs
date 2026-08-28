import fs from "fs";

const file =
"src/content/calculators/expert-content.ts";

let text = fs.readFileSync(file, "utf8");

const addition = `

  "ideal-gas-law-calculator": {
    formulaExplanation:
      "The ideal gas law describes the relationship between pressure, volume, temperature, and amount of gas using gas variables.",
    example:
      "Example: Increasing temperature while keeping pressure constant causes gas volume to increase.",
    commonMistakes: [
      "Using incorrect temperature units.",
      "Ignoring pressure conversions.",
      "Mixing gas variables."
    ],
  },

  "boyles-law-calculator": {
    formulaExplanation:
      "Boyle's law explains the inverse relationship between gas pressure and volume when temperature remains constant.",
    example:
      "Example: Compressing a gas into a smaller volume increases its pressure.",
    commonMistakes: [
      "Changing temperature during calculation.",
      "Using incorrect pressure units.",
      "Confusing direct and inverse relationships."
    ],
  },

  "charles-law-calculator": {
    formulaExplanation:
      "Charles's law describes the direct relationship between gas volume and temperature when pressure remains constant.",
    example:
      "Example: Heating a gas causes its volume to increase when pressure is unchanged.",
    commonMistakes: [
      "Using Celsius instead of Kelvin.",
      "Ignoring constant pressure conditions.",
      "Using incorrect volume units."
    ],
  },

  "gay-lussacs-law-calculator": {
    formulaExplanation:
      "Gay-Lussac's law describes the relationship between gas pressure and temperature at constant volume.",
    example:
      "Example: Increasing gas temperature increases pressure inside a fixed container.",
    commonMistakes: [
      "Using Celsius temperatures.",
      "Ignoring constant volume.",
      "Mixing pressure units."
    ],
  },

  "combined-gas-law-calculator": {
    formulaExplanation:
      "The combined gas law combines pressure, volume, and temperature relationships when the amount of gas remains constant.",
    example:
      "Example: Gas conditions before and after a change can be compared using combined variables.",
    commonMistakes: [
      "Incorrect temperature conversion.",
      "Mixing initial and final values.",
      "Ignoring constant gas amount."
    ],
  },

  "daltons-law-calculator": {
    formulaExplanation:
      "Dalton's law calculates total pressure of a gas mixture by adding the partial pressures of individual gases.",
    example:
      "Example: A container with multiple gases has total pressure equal to the sum of each gas pressure.",
    commonMistakes: [
      "Ignoring individual gas pressures.",
      "Using incorrect pressure units.",
      "Confusing mole fraction with pressure."
    ],
  },

  "grahams-law-calculator": {
    formulaExplanation:
      "Graham's law compares gas diffusion rates based on the relationship between molecular masses.",
    example:
      "Example: Lighter gases diffuse faster than heavier gases under the same conditions.",
    commonMistakes: [
      "Using incorrect molecular masses.",
      "Comparing gases incorrectly.",
      "Ignoring temperature conditions."
    ],
  },

  "avogadros-law-calculator": {
    formulaExplanation:
      "Avogadro's law describes the direct relationship between gas volume and number of moles at constant temperature and pressure.",
    example:
      "Example: Adding more gas molecules increases volume when pressure and temperature stay constant.",
    commonMistakes: [
      "Changing pressure conditions.",
      "Ignoring mole relationships.",
      "Using incorrect volume units."
    ],
  },
`;

text = text.replace(
  /\n};\s*$/,
  `${addition}\n};`
);

fs.writeFileSync(file, text);

console.log("gas laws expert content added");
