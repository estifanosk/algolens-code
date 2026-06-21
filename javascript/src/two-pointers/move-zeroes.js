import { parseAssignments } from "../shared/io.js";
export const implemented = true;
export function solve(input) {
  const { nums } = parseAssignments(input);
  let write = 0;
  for (const value of nums) if (value !== 0) nums[write++] = value;
  while (write < nums.length) nums[write++] = 0;
  return nums;
}
