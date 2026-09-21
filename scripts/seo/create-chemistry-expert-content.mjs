import fs from "fs";

const file =
"src/content/calculators/expert-content.ts";

let text = fs.readFileSync(file, "utf8");

const addition = `

  "molarity-calculator": {
    formulaExplanation:
      "Molarity calculates the concentration of a solution by dividing moles of solute by liters of solution.",
    example:
      "Example: A solution containing more dissolved solute in the same volume has higher molarity.",
    commonMistakes: [
      "Using milliliters instead of liters.",
      "Confusing moles with mass.",
      "Ignoring solution volume."
    ],
  },

  "molality-calculator": {
    formulaExplanation:
      "Molality measures solution concentration using moles of solute per kilogram of solvent.",
    example:
      "Example: Molality remains independent of temperature because it uses solvent mass.",
    commonMistakes: [
      "Using solution mass instead of solvent mass.",
      "Incorrect mole calculations.",
      "Mixing molarity and molality."
    ],
  },

  "dilution-calculator": {
    formulaExplanation:
      "Dilution calculations determine how concentration changes when solvent is added while solute amount remains constant.",
    example:
      "Example: Adding water to a concentrated solution decreases its concentration.",
    commonMistakes: [
      "Changing solute amount incorrectly.",
      "Using inconsistent units.",
      "Confusing concentration with volume."
    ],
  },

  "ph-calculator": {
    formulaExplanation:
      "pH measures the acidity or basicity of a solution using hydrogen ion concentration.",
    example:
      "Example: Solutions with higher hydrogen ion concentration have lower pH values.",
    commonMistakes: [
      "Ignoring logarithmic scale.",
      "Confusing pH with concentration directly.",
      "Using incorrect ion concentration."
    ],
  },

  "stoichiometry-calculator": {
    formulaExplanation:
      "Stoichiometry calculations use balanced chemical equations to determine relationships between reactants and products.",
    example:
      "Example: A balanced equation predicts how much product forms from a given reactant amount.",
    commonMistakes: [
      "Ignoring balanced equations.",
      "Using incorrect mole ratios.",
      "Skipping unit conversions."
    ],
  },

  "limiting-reactant-calculator": {
    formulaExplanation:
      "Limiting reactant calculations identify the reactant that controls the maximum amount of product formed.",
    example:
      "Example: The reactant consumed first determines the final product quantity.",
    commonMistakes: [
      "Choosing excess reactant incorrectly.",
      "Ignoring mole ratios.",
      "Using mass instead of moles."
    ],
  },

  "molecular-weight-calculator": {
    formulaExplanation:
      "Molecular weight calculations determine the total atomic mass of all atoms in a chemical compound.",
    example:
      "Example: Molecular weight is calculated by adding atomic masses of each element.",
    commonMistakes: [
      "Using incorrect atomic masses.",
      "Ignoring element quantities.",
      "Confusing molecular weight with molar mass."
    ],
  },

`;

text = text.replace(
  /\\n};\\s*$/,
  `${addition}\\n};`
);

fs.writeFileSync(file, text);

console.log("chemistry expert content added");
