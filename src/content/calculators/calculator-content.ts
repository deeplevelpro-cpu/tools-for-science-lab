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

};
