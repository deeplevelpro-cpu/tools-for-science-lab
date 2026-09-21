import fs from "fs";

const file =
"src/content/calculators/expert-content.ts";

let text = fs.readFileSync(file, "utf8");

const addition = `

  "angular-velocity-calculator": {
    formulaExplanation:
      "Angular velocity describes how quickly an object rotates around an axis and is measured as angular displacement divided by time.",
    example:
      "Example: A rotating wheel completing several radians of motion over a given time has a measurable angular velocity.",
    commonMistakes: [
      "Confusing angular velocity with linear velocity.",
      "Using incorrect angle units.",
      "Ignoring rotation direction."
    ],
  },

  "angular-momentum-calculator": {
    formulaExplanation:
      "Angular momentum describes rotational motion and depends on rotational inertia and angular velocity.",
    example:
      "Example: Increasing rotational speed increases the angular momentum of a rotating object.",
    commonMistakes: [
      "Confusing angular momentum with linear momentum.",
      "Ignoring axis of rotation.",
      "Using incorrect inertia values."
    ],
  },

  "rotational-kinetic-energy-calculator": {
    formulaExplanation:
      "Rotational kinetic energy represents energy stored in rotating objects and depends on moment of inertia and angular velocity.",
    example:
      "Example: A flywheel stores more rotational energy when its speed increases.",
    commonMistakes: [
      "Using linear kinetic energy equations.",
      "Ignoring moment of inertia.",
      "Using incorrect angular velocity units."
    ],
  },

  "rotational-frequency-calculator": {
    formulaExplanation:
      "Rotational frequency measures how many rotations occur per unit time and is related to rotational speed.",
    example:
      "Example: A machine completing 60 rotations per minute has a measurable rotational frequency.",
    commonMistakes: [
      "Confusing frequency with angular velocity.",
      "Mixing seconds and minutes.",
      "Ignoring unit conversions."
    ],
  },

  "rotational-dynamics-calculator": {
    formulaExplanation:
      "Rotational dynamics studies the relationship between torque, angular acceleration, and moment of inertia.",
    example:
      "Example: Greater torque produces greater angular acceleration when inertia remains constant.",
    commonMistakes: [
      "Confusing force with torque.",
      "Ignoring rotational axis.",
      "Using incorrect inertia values."
    ],
  },

  "rpm-calculator": {
    formulaExplanation:
      "RPM calculations determine rotational speed by measuring the number of revolutions completed per minute.",
    example:
      "Example: Motor speed can be converted between RPM and other rotational units.",
    commonMistakes: [
      "Mixing RPM and frequency units.",
      "Ignoring time conversions.",
      "Using incorrect revolution counts."
    ],
  },

  "revolutions-calculator": {
    formulaExplanation:
      "Revolutions calculations determine the number of complete rotations from rotational speed and elapsed time.",
    example:
      "Example: A rotating object completing a known RPM for a given duration produces a calculated revolution count.",
    commonMistakes: [
      "Using inconsistent time units.",
      "Confusing rotations with radians.",
      "Ignoring conversion factors."
    ],
  },
`;

text = text.replace(
  /\n};\s*$/,
  `${addition}\n};`
);

fs.writeFileSync(file, text);

console.log("rotational physics expert content added");
