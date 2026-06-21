import { parseAssignments } from "../shared/io.js";
export const implemented = true;
export function solve(input) {
  const { people } = parseAssignments(input);
  const sorted = people.map((p) => [...p]).sort((a, b) => b[0] - a[0] || a[1] - b[1]);
  const queue = [];
  for (const person of sorted) queue.splice(person[1], 0, person);
  return queue;
}
