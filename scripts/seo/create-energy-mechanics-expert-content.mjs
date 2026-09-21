import fs from "fs";

const file =
"src/content/calculators/expert-content.ts";

let text = fs.readFileSync(file, "utf8");

const addition = `

  "gravitational-potential-energy-calculator": {
    formulaExplanation:
      "Gravitational potential energy represents stored energy due to an object's height in a gravitational field and is calculated using PE = mgh.",
    example:
      "Example: Raising an object higher increases its gravitational potential energy because height increases.",
    commonMistakes: [
      "Using incorrect height measurements.",
      "Mixing mass and weight values.",
      "Using inconsistent units."
    ],
  },

  "elastic-potential-energy-calculator": {
    formulaExplanation:
      "Elastic potential energy is stored when an elastic object is stretched or compressed and is calculated using spring properties.",
    example:
      "Example: Compressing a spring stores energy that can later be released as motion.",
    commonMistakes: [
      "Using incorrect spring constant values.",
      "Confusing force with energy.",
      "Ignoring deformation distance."
    ],
  },

  "impulse-calculator": {
    formulaExplanation:
      "Impulse describes the change in momentum caused by a force acting over a time interval and is calculated using J = Ft.",
    example:
      "Example: Increasing the time of impact reduces the average force during a collision.",
    commonMistakes: [
      "Confusing impulse with momentum.",
      "Ignoring time duration.",
      "Using incorrect force units."
    ],
  },

  "density-calculator": {
    formulaExplanation:
      "Density measures how much mass exists in a given volume and is calculated using density = mass ÷ volume.",
    example:
      "Example: Two objects with the same volume can have different densities if their masses differ.",
    commonMistakes: [
      "Mixing mass and volume units.",
      "Confusing density with weight.",
      "Using incorrect volume measurements."
    ],
  },

  "weight-calculator": {
    formulaExplanation:
      "Weight represents gravitational force acting on an object and is calculated using W = mg.",
    example:
      "Example: An object's weight changes when it moves between environments with different gravity.",
    commonMistakes: [
      "Confusing mass and weight.",
      "Using incorrect gravity values.",
      "Ignoring unit conversions."
    ],
  },

  "friction-calculator": {
    formulaExplanation:
      "Friction calculations determine resistance between surfaces using normal force and friction coefficients.",
    example:
      "Example: Rougher surfaces generally produce greater friction forces.",
    commonMistakes: [
      "Ignoring normal force.",
      "Using incorrect friction coefficients.",
      "Confusing static and kinetic friction."
    ],
  },

  "hookes-law-calculator": {
    formulaExplanation:
      "Hooke's law describes the relationship between applied force and spring displacement using F = kx.",
    example:
      "Example: A stronger spring requires more force for the same displacement.",
    commonMistakes: [
      "Using incorrect spring constants.",
      "Ignoring displacement direction.",
      "Applying the law beyond elastic limits."
    ],
  },

  "inclined-plane-calculator": {
    formulaExplanation:
      "Inclined plane calculations analyze forces acting on objects placed on angled surfaces.",
    example:
      "Example: Increasing the incline angle changes the component of gravitational force along the surface.",
    commonMistakes: [
      "Using incorrect angle values.",
      "Ignoring friction effects.",
      "Mixing force components."
    ],
  },

  "normal-force-calculator": {
    formulaExplanation:
      "Normal force represents the support force from a surface acting perpendicular to an object's contact area.",
    example:
      "Example: An object resting on a flat surface experiences a normal force equal to its weight.",
    commonMistakes: [
      "Confusing normal force with weight.",
      "Ignoring surface angle.",
      "Using incorrect force directions."
    ],
  },

  "pressure-calculator": {
    formulaExplanation:
      "Pressure measures force distributed over an area and is calculated using pressure = force ÷ area.",
    example:
      "Example: The same force creates greater pressure when applied over a smaller area.",
    commonMistakes: [
      "Confusing force and pressure.",
      "Using incorrect area units.",
      "Ignoring pressure unit conversions."
    ],
  },
`;

text = text.replace(
  /\n};\s*$/,
  `${addition}\n};`
);

fs.writeFileSync(file, text);

console.log("energy mechanics expert content added");
