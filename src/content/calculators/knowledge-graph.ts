export const calculatorKnowledgeGraph: Record<
  string,
  readonly string[]
> = {

  // =========================
  // MOTION PHYSICS CLUSTER
  // =========================

  "acceleration-calculator": [
    "average-velocity-calculator",
    "kinematic-equations-calculator",
    "force-calculator",
    "free-fall-calculator",
  ],

  "free-fall-calculator": [
    "acceleration-due-to-gravity-calculator",
    "projectile-motion-calculator",
    "kinematic-equations-calculator",
    "kinetic-energy-calculator",
  ],

  "projectile-motion-calculator": [
    "kinematic-equations-calculator",
    "acceleration-calculator",
    "free-fall-calculator",
    "distance-calculator",
  ],

  "kinematic-equations-calculator": [
    "acceleration-calculator",
    "displacement-calculator",
    "average-velocity-calculator",
    "projectile-motion-calculator",
  ],


  // =========================
  // FORCE & DYNAMICS CLUSTER
  // =========================

  "force-calculator": [
    "acceleration-calculator",
    "momentum-calculator",
    "friction-calculator",
    "normal-force-calculator",
  ],

  "friction-calculator": [
    "force-calculator",
    "normal-force-calculator",
    "inclined-plane-calculator",
  ],

  "normal-force-calculator": [
    "force-calculator",
    "weight-calculator",
    "friction-calculator",
    "inclined-plane-calculator",
  ],

  "centripetal-force-calculator": [
    "centripetal-acceleration-calculator",
    "circular-velocity-calculator",
    "angular-velocity-calculator",
    "force-calculator",
  ],

  "impulse-calculator": [
    "momentum-calculator",
    "force-calculator",
    "kinetic-energy-calculator",
  ],


  // =========================
  // ENERGY CLUSTER
  // =========================

  "kinetic-energy-calculator": [
    "momentum-calculator",
    "work-calculator",
    "power-calculator",
    "gravitational-potential-energy-calculator",
  ],

  "work-calculator": [
    "force-calculator",
    "kinetic-energy-calculator",
    "power-calculator",
    "elastic-potential-energy-calculator",
  ],

  "power-calculator": [
    "work-calculator",
    "kinetic-energy-calculator",
    "rotational-power-calculator",
  ],

  "gravitational-potential-energy-calculator": [
    "kinetic-energy-calculator",
    "weight-calculator",
    "free-fall-calculator",
  ],

  "elastic-potential-energy-calculator": [
    "hookes-law-calculator",
    "work-calculator",
    "kinetic-energy-calculator",
  ],


  // =========================
  // ROTATIONAL MECHANICS
  // =========================

  "torque-calculator": [
    "moment-of-inertia-calculator",
    "angular-momentum-calculator",
    "rotational-dynamics-calculator",
    "angular-acceleration-calculator",
  ],

  "moment-of-inertia-calculator": [
    "torque-calculator",
    "rotational-kinetic-energy-calculator",
    "angular-momentum-calculator",
  ],

  "rotational-kinetic-energy-calculator": [
    "moment-of-inertia-calculator",
    "rotational-power-calculator",
    "torque-calculator",
  ],

  "rotational-power-calculator": [
    "torque-calculator",
    "rotational-kinetic-energy-calculator",
    "power-calculator",
  ],


  // =========================
  // CHEMISTRY CLUSTER
  // =========================

  "molarity-calculator": [
    "molality-calculator",
    "dilution-calculator",
    "mass-moles-calculator",
    "stoichiometry-calculator",
  ],

  "molality-calculator": [
    "molarity-calculator",
    "molarity-calculator",
  ],

  "dilution-calculator": [
    "molarity-calculator",
    "ph-calculator",
    "molality-calculator",
  ],

  "ph-calculator": [
    "molarity-calculator",
    "dilution-calculator",
  ],

  "stoichiometry-calculator": [
    "mass-moles-calculator",
    "limiting-reactant-calculator",
    "percent-yield-calculator",
  ],

  "limiting-reactant-calculator": [
    "stoichiometry-calculator",
    "mass-moles-calculator",
  ],


  // =========================
  // GAS LAWS
  // =========================

  "ideal-gas-law-calculator": [
    "boyles-law-calculator",
    "charles-law-calculator",
    "combined-gas-law-calculator",
    "daltons-law-calculator",
  ],

  "boyles-law-calculator": [
    "ideal-gas-law-calculator",
    "combined-gas-law-calculator",
  ],

  "charles-law-calculator": [
    "ideal-gas-law-calculator",
    "combined-gas-law-calculator",
  ],


  // =========================
  // STATISTICS / LAB
  // =========================

  "measurement-uncertainty-calculator": [
    "uncertainty-propagation-calculator",
    "percent-error-calculator",
    "standard-deviation-calculator",
  ],

  "standard-deviation-calculator": [
    "mean-median-mode-calculator",
    "linear-regression-calculator",
    "measurement-uncertainty-calculator",
  ],

};
