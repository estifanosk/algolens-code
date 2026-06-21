import { parseAssignments } from "../shared/io.js";
export const implemented = true;
export function solve(input) {
  const { s, t } = parseAssignments(input);
  if (t.length > s.length) return "";
  const need = new Map();
  for (const char of t) need.set(char, (need.get(char) ?? 0) + 1);
  const window = new Map();
  let have = 0, left = 0, bestLen = Infinity, bestLeft = 0;
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    window.set(char, (window.get(char) ?? 0) + 1);
    if (need.has(char) && window.get(char) === need.get(char)) have++;
    while (have === need.size) {
      if (right - left + 1 < bestLen) {
        bestLen = right - left + 1;
        bestLeft = left;
      }
      const leftChar = s[left];
      window.set(leftChar, window.get(leftChar) - 1);
      if (need.has(leftChar) && window.get(leftChar) < need.get(leftChar)) have--;
      left++;
    }
  }
  return bestLen === Infinity ? "" : s.slice(bestLeft, bestLeft + bestLen);
}
