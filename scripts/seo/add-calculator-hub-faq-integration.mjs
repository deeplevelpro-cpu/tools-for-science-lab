import fs from "fs";

const file =
  "src/app/calculators/page.tsx";

let text = fs.readFileSync(file, "utf8");

if (!text.includes("CalculatorHubFAQ")) {
  text =
`import { CalculatorHubFAQ } from "@/components/calculator-content/calculator-hub-faq";
` + text;
}

if (!text.includes("createCalculatorHubFAQSchema")) {
  text = text.replace(
`import { createCollectionSchema } from "@/lib/seo/collection-schema";`,
`import { createCollectionSchema } from "@/lib/seo/collection-schema";
import { createCalculatorHubFAQSchema } from "@/lib/seo/calculator-hub-faq-schema";`
  );
}

if (!text.includes("faqSchema")) {
  text = text.replace(
`const collectionSchema = createCollectionSchema({`,
`const faqSchema = createCalculatorHubFAQSchema();

const collectionSchema = createCollectionSchema({`
  );
}

if (!text.includes("JSON.stringify(faqSchema)")) {
  text = text.replace(
`      <section className="directory-hero">`,
`
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(
            /</g,
            "\\\\u003c",
          ),
        }}
      />

      <section className="directory-hero">`
  );
}

if (!text.includes("<CalculatorHubFAQ />")) {
  text = text.replace(
`        </Container>
      </section>

    </main>`,
`        </Container>
      </section>

      <section className="directory-section">
        <Container>
          <CalculatorHubFAQ />
        </Container>
      </section>

    </main>`
  );
}

fs.writeFileSync(file, text);

console.log("calculator hub FAQ integration complete");
