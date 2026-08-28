import fs from "fs";

const file =
"src/content/calculators/expert-content.ts";

let text = fs.readFileSync(file, "utf8");

const addition = `

  "centripetal-force-calculator": {
    formulaExplanation:
      "Centripetal force is the inward force required to keep an object moving in a circular path and depends on mass, velocity, and radius.",
    example:
      "Example: A car turning on a circular road requires centripetal force toward the center of the curve.",
    commonMistakes: [
      "Confusing centripetal force with centrifugal force.",
      "Using diameter instead of radius.",
      "Ignoring velocity effects."
    ],
  },

  "friction-calculator": {
    formulaExplanation:
      "Friction calculations determine the resistance force between surfaces based on friction coefficient and normal force.",
    example:
      "Example: Rough surfaces create greater friction than smooth surfaces under the same conditions.",
    commonMistakes: [
      "Using incorrect friction coefficients.",
      "Confusing static and kinetic friction.",
      "Ignoring normal force."
    ],
  },

  "normal-force-calculator": {
    formulaExplanation:
      "Normal force represents the support force exerted by a surface perpendicular to an object's contact area.",
    example:
      "Example: A book resting on a table experiences a normal force balancing its weight.",
    commonMistakes: [
      "Assuming normal force always equals weight.",
      "Ignoring inclined surfaces.",
      "Using incorrect force directions."
    ],
  },

  "inclined-plane-calculator": {
    formulaExplanation:
      "Inclined plane calculations analyze forces acting on objects placed on sloped surfaces, including gravity components and friction.",
    example:
      "Example: A box on a ramp experiences a component of gravity pulling it downward along the slope.",
    commonMistakes: [
      "Ignoring slope angle.",
      "Using incorrect force components.",
      "Forgetting friction effects."
    ],
  },

  "pulley-calculator": {
    formulaExplanation:
      "Pulley calculations analyze mechanical advantage, force distribution, and motion in pulley systems.",
    example:
      "Example: Multiple pulley systems reduce the effort force needed to lift heavy loads.",
    commonMistakes: [
      "Ignoring pulley efficiency.",
      "Using incorrect rope arrangement.",
      "Confusing force and tension."
    ],
  },

  "impulse-calculator": {
    formulaExplanation:
      "Impulse measures the change in momentum caused by a force acting over a period of time.",
    example:
      "Example: Increasing collision time reduces the average force during impact.",
    commonMistakes: [
      "Confusing impulse with momentum.",
      "Ignoring time duration.",
      "Using incorrect force values."
    ],
  },
`;

text = text.replace(
  /\n};\s*$/,
  `${addition}\n};`
);

fs.writeFileSync(file, text);

console.log("forces dynamics expert content added");
