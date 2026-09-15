import Link from "next/link";

const resources = [
  {
    href: "/templates/scientific-method-worksheet",
    title: "Scientific Method Worksheet",
  },
  {
    href: "/templates/experiment-planning-template",
    title: "Experiment Planning Template",
  },
  {
    href: "/templates/data-table-template",
    title: "Scientific Data Table Template",
  },
  {
    href: "/calculators/measurement-uncertainty-calculator",
    title: "Measurement Uncertainty Calculator",
  },
  {
    href: "/calculators/standard-deviation-calculator",
    title: "Standard Deviation Calculator",
  },
  {
    href: "/calculators/linear-regression-calculator",
    title: "Linear Regression Calculator",
  },
];

export function RelatedScientificMethodResources() {
  return (
    <section aria-labelledby="related-method-resources-heading">
      <p className="eyebrow">
        Continue learning
      </p>

      <h2 id="related-method-resources-heading">
        Scientific method resources
      </h2>

      <ul className="article-list">
        {resources.map((resource) => (
          <li key={resource.href}>
            <Link href={resource.href}>
              {resource.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
