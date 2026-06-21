import { parseAssignments } from "../shared/io.js";
export const implemented = true;
export function solve(input) {
  const { s, k } = parseAssignments(input);
  const counts = Array(26).fill(0);
  let left = 0, maxFreq = 0, best = 0;
  for (let right = 0; right < s.length; right++) {
    const idx = s.charCodeAt(right) - 65;
    counts[idx]++;
    maxFreq = Math.max(maxFreq, counts[idx]);
    while (right - left + 1 - maxFreq > k) {
      counts[s.charCodeAt(left) - 65]--;
      left++;
    }
    best = Math.max(best, right - left + 1);
  }
  return best;
}
