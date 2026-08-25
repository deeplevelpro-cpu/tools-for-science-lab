export const calculatorKnowledgeGraph: Record<
  string,
  readonly string[]
> = {

  "free-fall-calculator": [
    "acceleration-due-to-gravity-calculator",
    "projectile-motion-calculator",
    "kinematic-equations-calculator",
    "kinetic-energy-calculator",
  ],


  "acceleration-calculator": [
    "force-calculator",
    "kinematic-equations-calculator",
    "projectile-motion-calculator",
    "free-fall-calculator",
  ],


  "force-calculator": [
    "acceleration-calculator",
    "normal-force-calculator",
    "friction-calculator",
    "weight-calculator",
  ],


  "kinetic-energy-calculator": [
    "momentum-calculator",
    "work-calculator",
    "force-calculator",
    "power-calculator",
  ],


  "momentum-calculator": [
    "kinetic-energy-calculator",
    "impulse-calculator",
    "force-calculator",
  ],


  "molarity-calculator": [
    "molality-calculator",
    "dilution-calculator",
    "mass-moles-calculator",
    "molecular-weight-calculator",
  ],


  "molecular-weight-calculator": [
    "mass-moles-calculator",
    "empirical-formula-calculator",
    "molecular-formula-calculator",
  ],


  "percent-error-calculator": [
    "percent-difference-calculator",
    "measurement-uncertainty-calculator",
    "uncertainty-propagation-calculator",
  ],

};
