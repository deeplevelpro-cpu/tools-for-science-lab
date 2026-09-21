import fs from "fs";

const file =
"src/content/calculators/expert-content.ts";

let text = fs.readFileSync(file, "utf8");

const addition = `

  "angular-impulse-calculator": {
    formulaExplanation:
      "Angular impulse calculates the change in rotational momentum caused by a torque acting over a time interval.",
    example:
      "Example: Applying torque to a rotating object for a longer time produces greater angular impulse.",
    commonMistakes: [
      "Confusing angular impulse with linear impulse.",
      "Using incorrect torque units.",
      "Ignoring time duration."
    ],
  },

  "tangential-velocity-calculator": {
    formulaExplanation:
      "Tangential velocity describes the linear speed of an object moving along a circular path.",
    example:
      "Example: Points farther from the center of a rotating wheel have greater tangential velocity.",
    commonMistakes: [
      "Confusing angular velocity with tangential velocity.",
      "Using incorrect radius values.",
      "Ignoring unit conversions."
    ],
  },

  "tangential-acceleration-calculator": {
    formulaExplanation:
      "Tangential acceleration measures the rate of change of tangential velocity during rotational motion.",
    example:
      "Example: A spinning wheel accelerating experiences tangential acceleration.",
    commonMistakes: [
      "Confusing centripetal and tangential acceleration.",
      "Using incorrect angular acceleration.",
      "Ignoring radius."
    ],
  },

  "torque-calculator": {
    formulaExplanation:
      "Torque measures the rotational force produced by applying force at a distance from a pivot point.",
    example:
      "Example: A longer wrench produces more torque with the same applied force.",
    commonMistakes: [
      "Ignoring lever arm distance.",
      "Using incorrect force units.",
      "Confusing torque with force."
    ],
  },

  "moment-of-inertia-calculator": {
    formulaExplanation:
      "Moment of inertia describes an object's resistance to rotational acceleration based on mass distribution.",
    example:
      "Example: Objects with mass farther from the axis have larger moments of inertia.",
    commonMistakes: [
      "Using incorrect mass distribution.",
      "Confusing mass with rotational inertia.",
      "Ignoring axis location."
    ],
  },

  "rotational-kinetic-energy-calculator": {
    formulaExplanation:
      "Rotational kinetic energy calculates energy stored in a rotating object using moment of inertia and angular velocity.",
    example:
      "Example: Faster spinning objects have greater rotational kinetic energy.",
    commonMistakes: [
      "Using linear velocity instead of angular velocity.",
      "Ignoring moment of inertia.",
      "Incorrect unit conversion."
    ],
  },

  "rotational-power-calculator": {
    formulaExplanation:
      "Rotational power measures the rate at which work is performed during rotational motion.",
    example:
      "Example: A motor producing torque at high angular velocity delivers greater power.",
    commonMistakes: [
      "Confusing torque with power.",
      "Using incorrect angular units.",
      "Ignoring time factors."
    ],
  },

  "rotational-work-calculator": {
    formulaExplanation:
      "Rotational work calculates energy transferred when torque causes angular displacement.",
    example:
      "Example: Rotating an object through an angle using constant torque performs rotational work.",
    commonMistakes: [
      "Ignoring angular displacement.",
      "Using force instead of torque.",
      "Incorrect angle conversion."
    ],
  },

  "rpm-calculator": {
    formulaExplanation:
      "RPM calculations convert rotational speed into revolutions per minute.",
    example:
      "Example: Machine speed ratings are commonly expressed in RPM.",
    commonMistakes: [
      "Mixing seconds and minutes.",
      "Ignoring frequency conversion.",
      "Incorrect revolution counting."
    ],
  },

  "revolutions-calculator": {
    formulaExplanation:
      "Revolution calculations determine the number of complete rotations from angular motion data.",
    example:
      "Example: A rotating shaft completing multiple cycles can be measured in revolutions.",
    commonMistakes: [
      "Confusing radians with revolutions.",
      "Incorrect conversion factors.",
      "Ignoring rotation direction."
    ],
  },
`;

text = text.replace(
  /\n};\s*$/,
  `${addition}\n};`
);

fs.writeFileSync(file, text);

console.log("rotational mechanics expert content added");
