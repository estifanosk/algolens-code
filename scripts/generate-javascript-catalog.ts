import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { problems } from "/Users/estifanoskidane/projects/algolens/lib/data/patterns.ts";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const outDir = join(root, "javascript", "src");

mkdirSync(outDir, { recursive: true });

const catalog = problems.map((problem) => ({
  id: problem.id,
  title: problem.title,
  patternId: problem.patternId,
  examples: problem.examples.map((example) => ({
    input: example.input,
    output: example.output,
    grid: example.grid,
  })),
}));

const content = `// Generated from ~/projects/algolens/lib/data/patterns.ts.
// Run: npx tsx scripts/generate-javascript-catalog.ts

export const problems = ${JSON.stringify(catalog, null, 2)};
`;

writeFileSync(join(outDir, "catalog.js"), content);
console.log(`Wrote ${catalog.length} JavaScript problem catalog entries.`);
