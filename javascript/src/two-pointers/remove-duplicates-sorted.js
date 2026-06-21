import { parseAssignments } from "../shared/io.js";
export const implemented = true;
export function solve(input) {
  const { nums } = parseAssignments(input);
  if (nums.length === 0) return 0;
  let write = 1;
  for (let read = 1; read < nums.length; read++) {
    if (nums[read] !== nums[read - 1]) nums[write++] = nums[read];
  }
  return write;
}
