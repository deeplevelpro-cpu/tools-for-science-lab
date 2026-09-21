import type { CalculatorDefinition } from "./registry";

export function createPhysicsContent(
  calculator: CalculatorDefinition,
) {
  return {
    introduction:
      `${calculator.name} helps solve physics problems involving measurable quantities, formulas, and scientific relationships. It provides calculated results to help students and researchers understand physical concepts.`,

    formulaExplanation:
      `This calculator applies the relevant physics equations using the provided input values. Results depend on correct units, assumptions, and the physical model used.`,

    example:
      `Example: A user enters measured values into the ${calculator.name} to calculate the required physical quantity and understand how the formula is applied.`,

    commonMistakes: [
      "Using inconsistent units in calculations.",
      "Applying formulas without checking assumptions.",
      "Ignoring measurement uncertainty in real experiments.",
    ],
  };
}


export function createChemistryContent(
  calculator: CalculatorDefinition,
) {
  return {
    introduction:
      `${calculator.name} supports chemistry calculations involving chemical quantities, formulas, reactions, and laboratory measurements.`,

    formulaExplanation:
      `Chemistry calculations require accurate values, correct units, and proper understanding of chemical relationships. This tool applies the relevant equation to the provided data.`,

    example:
      `Example: A student or researcher can use the ${calculator.name} to verify calculated values before performing laboratory analysis.`,

    commonMistakes: [
      "Using incorrect chemical units.",
      "Entering inaccurate measured values.",
      "Confusing theoretical calculations with experimental results.",
    ],
  };
}


export function createLaboratoryContent(
  calculator: CalculatorDefinition,
) {
  return {
    introduction:
      `${calculator.name} helps analyze scientific measurements, experimental data, and laboratory calculations with clear results.`,

    formulaExplanation:
      `Laboratory calculations depend on accurate measurements, proper units, and correct interpretation of scientific data.`,

    example:
      `Example: Researchers and students can use the ${calculator.name} to process experimental values and verify calculations.`,

    commonMistakes: [
      "Recording measurements incorrectly.",
      "Ignoring precision and significant figures.",
      "Using unsuitable methods for the dataset.",
    ],
  };
}
