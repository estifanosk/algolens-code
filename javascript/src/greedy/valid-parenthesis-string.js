import { parseAssignments } from "../shared/io.js";
export const implemented = true;
export function solve(input) {
  const { s } = parseAssignments(input);
  let low = 0, high = 0;
  for (const char of s) {
    if (char === "(") { low++; high++; }
    else if (char === ")") { low = Math.max(0, low - 1); high--; }
    else { low = Math.max(0, low - 1); high++; }
    if (high < 0) return false;
  }
  return low === 0;
}
