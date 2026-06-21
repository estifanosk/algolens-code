import { parseAssignments } from "../shared/io.js";
export const implemented = true;
export function solve(input) {
  const { gas, cost } = parseAssignments(input);
  let total = 0, tank = 0, start = 0;
  for (let i = 0; i < gas.length; i++) {
    const gain = gas[i] - cost[i];
    total += gain; tank += gain;
    if (tank < 0) { start = i + 1; tank = 0; }
  }
  return total >= 0 ? start : -1;
}
