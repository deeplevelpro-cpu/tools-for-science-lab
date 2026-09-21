import fs from "fs";

const file =
"src/content/calculators/expert-content.ts";

let text = fs.readFileSync(file, "utf8");

const addition = `

  "mean-median-mode-calculator": {
    formulaExplanation:
      "Mean, median, and mode calculations describe central tendency by finding average values, middle values, and most frequent values in a dataset.",
    example:
      "Example: The mean provides an overall average while the median represents the middle value after sorting data.",
    commonMistakes: [
      "Ignoring data sorting when finding the median.",
      "Using incorrect data values.",
      "Confusing mean with median."
    ],
  },

  "standard-deviation-calculator": {
    formulaExplanation:
      "Standard deviation measures how spread out data values are from the average and indicates data variability.",
    example:
      "Example: A smaller standard deviation means data points are closer to the average value.",
    commonMistakes: [
      "Using the wrong dataset.",
      "Confusing variance with standard deviation.",
      "Ignoring sample or population differences."
    ],
  },

  "linear-regression-calculator": {
    formulaExplanation:
      "Linear regression analyzes relationships between variables by finding the best-fit straight line through data points.",
    example:
      "Example: Regression can predict future values based on trends in experimental measurements.",
    commonMistakes: [
      "Assuming correlation proves causation.",
      "Using insufficient data points.",
      "Ignoring outliers."
    ],
  },

  "coefficient-variation-calculator": {
    formulaExplanation:
      "Coefficient of variation compares data variability relative to the mean and is useful for comparing datasets with different scales.",
    example:
      "Example: A lower coefficient of variation indicates more consistent measurements.",
    commonMistakes: [
      "Using datasets with zero mean.",
      "Confusing coefficient variation with standard deviation.",
      "Ignoring measurement units."
    ],
  },

  "percent-error-calculator": {
    formulaExplanation:
      "Percent error measures the difference between an experimental value and an accepted value relative to the accepted value.",
    example:
      "Example: Experimental results can be evaluated by comparing them with known reference values.",
    commonMistakes: [
      "Using the wrong reference value.",
      "Ignoring absolute differences.",
      "Mixing percentage and decimal formats."
    ],
  },

  "percent-difference-calculator": {
    formulaExplanation:
      "Percent difference compares two experimental or measured values when neither value is considered the accepted reference.",
    example:
      "Example: Two laboratory measurements can be compared to evaluate agreement between results.",
    commonMistakes: [
      "Using percent error instead.",
      "Choosing an incorrect average value.",
      "Ignoring measurement units."
    ],
  },

  "percent-yield-calculator": {
    formulaExplanation:
      "Percent yield compares actual product obtained from an experiment with the theoretical maximum product predicted by calculations.",
    example:
      "Example: Chemical reactions often produce less product than theoretical calculations due to practical limitations.",
    commonMistakes: [
      "Using incorrect theoretical yield.",
      "Confusing actual and expected results.",
      "Ignoring unit conversions."
    ],
  },

  "significant-figures-calculator": {
    formulaExplanation:
      "Significant figures represent the precision of measured values and communicate the reliability of scientific measurements.",
    example:
      "Example: Measurements should be rounded according to significant figure rules after calculations.",
    commonMistakes: [
      "Rounding too early.",
      "Counting placeholder zeros incorrectly.",
      "Ignoring measurement precision."
    ],
  },

  "measurement-uncertainty-calculator": {
    formulaExplanation:
      "Measurement uncertainty estimates the possible range of error in experimental measurements and improves result reliability.",
    example:
      "Example: Scientific measurements are often reported with uncertainty values to show confidence limits.",
    commonMistakes: [
      "Ignoring instrument limitations.",
      "Using inconsistent measurements.",
      "Reporting excessive precision."
    ],
  },

  "uncertainty-propagation-calculator": {
    formulaExplanation:
      "Uncertainty propagation determines how measurement errors combine when multiple values are used in calculations.",
    example:
      "Example: Combining uncertain measurements requires considering the uncertainty contribution of each input.",
    commonMistakes: [
      "Ignoring uncertainty from variables.",
      "Using incorrect propagation methods.",
      "Reporting unrealistic precision."
    ],
  },
`;

text = text.replace(
  /\n};\s*$/,
  `${addition}\n};`
);

fs.writeFileSync(file, text);

console.log("measurement statistics expert content added");
