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


  // =========================
  // ADDITIONAL CALCULATOR LINKS
  // =========================

  "percent-error-calculator": [
    "percent-difference-calculator",
    "measurement-uncertainty-calculator",
    "standard-deviation-calculator",
  ],

  "percent-difference-calculator": [
    "percent-error-calculator",
    "measurement-uncertainty-calculator",
  ],

  "significant-figures-calculator": [
    "measurement-uncertainty-calculator",
    "percent-error-calculator",
  ],

  "coefficient-variation-calculator": [
    "standard-deviation-calculator",
    "mean-median-mode-calculator",
  ],

  "mean-median-mode-calculator": [
    "standard-deviation-calculator",
    "linear-regression-calculator",
  ],

  "uncertainty-propagation-calculator": [
    "measurement-uncertainty-calculator",
    "percent-error-calculator",
  ],

  "rate-of-change-calculator": [
    "linear-regression-calculator",
    "average-velocity-calculator",
  ],

  "linear-regression-calculator": [
    "rate-of-change-calculator",
    "standard-deviation-calculator",
  ],

  "mass-moles-calculator": [
    "molecular-weight-calculator",
    "stoichiometry-calculator",
    "molarity-calculator",
  ],

  "molecular-weight-calculator": [
    "mass-moles-calculator",
    "molecular-formula-calculator",
  ],

  "empirical-formula-calculator": [
    "molecular-formula-calculator",
    "molecular-weight-calculator",
  ],

  "molecular-formula-calculator": [
    "empirical-formula-calculator",
    "molecular-weight-calculator",
  ],

  "percent-yield-calculator": [
    "stoichiometry-calculator",
    "limiting-reactant-calculator",
  ],

  "avogadros-law-calculator": [
    "ideal-gas-law-calculator",
    "combined-gas-law-calculator",
  ],

  "combined-gas-law-calculator": [
    "ideal-gas-law-calculator",
    "boyles-law-calculator",
    "charles-law-calculator",
  ],

  "gay-lussacs-law-calculator": [
    "ideal-gas-law-calculator",
    "combined-gas-law-calculator",
  ],

  "daltons-law-calculator": [
    "ideal-gas-law-calculator",
    "combined-gas-law-calculator",
  ],

  "grahams-law-calculator": [
    "ideal-gas-law-calculator",
  ],

  "pulley-calculator": [
    "force-calculator",
    "work-calculator",
    "mechanical-advantage-calculator",
  ],

  "inclined-plane-calculator": [
    "force-calculator",
    "friction-calculator",
    "normal-force-calculator",
  ],

  "weight-calculator": [
    "force-calculator",
    "gravitational-potential-energy-calculator",
  ],

  "tangential-acceleration-calculator": [
    "angular-acceleration-calculator",
    "centripetal-acceleration-calculator",
  ],

  "tangential-velocity-calculator": [
    "circular-velocity-calculator",
    "angular-velocity-calculator",
  ],

  "rpm-calculator": [
    "rotational-frequency-calculator",
    "angular-velocity-calculator",
  ],

  "revolutions-calculator": [
    "rpm-calculator",
    "rotational-frequency-calculator",
  ],

  "rotational-frequency-calculator": [
    "rpm-calculator",
    "angular-velocity-calculator",
  ],

  "rotational-work-calculator": [
    "torque-calculator",
    "rotational-power-calculator",
  ],

  "angular-impulse-calculator": [
    "angular-momentum-calculator",
    "torque-calculator",
  ],

  "angular-momentum-calculator": [
    "torque-calculator",
    "moment-of-inertia-calculator",
  ],

  "angular-acceleration-calculator": [
    "torque-calculator",
    "rotational-dynamics-calculator",
  ],

  "angular-displacement-calculator": [
    "angular-velocity-calculator",
    "rotational-frequency-calculator",
  ],

  "angular-velocity-calculator": [
    "rpm-calculator",
    "circular-velocity-calculator",
  ],

  "centripetal-acceleration-calculator": [
    "centripetal-force-calculator",
    "circular-velocity-calculator",
  ],

  "circular-velocity-calculator": [
    "centripetal-acceleration-calculator",
    "angular-velocity-calculator",
  ],

  "acceleration-due-to-gravity-calculator": [
    "free-fall-calculator",
    "gravitational-potential-energy-calculator",
  ],

  "pressure-calculator": [
    "ideal-gas-law-calculator",
    "density-calculator",
  ],

  "hookes-law-calculator": [
    "elastic-potential-energy-calculator",
    "force-calculator",
  ],

  "momentum-calculator": [
    "impulse-calculator",
    "force-calculator",
    "kinetic-energy-calculator",
  ],

  "distance-calculator": [
    "displacement-calculator",
    "average-speed-calculator",
  ],

  "displacement-calculator": [
    "distance-calculator",
    "kinematic-equations-calculator",
  ],

  "average-speed-calculator": [
    "distance-calculator",
    "average-velocity-calculator",
  ],

  "average-velocity-calculator": [
    "average-speed-calculator",
    "acceleration-calculator",
  ],

  "density-calculator": [
    "mass-moles-calculator",
    "pressure-calculator",
  ],

  "specific-heat-calculator": [
    "heat-calculator",
    "energy-calculator",
  ],


  "rotational-dynamics-calculator": [
    "torque-calculator",
    "moment-of-inertia-calculator",
    "angular-acceleration-calculator",
    "rotational-kinetic-energy-calculator",
  ],

};