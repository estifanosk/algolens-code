import { parseAssignments } from "../shared/io.js";
export const implemented = true;
export function solve(input) {
  const { nums, k } = parseAssignments(input);
  let left = 0, zeros = 0, best = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeros++;
    while (zeros > k) {
      if (nums[left] === 0) zeros--;
      left++;
    }
    best = Math.max(best, right - left + 1);
  }
  return best;
}
