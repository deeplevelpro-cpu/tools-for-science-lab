import fs from "fs";

const file =
  "src/content/calculators/knowledge-graph.ts";

let text = fs.readFileSync(file, "utf8");

text = text.replace(
"\n};\n",
`

  "projectile-motion-calculator": [
    "kinematic-equations-calculator",
    "acceleration-calculator",
    "free-fall-calculator",
    "distance-calculator",
  ],

  "kinematic-equations-calculator": [
    "acceleration-calculator",
    "velocity-calculator",
    "displacement-calculator",
    "projectile-motion-calculator",
  ],

  "work-calculator": [
    "force-calculator",
    "power-calculator",
    "kinetic-energy-calculator",
    "elastic-potential-energy-calculator",
  ],

  "power-calculator": [
    "work-calculator",
    "force-calculator",
    "kinetic-energy-calculator",
    "rotational-power-calculator",
  ],

  "torque-calculator": [
    "moment-of-inertia-calculator",
    "angular-momentum-calculator",
    "rotational-dynamics-calculator",
    "angular-acceleration-calculator",
  ],

  "moment-of-inertia-calculator": [
    "torque-calculator",
    "rotational-dynamics-calculator",
    "rotational-kinetic-energy-calculator",
    "angular-momentum-calculator",
  ],

  "centripetal-force-calculator": [
    "centripetal-acceleration-calculator",
    "circular-velocity-calculator",
    "angular-velocity-calculator",
    "force-calculator",
  ],

  "stoichiometry-calculator": [
    "mass-moles-calculator",
    "molecular-weight-calculator",
    "limiting-reactant-calculator",
    "percent-yield-calculator",
  ],

  "mass-moles-calculator": [
    "molarity-calculator",
    "molecular-weight-calculator",
    "stoichiometry-calculator",
    "molecular-formula-calculator",
  ],

  "ideal-gas-law-calculator": [
    "boyles-law-calculator",
    "charles-law-calculator",
    "combined-gas-law-calculator",
    "daltons-law-calculator",
  ],

  "measurement-uncertainty-calculator": [
    "uncertainty-propagation-calculator",
    "percent-error-calculator",
    "percent-difference-calculator",
    "standard-deviation-calculator",
  ],

  "standard-deviation-calculator": [
    "mean-median-mode-calculator",
    "linear-regression-calculator",
    "measurement-uncertainty-calculator",
    "coefficient-variation-calculator",
  ],

};
`
);

fs.writeFileSync(file, text);

console.log("knowledge graph expanded");
