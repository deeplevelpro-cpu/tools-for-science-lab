import fs from "fs";

const targets = {
  "acceleration-calculator": {
    component: "AccelerationCalculator",
    subject: "physics",
  },
  "acceleration-due-to-gravity-calculator": {
    component: "AccelerationDueToGravityCalculator",
    subject: "physics",
  },
  "angular-acceleration-calculator": {
    component: "AngularAccelerationCalculator",
    subject: "physics",
  },
  "angular-displacement-calculator": {
    component: "AngularDisplacementCalculator",
    subject: "physics",
  },
  "angular-impulse-calculator": {
    component: "AngularImpulseCalculator",
    subject: "physics",
  },
  "angular-momentum-calculator": {
    component: "AngularMomentumCalculator",
    subject: "physics",
  },
  "angular-velocity-calculator": {
    component: "AngularVelocityCalculator",
    subject: "physics",
  },
  "average-speed-calculator": {
    component: "AverageSpeedCalculator",
    subject: "physics",
  },
  "average-velocity-calculator": {
    component: "AverageVelocityCalculator",
    subject: "physics",
  },
};

for (const [slug, config] of Object.entries(targets)) {
  const file =
    `src/app/calculators/${slug}/page.tsx`;

  let text = fs.readFileSync(file, "utf8");

  if (text.includes("CalculatorPageShell") &&
      text.includes(`<${config.component}`)) {
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


  const componentRegex =
    new RegExp(
      `<${config.component}\\s*\\/?>`,
      "g"
    );


  text = text.replace(
    componentRegex,
    `<CalculatorPageShell\n          slug="${slug}"\n          subject="${config.subject}"\n        >\n          <${config.component} />\n        </CalculatorPageShell>`
  );


  fs.writeFileSync(file, text);

  console.log("wrapped", slug);
}
