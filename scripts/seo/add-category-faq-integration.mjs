import fs from "fs";

const pages = [
  [
    "src/app/calculators/physics/page.tsx",
    "physics",
  ],
  [
    "src/app/calculators/chemistry/page.tsx",
    "chemistry",
  ],
  [
    "src/app/calculators/laboratory/page.tsx",
    "laboratory",
  ],
];

for (const [file, slug] of pages) {
  let text = fs.readFileSync(file, "utf8");

  if (!text.includes("CategoryFAQ")) {
    text =
`import { CategoryFAQ } from "@/components/calculator-content/category-faq";
` + text;
  }

  if (!text.includes("createCategoryFAQSchema")) {
    text = text.replace(
`import { siteConfig } from "@/config/site";`,
`import { siteConfig } from "@/config/site";
import { createCategoryFAQSchema } from "@/lib/seo/category-faq-schema";`
    );
  }

  if (!text.includes("faqSchema")) {
    text = text.replace(
`const category`,
`const faqSchema =
  createCategoryFAQSchema("${slug}");

const category`
    );
  }

  if (!text.includes("JSON.stringify(faqSchema)")) {
    text = text.replace(
`    </main>`,
`      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(
              /</g,
              "\\\\u003c",
            ),
          }}
        />
      )}

    </main>`
    );
  }

  if (!text.includes("<CategoryFAQ")) {
    text = text.replace(
`        </Container>
      </section>`,
`        </Container>
      </section>

      <section className="article-section">
        <Container>
          <CategoryFAQ slug="${slug}" />
        </Container>
      </section>`
    );
  }

  fs.writeFileSync(file, text);

  console.log("updated", file);
}

console.log("category FAQ integration complete");
