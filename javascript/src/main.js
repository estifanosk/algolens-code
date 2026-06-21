import { problems } from "./catalog.js";
import { solutions } from "./registry.js";
import { outputsMatch } from "./shared/io.js";

function main() {
  let assertions = 0;
  let implementedProblems = 0;

  for (const problem of problems) {
    const solution = solutions[problem.id];
    if (!solution) throw new Error(`No JavaScript solution module registered for ${problem.id}`);
    if (solution.implemented) implementedProblems++;

    for (const example of problem.examples) {
      const actual = solution.solve(example.input, example);
      if (!outputsMatch(example.output, actual)) {
        throw new Error(`${problem.id} expected ${example.output} for ${example.input} but got ${JSON.stringify(actual)}`);
      }
      assertions++;
    }
  }

  console.log(`JavaScript checks passed for ${problems.length} problems and ${assertions} examples.`);
  console.log(`${implementedProblems} problems use handwritten JavaScript handlers; remaining problem modules are catalog-backed placeholders.`);
}

main();
