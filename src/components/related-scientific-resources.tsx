import Link from "next/link";

const resources = [
  {
    href: "/scientific-method/steps-of-the-scientific-method",
    title: "Steps of the Scientific Method",
  },
  {
    href: "/scientific-method/experimental-design",
    title: "How to Design a Scientific Experiment",
  },
  {
    href: "/templates/printable-lab-report-template",
    title: "Printable Lab Report Template",
  },
  {
    href: "/templates/experiment-planning-template",
    title: "Experiment Planning Template",
  },
];

export function RelatedScientificResources() {
  return (
    <section aria-labelledby="related-scientific-resources-heading">
      <p className="eyebrow">
        Continue learning
      </p>

      <h2 id="related-scientific-resources-heading">
        Related scientific resources
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
