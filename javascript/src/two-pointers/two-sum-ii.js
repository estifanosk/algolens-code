import { parseAssignments } from "../shared/io.js";
export const implemented = true;
export function solve(input) {
  const { numbers, target } = parseAssignments(input);
  let left = 0, right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    if (sum < target) left++; else right--;
  }
  return [];
}
