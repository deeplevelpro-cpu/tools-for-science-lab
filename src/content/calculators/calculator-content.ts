export type CalculatorContent = {
  introduction: string;
  formulaExplanation: string;
  example: string;
  commonMistakes: readonly string[];
  
  "acceleration-calculator": {
    introduction:
      "The acceleration calculator determines how quickly velocity changes over time using velocity difference and time interval.",
    formulaExplanation:
      "Acceleration is calculated using the formula a = (v₂ - v₁) / t, where velocity change is divided by elapsed time.",
    example:
      "Example: If an object changes velocity from 10 m/s to 30 m/s in 5 seconds, its acceleration is 4 m/s².",
    commonMistakes: [
      "Using incorrect time units.",
      "Confusing velocity with acceleration.",
      "Ignoring the direction of acceleration.",
    ],
  },

  "acceleration-due-to-gravity-calculator": {
    introduction:
      "The acceleration due to gravity calculator helps analyze motion caused by Earth's gravitational acceleration.",
    formulaExplanation:
      "Near Earth's surface, gravitational acceleration is approximately 9.8 m/s² and is used in free-fall equations.",
    example:
      "Example: An object dropped from rest accelerates downward at approximately 9.8 m/s².",
    commonMistakes: [
      "Using the wrong gravity value.",
      "Ignoring unit conversions.",
      "Applying gravity formulas when other forces dominate.",
    ],
  },

  "projectile-motion-calculator": {
    introduction:
      "The projectile motion calculator analyzes two-dimensional motion using launch speed, angle, and gravity.",
    formulaExplanation:
      "Projectile motion separates velocity into horizontal and vertical components to calculate range, height, and flight time.",
    example:
      "Example: A launched object can be evaluated for maximum height and distance using its initial velocity and angle.",
    commonMistakes: [
      "Ignoring launch angle.",
      "Mixing horizontal and vertical components.",
      "Assuming air resistance is included.",
    ],
  },

  "force-calculator": {
    introduction:
      "The force calculator determines force using mass and acceleration based on Newton's second law.",
    formulaExplanation:
      "Force is calculated using F = ma, where mass is multiplied by acceleration.",
    example:
      "Example: A 5 kg object accelerating at 3 m/s² experiences a force of 15 N.",
    commonMistakes: [
      "Using incorrect mass units.",
      "Confusing weight with force.",
      "Ignoring acceleration direction.",
    ],
  },

  "momentum-calculator": {
    introduction:
      "The momentum calculator finds the quantity of motion of an object using mass and velocity.",
    formulaExplanation:
      "Momentum is calculated using p = mv, where mass is multiplied by velocity.",
    example:
      "Example: A 2 kg object moving at 5 m/s has momentum of 10 kg·m/s.",
    commonMistakes: [
      "Mixing momentum and force.",
      "Using incorrect velocity values.",
      "Ignoring direction.",
    ],
  },

  "kinetic-energy-calculator": {
    introduction:
      "The kinetic energy calculator determines energy stored in moving objects.",
    formulaExplanation:
      "Kinetic energy is calculated using KE = 1/2 mv².",
    example:
      "Example: Increasing velocity greatly increases kinetic energy because velocity is squared.",
    commonMistakes: [
      "Forgetting to square velocity.",
      "Using incorrect mass units.",
      "Confusing kinetic and potential energy.",
    ],
  },

  "work-calculator": {
    introduction:
      "The work calculator determines energy transferred when a force moves an object.",
    formulaExplanation:
      "Work is calculated using W = Fd when force acts in the direction of displacement.",
    example:
      "Example: A force moving an object over a distance transfers mechanical work.",
    commonMistakes: [
      "Ignoring displacement direction.",
      "Confusing work with power.",
      "Using inconsistent units.",
    ],
  },

  "power-calculator": {
    introduction:
      "The power calculator measures the rate of energy transfer or work completion.",
    formulaExplanation:
      "Power is calculated as P = W/t, representing work divided by time.",
    example:
      "Example: Completing the same work in less time produces greater power.",
    commonMistakes: [
      "Confusing energy and power.",
      "Using incorrect time units.",
      "Ignoring unit conversions.",
    ],
  },

  "torque-calculator": {
    introduction:
      "The torque calculator determines rotational force produced by a force applied at a distance.",
    formulaExplanation:
      "Torque is calculated using τ = rF sinθ.",
    example:
      "Example: Increasing lever arm distance increases the rotational effect of a force.",
    commonMistakes: [
      "Ignoring angle effects.",
      "Confusing torque with force.",
      "Using incorrect distance units.",
    ],
  },

  "friction-calculator": {
    introduction:
      "The friction calculator estimates friction force between surfaces using normal force and coefficient values.",
    formulaExplanation:
      "Friction force is calculated using F = μN where coefficient of friction is multiplied by normal force.",
    example:
      "Example: Higher normal force increases the friction force between surfaces.",
    commonMistakes: [
      "Using incorrect friction coefficients.",
      "Ignoring normal force.",
      "Mixing static and kinetic friction.",
    ],
  },

};

export const calculatorContent: Record<string, CalculatorContent> = {
  "free-fall-calculator": {
    introduction:
      "The free fall calculator helps determine falling time, distance, and final velocity when gravity is the main force acting on an object.",

    formulaExplanation:
      "Free fall calculations use constant acceleration equations with gravitational acceleration as the main variable.",

    example:
      "Example: An object falling from a height of 20 meters can be analyzed using gravity and time equations to estimate its motion.",

    commonMistakes: [
      "Using incorrect gravity values.",
      "Ignoring the difference between ideal motion and real-world air resistance.",
      "Mixing units such as meters and feet.",
    ],
  },
  
  "acceleration-calculator": {
    introduction:
      "The acceleration calculator determines how quickly velocity changes over time using velocity difference and time interval.",
    formulaExplanation:
      "Acceleration is calculated using the formula a = (v₂ - v₁) / t, where velocity change is divided by elapsed time.",
    example:
      "Example: If an object changes velocity from 10 m/s to 30 m/s in 5 seconds, its acceleration is 4 m/s².",
    commonMistakes: [
      "Using incorrect time units.",
      "Confusing velocity with acceleration.",
      "Ignoring the direction of acceleration.",
    ],
  },

  "acceleration-due-to-gravity-calculator": {
    introduction:
      "The acceleration due to gravity calculator helps analyze motion caused by Earth's gravitational acceleration.",
    formulaExplanation:
      "Near Earth's surface, gravitational acceleration is approximately 9.8 m/s² and is used in free-fall equations.",
    example:
      "Example: An object dropped from rest accelerates downward at approximately 9.8 m/s².",
    commonMistakes: [
      "Using the wrong gravity value.",
      "Ignoring unit conversions.",
      "Applying gravity formulas when other forces dominate.",
    ],
  },

  "projectile-motion-calculator": {
    introduction:
      "The projectile motion calculator analyzes two-dimensional motion using launch speed, angle, and gravity.",
    formulaExplanation:
      "Projectile motion separates velocity into horizontal and vertical components to calculate range, height, and flight time.",
    example:
      "Example: A launched object can be evaluated for maximum height and distance using its initial velocity and angle.",
    commonMistakes: [
      "Ignoring launch angle.",
      "Mixing horizontal and vertical components.",
      "Assuming air resistance is included.",
    ],
  },

  "force-calculator": {
    introduction:
      "The force calculator determines force using mass and acceleration based on Newton's second law.",
    formulaExplanation:
      "Force is calculated using F = ma, where mass is multiplied by acceleration.",
    example:
      "Example: A 5 kg object accelerating at 3 m/s² experiences a force of 15 N.",
    commonMistakes: [
      "Using incorrect mass units.",
      "Confusing weight with force.",
      "Ignoring acceleration direction.",
    ],
  },

  "momentum-calculator": {
    introduction:
      "The momentum calculator finds the quantity of motion of an object using mass and velocity.",
    formulaExplanation:
      "Momentum is calculated using p = mv, where mass is multiplied by velocity.",
    example:
      "Example: A 2 kg object moving at 5 m/s has momentum of 10 kg·m/s.",
    commonMistakes: [
      "Mixing momentum and force.",
      "Using incorrect velocity values.",
      "Ignoring direction.",
    ],
  },

  "kinetic-energy-calculator": {
    introduction:
      "The kinetic energy calculator determines energy stored in moving objects.",
    formulaExplanation:
      "Kinetic energy is calculated using KE = 1/2 mv².",
    example:
      "Example: Increasing velocity greatly increases kinetic energy because velocity is squared.",
    commonMistakes: [
      "Forgetting to square velocity.",
      "Using incorrect mass units.",
      "Confusing kinetic and potential energy.",
    ],
  },

  "work-calculator": {
    introduction:
      "The work calculator determines energy transferred when a force moves an object.",
    formulaExplanation:
      "Work is calculated using W = Fd when force acts in the direction of displacement.",
    example:
      "Example: A force moving an object over a distance transfers mechanical work.",
    commonMistakes: [
      "Ignoring displacement direction.",
      "Confusing work with power.",
      "Using inconsistent units.",
    ],
  },

  "power-calculator": {
    introduction:
      "The power calculator measures the rate of energy transfer or work completion.",
    formulaExplanation:
      "Power is calculated as P = W/t, representing work divided by time.",
    example:
      "Example: Completing the same work in less time produces greater power.",
    commonMistakes: [
      "Confusing energy and power.",
      "Using incorrect time units.",
      "Ignoring unit conversions.",
    ],
  },

  "torque-calculator": {
    introduction:
      "The torque calculator determines rotational force produced by a force applied at a distance.",
    formulaExplanation:
      "Torque is calculated using τ = rF sinθ.",
    example:
      "Example: Increasing lever arm distance increases the rotational effect of a force.",
    commonMistakes: [
      "Ignoring angle effects.",
      "Confusing torque with force.",
      "Using incorrect distance units.",
    ],
  },

  "friction-calculator": {
    introduction:
      "The friction calculator estimates friction force between surfaces using normal force and coefficient values.",
    formulaExplanation:
      "Friction force is calculated using F = μN where coefficient of friction is multiplied by normal force.",
    example:
      "Example: Higher normal force increases the friction force between surfaces.",
    commonMistakes: [
      "Using incorrect friction coefficients.",
      "Ignoring normal force.",
      "Mixing static and kinetic friction.",
    ],
  },


  "percent-error-calculator": {
    introduction:
      "The Percent error helps users calculate percent error values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard percent error equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "percent-difference-calculator": {
    introduction:
      "The Percent difference helps users calculate percent difference values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard percent difference equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "significant-figures-calculator": {
    introduction:
      "The Significant figures helps users calculate significant figures values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard significant figures equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "coefficient-variation-calculator": {
    introduction:
      "The Coefficient variation helps users calculate coefficient variation values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard coefficient variation equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "mean-median-mode-calculator": {
    introduction:
      "The Mean median mode helps users calculate mean median mode values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard mean median mode equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "standard-deviation-calculator": {
    introduction:
      "The Standard deviation helps users calculate standard deviation values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard standard deviation equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "uncertainty-propagation-calculator": {
    introduction:
      "The Uncertainty propagation helps users calculate uncertainty propagation values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard uncertainty propagation equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "measurement-uncertainty-calculator": {
    introduction:
      "The Measurement uncertainty helps users calculate measurement uncertainty values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard measurement uncertainty equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "rate-of-change-calculator": {
    introduction:
      "The Rate of change helps users calculate rate of change values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard rate of change equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "linear-regression-calculator": {
    introduction:
      "The Linear regression helps users calculate linear regression values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard linear regression equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "molarity-calculator": {
    introduction:
      "The Molarity helps users calculate molarity values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard molarity equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "molality-calculator": {
    introduction:
      "The Molality helps users calculate molality values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard molality equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "mass-moles-calculator": {
    introduction:
      "The Mass moles helps users calculate mass moles values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard mass moles equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "dilution-calculator": {
    introduction:
      "The Dilution helps users calculate dilution values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard dilution equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "molecular-weight-calculator": {
    introduction:
      "The Molecular weight helps users calculate molecular weight values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard molecular weight equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "empirical-formula-calculator": {
    introduction:
      "The Empirical formula helps users calculate empirical formula values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard empirical formula equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "molecular-formula-calculator": {
    introduction:
      "The Molecular formula helps users calculate molecular formula values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard molecular formula equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "stoichiometry-calculator": {
    introduction:
      "The Stoichiometry helps users calculate stoichiometry values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard stoichiometry equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "limiting-reactant-calculator": {
    introduction:
      "The Limiting reactant helps users calculate limiting reactant values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard limiting reactant equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "percent-yield-calculator": {
    introduction:
      "The Percent yield helps users calculate percent yield values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard percent yield equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "ph-calculator": {
    introduction:
      "The Ph helps users calculate ph values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard ph equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "ideal-gas-law-calculator": {
    introduction:
      "The Ideal gas law helps users calculate ideal gas law values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard ideal gas law equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "boyles-law-calculator": {
    introduction:
      "The Boyles law helps users calculate boyles law values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard boyles law equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "charles-law-calculator": {
    introduction:
      "The Charles law helps users calculate charles law values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard charles law equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "avogadros-law-calculator": {
    introduction:
      "The Avogadros law helps users calculate avogadros law values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard avogadros law equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "combined-gas-law-calculator": {
    introduction:
      "The Combined gas law helps users calculate combined gas law values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard combined gas law equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "gay-lussacs-law-calculator": {
    introduction:
      "The Gay lussacs law helps users calculate gay lussacs law values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard gay lussacs law equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "daltons-law-calculator": {
    introduction:
      "The Daltons law helps users calculate daltons law values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard daltons law equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "grahams-law-calculator": {
    introduction:
      "The Grahams law helps users calculate grahams law values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard grahams law equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "pulley-calculator": {
    introduction:
      "The Pulley helps users calculate pulley values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard pulley equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "inclined-plane-calculator": {
    introduction:
      "The Inclined plane helps users calculate inclined plane values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard inclined plane equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "normal-force-calculator": {
    introduction:
      "The Normal force helps users calculate normal force values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard normal force equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "weight-calculator": {
    introduction:
      "The Weight helps users calculate weight values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard weight equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "tangential-acceleration-calculator": {
    introduction:
      "The Tangential acceleration helps users calculate tangential acceleration values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard tangential acceleration equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "tangential-velocity-calculator": {
    introduction:
      "The Tangential velocity helps users calculate tangential velocity values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard tangential velocity equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "rpm-calculator": {
    introduction:
      "The Rpm helps users calculate rpm values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard rpm equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "revolutions-calculator": {
    introduction:
      "The Revolutions helps users calculate revolutions values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard revolutions equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "rotational-frequency-calculator": {
    introduction:
      "The Rotational frequency helps users calculate rotational frequency values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard rotational frequency equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "rotational-work-calculator": {
    introduction:
      "The Rotational work helps users calculate rotational work values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard rotational work equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "rotational-dynamics-calculator": {
    introduction:
      "The Rotational dynamics helps users calculate rotational dynamics values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard rotational dynamics equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "angular-impulse-calculator": {
    introduction:
      "The Angular impulse helps users calculate angular impulse values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard angular impulse equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "angular-momentum-calculator": {
    introduction:
      "The Angular momentum helps users calculate angular momentum values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard angular momentum equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "rotational-power-calculator": {
    introduction:
      "The Rotational power helps users calculate rotational power values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard rotational power equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "moment-of-inertia-calculator": {
    introduction:
      "The Moment of inertia helps users calculate moment of inertia values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard moment of inertia equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "rotational-kinetic-energy-calculator": {
    introduction:
      "The Rotational kinetic energy helps users calculate rotational kinetic energy values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard rotational kinetic energy equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "angular-acceleration-calculator": {
    introduction:
      "The Angular acceleration helps users calculate angular acceleration values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard angular acceleration equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "angular-displacement-calculator": {
    introduction:
      "The Angular displacement helps users calculate angular displacement values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard angular displacement equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "angular-velocity-calculator": {
    introduction:
      "The Angular velocity helps users calculate angular velocity values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard angular velocity equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "centripetal-acceleration-calculator": {
    introduction:
      "The Centripetal acceleration helps users calculate centripetal acceleration values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard centripetal acceleration equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "circular-velocity-calculator": {
    introduction:
      "The Circular velocity helps users calculate circular velocity values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard circular velocity equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "centripetal-force-calculator": {
    introduction:
      "The Centripetal force helps users calculate centripetal force values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard centripetal force equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "impulse-calculator": {
    introduction:
      "The Impulse helps users calculate impulse values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard impulse equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "pressure-calculator": {
    introduction:
      "The Pressure helps users calculate pressure values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard pressure equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "hookes-law-calculator": {
    introduction:
      "The Hookes law helps users calculate hookes law values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard hookes law equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "elastic-potential-energy-calculator": {
    introduction:
      "The Elastic potential energy helps users calculate elastic potential energy values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard elastic potential energy equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "gravitational-potential-energy-calculator": {
    introduction:
      "The Gravitational potential energy helps users calculate gravitational potential energy values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard gravitational potential energy equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "distance-calculator": {
    introduction:
      "The Distance helps users calculate distance values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard distance equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "displacement-calculator": {
    introduction:
      "The Displacement helps users calculate displacement values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard displacement equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "average-speed-calculator": {
    introduction:
      "The Average speed helps users calculate average speed values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard average speed equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "average-velocity-calculator": {
    introduction:
      "The Average velocity helps users calculate average velocity values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard average velocity equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "kinematic-equations-calculator": {
    introduction:
      "The Kinematic equations helps users calculate kinematic equations values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard kinematic equations equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "density-calculator": {
    introduction:
      "The Density helps users calculate density values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard density equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },


  "specific-heat-calculator": {
    introduction:
      "The Specific heat helps users calculate specific heat values with clear scientific explanations and reliable calculation steps.",

    formulaExplanation:
      "This calculator applies the standard specific heat equations and scientific relationships used in educational and laboratory calculations.",

    example:
      "Example: Enter the required scientific values to calculate the result and understand how the formula is applied.",

    commonMistakes: [
      "Using incorrect input values or units.",
      "Ignoring the assumptions behind the scientific formula.",
      "Mixing incompatible measurement systems.",
    ],
  },

};