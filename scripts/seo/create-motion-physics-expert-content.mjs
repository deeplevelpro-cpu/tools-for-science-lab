import fs from "fs";

const file =
"src/content/calculators/expert-content.ts";

let text = fs.readFileSync(file, "utf8");

const addition = `

  "acceleration-calculator": {
    formulaExplanation:
      "Acceleration measures the rate of change of velocity over time and describes how quickly motion changes.",
    example:
      "Example: A car increasing its speed from rest experiences positive acceleration.",
    commonMistakes: [
      "Confusing velocity with acceleration.",
      "Using incorrect time values.",
      "Ignoring direction of acceleration."
    ],
  },

  "acceleration-due-to-gravity-calculator": {
    formulaExplanation:
      "Acceleration due to gravity describes the constant acceleration experienced by objects falling near Earth's surface.",
    example:
      "Example: Objects in free fall accelerate downward because of Earth's gravitational field.",
    commonMistakes: [
      "Using incorrect gravity values.",
      "Ignoring air resistance effects.",
      "Confusing mass with acceleration."
    ],
  },

  "average-speed-calculator": {
    formulaExplanation:
      "Average speed calculates total distance traveled divided by total time taken.",
    example:
      "Example: A vehicle traveling different speeds over a journey can have one average speed value.",
    commonMistakes: [
      "Averaging speeds directly.",
      "Ignoring total distance.",
      "Using inconsistent time units."
    ],
  },

  "average-velocity-calculator": {
    formulaExplanation:
      "Average velocity calculates displacement divided by elapsed time and includes direction.",
    example:
      "Example: Returning to the starting point gives zero average velocity despite movement.",
    commonMistakes: [
      "Confusing speed with velocity.",
      "Ignoring direction.",
      "Using distance instead of displacement."
    ],
  },

  "displacement-calculator": {
    formulaExplanation:
      "Displacement measures the change in position from an initial point to a final point.",
    example:
      "Example: Moving around a path and returning to the start results in zero displacement.",
    commonMistakes: [
      "Confusing distance with displacement.",
      "Ignoring direction.",
      "Using path length instead of position change."
    ],
  },

  "distance-calculator": {
    formulaExplanation:
      "Distance measures the total path traveled by an object regardless of direction.",
    example:
      "Example: A runner completing multiple laps has distance equal to the full path length.",
    commonMistakes: [
      "Confusing distance with displacement.",
      "Ignoring total path length.",
      "Using incorrect units."
    ],
  },

  "free-fall-calculator": {
    formulaExplanation:
      "Free fall calculations describe motion of objects under gravity when air resistance is ignored.",
    example:
      "Example: A dropped object increases its velocity as it falls due to gravitational acceleration.",
    commonMistakes: [
      "Ignoring gravity direction.",
      "Using incorrect falling time.",
      "Assuming mass changes acceleration."
    ],
  },

  "projectile-motion-calculator": {
    formulaExplanation:
      "Projectile motion analyzes objects moving through the air under gravity with separate horizontal and vertical components.",
    example:
      "Example: A thrown ball follows a curved path because horizontal motion combines with vertical acceleration.",
    commonMistakes: [
      "Ignoring gravity.",
      "Mixing horizontal and vertical motion.",
      "Using incorrect launch angles."
    ],
  },

  "kinematic-equations-calculator": {
    formulaExplanation:
      "Kinematic equations describe motion relationships between velocity, acceleration, displacement, and time for constant acceleration.",
    example:
      "Example: Motion variables can be calculated when enough information about acceleration and time is available.",
    commonMistakes: [
      "Using equations without constant acceleration.",
      "Ignoring initial velocity.",
      "Mixing motion variables."
    ],
  },
`;

text = text.replace(
  /\n};\s*$/,
  `${addition}\n};`
);

fs.writeFileSync(file, text);

console.log("motion physics expert content added");
