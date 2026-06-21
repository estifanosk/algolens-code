import { parseAssignments } from "../shared/io.js";
export const implemented = true;
export function solve(input) {
  let { hand, groupSize } = parseAssignments(input);
  if (hand.length % groupSize !== 0) return false;
  const counts = new Map();
  for (const card of hand) counts.set(card, (counts.get(card) ?? 0) + 1);
  hand = [...new Set(hand)].sort((a, b) => a - b);
  for (const card of hand) {
    const count = counts.get(card) ?? 0;
    if (count === 0) continue;
    for (let value = card; value < card + groupSize; value++) {
      if ((counts.get(value) ?? 0) < count) return false;
      counts.set(value, counts.get(value) - count);
    }
  }
  return true;
}
