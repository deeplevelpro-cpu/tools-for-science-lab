import fs from "fs";

const file =
  "src/app/calculators/projectile-motion-calculator/page.tsx";

let text = fs.readFileSync(file, "utf8");

if (!text.includes("createCalculatorFAQSchema")) {
  text = text.replace(
`import {
  createCalculatorBreadcrumbSchema,
  createCalculatorSchema,
} from "@/lib/seo/calculator-schema";`,
`import {
  createCalculatorBreadcrumbSchema,
  createCalculatorSchema,
} from "@/lib/seo/calculator-schema";

import { createCalculatorFAQSchema } from "@/lib/seo/calculator-faq-schema";
import { CalculatorFAQ } from "@/components/calculator-content/calculator-faq";`
  );
}

text = text.replace(
`const breadcrumbSchema =
  createCalculatorBreadcrumbSchema({`,
`const faqSchema =
  createCalculatorFAQSchema("projectile-motion-calculator");

const breadcrumbSchema =
  createCalculatorBreadcrumbSchema({`
);

text = text.replace(
`      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(
            /</g,
            "\\\\u003c",
          ),
        }}
      />`,
`      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(
            /</g,
            "\\\\u003c",
          ),
        }}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(
              /</g,
              "\\\\u003c",
            ),
          }}
        />
      )`
);

text = text.replace(
`          </article>
        </Container>
      </section>`,
`          <CalculatorFAQ slug="projectile-motion-calculator" />

          </article>
        </Container>
      </section>`
);

fs.writeFileSync(file, text);

console.log("projectile FAQ integration complete");
