import { parseAssignments } from "../shared/io.js";
export const implemented = true;
export function solve(input) {
  const { height } = parseAssignments(input);
  let left = 0, right = height.length - 1, leftMax = 0, rightMax = 0, water = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      water += leftMax - height[left];
      left++;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      water += rightMax - height[right];
      right--;
    }
  }
  return water;
}
