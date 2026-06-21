import { parseAssignments } from "../shared/io.js";
export const implemented = true;
export function solve(input) {
  const { nums, k } = parseAssignments(input);
  let sum = nums.slice(0, k).reduce((acc, value) => acc + value, 0);
  let best = sum;
  for (let right = k; right < nums.length; right++) {
    sum += nums[right] - nums[right - k];
    best = Math.max(best, sum);
  }
  return best / k;
}
