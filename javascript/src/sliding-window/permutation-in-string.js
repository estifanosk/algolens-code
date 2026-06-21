import { parseAssignments } from "../shared/io.js";
export const implemented = true;
export function solve(input) {
  const { s1, s2 } = parseAssignments(input);
  if (s1.length > s2.length) return false;
  const need = Array(26).fill(0), window = Array(26).fill(0);
  for (const char of s1) need[char.charCodeAt(0) - 97]++;
  for (let right = 0; right < s2.length; right++) {
    window[s2.charCodeAt(right) - 97]++;
    if (right >= s1.length) window[s2.charCodeAt(right - s1.length) - 97]--;
    if (need.every((value, index) => value === window[index])) return true;
  }
  return false;
}
