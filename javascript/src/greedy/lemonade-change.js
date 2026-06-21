import { parseAssignments } from "../shared/io.js";
export const implemented = true;
export function solve(input) {
  const { bills } = parseAssignments(input);
  let five = 0, ten = 0;
  for (const bill of bills) {
    if (bill === 5) five++;
    else if (bill === 10) {
      if (five === 0) return false;
      five--; ten++;
    } else if (ten > 0 && five > 0) {
      ten--; five--;
    } else if (five >= 3) five -= 3;
    else return false;
  }
  return true;
}
