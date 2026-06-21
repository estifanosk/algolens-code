import { parseAssignments } from "../shared/io.js";
export const implemented = true;
export function solve(input) {
  const { target, nums } = parseAssignments(input);
  let left = 0, total = 0, best = Infinity;
  for (let right = 0; right < nums.length; right++) {
    total += nums[right];
    while (total >= target) {
      best = Math.min(best, right - left + 1);
      total -= nums[left];
      left++;
    }
  }
  return best === Infinity ? 0 : best;
}
