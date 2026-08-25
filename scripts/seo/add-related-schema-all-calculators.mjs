import fs from "fs";
import path from "path";

const base = "src/app/calculators";

const files = [];

function scan(dir) {
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);

    if (fs.statSync(full).isDirectory()) {
      scan(full);
    }

    if (item === "page.tsx") {
      files.push(full);
    }
  }
}

scan(base);

for (const file of files) {
  let text = fs.readFileSync(file, "utf8");

  if (!text.includes("getRelatedCalculators")) {
    continue;
  }

  if (text.includes("relatedCalculators:")) {
    continue;
  }

  text = text.replace(
`  category: "Physics",
});`,
`  category: "Physics",
  relatedCalculators:
    relatedCalculators.map((calculator) => ({
      name: calculator.name,
      href: calculator.href,
    })),
});`
  );

  text = text.replace(
`  category: "Chemistry",
});`,
`  category: "Chemistry",
  relatedCalculators:
    relatedCalculators.map((calculator) => ({
      name: calculator.name,
      href: calculator.href,
    })),
});`
  );

  text = text.replace(
`  category: "Laboratory",
});`,
`  category: "Laboratory",
  relatedCalculators:
    relatedCalculators.map((calculator) => ({
      name: calculator.name,
      href: calculator.href,
    })),
});`
  );

  fs.writeFileSync(file, text);
  console.log("updated", file);
}

console.log("Done");
