import { parseAssignments } from "../shared/io.js";
export const implemented = true;
export function solve(input) {
  const { prices } = parseAssignments(input);
  let minPrice = Infinity, best = 0;
  for (const price of prices) {
    minPrice = Math.min(minPrice, price);
    best = Math.max(best, price - minPrice);
  }
  return best;
}
