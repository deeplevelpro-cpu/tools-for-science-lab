import fs from "fs";

const targets = {
  "centripetal-acceleration-calculator": "CentripetalAccelerationCalculator",
  "centripetal-force-calculator": "CentripetalForceCalculator",
  "circular-velocity-calculator": "CircularVelocityCalculator",
  "force-calculator": "ForceCalculator",
  "friction-calculator": "FrictionCalculator",
  "free-fall-calculator": "FreeFallCalculator",
  "gravitational-potential-energy-calculator": "GravitationalPotentialEnergyCalculator",
  "hookes-law-calculator": "HookesLawCalculator",
  "impulse-calculator": "ImpulseCalculator",
  "inclined-plane-calculator": "InclinedPlaneCalculator",
  "kinematic-equations-calculator": "KinematicEquationsCalculator",
  "kinetic-energy-calculator": "KineticEnergyCalculator",
  "momentum-calculator": "MomentumCalculator",
  "normal-force-calculator": "NormalForceCalculator",
  "power-calculator": "PowerCalculator",
  "projectile-motion-calculator": "ProjectileMotionCalculator",
  "pulley-calculator": "PulleyCalculator",
  "rate-of-change-calculator": "RateOfChangeCalculator",
  "work-calculator": "WorkCalculator",
};

for (const [slug, component] of Object.entries(targets)) {

  const file =
    `src/app/calculators/${slug}/page.tsx`;

  if (!fs.existsSync(file)) {
    console.log("missing", slug);
    continue;
  }

  let text = fs.readFileSync(file, "utf8");


  if (
    text.includes("CalculatorPageShell") &&
    text.includes(`<${component}`)
  ) {
    console.log("already wrapped", slug);
    continue;
  }


  text = text.replace(
    /import \{ CalculatorContentLoader \} from "@\/components\/calculator-content\/calculator-content-loader";\n/g,
    ""
  );

  text = text.replace(
    /import \{ CalculatorTrustPanel \} from "@\/components\/calculator-trust";\n/g,
    ""
  );

  text = text.replace(
    /import \{ RelatedCalculators \} from "@\/components\/related-calculators";\n/g,
    ""
  );

  text = text.replace(
    /import \{ getRelatedCalculators \} from "@\/content\/calculators\/get-related-calculators";\n/g,
    ""
  );

  text = text.replace(
    /import \{ calculators \} from "@\/content\/calculators\/registry";\n/g,
    ""
  );


  text = text.replace(
    /const relatedCalculators = getRelatedCalculators\([\s\S]*?\);\n\n/,
    ""
  );


  text = text.replace(
    /<CalculatorContentLoader[\s\S]*?\/>\s*/,
    ""
  );


  text = text.replace(
    /<CalculatorTrustPanel[\s\S]*?\/>\s*/,
    ""
  );


  text = text.replace(
    /<RelatedCalculators[\s\S]*?\/>\s*/,
    ""
  );


  text = text.replace(
    new RegExp(`<${component}\\s*\\/?>`, "g"),
    `<CalculatorPageShell
          slug="${slug}"
          subject="physics"
        >
          <${component} />
        </CalculatorPageShell>`
  );


  fs.writeFileSync(file, text);

  console.log("wrapped", slug);
}
