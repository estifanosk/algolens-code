import { BestTimeToBuyStock } from "./sliding-window/best-time-to-buy-stock.js";
import { FruitIntoBaskets } from "./sliding-window/fruit-into-baskets.js";
import { LongestRepeatingCharReplacement } from "./sliding-window/longest-repeating-char-replacement.js";
import { LongestSubstringNoRepeat } from "./sliding-window/longest-substring-no-repeat.js";
import { MaxConsecutiveOnes } from "./sliding-window/max-consecutive-ones.js";
import { MaximumAverageSubarray } from "./sliding-window/maximum-average-subarray.js";
import { MinimumSizeSubarraySum } from "./sliding-window/minimum-size-subarray-sum.js";
import { MinimumWindowSubstring } from "./sliding-window/minimum-window-substring.js";
import { PermutationInString } from "./sliding-window/permutation-in-string.js";
import { SubarrayProductLessThanK } from "./sliding-window/subarray-product-less-than-k.js";
import { GreedyAlgorithms } from "./greedy/greedy-algorithms.js";
import { ContainerWithMostWater } from "./two-pointers/container-with-most-water.js";
import { MoveZeroes } from "./two-pointers/move-zeroes.js";
import { RemoveDuplicatesSorted } from "./two-pointers/remove-duplicates-sorted.js";
import { ReverseString } from "./two-pointers/reverse-string.js";
import { SortColors } from "./two-pointers/sort-colors.js";
import { SquaresSortedArray } from "./two-pointers/squares-sorted-array.js";
import { ThreeSum } from "./two-pointers/three-sum.js";
import { TrappingRainWater } from "./two-pointers/trapping-rain-water.js";
import { TwoSumII } from "./two-pointers/two-sum-ii.js";
import { ValidPalindrome } from "./two-pointers/valid-palindrome.js";

function assertEqual<T>(expected: T, actual: T, name: string): void {
  if (expected !== actual) {
    throw new Error(`${name} expected ${String(expected)} but got ${String(actual)}`);
  }
}

function assertFloatEqual(expected: number, actual: number, name: string): void {
  if (Math.abs(expected - actual) > 0.00001) {
    throw new Error(`${name} expected ${expected} but got ${actual}`);
  }
}

function assertArrayEqual<T>(expected: T[], actual: T[], name: string): void {
  if (expected.length !== actual.length || expected.some((value, index) => value !== actual[index])) {
    throw new Error(`${name} expected ${JSON.stringify(expected)} but got ${JSON.stringify(actual)}`);
  }
}

function assertNestedArrayEqual<T>(expected: T[][], actual: T[][], name: string): void {
  if (
    expected.length !== actual.length ||
    expected.some((row, index) => row.length !== actual[index]?.length || row.some((value, col) => value !== actual[index][col]))
  ) {
    throw new Error(`${name} expected ${JSON.stringify(expected)} but got ${JSON.stringify(actual)}`);
  }
}

function assertQueueValid(queue: number[][]): void {
  queue.forEach((person, i) => {
    const count = queue.slice(0, i).filter((earlier) => earlier[0] >= person[0]).length;
    assertEqual(person[1], count, "queue-reconstruction-height");
  });
}

assertEqual(6, new MaxConsecutiveOnes().longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2), "max-consecutive-ones");
assertEqual(3, new LongestSubstringNoRepeat().lengthOfLongestSubstring("abcabcbb"), "longest-substring-no-repeat");
assertEqual(5, new BestTimeToBuyStock().maxProfit([7,1,5,3,6,4]), "best-time-to-buy-stock");
assertEqual("BANC", new MinimumWindowSubstring().minWindow("ADOBECODEBANC", "ABC"), "minimum-window-substring");
assertEqual(true, new PermutationInString().checkInclusion("ab", "eidbaooo"), "permutation-in-string");
assertEqual(4, new LongestRepeatingCharReplacement().characterReplacement("AABABBA", 1), "longest-repeating-char-replacement");
assertFloatEqual(12.75, new MaximumAverageSubarray().findMaxAverage([1,12,-5,-6,50,3], 4), "max-sum-subarray-k");
assertEqual(2, new MinimumSizeSubarraySum().minSubArrayLen(7, [2,3,1,2,4,3]), "minimum-size-subarray-sum");
assertEqual(3, new FruitIntoBaskets().totalFruit([0,1,2,2]), "fruit-into-baskets");
assertEqual(8, new SubarrayProductLessThanK().numSubarrayProductLessThanK([10,5,2,6], 100), "subarray-product-less-than-k");

const greedy = new GreedyAlgorithms();
assertEqual(1, greedy.findContentChildrenBruteForce([1,2,3], [1,1]), "assign-cookies brute force");
assertEqual(1, greedy.findContentChildren([1,2,3], [1,1]), "assign-cookies");
assertEqual(true, greedy.lemonadeChangeBruteForce([5,5,5,10,20]), "lemonade-change brute force");
assertEqual(true, greedy.lemonadeChange([5,5,5,10,20]), "lemonade-change");
assertEqual(2, greedy.jumpBruteForce([2,3,1,1,4]), "jump-game-ii brute force");
assertEqual(2, greedy.jump([2,3,1,1,4]), "jump-game-ii");
assertEqual(3, greedy.canCompleteCircuitBruteForce([1,2,3,4,5], [3,4,5,1,2]), "gas-station brute force");
assertEqual(3, greedy.canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]), "gas-station");
assertEqual(true, greedy.canPlaceFlowersBruteForce([1,0,0,0,1], 1), "can-place-flowers brute force");
assertEqual(true, greedy.canPlaceFlowers([1,0,0,0,1], 1), "can-place-flowers");
assertQueueValid(greedy.reconstructQueueBruteForce([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]));
assertQueueValid(greedy.reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]));
assertEqual("9,7,8", greedy.partitionLabelsBruteForce("ababcbacadefegdehijhklij").join(","), "partition-labels brute force");
assertEqual("9,7,8", greedy.partitionLabels("ababcbacadefegdehijhklij").join(","), "partition-labels");
assertEqual(true, greedy.checkValidStringBruteForce("(*))"), "valid-parenthesis-string brute force");
assertEqual(true, greedy.checkValidString("(*))"), "valid-parenthesis-string");
assertEqual(true, greedy.isNStraightHandBruteForce([1,2,3,6,2,3,4,7,8], 3), "hand-of-straights brute force");
assertEqual(true, greedy.isNStraightHand([1,2,3,6,2,3,4,7,8], 3), "hand-of-straights");
assertEqual(1, greedy.minAddToMakeValidBruteForce("())"), "minimum-add-parentheses brute force");
assertEqual(1, greedy.minAddToMakeValid("())"), "minimum-add-parentheses");

assertArrayEqual([1, 2], new TwoSumII().twoSum([2, 7, 11, 15], 9), "two-sum-ii");
assertEqual(true, new ValidPalindrome().isPalindrome("A man, a plan, a canal: Panama"), "valid-palindrome true");
assertEqual(false, new ValidPalindrome().isPalindrome("race a car"), "valid-palindrome false");
assertEqual(49, new ContainerWithMostWater().maxArea([1,8,6,2,5,4,8,3,7]), "container-with-most-water");
assertNestedArrayEqual([[-1, -1, 2], [-1, 0, 1]], new ThreeSum().threeSum([-1,0,1,2,-1,-4]), "three-sum");

const duplicateNumbers = [1, 1, 2];
assertEqual(2, new RemoveDuplicatesSorted().removeDuplicates(duplicateNumbers), "remove-duplicates-sorted");
assertArrayEqual([1, 2], duplicateNumbers.slice(0, 2), "remove-duplicates-sorted prefix");

const zeroes = [0, 1, 0, 3, 12];
new MoveZeroes().moveZeroes(zeroes);
assertArrayEqual([1, 3, 12, 0, 0], zeroes, "move-zeroes");

assertEqual(6, new TrappingRainWater().trap([0,1,0,2,1,0,1,3,2,1,2,1]), "trapping-rain-water");

const colors = [2, 0, 2, 1, 1, 0];
new SortColors().sortColors(colors);
assertArrayEqual([0, 0, 1, 1, 2, 2], colors, "sort-colors");

assertArrayEqual([0, 1, 9, 16, 100], new SquaresSortedArray().sortedSquares([-4,-1,0,3,10]), "squares-sorted-array");

const chars = ["h", "e", "l", "l", "o"];
new ReverseString().reverseString(chars);
assertArrayEqual(["o", "l", "l", "e", "h"], chars, "reverse-string");

console.log("All sliding-window, greedy, and two-pointers TypeScript checks passed.");
