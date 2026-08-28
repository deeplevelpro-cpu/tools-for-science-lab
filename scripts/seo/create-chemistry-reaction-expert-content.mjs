import fs from "fs";

const file =
"src/content/calculators/expert-content.ts";

let text = fs.readFileSync(file, "utf8");

const addition = `

  "stoichiometry-calculator": {
    formulaExplanation:
      "Stoichiometry calculates quantitative relationships between reactants and products using balanced chemical equations and mole ratios.",
    example:
      "Example: A balanced reaction equation determines how many moles of product can form from a given amount of reactant.",
    commonMistakes: [
      "Using an unbalanced chemical equation.",
      "Ignoring mole ratios.",
      "Mixing grams and moles incorrectly."
    ],
  },

  "molecular-weight-calculator": {
    formulaExplanation:
      "Molecular weight calculates the total atomic mass of a compound by adding the atomic masses of all atoms in its chemical formula.",
    example:
      "Example: Water molecular weight is calculated by adding the masses of two hydrogen atoms and one oxygen atom.",
    commonMistakes: [
      "Using incorrect atomic masses.",
      "Counting atoms incorrectly.",
      "Confusing molecular weight with molar mass."
    ],
  },

  "molecular-formula-calculator": {
    formulaExplanation:
      "Molecular formula calculations determine the actual number of atoms of each element in a compound using molecular mass information.",
    example:
      "Example: A molecular formula may be determined by multiplying an empirical formula by a whole-number factor.",
    commonMistakes: [
      "Using incorrect empirical formula.",
      "Ignoring molecular mass.",
      "Applying the wrong multiplication factor."
    ],
  },

  "empirical-formula-calculator": {
    formulaExplanation:
      "Empirical formula calculations find the simplest whole-number ratio of elements in a chemical compound.",
    example:
      "Example: Element percentages can be converted into mole ratios to determine an empirical formula.",
    commonMistakes: [
      "Skipping mole conversion.",
      "Rounding ratios incorrectly.",
      "Using mass values instead of mole values."
    ],
  },

  "mass-moles-calculator": {
    formulaExplanation:
      "Mass and moles calculations convert between grams and moles using molar mass as the conversion factor.",
    example:
      "Example: Dividing sample mass by molar mass determines the number of moles present.",
    commonMistakes: [
      "Using incorrect molar mass.",
      "Mixing grams and kilograms.",
      "Ignoring unit conversions."
    ],
  },

  "limiting-reactant-calculator": {
    formulaExplanation:
      "Limiting reactant calculations identify the reactant that is completely consumed first and determines the maximum product amount.",
    example:
      "Example: The limiting reactant controls how much product can form in a chemical reaction.",
    commonMistakes: [
      "Comparing reactants without mole conversion.",
      "Ignoring balanced equation ratios.",
      "Confusing excess reactant with limiting reactant."
    ],
  },
`;

text = text.replace(
  /\n};\s*$/,
  `${addition}\n};`
);

fs.writeFileSync(file, text);

console.log("chemistry reaction expert content added");
