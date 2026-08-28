import fs from "fs";

const file =
"src/content/calculators/expert-content.ts";

let text = fs.readFileSync(file, "utf8");

const addition = `

  "force-calculator": {
    formulaExplanation:
      "Force calculations determine the interaction between mass and acceleration using Newton's second law F = ma.",
    example:
      "Example: A larger mass requires greater force to achieve the same acceleration.",
    commonMistakes: [
      "Confusing mass with weight.",
      "Using incorrect acceleration values.",
      "Ignoring force direction."
    ],
  },

  "momentum-calculator": {
    formulaExplanation:
      "Momentum describes the quantity of motion of an object and is calculated using mass multiplied by velocity.",
    example:
      "Example: A heavier object moving at the same speed has greater momentum.",
    commonMistakes: [
      "Confusing momentum with force.",
      "Ignoring velocity direction.",
      "Using incorrect units."
    ],
  },

  "kinetic-energy-calculator": {
    formulaExplanation:
      "Kinetic energy represents energy of motion and depends on an object's mass and velocity.",
    example:
      "Example: Doubling velocity increases kinetic energy significantly because velocity is squared.",
    commonMistakes: [
      "Using incorrect velocity units.",
      "Confusing kinetic and potential energy.",
      "Ignoring mass values."
    ],
  },

  "work-calculator": {
    formulaExplanation:
      "Work measures energy transferred when a force causes displacement and depends on force, distance, and direction.",
    example:
      "Example: Applying force over a longer distance transfers more energy.",
    commonMistakes: [
      "Ignoring displacement direction.",
      "Confusing work with force.",
      "Using incorrect distance units."
    ],
  },

  "power-calculator": {
    formulaExplanation:
      "Power measures how quickly work is performed or energy is transferred over time.",
    example:
      "Example: Two machines doing the same work can have different power depending on completion time.",
    commonMistakes: [
      "Confusing power with energy.",
      "Ignoring time values.",
      "Using incorrect units."
    ],
  },

  "gravitational-potential-energy-calculator": {
    formulaExplanation:
      "Gravitational potential energy represents stored energy due to height in a gravitational field.",
    example:
      "Example: Raising an object higher increases its gravitational potential energy.",
    commonMistakes: [
      "Using incorrect height values.",
      "Confusing mass and weight.",
      "Ignoring gravitational acceleration."
    ],
  },

  "elastic-potential-energy-calculator": {
    formulaExplanation:
      "Elastic potential energy is stored when an elastic object is stretched or compressed.",
    example:
      "Example: A compressed spring stores energy that can later be released.",
    commonMistakes: [
      "Using incorrect spring constants.",
      "Ignoring displacement.",
      "Applying Hooke's law outside elastic limits."
    ],
  },

  "pressure-calculator": {
    formulaExplanation:
      "Pressure describes force distributed over an area and is calculated as force divided by area.",
    example:
      "Example: The same force creates higher pressure on a smaller surface area.",
    commonMistakes: [
      "Confusing pressure with force.",
      "Using incorrect area units.",
      "Ignoring unit conversions."
    ],
  },

  "density-calculator": {
    formulaExplanation:
      "Density measures mass contained within a specific volume and is calculated using mass divided by volume.",
    example:
      "Example: Materials with greater mass in the same volume have higher density.",
    commonMistakes: [
      "Mixing mass and volume units.",
      "Confusing density with weight.",
      "Using incorrect measurements."
    ],
  },
`;

text = text.replace(
  /\n};\s*$/,
  `${addition}\n};`
);

fs.writeFileSync(file, text);

console.log("mechanics energy expert content added");
