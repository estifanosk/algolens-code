package algolens.slidingwindow;

public class SlidingWindowMain {
    public static void main(String[] args) {
        assertEquals(6, new MaxConsecutiveOnes().longestOnes(new int[]{1,1,1,0,0,0,1,1,1,1,0}, 2), "max-consecutive-ones");
        assertEquals(3, new LongestSubstringNoRepeat().lengthOfLongestSubstring("abcabcbb"), "longest-substring-no-repeat");
        assertEquals(5, new BestTimeToBuyStock().maxProfit(new int[]{7,1,5,3,6,4}), "best-time-to-buy-stock");
        assertEquals("BANC", new MinimumWindowSubstring().minWindow("ADOBECODEBANC", "ABC"), "minimum-window-substring");
        assertEquals(true, new PermutationInString().checkInclusion("ab", "eidbaooo"), "permutation-in-string");
        assertEquals(4, new LongestRepeatingCharReplacement().characterReplacement("AABABBA", 1), "longest-repeating-char-replacement");
        assertDoubleEquals(12.75, new MaximumAverageSubarray().findMaxAverage(new int[]{1,12,-5,-6,50,3}, 4), "max-sum-subarray-k");
        assertEquals(2, new MinimumSizeSubarraySum().minSubArrayLen(7, new int[]{2,3,1,2,4,3}), "minimum-size-subarray-sum");
        assertEquals(3, new FruitIntoBaskets().totalFruit(new int[]{0,1,2,2}), "fruit-into-baskets");
        assertEquals(8, new SubarrayProductLessThanK().numSubarrayProductLessThanK(new int[]{10,5,2,6}, 100), "subarray-product-less-than-k");

        System.out.println("All sliding-window Java checks passed.");
    }

    private static void assertEquals(Object expected, Object actual, String name) {
        if (!expected.equals(actual)) {
            throw new AssertionError(name + " expected " + expected + " but got " + actual);
        }
    }

    private static void assertDoubleEquals(double expected, double actual, String name) {
        if (Math.abs(expected - actual) > 0.00001) {
            throw new AssertionError(name + " expected " + expected + " but got " + actual);
        }
    }
}
