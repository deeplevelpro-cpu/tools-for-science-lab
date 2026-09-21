import fs from "fs";

const files = [
  "src/app/calculators/physics/page.tsx",
  "src/app/calculators/chemistry/page.tsx",
  "src/app/calculators/laboratory/page.tsx",
];

for (const file of files) {
  let text = fs.readFileSync(file, "utf8");

  if (!text.includes("JSON.stringify(faqSchema)")) {
    text = text.replace(
`      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(categorySchema).replace(
            /</g,
            "\\\\u003c",
          ),
        }}
      />`,
`
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(categorySchema).replace(
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
      )}
`
    );
  }

  if (!text.includes("<CategoryFAQ")) {
    text = text.replace(
`      <CalculatorCategoryPage
        category={category}
        calculators={`,
`
      <CalculatorCategoryPage
        category={category}
        calculators={`
    );

    text = text.replace(
`      />
    </>
  );`,
`      />

      <CategoryFAQ slug="${file.split("/")[3]}" />
    </>
  );`
    );
  }

  fs.writeFileSync(file, text);

  console.log("fixed", file);
}

console.log("category FAQ rendering complete");
