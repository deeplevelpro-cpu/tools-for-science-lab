import Link from "next/link";

const resources = [
  {
    href: "/lab-reports/how-to-write-a-lab-report",
    title: "How to Write a Lab Report",
  },
  {
    href: "/lab-reports/lab-report-format",
    title: "Lab Report Format Guide",
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

export function RelatedTemplateResources() {
  return (
    <section aria-labelledby="related-template-resources-heading">
      <p className="eyebrow">
        Continue learning
      </p>

      <h2 id="related-template-resources-heading">
        Related science resources
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
