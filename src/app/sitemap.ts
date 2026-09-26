import type { MetadataRoute } from "next";

import { calculators } from "@/content/calculators/registry";
import { labReportResources } from "@/content/lab-reports/registry";
import { scientificMethodResources } from "@/content/scientific-method/registry";
import { templateResources } from "@/content/templates/registry";
import { absoluteUrl } from "@/lib/seo/url";


export default function sitemap(): MetadataRoute.Sitemap {
  const calculatorPages = calculators.map(
    (calculator) => ({
      url: absoluteUrl(calculator.href),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    }),
  );

  const educationalPages = [
    ...labReportResources,
    ...scientificMethodResources,
    ...templateResources,
  ].map((resource) => ({
    url: absoluteUrl(resource.href),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: absoluteUrl("/"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/about"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: absoluteUrl("/editorial-policy"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: absoluteUrl("/methodology"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: absoluteUrl("/references"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: absoluteUrl("/authors"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: absoluteUrl("/disclaimer"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: absoluteUrl("/privacy-policy"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: absoluteUrl("/terms-of-use"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: absoluteUrl("/calculators"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/calculators/physics"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/calculators/chemistry"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/calculators/laboratory"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/calculators/dynamics"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/calculators/thermodynamics"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/calculators/electricity"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/lab-reports"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/scientific-method"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/templates"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...calculatorPages,
    ...educationalPages,
  ];
}
