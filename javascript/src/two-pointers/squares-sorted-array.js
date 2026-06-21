import { parseAssignments } from "../shared/io.js";
export const implemented = true;
export function solve(input) {
  const { nums } = parseAssignments(input);
  const result = Array(nums.length);
  let left = 0, right = nums.length - 1;
  for (let write = nums.length - 1; write >= 0; write--) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[write] = nums[left] * nums[left++];
    } else {
      result[write] = nums[right] * nums[right--];
    }
  }
  return result;
}
