import { parseAssignments } from "../shared/io.js";
export const implemented = true;
export function solve(input) {
  const { s } = parseAssignments(input);
  let left = 0, right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++; right--;
  }
  return s;
}
