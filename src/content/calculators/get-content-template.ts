import type { CalculatorDefinition } from "./registry";

import {
  createChemistryContent,
  createLaboratoryContent,
  createPhysicsContent,
} from "./content-templates";

export function getContentTemplate(
  calculator: CalculatorDefinition,
) {
  switch (calculator.category) {
    case "Physics":
      return createPhysicsContent(calculator);

    case "Chemistry":
      return createChemistryContent(calculator);

    case "Laboratory":
      return createLaboratoryContent(calculator);

    default:
      return createLaboratoryContent(calculator);
  }
}
