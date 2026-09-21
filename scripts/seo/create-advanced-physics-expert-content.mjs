import fs from "fs";

const file =
"src/content/calculators/expert-content.ts";

let text = fs.readFileSync(file, "utf8");

const addition = `

  "angular-displacement-calculator": {
    formulaExplanation:
      "Angular displacement measures the change in rotational position of an object and is expressed in radians.",
    example:
      "Example: A rotating wheel completing half a revolution has an angular displacement of π radians.",
    commonMistakes: [
      "Confusing angular displacement with distance.",
      "Using degrees without conversion.",
      "Ignoring rotation direction."
    ],
  },

  "angular-velocity-calculator": {
    formulaExplanation:
      "Angular velocity describes how quickly an object rotates by measuring angular displacement over time.",
    example:
      "Example: A fan rotating faster has a greater angular velocity.",
    commonMistakes: [
      "Mixing angular and linear velocity.",
      "Using incorrect time units.",
      "Ignoring radians."
    ],
  },

  "angular-acceleration-calculator": {
    formulaExplanation:
      "Angular acceleration measures the rate of change of angular velocity during rotational motion.",
    example:
      "Example: A motor increasing its rotational speed experiences angular acceleration.",
    commonMistakes: [
      "Confusing velocity with acceleration.",
      "Using incorrect angular units.",
      "Ignoring time intervals."
    ],
  },

  "centripetal-acceleration-calculator": {
    formulaExplanation:
      "Centripetal acceleration describes the inward acceleration required for circular motion.",
    example:
      "Example: A car moving around a curve experiences centripetal acceleration toward the center of the path.",
    commonMistakes: [
      "Using diameter instead of radius.",
      "Ignoring velocity changes.",
      "Incorrect unit conversion."
    ],
  },

  "circular-velocity-calculator": {
    formulaExplanation:
      "Circular velocity calculates the speed required for an object to complete circular motion under given conditions.",
    example:
      "Example: Satellites require specific circular velocity to maintain orbit.",
    commonMistakes: [
      "Using incorrect radius values.",
      "Ignoring gravitational conditions.",
      "Mixing speed and velocity."
    ],
  },

  "rotational-frequency-calculator": {
    formulaExplanation:
      "Rotational frequency measures the number of complete rotations performed per unit time.",
    example:
      "Example: A machine rotating 60 times per minute has a frequency of one rotation per second.",
    commonMistakes: [
      "Confusing frequency with angular velocity.",
      "Using incorrect time units.",
      "Ignoring conversion factors."
    ],
  },
`;

text = text.replace(
  /\n};\s*$/,
  `${addition}\n};`
);

fs.writeFileSync(file, text);

console.log("advanced physics expert content added");
