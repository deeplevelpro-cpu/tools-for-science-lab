import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/seo/url";

type PageJsonLdProps = {
  title: string;
  description: string;
  path: string;
};

export function PageJsonLd({
  title,
  description,
  path,
}: PageJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(path),

    dateModified:
      siteConfig.review.lastReviewed,

    author: {
      "@type": "Organization",
      name: siteConfig.review.publisher,
      url: absoluteUrl("/"),
    },

    publisher: {
      "@type": "Organization",
      name: siteConfig.review.publisher,
      url: absoluteUrl("/"),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
