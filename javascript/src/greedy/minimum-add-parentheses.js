import { parseAssignments } from "../shared/io.js";
export const implemented = true;
export function solve(input) {
  const { s } = parseAssignments(input);
  let open = 0, adds = 0;
  for (const char of s) {
    if (char === "(") open++;
    else if (open > 0) open--;
    else adds++;
  }
  return adds + open;
}
