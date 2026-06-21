import { parseAssignments } from "../shared/io.js";
export const implemented = true;
export function solve(input) {
  const { nums } = parseAssignments(input);
  let low = 0, mid = 0, high = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] === 0) [nums[low++], nums[mid++]] = [nums[mid], nums[low]];
    else if (nums[mid] === 2) [nums[mid], nums[high--]] = [nums[high], nums[mid]];
    else mid++;
  }
  return nums;
}
