import fs from "fs";

const file =
"src/content/calculators/expert-content.ts";

let text = fs.readFileSync(file, "utf8");

const addition = `

  "acceleration-calculator": {
    formulaExplanation:
      "Acceleration measures how quickly velocity changes over time using the formula a = Δv ÷ Δt.",
    example:
      "Example: A vehicle changing velocity by 20 m/s over 5 seconds has an acceleration of 4 m/s².",
    commonMistakes: [
      "Mixing velocity and acceleration units.",
      "Ignoring direction of motion.",
      "Using incorrect time intervals."
    ],
  },

  "force-calculator": {
    formulaExplanation:
      "Force is calculated using Newton's second law, F = ma, where mass and acceleration determine the applied force.",
    example:
      "Example: A 5 kg object accelerating at 2 m/s² experiences a force of 10 N.",
    commonMistakes: [
      "Using incorrect mass units.",
      "Confusing weight with force.",
      "Ignoring acceleration direction."
    ],
  },

  "kinetic-energy-calculator": {
    formulaExplanation:
      "Kinetic energy represents motion energy and is calculated using KE = 1/2 mv².",
    example:
      "Example: Increasing velocity has a larger effect on kinetic energy because velocity is squared.",
    commonMistakes: [
      "Forgetting to square velocity.",
      "Using incorrect mass units.",
      "Confusing kinetic and potential energy."
    ],
  },

  "momentum-calculator": {
    formulaExplanation:
      "Momentum describes the quantity of motion and is calculated using p = mv.",
    example:
      "Example: A 10 kg object moving at 3 m/s has momentum of 30 kg·m/s.",
    commonMistakes: [
      "Ignoring velocity direction.",
      "Using energy formulas instead.",
      "Mixing mass units."
    ],
  },

  "work-calculator": {
    formulaExplanation:
      "Work measures energy transfer when a force moves an object through a distance using W = Fd.",
    example:
      "Example: Applying 20 N of force over 5 meters produces 100 joules of work.",
    commonMistakes: [
      "Ignoring displacement direction.",
      "Confusing work and power.",
      "Using incorrect distance units."
    ],
  },

  "power-calculator": {
    formulaExplanation:
      "Power measures the rate of energy transfer and is calculated as work divided by time.",
    example:
      "Example: Completing 200 joules of work in 10 seconds gives 20 watts of power.",
    commonMistakes: [
      "Confusing energy with power.",
      "Using incorrect time units.",
      "Ignoring efficiency factors."
    ],
  },

  "projectile-motion-calculator": {
    formulaExplanation:
      "Projectile motion calculations analyze objects moving under gravity with horizontal and vertical velocity components.",
    example:
      "Example: Launch angle and initial velocity determine projectile range and flight time.",
    commonMistakes: [
      "Ignoring gravitational acceleration.",
      "Using incorrect angle units.",
      "Treating horizontal and vertical motion the same."
    ],
  },

  "free-fall-calculator": {
    formulaExplanation:
      "Free fall calculations determine motion under gravitational acceleration without considering air resistance.",
    example:
      "Example: Falling distance can be calculated using gravity and time.",
    commonMistakes: [
      "Using incorrect gravity values.",
      "Ignoring initial velocity.",
      "Mixing distance and displacement."
    ],
  },

  "kinematic-equations-calculator": {
    formulaExplanation:
      "Kinematic equations describe motion relationships between velocity, acceleration, time, and displacement.",
    example:
      "Example: Final velocity can be calculated when acceleration and time are known.",
    commonMistakes: [
      "Using equations outside valid conditions.",
      "Mixing variables.",
      "Ignoring constant acceleration requirements."
    ],
  },

  "torque-calculator": {
    formulaExplanation:
      "Torque measures rotational force and depends on applied force and perpendicular distance.",
    example:
      "Example: Increasing lever arm distance increases rotational effect.",
    commonMistakes: [
      "Using incorrect angle values.",
      "Confusing force and torque.",
      "Ignoring rotational direction."
    ],
  },

  "moment-of-inertia-calculator": {
    formulaExplanation:
      "Moment of inertia describes resistance to rotational acceleration and depends on mass distribution.",
    example:
      "Example: Objects with mass farther from the rotation axis have greater inertia.",
    commonMistakes: [
      "Using incorrect geometry assumptions.",
      "Ignoring rotation axis.",
      "Confusing mass with inertia."
    ],
  },

  "centripetal-force-calculator": {
    formulaExplanation:
      "Centripetal force keeps objects moving in circular paths and depends on mass, velocity, and radius.",
    example:
      "Example: Increasing velocity increases required centripetal force.",
    commonMistakes: [
      "Confusing centripetal and centrifugal effects.",
      "Using diameter instead of radius.",
      "Ignoring circular motion conditions."
    ],
  }
`;

text = text.replace(
  /\n};\s*$/,
  `${addition}\n};`
);

fs.writeFileSync(file, text);

console.log("physics expert content created");
