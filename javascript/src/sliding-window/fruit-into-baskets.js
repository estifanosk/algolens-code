import { parseAssignments } from "../shared/io.js";
export const implemented = true;
export function solve(input) {
  const { fruits } = parseAssignments(input);
  const counts = new Map();
  let left = 0, best = 0;
  for (let right = 0; right < fruits.length; right++) {
    counts.set(fruits[right], (counts.get(fruits[right]) ?? 0) + 1);
    while (counts.size > 2) {
      const fruit = fruits[left];
      counts.set(fruit, counts.get(fruit) - 1);
      if (counts.get(fruit) === 0) counts.delete(fruit);
      left++;
    }
    best = Math.max(best, right - left + 1);
  }
  return best;
}
