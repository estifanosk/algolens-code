import { parseAssignments } from "../shared/io.js";
export const implemented = true;
export function solve(input) {
  let { g, s } = parseAssignments(input);
  g = [...g].sort((a, b) => a - b);
  s = [...s].sort((a, b) => a - b);
  let child = 0, cookie = 0;
  while (child < g.length && cookie < s.length) {
    if (s[cookie] >= g[child]) child++;
    cookie++;
  }
  return child;
}
