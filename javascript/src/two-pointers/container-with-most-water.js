import { parseAssignments } from "../shared/io.js";
export const implemented = true;
export function solve(input) {
  const { height } = parseAssignments(input);
  let left = 0, right = height.length - 1, best = 0;
  while (left < right) {
    best = Math.max(best, Math.min(height[left], height[right]) * (right - left));
    if (height[left] < height[right]) left++; else right--;
  }
  return best;
}
